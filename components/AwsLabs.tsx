"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { awsLabs, statusLabel } from "@/lib/aws-data";

export default function AwsLabs() {
  return (
    <section id="labs" className="section-pad">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Practice
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            🧪 AWS Hands-On Practice
          </h2>
          <p className="mt-4 text-sm text-ink-soft dark:text-slate-400">
            Practiced = hands-on exercises. Completed = finished learning modules and projects.
            Cards link to the README that documents them where one exists.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awsLabs.map((lab, i) => {
            return (
              <motion.div
                key={lab.service}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-aws/10 text-aws">
                    <FlaskConical className="h-4.5 w-4.5" />
                  </div>
                  <span className="rounded-full border border-aws/30 bg-aws/10 px-2.5 py-0.5 text-[11px] font-medium text-aws">
                    {statusLabel[lab.status]}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-semibold text-secondary dark:text-white">
                  {lab.service}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
                  {lab.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {lab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-ink-soft dark:bg-surface-dark dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {lab.repoUrl && (
                  <a
                    href={lab.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-medium text-primary hover:underline"
                  >
                    View project README
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
