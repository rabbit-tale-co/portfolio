import { Metadata } from "next"

function getExperienceYears() {
  const startYear = 2016;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

export const metadata: Metadata = {
  title: "Experience",
  description: `${getExperienceYears()}+ years of professional experience in design and development. Explore my journey, skills, and achievements.`,

  openGraph: {
    title: "Experience | Kris German Portfolio",
    description: `${getExperienceYears()}+ years of professional experience in design and development. Explore my journey, skills, and achievements.`,
    url: "/experience",
  },

  twitter: {
    title: "Experience | Kris German Portfolio",
    description: `${getExperienceYears()}+ years of professional experience in design and development. Explore my journey, skills, and achievements.`,
  }
}
