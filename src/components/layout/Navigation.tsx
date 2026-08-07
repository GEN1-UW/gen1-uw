import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Resources", path: "/resources" },
  { name: "Programs", path: "/programs" },
  { name: "Leadership", path: "/leadership" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-pink" />
              <div className="w-3 h-3 rounded-sm bg-coral" />
              <div className="w-3 h-3 rounded-sm bg-lavender" />
              <div className="w-3 h-3 rounded-sm bg-gold" />
            </div>
            <span className="font-bold text-xl text-primary">GEN1</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="gradient-cta border-0">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfwHM1RJi0JgpEz045oPa3qZUL5DQjvqMetT2yJF5QJtVUjw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join GEN1
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-secondary text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="gradient-cta border-0 mt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdfwHM1RJi0JgpEz045oPa3qZUL5DQjvqMetT2yJF5QJtVUjw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join GEN1
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
