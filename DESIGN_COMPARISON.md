# BrandStudios.AI - Design Comparison

## Profile A (main branch - live on brandstudios.ai)

### Fonts
- PP Editorial New (custom @font-face woff2 files)
- Poppins (Google Fonts)

### Typography
- Fixed sizes (64px headline, 24px tagline)
- Fixed line-heights

### Layout
- Simple flex column
- Fixed padding (40px 20px, padding-bottom: 220px)

### Footer
- PNG logo image (`assets/images/logo.png`)
- Full-width image display

### Animation
- Lottie only (dots.json)
- Static, no interaction

### Header
- None - just legal nav top-left

### Interactive Elements
- None - static page

### Responsive
- Basic breakpoints (1024px, 768px)
- Simple font-size reductions

### Extras
- Cookie consent banner
- Legal nav (Privacy/Terms)

---

## Profile B (tim-dev branch - new neo-modernist design)

### Fonts
- Manrope (sans-serif) - UI elements, form
- Playfair Display (serif) - headlines, tagline
- JetBrains Mono (monospace) - clock display

### Typography
- Fluid `clamp()` sizes:
  - Headline: `clamp(32px, 5vw, 72px)`
  - Tagline: `clamp(16px, 2vw, 20px)`
  - Giant logo: `15vw`

### Layout
- Full-height flex with z-index layers
- Multiple overlay layers (texture, canvas, anchors)

### Footer
- Giant text logo (`BrandStudios.AI` at 15vw)
- Hairline vertical divider animation
- Slide-up animation on load

### Animation
- Lottie (dots.json) as default
- Physics canvas (ball pit) on hover/touch
- Mode switching between Lottie and Physics

### Header
- "BRANDSTUDIOS.AI" branding (left)
- Live NYC clock with GMT-5 (right)
- Slide-down animation on load

### Interactive Elements
- Physics balls triggered by mouse hover
- Touch support for mobile
- Balls bounce off walls, return to home position
- Underline animation on "Unmistakably Human" hover

### Responsive
- Enhanced breakpoints:
  - 768px (tablet)
  - 480px (phone)
- More granular adjustments for each element

### Extras
- Cookie consent banner (preserved)
- Legal nav (preserved)
- Texture overlay (noise filter)
- Neo-modernist corner crosses
- Form loading/success states with spinner/checkmark

---

## Key Differences Summary

| Element | A (Current) | B (New) |
|---------|-------------|---------|
| Custom font files | Yes (PP Editorial) | No (Google Fonts) |
| Logo | PNG image | Text-based (15vw) |
| Clock | No | Yes (live NYC time) |
| Physics | No | Yes (3 bouncing balls) |
| Texture overlay | No | Yes (noise filter) |
| Corner anchors | No | Yes (neo-modernist crosses) |
| Touch support | No | Yes |
| Typography | Fixed px | Fluid clamp() |
| Form states | Basic | Loading/Success icons |

---

