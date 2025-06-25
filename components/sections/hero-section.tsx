"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const roles = [
  "Designer",
  "Developer",
  "Game Creator",
  "Open Source Contributor"
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[80vh] relative flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 pattern-bg bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed opacity-10" /> */}

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
            <div className="h-16">
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl md:text-2xl font-mono text-foreground/60"
              >
                {roles[currentRole]}
              </motion.p>
            </div>
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
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-2 border border-border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-sm font-mono"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-mono"
            >
              Contact Me
            </Link>
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
