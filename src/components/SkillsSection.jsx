import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Database, Layout, Server, Wrench,
  Cpu, Globe, Terminal, Layers, Box,
  GitBranch, Cloud, Figma, Monitor
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: Layout, color: "#E34F26" },
  { name: "JavaScript", category: "frontend", icon: Code2, color: "#F7DF1E" },
  { name: "React", category: "frontend", icon: Box, color: "#61DAFB" },
  { name: "TypeScript", category: "frontend", icon: Terminal, color: "#3178C6" },
  { name: "Tailwind CSS", category: "frontend", icon: Layers, color: "#06B6D4" },
  { name: "Next.js", category: "frontend", icon: Globe, color: "#FFFFFF" },

  // Backend
  { name: "Node.js", category: "backend", icon: Server, color: "#339933" },
  { name: "Express", category: "backend", icon: Cpu, color: "#FFFFFF" },
  { name: "MongoDB", category: "backend", icon: Database, color: "#47A248" },
  { name: "PostgreSQL", category: "backend", icon: Database, color: "#4169E1" },
  { name: "Firebase", category: "backend", icon: Cloud, color: "#FFCA28" },

  // Tools
  { name: "Git/GitHub", category: "tools", icon: GitBranch, color: "#F05032" },
  { name: "Docker", category: "tools", icon: Box, color: "#2496ED" },
  { name: "Figma", category: "tools", icon: Figma, color: "#F24E1E" },
  { name: "VS Code", category: "tools", icon: Monitor, color: "#007ACC" },
];

const categories = [
  { id: "all", label: "All Universe" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 text-glow">Universe</span>
          </motion.h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group
                  ${activeCategory === category.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground bg-secondary/30 hover:bg-secondary/50"}
                `}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                {/* Holographic Card */}
                <div
                  className="relative h-full p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  style={{
                    "--skill-color": skill.color
                  }}
                >
                  {/* Dynamic Border on Hover */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-[var(--skill-color)] rounded-2xl transition-colors duration-300" />

                  {/* Hover Gradient Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-xl bg-secondary/50 group-hover:bg-white/10 transition-colors duration-300">
                      <skill.icon
                        className="w-8 h-8 transition-colors duration-300"
                        style={{ color: skill.color }}
                      />
                    </div>

                    <div>
                      <h3
                        className="font-semibold text-lg transition-colors duration-300 group-hover:text-[var(--skill-color)]"
                        style={{ "--skill-color": skill.color }}
                      >
                        {skill.name}
                      </h3>
                      <p className="text-xs text-muted-foreground capitalize mt-1">
                        {skill.category}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner Accents */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 group-hover:border-[var(--skill-color)] transition-colors" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 group-hover:border-[var(--skill-color)] transition-colors" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
