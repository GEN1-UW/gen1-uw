import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Sparkles } from "lucide-react";

const programHighlights = [
  {
    icon: Users,
    title: "Mentorship Circles",
    description:
      "Pair with faculty, alumni, and upperclassmen mentors who understand the first-gen experience.",
  },
  {
    icon: BookOpen,
    title: "Skill-Building Workshops",
    description:
      "Attend targeted workshops on resumes, interviewing, graduate school, and technical skills.",
  },
  {
    icon: Sparkles,
    title: "Leadership Training",
    description:
      "Develop confidence, project management, and inclusive leadership through hands-on roles.",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Programs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Programs Built for First-Gen Success
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Explore the initiatives that support GEN1 members academically, professionally, and personally.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {programHighlights.map((program) => (
                <div key={program.title} className="rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1">
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <program.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">{program.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Designed for first-generation tech students.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              GEN1 programming is built around the transition to UW CSE, career exploration, and leadership development so first-gen students can connect, learn, and lead.
            </p>
            <Button asChild size="lg" className="gradient-cta border-0">
              <Link to="/contact">
                Contact Program Leads
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
