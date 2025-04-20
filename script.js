// Smooth scrolling
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
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Typing animation
const typeWriter = () => {
    const text = "Frontend Developer crafting smooth user experiences.";
    const speed = 70;
    let index = 0;
    
    const type = () => {
        if (index < text.length) {
            document.querySelector('.lead').textContent = text.substring(0, index + 1);
            index++;
            setTimeout(type, speed);
        }
    };
    type();
};

// Mobile menu handling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});

// Initialize animations
window.addEventListener('load', () => {
    typeWriter();
});