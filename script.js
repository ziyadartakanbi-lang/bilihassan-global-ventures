// ===============================
// BILIHASSAN GLOBAL VENTURES
// script.js
// ===============================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Change header style while scrolling
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 80) {
        header.style.background = "#001A4D";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
    } else {
        header.style.background = "#002B7F";
        header.style.boxShadow = "none";
    }

});

// Fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});