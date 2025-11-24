// Typing animation
const textArray = [
  "CS Student",
  "Software Engineer",
  "Passionate about building impactful projects."
];
let typingIndex = 0, charIndex = 0, isDeleting = false;
const typingSpeed = 100, deletingSpeed = 50, pauseBetweenTexts = 1000;
const typingElement = document.getElementById('typing-animation');

function typeText() {
  const current = textArray[typingIndex];

  if (!isDeleting) {
    typingElement.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeText, pauseBetweenTexts);
      return;
    }
  } else {
    typingElement.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % textArray.length;
    }
  }
  setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}
document.addEventListener("DOMContentLoaded", typeText);


// ---------------- Fading Header on Scroll ----------------

let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const header     = document.getElementById("main-header");
  const headerName = document.getElementById("header-name");
  const headerNav  = document.getElementById("header-nav");
  const heroName   = document.getElementById("hero-name");
  const heroNav    = document.getElementById("hero-nav");
  const heroSub    = document.getElementById("typing-animation");

  if (window.scrollY > 120) {
    header.classList.add("scrolled");
    headerName.style.opacity = 1;
    headerNav.style.opacity  = 1;

    heroName.style.opacity = 0;
    heroNav.style.opacity  = 0;
    heroSub.style.opacity  = 0;

  } else {
    header.classList.remove("scrolled");
    headerName.style.opacity = 0;
    headerNav.style.opacity  = 0;

    heroName.style.opacity = 1;
    heroNav.style.opacity  = 1;
    heroSub.style.opacity  = 1;
  }

  // Close mobile menu on scroll down
  if (window.scrollY > lastScrollY + 8) {
    document.getElementById("header-nav").classList.remove("show");
  }

  lastScrollY = window.scrollY;
});


// ---------------- Mobile Menu ----------------

function toggleMenu() {
  document.getElementById("header-nav").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("header-nav").classList.remove("show");
}
