import { motion } from "framer-motion";

/**
 * About Section Component
 * SQUARE Design: Asymmetric layout, alternating content alignment
 * - Bio on left, stats on right
 * - Monospace labels for section numbers
 * - Minimal color palette with accent highlights
 */

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Years Experience", value: "5+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Design Awards", value: "8" },
  ];

  return (
    <section id="about" className="section-square">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1rem"}} className="">
              <span className="text-accent">03 / ABOUT ME</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate Designer & Creative Thinker
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a graphic designer with a passion for creating visually compelling designs that 
                communicate powerful messages. My work spans branding, UI/UX design, illustration, 
                and digital marketing materials.
              </p>

              <p>
                With expertise in tools like Canva, Photoshop, and Figma, I transform concepts 
                into polished, professional designs that resonate with audiences. Whether it's 
                a brand identity, book cover, or promotional campaign, I bring creativity and 
                precision to every project.
              </p>

              <p>
                My design philosophy centers on clean aesthetics, purposeful typography, and 
                strategic use of color and space. I believe great design is invisible—it works 
                so well that users don't think about it.
              </p>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn-square bg-accent text-accent-foreground hover:opacity-90 mt-8"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="card-square p-6 border border-border"
              >
                <div style={{fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.75rem"}} className="">
                  <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider-square my-12" />

        {/* Design Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1rem"}} className="">
            <span className="text-accent">MY DESIGN APPROACH</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Research",
                description: "I start by understanding your brand, audience, and goals to create designs that truly resonate.",
              },
              {
                title: "Creativity",
                description: "I blend artistic vision with strategic thinking to produce designs that are both beautiful and effective.",
              },
              {
                title: "Refinement",
                description: "Every detail matters. I iterate and refine until the design achieves perfection.",
              },
            ].map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="border-t border-border pt-6"
              >
                <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
