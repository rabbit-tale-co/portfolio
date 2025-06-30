"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectFilters } from "@/components/sections/ProjectFilters";
import { projects } from "./data";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter
  );

  return (
    <>
      <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className="space-y-8">
        {/* Projects */}
        {filteredProjects.length > 0 && (
          <section id="projects">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Projects
              </h2>
            </div>
            <div className="space-y-px bg-foreground/[0.02] dark:bg-foreground/[0.02]">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} variant="featured" thumbnailType="square" />
              ))}
            </div>
          </section>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No projects found for the selected filter.
          </div>
        )}
      </div>
    </>
  );
}
