"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="card-glass mx-auto max-w-3xl rounded-[1.75rem] border border-slate-200/70 p-10 text-center shadow-cardHover dark:border-slate-700/70 sm:p-14"
        >
          <h2 className="font-display text-2xl font-semibold tracking-tight text-secondary dark:text-white sm:text-3xl">
            {profile.finalCtaHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft dark:text-slate-400">
            {profile.finalCtaText}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-primary dark:bg-primary"
            >
              <Github className="h-4 w-4" />
              View GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-[#0A66C2]/90"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-ink-soft transition-transform duration-200 hover:scale-[1.03] hover:border-primary/50 hover:text-primary dark:border-slate-600 dark:text-slate-300"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
