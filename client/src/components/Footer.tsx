import { motion } from "framer-motion";

/**
 * Footer Component
 * SQUARE Design: Minimal, centered, monospace text
 * - Copyright and year
 * - Design credit
 * - Simple divider
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Sai Lone Kham
            </h3>
            <p className="text-sm text-muted-foreground">
              Graphic Designer | Creative Visionary
            </p>
          </div>

          <div className="divider-square my-6" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
            <p>© {currentYear} Sai Lone Kham. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p>Designed & Built with React & Tailwind CSS</p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground mt-4 label-mono"
          >
            Crafted with precision and care
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
