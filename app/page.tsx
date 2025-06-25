import HeroSection from "@/components/sections/hero-section";
import FeaturedProjectsSection from "@/components/sections/featured-projects-section";
import HonorsAwardsSection from "@/components/sections/honors-awards-section";
import ConnectSection from "@/components/sections/connect-section";
import CTASection from "@/components/sections/cta-section";
import { SectionSeparator } from "@/components/sections/SectionSeparator";


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <TechStackSection /> */}
      <SectionSeparator />
      <FeaturedProjectsSection />
      <SectionSeparator />
      <HonorsAwardsSection />
      <SectionSeparator />
      <ConnectSection />
      <SectionSeparator />
      <CTASection />
    </>
  );
}
