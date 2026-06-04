import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5, SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiGithub, SiDocker, SiFigma
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const skills = [
  // Frontend
  { name: "HTML/CSS",     category: "frontend", icon: SiHtml5,       color: "#E34F26" },
  { name: "JavaScript",  category: "frontend", icon: SiJavascript,  color: "#F7DF1E" },
  { name: "React",        category: "frontend", icon: SiReact,       color: "#61DAFB" },
  { name: "TypeScript",   category: "frontend", icon: SiTypescript,  color: "#3178C6" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next.js",      category: "frontend", icon: SiNextdotjs,   color: "#AAAAAA" },
  // Backend
  { name: "Node.js",    category: "backend", icon: SiNodedotjs,   color: "#339933" },
  { name: "Express",    category: "backend", icon: SiExpress,     color: "#AAAAAA" },
  { name: "MongoDB",    category: "backend", icon: SiMongodb,     color: "#47A248" },
  { name: "PostgreSQL", category: "backend", icon: SiPostgresql,  color: "#4169E1" },
  { name: "Firebase",   category: "backend", icon: SiFirebase,    color: "#FFCA28" },
  // Tools
  { name: "Git/GitHub", category: "tools", icon: SiGithub, color: "#AAAAAA" },
  { name: "Docker",     category: "tools", icon: SiDocker, color: "#2496ED" },
  { name: "Figma",      category: "tools", icon: SiFigma,  color: "#F24E1E" },
  { name: "VS Code",    category: "tools", icon: FaCode,   color: "#007ACC" },
];

const categories = [
  { id: "all",      label: "All"      },
  { id: "frontend", label: "Frontend" },
  { id: "backend",  label: "Backend"  },
  { id: "tools",    label: "Tools"    },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.04, ease: "easeOut" },
  }),
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-14 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Technologies I work with on a daily basis.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden
                ${activeCategory === category.id
                  ? "text-white"
                  : "text-muted-foreground bg-secondary/30 hover:text-foreground hover:bg-secondary/50 border border-border/50"
                }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
                layout
              >
                <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-card/40 border border-border/40 hover:border-primary/30 hover:bg-card/70 transition-all duration-300 h-full cursor-default">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/60"
                    aria-hidden="true"
                  >
                    <skill.icon size={28} color={skill.color} />
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-semibold text-foreground leading-tight">
                      {skill.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground capitalize mt-0.5">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
