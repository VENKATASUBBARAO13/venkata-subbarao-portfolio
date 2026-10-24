"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Calendar, Cloud, ExternalLink, FileBadge } from "lucide-react";
import { certifications, achievements, cloudLearningNote } from "@/lib/data";

function CertImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-primary/80">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <FileBadge className="relative z-10 h-10 w-10 text-white/80" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export default function Achievements() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Certifications
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            Credentials along the way
          </h2>
        </motion.div>

        {/* Featured certification cards */}
        <div className="mx-auto mb-14 grid max-w-4xl grid-cols-1 gap-7 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="block cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-glow dark:border-slate-700 dark:bg-surface-cardDark"
            >
              <div className="relative h-44 w-full overflow-hidden">
                {cert.image ? (
                  <CertImage src={cert.image} alt={cert.title} />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-primary/80">
                    <FileBadge className="h-10 w-10 text-white/80" />
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-secondary shadow-sm backdrop-blur-sm dark:bg-secondary/80 dark:text-white">
                  {cert.platform}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-base font-semibold leading-snug text-secondary dark:text-white">
                  {cert.title}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-faint">
                  <Calendar className="h-3.5 w-3.5" />
                  Completed {cert.completedOn}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className="rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary dark:bg-primary/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    View credential <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Compact legacy credential badges */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-secondary dark:text-white">
                {a.title}
              </h3>
              <p className="mt-1 text-xs text-ink-faint">{a.org}</p>
            </motion.div>
          ))}
        </div>

        {/* Cloud Learning — explicitly separate from certifications above */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-ink-faint">
            Cloud Learning — not a certification
          </p>
          <div className="flex items-start gap-4 rounded-2xl border border-dashed border-aws/40 bg-aws/5 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aws/10 text-aws">
              <Cloud className="h-4.5 w-4.5" />
            </div>
            <p className="text-sm leading-relaxed text-ink-soft dark:text-slate-400">
              {cloudLearningNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
