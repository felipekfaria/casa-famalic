import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TeamSection } from "@/components/TeamSection";
import { AwardsSection } from "@/components/AwardsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <TeamSection />
      <AwardsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
