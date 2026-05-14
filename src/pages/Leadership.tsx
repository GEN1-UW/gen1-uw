import { Navigation } from "@/components/layout/Navigation";
import { ExpandableSection } from "@/components/ui/expandable-section";
import { OfficerCard } from "@/components/ui/officer-card";
import { Footer } from "@/components/layout/Footer";
import { Linkedin, Mail, User } from "lucide-react";
import { useState } from "react";
import { useOfficers } from "@/hooks/use-officers";
import type { Officer, OfficerTerm } from "@/types/officer";

const Leadership = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const [showPast, setShowPast] = useState(false);
  const { officers = [], terms = [], loading } = useOfficers();

  const getCurrentSchoolYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    // School year rolls over in September
    return month >= 8
      ? `${year}-${year + 1}`
      : `${year - 1}-${year}`;
  };

  const currentYear = getCurrentSchoolYear();

  const currentTerms = terms
  .filter((t) => t.year_range === currentYear)
  .slice()
  .sort((a, b) => a.display_order - b.display_order);

  const groupedPast = terms.reduce<Record<string, OfficerTerm[]>>(
    (acc, term) => {
      if (term.year_range === currentYear) return acc;

      if (!acc[term.year_range]) {
        acc[term.year_range] = [];
      }

      acc[term.year_range].push(term);

      return acc;
    },
    {}
  );

  const officerMap = Object.fromEntries(
    officers.map((o) => [o.id, o])
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              The dedicated leaders working to support first-gen students in the
              Allen School.
            </p>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {loading ? (
                <div className="col-span-full text-center text-muted-foreground">
                  Loading officers...
                </div>
              ) : officers.length === 0 ? (
                <div className="col-span-full text-center text-muted-foreground">
                  No officers found.
                </div>
              ) : (
              currentTerms.map((term) => {
                const officer = officerMap[term.officer_id];
                if (!officer) return null;

                return (
                  <OfficerCard
                    key={`${term.officer_id}-${term.year_range}`}
                    name={officer.name}
                    image={officer.image}
                    role={term.role}
                    pronouns={officer.pronouns}
                    major={officer.major}
                    year={term.year}
                    favClass={term.fav_class}
                    favLang={term.fav_lang}
                    askAbout={term.ask_about}
                    funFact={term.fun_fact}
                    linkedIn={officer.linkedin}
                    email={officer.email}
                  />
                );
              })
            )}
            </div>
          </div>
        </section>

        {/* Past Leadership */}
        <ExpandableSection title="See past leadership">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {(Object.entries(groupedPast) as [string, OfficerTerm[]][])
                .sort(([a], [b]) => b.localeCompare(a))
                .map(([yearRange, group]) => (
                  <div key={yearRange}>
                    <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                      {yearRange} Leadership
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group
                        .slice()
                        .sort((a, b) => a.display_order - b.display_order)
                        .map((term) => {
                        const officer = officerMap[term.officer_id];
                        if (!officer) return null;

                        return (
                          <OfficerCard
                            key={`${term.officer_id}-${term.year_range}`}
                            name={officer.name}
                            image={officer.image}
                            role={term.role}
                            pronouns={officer.pronouns}
                            major={officer.major}
                            year={term.year}
                            favClass={term.fav_class}
                            favLang={term.fav_lang}
                            askAbout={term.ask_about}
                            funFact={term.fun_fact}
                            linkedIn={officer.linkedin}
                            email={officer.email}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </ExpandableSection>
        

        {/* Join Leadership */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Want to Join the Team?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for passionate first-gen students to help lead
                our organization. Leadership positions open up each spring quarter.
              </p>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Benefits of Leadership
                </h3>
                <ul className="text-left space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">•</span>
                    Develop leadership and organizational skills
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">•</span>
                    Network with industry professionals and alumni
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">•</span>
                    Make a meaningful impact on your community
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">•</span>
                    Build your resume with valuable experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;