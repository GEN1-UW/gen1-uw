import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Compass, Sparkles } from "lucide-react";

const programs = [
  {
    icon: Lightbulb,
    title: "Peer Mentoring",
    description:
      "Connect with upperclassmen who have navigated UW CSE and first-gen pathways before you.",
  },
  {
    icon: Compass,
    title: "Career Exploration",
    description:
      "Attend panels and workshops focused on internships, job applications, and tech career planning.",
  },
  {
    icon: Sparkles,
    title: "Community Events",
    description:
      "Join socials, hack nights, and support sessions built for first-gen student success.",
  },
];

export const ProgramsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              GEN1 Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Programs that help first-gen students thrive at UW CSE
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              From mentorship to career guidance, GEN1 provides structured experiences that make the transition into computer science more manageable and more meaningful.
            </p>
            <Button asChild size="lg" className="gradient-cta border-0">
              <Link to="/programs">
                Learn more about programs
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {programs.map((program) => (
              <div key={program.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
