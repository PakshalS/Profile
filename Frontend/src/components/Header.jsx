import { useState, useEffect } from "react";
import { Mail, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initialize theme state
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4",
        scrolled
          ? "backdrop-blur-md bg-white/10 dark:bg-black/30 border-b border-white/20 dark:border-black/30"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Portfolio Title */}
        <a href="#home" className="flex items-center">
          <span className="font-bold text-lg sm:text-xl">
            My <span className="text-foreground">Portfolio</span>
          </span>
        </a>

        {/* Right Side: Button & Dark Mode Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Get in Touch Button - Hidden on small screens */}
          <a
            href="#contact"
            className="hidden sm:flex items-center px-4 py-2 rounded-full dark:bg-green-900 text-primary hover:bg-white/90 transition-colors font-medium text-sm"
          >
            <Mail className="h-5 w-5 mr-2" /> Get in Touch
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
