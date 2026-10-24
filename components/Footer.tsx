"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="container-px">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center font-display text-base italic tracking-wide text-ink-soft dark:text-slate-400"
        >
          &ldquo;{profile.footerQuote}&rdquo;
        </motion.p>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center font-display text-sm font-semibold text-secondary dark:text-white sm:text-left">
            VS<span className="text-primary">.</span>
            <span className="ml-2 text-xs font-normal text-ink-faint">
              © {new Date().getFullYear()} {profile.shortName}
            </span>
            <span className="mt-1 block text-xs font-normal text-ink-faint">
              {profile.footerTagline}
            </span>
          </p>
          <div className="flex items-center gap-4 text-ink-faint">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary">
              <Github className="h-4.5 w-4.5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary">
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-primary">
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
