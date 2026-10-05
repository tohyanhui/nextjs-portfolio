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

const siteTitle = "Toh Yan Hui | AI & Software Engineering";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tohyanhui.com'),
  title: {
    default: siteTitle,
    template: "%s | Toh Yan Hui"
  },
  description: "Toh Yan Hui is a Computer Science student at NUS building applied AI systems and thoughtful software. Explore projects, experience, and skills.",
  keywords: ["Toh Yan Hui", "Software Engineering", "Applied AI", "Machine Learning", "Python", "Java", "TypeScript", "React Native", "PyTorch", "Portfolio"],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
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
    title: siteTitle,
    description: "Computer Science student at NUS building applied AI systems and thoughtful software.",
    siteName: "Toh Yan Hui Portfolio",
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: "Computer Science student at NUS building applied AI systems and thoughtful software.",
    creator: "@tohyanhui01",
    images: ['/opengraph-image'],
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
  themeColor: "#f8faf9",
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
