import { OutlineArrowLeft } from "@/icons/Icons";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { SectionSeparator } from "@/components/sections/SectionSeparator";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col flex-1 max-w-screen-md mx-auto w-full [&>section]:pt-6 [&>div>section:is(:last-child)]:pb-6">
      {/* Back Button */}
      <Link
        href="/projects"
        className="my-3 px-6 inline-flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors uppercase tracking-wider group"
      >
        <OutlineArrowLeft
          size={12}
          className="rotate-0 group-hover:-rotate-45 transition-transform"
        />
        Back to Projects
      </Link>

      <SectionSeparator />

      {/* Project Header */}
      <section id="project-header">
        <div className="border-l-4 border-black dark:border-white pl-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-2">
            {project.title}
          </h1>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant={project.status === "development" ? "development" : "released"}>
                {project.status}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Project Thumbnail */}
      {project.thumbnail && (
        <section id="project-thumbnail">
          <div className="aspect-video relative overflow-hidden bg-foreground/[0.02] dark:bg-foreground/[0.02]">
            <Image
              src={project.thumbnail.src}
              alt={project.thumbnail.alt}
              fill
              className="object-cover"
              placeholder={project.thumbnail.blur ? "blur" : "empty"}
              blurDataURL={project.thumbnail.blur}
            />
          </div>
        </section>
      )}

      <SectionSeparator />

      {/* Project Details */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <article id="about">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                About
              </h2>
            </div>
            <div className="px-4 space-y-3">
              {project.content.about.map((paragraph, index) => (
                <p key={index} className="text-sm text-gray-600 dark:text-gray-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Features Section */}
          {project.content.features && (
            <article id="features">
              <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
                <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Features
                </h2>
              </div>
              <div className="px-4">
                <ul className="space-y-2">
                  {project.content.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )}

          {/* Development Section */}
          {project.content.development && (
            <article id="development">
              <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
                <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Development
                </h2>
              </div>
              <div className="px-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.content.development}
                </p>
              </div>
            </article>
          )}
        </div>

        {/* Sidebar */}
        <nav className="lg:col-span-1 space-y-8">
          {/* Project Details */}
          <article id="details">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Details
              </h2>
            </div>
            <div className="px-4 space-y-3">
              <div>
                <dt className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">Role</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{project.details.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">Timeline</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{project.details.timeline}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">Platform</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{project.details.platform}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">Status</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{project.status}</dd>
              </div>
            </div>
          </article>

          {/* Technologies */}
          <article>
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Technologies
              </h2>
            </div>
            <div className="px-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </article>

          {/* Links */}
          {project.links && (
            <article id="links">
              <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
                <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Links
                </h2>
              </div>
              <div className="px-4">
                <div className="flex flex-col gap-1.5">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      GitHub Repository
                    </Link>
                  )}
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      Live Demo
                    </Link>
                  )}
                  {project.links.download && (
                    <Link
                      href={project.links.download}
                      target="_blank"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      Download
                    </Link>
                  )}
                </div>
              </div>
            </article>
          )}
        </nav>
      </section>
    </main>
  );
}
