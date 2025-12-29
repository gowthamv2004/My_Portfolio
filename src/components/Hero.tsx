import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";
import VideoBackground from "./VideoBackground";

const Hero = () => {
  const roles = [
    "AI & Data Science Student",
    "Python Developer",
    "React.js Enthusiast",
    "Team Leader",
    "Problem Solver"
  ];
  
  const typewriterText = useTypewriter(roles, 100, 50, 2000);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      <VideoBackground />
      <div className="container mx-auto text-center animate-fade-in-up z-10 relative">
        <div className="inline-block mb-4 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 animate-pulse-glow">
          <span className="text-primary font-medium">Welcome</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
          Gowtham V
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto h-16 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="font-mono">
            {typewriterText}
            <span className="animate-pulse-glow text-primary">|</span>
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-gradient-primary hover:shadow-card-hover transition-all hover:scale-105 shadow-card"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="hover:shadow-card transition-all hover:scale-105 border-primary/50 hover:bg-primary/10"
          >
            Get In Touch
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-float inline-block text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
