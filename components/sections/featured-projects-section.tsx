import Link from "next/link";
import { OutlineArrowRight } from "@/icons/Icons";
import { SectionSeparator } from "./SectionSeparator";

const featuredProjects = [
  {
    title: "TinyBuddies",
    description: "A charming Tamagotchi-inspired mobile game where players care for adorable virtual pets with unique personalitie...",
    category: "Mobile Game",
    status: ["In Development", "Archived"],
    technologies: ["Godot", "GDScript", "Game Design"],
    href: "/projects/tinybuddies"
  },
  {
    title: "SoundLess",
    description: "An innovative horror game where players navigate through darkness using echolocation mechanics and sound-based...",
    category: "Horror Game",
    status: ["In Development", "Concept"],
    technologies: ["Godot", "GDScript", "Sound Design"],
    href: "/projects/soundless"
  },
  {
    title: "Luna AI",
    description: "An advanced Minecraft mod that enhances gameplay with AI-powered features and unique fourth-wall-breaking...",
    category: "Minecraft Mod",
    status: ["Released", "Alpha"],
    technologies: ["Java", "Fabric API", "Minecraft Modding"],
    href: "/projects/luna"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Released":
      return "bg-green-500/10 text-green-700 dark:text-green-300";
    case "Alpha":
      return "bg-purple-500/10 text-purple-700 dark:text-purple-300";
    case "Concept":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-300";
    case "Archived":
      return "bg-gray-500/10 text-gray-700 dark:text-gray-300";
    default:
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300";
  }
};

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="relative">
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-6">
          <div className="border-l-4 border-foreground pl-4">
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors uppercase tracking-wider flex items-center gap-1 pr-6 group"
          >
            View all
            <OutlineArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px bg-foreground/[0.02]">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="block bg-background group relative focus-visible:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:ring-ring"
            >
              <div className="p-6 space-y-4 group-hover:bg-foreground/[0.02] transition-colors">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground uppercase tracking-wider group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium px-2 py-0.5 bg-foreground/[0.05] text-foreground/80 uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.status.map((status, index) => (
                        <span
                          key={index}
                          className={`text-[10px] font-medium px-2 py-0.5 uppercase tracking-wider ${getStatusColor(status)}`}
                        >
                          {status}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                    <OutlineArrowRight size={14} className="text-primary" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-medium text-foreground/60 bg-foreground/[0.02] px-2 py-0.5 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SectionSeparator />
    </section>
  );
}
