import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import FeaturedProjectsSection from "@/components/sections/featured-projects-section";
import HonorsAwardsSection from "@/components/sections/honors-awards-section";
import ConnectSection from "@/components/sections/connect-section";
import CTASection from "@/components/sections/cta-section";

const SectionSeparator = () => (
  <div className="relative">
    <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 border-t border-gray-200 dark:border-gray-800"></span>
  </div>
);

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SectionSeparator />
      <AboutSection />
      <SectionSeparator />
      <FeaturedProjectsSection />
      <SectionSeparator />
      <HonorsAwardsSection />
      <SectionSeparator />
      <ConnectSection />
      <SectionSeparator />
      <CTASection />
    </div>
  );
}
