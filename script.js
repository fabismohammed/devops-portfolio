
// =================================
// MOBILE NAVIGATION
// =================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// =================================
// TYPING ANIMATION
// =================================

const roles = [
    "DevOps Engineer",
    "Cloud Engineer",
    "Linux Enthusiast",
    "Automation Learner"
];

const typingText = document.getElementById("typingText");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentRole.substring(0, characterIndex);

    let speed = deleting ? 45 : 85;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =================================
// SCROLL REVEAL ANIMATION
// =================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .about-info, .skill-card, .project-card, .pipeline-step, .timeline-item, .contact-box"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// =================================
// AUTOMATIC COPYRIGHT YEAR
// =================================

document.getElementById("year").textContent =
    new Date().getFullYear();
