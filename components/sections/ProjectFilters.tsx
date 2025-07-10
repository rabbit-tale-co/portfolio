import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All" },
  { id: "games", label: "Games" },
  { id: "bots", label: "Bots" },
  { id: "minecraft", label: "Minecraft" },
  { id: "tools", label: "Dev Tools" },
  { id: "web", label: "Web Apps" },
];

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="relative">
      <ScrollArea orientation="horizontal" className="w-full">
        <div className="flex gap-px pb-4">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              size={"lg"}
              variant={activeFilter === filter.id ? "default" : "ghost"}
              className="shrink-0 min-w-[100px] focus-visible:z-10"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
