import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  PenSquare,
  Terminal,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  private?: boolean;
  mark: string;
};

const email = "sebasajeed@gmail.com";

const projects: Project[] = [
  {
    title: "Blueprint AI",
    description: "spec-driven cli for turning product ideas into working scaffolds",
    tags: ["python", "ollama", "cli"],
    href: "https://github.com/sebasajeed/Blueprint-AI",
    mark: "bp",
  },
  {
    title: "Smart Finance Tracker",
    description: "flask and mysql dashboard for spending, categories, and budget charts",
    tags: ["flask", "mysql", "charts"],
    href: "https://github.com/sebasajeed/Smart-Finance-Tracker",
    mark: "$",
  },
  {
    title: "ARM CPU Simulator",
    description: "instruction decoding and execution flow for arm architecture",
    tags: ["python", "arm", "systems"],
    href: "https://github.com/sebasajeed/ARM_CPU_SIMULATOR",
    mark: "01",
  },
  {
    title: "lfs4cs",
    description: "custom linux distro for teaching systems concepts hands-on",
    tags: ["linux", "education"],
    private: true,
    mark: "lx",
  },
];

const links = [
  { label: "x", href: "https://x.com/sebasajeed", icon: ArrowUpRight },
  { label: "linkedin", href: "https://www.linkedin.com/in/seba-parackal", icon: Linkedin },
  { label: "github", href: "https://github.com/sebasajeed", icon: Github },
  { label: "blog", href: "https://blog.sebaparackal.com", icon: PenSquare },
];

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main className="page">
      <header className="identity">
        <div className="portrait" aria-hidden="true">
          sp
        </div>
        <div>
          <h1>Seba Parackal</h1>
          <p>full-stack developer / fourth-year cs student</p>
        </div>
      </header>

      <section className="section">
        <h2>Currently</h2>
        <div className="current-row">
          <div className="mini-icon">
            <Terminal size={19} />
          </div>
          <div>
            <h3>building across web apps, dev tools, and systems</h3>
            <p>wilfrid laurier university</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-mark">{project.mark}</div>
              <div className="project-copy">
                <div className="project-title-line">
                  <h3>{project.title}</h3>
                  {project.private ? (
                    <span className="project-private">private</span>
                  ) : (
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label={project.title}>
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <nav aria-label="External links">
          {links.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.label}>
              <link.icon size={18} />
            </a>
          ))}
          <a href={`mailto:${email}`} aria-label="email">
            <Mail size={18} />
          </a>
          <button type="button" onClick={copyEmail} aria-label="copy email">
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </nav>
      </footer>
    </main>
  );
}

export default App;
