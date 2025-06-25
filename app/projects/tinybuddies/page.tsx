import Link from "next/link";
import { OutlineArrowRight } from "@/icons/Icons";
import { Badge } from "@/components/ui/badge";

export default function TinyBuddies() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="px-6">
        <Link
          href="/projects"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm inline-flex items-center gap-2"
        >
          <span>←</span>
          <span>Back to Projects</span>
        </Link>
      </nav>

      {/* Header */}
      <section id="header">
        <div className="border-l-4 border-black dark:border-white pl-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            TinyBuddies
          </h1>
        </div>
        <div className="px-6 mt-4 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Mobile Game</Badge>
            <Badge variant="secondary" className="bg-yellow-100/10 text-yellow-600 dark:text-yellow-400">
              In Development
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A charming Tamagotchi-inspired mobile game where players care for adorable virtual pets
            with unique personalities, needs, and interactive behaviors.
          </p>
        </div>
      </section>

      {/* Preview */}
      <section id="preview">
        <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Preview
          </h2>
        </div>
        <div className="px-6">
          <div className="aspect-video bg-gray-100 dark:bg-gray-900 w-full flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-600">
              TinyBuddies Game Preview
            </span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section id="about">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                About
              </h2>
            </div>
            <div className="px-6 space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                TinyBuddies brings back the nostalgic joy of virtual pet care with a modern twist.
                Each buddy has its own personality, preferences, and unique behaviors that evolve
                based on how you interact with them.
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                The game features real-time care mechanics, where your buddies continue to live
                and grow even when you&apos;re not actively playing. Push notifications keep you
                connected with your pets&apos; needs throughout the day.
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                With customizable environments, mini-games, and social features, TinyBuddies
                aims to create a warm, engaging experience that fits seamlessly into players&apos;
                daily routines.
              </p>
            </div>
          </section>

          <section id="features">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Features
              </h2>
            </div>
            <div className="px-6">
              <ul className="space-y-3">
                {[
                  "Real-time pet care with dynamic personality development",
                  "Push notifications for important pet needs and milestones",
                  "Customizable rooms and environments for your buddies",
                  "Mini-games and activities to bond with your pets",
                  "Social features to share and visit friends' buddies",
                  "Extensive customization options for pets and habitats"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="development">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Development
              </h2>
            </div>
            <div className="px-6">
              <p className="text-gray-600 dark:text-gray-400">
                Currently in active development, TinyBuddies is being built with React Native
                to ensure a smooth experience across both iOS and Android platforms. The game
                emphasizes accessibility, intuitive design, and engaging gameplay loops that
                respect players&apos; time while providing meaningful interactions.
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <section>
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Details
              </h2>
            </div>
            <div className="px-6 space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Role</dt>
                <dd className="text-gray-900 dark:text-gray-100">Game Designer & Developer</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Timeline</dt>
                <dd className="text-gray-900 dark:text-gray-100">2023 - Present</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Platform</dt>
                <dd className="text-gray-900 dark:text-gray-100">iOS & Android</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</dt>
                <dd className="text-gray-900 dark:text-gray-100">In Development</dd>
              </div>
            </div>
          </section>

          <section>
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Technologies
              </h2>
            </div>
            <div className="px-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "TypeScript",
                  "Expo",
                  "Redux Toolkit",
                  "React Navigation",
                  "Async Storage",
                  "Push Notifications",
                  "Game Design"
                ].map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Call to Action */}
      <section id="cta" className="mt-8">
        <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Get Involved
          </h2>
        </div>
        <div className="px-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                Interested in following the development?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Stay updated on TinyBuddies progress and get early access
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                Contact Me
                <OutlineArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>

              <Link
                href="/projects"
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
