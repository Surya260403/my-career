// JavaScript for smooth scrolling on anchor links
document.addEventListener("DOMContentLoaded", function () {
    const anchorLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjusts for fixed header
                    behavior: "smooth"
                });
            }
        });
    });
});

// JavaScript for form validation
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        e.preventDefault();
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
