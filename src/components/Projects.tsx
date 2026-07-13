import type { ComponentType, CSSProperties } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  Binary,
  Brain,
  Cpu,
  Github,
  GraduationCap,
  Lock,
  Terminal,
  Users,
} from "lucide-react";

type TagBadge =
  | {
      kind: "logo";
      label: string;
      src: string;
      color: string;
      tint: string;
    }
  | {
      kind: "icon";
      label: string;
      Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
      color: string;
      tint: string;
    };

const tagBadges: Record<string, TagBadge> = {
  Python: {
    kind: "logo",
    label: "Python",
    src: "https://cdn.simpleicons.org/python/3776AB",
    color: "#3776AB",
    tint: "#3776AB1A",
  },
  Flask: {
    kind: "logo",
    label: "Flask",
    src: "https://cdn.simpleicons.org/flask/000000",
    color: "#111827",
    tint: "#1118271A",
  },
  ARM: {
    kind: "logo",
    label: "Arm",
    src: "https://cdn.simpleicons.org/arm/0091BD",
    color: "#0091BD",
    tint: "#0091BD1A",
  },
  MySQL: {
    kind: "logo",
    label: "MySQL",
    src: "https://cdn.simpleicons.org/mysql/4479A1",
    color: "#4479A1",
    tint: "#4479A11A",
  },
  Bootstrap: {
    kind: "logo",
    label: "Bootstrap",
    src: "https://cdn.simpleicons.org/bootstrap/7952B3",
    color: "#7952B3",
    tint: "#7952B31A",
  },
  JavaScript: {
    kind: "logo",
    label: "JavaScript",
    src: "https://cdn.simpleicons.org/javascript/000000",
    color: "#111827",
    tint: "#F7DF1E33",
  },
  "Chart.js": {
    kind: "logo",
    label: "Chart.js",
    src: "https://cdn.simpleicons.org/chartdotjs/FF6384",
    color: "#FF6384",
    tint: "#FF63841A",
  },
  Ollama: {
    kind: "icon",
    label: "Ollama",
    Icon: Cpu,
    color: "#F97316",
    tint: "#F973161A",
  },
  CLI: {
    kind: "icon",
    label: "CLI",
    Icon: Terminal,
    color: "#0F172A",
    tint: "#0F172A1A",
  },
  "Multi-Agent": {
    kind: "icon",
    label: "Multi-Agent",
    Icon: Users,
    color: "#2563EB",
    tint: "#2563EB1A",
  },
  Linux: {
    kind: "logo",
    label: "Linux",
    src: "https://cdn.simpleicons.org/linux/000000",
    color: "#111827",
    tint: "#FCC62433",
  },
  Assembly: {
    kind: "icon",
    label: "Assembly",
    Icon: Binary,
    color: "#6B7280",
    tint: "#6B72801A",
  },
  "CPU Architecture": {
    kind: "icon",
    label: "CPU Architecture",
    Icon: Cpu,
    color: "#2D3D6F",
    tint: "#2D3D6F1A",
  },
  Systems: {
    kind: "icon",
    label: "Systems",
    Icon: Cpu,
    color: "#2D3D6F",
    tint: "#2D3D6F1A",
  },
  "Machine Learning": {
    kind: "icon",
    label: "Machine Learning",
    Icon: Brain,
    color: "#7C3AED",
    tint: "#7C3AED1A",
  },
  Education: {
    kind: "icon",
    label: "Education",
    Icon: GraduationCap,
    color: "#1D4ED8",
    tint: "#1D4ED81A",
  },
};

const projects = [
  {
    title: "Smart Finance Tracker",
    description:
      "A finance dashboard to track and categorize expenses, set spending priorities, and visualize trends with interactive charts and budget insights.",
    tags: ["Flask", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
    githubUrl: "https://github.com/sebasajeed/Smart-Finance-Tracker",
  },
  {
    title: "ARM CPU Simulator",
    description:
      "An ARM instruction set simulator focused on instruction decoding, execution flow, and architectural behavior.",
    tags: ["Python", "ARM", "Assembly", "CPU Architecture"],
    githubUrl:
      "https://github.com/sebasajeed/ARM_CPU_SIMULATOR",
  },
  {
    title: "Blueprint AI",
    description:
      "Spec-driven, multi-agent CLI that proposes full-stack options, enforces specs, and outputs design plus minimal working code and file structure.",
    tags: ["Python", "Ollama", "CLI", "Multi-Agent"],
    githubUrl:
      "https://github.com/sebasajeed/Blueprint-AI",
  },
  {
    title: "lfs4cs (Custom Linux Distro)",
    description:
      "A Linux distribution designed to teach CS students systems concepts through hands-on exploration.",
    tags: ["Linux", "Systems", "Education"],
    private: true,
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="relative section-pad" style={{ backgroundColor: 'rgba(45,61,111,0.92)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.12) 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), inset 0 160px 240px rgba(255,255,255,0.24), inset 0 -70px 120px rgba(255,255,255,0.06)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', pointerEvents: 'none' }} />
      <div className="container-responsive relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-center mb-4 text-xl font-bold text-white">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="mb-2">{p.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md"
                      title={t}
                      style={{
                        backgroundColor:
                          tagBadges[t]?.tint ?? "#2D3D6F1A",
                      }}
                    >
                      {(() => {
                        const badge = tagBadges[t];
                        if (!badge) {
                          return (
                            <span className="text-brand text-xs">
                              {t}
                            </span>
                          );
                        }

                        if (badge.kind === "logo") {
                          return (
                            <>
                              <img
                                className="w-4 h-4"
                                src={badge.src}
                                alt={badge.label}
                                loading="lazy"
                              />
                              <span
                                className="text-xs"
                                style={{ color: badge.color }}
                              >
                                {badge.label}
                              </span>
                            </>
                          );
                        }

                        return (
                          <>
                            <badge.Icon
                              className="w-4 h-4"
                              style={{ color: badge.color }}
                            />
                            <span
                              className="text-xs"
                              style={{ color: badge.color }}
                            >
                              {badge.label}
                            </span>
                          </>
                        );
                      })()}
                    </span>
                  ))}
                </div>

                {p.private ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Lock className="w-4 h-4" /> Private
                    repository
                  </div>
                ) : (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition"
                  >
                    <Github className="w-4 h-4" /> View on
                    GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
