// Hero fade on scroll
window.addEventListener("scroll", () => {
  const hero = document.getElementById("hero");
  const scrollY = window.scrollY;

  if (scrollY < window.innerHeight) {
    hero.style.opacity = 1 - scrollY / (window.innerHeight * 0.7);
  } else {
    hero.style.opacity = 0;
  }

  const header = document.querySelector("header");
  if (scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("header-nav");
  nav.classList.toggle("active");
}

// Typing animation
const typingElement = document.getElementById("typing-animation");

const typingTexts = [
  "ARM CPU Simulator Developer",
  "Full-Stack Web Developer",
  "AI & Data Science Enthusiast",
  "Open Source Contributor"
];

let typingIndex = 0;
let charIndex = 0;
let currentText = typingTexts[typingIndex];
let isDeleting = false;

function type() {
  if (!typingElement) return;

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 120;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1500;
    isDeleting = true;

  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex = (typingIndex + 1) % typingTexts.length;
    currentText = typingTexts[typingIndex];
    speed = 300;
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);
