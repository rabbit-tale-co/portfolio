import { experiences } from "./data";
import { ExperienceTimeline } from "@/components/sections/Experience";
import { SectionSeparator } from "@/components/sections/SectionSeparator";

export default function ExperiencePage() {
  return (
    <section className="px-6 !pb-0">
      {/* Header */}
      <div className="border-l-4 border-black dark:border-white mb-8">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-2">
          Experience
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          A chronological journey through my professional experience and education.
        </p>
      </div>

      <SectionSeparator />

      {/* Timeline */}
      <ExperienceTimeline experiences={experiences} showDetails={true} />
    </section>
  );
}
