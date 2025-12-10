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

        const nameInput = emailForm.querySelector('input[name="name"]');
        const emailInput = emailForm.querySelector('input[type="email"]');
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const formFields = emailForm.querySelector('.form-fields');

        if (email && name) {
            // Show loading state
            const originalHTML = formFields.innerHTML;
            formFields.innerHTML = '<span style="color: var(--dark-blue);">Submitting...</span>';

            try {
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, name }),
                });

                if (response.ok) {
                    formFields.innerHTML = '<span style="color: var(--orange);">Thanks! We\'ll be in touch.</span>';
                } else {
                    throw new Error('Failed to subscribe');
                }
            } catch (error) {
                console.error('Subscription error:', error);
                formFields.innerHTML = '<span style="color: var(--orange);">Something went wrong. Please try again.</span>';

                // Reset after 3 seconds
                setTimeout(() => {
                    formFields.innerHTML = originalHTML;
                }, 3000);
            }
        }
    });
});
