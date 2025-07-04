import Link from "next/link";
import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <section id="cta">
      <div className="p-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-mono font-bold text-foreground uppercase tracking-wider">
              Let&apos;s work together
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto">
              I&apos;m always interested in new opportunities and exciting projects.
              Let&apos;s create something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-px bg-foreground/[0.02] max-w-md mx-auto">
            <Button asChild size={"xl"} className="w-full sm:w-auto sm:flex-1">
              <Link
                href="/contact"
              >
                Get in touch
              </Link>
            </Button>
            <Button asChild size={"xl"} variant={"outline"} className="w-full sm:w-auto sm:flex-1">
              <Link
                href="/projects"
              >
                View my work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
