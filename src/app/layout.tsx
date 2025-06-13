import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompt Engineering Learning Hub",
  description: "Master prompt engineering with hands-on modules, expert strategies, and the latest AI innovations. Learn advanced techniques, templates, and more!",
  openGraph: {
    title: "Prompt Engineering Learning Hub",
    description: "Master prompt engineering with hands-on modules, expert strategies, and the latest AI innovations. Learn advanced techniques, templates, and more!",
    url: "https://propt-engineering.vercel.app/", // Updated to deployed URL
    siteName: "Prompt Engineering Learning Hub",
    images: [
      {
        url: "/PROPT-1.png",
        width: 1200,
        height: 630,
        alt: "Prompt Engineering SEO Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Engineering Learning Hub",
    description: "Master prompt engineering with hands-on modules, expert strategies, and the latest AI innovations.",
    images: ["/PROPT-1.png"],
    creator: "@yourtwitterhandle" // Update if you have a Twitter handle
  },
  icons: {
    icon: "/PROPT-1.png",
    shortcut: "/PROPT-1.png",
    apple: "/PROPT-1.png",
  },
  keywords: [
    "Prompt Engineering",
    "AI prompts",
    "Prompt templates",
    "Chain-of-thought",
    "Few-shot prompting",
    "Zero-shot prompting",
    "AI learning modules",
    "Prompt optimization",
    "AI education",
    "Prompt engineering course"
  ],
  authors: [{ name: "Prompt Engineering Team", url: "https://propt-engineering.vercel.app/" }],
  creator: "Prompt Engineering Team",
  publisher: "Prompt Engineering Team",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/PROPT-1.png" type="image/png" />
        <link rel="shortcut icon" href="/PROPT-1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/PROPT-1.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <footer className="w-full text-center py-6 mt-12 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          Created by Anubhav
        </footer>
      </body>
    </html>
  );
}
