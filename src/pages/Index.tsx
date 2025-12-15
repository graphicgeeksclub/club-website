import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MembersSection } from "@/components/MembersSection";
import { EventsSection } from "@/components/EventsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import { PeopleSection } from "@/components/PeopleSection";

// People Section Data
import { faculty } from "@/data/faculty";
import { founders } from "@/data/founders";

const Index = () => {

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <PeopleSection
          id={"faculty"}
          title="Our Faculty"
          subtitle="Meet the brilliant minds who guide and mentor our club members towards excellence"
          people={faculty}
        />
        <PeopleSection
          id={"founders"}
          title="Our Founders"
          subtitle="Guiding us with invaluable knowledge"
          people={founders}
        />
        <MembersSection />
        <EventsSection />
        <SkillsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
