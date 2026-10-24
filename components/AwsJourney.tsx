"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { awsJourney } from "@/lib/aws-data";
import TimelineSpine from "./TimelineSpine";

export default function AwsJourney() {
  return (
    <section id="learning-journey" className="section-pad bg-white/60 dark:bg-secondary-light/10">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The Path
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            ☁️ AWS Learning Journey
          </h2>
          <p className="mt-4 text-sm text-ink-soft dark:text-slate-400">
            Learning cloud by building, practicing, and documenting.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-soft dark:text-slate-400">
            <span className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                Tag
              </span>
              Demonstrated in my projects
            </span>
            <span className="flex items-center gap-2">
              <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-medium text-ink-soft dark:bg-surface-dark dark:text-slate-300">
                Tag
              </span>
              Completed study topics
            </span>
          </div>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <TimelineSpine>
            <div className="space-y-10">
              {awsJourney.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.04 }}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-surface bg-primary text-[11px] font-semibold text-white shadow-glow dark:border-surface-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-secondary dark:text-white">
                        {item.title}
                      </h3>
                      <span className="rounded-full border border-aws/30 bg-aws/10 px-2.5 py-0.5 text-[11px] font-medium text-aws">
                        Completed
                      </span>
                    </div>

                    {item.demonstrated.length > 0 && (
                      <div className="mt-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
                          Demonstrated in projects
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {item.demonstrated.map((topic) => (
                            <span
                              key={topic}
                              className="rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary dark:bg-primary/10"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.completed.length > 0 && (
                      <div className="mt-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
                          Completed topics
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {item.completed.map((topic) => (
                            <span
                              key={topic}
                              className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-ink-soft dark:bg-surface-dark dark:text-slate-300"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.links && (
                      <ul className="mt-4 space-y-2">
                        {item.links.map((link) => (
                          <li key={link.url}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                            >
                              {link.label}
                              <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
                            </a>
                          </li>
                        ))}
                      </ul>
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
