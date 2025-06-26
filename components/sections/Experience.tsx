import { Experience } from "@/app/experience/data";
import { Badge } from "@/components/ui/badge";
import { OutlineArrowRight } from "@/icons/Icons";
import Link from "next/link";

interface ExperienceCardProps {
  experience: Experience;
  showDetails?: boolean;
}

function ExperienceCard({ experience, showDetails = false }: ExperienceCardProps) {
  return (
    <div className="group relative">
      {/* Header */}
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-bold">{experience.company}</h3>
        <time className="text-sm text-muted-foreground font-mono shrink-0">
          {experience.startDate} — {experience.endDate}
        </time>
      </div>

      {/* Position & Type */}
      <div className="flex items-center gap-3 mt-1 mb-4">
        <h4 className="text-base font-medium">{experience.position}</h4>
        <Badge variant="default" className="font-mono text-[10px]">
          {experience.type}
        </Badge>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground ml-4">{experience.description}</p>

      {showDetails ? (
        <>
          {/* Projects */}
          {experience.projects && experience.projects.length > 0 && (
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Projects</h5>
              <ul className="space-y-4 ml-4">
                {experience.projects.map((project, i) => (
                  <li key={i} className="text-sm [&_*:not(h6)]:ml-4">
                    <h6 className="font-medium mb-1">{project.name}</h6>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                      >
                        View Project
                        <OutlineArrowRight size={16} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Key Achievements</h5>
              <ul className="space-y-2.5 ml-8">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm relative">
                    <span className="absolute -left-4 top-1/2 size-1.5 mt-0.25 -translate-y-1/2 bg-foreground flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {experience.tags && experience.tags.length > 0 && (
            <div className="mt-6">
              <div className="flex flex-wrap gap-1.5 ml-4">
                {experience.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs font-mono uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="mt-6 ml-4">
          <Link
            href={`/experience#${experience.company.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-primary hover:underline inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider"
          >
            Show Details
            <OutlineArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  showDetails?: boolean;
  maxItems?: number;
}

export function ExperienceTimeline({ experiences, showDetails = false, maxItems }: ExperienceTimelineProps) {
  const displayedExperiences = maxItems ? experiences.slice(0, maxItems) : experiences;

  return (
    <div className="pt-2 pb-6">

      {/* Experience entries */}
      <div className="space-y-6 relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 h-[calc(100%+1rem)] bottom-0 w-px bg-border" />
        {displayedExperiences.map((experience, index) => (
          <div key={index} className="relative pl-8" id={experience.company.toLowerCase().replace(/\s+/g, '-')}>
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 -translate-x-2 size-4 rounded-full bg-background ring-2 ring-foreground" />

            <ExperienceCard experience={experience} showDetails={showDetails} />
          </div>
        ))}

        {maxItems && experiences.length > maxItems && (
          <div className="text-center mt-8">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline uppercase tracking-wider"
            >
              View Full Experience
              <span className="text-xs">→</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
