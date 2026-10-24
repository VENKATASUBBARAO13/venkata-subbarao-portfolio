"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, Rocket } from "lucide-react";
import { projects } from "@/lib/data";
import TimelineSpine from "./TimelineSpine";

export default function ProjectsTimeline() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Selected Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            🛠 Selected Projects
          </h2>
          <p className="mt-4 text-sm text-ink-soft dark:text-slate-400">
            AWS infrastructure, deployment, monitoring and automation projects first — then the earlier software projects that built my engineering foundation.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <TimelineSpine>
            <div className="space-y-14">
              {projects.map((project, i) => {
                const prev = projects[i - 1];
                const isFirstSoftware =
                  project.category === "software" && (!prev || prev.category === "aws");

                return (
                  <div key={project.id}>
                    {isFirstSoftware && (
                      <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.4 }}
                        className="relative mb-10 pl-12 text-sm font-semibold uppercase tracking-widest text-ink-faint"
                      >
                        💻 Other Projects
                      </motion.p>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, delay: (i % 4) * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="relative pl-12"
                    >
                      <span
                        className={`absolute left-0 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-surface text-white shadow-glow dark:border-surface-dark ${
                          project.category === "aws"
                            ? "bg-secondary dark:bg-primary"
                            : "bg-slate-400 dark:bg-slate-600"
                        }`}
                      >
                        {project.category === "aws" ? (
                          <Rocket className="h-3.5 w-3.5" />
                        ) : (
                          <Code2 className="h-3.5 w-3.5" />
                        )}
                      </span>

                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark">
                        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary to-primary/80">
                          <div className="bg-grid absolute inset-0 opacity-30" />
                          <p className="relative z-10 px-6 text-center font-display text-xl font-semibold text-white">
                            {project.name}
                          </p>
                          <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                            {project.category === "aws" ? "☁️ AWS Project" : "💻 Software Project"}
                          </span>
                          {project.featured && (
                            <span className="absolute right-4 top-4 rounded-full bg-aws/90 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                              Flagship project
                            </span>
                          )}
                        </div>

                        <div className="p-7">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-display text-xl font-semibold text-secondary dark:text-white">
                              {project.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              {project.status && (
                                <span className="rounded-full border border-aws/30 bg-aws/10 px-2.5 py-0.5 text-[11px] font-medium text-aws">
                                  {project.status}
                                </span>
                              )}
                              {project.period && (
                                <span className="font-mono text-xs text-ink-faint">
                                  {project.period}
                                </span>
                              )}
                            </div>
                          </div>

                          <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
                            {project.summary}
                          </p>

                          <ul className="mt-4 space-y-1.5">
                            {project.bullets.map((b) => (
                              <li
                                key={b}
                                className="flex gap-2 text-sm text-ink-soft dark:text-slate-400"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                {b}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <motion.span
                                key={tech}
                                whileHover={{ y: -2, scale: 1.04 }}
                                className="rounded-full border border-slate-200 bg-surface px-3 py-1 text-xs font-medium text-ink-soft dark:border-slate-700 dark:bg-surface-dark dark:text-slate-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          {(project.github || project.demo) && (
                            <div className="mt-6 flex gap-3">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-white hover:bg-primary dark:bg-primary"
                                >
                                  <Github className="h-3.5 w-3.5" />
                                  Code
                                </a>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-ink-soft hover:border-primary/50 hover:text-primary dark:border-slate-600 dark:text-slate-300"
                                >
                                  <ExternalLink className="h-3.5 w-3.5" />
                                  Live Demo
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </TimelineSpine>
        </div>
      </div>
    </section>
  );
}