## Profile B - Base HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BrandStudios.AI - Coming Soon</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- 1. TEXTURE OVERLAY -->
    <div class="texture-overlay"></div>

    <!-- 2. PHYSICS CANVAS (The Ball Pit) -->
    <canvas id="physics-canvas"></canvas>

    <!-- 3. NEO-MODERNIST CORNER ANCHORS -->
    <div class="neo-anchors">
        <div class="corner-plus top-left"></div>
        <div class="corner-plus top-right"></div>
        <div class="corner-plus bottom-left"></div>
        <div class="corner-plus bottom-right"></div>
    </div>

    <!-- 4. TOP DATA HEADER -->
    <header class="neo-header">
        <div class="brand-name">BRANDSTUDIOS.AI</div>
        <div class="server-time" id="server-time">NYC // 00:00:00 GMT-5</div>
    </header>

    <!-- 5. MAIN CONTENT -->
    <div class="splash-container">

        <!-- Animation Container (Lottie sits here) -->
        <div class="animation-wrapper">
            <div id="lottie-animation"></div>
        </div>

        <!-- Main Headline -->
        <h1 class="headline">
            The Future of Brand Creativity is<br>
            Intelligent and <span class="orange-text italic-group">Unmistakably Human.</span><br>
            <span class="coming-soon">Coming Soon...</span>
        </h1>

        <!-- Email Signup -->
        <form class="email-form" action="#" method="post">
            <div class="email-input-wrapper">
                <input type="email" name="email" placeholder="ENTER EMAIL ADDRESS" required>

                <button type="submit" class="submit-btn" aria-label="Submit">
                    <svg class="icon-arrow" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7071 8.07106C18.0976 7.68054 18.0976 7.04737 17.7071 6.65685L11.3431 0.292885C10.9526 -0.0976396 10.3195 -0.0976396 9.92893 0.292885C9.53841 0.683409 9.53841 1.31657 9.92893 1.7071L15.5858 7.36395L9.92893 13.0208C9.53841 13.4113 9.53841 14.0445 9.92893 14.435C10.3195 14.8255 10.9526 14.8255 11.3431 14.435L17.7071 8.07106ZM0 7.36395V8.36395H17V7.36395V6.36395H0V7.36395Z" fill="white"/>
                    </svg>
                    <div class="icon-spinner"></div>
                    <div class="icon-check">✓</div>
                </button>
            </div>
            <div class="form-message">Thanks! We'll be in touch.</div>
        </form>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="hairline-vertical"></div>
        <p class="tagline">Brand Orchestration with <span class="orange-text">Human Intelligence</span></p>

        <div class="logo-container">
            <h2 class="giant-logo">BrandStudios<span class="orange-text">.AI</span></h2>
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

---

## Profile B - Base CSS (provided)

**~290 lines - This is the BASE, missing some elements we need to add**

```css
/* --- VARIABLES --- */
:root {
    --dark-blue: #0F1956;
    --orange: #ED4C14;
    --bg-gray: #EBEBEB;
    --font-sans: 'Manrope', sans-serif;
    --font-serif: 'Playfair Display', serif;
    --font-mono: 'JetBrains Mono', monospace;
}

/* --- GLOBAL SETUP --- */
*, *::before, *::after { box-sizing: border-box; }

body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-gray);
    font-family: var(--font-sans);
    overflow: hidden;
    color: var(--dark-blue);
}

::selection {
    background-color: var(--orange);
    color: white;
}

/* --- 1. TEXTURE OVERLAY --- */
.texture-overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.03;
    z-index: 50;
    mix-blend-mode: multiply;
    background-image: url("data:image/svg+xml,..."); /* noise filter */
}

/* --- 2. PHYSICS CANVAS --- */
#physics-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 45;
    opacity: 0;
    transition: opacity 0.3s ease;
}
#physics-canvas.active { opacity: 1; }

/* --- 3. NEO-ANCHORS (Corner Crosses) --- */
.neo-anchors { ... }
.corner-plus { ... }
.top-left, .top-right, .bottom-left, .bottom-right { ... }

/* --- 4. HEADER --- */
.neo-header { ... }
.server-time { font-family: var(--font-mono); opacity: 0.6; }

/* --- 5. MAIN CONTAINER --- */
.splash-container { height: 100vh; flex-direction: column; ... }
.animation-wrapper { width: 80px; height: 80px; ... }
.animation-wrapper.hidden { opacity: 0; transform: scale(0.5); }

/* Headline */
.headline { font-size: clamp(32px, 5vw, 72px); ... }
.orange-text { color: var(--orange); }
.italic-group { font-style: italic; ... }
.italic-group::after { /* underline animation on hover */ }
.coming-soon { font-size: 0.5em; ... }

/* Form */
.email-form { max-width: 400px; ... }
.email-input-wrapper { ... }
.email-form input { border-bottom: 1px solid rgba(15, 25, 86, 0.3); ... }
.submit-btn { position: absolute; right: 0; ... }
.form-message { ... }

/* --- 6. FOOTER --- */
.footer { position: absolute; bottom: 0; ... }
.hairline-vertical { animation: growLine 1s ease 0.8s forwards; }
.tagline { font-size: clamp(16px, 2vw, 20px); ... }
.giant-logo { font-size: 15vw; ... }

/* --- ANIMATIONS --- */
@keyframes fadeInUp { ... }
@keyframes fadeIn { ... }
@keyframes slideDown { ... }
@keyframes slideUpLogo { ... }
@keyframes growLine { ... }
@keyframes spin { ... }

/* Icons */
.icon-spinner { ... }
.icon-check { ... }
.icon-arrow { ... }

/* State classes for button */
.submit-btn.loading .icon-arrow { display: none; }
.submit-btn.loading .icon-spinner { display: block; }
.submit-btn.success .icon-check { display: block; }

/* Responsive Tweaks */
@media (max-width: 768px) {
    .server-time { display: none; }
    .neo-anchors { padding: 12px; }
    .headline { margin-bottom: 40px; }
}
```

