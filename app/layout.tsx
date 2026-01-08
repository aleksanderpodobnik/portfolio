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
  title: {
    default: "Aleksander Podobnik | Full-Stack Developer & CS Student",
    template: "Aleksander Podobnik",
  },
  description:
    "Computer Science student at FERI, University of Maribor, specializing in full-stack development with expertise in React, Next.js, TypeScript, Python, and modern web technologies.",
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
    "FERI",
    "University of Maribor",
  ],
  authors: [{ name: "Aleksander Podobnik" }],
  creator: "Aleksander Podobnik",
  publisher: "Aleksander Podobnik",
  metadataBase: new URL("https://aleksanderpodobnik.dev"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aleksanderpodobnik.dev",
    title: "Aleksander Podobnik | Full-Stack Developer & CS Student",
    description:
      "Computer Science student specializing in full-stack development with expertise in React, Next.js, TypeScript, Python, and modern web technologies.",
    siteName: "Aleksander Podobnik Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aleksander Podobnik - Full-Stack Developer",
      },
    ],
  },

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

  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "shortcut icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon.ico" },
  ],

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://aleksanderpodobnik.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aleksander Podobnik",
    url: "https://aleksanderpodobnik.dev",
    image: "https://aleksanderpodobnik.dev/portrait.jpg",
    jobTitle: "Full-Stack Developer & Computer Science Student",
    description:
      "Computer Science student at FERI specializing in full-stack development with expertise in React, Next.js, TypeScript, and Python.",
    sameAs: [
      "https://www.linkedin.com/in/aleksanderpodobnik/",
      "https://github.com/aleksanderpodobnik",
    ],
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "JavaScript",
      "Full-Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Maribor - Faculty of Electrical Engineering and Computer Science",
    },
  };

  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

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
