import Link from "next/link";
import { OutlineArrowRight } from "@/icons/Icons";
import { SectionSeparator } from "./SectionSeparator";

const featuredProjects = [
  {
    title: "TinyBuddies",
    description: "Mobile Tamagotchi-inspired game with virtual pet care mechanics",
    year: "2024",
    status: "In Development",
    href: "/projects/tinybuddies"
  },
  {
    title: "SoundLess",
    description: "3D horror game using echolocation and spatial audio",
    year: "2024",
    status: "In Development",
    href: "/projects/soundless"
  },
  {
    title: "Luna AI",
    description: "AI-powered Minecraft mod with fourth-wall breaking features",
    year: "2023",
    status: "Active",
    href: "/projects/luna"
  }
];

export default function FeaturedProjectsSection() {
  return (
    <section id="projects">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="border-l-4 border-foreground pl-4">
            <h2 className="text-lg font-mono font-bold text-foreground uppercase tracking-wider">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm font-mono text-foreground/60 hover:text-foreground transition-colors uppercase tracking-wider pr-6"
          >
            View all
            <OutlineArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>

        <div className="space-y-px bg-foreground/[0.02] border-t border-border-foreground">
          {featuredProjects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="group block bg-background p-6 hover:bg-foreground/[0.02] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="font-mono font-bold text-foreground uppercase tracking-wider">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-foreground/60 bg-foreground/[0.02] px-2 py-1">
                        {project.year}
                      </span>
                      <span className={`text-xs font-mono px-2 py-1 ${project.status === 'Active'
                        ? 'bg-green-500/10 text-green-700 dark:text-green-300'
                        : 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300'
                        }`}>
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <OutlineArrowRight
                    size={16}
                    className="text-foreground/40 group-hover:text-foreground/60"
                  />
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
