"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || reduced) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const handleMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) setVisible(true);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[400px] w-[400px] rounded-full bg-primary/[0.06] blur-3xl transition-opacity duration-500 md:block"
      style={{ opacity: visible ? 1 : 0 }}
    />
  );
}
