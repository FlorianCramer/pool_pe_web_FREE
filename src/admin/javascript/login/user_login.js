// Festgelegte Login-Daten
const VALID_CREDENTIALS = {
    username: "admin",
    password: "freibad2024"
};

// Session-Timeout in Minuten
const SESSION_TIMEOUT = 30;

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
                // Login erfolgreich
                const sessionData = {
                    loggedIn: true,
                    expiry: new Date().getTime() + (SESSION_TIMEOUT * 60 * 1000)
                };
                localStorage.setItem('authSession', JSON.stringify(sessionData));
                window.location.href = 'dashboard.html';
            } else {
                // Login fehlgeschlagen
                document.getElementById('loginError').style.display = 'block';
            }
        });
    }
});