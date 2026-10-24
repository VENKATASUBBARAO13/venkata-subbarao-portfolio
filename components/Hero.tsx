"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Cloud, Download, Eye, Github, Linkedin, Mail } from "lucide-react";
import { profile, heroTechBadges } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import ResumeModal from "./ResumeModal";

const roles = profile.roles;

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 70;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((w) => w + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);
  const heroRef = useRef<HTMLDivElement>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient pt-[84px]"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 24, 0], x: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-px relative z-10 grid w-full grid-cols-1 items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {profile.heroEyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-secondary dark:text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient bg-clip-text animate-gradientMove">
              {profile.firstName}
            </span>
            .
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 h-8 font-mono text-lg text-primary sm:text-xl"
          >
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-primary animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft dark:text-slate-400"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } },
            }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {heroTechBadges.map((badge) => (
              <motion.span
                key={badge}
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.9 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-medium text-white shadow-cardHover transition-transform duration-200 hover:scale-[1.03] hover:bg-primary dark:bg-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              href={profile.linkedinPostsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white shadow-cardHover transition-transform duration-200 hover:scale-[1.03] hover:bg-primary-dark"
            >
              <Cloud className="h-4 w-4" />
              View AWS Journey
            </MagneticButton>
            <MagneticButton
              as="button"
              onClick={() => setResumeOpen(true)}
              className="flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-ink-soft transition-transform duration-200 hover:scale-[1.03] hover:border-primary/50 hover:text-primary dark:border-slate-600 dark:text-slate-300"
            >
              <Eye className="h-4 w-4" />
              Preview Resume
            </MagneticButton>
            <MagneticButton
              as="button"
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-ink-soft transition-transform duration-200 hover:scale-[1.03] hover:border-primary/50 hover:text-primary dark:border-slate-600 dark:text-slate-300"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              as="button"
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink-soft transition-transform duration-200 hover:scale-[1.03] hover:text-primary dark:text-slate-300"
            >
              Contact Me
              <ArrowDown className="h-4 w-4 -rotate-90" />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex items-center gap-4 text-ink-faint"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-slate-200 bg-white/70 shadow-card backdrop-blur-md dark:border-slate-700 dark:bg-surface-cardDark/70" />
          <div className="relative flex h-full flex-col justify-between p-7 font-mono text-xs text-ink-soft dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-ink-faint">cloud_engineer.py</span>
            </div>
            <div className="space-y-1.5 leading-6">
              <p>
                <span className="text-primary">class</span> CloudEngineer:
              </p>
              <p
                className="break-words"
                style={{ paddingLeft: "2.5rem", textIndent: "-1.5rem" }}
              >
                focus = [&quot;AWS&quot;, &quot;Cloud&quot;,
                &quot;Infrastructure&nbsp;as&nbsp;Code&quot;]
              </p>
              <p
                className="break-words"
                style={{ paddingLeft: "2.5rem", textIndent: "-1.5rem" }}
              >
                tools = [&quot;Terraform&quot;, &quot;EC2&quot;, &quot;S3&quot;, &quot;VPC&quot;,
                &quot;IAM&quot;, &quot;RDS&quot;]
              </p>
              <p className="pl-4">foundation = [&quot;Linux&quot;, &quot;Python&quot;, &quot;Git&quot;]</p>
              <p className="pl-4 pt-1.5">goal = &quot;AWS Cloud Engineer&quot;</p>
            </div>
            <div className="flex items-center gap-2 text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-aws animate-pulse" />
              hands-on AWS &amp; Terraform projects
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint"
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
