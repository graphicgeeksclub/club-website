import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
// import clubLogo from "@/assets/club-logo.jpeg";
import clubLogo from "@/assets/club-logo.png";
import collegeLogo from "@/assets/college-logo.png";

export function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={clubLogo} alt="Graphic Geeks Logo" className="h-12 w-12" />
          <div className="hidden md:flex flex-col">
            <h1 className="text-xl font-bold gradient-text">Graphic Geeks</h1>
            <span className="text-xs text-muted-foreground">Graphic Era College</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('intro')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('faculty')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Faculty
          </button>
          <button 
            onClick={() => scrollToSection('founders')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Founders
          </button>
          <button 
            onClick={() => scrollToSection('members')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Members
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Events
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Gallery
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <img src={collegeLogo} alt="Graphic Era College" className="h-10 w-10" />
          <ThemeToggle />
          <Button 
            onClick={() => scrollToSection('join')}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-6 py-2 rounded-full"
          >
            Join Club
          </Button>
        </div>
      </div>
    </header>
  );
}