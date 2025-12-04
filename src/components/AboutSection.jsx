// import { Briefcase, Code, User } from "lucide-react";

import { Briefcase, Code, User, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 text-glow">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into my journey, skills, and the passion that drives me
            forward.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* 1. Main Bio Card - Spans 2 columns on desktop */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  The Developer Behind the Code
                </h3>
                <p className="text-sm text-primary font-medium">
                  Passionate & Dedicated
                </p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a{" "}
                <span className="text-foreground font-semibold">
                  Full-Stack MERN Developer
                </span>{" "}
                with a deep love for building clean, responsive, and modern web
                applications.
              </p>
              <p>
                My journey is fueled by curiosity and a relentless drive to
                improve. Even as I start my career, I treat every line of code
                as an opportunity to learn and every project as a chance to
                create something meaningful.
              </p>
              <p>
                I believe in the power of{" "}
                <span className="text-foreground font-semibold">
                  consistent learning
                </span>
                . Whether it's mastering a new framework or optimizing backend
                performance, I am always pushing my boundaries.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="cosmic-button text-sm">
                Let's Connect
              </a>
              <a
                href="https://drive.google.com/file/d/1RkCcK-j0Gir0c5N9B_olTuJK3pc6_TYV/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-border hover:bg-primary/5 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                View Resume
              </a>
            </div>
          </motion.div>

          {/* 2. Stack/Skills Card */}
          <motion.div
            variants={itemVariants}
            className="gradient-border p-6 card-hover bg-card/50 backdrop-blur-sm flex flex-col justify-between"
          >
            <div className="mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tech Enthusiast</h3>
              <p className="text-muted-foreground text-sm">
                Specializing in the MERN stack, but always exploring new
                horizons.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Tailwind",
                "Next.js",
                "Express",
                "Firebase",
                "next.js",
                "typescript",
                "vercel",
                "netlify",
                "nextAuth",
                
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 3. Goal Card */}
          <motion.div
            variants={itemVariants}
            className="gradient-border p-6 card-hover bg-card/50 backdrop-blur-sm"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Future Vision</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Aiming to evolve into a Senior Architect, bridging the gap between
              complex engineering and intuitive user experiences.
            </p>
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-400 h-full w-[35%] animate-pulse" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-right">
              Journey in progress...
            </p>
          </motion.div>

          {/* 4. Problem Solving Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 gradient-border p-6 card-hover bg-card/50 backdrop-blur-sm flex items-center gap-6"
          >
            <div className="hidden sm:block p-4 rounded-full bg-green-500/10 text-green-400">
              <Brain className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 sm:hidden text-green-400" />
                Problem Solver
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I approach challenges with a clear, analytical mindset. It's not
                just about making it work; it's about making it{" "}
                <span className="text-foreground font-medium">
                  scalable, maintainable, and efficient
                </span>
                . I love turning complex logic into simple, elegant code.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
