import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Johnny F T Rene | Développeur Full-Stack",
    template: "%s | Johnny F T Rene",
  },
  description:
    "Johnny F T Rene — développeur full-stack spécialisé dans la création de sites web, applications, plateformes et solutions digitales sur mesure.",
  keywords: [
    "développeur full-stack",
    "web developer",
    "Next.js",
    "React",
    "TypeScript",
    "SaaS",
    "applications web",
    "Johnny F T Rene",
  ],
  authors: [{ name: "Johnny F T Rene" }],
  creator: "Johnny F T Rene",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://johnnyftrene.com",
    siteName: "Johnny F T Rene",
    title: "Johnny F T Rene | Développeur Full-Stack",
    description:
      "Johnny F T Rene — développeur full-stack spécialisé dans la création de sites web, applications, plateformes et solutions digitales sur mesure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnny F T Rene | Développeur Full-Stack",
    description:
      "Développeur full-stack spécialisé dans la création de produits digitaux modernes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://johnnyftrene.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
