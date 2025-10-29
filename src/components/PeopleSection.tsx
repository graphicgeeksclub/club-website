import { ProfileCard } from "./ProfileCard";

interface People {
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  achievements: string[];
  email: string;
  image: string;
}

interface PeopleSectionProps {
  id: string;
  subDesignation?: string;
  title?: string;
  subtitle?: string;
  people: People[]; 
}

export function PeopleSection({
  id,
  title,
  subtitle,
  subDesignation,
  people, 
}: PeopleSectionProps) {
  return (
    <section id={id} className="bg-[#487BCA] text-white dark:bg-[#111] py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold dark:gradient-text pb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl dark:text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {subDesignation && (
            <h3 className="text-3xl font-bold text-center mb-12 mt-12 text-foreground">
              {subDesignation}
            </h3>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {people.map((person, index) => (
            <ProfileCard key={index} member={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
