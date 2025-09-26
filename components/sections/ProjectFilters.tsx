import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { ProjectType } from "@/app/projects/data";

interface ProjectFiltersProps {
  activeFilter: ProjectType | "all";
  onFilterChange: (filter: ProjectType | "all") => void;
}

const filters = [
  { id: "all" as const, label: "All" },
  { id: ProjectType.Games, label: "Games" },
  { id: ProjectType.WebApps, label: "Web Apps" },
  { id: ProjectType.Desktop, label: "Desktop" },
  { id: ProjectType.Mobile, label: "Mobile" },
  { id: ProjectType.WebSites, label: "Web Sites" },
  { id: ProjectType.Mods, label: "Mods" },
];

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="sticky top-[60px] z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <ScrollArea orientation="horizontal" className="w-full">
        <div className="flex">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              size={"lg"}
              variant={activeFilter === filter.id ? "default" : "ghost"}
              className="shrink-0 focus-visible:z-10"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
