document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // Perform login operation with email and password
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = {
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                phone: document.getElementById('phone').value,
                street: document.getElementById('street').value,
                apartment: document.getElementById('apartment').value,
                zip: document.getElementById('zip').value,
                city: document.getElementById('city').value,
                country: document.getElementById('country').value
            };
            // Perform registration operation with formData
        });
    }
});
