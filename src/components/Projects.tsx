import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import VideoBackground from "./VideoBackground";
const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleProjects]);
  const projects = [
    {
      title: "Vulnerability Scanning",
      description: "Developed a comprehensive tool for scanning website and Windows vulnerabilities using Flask and VirusTotal API, with automated PDF report generation feature. Published in 'From Concept to Creation: The Journey of Innovation Book'.",
      tech: ["Python", "Flask", "VirusTotal API", "PDF Generation"],
      github: "https://github.com/gowthamv2004",
      demo: "/demos/vulnerability-scanning",
      role: "Team Leader | Team Size: 3"
    },
    {
      title: "Network Traffic Analysis Tool",
      description: "Built a Python-based tool to analyze Wireshark network traffic and visualize IP geolocations on Google Maps using GeoIP database and KML file generation.",
      tech: ["Python", "Wireshark", "GeoIP", "Google Maps API", "KML"],
      github: "https://github.com/gowthamv2004",
      demo: "/demos/network-traffic",
      role: "Team Leader | Team Size: 4"
    },
    {
      title: "Vision-Based Smart Interface Using AI",
      description: "Created an advanced AI-powered interface using Python, OpenCV, and MediaPipe for real-time hand gesture, pose, and object detection with features like virtual mouse, painter, and AI fitness trainer.",
      tech: ["Python", "OpenCV", "MediaPipe", "AI/ML", "Computer Vision"],
      github: "https://github.com/gowthamv2004",
      demo: "/demos/vision-ai",
      role: "Team Leader | Team Size: 3"
    },
    {
      title: "Waste Management System - ECOFEST",
      description: "Developed for International Conference on Advancements in Energy Transition and Climate Neutrality. A web application for efficient waste management during events.",
      tech: ["React.js", "Web Development", "Event Management"],
      github: "https://github.com/gowthamv2004",
      demo: "/demos/waste-management",
      role: "Team Leader | Team Size: 2"
    },
    {
      title: "Coffee Shop Table Booking",
      description: "Created a web application that allows users to book tables online at a coffee shop, providing a seamless and convenient reservation experience for customers.",
      tech: ["React.js", "Web Development", "Booking System"],
      github: "https://github.com/gowthamv2004",
      demo: "/demos/coffee-shop",
      role: "Developer"
    },
    {
      title: "Flight Price Prediction",
      description: "Built a machine learning model to predict flight prices using historical data and various features to help users find the best deals.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      github: "https://github.com/gowthamv2004",
      demo: "/demos/flight-price",
      role: "Developer"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <VideoBackground />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-reveal">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            A selection of my recent work showcasing various skills and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`border-primary/20 bg-card/50 backdrop-blur hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 hover:scale-105 group hover:border-primary/40 ${
                visibleProjects.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                {project.role && (
                  <p className="text-sm text-primary font-medium mb-2">{project.role}</p>
                )}
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/10 hover:border-primary transition-all" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-card transition-all hover:scale-105" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
