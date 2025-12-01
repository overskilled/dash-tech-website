import { HeroSection } from "@/components/custom/hero-section";
import PartnerSection from "@/components/custom/partner-section";
import PortfolioSection from "@/components/custom/portfolio-section";
import ProcessSection from "@/components/custom/process-section";
import ServicesSection from "@/components/custom/service-section";
import WhyChooseUsSection from "@/components/custom/why-choose-us";

export default function Home() {
  return (
    <div className="">
      
      <HeroSection />

      <PartnerSection />

      <ServicesSection />

      <WhyChooseUsSection />

      <PortfolioSection />

      <ProcessSection />

    </div>
  );
}
