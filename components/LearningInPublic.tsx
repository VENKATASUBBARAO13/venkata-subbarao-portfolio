"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import { learningInPublic } from "@/lib/aws-data";
import { profile } from "@/lib/data";

export default function LearningInPublic() {
  return (
    <section className="section-pad">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            In Public
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            📚 Learning in Public
          </h2>
          <p className="mt-4 text-sm text-ink-soft dark:text-slate-400">
            Documenting my AWS journey one concept at a time.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningInPublic.map((post, i) => {
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -4 }}
                className={`flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark ${
                  post.linkedinUrl ? "cursor-pointer" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A66C2]/10 font-mono text-[11px] font-semibold text-[#0A66C2]">
                  {post.day.replace("AWS Day ", "")}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-mono text-[11px] text-ink-faint">{post.day}</p>
                  <p className="truncate text-sm font-medium text-secondary dark:text-white">
                    {post.topic}
                  </p>
                </div>
              </motion.div>
            );

            return post.linkedinUrl ? (
              <a
                key={post.day}
                href={post.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                {card}
              </a>
            ) : (
              <div key={post.day}>{card}</div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-[#0A66C2]/90"
          >
            <Linkedin className="h-4 w-4" />
            Follow my AWS journey on LinkedIn
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
