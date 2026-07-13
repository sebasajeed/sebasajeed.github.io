import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
} from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5EFE6] via-[#E8DDD0] to-[#D9CEB8]">
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
      <div className="relative z-10 container-responsive-narrow px-responsive text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4">
            Hi, I'm
            <br />
            <span className="text-accent" style={{ fontSize: "3.5rem", fontWeight: "bold", textShadow: "0 10px 25px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2)" }}>Seba Parackal</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Computer Science student · Full Stack Developer
          </p>

          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            I design and build technical tools
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition shadow-md hover:shadow-lg"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/sebasajeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/seba-parackal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:sebasajeed@gmail.com"
              className="text-muted-foreground hover:text-accent transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-accent animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
