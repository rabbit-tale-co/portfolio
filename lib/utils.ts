import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Map project status to badge variant
export const getStatusVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "stable":
    case "released":
      return "stable";
    case "beta":
      return "beta";
    case "alpha":
      return "alpha";
    case "in development":
    case "development":
      return "development";
    case "concept":
      return "concept";
    case "archived":
      return "archived";
    default:
      return "secondary";
  }
};
