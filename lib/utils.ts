import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ProjectStatus } from "@/app/projects/data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Map project status to badge variant
export const getStatusVariant = (status: ProjectStatus | string) => {
  switch (status.toLowerCase()) {
    case ProjectStatus.Completed.toLowerCase():
      return "stable";
    case ProjectStatus.InDevelopment.toLowerCase():
      return "development";
    case ProjectStatus.Concept.toLowerCase():
      return "concept";
    case ProjectStatus.Archived.toLowerCase():
      return "archived";
    case ProjectStatus.OnHold.toLowerCase():
      return "beta";
    case "stable":
    case "released":
      return "stable";
    case "beta":
      return "beta";
    case "alpha":
      return "alpha";
    default:
      return "secondary";
  }
};

/**
 * Calculate age based on birth date
 * @param birthDate Birth date as Date object or string (YYYY-MM-DD)
 * @returns Current age as number
 */
export function calculateAge(birthDate: Date | string): number {
  const birth = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
  const now = new Date();
  
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  const dayDiff = now.getDate() - birth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

/**
 * Calculate years of experience based on start year
 * @param startYear Year when experience started
 * @returns Years of experience as number
 */
export function calculateExperience(startYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}
