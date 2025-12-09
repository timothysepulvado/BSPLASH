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

    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = emailForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (email) {
            // Show success feedback
            const wrapper = emailForm.querySelector('.email-input-wrapper');
            wrapper.innerHTML = '<span style="color: var(--orange); font-style: italic;">Thanks! We\'ll be in touch.</span>';

            // Here you would typically send the email to your backend
            // For now, just log it
            console.log('Email submitted:', email);
        }
    });
});
