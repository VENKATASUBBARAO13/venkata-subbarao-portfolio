"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Loader2, Minus, Plus, X } from "lucide-react";
import { profile } from "@/lib/data";
import type { PDFDocumentProxy } from "pdfjs-dist";

type Status = "idle" | "loading" | "ready" | "error";

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfDocRef = useRef<PDFDocumentProxy | null>(null);

  // Escape key + body scroll lock
  useEffect(() => {
    if (!open) return;
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

  // Reset state each time the modal opens/closes
  useEffect(() => {
    if (open) {
      setZoom(1);
      setStatus("idle");
    } else {
      pdfDocRef.current = null;
    }
  }, [open]);

  // Load + render the first page onto a canvas ourselves. This is
  // deliberately NOT an <iframe>/<object> pointing at the PDF: some browsers
  // are configured to always download PDFs rather than view them, and that
  // setting can intercept embedded PDFs too, leaving an iframe blank or
  // stuck loading forever with no way for page script to override it.
  // Drawing the file onto a canvas sidesteps the browser's PDF handling
  // entirely — as far as the browser is concerned, it's just pixels.
  //
  // The pdf.js worker is bundled locally (via the `new URL(..., import.meta.url)`
  // pattern below) rather than fetched from a CDN, so this also works with
  // no external network access and no risk of a CDN outage or version
  // mismatch breaking the preview.
  useEffect(() => {
    if (!open || !canvasRef.current) return;
    let cancelled = false;
    const timeout = setTimeout(() => {
      if (!cancelled) {
        cancelled = true;
        setStatus("error");
      }
    }, 10000);

    async function render() {
      setStatus("loading");
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        if (!pdfDocRef.current) {
          pdfDocRef.current = await pdfjsLib.getDocument(profile.resumeUrl).promise;
        }
        if (cancelled) return;

        const page = await pdfDocRef.current.getPage(1);
        const viewport = page.getViewport({ scale: zoom * 1.6 });
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        const outputScale = window.devicePixelRatio || 1;
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        await page.render({
          canvasContext: context,
          viewport,
          transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined,
        }).promise;

        if (!cancelled) {
          cancelled = true;
          clearTimeout(timeout);
          setStatus("ready");
        }
      } catch (err) {
        console.error("Resume preview failed to render:", err);
        if (!cancelled) {
          cancelled = true;
          clearTimeout(timeout);
          setStatus("error");
        }
      }
    }

    render();
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [open, zoom]);

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
                  onClick={() => setZoom((z) => Math.max(0.3, +(z - 0.15).toFixed(2)))}
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
              <div className="flex min-h-full items-start justify-center">
                <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card dark:border-slate-700">
                  <canvas
                    ref={canvasRef}
                    className={status === "ready" ? "block" : "hidden"}
                  />

                  {status !== "ready" && (
                    <div className="flex h-[500px] w-[360px] flex-col items-center justify-center gap-3 p-8 text-center text-sm text-ink-faint">
                      {status === "error" ? (
                        <p>
                          Couldn&apos;t render the preview here. Use Download Resume below
                          instead.
                        </p>
                      ) : (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin text-primary" />
                          <p>Loading preview…</p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-slate-200/70 bg-white/70 px-5 py-3.5 backdrop-blur-md dark:border-slate-700/60 dark:bg-surface-cardDark/70">
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
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
