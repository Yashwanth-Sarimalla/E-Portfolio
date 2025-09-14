import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <Card className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Bachelor of Technology in Computer Science and Engineering
                    </h3>
                    <Badge variant="secondary" className="text-primary border-primary w-fit">
                      <Award className="w-4 h-4 mr-1" />
                      8.00 CGPA
                    </Badge>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      Indian Institute of Information Technology, Sricity
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      2023 - 2027
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures & Algorithms",
                          "Database Management Systems",
                          "Computer Networks",
                          "Software Engineering",
                          "Operating Systems",
                          "Web Technologies",
                          "Machine Learning",
                          "Cloud Computing"
                        ].map((course) => (
                          <Badge key={course} variant="outline" className="border-primary/30 text-muted-foreground">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Academic Highlights</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Maintaining excellent academic performance with 8.00 CGPA
                        </li>
                        <li className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Active participation in coding competitions and hackathons
                        </li>
                        <li className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Regular contributor to open-source projects and technical workshops
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};