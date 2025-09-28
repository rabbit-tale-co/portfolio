"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectFilters } from "@/components/sections/ProjectFilters";
import { useLanguage } from "@/app/providers/language-provider";

export default function ProjectsPage() {
  const { dict } = useLanguage();

  const [activeFilter, setActiveFilter] = useState<string | "all">("all");

  // Helper function to parse dates from timeline strings
  const getDateFromTimeline = (timeline: string): Date => {
    // Handle dynamic dates with new Date().getFullYear()
    if (timeline.includes("new Date()")) {
      return new Date();
    }

    // Extract the first date from the timeline string (e.g., "03/12/2024 - Present" -> "03/12/2024")
    const dateMatch = timeline.match(/(\d{1,2}\/\d{1,2}\/\d{4}|\d{4})/);
    if (dateMatch) {
      return new Date(dateMatch[0]);
    }

    // Default to current date if no valid date found
    return new Date();
  };

  // Filter projects based on the active filter
  const filteredProjects = dict.projects.data
    .filter((project) => {
      if (activeFilter === "all") return true;
      return project.type === activeFilter;
    });

  // Sort projects by date (newest first)
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const dateA = getDateFromTimeline(a.details?.timeline || "");
    const dateB = getDateFromTimeline(b.details?.timeline || "");
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className="space-y-8">
        {/* Projects */}
        {filteredProjects.length > 0 && (
          <section id="projects">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                {dict.projects.title}
              </h2>
            </div>
            <div className="space-y-px bg-foreground/[0.02] dark:bg-foreground/[0.02]">
              {sortedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} variant="featured" thumbnailType="square" />
              ))}
            </div>
          </section>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            {dict.projects.noProjectsFound}
          </div>
        )}
      </div>
    </>
  );
}
