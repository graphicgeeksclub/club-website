import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Code, Trophy } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center dark:text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in mt-10 lg:mt-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float text-white">
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white"> */}
            Graphic Geeks
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Where creativity meets technology. Join the most innovative tech
            club at Graphic Era College.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("intro")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-full text-lg"
            >
              Explore Our Club <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("join")}
              variant="outline"
              size="lg"
              className="border-white text-primary hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-full text-lg"
            >
              Join Now
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pb-8 lg:pb-0">
            <div className="glass-card p-6 rounded-2xl animate-slide-up">
              <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">50+ Active Members</h3>
              <p className="text-muted-foreground dark:text-blue-100">
                A diverse community of tech enthusiasts
              </p>
            </div>
            <div
              className="glass-card p-6 rounded-2xl animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Code className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Multiple Domains</h3>
              <p className="text-muted-foreground dark:text-blue-100">
                Web Dev, AI/ML, Android, and more
              </p>
            </div>
            <div
              className="glass-card p-6 rounded-2xl animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Trophy className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-muted-foreground dark:text-blue-100">
                Multiple hackathon victories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
