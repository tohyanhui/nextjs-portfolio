import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tohyanhui.com'),
  title: {
    default: "Toh Yan Hui - Software Developer Portfolio",
    template: "%s | Toh Yan Hui"
  },
  description: "Software Developer specializing in web and mobile development. Expert in React, Next.js, React Native, Java, and Python. View my projects and get in touch.",
  keywords: ["Toh Yan Hui", "Software Developer", "Web Developer", "Mobile Developer", "React", "Next.js", "React Native", "Java", "Python", "Portfolio"],
  authors: [{ name: "Toh Yan Hui" }],
  creator: "Toh Yan Hui",
  publisher: "Toh Yan Hui",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tohyanhui.com",
    title: "Toh Yan Hui - Software Developer Portfolio",
    description: "Software Developer specializing in web and mobile development. Expert in React, Next.js, React Native, Java, and Python.",
    siteName: "Toh Yan Hui Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toh Yan Hui - Software Developer Portfolio",
    description: "Software Developer specializing in web and mobile development. Expert in React, Next.js, React Native, Java, and Python.",
    creator: "@tohyanhui01",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'bBl6n2-s4rcOSreEZMmU2fkMwIyzcLvVp93yeiXqJKU',
  },
};

export const viewport: Viewport = {
  themeColor: "#0070f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans text-gray-900 dark:text-white bg-white dark:bg-dark-background transition-colors duration-300`}
      >
        {/* Dark mode background gradients */}
        <div className="fixed inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        </div>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
