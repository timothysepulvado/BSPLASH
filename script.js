document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lottie animation
    const animationContainer = document.getElementById('lottie-animation');

    const anim = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/json/dots.json'
    });

    // Cookie banner handling
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieConsent && cookieBanner) {
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

    // Email form handling
    const emailForm = document.querySelector('.email-form');

    emailForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const firstName = emailForm.querySelector('input[name="firstName"]').value.trim();
        const lastName = emailForm.querySelector('input[name="lastName"]').value.trim();
        const email = emailForm.querySelector('input[name="email"]').value.trim();
        const phone = emailForm.querySelector('input[name="phone"]').value.trim();

        const submitBtn = emailForm.querySelector('.submit-btn-new');
        const successMessage = emailForm.querySelector('.success-message');

        if (email && firstName && lastName) {
            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.querySelector('.btn-text').textContent = 'PROCESSING';

            try {
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        firstName,
                        lastName,
                        phone
                    }),
                });

                if (response.ok) {
                    submitBtn.classList.remove('loading');
                    submitBtn.classList.add('success');
                    submitBtn.querySelector('.btn-text').textContent = 'SENT';
                    successMessage.classList.add('show');
                } else {
                    throw new Error('Failed to subscribe');
                }
            } catch (error) {
                console.error('Subscription error:', error);
                submitBtn.classList.remove('loading');
                submitBtn.querySelector('.btn-text').textContent = 'TRY AGAIN';

                // Reset after 3 seconds
                setTimeout(() => {
                    submitBtn.querySelector('.btn-text').textContent = 'REQUEST ACCESS';
                }, 3000);
            }
        }
    });
});
