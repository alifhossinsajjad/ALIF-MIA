import { useState } from "react";
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Car Renter",
    description: "A Full-Stack Car Renter Platform ",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Mongodb", "Express", "Node.js"],
    demoUrl: "https://simple-firebase-authenti-d2c26.firebaseapp.com/",
    githubUrl: "https://github.com/alifhossinsajjad/CarRental-Client-Side",
  },
  {
    id: 2,
    title: "Event Hub",
    description:
      "A Event Hub Management Web",
    image: "/projects/project2.png",
    tags: ["TailwindCSS", "NextAuth", "Next.js", "MongoDB", "Node", "JavaScript"],
    demoUrl: "https://event-hub-client-zeta.vercel.app/",
    githubUrl: "https://github.com/alifhossinsajjad/Event-Hub-Client",
  },
  {
    id: 3,
    title: "Home Decorate With Plant",
    description:
      "Full-featured e-commerce platform with user authentication",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Firebase", "MongoDB", "FirebaseAuthToken"],
    demoUrl: "https://green-nest-five.vercel.app/",
    githubUrl: "https://github.com/alifhossinsajjad/GreenNest",
  },
  // Duplicated projects for pagination demo
  {
    id: 4,
    title: "Car Renter V2",
    description: "Advanced version with AI recommendations",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Mongodb", "AI"],
    demoUrl: "https://simple-firebase-authenti-d2c26.firebaseapp.com/",
    githubUrl: "https://github.com/alifhossinsajjad/CarRental-Client-Side",
  },
  {
    id: 5,
    title: "Event Hub Pro",
    description:
      "Enterprise grade event management system",
    image: "/projects/project2.png",
    tags: ["Next.js", "PostgreSQL", "Redis"],
    demoUrl: "https://event-hub-client-zeta.vercel.app/",
    githubUrl: "https://github.com/alifhossinsajjad/Event-Hub-Client",
  },
  {
    id: 6,
    title: "Green Nest Mobile",
    description:
      "Mobile application for the plant store",
    image: "/projects/project3.png",
    tags: ["React Native", "Firebase", "Redux"],
    demoUrl: "https://green-nest-five.vercel.app/",
    githubUrl: "https://github.com/alifhossinsajjad/GreenNest",
  },
];

const ITEMS_PER_PAGE = 3;

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Optional: Scroll to top of section smoothly
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors"
                      title="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`
                    w-10 h-10 rounded-full font-medium transition-all duration-300
                    ${currentPage === page
                      ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(124,58,237,0.5)] scale-110"
                      : "bg-secondary/50 hover:bg-secondary"}
                  `}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        <div className="text-center">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/alifhossinsajjad"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
