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
      src: "/og.webp",
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
      role: "Project Director & Game Designer",
      timeline: "2024 - Present",
      platform: "iOS & Android"
    }
  },
  {
    slug: "soundless",
    title: "SoundLess",
    description: "An innovative horror game where players navigate through darkness using echolocation mechanics and sound-based gameplay.",
    category: "Horror Game",
    status: "In Development",
    technologies: ["Godot", "GDScript", "Sound Design", "Shader Programming"],
    type: "games",
    featured: true,
    thumbnail: {
      src: "/og.webp",
      alt: "SoundLess Game Screenshot"
    },
    content: {
      about: [
        "SoundLess is a unique horror experience that challenges players to navigate through complete darkness using only sound. The game features an innovative echolocation system where players must use sound waves to reveal their surroundings and avoid dangers.",
        "The game's custom sound propagation system creates realistic audio behavior, with sounds bouncing off walls and objects, creating an immersive and terrifying atmosphere.",
        "Players must carefully balance their use of sound, as making too much noise can attract unwanted attention from the entities that lurk in the darkness."
      ],
      features: [
        "Innovative echolocation gameplay mechanics",
        "Custom sound propagation and reflection system",
        "Dynamic environment interactions based on sound",
        "Atmospheric horror elements and storytelling",
        "Unique visual effects for sound visualization",
        "Adaptive AI that responds to player-generated sounds"
      ],
      development: "Currently in active development, focusing on perfecting the sound propagation system and environmental interactions."
    },
    details: {
      role: "Lead Developer & Artist Director",
      timeline: "2023 - Present",
      platform: "PC"
    }
  },
  {
    slug: "luna-ai",
    title: "Luna AI",
    description: "An advanced Minecraft mod that enhances gameplay with AI-powered features and unique fourth-wall-breaking mechanics.",
    category: "Game Mod",
    status: "Released",
    technologies: ["Java", "Fabric API", "Minecraft Modding", "AI Integration"],
    type: "mods",
    featured: true,
    thumbnail: {
      src: "/og.webp",
      alt: "Luna AI Mod Screenshot"
    },
    content: {
      about: [
        "Luna AI is a sophisticated Minecraft mod that integrates advanced AI capabilities into the game. The mod features a unique fourth-wall-breaking system that creates surprising and engaging interactions with players.",
        "The mod has been carefully designed with proper client-server architecture, ensuring secure multiplayer compatibility while maintaining the ability to create immersive and sometimes unsettling experiences.",
        "Luna AI includes various features like custom shaders, AI-driven events, and system-level interactions that create a unique and memorable gaming experience."
      ],
      features: [
        "Advanced AI integration for dynamic interactions",
        "Secure client-server architecture for multiplayer",
        "Custom VHS-style shader effects",
        "Fourth-wall-breaking mechanics",
        "AI-driven event system",
        "Extensive configuration options",
        "Proper separation of client and server components"
      ],
      development: "Released and actively maintained, with regular updates and new features being added based on community feedback."
    },
    details: {
      role: "Lead Developer",
      timeline: "2023 - Present",
      platform: "Minecraft Java Edition"
    }
  }
];
