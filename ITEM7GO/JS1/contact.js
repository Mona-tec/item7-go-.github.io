document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn-contact');
    const navMenu = document.getElementById('nav-menu-contact');

    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            formMessage.textContent = 'Please fill in all required fields.';
            formMessage.className = 'form-message error';
            formMessage.classList.remove('hidden');
            return;
        }

        // Construct WhatsApp message
        let whatsappMessage = `Hello, I am ${name}.\n\n`;
        whatsappMessage += `Email: ${email}\n`;
        if (phone) whatsappMessage += `Phone: ${phone}\n`;
        whatsappMessage += `Subject: ${subject}\n\n`;
        whatsappMessage += `Message:\n${message}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp URL
        const whatsappURL = `https://wa.me/08162984899?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');

        // Show success message
        formMessage.textContent = 'Redirecting to WhatsApp...';
        formMessage.className = 'form-message success';
        formMessage.classList.remove('hidden');

        // Optionally reset form after a delay
        setTimeout(() => {
            contactForm.reset();
            formMessage.classList.add('hidden');
        }, 3000);
    });
});
