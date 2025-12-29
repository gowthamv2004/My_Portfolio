import { Code, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import VideoBackground from "./VideoBackground";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <VideoBackground />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent animate-reveal">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Passionate software developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently pursuing Bachelor of Technology in Artificial Intelligence and Data Science 
              at Bannari Amman Institute of Technology, Sathyamangalam (Batch 2022-2026) with a CGPA of 7.84.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a quick learner with strong teamwork and leadership skills, I'm seeking a role that allows 
              consistent learning and perfecting my skills to secure my dream job and create my dream project 
              in a better environment.
            </p>
          </div>

          <div className="space-y-4 animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-primary">What I Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in developing innovative solutions using Python, React.js, and C. My experience 
              includes building security tools, network analysis applications, and AI-powered interfaces. 
              I've led multiple teams in developing cutting-edge projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in artificial intelligence, cybersecurity, and creating tools that solve 
              real-world problems. I've published research on Vulnerability Scanning and actively contribute 
              to open-source projects on GitHub.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-primary/20 bg-card/50 backdrop-blur hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 hover:scale-105 group animate-fade-in-up hover:border-primary/40"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 group-hover:animate-bounce-in transition-all">
                  <item.icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors animate-fade-in-up">{item.title}</h4>
                <p className="text-muted-foreground animate-fade-in">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