---

## Profile B - ADDITIONS NEEDED (from Profile A / our implementation)

These must be added to the base CSS:

### 1. Legal Nav Styles
```css
.legal-nav {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 100;
}
.legal-nav a {
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--dark-blue);
    text-decoration: none;
    opacity: 0.35;
    transition: opacity 0.2s ease;
}
.legal-nav a:hover { opacity: 0.7; }
.legal-nav .divider {
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--dark-blue);
    opacity: 0.25;
}
```

### 2. Brand Name Offset
```css
.brand-name {
    margin-left: 100px;
}
```

### 3. Lottie Container Sizing
```css
#lottie-animation {
    width: 100%;
    height: 100%;
}
```

### 4. Logo Container
```css
.logo-container {
    width: 100%;
    overflow: hidden;
}
```

### 5. Cookie Banner Styles
```css
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--dark-blue);
    padding: 16px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    z-index: 1000;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}
.cookie-banner.show { transform: translateY(0); }
.cookie-banner.hidden { display: none; }
.cookie-banner p { font-family: var(--font-sans); font-size: 14px; color: white; margin: 0; }
.cookie-banner a { color: var(--orange); text-decoration: none; }
.cookie-buttons { display: flex; gap: 10px; flex-shrink: 0; }
.cookie-btn { font-family: var(--font-sans); font-size: 14px; font-weight: 500; padding: 8px 20px; border: none; border-radius: 4px; cursor: pointer; }
.cookie-btn.accept { background-color: var(--orange); color: white; }
.cookie-btn.decline { background-color: transparent; color: white; border: 1px solid rgba(255, 255, 255, 0.3); }
```

### 6. Enhanced Mobile Breakpoints
```css
@media (max-width: 768px) {
    /* Additional tweaks */
    .brand-name { margin-left: 80px; }
    .splash-container { padding: 20px; padding-bottom: 120px; }
    .animation-wrapper { width: 60px; height: 60px; margin-bottom: 20px; }
    .email-form { max-width: 300px; padding: 0 10px; }
    .footer { padding-bottom: 10px; }
    .giant-logo { font-size: 12vw; }
    .cookie-banner { flex-direction: column; text-align: center; }
    .legal-nav { top: 12px; left: 12px; }
    .neo-header { padding: 16px 20px; }
}

@media (max-width: 480px) {
    .headline { font-size: clamp(24px, 7vw, 32px); }
    .coming-soon { font-size: 0.6em; margin-top: 16px; }
    .giant-logo { font-size: 10vw; }
    .tagline { font-size: 14px; padding: 0 10px; }
    .brand-name { font-size: 10px; margin-left: 70px; }
}
```

---

## Profile B - Complete CSS (style.css)

*Current file: 535 lines - includes base + all additions*

---

## Profile B - Base JavaScript (provided)

**~220 lines - This is the BASE, missing some elements we need to add**

