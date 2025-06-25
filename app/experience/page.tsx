import { SectionSeparator } from "@/components/sections/SectionSeparator";

export default function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "RabbitTale Studio",
      description: "Leading development of innovative digital experiences and AI-powered tools. Specializing in React, Next.js, and modern web technologies.",
      skills: ["React", "Next.js", "TypeScript", "AI Integration", "Team Leadership"]
    },
    {
      year: "2023",
      title: "Game Developer & Designer",
      company: "Independent",
      description: "Developed TinyBuddies mobile game and SoundLess horror experience. Created Luna AI mod for Minecraft with advanced fourth-wall breaking features.",
      skills: ["Game Design", "Minecraft Modding", "Java", "Mobile Development", "AI Integration"]
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Freelance",
      description: "Built responsive web applications and modern user interfaces for various clients. Specialized in creating performant, accessible designs.",
      skills: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design", "Performance Optimization"]
    },
    {
      year: "2020-2021",
      title: "UI/UX Designer",
      company: "Various Projects",
      description: "Designed user interfaces and experiences for web and mobile applications. Focused on creating intuitive, beautiful digital products.",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems"]
    },
    {
      year: "2016-2019",
      title: "Design Journey Begins",
      company: "Self-taught",
      description: "Started learning design fundamentals and exploring creative technologies. Built foundation in visual design and user experience principles.",
      skills: ["Graphic Design", "Typography", "Color Theory", "Design Fundamentals", "Creative Problem Solving"]
    }
  ];

  return (
    <div>
      {/* Header */}
      <section id="experience-header">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Experience</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey from 2016 to today
          </p>
        </div>
      </section>

      <SectionSeparator />

      {/* Timeline */}
      <section id="experience-timeline">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-gray-950"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}>
                <div className="bg-background border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                    {exp.company}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionSeparator />

      {/* Call to action */}
      <section id="cta">
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity"
            >
              Get in touch
            </a>
            <a
              href="/resume"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
