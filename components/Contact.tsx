"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Copy, Check, Send } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const cards = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: "GitHub", value: "@VENKATASUBBARAO13", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "Ventrapragada Venkata Subbarao", href: profile.linkedin },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary dark:text-white sm:text-4xl">
            Hiring, or just want to talk shop?
          </h2>
          <p className="mt-4 text-ink-soft dark:text-slate-400">
            My inbox is open for full-time roles, internships, and honest feedback on the projects above.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {cards.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card dark:border-slate-700 dark:bg-surface-cardDark"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-ink-faint">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="truncate text-sm font-medium text-secondary hover:text-primary dark:text-white"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium text-secondary dark:text-white">
                      {c.value}
                    </p>
                  )}
                </div>
                {c.label === "Email" && (
                  <button
                    onClick={copyEmail}
                    aria-label="Copy email"
                    className="shrink-0 rounded-lg p-2 text-ink-faint hover:bg-primary/10 hover:text-primary"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                )}
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card dark:border-slate-700 dark:bg-surface-cardDark"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-ink-soft dark:text-slate-400">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-slate-700 dark:bg-surface-dark"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-ink-soft dark:text-slate-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-slate-700 dark:bg-surface-dark"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-xs font-medium text-ink-soft dark:text-slate-400">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm outline-none focus:border-primary dark:border-slate-700 dark:bg-surface-dark"
                placeholder="Tell me about the role or project…"
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3.5 text-sm font-medium text-white hover:bg-primary dark:bg-primary"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Opening your email app…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
