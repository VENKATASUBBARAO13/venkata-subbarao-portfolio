"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ArrowUpRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { profile, featuredRepos, practiceExcludedRepoNames, learningRepoFallback } from "@/lib/data";
import MacWindowMockup from "./MacWindowMockup";

const username = "VENKATASUBBARAO13";

type GhRepo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
};

export default function GithubStats() {
  // Featured repos are static (README-verified, see lib/data.ts) so they never
  // depend on the GitHub API. Only the practice-repo list below is fetched live,
  // and it falls back to a static list if the API call fails.
  const [learning, setLearning] = useState<GhRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );
        if (!res.ok) throw new Error("GitHub API request failed");
        const data: GhRepo[] = await res.json();
        if (cancelled) return;

        const excluded = new Set(practiceExcludedRepoNames.map((n) => n.toLowerCase()));
        const rest = data
          .filter((r) => !r.fork && !excluded.has(r.name.toLowerCase()))
          .slice(0, 6);

        setLearning(rest);
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section-pad bg-white/60 dark:bg-secondary-light/10">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Open Source Activity
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            What my GitHub says
          </h2>
        </motion.div>

        {/* GitHub profile showcase */}
        <MacWindowMockup src="/images/github-profile.png" alt="Ventrapragada Venkata Subbarao's GitHub profile" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-medium text-white shadow-cardHover hover:bg-primary dark:bg-primary"
          >
            <Github className="h-4 w-4" />
            Visit My GitHub
          </motion.a>
        </motion.div>

        {/* Featured repositories — the four AWS projects, in order */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="mb-6 flex items-center gap-2">
            <Github className="h-4 w-4 text-primary" />
            <h3 className="font-display text-lg font-semibold text-secondary dark:text-white">
              Featured Repositories
            </h3>
            <span className="ml-1 rounded-full bg-aws/10 px-2.5 py-0.5 text-[11px] font-medium text-aws">
              AWS projects
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {featuredRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                whileHover={{ y: -5 }}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="break-all font-mono text-sm font-medium text-secondary group-hover:text-primary dark:text-white">
                    {repo.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint group-hover:text-primary" />
                </div>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-soft dark:text-slate-400">
                  {repo.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary dark:bg-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Learning journey */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="mb-6 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <h3 className="font-display text-lg font-semibold text-secondary dark:text-white">
              Practice Repositories
            </h3>
            <span className="ml-1 rounded-full bg-primary/5 px-2.5 py-0.5 text-[11px] font-medium text-primary dark:bg-primary/10">
              Earlier learning
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {(status === "ready" && learning.length > 0
              ? learning
              : learningRepoFallback.map((r) => ({
                  name: r.name,
                  description: r.description,
                  html_url: r.url,
                  stargazers_count: 0,
                  forks_count: 0,
                  language: null,
                  fork: false,
                }))
            ).map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark"
              >
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="truncate font-mono text-xs font-medium text-secondary group-hover:text-primary dark:text-white">
                    {repo.name}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-ink-faint">
                    {repo.description ?? "Practice repository."}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* GitHub + LinkedIn cards */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-700 dark:bg-surface-cardDark"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white dark:bg-primary">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-secondary dark:text-white">
                  @{username}
                </p>
                <p className="text-xs text-ink-faint">Every project on this page lives here</p>
              </div>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-white hover:bg-primary dark:bg-primary"
            >
              View <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-700 dark:bg-surface-cardDark"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2] text-white">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-secondary dark:text-white">
                  {profile.shortName}
                </p>
                <p className="text-xs text-ink-faint">Let&apos;s connect professionally</p>
              </div>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#0A66C2] px-4 py-2 text-xs font-medium text-white hover:bg-[#0A66C2]/90"
            >
              Connect <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
