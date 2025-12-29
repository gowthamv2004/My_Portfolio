import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "resume", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveItem(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveItem(id);
    setIsMobileMenuOpen(false);
  };

  const navItems = ["home", "about", "projects", "skills", "resume", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-card/90 backdrop-blur-xl shadow-card border-b border-primary/30 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 text-2xl font-bold transition-all duration-300 hover:scale-105"
          >
            

            <span className="bg-gradient-primary bg-clip-text text-transparent group-hover:tracking-wider transition-all duration-300">
              Portfolio
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-card/30 backdrop-blur-md rounded-full px-2 py-1 border border-primary/10">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative px-4 py-2 capitalize text-sm font-medium transition-all duration-300 rounded-full
                  ${activeItem === item 
                    ? "text-primary-foreground" 
                    : "text-foreground/70 hover:text-foreground"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Active indicator background */}
                {activeItem === item && (
                  <span className="absolute inset-0 bg-gradient-primary rounded-full animate-scale-in shadow-glow" />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            ))}
            <div className="ml-2 pl-2 border-l border-primary/20">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform" />
            {isMobileMenuOpen ? (
              <X size={24} className="animate-spin-in" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-primary/20 shadow-card">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-4 py-3 capitalize text-left font-medium transition-all duration-300 rounded-xl
                    ${activeItem === item 
                      ? "bg-gradient-primary text-primary-foreground shadow-card" 
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/10"
                    }`}
                  style={{ 
                    animation: `fade-in 0.3s ease-out forwards`,
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0
                  }}
                >
                  {item}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-primary/20 flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
