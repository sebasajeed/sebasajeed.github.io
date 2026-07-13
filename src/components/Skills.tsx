import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Database,
  Cpu,
  GitBranch,
  Layers,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      "Python",
      "C",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
      "R",
      "SQL",
    ],
  },
  {
    icon: Layers,
    title: "Web Development & Tooling",
    skills: [
      "React",
      "Flask",
      "Jinja2",
      "Bootstrap",
      "Chart.js",
      "REST APIs",
    ],
  },
  {
    icon: Database,
    title: "Data & Storage",
    skills: [
      "MySQL",
      "MariaDB",
      "SQLite",
      "MongoDB",
      "SQLAlchemy",
    ],
  },
  {
    icon: Cpu,
    title: "Systems & Low-Level",
    skills: [
      "ARM",
      "Assembly",
      "OS concepts",
      "Architecture exploration",
    ],
  },
  {
    icon: GitBranch,
    title: "Workflow",
    skills: ["Git", "GitHub", "Bash", "Debugging", "Pipenv"],
  },
  {
    icon: Wrench,
    title: "Creative & Hardware",
    skills: [
      "Fusion 360",
      "3D printing",
      "Sound design",
      "Metadata workflows",
    ],
  },
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="relative section-pad bg-gradient-to-br from-[#F5EFE6] via-[#E8DDD0] to-[#D9CEB8]"
    >
      <div
        className="absolute inset-0 opacity-60 bg-brand-0"
        style={{ pointerEvents: "none" }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-20 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-5000"></div>
        <div className="absolute top-10 right-1/3 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1500"></div>
        <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2500"></div>
        <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3500"></div>
        <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4500"></div>
        <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-5500"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
      </div>
      <div className="container-responsive relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-center mb-4 text-xl font-bold">
            Skills & Areas of Work
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((c, i) => (
              <motion.div
                key={c.title}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-6 rounded-lg shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <c.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3>{c.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
