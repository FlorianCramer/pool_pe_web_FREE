// Parallax effect for hero image
window.addEventListener('scroll', function () {
    var img = document.querySelector('.hero-img img');
    if (img) {
        var scrolled = window.scrollY;
        img.style.transform = 'translateY(' + (scrolled * 0.08) + 'px) scale(1.04)';
    }
});