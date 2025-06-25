import Link from "next/link";
import Image from "next/image";
import { OutlineArrowRight } from "@/icons/Icons";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/app/projects/data";

interface ProjectCardProps {
  project: Project;
  variant: "featured" | "compact";
}

export function ProjectCard({ project, variant }: ProjectCardProps) {
  return (
    <div className="bg-background">
      <Link href={`/projects/${project.slug}`} className="block group">
        {variant === "featured" ? (
          <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-px hover:bg-foreground/[0.02] border-b border-t border-border-foreground transition-colors">
            {/* Thumbnail */}
            <div className="relative aspect-video sm:aspect-square bg-foreground/[0.02] overflow-hidden">
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail.src}
                  alt={project.thumbnail.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder={project.thumbnail.blur ? "blur" : "empty"}
                  blurDataURL={project.thumbnail.blur}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-600 font-mono">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <OutlineArrowRight
                  size={16}
                  className="text-gray-400 dark:text-gray-600 -rotate-45 group-hover:rotate-0 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-all"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant={"secondary"}>{project.category}</Badge>
                <Badge variant={project.status === "development" ? "development" : "released"}>
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 bg-foreground/[0.02] text-gray-600 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 hover:bg-foreground/[0.02] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <OutlineArrowRight
                size={16}
                className="text-gray-400 dark:text-gray-600 -rotate-45 group-hover:rotate-0 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-all"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant={project.status === "development" ? "development" : "released"}>
                {project.status}
              </Badge>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-1 bg-foreground/[0.02] text-gray-600 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}
