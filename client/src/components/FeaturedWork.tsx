import { useState } from "react";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";

/**
 * Featured Work Component
 * SQUARE Design: 3-column masonry grid, sharp corners, minimal interactions
 * - Category filtering with teal accent
 * - Hover effects: shadow elevation + opacity
 * - Responsive grid: 1 column mobile, 2 desktop, 3 large screens
 */

export default function FeaturedWork() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(ASSETS.works.map((work) => work.category)));

  // Filter works based on selected category
  const filteredWorks = selectedCategory
    ? ASSETS.works.filter((work) => work.category === selectedCategory)
    : ASSETS.works;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="work" className="section-square">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div style={{fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1rem"}} className="">
            <span className="text-accent">02 / FEATURED WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Selected Projects & Designs
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12 pb-6 border-b border-border"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`text-sm font-medium px-4 py-2 transition-all duration-300 ${
              selectedCategory === null
                ? "bg-accent text-accent-foreground"
                : "text-foreground hover:text-accent border border-border"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm font-medium px-4 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:text-accent border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Works Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-square"
        >
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="card-square overflow-hidden">
                {/* Image Container */}
                <div className="aspect-square overflow-hidden bg-secondary relative">
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 bg-black/40 flex items-end p-4"
                  >
                    <div className="text-white">
                      <p className="text-xs uppercase tracking-widest text-white/80 mb-1">
                        {work.category}
                      </p>
                      <h3 className="text-lg font-semibold">{work.title}</h3>
                    </div>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-xs uppercase tracking-widest text-accent mb-2">
                    {work.category}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">{work.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
