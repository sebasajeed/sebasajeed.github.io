import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const spotifyEmbedUrl =
    "https://open.spotify.com/embed/track/5KZ4DC772dYcRBAizx0yYk?utm_source=generator&theme=0";

  return (
    <section id="about" className="relative section-pad" style={{ backgroundColor: 'rgba(45,61,111,0.92)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.12) 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), inset 0 160px 240px rgba(255,255,255,0.24), inset 0 -70px 120px rgba(255,255,255,0.06)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', pointerEvents: 'none' }} />
      <div className="container-responsive relative z-10 text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 font-bold text-xl">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />

            <div className="space-y-4" style={{ color: 'rgba(255,255,255,0.92)' }}>
              <p>
                I’m a fourth year Computer Science student at
                Wilfrid Laurier University. Most of my work
                comes from coursework, personal experiments, or
                things I wanted to understand more deeply.
              </p>

              <p>
                I work across a mix of software, hardware, and creative projects.
                My interests range from systems programming to web development, 3D CAD for FDM printing,
                sound design, and metadata-focused workflows.
              </p>

              <p>
                I learn best by building and breaking things,
                especially where performance, usability, and
                design trade-offs intersect.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  ["Background", "Computer Science"],
                  [
                    "Interests",
                    "Software · Hardware · Creative",
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg shadow-lg p-6 bg-gradient-to-br from-[#F5EFE6] via-[#E8DDD0] to-[#D9CEB8]"
                  >
                    <div className="text-brand mb-1">
                      {label}
                    </div>
                    <div className="text-foreground">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="rounded-lg shadow-lg p-6 bg-gradient-to-br from-[#F5EFE6] via-[#E8DDD0] to-[#D9CEB8]">
                  <div className="text-brand mb-1">Now listening to</div>
                  {spotifyEmbedUrl ? (
                    <iframe
                      className="w-full"
                      style={{ borderRadius: 12, height: 80, border: 0 }}
                      src={spotifyEmbedUrl}
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      title="Spotify player"
                    />
                  ) : (
                    <div className="text-foreground text-sm">
                      Add your Spotify embed URL to `spotifyEmbedUrl` in `src/components/About.tsx`.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
