document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn-reservation');
    const navMenu = document.getElementById('nav-menu-reservation');

    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });

    // Reservation form steps
    const reservationForm = document.getElementById('reservationForm');
    const branchForm = document.getElementById('branchForm');
    const tableForm = document.getElementById('tableForm');
    const confirmationForm = document.getElementById('confirmationForm');
    const paymentForm = document.getElementById('paymentForm');
    const finalConfirmation = document.getElementById('finalConfirmation');

    let reservationData = {};

    // Step 1: Submit reservation details
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        reservationData.name = document.getElementById('name').value;
        reservationData.email = document.getElementById('email').value;
        reservationData.phone = document.getElementById('phone').value;
        reservationData.date = document.getElementById('date').value;
        reservationData.time = document.getElementById('time').value;
        reservationData.guests = document.getElementById('guests').value;
        reservationData.requests = document.getElementById('requests').value;

        reservationForm.classList.add('hidden');
        branchForm.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    // Step 2: Branch selection
    document.querySelectorAll('.select-branch-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const branchOption = this.parentElement;
            reservationData.branch = branchOption.getAttribute('data-branch');
            reservationData.basePrice = parseInt(branchOption.getAttribute('data-price'));

            branchForm.classList.add('hidden');
            tableForm.classList.remove('hidden');
            populateTableOptions();
            window.scrollTo(0, 0);
        });
    });

    // Back to reservation
    document.getElementById('backToReservation').addEventListener('click', function() {
        branchForm.classList.add('hidden');
        reservationForm.classList.remove('hidden');
    });

    // Populate table options based on guests
    function populateTableOptions() {
        const tableOptions = document.getElementById('tableOptions');
        tableOptions.innerHTML = '';

        const tables = [
            { type: 'Standard Table', price: 0, capacity: '2-4 guests' },
            { type: 'VIP Table', price: 10000, capacity: '4-6 guests' },
            { type: 'Private Room', price: 20000, capacity: '6-8 guests' }
        ];

        tables.forEach(table => {
            const div = document.createElement('div');
            div.className = 'table-option';
            div.innerHTML = `
                <h3>${table.type}</h3>
                <p>Capacity: ${table.capacity}</p>
                <p>Additional Cost: ₦${table.price}</p>
                <button class="select-table-btn" data-type="${table.type}" data-price="${table.price}">Select</button>
            `;
            tableOptions.appendChild(div);
        });

        // Add event listeners for table selection
        document.querySelectorAll('.select-table-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                reservationData.tableType = this.getAttribute('data-type');
                reservationData.tablePrice = parseInt(this.getAttribute('data-price'));
                reservationData.totalPrice = reservationData.basePrice + reservationData.tablePrice;

                tableForm.classList.add('hidden');
                confirmationForm.classList.remove('hidden');
                populateConfirmation();
                window.scrollTo(0, 0);
            });
        });
    }

    // Back to branch
    document.getElementById('backToBranch').addEventListener('click', function() {
        tableForm.classList.add('hidden');
        branchForm.classList.remove('hidden');
    });

    // Populate confirmation
    function populateConfirmation() {
        const summary = document.getElementById('reservationSummary');
        summary.innerHTML = `
            <p><strong>Name:</strong> ${reservationData.name}</p>
            <p><strong>Email:</strong> ${reservationData.email}</p>
            <p><strong>Phone:</strong> ${reservationData.phone}</p>
            <p><strong>Date:</strong> ${reservationData.date}</p>
            <p><strong>Time:</strong> ${reservationData.time}</p>
            <p><strong>Guests:</strong> ${reservationData.guests}</p>
            <p><strong>Branch:</strong> ${reservationData.branch.charAt(0).toUpperCase() + reservationData.branch.slice(1)}</p>
            <p><strong>Table Type:</strong> ${reservationData.tableType}</p>
            <p><strong>Special Requests:</strong> ${reservationData.requests || 'None'}</p>
        `;
        document.getElementById('totalPrice').textContent = `₦${reservationData.totalPrice}`;
    }

    // Confirm reservation
    document.getElementById('confirmReservation').addEventListener('click', function() {
        confirmationForm.classList.add('hidden');
        paymentForm.classList.remove('hidden');
        document.getElementById('paymentAmount').textContent = `₦${reservationData.totalPrice}`;
        window.scrollTo(0, 0);
    });

    // Back to table
    document.getElementById('backToTable').addEventListener('click', function() {
        confirmationForm.classList.add('hidden');
        tableForm.classList.remove('hidden');
    });

    // Complete reservation
    document.getElementById('completeReservation').addEventListener('click', function() {
        paymentForm.classList.add('hidden');
        finalConfirmation.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    // Back to confirmation
    document.getElementById('backToConfirmation').addEventListener('click', function() {
        paymentForm.classList.add('hidden');
        confirmationForm.classList.remove('hidden');
    });

    // New reservation
    document.getElementById('newReservation').addEventListener('click', function() {
        finalConfirmation.classList.add('hidden');
        reservationForm.classList.remove('hidden');
        reservationForm.reset();
        reservationData = {};
    });
});
