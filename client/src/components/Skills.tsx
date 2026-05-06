import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

/**
 * Skills Section Component
 * SQUARE Design: Three-column layout, icon + text, minimal styling
 * - Design tools, specialties, and expertise
 * - Icon-based visual hierarchy
 * - Responsive grid layout
 */

export default function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design Tools",
      skills: ["Adobe Photoshop", "Canva", "Figma", "Adobe Illustrator", "Sketch"],
    },
    {
      icon: Code2,
      title: "Specialties",
      skills: ["Branding", "UI/UX Design", "Graphic Design", "Illustration", "Packaging"],
    },
    {
      icon: Zap,
      title: "Expertise",
      skills: ["Visual Identity", "Typography", "Color Theory", "Layout Design", "Motion Graphics"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="skills" className="section-square">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="label-section">
            <span className="text-accent">04 / SKILLS & EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tools & Capabilities
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card-square p-8 border border-border"
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent size={32} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground flex items-start gap-3"
                    >
                      <span className="text-accent font-bold mt-1">→</span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border"
        >
          <div className="label-section">
            <span className="text-accent">PROFICIENCY LEVELS</span>
          </div>

          <div className="space-y-6">
            {[
              { tool: "Photoshop & Canva", level: 95 },
              { tool: "Figma & UI Design", level: 90 },
              { tool: "Branding & Identity", level: 92 },
              { tool: "Illustration", level: 85 },
              { tool: "Motion Graphics", level: 80 },
            ].map((item, index) => (
              <motion.div
                key={item.tool}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{item.tool}</span>
                  <span className="text-sm text-accent font-semibold">{item.level}%</span>
                </div>
                <div className="w-full h-1 bg-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
