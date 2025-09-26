import { SectionSeparator } from "@/components/sections/SectionSeparator";
import { Button } from "@/components/ui/button";
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
              Support us to get exclusive updates and rewards
            </p>
          </div>
          <Button asChild size={"xl"}>
            <Link
              href="https://patreon.com/rabbittale"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patreon
            </Link>
          </Button>
          <Button asChild size={'xl'}>
            <Link
              href={'https://github.com/sponsors/rabbit-tale-co'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Sponsors
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
