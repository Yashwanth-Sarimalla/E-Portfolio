import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Dumbbell, Code2, Users, Calendar, Coffee } from "lucide-react";

const activities = [
  {
    title: "Campus Tech Events",
    description: "Actively volunteer in organizing technical workshops, coding competitions, and hackathons at IIIT Sricity.",
    icon: Users,
    category: "Volunteering",
    involvement: "Event Organizer",
    frequency: "Monthly"
  },
  {
    title: "Technical Blog Reading",
    description: "Daily habit of reading tech blogs, staying updated with latest industry trends and emerging technologies.",
    icon: BookOpen,
    category: "Learning",
    involvement: "Daily Reader",
    frequency: "Daily"
  },
  {
    title: "Competitive Programming",
    description: "Regular practice on platforms like LeetCode, CodeChef, and Codeforces to sharpen problem-solving skills.",
    icon: Code2,
    category: "Programming",
    involvement: "Active Participant",
    frequency: "Daily"
  },
  {
    title: "Physical Fitness",
    description: "Maintaining physical and mental health through regular exercise, ensuring work-life balance.",
    icon: Dumbbell,
    category: "Health",
    involvement: "Fitness Enthusiast",
    frequency: "Daily"
  }
];

const learningInitiatives = [
  {
    title: "Online Course Completion",
    description: "Completed 15+ courses on platforms like Coursera, Udemy, and edX",
    technologies: ["React Advanced Patterns", "AWS Cloud Practitioner", "Docker & Kubernetes", "GraphQL", "TypeScript Mastery"]
  },
  {
    title: "Open Source Contributions",
    description: "Contributing to popular open-source projects and maintaining personal repositories",
    technologies: ["React.js", "Node.js", "Documentation", "Bug Fixes", "Feature Development"]
  },
  {
    title: "Tech Community Participation",
    description: "Active member of various tech communities and Discord servers",
    technologies: ["Developer Communities", "Code Reviews", "Mentoring", "Knowledge Sharing", "Networking"]
  }
];

export const ExtracurricularSection = () => {
  return (
    <section id="activities" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Extracurricular & Volunteering</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card key={activity.title} className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                          {activity.title}
                        </CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                            {activity.category}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {activity.frequency}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="flex items-center text-sm text-primary">
                      <Calendar className="w-4 h-4 mr-2" />
                      {activity.involvement}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Learning & Development */}
          <Card className="bg-card-gradient border-border shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Self-Learning & Development</CardTitle>
              <p className="text-center text-muted-foreground">Continuous improvement through hands-on projects and courses</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {learningInitiatives.map((initiative, index) => (
                  <div key={initiative.title} className="border-l-2 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {initiative.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {initiative.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Personal Philosophy */}
          <Card className="bg-card-gradient border-border shadow-card">
            <CardContent className="p-8 text-center">
              <div className="max-w-3xl mx-auto">
                <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Daily Routine & Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I believe in the power of consistent daily habits. Every morning starts with reading technical blogs 
                  to stay current with industry trends, followed by coding practice to sharpen my skills. Physical 
                  exercise keeps me energized and focused throughout the day. Evenings are dedicated to working on 
                  personal projects and contributing to the developer community.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Consistency",
                    "Continuous Learning",
                    "Community Contribution",
                    "Work-Life Balance",
                    "Growth Mindset"
                  ].map((value) => (
                    <Badge key={value} variant="outline" className="border-primary text-primary">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};