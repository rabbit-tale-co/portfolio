import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta">
      <div className="p-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-mono font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Let&apos;s work together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              I&apos;m always interested in new opportunities and exciting projects.
              Let&apos;s create something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-px bg-gray-200 dark:bg-gray-800 max-w-md mx-auto">
            <Link
              href="/contact"
              className="flex-1 bg-black dark:bg-white text-white dark:text-black px-6 py-4 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-mono text-sm font-bold uppercase tracking-wider"
            >
              Get in touch
            </Link>
            <Link
              href="/projects"
              className="flex-1 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors font-mono text-sm font-bold uppercase tracking-wider border border-gray-200 dark:border-gray-800"
            >
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
