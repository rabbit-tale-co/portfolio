"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectFilters } from "@/components/sections/ProjectFilters";
import { projects } from "./data";

const SectionSeparator = () => (
  <div className="relative">
    <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 border-t border-gray-200 dark:border-gray-800"></span>
  </div>
);

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="space-y-8">
      <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className="space-y-8">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section id="featured-projects">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Featured Projects
              </h2>
            </div>
            <div className="space-y-px bg-gray-200 dark:bg-gray-800">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} variant="featured" />
              ))}
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <>
            <SectionSeparator />
            {/* Other Projects */}
            <section id="other-projects">
              <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Other Projects
                </h2>
              </div>
              <div className="space-y-px bg-gray-200 dark:bg-gray-800">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} variant="compact" />
                ))}
              </div>
            </section>
          </>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No projects found for the selected filter.
          </div>
        )}
      </div>

      <SectionSeparator />

      {/* Call to Action */}
      <section id="cta">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center p-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Interested in collaborating?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Let&apos;s work together on your next project
            </p>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
