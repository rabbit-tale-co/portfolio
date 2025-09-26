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