```javascript
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

    // Balls definition (3 balls: orange, darkBlue, orange)
    let balls = [
        { id: 0, x: 0, y: 0, vx: 0, vy: 0, color: colors.orange, docked: true, homeX: 0, homeY: 0, safeToDock: true },
        { id: 1, x: 0, y: 0, vx: 0, vy: 0, color: colors.darkBlue, docked: true, homeX: 0, homeY: 0, safeToDock: true },
        { id: 2, x: 0, y: 0, vx: 0, vy: 0, color: colors.orange, docked: true, homeX: 0, homeY: 0, safeToDock: true }
    ];

    if (canvas && ctx && animationWrapper) {

        // Resize Handler - sets canvas size and ball home positions
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Calculate home positions based on Lottie container
            const rect = animationWrapper.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            const centerY = rect.top + (rect.height / 2);
            const spacing = 24;
            // Set home positions for each ball
            balls[0].homeX = centerX - spacing; balls[0].homeY = centerY;
            balls[1].homeX = centerX; balls[1].homeY = centerY;
            balls[2].homeX = centerX + spacing; balls[2].homeY = centerY;
            // Force docked balls to home
            balls.forEach(b => { if (b.docked) { b.x = b.homeX; b.y = b.homeY; } });
        };

        window.addEventListener('resize', resizeCanvas);
        setTimeout(resizeCanvas, 100);

        // Track Mouse (desktop only in base)
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // ANIMATION LOOP
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Physics Constants
            const friction = 0.99;
            const ballRadius = 6;
            const mouseHitRadius = 30;
            const magneticRadius = 60;
            const snapDistance = 15;
            const snapSpeedLimit = 8;

            if (mode === 'lottie') {
                // Check for breakout collision (mouse near center)
                // If close, trigger physics mode
            } else {
                // MODE: PHYSICS
                // - Mouse interaction (kick balls)
                // - Gravity well (pull back to home)
                // - Wall bounce
                // - Draw balls
                // - Check if all docked → return to lottie mode
            }

            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }

    // --- 4. FORM HANDLING ---
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', async (e) => {
            // Loading state, fetch /api/subscribe, success/error handling
        });
    }
});
```

---

## Profile B - ADDITIONS NEEDED for JavaScript

These must be added to the base JS:

### 1. Touch Support (for mobile physics)
```javascript
// Add after mousemove listener:

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
```

### 2. Cookie Consent Banner Handling
```javascript
// Add after form handling:

// --- 5. COOKIE CONSENT BANNER ---
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
```

---

## Profile B - Complete JavaScript (script.js)

*Current file: 325 lines - includes base + all additions*

Key sections:
1. Clock - Live NYC time display
2. Lottie Setup - Animation loader
3. Physics Engine - Ball pit with collision detection + touch support
4. Cookie Consent - Accept/decline with localStorage
5. Form Handling - Email submission with loading/success states

---

---

# HANDOFF STATUS

## Current State (tim-dev branch)

All files are complete and ready:

| File | Status | Lines |
|------|--------|-------|
| `index.html` | Complete | ~100 |
| `style.css` | Complete | 535 |
| `script.js` | Complete | 325 |

## What's Implemented

- Neo-modernist design with physics balls
- Live NYC clock in header
- Touch support for mobile
- Legal nav (Privacy/Terms) preserved
- Cookie consent banner preserved
- Fluid typography with clamp()
- Giant text logo footer
- All animations working

## To Resume Work

1. `cd /Users/timothysepulvado/Desktop/BSPLASH`
2. `git checkout tim-dev`
3. `vercel dev --yes`
4. Open http://localhost:3000

## Files Reference

- **Profile A** = main branch (live on brandstudios.ai) - original design
- **Profile B** = tim-dev branch - new neo-modernist physics design

## Next Steps (if any)

- Test on mobile devices
- Review animations/timing
- When ready: merge tim-dev → main and deploy
1. Clock - Live NYC time display
2. Lottie Setup - Animation loader
3. Physics Engine - Ball pit with collision detection
4. Cookie Consent - Accept/decline localStorage
5. Form Handling - Email submission with states

---

## Notes

- Profile B requires the legal nav and cookie banner to be preserved
- Profile B base HTML does NOT include these - they need to be added
- Current tim-dev index.html includes both legal nav and cookie banner
