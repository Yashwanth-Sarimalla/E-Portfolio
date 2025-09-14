import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "s.yashwanth2006@gmail.com",
      href: "mailto:s.yashwanth2006@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yashwanth",
      href: "https://github.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yashwanth",
      href: "https://linkedin.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IIIT Sricity, Andhra Pradesh",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card-gradient border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Message</CardTitle>
                <p className="text-muted-foreground">
                  Have a question or want to work together? I'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-secondary/30 border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-secondary/30 border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-secondary/30 border-border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="bg-secondary/30 border-border resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card-gradient border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                  <p className="text-muted-foreground">
                    Feel free to reach out through any of these channels.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={info.label} className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg">
                        <div className="p-2 rounded-full bg-primary/10">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{info.label}</div>
                          {info.href ? (
                            <a 
                              href={info.href} 
                              className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.value}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card className="bg-card-gradient border-border shadow-card">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-primary mb-2">Resume & References</h3>
                    <p className="text-muted-foreground mb-6">
                      Download my complete resume with detailed information about my experience and skills.
                    </p>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Status */}
              <Card className="bg-card-gradient border-border shadow-card">
                <CardContent className="p-6 text-center">
                  <Badge variant="outline" className="border-green-500 text-green-400 mb-3">
                    Available for Opportunities
                  </Badge>
                  <p className="text-muted-foreground text-sm">
                    Currently seeking internship opportunities and freelance projects. 
                    Expected to graduate in 2027.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Made with ❤️ by Yashwanth Sarimalla • © 2025 • Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};