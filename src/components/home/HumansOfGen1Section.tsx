import { Card, CardContent } from "@/components/ui/card";

const spotlightStudents = [
  {
    name: "Maya Chen",
    role: "Computer Science Sophomore",
    quote:
      "I used to think I had to figure everything out alone, but GEN1 showed me that community is part of the journey.",
    image: "home-images/amy.jpeg",
  },
  {
    name: "Jordan Alvarez",
    role: "Informatics Junior",
    quote:
      "Being first-gen taught me to be resourceful, and GEN1 helped me turn that into confidence and leadership.",
    image: "home-images/grad.JPG",
  },
  {
    name: "Amina Brooks",
    role: "Data Science Senior",
    quote:
      "My story is still unfolding, but GEN1 gave me mentors, friends, and a place where I feel seen.",
    image: "home-images/christypoker.jpeg",
  },
];

export const HumansOfGen1Section = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Humans of GEN1
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Three stories from the UW GEN1 community
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet a few of the students shaping GEN1 through mentorship, persistence, and belonging.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {spotlightStudents.map((student) => (
            <Card key={student.name} className="overflow-hidden border-border/60 bg-card shadow-sm">
              <img
                src={`${baseUrl}${student.image}`}
                alt={`Portrait of ${student.name}`}
                className="h-72 w-full object-cover"
              />
              <CardContent className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  UW GEN1
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{student.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{student.role}</p>
                <blockquote className="mt-4 border-l-2 border-primary/40 pl-4 text-base italic leading-relaxed text-foreground/90">
                  “{student.quote}”
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
