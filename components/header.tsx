import { SolidLogo } from "@/icons/Icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-100">
      <div className="max-w-screen-md mx-auto border-l border-r border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
              <SolidLogo size={20} />
            </div>
            <span className="font-mono font-bold text-gray-900 dark:text-gray-100 text-sm uppercase tracking-wider">
              Kris German
            </span>
          </div>
          <nav className="flex items-center gap-8">
            <Link href="/" className="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors uppercase tracking-wider">
              Home
            </Link>
            <Link href="/about" className="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors uppercase tracking-wider">
              About
            </Link>
            <Link href="/projects" className="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors uppercase tracking-wider">
              Projects
            </Link>
            <Link href="/contact" className="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors uppercase tracking-wider">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
