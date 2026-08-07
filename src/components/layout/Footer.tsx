import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { SocialLink } from "@/types/social";

const socialLinks: SocialLink[] = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/gen1cse" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/gen1-uw" },
  { name: "Email", icon: Mail, href: "mailto:gen1@cs.washington.edu" },
  { name: "Discord", icon: MessageCircle, href: "https://discord.gg/pVY7egry8q" },
];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Resources", path: "/resources" },
  { name: "Leadership", path: "/leadership" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-pink" />
                <div className="w-3 h-3 rounded-sm bg-coral" />
                <div className="w-3 h-3 rounded-sm bg-lavender" />
                <div className="w-3 h-3 rounded-sm bg-gold" />
              </div>
              <span className="font-bold text-xl">GEN1 at UW CSE</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Supporting first-generation college students in the Paul G. Allen
              School of Computer Science & Engineering at the University of
              Washington.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get Involved</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  {social.icon && <social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
            <a
              href="https://mailman.cs.washington.edu/mailman/listinfo/gen1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-sm font-medium transition-colors"
            >
              Subscribe to Mailing List
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} GEN1 at UW CSE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
