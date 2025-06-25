'use client'

import { SolidLogo } from "@/icons/Icons";
import { OutlineClose } from "@/icons/assets/user_interface/Close";
import { OutlineMenu } from "@/icons/assets/user_interface/Menu";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-toggle";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLinks = ({ onClick, className }: { onClick?: () => void, className?: string }) => (
    <>
      {navigationLinks.map((link) => {
        const isActive = link.href === "/"
          ? pathname === "/" || pathname === ""
          : pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={cn(
              "text-xs font-mono transition-colors uppercase tracking-wider relative group",
              isActive
                ? "text-gray-900 dark:text-gray-100"
                : "text-gray-600 dark:text-gray-400 md:hover:text-gray-900 md:dark:hover:text-gray-100",
              className
            )}
          >
            {link.label}
            <span
              className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 bg-foreground transform origin-left transition-transform duration-200",
                isActive ? "scale-x-100" : "scale-x-0 md:group-hover:scale-x-100"
              )}
            />
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="relative">
      <div className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-screen-md mx-auto border-l border-r border-border">
          <div className="flex justify-between items-center p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center">
                <SolidLogo size={20} />
              </div>
              <span className="font-mono font-bold text-gray-900 dark:text-gray-100 text-sm uppercase tracking-wider">
                Kris German
              </span>
            </div>
            <div className="flex items-center gap-4">
              {isMobile ? (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 z-50"
                >
                  {isOpen ? <OutlineClose size={19.2} /> : <OutlineMenu size={19.2} />}
                </button>
              ) : (
                <nav className="flex items-center gap-6">
                  <NavLinks />
                </nav>
              )}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="max-w-screen-md mx-auto p-6 pt-24">
            <nav className="flex flex-col gap-8">
              <NavLinks
                onClick={() => setIsOpen(false)}
                className="text-base !text-gray-900 dark:!text-gray-100"
              />
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
