import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full shadow-glow overflow-hidden border-4 border-primary/20">
            <img 
              src={profileAvatar} 
              alt="Yashwanth Sarimalla - Web Developer" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Yashwanth Sarimalla
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Aspiring Web Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            B.Tech CSE Student passionate about creating innovative web solutions. 
            Specializing in modern frameworks and emerging technologies with a focus on user experience.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('mailto:s.yashwanth2006@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Email
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};