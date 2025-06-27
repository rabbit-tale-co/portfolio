import { SectionSeparator } from "@/components/sections/SectionSeparator";
import Link from "next/link";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      {children}

      <SectionSeparator />

      {/* Call to Action */}
      <section id="cta">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center p-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Support Our Work
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Join us on Patreon to get exclusive updates and rewards
            </p>
          </div>
          <Link
            href="https://patreon.com/rabbittale"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-foreground text-background hover:opacity-80 transition-opacity"
          >
            Support on Patreon
          </Link>
        </div>
      </section>
    </div>
  );
}
