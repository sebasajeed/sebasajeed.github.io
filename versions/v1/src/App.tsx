import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  Copy,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  PenSquare,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Project = {
  title: string;
  type: string;
  summary: string;
  proof: {
    label: string;
    text: string;
  }[];
  stack: string[];
  href?: string;
  private?: boolean;
};

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  summary: string;
  items: string[];
};

const email = "sebasajeed@gmail.com";

const projects: Project[] = [
  {
    title: "Blueprint AI",
    type: "Developer tooling",
    summary:
      "A spec-driven CLI for turning rough product ideas into implementation plans, file structures, and working scaffolds.",
    proof: [
      {
        label: "Designed",
        text: "A planning flow built around specs instead of vague prompts.",
      },
      {
        label: "Built",
        text: "A command line workflow for multi-agent iteration.",
      },
      {
        label: "Output",
        text: "Project structure, starter code, and practical next steps.",
      },
    ],
    stack: ["Python", "Ollama", "CLI", "Multi-agent"],
    href: "https://github.com/sebasajeed/Blueprint-AI",
  },
  {
    title: "Smart Finance Tracker",
    type: "Full-stack app",
    summary:
      "A finance dashboard for tracking spending, categorizing transactions, and visualizing budget behavior.",
    proof: [
      {
        label: "Backend",
        text: "Flask routes and a MySQL data layer for transaction tracking.",
      },
      {
        label: "Interface",
        text: "Transaction views and chart-driven reporting.",
      },
      {
        label: "Use case",
        text: "A practical dashboard for repeated budget check-ins.",
      },
    ],
    stack: ["Flask", "MySQL", "JavaScript", "Chart.js"],
    href: "https://github.com/sebasajeed/Smart-Finance-Tracker",
  },
  {
    title: "ARM CPU Simulator",
    type: "Systems build",
    summary:
      "An ARM instruction set simulator focused on decoding, execution flow, and architectural behavior.",
    proof: [
      {
        label: "Modeled",
        text: "Instruction decoding and execution state.",
      },
      {
        label: "Learned",
        text: "How assembly maps to CPU-level behavior.",
      },
      {
        label: "Focus",
        text: "Debuggability while working through architecture details.",
      },
    ],
    stack: ["Python", "ARM", "Assembly", "CPU architecture"],
    href: "https://github.com/sebasajeed/ARM_CPU_SIMULATOR",
  },
  {
    title: "lfs4cs",
    type: "Teaching system",
    summary:
      "A custom Linux distribution designed to help CS students learn systems concepts through direct exploration.",
    proof: [
      {
        label: "Goal",
        text: "Systems education through a hands-on environment.",
      },
      {
        label: "Connects",
        text: "Linux fundamentals with student-friendly learning paths.",
      },
      {
        label: "Status",
        text: "Private while the project is still being shaped.",
      },
    ],
    stack: ["Linux", "Systems", "Education"],
    private: true,
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Interface",
    icon: Braces,
    summary: "Frontend work that stays readable, responsive, and easy to change.",
    items: ["React", "TypeScript", "JavaScript", "CSS"],
  },
  {
    title: "Application",
    icon: Database,
    summary: "APIs and data flows with clear boundaries and practical structure.",
    items: ["Flask", "REST", "MySQL", "Python"],
  },
  {
    title: "Systems",
    icon: Cpu,
    summary: "Lower-level projects where debugging and fundamentals matter.",
    items: ["Linux", "ARM", "Assembly", "C"],
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/sebasajeed", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/seba-parackal", icon: Linkedin },
  { label: "Blog", href: "https://blog.sebaparackal.com", icon: PenSquare },
];

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-mark" href="#top" aria-label="Seba Parackal home">
          <span>Seba</span>
          <span>Parackal</span>
        </a>

        <nav className="topbar__nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero__copy">
            <p className="eyebrow">Full-stack developer / fourth-year CS student</p>
            <h1>I build web apps, developer tools, and systems projects.</h1>
            <p className="hero__lead">
              I am a Computer Science student at Wilfrid Laurier University
              focused on practical software: usable interfaces, clear APIs, and
              systems projects that force me to learn what is happening under
              the surface.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                See the work
                <ArrowUpRight size={18} />
              </a>
              <button className="button button--secondary" type="button" onClick={copyEmail}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "Email copied" : "Copy email"}
              </button>
            </div>
          </div>

          <aside className="build-board" aria-label="Portfolio snapshot">
            <div className="board-note board-note--large">
              <span className="note-label">Current focus</span>
              <p>Full-stack projects that connect the interface to the code and systems underneath.</p>
            </div>

            <div className="board-note board-note--blue">
              <span className="note-label">Student context</span>
              <p>Fourth-year CS, still close to fundamentals.</p>
            </div>

            <div className="board-note board-note--green">
              <span className="note-label">Working style</span>
              <p>Build, test, break, simplify, repeat.</p>
            </div>

            <div className="board-strip">UI / API / Linux / tools / debugging</div>
          </aside>
        </section>

        <section className="section work-section" id="work">
          <div className="section__heading">
            <p className="eyebrow">Selected work</p>
            <h2>Four projects that show the range.</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.title}>
                <div className="project-row__number">{String(index + 1).padStart(2, "0")}</div>

                <div className="project-row__main">
                  <div>
                    <p className="project-row__type">{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.summary}</p>

                  <ul className="proof-list" aria-label={`${project.title} proof points`}>
                    {project.proof.map((item) => (
                      <li key={`${project.title}-${item.label}`}>
                        <strong>{item.label}</strong>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-row__meta">
                  <ul className="tag-list" aria-label={`${project.title} stack`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  {project.private ? (
                    <span className="project-status">Private for now</span>
                  ) : (
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View repo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section__heading section__heading--split">
            <div>
              <p className="eyebrow">Stack</p>
              <h2>Comfortable across the layers.</h2>
            </div>
            <p>
              I am strongest when I can move between product behavior and the
              implementation details that make it reliable.
            </p>
          </div>

          <div className="skill-lanes">
            {skillGroups.map((group) => (
              <article className="skill-lane" key={group.title}>
                <group.icon size={22} />
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2>I like work that connects what users see to how systems behave.</h2>
          </div>

          <div className="about-grid">
            <article>
              <GraduationCap size={22} />
              <h3>University</h3>
              <p>
                Fourth-year Computer Science student at Wilfrid Laurier
                University, building projects alongside coursework.
              </p>
            </article>
            <article>
              <Layers3 size={22} />
              <h3>Range</h3>
              <p>
                Web apps, CLIs, dashboards, CPU simulation, and Linux learning
                environments.
              </p>
            </article>
            <article>
              <Wrench size={22} />
              <h3>Outside code</h3>
              <p>
                Sound design, Fusion 360, physical prototyping, writing, and
                making ideas less abstract.
              </p>
            </article>
            <article>
              <BookOpen size={22} />
              <h3>Learning loop</h3>
              <p>
                I learn best by building the thing, breaking it, and writing
                down what finally made it click.
              </p>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Recruiter, teammate, or curious builder: say hello.</h2>
            <p>
              I am open to internships, project work, and conversations with
              people building useful software.
            </p>
          </div>

          <div className="contact-panel">
            <a className="email-link" href={`mailto:${email}`}>
              <Mail size={20} />
              {email}
            </a>

            <button className="copy-link" type="button" onClick={copyEmail}>
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied" : "Copy email"}
            </button>

            <div className="social-links">
              {links.map((link) => (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.label}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
