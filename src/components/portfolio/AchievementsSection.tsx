import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target, Code, Users } from "lucide-react";

const achievements = [
  {
    title: "Academic Excellence",
    description: "Maintaining 8.00 CGPA throughout B.Tech program",
    icon: Trophy,
    category: "Academic",
    date: "2023 - Present",
    color: "text-yellow-500"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to multiple open-source projects with 50+ merged PRs",
    icon: Code,
    category: "Technical",
    date: "2024",
    color: "text-green-500"
  },
  {
    title: "Hackathon Participant",
    description: "Regular participant in college and inter-college hackathons",
    icon: Target,
    category: "Competition",
    date: "2024",
    color: "text-blue-500"
  },
  {
    title: "Tech Workshop Leader",
    description: "Led multiple technical workshops on web development and modern frameworks",
    icon: Users,
    category: "Leadership",
    date: "2024",
    color: "text-purple-500"
  },
  {
    title: "Project Recognition",
    description: "Task Management App selected as best academic project in semester",
    icon: Award,
    category: "Project",
    date: "Nov 2024",
    color: "text-orange-500"
  },
  {
    title: "Continuous Learning",
    description: "Completed 15+ online certifications in web development and cloud technologies",
    icon: Star,
    category: "Certification",
    date: "2023 - Present",
    color: "text-pink-500"
  }
];

const futureGoals = [
  "Contribute to major open-source frameworks",
  "Build a SaaS product that impacts 1000+ users",
  "Secure internship at top tech companies",
  "Master cloud-native development",
  "Start a tech blog with 10k+ monthly readers"
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Achievements & Goals</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={achievement.title} className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-secondary/50 ${achievement.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <Badge variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                            {achievement.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {achievement.description}
                        </p>
                        <div className="text-xs text-primary font-medium">
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Future Goals */}
          <Card className="bg-card-gradient border-border shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Future Goals</h3>
                <p className="text-muted-foreground">Aspirations driving my continuous growth</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {futureGoals.map((goal, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{goal}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { label: "Projects Completed", value: "10+" },
              { label: "GitHub Repositories", value: "25+" },
              { label: "Technical Skills", value: "20+" },
              { label: "CGPA", value: "8.00" }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-card-gradient rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};