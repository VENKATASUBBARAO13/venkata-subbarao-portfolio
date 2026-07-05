"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github } from "lucide-react";

export default function MacWindowMockup({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);
  const [tiltEnabled, setTiltEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 18,
  });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTiltEnabled(fine && !reduced);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Subtle developer-inspired background, scoped to this showcase only */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0 rounded-[2rem] opacity-40 [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,#000_40%,transparent_100%)]" />
        <motion.div
          animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-1/4 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-10 bottom-1/4 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -8 }}
        style={{
          rotateX: tiltEnabled ? rotateX : 0,
          rotateY: tiltEnabled ? rotateY : 0,
          transformPerspective: 1200,
        }}
        className="card-glass overflow-hidden rounded-[1.75rem] border border-slate-200/70 shadow-cardHover dark:border-slate-700/70"
      >
        {/* Frosted window header */}
        <div className="flex items-center gap-2 border-b border-slate-200/70 bg-white/70 px-5 py-3.5 backdrop-blur-md dark:border-slate-700/60 dark:bg-surface-cardDark/70">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="mx-auto -ml-2 font-mono text-xs text-ink-faint">
            github.com/VENKATASUBBARAO13
          </span>
        </div>

        {/* Window body */}
        <div className="relative aspect-[16/10] w-full bg-surface dark:bg-surface-dark sm:aspect-video">
          {!failed && src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain p-2 sm:p-3"
              onError={() => setFailed(true)}
              unoptimized
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary to-primary/80 text-white/80">
              <Github className="h-10 w-10" />
              <p className="px-6 text-center text-xs">
                Add your GitHub profile screenshot at
                <span className="mx-1 rounded bg-white/10 px-1.5 py-0.5 font-mono">
                  /public/images/github-profile.png
                </span>
                to display it here.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
