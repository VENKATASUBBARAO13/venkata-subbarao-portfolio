import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        accent: {
          DEFAULT: "#06B6D4",
          light: "#67E8F9",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          dark: "#0B1120",
          card: "#FFFFFF",
          cardDark: "#111827",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#475569",
          faint: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(60% 60% at 20% 10%, rgba(37,99,235,0.14) 0%, rgba(37,99,235,0) 70%), radial-gradient(50% 50% at 85% 20%, rgba(6,182,212,0.14) 0%, rgba(6,182,212,0) 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(24px) scale(1.05)" },
        },
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.55" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        floatSlow: "floatSlow 12s ease-in-out infinite",
        gradientMove: "gradientMove 8s ease infinite",
        blink: "blink 1s step-start infinite",
        ripple: "ripple 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.10)",
        cardHover: "0 2px 4px rgba(15,23,42,0.06), 0 20px 40px -12px rgba(37,99,235,0.20)",
        glow: "0 0 0 1px rgba(37,99,235,0.15), 0 0 40px rgba(37,99,235,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
