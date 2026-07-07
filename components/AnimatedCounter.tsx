"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  useEffect(() => {
    if (!inView || !ref.current) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        if (!ref.current) return;

        if (Number.isInteger(value)) {
          ref.current.textContent =
            Math.round(latest).toString() + suffix;
        } else {
          ref.current.textContent =
            latest.toFixed(2) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      {Number.isInteger(value) ? "0" : "0.00"}
      {suffix}
    </motion.span>
  );
}