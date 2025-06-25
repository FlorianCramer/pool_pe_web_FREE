document.addEventListener('DOMContentLoaded', function () {
    function checkSession() {
        const sessionData = JSON.parse(localStorage.getItem('authSession'));
        const now = new Date().getTime();

        if (!sessionData || !sessionData.loggedIn || now > sessionData.expiry) {
            localStorage.removeItem('authSession');
            window.location.href = 'login.html';
        }
    }

    function updateLogoutTimer() {
        const sessionData = JSON.parse(localStorage.getItem('authSession'));
        if (!sessionData) return;

        const now = new Date().getTime();
        const remainingTime = sessionData.expiry - now;

        if (remainingTime <= 0) {
            logout();
            return;
        }

        const minutes = Math.floor(remainingTime / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById('logoutTimer').textContent =
            `Session endet in: ${minutes}:${seconds < 10 ? '0' : ''}${Math.floor(seconds)}`;
    }

    function logout() {
        localStorage.removeItem('authSession');
        window.location.href = 'login.html';
    }

    document.getElementById('logoutBtn').addEventListener('click', logout);

    checkSession();
    updateLogoutTimer();

    setInterval(updateLogoutTimer, 1000);
    setInterval(checkSession, 30000);
});
