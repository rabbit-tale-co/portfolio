import Link from "next/link";
import { OutlineArrowRight } from "@/icons/Icons";
import { Badge } from "../ui/badge";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    href: string;
    category: string;
    status: string;
    technologies: string[];
  };
  variant?: "featured" | "compact";
}

export function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  const statusVariant =
    project.status === "Released"
      ? "released"
      : project.status === "Active"
        ? "active"
        : "development";

  if (variant === "featured") {
    return (
      <Link
        href={project.href}
        className="group block bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
      >
        <div className="grid grid-cols-[300px_1fr] gap-px bg-gray-200 dark:bg-gray-800">
          {/* Thumbnail */}
          <div className="bg-gray-100 dark:bg-gray-900 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors flex items-center justify-center p-12">
            <span className="text-gray-400 dark:text-gray-600 font-mono">
              {project.title}
            </span>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-950 group-hover:bg-gray-100 dark:group-hover:bg-gray-900 transition-colors">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge variant={statusVariant}>{project.status}</Badge>
                  </div>
                </div>
                <OutlineArrowRight
                  size={16}
                  className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200"
                />
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={project.href}
      className="group block bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-900 p-6 transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{project.category}</Badge>
            <Badge variant={statusVariant}>{project.status}</Badge>
          </div>
        </div>
        <OutlineArrowRight
          size={16}
          className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200"
        />
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {project.technologies.slice(0, 3).map((tech, techIndex) => (
          <Badge key={techIndex} variant="secondary">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 3 && (
          <span className="text-xs text-gray-500 dark:text-gray-500">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </Link>
  );
}
