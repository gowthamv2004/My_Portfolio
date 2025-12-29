import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";
import VideoBackground from "./VideoBackground";

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const { count, ref } = useCountUp(level, 2000);
  
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{count}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 hover:animate-pulse-glow"
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technical Skills",
      skills: [
        { name: "Python", level: 90 },
        { name: "React.js", level: 85 },
        { name: "C Programming", level: 80 },
        { name: "Flask", level: 75 },
      ]
    },
    {
      title: "AI & Data Science",
      skills: [
        { name: "OpenCV", level: 85 },
        { name: "MediaPipe", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "Data Analysis", level: 80 },
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Quick Learner", level: 95 },
        { name: "Leadership", level: 90 },
        { name: "Teamwork", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Critical Thinking", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <VideoBackground />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent animate-reveal">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-primary/20 bg-card/50 backdrop-blur shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
