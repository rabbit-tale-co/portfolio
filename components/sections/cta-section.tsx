import Link from "next/link";

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
            <Link
              href="/contact"
              className="flex-1 bg-foreground text-background px-6 py-4 hover:bg-foreground/90 transition-colors font-mono text-sm font-bold uppercase tracking-wider"
            >
              Get in touch
            </Link>
            <Link
              href="/projects"
              className="flex-1 bg-background text-foreground px-6 py-4 hover:bg-foreground/[0.02] transition-colors font-mono text-sm font-bold uppercase tracking-wider border border-border-foreground"
            >
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
