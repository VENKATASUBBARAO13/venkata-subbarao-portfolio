"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

type Ripple = { x: number; y: number; id: number };

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps & {
  as: "a";
  href: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
};

type ButtonProps = CommonProps & {
  as: "button";
  onClick?: () => void;
};

export default function MagneticButton(props: AnchorProps | ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const addRipple = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
  };

  const inner = (
    <>
      {props.children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 animate-ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={addRipple}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="relative inline-block"
    >
      {props.as === "a" ? (
        <a
          href={props.href}
          download={props.download}
          target={props.target}
          rel={props.rel}
          className={`relative overflow-hidden ${props.className ?? ""}`}
        >
          {inner}
        </a>
      ) : (
        <button
          onClick={props.onClick}
          className={`relative overflow-hidden ${props.className ?? ""}`}
        >
          {inner}
        </button>
      )}
    </motion.div>
  );
}
