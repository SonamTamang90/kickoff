import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../styles/tailwind.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const proximaNovaCondensed = localFont({
  src: [
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Thin TheFontsMaster.com.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Thin Italic TheFontsMaster.com.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Light TheFontsMaster.com.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Light Italic TheFontsMaster.com.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Regular TheFontsMaster.com.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Regular Italic TheFontsMaster.com.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Semibold TheFontsMaster.com.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Semibold Italic TheFontsMaster.com.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Bold TheFontsMaster.com.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Bold Italic TheFontsMaster.com.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Extrabold TheFontsMaster.com.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Extrabold Italic TheFontsMaster.com.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Black TheFontsMaster.com.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Mark Simonson  Proxima Nova Condensed Black Italic TheFontsMaster.com.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KICKOFF - Tournament Management Platform",
    template: "%s | KICKOFF",
  },
  description:
    "Professional tournament management platform for esports and traditional sports. Organize tournaments, manage teams, track results, and engage your community.",
  keywords: [
    "tournament management",
    "esports",
    "sports tournaments",
    "gaming competitions",
    "bracket management",
    "team registration",
    "tournament platform",
    "competitive gaming",
    "sports organization",
  ],
  authors: [{ name: "Sonam Tamang" }],
  creator: "Sonam Tamang",
  publisher: "KICKOFF",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "KICKOFF",
    title: "KICKOFF - Tournament Management Platform",
    description:
      "Professional tournament management platform for esports and traditional sports. Organize tournaments, manage teams, and track results.",
    url: "/",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "KICKOFF Tournament Management Platform",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KICKOFF - Tournament Management Platform",
    description:
      "Professional tournament management platform for esports and traditional sports.",
    images: ["/assets/twitter-image.png"],
    creator: "@kickoff_platform",
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
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID,
    // yandex: process.env.YANDEX_VERIFICATION_ID,
    // bing: process.env.BING_VERIFICATION_ID,
  },
  category: "technology",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#14b8a6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "KICKOFF",
    description:
      "Professional tournament management platform for esports and traditional sports.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    applicationCategory: "SportsApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      category: "SaaS",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Tournament Management",
      "Team Registration",
      "Bracket Generation",
      "Live Results Tracking",
      "Community Features",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "256",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${proximaNovaCondensed.variable} font-sans antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
