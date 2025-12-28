import Header from "@/components/header";
import "./globals.css";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import React from "react";
import { Metadata } from "next";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleksander Podobnik | Portfolio",
  description:
    "Aleksander Podobnik, a student at the University of Maribor, Faculty of Electrical Engineering and Computer Science (FERI)",
  keywords: [
    "Aleksander Podobnik",
    "Full-Stack Developer",
    "Computer Science",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "Web Development",
    "Portfolio",
    "Slovenia",
    "Maribor",
  ],
  authors: [{ name: "Aleksander Podobnik" }],
  creator: "Aleksander Podobnik",
  publisher: "Aleksander Podobnik",
  metadataBase: new URL("https://aleksanderpodobnik.dev"),
  verification: {
    google: "6hXdreZxQZz4nj8WKrRUylMZHn0k5S4GklVP0SvlPOU",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
