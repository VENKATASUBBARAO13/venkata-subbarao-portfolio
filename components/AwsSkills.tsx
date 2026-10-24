"use client";

import { motion } from "framer-motion";
import { awsSkillCategories } from "@/lib/aws-data";

export default function AwsSkills() {
  return (
    <section id="aws-skills" className="section-pad">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Cloud Skills
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            ☁️ AWS &amp; Cloud Skills
          </h2>
          <p className="mt-4 text-sm text-ink-soft dark:text-slate-400">
            Completed learning and hands-on practice — no percentages or proficiency levels.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awsSkillCategories.map((cat, i) => {
            const practiced = cat.items.filter((it) => it.status === "practiced").length;
            const completed = cat.items.length - practiced;
            const counter = [
              practiced > 0 ? `${practiced} practiced` : "",
              completed > 0 ? `${completed} completed` : "",
            ]
              .filter(Boolean)
              .join(" · ");

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark ${
                  cat.wide ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{cat.emoji}</span>
                  <h3 className="font-display text-sm font-semibold leading-snug text-secondary dark:text-white">
                    {cat.title}
                  </h3>
                </div>
                <p className="mt-1.5 font-mono text-[11px] text-ink-faint">
                  {counter}
                </p>

                <ul
                  className={`mt-4 ${
                    cat.wide ? "grid gap-x-8 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3" : "space-y-1.5"
                  }`}
                >
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start justify-between gap-2 text-xs leading-relaxed text-ink-soft dark:text-slate-400"
                    >
                      <span className="flex min-w-0 gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aws" />
                        <span
                          className={`break-words ${
                            item.name.startsWith("terraform ") ? "font-mono" : ""
                          }`}
                        >
                          {item.name}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
