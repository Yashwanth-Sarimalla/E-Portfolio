import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

interface SkillCircleProps {
  skill: string;
  percentage: number;
  category: string;
}

const SkillCircle = ({ skill, percentage, category }: SkillCircleProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  const circumference = 2 * Math.PI * 30;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--skill-track))"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--skill-progress))"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: 'drop-shadow(0 0 3px hsl(var(--skill-progress)))'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">{animatedPercentage}%</span>
        </div>
      </div>
      <h4 className="font-semibold text-foreground text-center text-sm">{skill}</h4>
      <Badge variant="outline" className="text-xs mt-1 border-primary/30 text-muted-foreground">
        {category}
      </Badge>
    </div>
  );
};

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", percentage: 80, category: "Frontend" },
        { name: "TypeScript", percentage: 65, category: "Frontend" },
        { name: "Python", percentage: 75, category: "Backend" },
        { name: "Java", percentage: 86, category: "Backend" },
        { name: "C++", percentage: 70, category: "DSA" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React.js", percentage: 90, category: "Frontend" },
        { name: "Node.js", percentage: 85, category: "Backend" },
        { name: "Next.js", percentage: 80, category: "Fullstack" },
        { name: "Express.js", percentage: 75, category: "Backend" },
        { name: "Tailwind CSS", percentage: 85, category: "Styling" },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", percentage: 80, category: "Database" },
        { name: "PostgreSQL", percentage: 75, category: "Database" },
        { name: "AWS", percentage: 70, category: "Cloud" },
        { name: "Docker", percentage: 65, category: "DevOps" },
        { name: "Firebase", percentage: 80, category: "BaaS" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", percentage: 90, category: "Version Control" },
        { name: "VS Code", percentage: 95, category: "Editor" },
        { name: "Postman", percentage: 85, category: "API Testing" },
        { name: "Figma", percentage: 70, category: "Design" },
        { name: "Jest", percentage: 65, category: "Testing" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={category.title} className="bg-card-gradient border-border shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillCircle
                        key={skill.name}
                        skill={skill.name}
                        percentage={skill.percentage}
                        category={skill.category}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <Card className="bg-card-gradient border-border shadow-card mt-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                Soft Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Communication",
                  "Problem-solving",
                  "Time Management",
                  "Teamwork",
                  "Leadership",
                  "Adaptability",
                  "Critical Thinking",
                  "Creativity"
                ].map((skill) => (
                  <div key={skill} className="flex items-center p-3 bg-secondary/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};