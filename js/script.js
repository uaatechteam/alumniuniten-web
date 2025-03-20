// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Toggle images function
function toggleImages() {
    const images = document.querySelectorAll('.member-image');
    images.forEach(image => {
        image.classList.toggle('show');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = '#ffffff';
    }
});