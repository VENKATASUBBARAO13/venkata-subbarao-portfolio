"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FolderGit2 } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-gradient px-6">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent_100%)]" />

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 24, 0], x: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 bottom-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-7xl font-semibold tracking-tight text-secondary dark:text-white sm:text-8xl"
        >
          4<span className="text-gradient bg-clip-text animate-gradientMove">0</span>4
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 font-display text-xl font-semibold text-secondary dark:text-white sm:text-2xl"
        >
          Looks like this page got lost in the code.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-400"
        >
          The page you&apos;re looking for doesn&apos;t exist, was moved, or never
          compiled in the first place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-medium text-white shadow-cardHover transition-transform duration-200 hover:scale-[1.03] hover:bg-primary dark:bg-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>
          <Link
            href="/#projects"
            className="flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-ink-soft transition-transform duration-200 hover:scale-[1.03] hover:border-primary/50 hover:text-primary dark:border-slate-600 dark:text-slate-300"
          >
            <FolderGit2 className="h-4 w-4" />
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
