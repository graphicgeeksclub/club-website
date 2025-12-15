import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Brain, 
  Video, 
  PenTool, 
  TrendingUp, 
  Database, 
  Palette,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      category: "Web Development",
      icon: Code,
      description: "Full-stack web development with modern frameworks and technologies",
      technologies: ["React", "Node.js", "TypeScript", "Next.js", "MongoDB", "PostgreSQL"],
      projects: "25+ Live Projects",
      level: "Beginner to Advanced",
      color: "text-blue-500"
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      description: "Artificial Intelligence and Machine Learning solutions for real-world problems",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP"],
      projects: "15+ ML Models",
      level: "Intermediate to Advanced",
      color: "text-purple-500"
    },
    {
      category: "Mobile App Development",
      icon: Smartphone,
      description: "Cross-platform mobile applications for Android and iOS platforms",
      technologies: ["Flutter", "React Native", "Java", "Kotlin", "Swift", "Firebase"],
      projects: "20+ Mobile Apps",
      level: "Beginner to Advanced",
      color: "text-green-500"
    },
    {
      category: "Video Editing",
      icon: Video,
      description: "Professional video editing and motion graphics for digital content",
      technologies: ["Adobe Premiere", "After Effects", "DaVinci Resolve", "Final Cut Pro"],
      projects: "50+ Videos Edited",
      level: "Beginner to Professional",
      color: "text-red-500"
    },
    {
      category: "Content Writing",
      icon: PenTool,
      description: "Technical writing, blogging, and content creation for digital platforms",
      technologies: ["SEO Writing", "Technical Docs", "Blog Writing", "Social Media"],
      projects: "100+ Articles",
      level: "Beginner to Expert",
      color: "text-yellow-500"
    },
    {
      category: "Digital Marketing",
      icon: TrendingUp,
      description: "Digital marketing strategies and social media management",
      technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Content Strategy"],
      projects: "30+ Campaigns",
      level: "Beginner to Advanced",
      color: "text-pink-500"
    },
    {
      category: "Database Management",
      icon: Database,
      description: "Database design, optimization, and management systems",
      technologies: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
      projects: "15+ Database Systems",
      level: "Intermediate to Advanced",
      color: "text-indigo-500"
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      description: "User interface and user experience design for digital products",
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
      projects: "40+ Design Projects",
      level: "Beginner to Advanced",
      color: "text-orange-500"
    }
  ];

  const benefits = [
    "Free workshops and training sessions",
    "Hands-on project experience",
    "Industry expert mentorship",
    "Certification opportunities",
    "Portfolio development support",
    "Internship and job referrals"
  ];

  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-primary-light/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills We Cultivate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Develop cutting-edge skills that are in high demand in today's technology landscape
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card key={index} className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className={`h-8 w-8 ${skill.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{skill.category}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-1">
                        {skill.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {skill.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{skill.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Projects:</span>
                        <span className="font-semibold text-primary">{skill.projects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Level:</span>
                        <span className="font-semibold text-foreground">{skill.level}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Join Benefits */}
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Why Join Our Skill Development Program?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get access to comprehensive training, mentorship, and real-world project experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToJoin}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 rounded-full text-lg"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}