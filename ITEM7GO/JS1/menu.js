document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn-menu');
    const navMenu = document.getElementById('nav-menu-menu');

    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
});
