"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/button";

const roles = [
  "Designer",
  "Developer",
  "Game Creator",
  "Open Source Contributor"
];

export default function HeroSection() {
  return (
    <section className="min-h-[75vh] relative flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative max-w-screen-md mx-auto px-6 py-24">
        <div className="space-y-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-foreground">
              Hi, I&apos;m Kris
            </h1>

            <FlipWords words={roles} className="text-xl md:text-2xl font-mono text-foreground/60" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl"
          >
            I&apos;m passionate about creating creative stuff.
            I specialize in UI/UX design and development, and lately i&apos;m also game developer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild variant={"outline"} size={"xl"}>
              <Link
                href="/projects"
              >
                View Projects
              </Link>
            </Button>

            <Button asChild size={"xl"}>
              <Link
                href="/contact"
              >
                Contact Me
              </Link>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            >
              <motion.div
                className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
