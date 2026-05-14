import { Linkedin, Mail } from "lucide-react";

interface OfficerCardProps {
  name: string;
  image: string;
  role: string;
  pronouns?: string;
  major?: string;
  year?: string;
  favClass?: string;
  favLang?: string;
  askAbout?: string;
  funFact?: string;
  linkedIn?: string;
  email?: string;
  baseUrl?: string;
  compact?: boolean;
}

export function OfficerCard({
  name,
  image,
  role,
  pronouns,
  major,
  year,
  favClass,
  favLang,
  askAbout,
  funFact,
  linkedIn,
  email,
  baseUrl = "",
  compact = false,
}: OfficerCardProps) {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all">
      
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-secondary border-4 border-lavender/50 mb-5 mx-auto group-hover:scale-105 group-hover:border-primary/50 transition-all overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-primary font-medium text-base mb-1">{role}</p>

        {!compact && pronouns && (
          <p className="text-sm text-muted-foreground mb-3">
            {pronouns}
          </p>
        )}

        {/* Details */}
        {!compact && (
          <div className="space-y-2 text-left bg-secondary/50 rounded-lg p-3 mb-4">
            {major && (
              <p className="text-sm">
                <span className="font-medium text-foreground">Major:</span>{" "}
                <span className="text-muted-foreground">{major}</span>
              </p>
            )}

            {year && (
              <p className="text-sm">
                <span className="font-medium text-foreground">Year:</span>{" "}
                <span className="text-muted-foreground">{year}</span>
              </p>
            )}

            {favClass && (
              <p className="text-sm">
                <span className="font-medium text-foreground">Fav Class:</span>{" "}
                <span className="text-muted-foreground">{favClass}</span>
              </p>
            )}

            {favLang && (
              <p className="text-sm">
                <span className="font-medium text-foreground">Fav Language:</span>{" "}
                <span className="text-muted-foreground">{favLang}</span>
              </p>
            )}

            {askAbout && (
              <p className="text-sm">
                <span className="font-medium text-foreground">Ask Me About:</span>{" "}
                <span className="text-muted-foreground">{askAbout}</span>
              </p>
            )}
          </div>
        )}

        {/* Fun fact */}
        {!compact && funFact && (
          <p className="text-sm text-accent font-medium italic mb-4">
            {funFact}
          </p>
        )}

        {/* Socials */}
        <div className="flex justify-center gap-2">
          {linkedIn && (
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground" />
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4 text-muted-foreground" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}