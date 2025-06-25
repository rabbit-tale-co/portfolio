"use client";

import Image from "next/image";
import { SolidLogo } from "@/icons/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRemainingSpace } from "@/hooks/use-remaining-space";

export default function HeroSection() {
  const { containerRef } = useRemainingSpace();

  return (
    <section id="hero">
      <div>
        {/* User Profile */}
        <div className="flex flex-col w-full">
          {/* banner image */}
          <div className="relative border-b border-gray-200 dark:border-gray-800 w-full">
            <Image
              src="https://cdn.discordapp.com/splashes/1004735926234271864/60d186cd18b27e1fe9efba5481e42a19.jpg?size=2048"
              alt="Kris German"
              width={1200}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          {/* User Profile */}
          <div className="flex items-end h-36">
            <div className="flex-shrink-0 -mt-8 border-r border-gray-200 dark:border-gray-800 rounded-none overflow-hidden size-36 items-center justify-center flex bg-white dark:bg-gray-950">
              <Avatar className="relative size-34 ring ring-2 ring-offset-2 ring-gray-200 dark:ring-gray-800">
                <AvatarImage src="https://github.com/rabbit-tale-co.png" />
                <AvatarFallback>
                  <SolidLogo size={32} />
                </AvatarFallback>
              </Avatar>
            </div>
            <div ref={containerRef} className="relative flex flex-col w-full h-full [&>*]:px-4">
              <div
                className="pattern-bg flex-1 min-h-[4rem] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed "
              />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 border-y border-gray-200 dark:border-gray-800">
                Kris German
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Designer & Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: section */}
    </section>
  );
}
