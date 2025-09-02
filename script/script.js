// Add any interactive features or animations here

// Example: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Add any interactive features or animations here

// Example: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Placeholder for quiz start or tool interactions
document.querySelectorAll('.tool-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert("This will start the " + this.closest('.tool-card').querySelector('h3').innerText + " tool.");
    });
});
// Contact form submission (for demonstration purposes)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset();
});
