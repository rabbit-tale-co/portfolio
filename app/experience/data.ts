export type Experience = {
  company: string;
  logo?: string;
  position: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Education";
  startDate: string;
  endDate: string | "present";
  location?: string;
  website?: string;
  description: string;
  achievements?: string[];
  tags?: string[];
  projects?: {
    name: string;
    description: string;
    link?: string;
  }[];
}

export const experiences: Experience[] = [
  {
    company: "RabbitTale Studio",
    position: "Co-Founder & Lead Director",
    type: "Full-time",
    startDate: "07.2023",
    endDate: "present",
    description: "Co-founded and leading a game development studio with a team of 15+ artists and developers",
    achievements: [
      "Founded and scaled the studio to 15+ team members",
      "Leading development of multiple game projects",
      "Created TinyBuddies mobile game and SoundLess horror experience",
      "Developed Luna AI mod for Minecraft with advanced features",
      "Managing team collaboration and project coordination",
      "Establishing studio's technical infrastructure and workflows"
    ],
    tags: [
      "Game Development",
      "Godot",
      "GDScript",
      "Team Leadership",
      "Project Management",
      "Game Design",
      "UI/UX Design"
    ],
    projects: [
      {
        name: "TinyBuddies",
        description: "A charming mobile game where players nurture and raise unique virtual pets in a cozy pixel art world. Features dynamic pet personalities, mini-games, and social interactions.",
      },
      {
        name: "SoundLess",
        description: "An innovative horror game where players navigate through darkness using echolocation mechanics. Built with custom sound propagation system and dynamic environment interactions.",
      },
    ]
  },
  {
    company: "DIGITAL-SERVICE",
    position: "Frontend Developer",
    type: "Part-time",
    startDate: "24.04.2018",
    endDate: "26.06.2023",
    description: "Developing and maintaining client websites using WordPress and modern web technologies",
    achievements: [
      "Built and maintained multiple client websites",
      "Implemented custom WordPress themes and plugins",
      "Optimized website performance and SEO",
      "Collaborated with clients to meet their specific requirements",
      "Managed website hosting and maintenance"
    ],
    tags: [
      "WordPress",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "jQuery",
      "SEO",
      "Web Hosting",
      "Client Communication"
    ],
  },
  {
    company: "Middle School",
    position: "Student",
    type: "Education",
    startDate: "2015",
    endDate: "2018",
    description: "Completed middle school education."
  }
];
