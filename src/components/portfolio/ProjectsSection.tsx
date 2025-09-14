import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Users } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive and interactive portfolio website built with modern web technologies. Features dark mode, smooth animations, and optimized performance.",
    type: "Personal Project",
    duration: "Jan 2025 – Present",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Responsive design with mobile-first approach",
      "Interactive animations and smooth scrolling",
      "Contact form with email integration",
      "SEO optimized with meta tags and structured data"
    ],
    status: "Live",
    category: "Frontend"
  },
  {
    title: "Task Management App",
    description: "A comprehensive task management application with real-time updates, user authentication, and collaborative features for team productivity.",
    type: "Academic Project",
    duration: "Aug 2024 – Nov 2024",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io"],
    features: [
      "Real-time task updates with WebSocket integration",
      "User authentication and authorization",
      "Task categorization and priority management",
      "Team collaboration and task assignment"
    ],
    status: "Completed",
    category: "Fullstack"
  },
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features like AI-powered recommendations, payment integration, and admin dashboard.",
    type: "Personal Project",
    duration: "Dec 2024 – Ongoing",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS", "Redis"],
    features: [
      "AI-powered product recommendations",
      "Secure payment processing with Stripe",
      "Advanced admin dashboard with analytics",
      "Cloud storage and CDN integration"
    ],
    status: "In Development",
    category: "Fullstack"
  },
  {
    title: "Weather Analytics Dashboard",
    description: "Interactive weather data visualization dashboard with real-time updates, forecasting, and historical data analysis.",
    type: "Side Project",
    duration: "Sep 2024 – Oct 2024",
    technologies: ["React.js", "D3.js", "Node.js", "Weather API", "Chart.js"],
    features: [
      "Real-time weather data visualization",
      "Interactive charts and graphs",
      "Location-based weather forecasting",
      "Historical weather data analysis"
    ],
    status: "Completed",
    category: "Data Visualization"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-500 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant="outline" 
                      className={`${
                        project.status === 'Live' ? 'border-green-500 text-green-400' :
                        project.status === 'In Development' ? 'border-yellow-500 text-yellow-400' :
                        'border-primary text-primary'
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <Badge variant="secondary" className="text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                    <Badge variant="outline" className="text-xs border-primary/30">
                      {project.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};