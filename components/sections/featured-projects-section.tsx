import Link from "next/link";
import { OutlineArrowRight } from "@/icons/Icons";
import { SectionSeparator } from "./SectionSeparator";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/app/projects/data";

const featuredProjects: Project[] = [
  {
    title: "TinyBuddies",
    description: "Mobile Tamagotchi-inspired game with virtual pet care mechanics",
    slug: "tinybuddies",
    category: "Mobile Game",
    status: ["In Development"],
    technologies: ["Godot", "GDScript", "Game Design"],
    type: "games",
    content: {
      about: ["A charming Tamagotchi-inspired mobile game where players care for adorable virtual pets."]
    },
    details: {
      role: "Project Director & Game Designer",
      timeline: "2024 - Present",
      platform: "iOS & Android"
    }
  },
  {
    title: "SoundLess",
    description: "3D horror game using echolocation and spatial audio",
    slug: "soundless",
    category: "Horror Game",
    status: ["In Development"],
    technologies: ["Godot", "GDScript", "Sound Design"],
    type: "games",
    content: {
      about: ["An innovative horror game where players navigate through darkness using echolocation mechanics."]
    },
    details: {
      role: "Lead Developer & Artist Director",
      timeline: "2024 - Present",
      platform: "PC"
    }
  },
  {
    title: "Luna AI",
    description: "AI-powered Minecraft mod with fourth-wall breaking features",
    slug: "luna-ai",
    category: "Minecraft Mod",
    status: ["Active"],
    technologies: ["Java", "Fabric API", "Minecraft Modding"],
    type: "minecraft",
    content: {
      about: ["An advanced Minecraft mod that enhances gameplay with AI-powered features."]
    },
    details: {
      role: "Lead Developer",
      timeline: "2023 - Present",
      platform: "Minecraft Java Edition"
    }
  }
];

export default function FeaturedProjectsSection() {
  return (
    <section id="projects">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="border-l-4 border-foreground pl-4">
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors uppercase tracking-wider pr-6"
          >
            View all
            <OutlineArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>

        <div className="space-y-px bg-foreground/[0.02]">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="compact" />
          ))}
        </div>
      </div>

      <SectionSeparator />
    </section>
  );
}
