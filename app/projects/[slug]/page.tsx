import { OutlineArrowLeft } from "@/icons/Icons";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { SectionSeparator } from "@/components/sections/SectionSeparator";
import { Metadata } from "next";
import { getStatusVariant } from "@/lib/utils";

type PageParams = {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageParams) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col flex-1 max-w-screen-md mx-auto w-full [&>section]:pt-6 [&>div>section:is(:last-child)]:pb-6">
      {/* Back Button */}
      <Link
        href="/projects"
        className="my-3 px-6 inline-flex w-fit items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors uppercase tracking-wider group focus-visible:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:ring-offset-4 focus-visible:ring-ring"
      >
        <OutlineArrowLeft
          size={12}
          className="rotate-0 group-hover:-rotate-45 transition-transform group-focus-visible:-rotate-45"
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
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>
        </div>
      </section>

      <SectionSeparator />

      {/* Project Thumbnail */}
      {project.thumbnail?.large && (
        <section id="project-thumbnail">
          <div className="aspect-video relative overflow-hidden bg-foreground/[0.02] dark:bg-foreground/[0.02]">
            <Image
              src={project.thumbnail.large.src}
              alt={project.thumbnail.large.alt}
              fill
              className="object-cover"
              placeholder={project.thumbnail.large.blur ? "blur" : "empty"}
              blurDataURL={project.thumbnail.large.blur}
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
                <ul className="space-y-2 ml-5">
                  {project.content.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 relative">
                      <span className="size-1.5 absolute -left-4 top-1/2 -translate-y-1/2 bg-foreground flex-shrink-0" />
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
                <dt className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">Category</dt>
                <dd className="mt-1">
                  <Badge variant="secondary">{project.category}</Badge>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">Status</dt>
                <dd className="flex flex-wrap gap-2 mt-1">
                  {project.status.map((status, index) => (
                    <Badge key={index} variant={getStatusVariant(status)}>
                      {status}
                    </Badge>
                  ))}
                </dd>
              </div>
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
