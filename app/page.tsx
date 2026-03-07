import { HeroSection } from "./components/home/HeroSection";
import { DigitalSolutionsSection } from "./components/home/DigitalSolutionsSection";
import { BrandLogosSection } from "./components/home/BrandLogosSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { PortfolioSection } from "./components/home/PortfolioSection";
import { ProcessSection } from "./components/home/ProcessSection";
import { BenefitsSection } from "./components/home/BenefitsSection";
import { TeamSection } from "./components/home/TeamSection";
import { FAQSection } from "./components/home/FAQSection";
import { CTASection } from "./components/home/CTASection";

export default function Home() {
  return (
    <main className="w-full flex-col min-h-screen bg-[#E5E5E5] p-2 sm:p-3 pb-3 gap-2 sm:gap-3 flex overflow-hidden">
      <div className="relative w-full min-h-[95vh] rounded-[32px] sm:rounded-[40px] flex flex-col items-center justify-center overflow-hidden pt-10 pb-20 bg-[#f8f9fa] shadow-sm border border-gray-200/50">
        <HeroSection />
      </div>
      <DigitalSolutionsSection />
      <BrandLogosSection />
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
