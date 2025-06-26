import { Button } from "../ui/button";

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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          size={"lg"}
          variant={activeFilter === filter.id ? "default" : "ghost"}
          className="w-full"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
