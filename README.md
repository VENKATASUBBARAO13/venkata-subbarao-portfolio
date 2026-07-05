# Ventrapragada Venkata Subbarao — Portfolio

A premium, animated developer portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy

1. **Resume** — drop your actual resume PDF at `public/resume.pdf`. The "Download Resume"
   button in the hero links to this path.
2. **Email** — update `profile.email` in `lib/data.ts` with your real email address (a
   placeholder is currently set).
3. **Content** — all copy (bio, projects, education, skills, achievements) lives in one
   place: `lib/data.ts`. Edit it there and every section updates automatically.
4. **GitHub stats** — the GitHub section pulls live stat cards from
   `github-readme-stats.vercel.app` for the username `VENKATASUBBARAO13`. If you fork
   this for someone else, update the `username` constant in `components/GithubStats.tsx`.
5. **Favicon / OG image** — add `app/icon.png` and an Open Graph image if you want richer
   link previews; Next.js will pick them up automatically.

## Project structure

```
app/
  layout.tsx          Root layout: fonts, metadata, theme provider, global chrome
  page.tsx            Assembles all sections in order
  globals.css         Design tokens, custom scrollbar, grid background, utilities
components/
  Navbar.tsx           Sticky nav with animated mobile menu
  Hero.tsx             Typing effect, floating blobs, magnetic CTAs
  About.tsx            Summary + animated stat counters
  EducationTimeline.tsx  Scroll-linked animated timeline (education)
  ProjectsTimeline.tsx   Scroll-linked animated timeline (projects)
  TimelineSpine.tsx    Shared scroll-progress spine used by both timelines
  Skills.tsx           Grouped animated skill bars
  Achievements.tsx     Certification cards
  GithubStats.tsx      Live GitHub stat cards + profile links
  Contact.tsx          Contact form (opens the visitor's email client) + copy-email
  Footer.tsx           Minimal footer with social icons
  CommandPalette.tsx   ⌘K / Ctrl+K quick navigation
  ScrollProgress.tsx   Top-of-page scroll progress bar
  CursorGlow.tsx       Soft mouse-follower glow (desktop, motion-safe only)
  BackToTop.tsx        Floating back-to-top button
  ThemeToggle.tsx      Light/dark toggle
  LoadingScreen.tsx    Brief entrance loading screen
  MagneticButton.tsx   Reusable magnetic-hover button with ripple
  AnimatedCounter.tsx  Spring-driven number counter
lib/
  data.ts              Single source of truth for all portfolio content
  utils.ts             cn() className helper
```

## Design system

| Token | Value |
|---|---|
| Primary | `#2563EB` |
| Secondary | `#0F172A` |
| Accent | `#06B6D4` |
| Background | `#F8FAFC` |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono font | JetBrains Mono |

Dark mode is supported throughout via Tailwind's `class` strategy and `next-themes`.
All motion respects `prefers-reduced-motion`.

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Every push to `main` redeploys automatically.

Alternatively, from the CLI:

```bash
npm install -g vercel
vercel
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
