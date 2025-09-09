import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../styles/tailwind.css";
import CursorFollower from "@/components/shared/CursorFollower";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KICKOFF - Local Tournament Management Platform | Community Sports Events",
    template: "%s | KICKOFF Tournament Platform",
  },
  description:
    "Local tournament management platform for community sports and events. Organize local competitions, manage teams, track results, and engage your community.",
  keywords: [
    "tournament management",
    "local tournaments",
    "community sports",
    "local competitions",
    "bracket management",
    "team registration",
    "tournament platform",
    "neighborhood sports",
    "community events",
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
    title: "KICKOFF - Local Tournament Management Platform | Community Sports Events",
    description:
      "Local tournament management platform for community sports and events. Organize local competitions, manage teams, and track results.",
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
    title: "KICKOFF - Local Tournament Management Platform | Community Sports Events",
    description:
      "Local tournament management platform for community sports and events. Organize, manage, and track local competitions with ease.",
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
      "Local tournament management platform for community sports and events.",
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
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} h-full font-sans antialiased bg-black`}
        suppressHydrationWarning={true}
      >
        <div className="fixed bottom-0 top-0 w-[1px] left-8 h-full bg-dark-400/10 -z-10 pointer-events-none" />
        <div className="fixed bottom-0 top-0 w-[1px] left-[33.3%] h-full bg-dark-400/10 -z-10 pointer-events-none" />
        <div className="fixed bottom-0 top-0 w-[1px] left-[65.4%] h-full bg-dark-400/10 -z-10 pointer-events-none" />
        <div className="fixed bottom-0 top-0 w-[1px] right-8 h-full bg-dark-400/10 -z-10 pointer-events-none" />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
