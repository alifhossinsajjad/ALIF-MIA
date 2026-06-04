import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ inline = false, size }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  if (inline) {
    return (
      <button
        onClick={toggleTheme}
        className="p-1.5 rounded-full hover:bg-secondary/60 transition-colors duration-200 cursor-pointer"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun size={size} className="text-yellow-400" />
        ) : (
          <Moon size={size} className="text-slate-400" />
        )}
      </button>
    );
  }

  // Fallback: fixed floating button (used only if placed standalone)
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none "
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300 " />
      ) : (
        <Moon className="h-5 w-5 text-blue-900 " />
      )}
    </button>
  );
};
