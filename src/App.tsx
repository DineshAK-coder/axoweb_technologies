import { HeroSection } from "@/src/sections/HeroSection";
import { MarqueeSection } from "@/src/sections/MarqueeSection";
import { AboutSection } from "@/src/sections/AboutSection";
import { ServicesSection } from "@/src/sections/ServicesSection";
import { FoundersPromise } from "@/src/sections/FoundersPromise";
import { PerformanceBento } from "@/src/sections/PerformanceBento";
import { TechnicalDebtEstimator } from "@/src/sections/TechnicalDebtEstimator";
import { ProjectsSection } from "@/src/sections/ProjectsSection";
import { EstimatorCalculator } from "@/src/components/EstimatorCalculator";
import Footer from "@/src/components/Footer";

export default function App() {
  return (
    <main className="bg-[#0C0C0C] overflow-x-clip min-h-screen relative">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <div className="h-24 md:h-32" />
      <FoundersPromise />
      <PerformanceBento />
      <TechnicalDebtEstimator />
      <EstimatorCalculator />
      <Footer />
    </main>
  );
}
