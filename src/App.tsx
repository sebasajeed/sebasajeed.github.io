import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Globe,
  Linkedin,
  Mail,
  Moon,
  PenSquare,
  Sun,
  Terminal,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  private?: boolean;
  mark: string;
  preview: {
    label: string;
    title: string;
    detail: string;
    points: string[];
  };
};

type PreviousExperience = {
  title: string;
  organization: string;
  organizationHref?: string;
  description: string;
  mark: string;
  preview: {
    label: string;
    title: string;
    detail: string;
    points: string[];
    links?: Array<{
      label: string;
      href: string;
      icon: typeof Linkedin;
    }>;
  };
};

const email = "sebasajeed@gmail.com";

function XLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.9 2.5h3.1l-6.8 7.8 8 11.2h-6.3l-4.9-6.8-5.6 6.8H3.3l7.3-8.6L3 2.5h6.5l4.4 6.2 5-6.2Zm-1.1 17h1.7L8.6 4.4H6.8l11 15.1Z"
      />
    </svg>
  );
}

const projects: Project[] = [
  {
    title: "Blueprint AI",
    description: "spec-driven cli for turning product ideas into working scaffolds",
    tags: ["python", "ollama", "cli"],
    href: "https://github.com/sebasajeed/Blueprint-AI",
    mark: "bp",
    preview: {
      label: "developer tool",
      title: "From rough idea to scaffold",
      detail: "Blueprint AI turns loose product notes into a structured build plan and starter files.",
      points: ["prompt intake", "spec generation", "project structure"],
    },
  },
  {
    title: "FinTrack",
    description: "flask and mysql dashboard for spending, categories, and budget charts",
    tags: ["flask", "mysql", "charts"],
    href: "https://sebaparackal.com/fintrack/",
    linkLabel: "open FinTrack",
    mark: "$",
    preview: {
      label: "full-stack app",
      title: "Budgeting with visible patterns",
      detail: "A Flask and MySQL tracker for categories, budgets, and spending charts.",
      points: ["database schema", "dashboard views", "category insights"],
    },
  },
  {
    title: "ARM CPU Simulator",
    description: "instruction decoding and execution flow for arm architecture",
    tags: ["python", "arm", "systems"],
    href: "https://github.com/sebasajeed/ARM_CPU_SIMULATOR",
    mark: "01",
    preview: {
      label: "systems",
      title: "Instruction flow made inspectable",
      detail: "A simulator for decoding instructions and stepping through execution state.",
      points: ["decode", "execute", "inspect state"],
    },
  },
  {
    title: "lfs4cs",
    description: "custom linux distro for teaching systems concepts hands-on",
    tags: ["linux", "education"],
    private: true,
    mark: "lx",
    preview: {
      label: "learning environment",
      title: "Systems concepts, taught hands-on",
      detail: "A Linux-focused teaching environment for exploring operating-system ideas directly.",
      points: ["guided exercises", "linux concepts", "private work"],
    },
  },
];

const previousExperiences: PreviousExperience[] = [
  {
    title: "director of education",
    organization: "casehacks",
    organizationHref: "https://www.casehacks.ca/",
    description: "education programming and learning support for case-based hackathon participants",
    mark: "ed",
    preview: {
      label: "casehacks",
      title: "Education programming for a case-focused hackathon",
      detail: "Supported learning materials and participant-facing education for CaseHacks.",
      points: ["participant education", "technical programming", "case-based learning"],
      links: [
        { label: "CaseHacks LinkedIn", href: "https://www.linkedin.com/company/case-hacks", icon: Linkedin },
        { label: "CaseHacks website", href: "https://www.casehacks.ca/", icon: Globe },
      ],
    },
  },
  {
    title: "social media coordinator",
    organization: "ccubed",
    organizationHref: "https://ccubed.dev/",
    description: "communications support for a national computing student council network",
    mark: "cc",
    preview: {
      label: "ccubed",
      title: "Student computing community communications",
      detail: "Coordinated social media communication for Computing Councils of Canada.",
      points: ["content coordination", "community updates", "student outreach"],
    },
  },
];

const links = [
  { label: "linkedin", href: "https://www.linkedin.com/in/seba-parackal", icon: Linkedin },
  { label: "github", href: "https://github.com/sebasajeed", icon: Github },
  { label: "x", href: "https://x.com/sebasajeed", icon: XLogo },
];

