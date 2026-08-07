import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SocialLink } from "@/types/social";

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/gen1cse",
    handle: "@gen1uwcse",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/gen1-uw/",
    handle: "GEN1 at UW CSE",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/GEN1UW",
    handle: "GEN1 UW CSE",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.gg/pVY7egry8q",
    handle: "GEN1 Discord Server",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Have questions? Want to get involved? We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:gen1@cs.washington.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gen1@cs.washington.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Paul G. Allen School of Computer Science & Engineering
                    <br />
                    University of Washington
                    <br />
                    185 E Stevens Way NE
                    <br />
                    Seattle, WA 98195
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Follow Us
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                      {social.icon && (
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mailing List CTA */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our mailing list to get the latest updates on events,
              resources, and opportunities.
            </p>
            <Button asChild size="lg" className="gradient-cta border-0">
              <a
                href="https://mailman.cs.washington.edu/mailman/listinfo/gen1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 w-5 h-5" />
                Subscribe to Mailing List
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
