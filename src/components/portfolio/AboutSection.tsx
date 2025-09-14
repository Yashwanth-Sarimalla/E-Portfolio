import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <Card className="bg-card-gradient border-border shadow-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I am a passionate B.Tech student in Computer Science and Engineering at the prestigious 
                    Indian Institute of Information Technology, Sricity. My journey in technology is driven 
                    by an insatiable curiosity for web development and emerging technologies.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I specialize in modern web technologies including React.js, Node.js, and cloud platforms. 
                    My approach combines technical excellence with creative problem-solving to build solutions 
                    that not only work flawlessly but also provide exceptional user experiences.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-muted-foreground">Full-Stack Web Development</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-muted-foreground">Modern JavaScript Frameworks</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-muted-foreground">Cloud Technologies & DevOps</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-muted-foreground">AI/ML Integration</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">Personal Philosophy</h3>
                    <p className="text-muted-foreground italic">
                      "I believe learning and persistence are essential for growth. I aim to enhance my skills 
                      and create web solutions that solve real problems while continuously improving through 
                      practice and collaboration."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">8.00</div>
                      <div className="text-sm text-muted-foreground">CGPA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">8+</div>
                      <div className="text-sm text-muted-foreground">Technical Skills</div>
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