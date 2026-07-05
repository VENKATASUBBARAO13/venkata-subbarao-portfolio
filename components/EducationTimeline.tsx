"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import TimelineSpine from "./TimelineSpine";

export default function EducationTimeline() {
  return (
    <section id="education" className="section-pad bg-white/60 dark:bg-secondary-light/10">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The Journey
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            Education, one milestone at a time
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <TimelineSpine>
            <div className="space-y-10">
              {education.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-surface bg-primary text-white shadow-glow dark:border-surface-dark">
                    <GraduationCap className="h-3.5 w-3.5" />
                  </span>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark">
                    <p className="font-mono text-xs font-medium text-primary">{item.year}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-secondary dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft dark:text-slate-400">
                      {item.institute}
                    </p>
                    <p className="text-sm text-ink-faint">{item.place}</p>
                    {item.detail && (
                      <p className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </TimelineSpine>
        </div>
      </div>
    </section>
  );
}
