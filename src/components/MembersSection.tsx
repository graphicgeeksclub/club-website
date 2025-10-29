import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Linkedin, Github, Mail } from "lucide-react";

// Members Section Data
import { presidentBench } from "@/data/presidentBench";
import { teamHeads } from "@/data/teamHeads";
import { allMembers } from "@/data/allMembers";

export function MembersSection() {
  return (
    <section
      id="members"
      className="bg-[#487BCA] text-white dark:bg-[#111] py-20"
    >
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 dark:gradient-text">
            Our Amazing Team
          </h2>
          <p className="text-xl dark:text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals who drive innovation and excellence
            in our club
          </p>
        </div>

        {/* Core Leadership Team */}
        <MemberSectionCardList
          title={"President Bench"}
          people={presidentBench}
          type={"President-Bench"}
        />

        {/* Core Team Head */}
        <MemberSectionCardList
          title={"Team Heads"}
          people={teamHeads}
          type={"Team-Heads"}
        />

        {/* All Members Section */}
        <AllMemberSectionList />
      </div>
    </section>
  );
}

interface Member {
  name: string;
  position: string;
  year: string;
  skills: string[];
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  email: string;
  team?: Team[];
}

interface Team {
  id: string;
  name: string;
}

interface MemberSectionCardListProps {
  title: string;
  people: Member[];
  type: "President-Bench" | "Team-Heads";
}

type toggleTeamType = {
  [key: number]: boolean;
};

const MemberSectionCardList = ({
  title,
  people,
  type,
}: MemberSectionCardListProps) => {

  const isTeamHead = type === "Team-Heads";
  const [expandedTeams, setExpandedTeams] = useState<toggleTeamType>({});

  const toggleTeam = (index: number) => {
    setExpandedTeams((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* Core Leadership Team */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground text-white">
          {title}
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
            isTeamHead ? 2 : 3
          } gap-8 mx-auto`}
          style={{ alignItems: "start" }}
        >
          {people.map((member, index) => (
            <Card
              key={index}
              className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-2 group mb-2"
            >
              <CardContent className="py-6 px-5">
                <div className="text-center mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-1 text-foreground">
                    {member.name}
                  </h4>
                  <Badge
                    variant="default"
                    className="mb-2 bg-primary text-primary-foreground"
                  >
                    {member.position}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.year}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2 text-foreground">
                    Skills:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4 pt-4 border-t border-border">
                  <a
                    href={member.linkedin}
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.github}
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>

                {isTeamHead && member.team && member.team.length > 0 && (
                  <>
                    <Button
                      onClick={() => toggleTeam(index)}
                      variant="outline"
                      size="lg"
                      className="mb-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full mt-4"
                    >
                      {expandedTeams[index] ? "Hide" : "Show"} Team
                      {expandedTeams[index] ? (
                        <ChevronUp className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDown className="ml-2 h-5 w-5" />
                      )}
                    </Button>

                    {expandedTeams[index] && (
                      <div className="border-[.2rem] h-fit p-4 rounded-md text-sm space-y-2 mt-2">
                        {member.team.map((team) => (
                          <p
                            key={team.id}
                            className="text-foreground font-medium"
                          >
                            {team.name}
                          </p>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

const AllMemberSectionList = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  return (
    <div className="text-center">
      <Button
        onClick={() => setShowAllMembers(!showAllMembers)}
        variant="outline"
        size="lg"
        className="mb-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-black dark:text-white"
      >
        {showAllMembers ? "Hide" : "View All"} Club Members
        {showAllMembers ? (
          <ChevronUp className="ml-2 h-5 w-5" />
        ) : (
          <ChevronDown className="ml-2 h-5 w-5" />
        )}
      </Button>

      {showAllMembers && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            All Club Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allMembers.map((member, index) => (
              <Card
                key={index}
                className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-1">
                    {member.position}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {member.year}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
