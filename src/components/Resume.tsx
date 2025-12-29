import { Briefcase, GraduationCap, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateResumePDF } from "@/utils/generateResumePDF";
import VideoBackground from "./VideoBackground";

const Resume = () => {
  const handleDownloadResume = () => {
    generateResumePDF();
  };
  const experience = [
    {
      title: "Team Leader - Vulnerability Scanning Project",
      company: "Research & Development",
      period: "2024",
      description: "Led a team of 3 in developing a comprehensive vulnerability scanning tool. Published research in 'From Concept to Creation: The Journey of Innovation Book'."
    },
    {
      title: "Team Leader - Network Traffic Analysis",
      company: "Academic Project",
      period: "2024",
      description: "Led a team of 4 to develop a Python-based network traffic analysis tool with geolocation visualization capabilities."
    },
    {
      title: "Team Leader - AI Smart Interface",
      company: "Academic Project",
      period: "2023",
      description: "Led a team of 3 in creating an AI-powered vision-based interface with real-time gesture recognition and object detection."
    },
    {
      title: "Team Leader - ECOFEST Waste Management",
      company: "International Conference",
      period: "2023",
      description: "Led a team of 2 for International Conference on Advancements in Energy Transition and Climate Neutrality."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology - Artificial Intelligence and Data Science",
      institution: "Bannari Amman Institute of Technology, Sathyamangalam",
      period: "Batch 2022 - 2026",
      description: "CGPA: 7.84 (upto 6th semester). Focus on AI, Machine Learning, and Data Science applications."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sri Vidya Mandir Matriculation Higher Secondary School, Gurusamipalayam",
      period: "Batch 2022",
      description: "Percentage: 79%. Strong foundation in Mathematics and Computer Science."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Sri Vidya Mandir Matriculation Higher Secondary School, Gurusamipalayam",
      period: "Batch 2020",
      description: "Percentage: 92%. Excellent academic performance with distinction."
    }
  ];

  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      <VideoBackground />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            My professional journey and educational background
          </p>
          <Button className="bg-gradient-accent" onClick={handleDownloadResume}>
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="border-border hover:shadow-card-hover transition-all">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-semibold text-foreground mb-1">{job.title}</h4>
                    <p className="text-primary font-medium mb-2">{job.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{job.period}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border hover:shadow-card-hover transition-all">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
