import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/eventsData";
import { achievements } from "@/data/achievements";
import { Award, Calendar, Trophy, Users } from "lucide-react";

export function EventsSection() {
  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Events & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our journey of innovation, learning, and recognition in
            the tech community
          </p>
        </div>

        {/* Events Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Signature Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Card
                  key={index}
                  className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-foreground mb-1">
                            {event.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <Badge
                              variant={
                                event.status === "ongoing"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-foreground">
                          Participants:
                        </span>
                        <Badge variant="outline" className="bg-primary/5">
                          <Users className="h-3 w-3 mr-1" />
                          {event.participants}
                        </Badge>
                      </div>

                      <div>
                        <p className="font-semibold text-foreground mb-2">
                          Key Achievements:
                        </p>
                        <ul className="space-y-1">
                          {event.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-muted-foreground text-sm flex items-center"
                            >
                              <Award className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Recognitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="glass-card text-center hover:glow-effect transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-primary font-semibold text-sm mb-1">
                    {achievement.year}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {achievement.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
