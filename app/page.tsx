import { HeroSection } from "./components/home/HeroSection";
import { DigitalSolutionsSection } from "./components/home/DigitalSolutionsSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { PortfolioSection } from "./components/home/PortfolioSection";
import { ProcessSection } from "./components/home/ProcessSection";
import { BenefitsSection } from "./components/home/BenefitsSection";
import { TeamSection } from "./components/home/TeamSection";
import { FAQSection } from "./components/home/FAQSection";
import { CTASection } from "./components/home/CTASection";

export default function Home() {
  return (
    <main className="w-full flex-col min-h-screen bg-datapix-main p-2 sm:p-3 pb-3 gap-2 sm:gap-3 flex overflow-hidden">
      <HeroSection />
      <DigitalSolutionsSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <BenefitsSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
