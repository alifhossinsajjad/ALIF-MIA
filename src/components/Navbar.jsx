import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/30"
          : "py-4 bg-transparent"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-6  flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold flex items-center gap-1 shrink-0">
          <span className="text-foreground font-extrabold tracking-tight">ALIF</span>
          <span className="text-primary font-bold">Portfolio</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {item.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Theme Toggle at the end of nav items */}
          <ThemeToggle inline size={27} className="cursor-pointer"/>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary/50 transition-colors z-50 relative"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/97 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden",
          "transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-semibold text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
