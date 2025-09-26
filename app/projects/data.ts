import zaczkieLarge from '@/public/projects/zaczkie-large.png'
import jarvvitchLarge from '@/public/projects/Jarvvitch-large.png'

export enum ProjectCategory {
  WebApps = "Web apps",
  MobileGame = "Mobile Game",
  HorrorGame = "Horror Game",
  DesktopApp = "Desktop App",
  WebSite = "Web Site",
  GameMod = "Game Mod"
}

export enum ProjectType {
  WebApps = "web apps",
  Games = "games",
  Desktop = "desktop",
  Mobile = "mobile",
  WebSites = "websites",
  Mods = "mods"
}

export enum ProjectStatus {
  InDevelopment = "In Development",
  Completed = "Completed",
  Archived = "Archived",
  Concept = "Concept",
  OnHold = "On Hold"
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus[];
  technologies: string[];
  links?: Array<{
    name: string;
    url: string;
    description?: string;
  }>;
  type: ProjectType;
  thumbnail?: {
    square?: {
      src: string;
      alt: string;
      blur?: string;
    };
    large?: {
      src: string;
      alt: string;
      blur?: string;
    };
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
    slug: "zaczkie-art",
    title: "Zaczkie Art",
    description: "Portfolio website for digital artist and illustrator",
    category: ProjectCategory.WebSite,
    status: [ProjectStatus.Completed],
    technologies: [
      "Next.js",
      "React",
      "CSS",
      "Responsive Design",
      "Gallery System"
    ],
    links: [
      {
        name: "Website",
        url: "https://zaczkie.art",
        description: "Live portfolio website"
      }
    ],
    type: ProjectType.WebSites,
    thumbnail: {
      // square: {
      //   src: "/images/projects/zaczkie/thumbnail.jpg",
      //   alt: "Zaczkie Art Portfolio"
      // },
      large: {
        src: zaczkieLarge.src,
        alt: "Zaczkie Art Portfolio"
      }
    },
    content: {
      about: [
        "Custom portfolio website for Zaczkie, showcasing digital art and illustrations.",
        "Features an intuitive gallery system with category filtering and responsive design.",
        "Optimized for fast loading of high-quality artwork images."
      ],
      features: [
        "Categorized art gallery",
        "Commission information",
        "Artist bio and contact",
        "Mobile-friendly design"
      ]
    },
    details: {
      role: "Web Developer",
      timeline: "07/23/2025",
      platform: "Web"
    }
  },
  {
    slug: "jarvvitch-art",
    title: "Jarvvitch Art",
    description: "Portfolio website for digital artist",
    category: ProjectCategory.WebSite,
    status: [ProjectStatus.Completed],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Image Optimization"
    ],
    links: [
      {
        name: "Website",
        url: "https://www.jarvvitch.art/",
        description: "Live portfolio website"
      }
    ],
    type: ProjectType.WebSites,
    thumbnail: {
      large: {
        src: jarvvitchLarge.src,
        alt: "Jarvvitch Art Portfolio"
      }
    },
    content: {
      about: [
        "Portfolio website designed for a digital artist to showcase their artwork and illustrations.",
        "Features a clean, minimalist design that puts the focus on the artwork with responsive layout for all devices.",
        "Includes gallery sections, about page, and contact information."
      ],
      features: [
        "Responsive image gallery",
        "Optimized image loading",
        "Clean navigation",
        "Contact form"
      ]
    },
    details: {
      role: "Web Developer",
      timeline: "09/11/2025",
      platform: "Web"
    }
  },
  {
    slug: "rabbit-hole-social",
    title: "Rabbit Hole",
    description: "Social portal for artists and clients",
    category: ProjectCategory.WebApps,
    status: [ProjectStatus.InDevelopment],
    technologies: [
      "Next.js (App Router)",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Zod v4",
      "Supabase Auth",
      "Supabase Postgres",
      "Drizzle ORM",
      "TanStack React Query",
      "Biome.js",
      "JWT Authentication"
    ],
    links: [
      {
        name: "Next.js Documentation",
        url: "https://nextjs.org/docs",
        description: "Framework powering Rabbit Hole"
      },
      {
        name: "Supabase Platform",
        url: "https://supabase.com",
        description: "Database and authentication provider"
      }
    ],
    type: ProjectType.WebApps,
    // thumbnail: {
    //   square: {
    //     src: "/og.webp",
    //     alt: "Rabbit Hole Social App Screenshot",
    //     blur: "/og.webp"
    //   },
    //   large: {
    //     src: "/og.webp",
    //     alt: "Rabbit Hole Social App Screenshot",
    //     blur: "/og.webp"
    //   }
    // },
    content: {
      about: [
        "RabbitHole is an exclusive social platform where artists share content in themed communities called 'rabbit holes'. The platform features a dual-account system: Artist accounts (requiring invite keys) can create content, while Client accounts can interact but not create.",
        "The platform uses an invite-based registration system where artists receive new keys every two weeks to share with other creators, maintaining exclusivity while allowing controlled growth of the creator community.",
        "Built with Next.js App Router, the application delivers a responsive experience with features like infinite scroll feeds, optimistic UI updates, and secure authentication through JWT and HttpOnly cookies."
      ],
      features: [
        "Masonry/grid feed of posts with infinite scroll and 60-second revalidation",
        "Dual-account system with Artist and Client roles and permissions",
        "Invite key system for exclusive artist registration",
        "Community-based content organization through 'rabbit holes'",
        "Comprehensive JWT authentication with HttpOnly cookies",
        "Real-time form validation with Zod schemas",
        "Optimistic UI updates for instant feedback",
        "Role-based access control with different permission levels",
        "Post interactions including likes, bookmarks, reposts, and comments",
        "User profiles with posts and statistics",
        "Premium features through 'Golden Carrot' subscription"
      ],
      development: "Currently in active development with focus on implementing the core social features and authentication system."
    },
    details: {
      role: "Full-Stack Developer",
      timeline: `${new Date().getFullYear()} - Present`,
      platform: "Web Application"
    }
  },
  {
    slug: "soundless",
    title: "SoundLess",
    description: "An innovative horror game where players navigate through darkness using echolocation mechanics and sound-based gameplay.",
    category: ProjectCategory.HorrorGame,
    status: [ProjectStatus.InDevelopment, ProjectStatus.Concept],
    technologies: [
      "Godot",
      "GDScript",
      "Sound Design",
      "Shader Programming"
    ],
    links: [
      {
        name: "Wishlist on Steam",
        url: "https://store.steampowered.com",
        description: "Wishlist our game on steam now!"
      },
      {
        name: "Webtoon Comic",
        url: "https://www.webtoons.com",
        description: "Read the companion comic"
      },
    ],
    type: ProjectType.Games,
    thumbnail: {
      square: {
        src: "/projects/soundless-square.webp",
        alt: "SoundLess Game Screenshot",
        blur: "/projects/soundless-square.webp"
      },
      large: {
        src: "/projects/soundless-large.webp",
        alt: "SoundLess Game Screenshot",
        blur: "/projects/soundless-large.webp"
      }
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
      role: "Game Director, Art Director & Design Director",
      timeline: "8/20/2024 - Present",
      platform: "PC"
    }
  },
  {
    slug: "tinybuddies",
    title: "TinyBuddies",
    description: "A charming Tamagotchi-inspired mobile game where players care for adorable virtual pets with unique personalities and needs.",
    category: ProjectCategory.MobileGame,
    status: [ProjectStatus.InDevelopment, ProjectStatus.Archived],
    technologies: ["Godot", "GDScript", "Game Design"],
    type: ProjectType.Games,
    // thumbnail: {
    //   square: {
    //     src: "/og.webp",
    //     alt: "TinyBuddies Game Screenshot",
    //     blur: "/og.webp"
    //   },
    //   large: {
    //     src: "/og.webp",
    //     alt: "TinyBuddies Game Screenshot",
    //     blur: "/og.webp"
    //   }
    // },
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
      timeline: "03/12/2024 - Present",
      platform: "iOS & Android"
    }
  },
];
