import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: {
    default: "BigBet.Beer - Top Sportsbooks & Casino Bonuses 🍺",
    template: "%s | BigBet.Beer",
  },
  description:
    "Discover the best sportsbook sites and casino bonuses. Get exclusive signup offers, top slots of the month, and latest betting news at BigBet.Beer",
  keywords: [
    "sportsbook",
    "casino bonuses",
    "betting sites",
    "slots",
    "sports betting news",
    "casino news",
    "signup bonus",
    "online gambling",
    "best sportsbooks",
    "casino reviews",
    "betting odds",
    "gambling news",
  ],
  authors: [{ name: "BigBet.Beer Team" }],
  creator: "BigBet.Beer",
  publisher: "BigBet.Beer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bigbet.beer"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bigbet.beer",
    title: "BigBet.Beer - Top Sportsbooks & Casino Bonuses",
    description: "Your ultimate guide to the best betting sites and casino bonuses",
    siteName: "BigBet.Beer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BigBet.Beer - Top Sportsbooks & Casino Bonuses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BigBet.Beer - Top Sportsbooks & Casino Bonuses",
    description: "Your ultimate guide to the best betting sites and casino bonuses",
    images: ["/twitter-image.jpg"],
    creator: "@bigbetbeer",
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.variable};
  --font-serif: ${spaceGrotesk.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BigBet.Beer",
              url: "https://bigbet.beer",
              logo: "https://bigbet.beer/logo.png",
              description: "Your ultimate guide to the best sportsbooks, casino bonuses, and betting news",
              sameAs: ["https://twitter.com/bigbetbeer", "https://facebook.com/bigbetbeer"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
