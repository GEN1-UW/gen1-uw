import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles } from "lucide-react";

const spotlights = [
  {
    name: "Student Name",
    initials: "SN",
    image: "placeholder.svg",
    description: "Placeholder sentence about this first-gen student's journey and community impact.",
  },
  {
    name: "Student Name",
    initials: "SN",
    image: "placeholder.svg",
    description: "Placeholder sentence about this first-gen student's journey and community impact.",
  },
  {
    name: "Student Name",
    initials: "SN",
    image: "placeholder.svg",
    description: "Placeholder sentence about this first-gen student's journey and community impact.",
  },
];

export const HumansOfGen1Section = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/40 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Humans of GEN1
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              First-gen stories, <span className="text-gradient">one spotlight at a time</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            These placeholder spotlights celebrate the people behind GEN1 and the ways they are shaping community, confidence, and belonging.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {spotlights.map((spotlight) => (
            <Card key={spotlight.name} className="overflow-hidden border-primary/10 shadow-[0_20px_60px_-30px_rgba(141,91,176,0.35)]">
              <div className="flex items-center gap-4 p-6">
                <Avatar className="h-20 w-20 rounded-2xl">
                  <AvatarImage
                    src={`${baseUrl}${spotlight.image}`}
                    alt={spotlight.name}
                    className="rounded-2xl object-cover"
                  />
                  <AvatarFallback className="rounded-2xl bg-secondary text-primary font-semibold">
                    {spotlight.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-foreground">{spotlight.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {spotlight.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
