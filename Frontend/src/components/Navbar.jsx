import { useState, useEffect } from "react";
import { Home, User, Briefcase, GraduationCap, Code, FolderKanban, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = [
        { id: "home", offset: 0 },
        { id: "about", offset: document.getElementById("about")?.offsetTop || 0 },
        { id: "experience", offset: document.getElementById("experience")?.offsetTop || 0 },
        { id: "education", offset: document.getElementById("education")?.offsetTop || 0 },
        { id: "skills", offset: document.getElementById("skills")?.offsetTop || 0 },
        { id: "projects", offset: document.getElementById("projects")?.offsetTop || 0 },
        { id: "contact", offset: document.getElementById("contact")?.offsetTop || 0 },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        if (currentScrollY >= sections[i].offset - 100) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { id: "about", label: "About", icon: <User className="h-5 w-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
    { id: "skills", label: "Skills", icon: <Code className="h-5 w-5" /> },
    { id: "projects", label: "Projects", icon: <FolderKanban className="h-5 w-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: id === "home" ? 0 : element.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="backdrop-blur-md bg-white/10 dark:bg-black/30 border border-white/20 dark:border-black/30 rounded-full px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-1 sm:gap-2 max-w-full overflow-x-auto no-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-full transition-all duration-300",
              activeSection === item.id
                ? "text-primary  dark:text-primary dark:bg-gray-900 scale-110"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
            aria-label={item.label}
          >
            {item.icon}
            <span className="sr-only">{item.label}</span>
          </button>
        ))}
        <div className="ml-1 pl-1 border-l border-border hidden sm:block">
          <div className="p-2 rounded-full text-foreground">
            <span className="text-xs font-medium">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
