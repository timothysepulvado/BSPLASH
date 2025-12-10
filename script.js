document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURATION ---
    const colors = {
        darkBlue: '#0F1956',
        orange: '#ED4C14',
        bgGray: '#EBEBEB'
    };

    // --- 1. CLOCK ---
    const timeDisplay = document.getElementById('server-time');
    if (timeDisplay) {
        setInterval(() => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
            timeDisplay.textContent = `NYC // ${timeStr} GMT-5`;
        }, 1000);
    }

    // --- 2. LOTTIE SETUP ---
    const lottieContainer = document.getElementById('lottie-animation');
    const animationWrapper = document.querySelector('.animation-wrapper');

    let lottieAnim = null;
    if (lottieContainer && window.lottie) {
        lottieAnim = lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/json/dots.json'
        });
    }

    // --- 3. PHYSICS ENGINE ---
    const canvas = document.getElementById('physics-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;

    // State
    let mode = 'lottie'; // 'lottie' | 'physics'
    let mouse = { x: -1000, y: -1000 };
    let prevMouse = { x: -1000, y: -1000 };

    // Balls definition
    let balls = [
        { id: 0, x: 0, y: 0, vx: 0, vy: 0, color: colors.orange, docked: true, homeX: 0, homeY: 0, safeToDock: true },
        { id: 1, x: 0, y: 0, vx: 0, vy: 0, color: colors.darkBlue, docked: true, homeX: 0, homeY: 0, safeToDock: true },
        { id: 2, x: 0, y: 0, vx: 0, vy: 0, color: colors.orange, docked: true, homeX: 0, homeY: 0, safeToDock: true }
    ];

    if (canvas && ctx && animationWrapper) {

        // Resize Handler
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Calculate "Home" based on the Lottie Container's visual position
            const rect = animationWrapper.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            // Adjust Y to match where dots visually appear in Lottie (slightly above center)
            const centerY = rect.top + (rect.height * 0.4);
            const spacing = 28; // Slightly wider to match Lottie dot spacing

            balls[0].homeX = centerX - spacing;
            balls[0].homeY = centerY;

            balls[1].homeX = centerX;
            balls[1].homeY = centerY;

            balls[2].homeX = centerX + spacing;
            balls[2].homeY = centerY;

            // Force docked balls to home
            balls.forEach(b => {
                if (b.docked) { b.x = b.homeX; b.y = b.homeY; }
            });
        };

        window.addEventListener('resize', resizeCanvas);
        // Initial sizing delay to ensure layout is computed
        setTimeout(resizeCanvas, 100);

        // Track Mouse
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // Track Touch (for mobile)
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        });

        window.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        });

        window.addEventListener('touchend', () => {
            // Move mouse off-screen when touch ends
            mouse.x = -1000;
            mouse.y = -1000;
        });

        // ANIMATION LOOP
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate Mouse Momentum
            const mouseVx = mouse.x - prevMouse.x;
            const mouseVy = mouse.y - prevMouse.y;
            prevMouse.x = mouse.x;
            prevMouse.y = mouse.y;

            // Physics Constants
            const friction = 0.99;
            const ballRadius = 8; // Match Lottie dots
            const mouseHitRadius = 30;
            const magneticRadius = 80; // Larger zone of influence
            const snapDistance = 12;
            const snapSpeedLimit = 6;

            if (mode === 'lottie') {
                // === MODE: LOTTIE ===
                // Check for breakout collision

                // Use center ball home as reference
                const dx = mouse.x - balls[1].homeX;
                const dy = mouse.y - balls[1].homeY;
                const dist = Math.sqrt(dx*dx + dy*dy);

                if (dist < 40) {
                    // TRIGGER BREAKOUT
                    mode = 'physics';

                    // Visual Switch
                    canvas.classList.add('active');
                    animationWrapper.classList.add('hidden');
                    if (lottieAnim) lottieAnim.pause();

                    // Explode balls
                    balls.forEach(b => {
                        b.docked = false;
                        b.safeToDock = false;
                        // Initial kick
                        b.vx = (Math.random() - 0.5) * 10 + (mouseVx * 0.5);
                        b.vy = (Math.random() - 0.5) * 10 + (mouseVy * 0.5);
                        setTimeout(() => { b.safeToDock = true; }, 1000);
                    });
                }

            } else {
                // === MODE: PHYSICS ===

                balls.forEach(ball => {
                    // 1. Mouse Interaction
                    const dx = mouse.x - ball.x;
                    const dy = mouse.y - ball.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);

                    if (dist < mouseHitRadius) {
                        ball.docked = false;
                        ball.safeToDock = false;

                        const kickX = mouseVx !== 0 ? mouseVx * 1.2 : (Math.random() - 0.5) * 15;
                        const kickY = mouseVy !== 0 ? mouseVy * 1.2 : (Math.random() - 0.5) * 15;

                        ball.vx = kickX;
                        ball.vy = kickY;
                        setTimeout(() => { ball.safeToDock = true; }, 800);
                    }

                    // 2. Physics & Docking
                    if (!ball.docked) {
                        // Gravity Well - "thick syrup" effect
                        if (ball.safeToDock) {
                            const homeDx = ball.homeX - ball.x;
                            const homeDy = ball.homeY - ball.y;
                            const distToHome = Math.sqrt(homeDx*homeDx + homeDy*homeDy);

                            if (distToHome < magneticRadius) {
                                // Calculate how deep into the magnetic field (0 at edge, 1 at center)
                                const fieldStrength = 1 - (distToHome / magneticRadius);

                                // Progressive pull force - stronger as ball gets closer
                                const pullForce = 0.02 + (fieldStrength * 0.04);
                                ball.vx += homeDx * pullForce;
                                ball.vy += homeDy * pullForce;

                                // Progressive drag - like moving through syrup (thicker near center)
                                const drag = 0.92 - (fieldStrength * 0.15); // 0.92 at edge, 0.77 at center
                                ball.vx *= drag;
                                ball.vy *= drag;
                            }

                            const speed = Math.sqrt(ball.vx*ball.vx + ball.vy*ball.vy);
                            if (distToHome < snapDistance && speed < snapSpeedLimit) {
                                ball.docked = true;
                                ball.x = ball.homeX;
                                ball.y = ball.homeY;
                                ball.vx = 0;
                                ball.vy = 0;
                            }
                        }

                        // Move & Wall Bounce
                        if (!ball.docked) {
                            ball.x += ball.vx;
                            ball.y += ball.vy;
                            ball.vx *= friction;
                            ball.vy *= friction;

                            if (ball.x < ballRadius) { ball.x = ballRadius; ball.vx *= -0.8; }
                            if (ball.x > canvas.width - ballRadius) { ball.x = canvas.width - ballRadius; ball.vx *= -0.8; }
                            if (ball.y < ballRadius) { ball.y = ballRadius; ball.vy *= -0.8; }
                            if (ball.y > canvas.height - ballRadius) { ball.y = canvas.height - ballRadius; ball.vy *= -0.8; }
                        }
                    } else {
                        // Stay Home
                        ball.x = ball.homeX;
                        ball.y = ball.homeY;
                    }

                    // Draw
                    ctx.beginPath();
                    ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
                    ctx.fillStyle = ball.color;
                    ctx.fill();
                    ctx.closePath();
                });

                // Check for Return
                const allDocked = balls.every(b => b.docked);
                if (allDocked) {
                    mode = 'lottie';
                    canvas.classList.remove('active');
                    animationWrapper.classList.remove('hidden');
                    if (lottieAnim) lottieAnim.play();
                }
            }

            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }

    // --- 4. COOKIE CONSENT BANNER ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieConsent && cookieBanner) {
        // Show banner after a short delay
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('show');
            setTimeout(() => {
                cookieBanner.classList.add('hidden');
            }, 300);
            // Enable analytics here if needed
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.classList.remove('show');
            setTimeout(() => {
                cookieBanner.classList.add('hidden');
            }, 300);
        });
    }

    // --- 5. FORM HANDLING ---
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = emailForm.querySelector('.submit-btn');
            const input = emailForm.querySelector('input');
            const message = emailForm.querySelector('.form-message');
            const email = input.value.trim();

            if (!email) return;

            // UI Loading State
            btn.classList.add('loading');
            btn.disabled = true;
            input.disabled = true;

            try {
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                });

                if (response.ok) {
                    // Success UI
                    btn.classList.remove('loading');
                    btn.classList.add('success');
                    message.classList.add('visible');
                    input.value = '';
                } else {
                    throw new Error('Failed to subscribe');
                }
            } catch (error) {
                console.error(error);
                // Reset UI on error
                btn.classList.remove('loading');
                btn.disabled = false;
                input.disabled = false;
                alert('Something went wrong. Please try again.');
            }
        });
    }
});
