import HeroSection from "@/components/sections/hero-section";
import FeaturedProjectsSection from "@/components/sections/featured-projects-section";
import HonorsAwardsSection from "@/components/sections/honors-awards-section";
import ConnectSection from "@/components/sections/connect-section";
import CTASection from "@/components/sections/cta-section";
import { SectionSeparator } from "@/components/sections/SectionSeparator";
import { experiences } from "./experience/data";
import { ExperienceTimeline } from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionSeparator />
      <section className="px-6">
        <div className="border-l-4 border-black dark:border-white mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-2">
            Experience
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Recent highlights from my professional journey.
          </p>
        </div>
        <ExperienceTimeline experiences={experiences} maxItems={3} />
      </section>
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
