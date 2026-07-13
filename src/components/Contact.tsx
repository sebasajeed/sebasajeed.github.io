import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Send, Github } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio contact from ${formData.name || "Anonymous"}`;
    const body = [
      `Name: ${formData.name || "-"}`,
      `Email: ${formData.email || "-"}`,
      "",
      formData.message || "",
    ].join("\n");

    window.location.href = `mailto:sebasajeed@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
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
          <h2 className="text-center mb-4 text-xl font-bold">Contact</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-foreground">
                If you'd like to talk about projects, coursework, or shared technical interests, feel free to reach out.
              </p>

              <a
                href="mailto:sebasajeed@gmail.com"
                className="flex items-center gap-3 text-white text-shadow-3d"
              >
                <Mail className="icon-shadow-3d" />{" "}
                sebasajeed@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/seba-parackal"
                className="flex items-center gap-3 text-white text-shadow-3d"
              >
                <Linkedin className="icon-shadow-3d" />{" "}
                linkedin.com/in/seba-parackal
              </a>

              <a
                href="https://github.com/sebasajeed"
                className="flex items-center gap-3 text-white text-shadow-3d"
              >
                <Github className="icon-shadow-3d" />{" "}
                github.com/sebasajeed
              </a>
            </div>

            <form className="space-y-4" onSubmit={onSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Name"
                autoComplete="name"
                className="w-full px-4 py-3 border rounded-lg bg-background"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Email"
                autoComplete="email"
                className="w-full px-4 py-3 border rounded-lg bg-background"
              />
              <textarea
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-4 py-3 border rounded-lg bg-background"
              />
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg flex justify-center gap-2 shadow-lg hover:shadow-xl transition">
                <Send className="icon-shadow-3d" /> Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
