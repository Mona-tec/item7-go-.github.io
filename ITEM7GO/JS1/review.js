document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn-review');
    const navMenu = document.getElementById('nav-menu-review');

    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });

    // Star rating functionality
    document.querySelectorAll('.stars').forEach(starsContainer => {
        const inputs = starsContainer.querySelectorAll('input');
        const labels = starsContainer.querySelectorAll('label');

        labels.forEach((label, index) => {
            label.addEventListener('click', function() {
                const rating = index + 1;
                inputs.forEach((input, i) => {
                    input.checked = i === index;
                });
                labels.forEach((lbl, i) => {
                    if (i <= index) {
                        lbl.classList.add('highlighted');
                    } else {
                        lbl.classList.remove('highlighted');
                    }
                });
            });
        });
    });

    // Load and display reviews
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        const reviewsList = document.getElementById('reviews-list');
        reviewsList.innerHTML = '';

        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.innerHTML = `
                <h3>${review.name}</h3>
                <div class="ratings">
                    <div class="rating">
                        <span>Restaurant:</span>
                        <div class="stars-display">${'★'.repeat(review.restaurantRating)}${'☆'.repeat(5 - review.restaurantRating)}</div>
                    </div>
                    <div class="rating">
                        <span>Dishes:</span>
                        <div class="stars-display">${'★'.repeat(review.dishesRating)}${'☆'.repeat(5 - review.dishesRating)}</div>
                    </div>
                    <div class="rating">
                        <span>Services:</span>
                        <div class="stars-display">${'★'.repeat(review.servicesRating)}${'☆'.repeat(5 - review.servicesRating)}</div>
                    </div>
                </div>
                <div class="feedback"><strong>Feedback:</strong> ${review.feedback}</div>
                ${review.suggestions ? `<div class="suggestions"><strong>Suggestions:</strong> ${review.suggestions}</div>` : ''}
                <div class="timestamp">${new Date(review.timestamp).toLocaleString()}</div>
            `;
            reviewsList.appendChild(reviewItem);
        });
    }

    // Submit review
    document.getElementById('reviewForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const restaurantRating = document.querySelector('input[name="restaurant-rating"]:checked')?.value || 0;
        const dishesRating = document.querySelector('input[name="dishes-rating"]:checked')?.value || 0;
        const servicesRating = document.querySelector('input[name="services-rating"]:checked')?.value || 0;
        const feedback = document.getElementById('feedback').value;
        const suggestions = document.getElementById('suggestions').value;

        const review = {
            name,
            restaurantRating: parseInt(restaurantRating),
            dishesRating: parseInt(dishesRating),
            servicesRating: parseInt(servicesRating),
            feedback,
            suggestions,
            timestamp: new Date().toISOString()
        };

        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Reset form
        this.reset();
        document.querySelectorAll('.stars input').forEach(input => input.checked = false);
        document.querySelectorAll('.stars label').forEach(label => label.classList.remove('highlighted'));

        // Reload reviews
        loadReviews();

        alert('Thank you for your review!');
    });

    // Load reviews on page load
    loadReviews();
});
