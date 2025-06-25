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
              Interested in collaborating?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Let&apos;s work together on your next project
            </p>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 bg-foreground text-background hover:opacity-80 transition-opacity"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
