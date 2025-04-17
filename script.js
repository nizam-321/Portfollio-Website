// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Improved typing animation
const typeWriter = () => {
    const text = "Frontend Developer crafting smooth user experiences.";
    const speed = 70;
    let index = 0;
    
    const type = () => {
        if (index < text.length) {
            const currentText = text.substring(0, index + 1);
            document.querySelector('.lead').textContent = currentText;
            index++;
            setTimeout(type, speed);
        } else {
            // Add cursor blink effect after typing
            document.querySelector('.lead').classList.add('typing-done');
        }
    };
    type();
};

// Enhanced scroll animations
const scrollAnimations = () => {
    const elements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
};

// Skills animation
const skillIcons = document.querySelectorAll('#skills i');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('skill-animation');
        }
    });
}, { threshold: 0.5 });

skillIcons.forEach(icon => {
    observer.observe(icon);
});

// Project cards hover effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('card-hover');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('card-hover');
    });
});

// Initialize all animations on load
window.addEventListener('load', () => {
    typeWriter();
    scrollAnimations();
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Handle mobile menu close on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});