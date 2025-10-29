import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Award, BookOpen } from "lucide-react";

export function ProfileCard({ member }) {
  return (
    <Card className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-2 group">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">
            {member.name}
          </h3>
          <p className="text-primary font-semibold mb-2">
            {member.designation}
          </p>
          {member.experience && (
            <span>
              <Badge variant="secondary" className="mb-4">
                {member.experience} Experience
              </Badge>
            </span>
          )}
        </div>

        <div className="space-y-4">
          {member.specialization && (
            <div className="flex items-start space-x-3">
              <span>
                <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              </span>
              <div>
                <p className="font-semibold text-sm text-foreground">
                  Specialization
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.specialization}
                </p>
              </div>
            </div>
          )}

          {member.achievements && (
            <div className="flex items-start space-x-3">
              <span>
                <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              </span>
              <div>
                <p className="font-semibold text-sm text-foreground mb-2">
                  Achievements
                </p>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {member.email && (
            <div className="flex items-center space-x-3 pt-4 border-t border-border">
              <span>
                <Mail className="h-4 w-4 text-primary" />
              </span>
              <a
                href={`mailto:${member.email}`}
                className="text-primary hover:text-primary-hover text-sm font-medium transition-colors"
              >
                {member.email}
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
