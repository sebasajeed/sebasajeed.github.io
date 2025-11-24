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
document.addEventListener('DOMContentLoaded', typeText);

// Scroll fade toggle
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  const headerName = document.getElementById('header-name');
  const headerNav  = document.getElementById('header-nav');
  const heroName   = document.getElementById('hero-name');
  const heroNav    = document.getElementById('hero-nav');
  const heroSubtitle = document.getElementById('typing-animation');

  if (window.scrollY > window.innerHeight * 0.6) {
    header.classList.add('scrolled');
    headerName.style.opacity = 1;
    headerNav.style.opacity = 1;
    heroName.style.opacity = 0;
    heroNav.style.opacity = 0;
    heroSubtitle.style.opacity = 0;
  } else {
    header.classList.remove('scrolled');
    headerName.style.opacity = 0;
    headerNav.style.opacity = 0;
    heroName.style.opacity = 1;
    heroNav.style.opacity = 1;
    heroSubtitle.style.opacity = 1;
  }
});

//============Mobile Menu Toggle=====================
function toggleMenu() {
  document.getElementById("header-nav").classList.toggle("show");
}

//============ Close menu when scrolling (mobile) ============
window.addEventListener('scroll', () => {
  document.getElementById("header-nav").classList.remove("show");
});

