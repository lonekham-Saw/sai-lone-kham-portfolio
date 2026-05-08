import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github, ArrowRight } from "lucide-react";

/**
 * Contact Section Component
 * SQUARE Design: Centered layout, bold CTA, social links
 * - Email contact form CTA
 * - Social media links with icons
 * - Minimal, professional styling
 */

export default function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@example.com",
      color: "text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "text-foreground",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com",
      color: "text-foreground",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "text-foreground",
    },
  ];

  return (
    <section id="contact" className="section-square">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Label */}
          <div style={{fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1.5rem"}} className="flex justify-center">
            <span className="text-accent">05 / GET IN TOUCH</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a specific design need or just want to explore possibilities, 
            feel free to reach out. Let's collaborate and bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn-square bg-accent text-accent-foreground hover:opacity-90 flex items-center justify-center gap-2"
            >
              Send Me an Email
              <ArrowRight size={18} />
            </motion.a>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn-square bg-transparent text-foreground border border-border hover:border-accent flex items-center justify-center gap-2"
            >
              Schedule a Call
              <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* Divider */}
          <div className="divider-square my-12" />

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
              Connect with me
            </p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4, color: "#00B4D8" }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${link.color} hover:text-accent transition-colors`}
                    aria-label={link.label}
                  >
                    <IconComponent size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
