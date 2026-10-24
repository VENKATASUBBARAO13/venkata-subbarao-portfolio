"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { awsProjects, terraformPractice } from "@/lib/aws-data";

export default function AwsProjects() {
  return (
    <section className="section-pad bg-white/60 dark:bg-secondary-light/10">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Hands-on Builds
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            ☁️ AWS Cloud Projects
          </h2>
          <p className="mt-4 text-sm text-ink-soft dark:text-slate-400">
            AWS projects, each documented in its own GitHub repository with setup steps and
            screenshots. Infrastructure as Code with Terraform leads.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {awsProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold leading-snug text-secondary dark:text-white">
                  {project.name}
                </h3>
                {project.status && (
                  <span className="shrink-0 rounded-full border border-aws/30 bg-aws/10 px-2.5 py-0.5 text-[11px] font-medium text-aws">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
                {project.summary}
              </p>

              <div className="mt-4 rounded-xl border border-slate-200 bg-surface px-3.5 py-3 dark:border-slate-700 dark:bg-surface-dark">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">
                  Architecture
                </p>
                <p className="mt-1 break-words font-mono text-[11px] leading-relaxed text-ink-soft dark:text-slate-300">
                  {project.architecture}
                </p>
              </div>

              <ul
                className={`mt-4 ${
                  i === 0 ? "grid gap-x-8 gap-y-1.5 md:grid-cols-2" : "space-y-1.5"
                }`}
              >
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-xs leading-relaxed text-ink-soft dark:text-slate-400"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.iac?.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-aws/30 bg-aws/10 px-2.5 py-1 text-[11px] font-medium text-aws"
                  >
                    {tool}
                  </span>
                ))}
                {project.awsServices.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary dark:bg-primary/10"
                  >
                    {service}
                  </span>
                ))}
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-ink-soft dark:border-slate-700 dark:text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-white hover:bg-primary dark:bg-primary"
                >
                  <Github className="h-3.5 w-3.5" />
                  View on GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Secondary resource — intentionally lighter than the project cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto mt-6 flex max-w-6xl flex-col gap-3 rounded-xl border border-slate-200 bg-white/70 p-5 dark:border-slate-700 dark:bg-surface-cardDark/70 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">
              Learning resource
            </p>
            <h3 className="mt-1 font-display text-sm font-semibold text-secondary dark:text-white">
              {terraformPractice.name}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft dark:text-slate-400">
              {terraformPractice.summary}
            </p>
          </div>
          <a
            href={terraformPractice.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-ink-soft hover:border-primary/50 hover:text-primary dark:border-slate-600 dark:text-slate-300 sm:self-auto"
          >
            <Github className="h-3.5 w-3.5" />
            View repository
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
