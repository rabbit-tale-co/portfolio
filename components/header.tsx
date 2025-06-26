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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription
} from "./ui/sheet";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
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

  const HeaderContent = ({ inSheet = false }: { inSheet?: boolean }) => (
    <div className="border-b border-border">
      <div className="max-w-screen-md mx-auto border-l border-r border-border">
        <div className="flex justify-between items-center py-0 pt-3 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="size-10 sm:size-8 bg-foreground text-background flex items-center justify-center">
              <SolidLogo size={20} />
            </div>
            <span className="font-mono font-bold text-gray-900 dark:text-gray-100 text-sm uppercase tracking-wider">
              Kris German
            </span>
          </div>
          <div className="flex items-center gap-4 max-sm:pr-2">
            {isMobile ? (
              inSheet ? (
                <SheetClose className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <OutlineClose size={19.2} />
                </SheetClose>
              ) : (
                <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <OutlineMenu size={19.2} />
                </button>
              )
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
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-background">
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <div className="cursor-pointer">
                <HeaderContent />
              </div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-screen-md border-l border-r border-border p-0 h-full"
            >
              <div className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Main navigation links</SheetDescription>
              </div>
              <HeaderContent inSheet={true} />
              <nav className="flex flex-col gap-6 p-6">
                <NavLinks
                  onClick={() => setIsOpen(false)}
                  className="text-base"
                />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <HeaderContent />
        )}
      </header>
    </>
  )
}
