import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, ExternalLink, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const flyers = {
  sipAndShare: `event-images/sip-and-share.png`,
  gen1torship: `event-images/gen1torship.png`,
  crackTheEggs: `event-images/crack-the-eggs.png`,
  amazonJrDev: `event-images/amazon-jr-dev.png`,
  firstToFounder: `event-images/first-to-founder.png`,
  firstGenGrad: `event-images/first-gen-grad.png`
};

const ongoingEvents = [
  {
    title: "Sip and Share",
    time: "TBD",
    location: "TBD",
    description:
      "We're excited to bring back Sip and Share with a new format this quarter. This is a dedicated space to connect with GEN1 officers, get advice on classes, internships, and navigating UW, and learn what it's like to be part of GEN1. Whether you're looking for guidance or just want to meet more people in the community, this is a great place to start.",
    type: "Social",
    flyer: flyers.sipAndShare,
    rsvp: "https://docs.google.com/forms/d/e/1FAIpQLSdWJZY9oHejKXFHX6Nthka0WILWLg6DkhEPoBK1zV-4WUjMeQ/viewform?usp=header"
  },
  {
    title: "GEN1torship",
    time: "N/A",
    location: "TBD",
    description:
      "GEN1torship is designed to connect first-generation undergraduate students with first-generation alumni mentors, creating a supportive space for learning, growth, and shared experience. Our mentors can offer insight on navigating UW as a first-gen student, pursuing careers in industry or research, and building confidence as you plan your next steps.",
    type: "Social",
    flyer: flyers.gen1torship,
    rsvp: "https://docs.google.com/forms/d/e/1FAIpQLSfhcM7k5-yz1-9sMzJNPXem0ndouEbFXiJQI51fhchS6LOxGQ/viewform?usp=header"
  },
]

const upcomingEvents = [
  {
    title: "Intern Tea",
    date: "May 5th, 2026",
    time: "5:30 PM - 7:00 PM",
    location: "CSE2 G01",
    description:
      "Curious about what internships are actually like beyond the application process? Join GEN1 for Intern Tea, a panel where students who interned at different companies (Duolingo, Microsoft, SAS, etc.) will share the real day-to-day of their internship experiences and what helped them succeed once they got there.",
    type: "Panel",
    flyer: null,
    rsvp: "https://docs.google.com/forms/d/e/1FAIpQLSe9AwFB_GznYp4VJgVMzI9xSGz1NYBHG34g84plgTyK52axEA/viewform?usp=header"
  },
  {
    title: "First to Founder",
    date: "May 13, 2026",
    time: "5:00 PM - 7:00 PM",
    location: "CSE2 G10",
    description:
      "Join us for First to Founder, a panel featuring our incredible speakers David Geller (Founder and CEO of Spryly) and Ken Horenstein (Founder and Partner of Pack Ventures), to learn more about their entrepreneurial journeys and for a chance to connect with them! This will be a truly informative experience, so be sure to join us!",
    type: "Panel",
    flyer: flyers.firstToFounder,
    rsvp: "https://docs.google.com/forms/d/e/1FAIpQLSdlz7bz_FpjfX1F1fu2MllODZOmF60jbRS6tis0Jeq1DjNULQ/viewform?usp=header"
  },
  {
    title: "First Gen Grad",
    date: "June 4, 2026",
    time: "4:30 PM - 7:00 PM",
    location: "Zillow Commons",
    description:
      "Congratulations to all first-generation Allen School grads! Your dedication and resilience brought you here, and the GEN1 officers couldn't be more proud. This will be a meaningful opportunity to celebrate the accomplishments of the Allen School first-generation community, and we would love for you to join us in recognizing and uplifting our graduates.",
    type: "Social",
    flyer: flyers.firstGenGrad,
    rsvp: "https://docs.google.com/forms/d/e/1FAIpQLSfXdEoORtRSwgCdHhg_JQhjx1awV4YDE-RlqQdnUTv5FnBFPA/viewform?usp=header"
  },
];

const pastEvents = [
  {
    title: "Crack the Eggs",
    date: "April 7, 2026 - April 30, 2026",
    type: "Social",
  },
  {
    title: "Amazon Jr. Dev Information Session",
    date: "April 16, 2026",
    type: "Career",
  },
  {
    title: "Badminton/Sports Day",
    date: "April 11, 2026",
    type: "Social",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Social":
      return "bg-pink/20 text-pink";
    case "Workshop":
      return "bg-lavender/50 text-primary";
    case "Career":
      return "bg-coral/20 text-coral";
    case "Panel":
      return "bg-gold/20 text-gold";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Events
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join us for workshops, panels, socials, and more throughout the year.
            </p>
          </div>
        </section>

        {/* Ongoing/Yearly events */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Current
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ongoing Events
              </h2>
            </div>

            <div className="grid gap-6">
              {ongoingEvents.map((event) => (
                <div
                  key={event.title}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Event Flyer */}
                    <div className="lg:w-48 flex-shrink-0">
                      <AspectRatio
                        ratio={4 / 5}
                        className="bg-muted rounded-xl border-2 border-dashed border-border overflow-hidden"
                      >
                        {event.flyer ? (
                          <img
                            src={event.flyer}
                            alt={`${event.title} flyer`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                            <Image className="w-10 h-10 mb-2" />
                            <span className="text-xs text-center px-2">Event Flyer</span>
                          </div>
                        )}
                      </AspectRatio>
                    </div>
                    
                    <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                              event.type
                            )}`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                        {event.rsvp ? (
                          <a
                            href={event.rsvp}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="gradient-cta border-0 self-start lg:self-center">
                              RSVP
                              <ExternalLink className="ml-2 w-4 h-4" />
                            </Button>
                          </a>
                        ) : (
                          <Button
                            disabled
                            className="border-0 self-start lg:self-center opacity-50 cursor-not-allowed"
                          >
                            RSVP Unavailable
                          </Button>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Coming Up
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Upcoming Events
              </h2>
            </div>

            <div className="grid gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Event Flyer Placeholder */}
                    <div className="lg:w-48 flex-shrink-0">
                      <AspectRatio
                        ratio={4 / 5}
                        className="bg-muted rounded-xl border-2 border-dashed border-border overflow-hidden"
                      >
                        {event.flyer ? (
                          <img
                            src={event.flyer}
                            alt={`${event.title} flyer`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                            <Image className="w-10 h-10 mb-2" />
                            <span className="text-xs text-center px-2">Event Flyer</span>
                          </div>
                        )}
                      </AspectRatio>
                    </div>
                    
                    <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                              event.type
                            )}`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      {event.rsvp ? (
                        <a
                          href={event.rsvp}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="gradient-cta border-0 self-start lg:self-center">
                            RSVP
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </a>
                      ) : (
                        <Button
                          disabled
                          className="border-0 self-start lg:self-center opacity-50 cursor-not-allowed"
                        >
                          RSVP Unavailable
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Archive
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Past Events
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.title}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getTypeColor(
                      event.type
                    )}`}
                  >
                    {event.type}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
