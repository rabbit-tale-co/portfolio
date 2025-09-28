'use client'

import { ExperienceTimeline } from "@/components/sections/Experience";
import { SectionSeparator } from "@/components/sections/SectionSeparator";
import { useLanguage } from "@/app/providers/language-provider";

export default function ExperiencePage() {
  const { dict } = useLanguage();
  
  return (
    <section className="!pb-0">
      {/* Header */}
      <div className="border-l-4 border-black dark:border-white mb-8 pl-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-2">
          {dict.experience.title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {dict.experience.subtitle}
        </p>
      </div>

      <SectionSeparator />

      {/* Timeline */}
      <ExperienceTimeline experiences={dict.experience.data} showDetails={true} />
    </section>
  );
}
