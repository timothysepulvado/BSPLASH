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

    // Email form handling
    const emailForm = document.querySelector('.email-form');

    emailForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = emailForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        const wrapper = emailForm.querySelector('.email-input-wrapper');

        if (email) {
            // Show loading state
            const originalHTML = wrapper.innerHTML;
            wrapper.innerHTML = '<span style="color: var(--dark-blue);">Submitting...</span>';

            try {
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });

                if (response.ok) {
                    wrapper.innerHTML = '<span style="color: var(--orange);">Thanks! We\'ll be in touch.</span>';
                } else {
                    throw new Error('Failed to subscribe');
                }
            } catch (error) {
                console.error('Subscription error:', error);
                wrapper.innerHTML = '<span style="color: var(--orange);">Something went wrong. Please try again.</span>';

                // Reset after 3 seconds
                setTimeout(() => {
                    wrapper.innerHTML = originalHTML;
                }, 3000);
            }
        }
    });
});
