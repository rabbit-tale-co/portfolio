"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectFilters } from "@/components/sections/ProjectFilters";

const SectionSeparator = () => (
  <div className="relative">
    <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 border-t border-gray-200 dark:border-gray-800"></span>
  </div>
);

const projects = [
  {
    title: "TinyBuddies",
    description: "A charming Tamagotchi-inspired mobile game where players care for adorable virtual pets with unique personalities and needs.",
    href: "/projects/tinybuddies",
    category: "Mobile Game",
    status: "In Development",
    technologies: ["Godot", "GDScript", "Mobile", "Game Design", "UI/UX"],
    type: "games",
    featured: true
  },
  {
    title: "SoundLess",
    description: "An immersive 3D horror experience using echolocation mechanics. Players navigate a dark world using only sound and spatial audio.",
    href: "/projects/soundless",
    category: "Horror Game",
    status: "In Development",
    technologies: ["Godot", "GDScript", "3D Audio", "Game Design", "Horror"],
    type: "games",
    featured: true
  },
  {
    title: "Luna AI",
    description: "An advanced AI-powered Minecraft mod featuring fourth-wall breaking interactions and intelligent gameplay modifications.",
    href: "/projects/luna-ai",
    category: "Minecraft Mod",
    status: "Active",
    technologies: ["Java", "Minecraft Forge", "Fabric", "AI Integration", "Mod Development"],
    type: "minecraft",
    featured: true
  },
  {
    title: "TinyRabbit",
    description: "A versatile Discord bot with advanced moderation features, fun commands, and seamless server management capabilities.",
    href: "/projects/tinyrabbit",
    category: "Discord Bot",
    status: "Active",
    technologies: ["TypeScript", "Discord.js", "Node.js", "PostgreSQL", "Supabase"],
    type: "bots",
    featured: true
  },
  {
    title: "BunnyLog",
    description: "A beautiful, lightweight logging library for JavaScript/TypeScript with elegant formatting and comprehensive features.",
    href: "/projects/bunnylog",
    category: "Developer Tool",
    status: "Released",
    technologies: ["TypeScript", "Node.js", "CLI Tools", "NPM Package"],
    type: "tools",
    featured: false
  },
  {
    title: "Discord Bot Dashboard",
    description: "A comprehensive dashboard for managing Discord bots with real-time analytics and intuitive configuration options.",
    href: "/projects/discord-dashboard",
    category: "Web App",
    status: "In Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Discord API", "Supabase"],
    type: "web",
    featured: false
  }
];

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
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} variant="featured" />
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section id="other-projects">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Other Projects
              </h2>
            </div>
            <div className="space-y-px bg-gray-200 dark:bg-gray-800">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} variant="compact" />
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
