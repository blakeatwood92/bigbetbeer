import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedSportsbooks } from "@/components/featured-sportsbooks"
import { BestSlotSites } from "@/components/best-slot-sites"
import { LiveCasino } from "@/components/live-casino"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BigBet.Beer",
    url: "https://bigbet.beer",
    description: "Your ultimate guide to the best sportsbooks, casino bonuses, and betting news",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://bigbet.beer/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturedSportsbooks />
        <BestSlotSites />
        <LiveCasino />
      </main>
      <Footer />
    </div>
  )
}
