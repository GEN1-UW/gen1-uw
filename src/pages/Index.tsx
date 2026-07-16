import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { HumansOfGen1Section } from "@/components/home/HumansOfGen1Section";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ResourcesSection />
        <AboutPreview />
        <HumansOfGen1Section />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
