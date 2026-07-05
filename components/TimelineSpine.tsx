"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function TimelineSpine({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const height = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700" />
      <motion.div
        style={{ scaleY: height }}
        className="absolute left-[15px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary via-accent to-primary"
      />
      {children}
    </div>
  );
}