const secondaryLinks = [{ label: "blog", href: "https://blog.sebaparackal.com", icon: PenSquare }];

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || event.button !== 0;
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "day";
  }

  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "night" || saved === "day") {
      return saved;
    }
  } catch {
    // Browsers can block storage in strict privacy contexts.
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "night" : "day";
}

function getInitialPath() {
  if (typeof window === "undefined") {
    return "/";
  }

  const requestedPath = new URLSearchParams(window.location.search).get("path");
  if (requestedPath === "/about") {
    window.history.replaceState({}, "", "/about");
    return "/about";
  }

  return window.location.pathname.replace(/\/$/, "") === "/about" ? "/about" : "/";
}

function SiteChrome({
  path,
  theme,
  onNavigate,
  onToggleTheme,
}: {
  path: string;
  theme: string;
  onNavigate: (path: string) => void;
  onToggleTheme: () => void;
}) {
  const destination = path === "/about" ? "/" : "/about";
  const label = path === "/about" ? "home" : "about";

  return (
    <div className="top-actions" aria-label="Site navigation">
      <a
        href={destination}
        className={path === destination ? "is-active" : undefined}
        onClick={(event) => {
          if (isModifiedClick(event)) {
            return;
          }

          event.preventDefault();
          onNavigate(destination);
        }}
      >
        {label}
      </a>
      <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === "day" ? "night" : "day"} mode`}>
        {theme === "day" ? <Moon size={16} /> : <Sun size={16} />}
      </button>
    </div>
  );
}

function AboutPage() {
  return (
    <section className="about-page" aria-labelledby="about-title">
      <p className="eyebrow">About</p>
      <h1 id="about-title">Seba Parackal</h1>
      <p>
        I’m a full-stack developer and fourth-year Computer Science student building across web apps, developer tools,
        and systems projects.
      </p>
      <div className="about-panel">
        <p>
          More about my background, coursework, interests, and working style will live here. For now, this page is set up
          as a clean place to expand the portfolio without changing the work page.
        </p>
      </div>
    </section>
  );
}

function App() {
  const [copied, setCopied] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [previousOpen, setPreviousOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const [theme, setTheme] = useState(getInitialTheme);
  const [path, setPath] = useState(getInitialPath);
  const copiedTimer = useRef<number | null>(null);
  const selectedProject = activeProject === null ? null : projects[activeProject];
  const selectedExperience = activeExperience === null ? null : previousExperiences[activeExperience];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Theme still updates for the current session if storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const handlePopState = () => setPath(getInitialPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    return () => {
      if (copiedTimer.current !== null) {
        window.clearTimeout(copiedTimer.current);
      }
    };
  }, []);

  const navigate = (nextPath: string) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (copiedTimer.current !== null) {
        window.clearTimeout(copiedTimer.current);
      }
      copiedTimer.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main className="page">
      <SiteChrome
        path={path}
        theme={theme}
        onNavigate={navigate}
        onToggleTheme={() => setTheme((current) => (current === "day" ? "night" : "day"))}
      />
      {path === "/about" ? (
        <AboutPage />
      ) : (
        <>
      <header className="identity">
        <div className="portrait" aria-hidden="true">
          sp
        </div>
        <div>
          <h1>Seba Parackal</h1>
          <p>full-stack developer / fourth-year cs student</p>
        </div>
      </header>

      <section className={`section current-section ${previousOpen ? "is-expanded" : ""}`}>
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
        {!previousOpen && (
          <button
            type="button"
            className="previous-toggle"
            aria-expanded={previousOpen}
            onClick={() => {
              setPreviousOpen(true);
              setActiveExperience(null);
            }}
          >
            show previous
          </button>
        )}
        {previousOpen && (
          <div
            className="project-stage previous-stage"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setActiveExperience(null);
              }
            }}
            onMouseLeave={() => setActiveExperience(null)}
          >
            <div className="previous-menu">
              <h3>Previously</h3>
              <div className="previous-list" aria-label="Previous experience">
                {previousExperiences.map((experience, index) => (
                  <article
                    className="project-bubble previous-bubble"
                    key={`${experience.title}-${experience.organization}`}
                    data-active={activeExperience === index ? "true" : undefined}
                    onFocus={() => setActiveExperience(index)}
                    onMouseEnter={() => setActiveExperience(index)}
                    tabIndex={0}
                  >
                    <span className="project-mark">{experience.mark}</span>
                    <span className="project-copy">
                      <span className="project-title-line">
                        <span className="experience-role-line">
                          <span>{experience.title}</span>
                          <span className="experience-at">@</span>
                        </span>
                        {experience.organizationHref ? (
                          <a
                            className="inline-org-link"
                            href={experience.organizationHref}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => event.stopPropagation()}
                          >
                            {experience.organization}
                          </a>
                        ) : (
                          <span>{experience.organization}</span>
                        )}
                      </span>
                      <span className="project-description">{experience.description}</span>
                    </span>
                  </article>
                ))}
              </div>
              <button
                type="button"
                className="previous-toggle previous-hide"
                aria-expanded={previousOpen}
                onClick={() => {
                  setPreviousOpen(false);
                  setActiveExperience(null);
                }}
              >
                hide previous
              </button>
            </div>

            <aside className={`project-preview ${selectedExperience ? "is-visible" : ""}`} aria-live="polite">
              {selectedExperience && (
                <>
                  <div className="preview-topline">
                    <span>{selectedExperience.preview.label}</span>
                    <span>{selectedExperience.mark}</span>
                  </div>
                  <h3>{selectedExperience.preview.title}</h3>
                  <p>{selectedExperience.preview.detail}</p>
                  <div className="preview-flow">
                    {selectedExperience.preview.points.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </div>
                  {selectedExperience.preview.links && (
                    <div className="experience-links" aria-label={`${selectedExperience.organization} links`}>
                      {selectedExperience.preview.links.map((link) => (
                        <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.href}>
                          <link.icon size={17} />
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </aside>
          </div>
        )}
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div
          className="project-stage"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setActiveProject(null);
            }
          }}
          onMouseLeave={() => setActiveProject(null)}
        >
          <div className="project-list" aria-label="Projects">
            {projects.map((project, index) => (
              <a
                className={`project-bubble ${project.private || !project.href ? "is-private" : ""}`}
                key={project.title}
                href={project.href ?? "#"}
                target={project.href ? "_blank" : undefined}
                rel={project.href ? "noreferrer" : undefined}
                aria-label={
                  project.href
                    ? project.linkLabel ?? `Open ${project.title} repository`
                    : `${project.title} is private`
                }
                aria-disabled={project.href ? undefined : true}
                data-active={activeProject === index ? "true" : undefined}
                onFocus={() => setActiveProject(index)}
                onMouseEnter={() => setActiveProject(index)}
                onClick={(event) => {
                  if (!project.href) {
                    event.preventDefault();
                  }
                }}
              >
                <span className="project-mark">{project.mark}</span>
                <span className="project-copy">
                  <span className="project-title-line">
                    <span>{project.title}</span>
                    {project.private ? (
                      <small>private</small>
                    ) : (
                      <span
                        className="bubble-repo-link"
                        aria-hidden="true"
                      >
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </span>
                    )}
                  </span>
                  <span className="project-tagline">
                    {project.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <aside className={`project-preview ${selectedProject ? "is-visible" : ""}`} aria-live="polite">
            {selectedProject && (
              <>
                <div className="preview-topline">
                  <span>{selectedProject.preview.label}</span>
                  <span>{selectedProject.mark}</span>
                </div>
                <h3>{selectedProject.preview.title}</h3>
                <p>{selectedProject.preview.detail}</p>
                <div className="preview-flow">
                  {selectedProject.preview.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
                <div className="tag-list">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {selectedProject.private ? (
                  <span className="project-private">private repository</span>
                ) : (
                  <a className="preview-link" href={selectedProject.href} target="_blank" rel="noreferrer">
                    {selectedProject.linkLabel ?? "open repository"} <ArrowUpRight size={15} />
                  </a>
                )}
              </>
            )}
          </aside>
        </div>
      </section>
        </>
      )}

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
          {secondaryLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.label}>
              <link.icon size={18} />
            </a>
          ))}
          <button type="button" onClick={copyEmail} aria-label="copy email">
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </nav>
      </footer>
    </main>
  );
}

export default App;
