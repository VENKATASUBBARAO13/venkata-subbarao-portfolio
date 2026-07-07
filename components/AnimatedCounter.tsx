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
    amount: 0.2,
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
            Math.min(Math.round(latest), value).toString() + suffix;
        } else {
          ref.current.textContent =
            Math.min(latest, value).toFixed(2) + suffix;
        }
      },

      onComplete() {
        if (!ref.current) return;

        if (Number.isInteger(value)) {
          ref.current.textContent = value.toString() + suffix;
        } else {
          ref.current.textContent = value.toFixed(2) + suffix;
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