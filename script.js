<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Seba Parackal | Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <!-- Devicon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
</head>
<body>
  <!-- Sticky Header -->
  <header id="main-header">
    <div class="container">
      <h1 id="header-name"><a href="#hero">Seba Parackal</a></h1>
      <nav id="header-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="resume.pdf" target="_blank" class="resume-button">Resume</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- HERO -->
  <section id="hero">
    <div class="container hero-content">
      <h1 class="hero-name" id="hero-name">Seba Parackal</h1>
      <nav class="hero-nav" id="hero-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="resume.pdf" target="_blank" class="resume-button">Resume</a></li>
        </ul>
      </nav>
      <p class="hero-subtitle" id="typing-animation"></p>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="container section-fill">
    <h2>About Me</h2>
    <p>
      I’m a Computer Science student with a strong foundation in algorithms, microprocessor design, and web development.  
      Over the years, I’ve worked on projects ranging from low-level ARM CPU simulators with pipelining and memory hierarchy,  
      to full-stack applications with modern frameworks and interactive visualizations.
    </p>
    <p>
      I enjoy building projects that connect hardware and software: 3D printing, electronics, and system-level programming  
      are areas where I get to blend creativity with engineering. I’m also passionate about open-source contributions and sharing knowledge  
      to make tech more accessible for everyone.
    </p>
    <p>
      Outside of academics and coding, I’m constantly experimenting with side projects — from robotics and IoT builds,  
      to developing lightweight Linux distributions for students. My goal is to keep learning, exploring new tools,  
      and creating impactful software and hardware solutions.
    </p>
    <div class="about-resume-wrapper">
      <a href="resume.pdf" target="_blank" class="about-btn">View Resume</a>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="container section-fill">
    <h2>Skills</h2>
    <div class="skills-container">
      <!-- Programming Languages -->
      <div class="skill-category">
        <h3>Programming Languages</h3>
        <div class="skills-grid">
          <div class="skill-card"><i class="devicon-python-plain colored"></i><p>Python</p></div>
          <div class="skill-card"><i class="devicon-c-plain colored"></i><p>C</p></div>
          <div class="skill-card"><i class="devicon-cplusplus-plain colored"></i><p>C++</p></div>
          <div class="skill-card"><i class="devicon-csharp-plain colored"></i><p>C#</p></div>
          <div class="skill-card"><i class="devicon-mysql-plain colored"></i><p>MySQL</p></div>
          <div class="skill-card"><i class="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
          <div class="skill-card"><i class="devicon-html5-plain colored"></i><p>HTML</p></div>
          <div class="skill-card"><i class="devicon-css3-plain colored"></i><p>CSS</p></div>
          <div class="skill-card"><i class="devicon-r-plain colored"></i><p>R</p></div>
          <div class="skill-card"><i class="devicon-php-plain colored"></i><p>PHP</p></div>
        </div>
      </div>
      <!-- Frameworks & Libraries -->
      <div class="skill-category">
        <h3>Frameworks & Libraries</h3>
        <div class="skills-grid">
          <div class="skill-card"><i class="devicon-flask-original"></i><p>Flask</p></div>
          <div class="skill-card"><i class="devicon-bootstrap-plain colored"></i><p>Bootstrap</p></div>
          <div class="skill-card"><i class="devicon-tensorflow-original colored"></i><p>TensorFlow</p></div>
          <div class="skill-card"><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/numpy.svg" alt="NumPy"><p>NumPy</p></div>
          <div class="skill-card"><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pandas.svg" alt="Pandas"><p>Pandas</p></div>
          <div class="skill-card"><i class="fas fa-chart-line"></i><p>Matplotlib</p></div>
          <div class="skill-card"><i class="fas fa-chart-pie"></i><p>Chart.js</p></div>
          <div class="skill-card"><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jinja.svg" alt="Jinja2"><p>Jinja2</p></div>
          <div class="skill-card"><i class="fas fa-cogs"></i><p>Werkzeug</p></div>
        </div>
      </div>
      <!-- Tools & Databases -->
      <div class="skill-category">
        <h3>Tools & Databases</h3>
        <div class="skills-grid">
          <div class="skill-card"><i class="devicon-mysql-plain colored"></i><p>MySQL</p></div>
          <div class="skill-card"><i class="devicon-mongodb-plain colored"></i><p>NoSQL / MongoDB</p></div>
          <div class="skill-card"><i class="devicon-mariadb-plain colored"></i><p>MariaDB</p></div>
          <div class="skill-card"><i class="fas fa-database"></i><p>SQLAlchemy</p></div>
          <div class="skill-card"><i class="fas fa-database"></i><p>SQLite</p></div>
          <div class="skill-card"><i class="fas fa-box"></i><p>Pipenv / venv</p></div>
          <div class="skill-card"><i class="fas fa-chart-bar"></i><p>Power BI</p></div>
          <div class="skill-card"><i class="devicon-git-plain colored"></i><p>Git</p></div>
          <div class="skill-card"><i class="devicon-github-original"></i><p>GitHub</p></div>
          <div class="skill-card"><i class="devicon-figma-plain colored"></i><p>Figma</p></div>
          <div class="skill-card"><i class="fas fa-file-word"></i><p>Microsoft Office</p></div>
          <div class="skill-card"><i class="fas fa-book"></i><p>Notion</p></div>
          <div class="skill-card"><i class="fas fa-paint-brush"></i><p>Canva</p></div>
          <div class="skill-card"><i class="devicon-bash-plain"></i><p>Bash</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="container section-fill">
    <h2>Projects</h2>
    <div class="projects-grid">
      <a class="project-card" href="https://github.com/sebasajeed/ARM_CPU_SIMULATOR" target="_blank" rel="noopener">
        <h3>ARM CPU Simulator</h3>
        <p>A cycle-accurate ARMv7 CPU simulator with pipelining, memory hierarchy, conditional execution, and cache analysis.</p>
        <div class="badges">
          <span>Python</span><span>ARM Assembly</span><span>ARMv7 ISA</span>
          <span>Thumb ISA</span><span>Pipelining</span><span>Cache Simulation</span>
          <span>Instruction Decoding</span><span>Computer Architecture</span>
        </div>
      </a>
      <a class="project-card" href="https://github.com/sebasajeed/Smart-Finance-Tracker" target="_blank" rel="noopener">
        <h3>Smart Finance Tracker</h3>
        <p>A full-stack personal finance app to track income, expenses, budgets, and visualize data with interactive charts.</p>
        <div class="badges">
          <span>JavaScript</span><span>Node.js</span><span>Express.js</span>
          <span>MongoDB</span><span>EJS</span><span>HTML/CSS</span>
          <span>Chart.js</span><span>REST API</span>
        </div>
      </a>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="container section-fill">
    <h2>Contact</h2>
    <div class="contact-icons">
      <a aria-label="Email" href="mailto:sebasajeed@gmail.com"><i class="fa-solid fa-envelope"></i></a>
      <a aria-label="LinkedIn" href="https://www.linkedin.com/in/seba-parackal/" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
      <a aria-label="GitHub" href="https://github.com/sebasajeed" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i></a>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Seba Parackal</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>// Typing animation
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