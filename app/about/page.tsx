import { SolidLogo } from "@/icons/Icons";
import Link from "next/link";
import { SectionSeparator } from "@/components/sections/SectionSeparator";

// Calculate age dynamically
const calculateAge = () => {
  const birthDate = new Date("2001-07-11");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

// Calculate years of experience
const calculateExperience = () => {
  const startYear = 2016;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export default function About() {
  const age = calculateAge();
  const experience = calculateExperience();

  const skills = [
    {
      category: "Design",
      items: ["UI/UX Design", "Brand Identity", "Game Design", "Visual Design"]
    },
    {
      category: "Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Tools",
      items: ["Figma", "VS Code", "Git", "Minecraft Modding"]
    }
  ];

  return (
    <>
      {/* Header */}
      <section id="about-header">
        <div className="border-l-4 border-black dark:border-white pl-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            About Me
          </h1>
        </div>

        <div className="space-y-px bg-gray-200 dark:bg-background">
          <div className="bg-background p-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                <SolidLogo size={32} />
              </div>
              <div className="space-y-2">
                <h2 className="font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Kris German
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Designer & Developer
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Hi! I&apos;m <strong>Kris German</strong>, a {age}-year-old designer and developer from Poland.
                I started my journey in design back in 2016, and since then I&apos;ve been passionate about
                creating beautiful, functional digital experiences.
              </p>

              <p className="leading-relaxed">
                Over the years, I&apos;ve worked on various projects ranging from mobile games like
                <strong> TinyBuddies</strong> to horror games like <strong>SoundLess</strong>,
                and AI-powered tools like <strong>Luna AI</strong>. I love exploring new technologies
                and pushing the boundaries of what&apos;s possible.
              </p>
            </div>
          </div>

          <div className="bg-background p-6">
            <div className="flex items-center gap-6">
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Experience
              </div>
              <div className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                {experience}+ Years
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Since 2016
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Skills */}
      <section id="skills">
        <div className="border-l-4 border-foreground pl-4 mb-3">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/[0.02] border-t border-border-foreground">
          {skills.map((skill, index) => (
            <div key={index} className="bg-background p-6">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm mb-4">
                {skill.category}
              </h3>
              <div className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionSeparator />

      {/* Contact CTA */}
      <section id="cta">
        <div className="text-center py-6 px-6">
          <div className="space-y-4">
            <h2 className="font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Let&apos;s work together
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              I&apos;m always interested in new opportunities and exciting projects.
              Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-px bg-gray-200 dark:bg-background max-w-md mx-auto">
              <Link
                href="/contact"
                className="flex-1 bg-foreground text-background px-6 py-4 hover:bg-foreground/90 transition-colors text-sm font-bold uppercase tracking-wider"
              >
                Get in touch
              </Link>
              <Link
                href="/projects"
                className="flex-1 bg-background text-foreground px-6 py-4 hover:bg-foreground/[0.02] transition-colors text-sm font-bold uppercase tracking-wider border border-border-foreground"
              >
                View my work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
