// FOR LOGO
document.addEventListener('visibilitychange', function() {
    const spinningElements = document.querySelectorAll('.logo img, .header-logo img');
    spinningElements.forEach(el => {
        el.style.animationPlayState = 'running';
        // Restart animation by removing and re-adding the class
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = '';
        }, 10);
    });
});

