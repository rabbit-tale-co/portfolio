import Link from "next/link";
import { OutlineArrowRight } from "@/icons/Icons";

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
          <div className="border-l-4 border-black dark:border-white pl-4">
            <h2 className="text-lg font-mono font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors uppercase tracking-wider pr-6"
          >
            View all
            <OutlineArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>

        <div className="space-y-px bg-gray-200 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
          {featuredProjects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="group block bg-white dark:bg-gray-950 p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="font-mono font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1">
                        {project.year}
                      </span>
                      <span className={`text-xs font-mono px-2 py-1 ${project.status === 'Active'
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                        }`}>
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <OutlineArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Full-width border at bottom of section */}
      <div className="relative">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 border-t border-gray-200 dark:border-gray-800"
        />
      </div>
    </section>
  );
}
