import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "UW Allen School",
    description: "A campus partner supporting student belonging, mentorship, and professional development.",
    link: "https://www.cs.washington.edu/",
  },
  {
    name: "First Gen @ UW",
    description: "A university-wide resource network that helps first-gen students connect and thrive.",
    link: "https://firstgen.uw.edu/",
  },
  {
    name: "UW CSE Student Life",
    description: "A community of events and programs that strengthens student engagement across the department.",
    link: "https://www.cs.washington.edu/academics/undergraduate/student-life",
  },
];

export const PartnerSpotlightSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Partner Spotlight
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Community partners that help GEN1 grow
          </h2>
          <p className="text-lg text-muted-foreground">
            GEN1 is strengthened by the organizations and networks that invest in first-gen student success.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {partners.map((partner) => (
            <Card key={partner.name} className="border-border/60 bg-card shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{partner.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{partner.description}</p>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Visit site →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
