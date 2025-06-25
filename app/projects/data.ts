export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  status: string;
  technologies: string[];
  type: string;
  featured: boolean;
  thumbnail?: {
    src: string;
    alt: string;
    blur?: string;
  };
  links?: {
    github?: string;
    demo?: string;
    download?: string;
  };
  content: {
    about: string[];
    features?: string[];
    development?: string;
  };
  details: {
    role: string;
    timeline: string;
    platform: string;
  };
}

export const projects: Project[] = [
  {
    slug: "tinybuddies",
    title: "TinyBuddies",
    description: "A charming Tamagotchi-inspired mobile game where players care for adorable virtual pets with unique personalities and needs.",
    category: "Mobile Game",
    status: "In Development",
    technologies: ["Godot", "GDScript", "Game Design"],
    type: "games",
    featured: true,
    thumbnail: {
      src: "/projects/tinybuddies/thumbnail.png",
      alt: "TinyBuddies Game Screenshot",
      // TODO: instead of data image just add backdrop filter blur
      blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTEtMTEdGRVhGRUdJR0f/2wBDAR" //
    },
    content: {
      about: [
        "TinyBuddies brings back the nostalgic joy of virtual pet care with a modern twist. Each buddy has its own personality, preferences, and unique behaviors that evolve based on how you interact with them.",
        "The game features real-time care mechanics, where your buddies continue to live and grow even when you're not actively playing. Push notifications keep you connected with your pets' needs throughout the day.",
        "With customizable environments, mini-games, and social features, TinyBuddies aims to create a warm, engaging experience that fits seamlessly into players' daily routines."
      ],
      features: [
        "Real-time pet care with dynamic personality development",
        "Push notifications for important pet needs and milestones",
        "Customizable rooms and environments for your buddies",
        "Mini-games and activities to bond with your pets",
        "Social features to share and visit friends' buddies",
        "Extensive customization options for pets and habitats"
      ],
      development: "Currently stopped due to personal reasons. Will resume when I have more time."
    },
    details: {
      role: "Game Designer & Developer",
      timeline: "2024 - Present",
      platform: "iOS & Android"
    }
  }
];
