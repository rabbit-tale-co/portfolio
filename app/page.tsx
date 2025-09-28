"use client";

import HeroSection from "@/components/sections/hero-section";
import FeaturedProjectsSection from "@/components/sections/featured-projects-section";
import HonorsAwardsSection from "@/components/sections/honors-awards-section";
import ConnectSection from "@/components/sections/socials-section";
import CTASection from "@/components/sections/cta-section";
import { SectionSeparator } from "@/components/sections/SectionSeparator";
import { ExperienceTimeline } from "@/components/sections/Experience";
import { useLanguage } from "./providers/language-provider";

export default function Home() {
  const { dict } = useLanguage();

  return (
    <>
      <HeroSection />
      <SectionSeparator />
      <section>
        <div className="border-l-4 border-black dark:border-white mb-8 pl-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-2">
            {dict.home.experience.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {dict.home.experience.subtitle}
          </p>
        </div>
        <ExperienceTimeline experiences={dict.experience.data} maxItems={3} />
      </section>
      <SectionSeparator />
      <FeaturedProjectsSection />
      {/* <SectionSeparator /> */}
      {/* <HonorsAwardsSection /> */}
      <SectionSeparator />
      <ConnectSection />
      <SectionSeparator />
      <CTASection />
    </>
  );
}
