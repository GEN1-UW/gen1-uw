import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, ExternalLink, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Event } from "@/types/event";

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
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*");

    console.log("SUPABASE DATA:", data);
    console.log("SUPABASE ERROR:", error);

    if (error) {
      console.error(error);
      return;
    }

    const sorted = (data || []).sort((a, b) => {
      // normalize missing values so they don't break ordering
      const aEnd = a.end_date ? Date.parse(a.end_date) : Number.POSITIVE_INFINITY;
      const bEnd = b.end_date ? Date.parse(b.end_date) : Number.POSITIVE_INFINITY;

      if (aEnd !== bEnd) return aEnd - bEnd;

      const aStart = a.start_date ? Date.parse(a.start_date) : Number.POSITIVE_INFINITY;
      const bStart = b.start_date ? Date.parse(b.start_date) : Number.POSITIVE_INFINITY;

      return aStart - bStart;
    });

    setEvents(sorted);
    setLoading(false);
  };

  const now = new Date();

  const ongoingEvents = events.filter(e => e.status === "ongoing");
  const upcomingEvents = events.filter(e => e.status === "upcoming");
  const pastEvents = [...events]
  .filter(e => e.status === "past")
  .sort((a, b) => {
    const aTime = a.end_date
      ? Date.parse(a.end_date + "T00:00:00Z")
      : a.start_date
      ? Date.parse(a.start_date + "T00:00:00Z")
      : -Infinity;

    const bTime = b.end_date
      ? Date.parse(b.end_date + "T00:00:00Z")
      : b.start_date
      ? Date.parse(b.start_date + "T00:00:00Z")
      : -Infinity;

    return bTime - aTime; // newest → oldest
  });

  const formatDateRange = (start?: string | null, end?: string | null) => {
    const format = (d: string) =>
      new Date(d).toLocaleDateString("en-US", {
        timeZone: "UTC",
        month: "long",
        day: "numeric",
        year: "numeric",
      });

    if (!start) return "TBD";

    if (!end || end === start) {
      return format(start);
    }

    return `${format(start)} - ${format(end)}`;
  };

  const formatTime = (time?: string | null) => {
    if (!time) return null;

    const [h, m] = time.split(":");
    let hour = parseInt(h);
    const minute = m;

    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    return `${hour}:${minute} ${ampm}`;
  };

  const formatTimeRange = (
    start?: string | null,
    end?: string | null
  ) => {
    const startTime = formatTime(start);
    const endTime = formatTime(end);

    if (!startTime && !endTime) return "TBD";
    if (startTime && !endTime) return startTime;

    return `${startTime} - ${endTime}`;
  };

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
                        {event.flyer_url ? (
                          <img
                            src={event.flyer_url}
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
                            {formatDateRange(event.start_date, event.end_date)}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {formatTimeRange(event.start_time, event.end_time)}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location || "TBD"}
                          </div>
                        </div>
                      </div>
                        {event.rsvp_url ? (
                          <a
                            href={event.rsvp_url}
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
                        {event.flyer_url ? (
                          <img
                            src={event.flyer_url}
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
                            {formatDateRange(event.start_date, event.end_date)}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {formatTimeRange(event.start_time, event.end_time)}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      {event.rsvp_url ? (
                        <a
                          href={event.rsvp_url}
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
                  <p className="text-sm text-muted-foreground">{formatDateRange(event.start_date, event.end_date)}</p>
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
