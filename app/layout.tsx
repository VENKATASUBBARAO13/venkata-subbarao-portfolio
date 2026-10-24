import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
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

const seoDescription =
  "Venkata Subbarao is a 2026 Computer Science Engineering graduate with hands-on AWS cloud project experience covering application deployment, cloud networking, monitoring, security, automation, and serverless workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.portfolioUrl),
  title: `${profile.shortName} | AWS Cloud Engineer`,
  description: seoDescription,
  keywords: [
    "Ventrapragada Venkata Subbarao",
    "AWS Cloud Engineer",
    "Cloud Computing",
    "Cloud Engineer Fresher",
    "Cloud Infrastructure",
    "AWS Projects",
    "Python Developer",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.shortName} | AWS Cloud Engineer`,
    description: seoDescription,
    url: profile.portfolioUrl,
    siteName: profile.shortName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} | AWS Cloud Engineer`,
    description: seoDescription,
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
          <CursorGlow />
          {children}
          <BackToTop />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
