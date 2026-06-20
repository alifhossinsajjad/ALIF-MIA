import { useEffect, useRef } from "react";
import { Briefcase, Code, User, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate the progress line height
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );

      let mm = gsap.matchMedia();

      // 2. Desktop Animations (3D Scroll)
      mm.add("(min-width: 768px)", () => {
        cardsRef.current.forEach((card, index) => {
          const isLeft = index % 2 === 0;
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: isLeft ? -100 : 100,
              rotationY: isLeft ? -25 : 25, // 3D rotation slightly toned down for professionalism
              rotationX: 10,
              z: -150,
            },
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              rotationX: 0,
              z: 0,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%", // start when card is 85% down viewport
                end: "top 40%", // end when it reaches 40%
                scrub: 1, // smooth scrub sync
              },
            },
          );
        });
      });

      // 3. Mobile Animations (Slide up & Scale)
      mm.add("(max-width: 767px)", () => {
        cardsRef.current.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 80,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
              },
            },
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      id="about"
      className="py-14 px-6 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
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
        </div>

        {/* Timeline Container */}
        <div
          className="relative max-w-5xl mx-auto"
          style={{ perspective: "1500px" }}
        >
          {/* Central Progress Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-border/50 transform md:-translate-x-1/2 md:block"></div>

          {/* Active Scroll Progress Line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary via-purple-500 to-blue-500 transform md:-translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] md:block"
            ref={lineRef}
            style={{ marginLeft: "-1px" }} // center align adjustment
          ></div>

          {/* Timeline Items */}
          <div className="space-y-10 md:space-y-20 pl-12 md:pl-0">
            {/* Item 1: Bio */}
            <div
              className="flex flex-col md:flex-row items-center justify-between w-full relative"
              ref={addToRefs}
            >
              <div className="w-full md:w-[45%] md:pr-12">
                {/* REMOVED text-right from here and sub-elements */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm text-left inline-block w-full shadow-2xl shadow-primary/10"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <User className="h-8 w-8" />
                    </div>
                    <div className="w-full">
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
                      with a deep love for building clean, responsive, and
                      modern web applications.
                    </p>
                    <p>
                      My journey is fueled by curiosity and a relentless drive
                      to improve. Even as I start my career, I treat every line
                      of code as an opportunity to learn.
                    </p>
                    <p>
                      I believe in the power of{" "}
                      <span className="text-foreground font-semibold">
                        consistent learning
                      </span>
                      . Whether it's mastering a new framework or optimizing
                      backend performance, I am always pushing my boundaries.
                    </p>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <a href="#contact" className="cosmic-button text-sm">
                      Let's Connect
                    </a>
                    <a
                      href="https://drive.google.com/file/d/19R3PXDb2ISwbyFzdCWevqnRpsRYDtWCI/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2 rounded-full border border-border hover:bg-primary/5 transition-colors text-sm font-medium flex items-center gap-2"
                    >
                      <Briefcase className="w-4 h-4" /> View Resume
                    </a>
                  </div>
                </motion.div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-[-42px] top-8 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_20px_rgba(var(--primary),0.6)]">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </div>

            {/* Item 2: Stack/Skills */}
            <div
              className="flex flex-col md:flex-row items-center justify-between w-full relative"
              ref={addToRefs}
            >
              <div className="hidden md:block w-[45%]"></div>
              {/* Timeline Dot */}
              <div className="absolute left-[-42px] top-8 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-purple-400 z-10 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                <div className="w-3 h-3 rounded-full bg-purple-400" />
              </div>
              <div className="w-full md:w-[45%] md:pl-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm text-left inline-block w-full shadow-2xl shadow-purple-500/10"
                >
                  <div className="mb-6">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
                      <Code className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Tech Enthusiast</h3>
                    <p className="text-muted-foreground text-sm mb-6">
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
              </div>
            </div>

            {/* Item 3: Future Vision */}
            <div
              className="flex flex-col md:flex-row items-center justify-between w-full relative"
              ref={addToRefs}
            >
              <div className="w-full md:w-[45%] md:pr-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm text-left inline-block w-full shadow-2xl shadow-blue-500/10"
                >
                  <div className="flex flex-col w-full">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Future Vision</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Aiming to evolve into a Senior Architect, bridging the gap
                    between complex engineering and intuitive user experiences.
                  </p>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-[35%] animate-pulse" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-left">
                    Journey in progress...
                  </p>
                </motion.div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-[-42px] top-8 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-blue-400 z-10 shadow-[0_0_20px_rgba(96,165,250,0.6)]">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </div>

            {/* Item 4: Problem Solver */}
            <div
              className="flex flex-col md:flex-row items-center justify-between w-full relative"
              ref={addToRefs}
            >
              <div className="hidden md:block w-[45%]"></div>
              {/* Timeline Dot */}
              <div className="absolute left-[-42px] top-8 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-green-400 z-10 shadow-[0_0_20px_rgba(74,222,128,0.6)]">
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="w-full md:w-[45%] md:pl-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm flex flex-col sm:flex-row items-start gap-6 shadow-2xl shadow-green-500/10"
                >
                  <div className="hidden sm:block p-4 rounded-full bg-green-500/10 text-green-400 shrink-0">
                    <Brain className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Brain className="h-6 w-6 sm:hidden text-green-400" />
                      Problem Solver
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      I approach challenges with a clear, analytical mindset.
                      It's not just about making it work; it's about making it{" "}
                      <span className="text-foreground font-medium">
                        scalable, maintainable, and efficient
                      </span>
                      . I love turning complex logic into simple, elegant code.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
