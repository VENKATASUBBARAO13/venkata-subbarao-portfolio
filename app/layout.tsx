import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import BackToTop from "@/components/BackToTop";
import CommandPalette from "@/components/CommandPalette";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venkatasubbarao.dev"),
  title: `${profile.shortName} — Python & Full Stack Developer`,
  description: profile.summary,
  keywords: [
    "Ventrapragada Venkata Subbarao",
    "Python Developer",
    "Full Stack Developer",
    "Django Developer",
    "Software Engineer Fresher",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.shortName} — Python & Full Stack Developer`,
    description: profile.summary,
    url: "https://venkatasubbarao.dev",
    siteName: profile.shortName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} — Python & Full Stack Developer`,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-body antialiased selection:bg-primary/20`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollProgress />
          <CursorGlow />
          {children}
          <BackToTop />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
