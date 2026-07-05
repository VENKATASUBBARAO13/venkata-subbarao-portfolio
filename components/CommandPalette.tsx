"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Command,
  Home,
  User,
  GraduationCap,
  FolderGit2,
  Sparkles,
  Github,
  Mail,
  X,
} from "lucide-react";
import { profile } from "@/lib/data";

const commands = [
  { label: "Go to Home", href: "#home", icon: Home },
  { label: "Go to About", href: "#about", icon: User },
  { label: "Go to Education", href: "#education", icon: GraduationCap },
  { label: "Go to Projects", href: "#projects", icon: FolderGit2 },
  { label: "Go to Skills", href: "#skills", icon: Sparkles },
  { label: "Open GitHub", href: profile.github, icon: Github, external: true },
  { label: "Go to Contact", href: "#contact", icon: Mail },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const select = (href: string, external?: boolean) => {
    setOpen(false);
    setQuery("");
    if (external) {
      window.open(href, "_blank");
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center bg-secondary/50 p-4 pt-[15vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-surface-cardDark"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-700">
                <Command className="h-4 w-4 text-ink-faint" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to a section…"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink-faint"
                />
                <button onClick={() => setOpen(false)} aria-label="Close">
                  <X className="h-4 w-4 text-ink-faint" />
                </button>
              </div>
              <ul className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <li className="px-4 py-3 text-sm text-ink-faint">No matches</li>
                )}
                {filtered.map((c) => (
                  <li key={c.label}>
                    <button
                      onClick={() => select(c.href, c.external)}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-ink-soft hover:bg-primary/5 hover:text-primary dark:text-slate-300"
                    >
                      <c.icon className="h-4 w-4" />
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  );
}
