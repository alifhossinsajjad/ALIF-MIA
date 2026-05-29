import { motion } from "framer-motion";
import heroImg from "../assets/logo.png";
import { ArrowDown, Mail } from "lucide-react";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-subtle" />

        {/* Stars (Simulated with small divs for now, could be an SVG or Canvas) */}
        <div
          className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full star animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full star animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-white rounded-full star animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide"
            >
              Available for Work
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Hi, I’m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400 text-glow">
                MD ALIF MIA
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Software Engineer & Full-Stack MERN Developer.{" "}
            <br className="hidden md:block" />
            Turning complex ideas into{" "}
            <span className="text-foreground font-semibold">
              scalable digital masterpieces
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="cosmic-button flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
          {/* Decorative Ring behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-full blur-3xl transform scale-110 -z-10" />

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-[280px] md:w-[400px] aspect-square"
          >
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]" />

            <img
              src={heroImg}
              alt="Alif Mia"
              className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl relative z-10"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-0 right-10 bg-card/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg z-20 flex items-center gap-3"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Online</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
