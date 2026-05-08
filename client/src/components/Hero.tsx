import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";
import { ArrowDown } from "lucide-react";

/**
 * Hero Section Component
 * SQUARE Design: Asymmetric layout, sharp corners, Playfair Display typography
 * - Profile image on left (desktop), top (mobile)
 * - Bold headline with accent color
 * - Call-to-action button
 */

export default function Hero() {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 border-b border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-square overflow-hidden border border-border bg-secondary">
              <img
                src={ASSETS.profile}
                alt="Sai Lone Kham"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 flex flex-col gap-6"
          >
            {/* Label */}
            <div style={{fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1rem"}} className="">
              <span className="text-accent">01 / WELCOME</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                A place to display your
                <span className="text-accent ml-3">masterpiece</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a graphic designer specializing in branding, UI/UX, and creative visual design. 
                Explore my portfolio to see how I transform ideas into compelling visual experiences.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={scrollToWork}
                className="btn-square bg-accent text-accent-foreground hover:opacity-90"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="btn-square bg-transparent text-foreground border border-border hover:border-accent"
              >
                Get in Touch
              </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="pt-8"
            >
              <ArrowDown size={20} className="text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
