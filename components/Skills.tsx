"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-white/60 dark:bg-secondary-light/10">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Toolkit
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            Skills, grouped by where I use them
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border shadow-card transition-shadow hover:shadow-cardHover ${
                group.featured
                  ? "border-primary/30 bg-gradient-to-br from-primary/5 via-white to-accent/5 p-7 shadow-glow dark:border-primary/40 dark:from-primary/10 dark:via-surface-cardDark dark:to-accent/10 lg:col-span-2"
                  : group.compact
                  ? "border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-surface-cardDark"
                  : "border-slate-200 bg-white p-7 dark:border-slate-700 dark:bg-surface-cardDark"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={group.compact ? "text-base" : "text-xl"}>{group.emoji}</span>
                  <h3
                    className={`font-display font-semibold text-secondary dark:text-white ${
                      group.compact ? "text-sm" : "text-base"
                    }`}
                  >
                    {group.label}
                  </h3>
                </div>
              </div>

              <div className={`flex flex-wrap gap-2 ${group.compact ? "mt-4" : "mt-5"}`}>
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className={`rounded-full font-medium ${
                      group.compact ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs"
                    } ${
                      group.featured
                        ? "bg-white text-primary shadow-sm dark:bg-surface-dark dark:text-primary-light"
                        : "bg-surface text-ink-soft dark:bg-surface-dark dark:text-slate-300"
                    }`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
