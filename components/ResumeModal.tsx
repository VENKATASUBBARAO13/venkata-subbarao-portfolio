"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Minus, Plus, X } from "lucide-react";
import { profile } from "@/lib/data";

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!open) return;
    setZoom(1);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-secondary/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="card-glass flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200/70 shadow-cardHover dark:border-slate-700/70"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 bg-white/70 px-5 py-3.5 backdrop-blur-md dark:border-slate-700/60 dark:bg-surface-cardDark/70">
              <p className="font-display text-sm font-semibold text-secondary dark:text-white">
                Resume Preview
              </p>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setZoom((z) => Math.max(0.6, +(z - 0.15).toFixed(2)))}
                  aria-label="Zoom out"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-ink-soft hover:border-primary/40 hover:text-primary dark:border-slate-600 dark:text-slate-300"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-10 text-center font-mono text-xs text-ink-faint">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={() => setZoom((z) => Math.min(2, +(z + 0.15).toFixed(2)))}
                  aria-label="Zoom in"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-ink-soft hover:border-primary/40 hover:text-primary dark:border-slate-600 dark:text-slate-300"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close preview"
                  className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-ink-soft hover:border-red-300 hover:text-red-500 dark:border-slate-600 dark:text-slate-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-auto bg-surface p-4 dark:bg-surface-dark sm:p-6">
              <div
                className="mx-auto origin-top transition-transform duration-200"
                style={{ transform: `scale(${zoom})`, width: "100%" }}
              >
                <div className="aspect-[8.5/11] w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card dark:border-slate-700">
                  <object
                    data={`${profile.resumeUrl}#page=1&view=FitH`}
                    type="application/pdf"
                    className="h-full w-full"
                    aria-label="Resume first page preview"
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-8 text-center text-sm text-ink-faint">
                      <p>
                        Add your resume at <span className="font-mono">/public/resume.pdf</span>{" "}
                        to see a live preview here.
                      </p>
                    </div>
                  </object>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-slate-200/70 bg-white/70 px-5 py-3.5 backdrop-blur-md dark:border-slate-700/60 dark:bg-surface-cardDark/70">
              <a
                href={profile.resumeUrl}
                download
                className="flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-xs font-medium text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-primary dark:bg-primary"
              >
                <Download className="h-3.5 w-3.5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
