import { Header } from "@/components/header"
import { NewsGrid } from "@/components/news-grid"
import { NewsFilters } from "@/components/news-filters"
import { FeaturedNews } from "@/components/featured-news"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casino & Sports Betting News - Latest Industry Updates | BigBet.Beer",
  description:
    "Stay updated with the latest casino news, sports betting updates, industry trends, and gambling legislation. Your source for betting industry insights.",
  keywords: "casino news, sports betting news, gambling news, betting industry, casino updates, sportsbook news",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">Latest Betting News 📰</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay informed with the latest casino news, sports betting updates, and industry insights
              </p>
            </div>
          </div>
        </section>

        <FeaturedNews />

        <section className="py-12">
          <div className="container px-4">
            <NewsFilters />
            <NewsGrid />
          </div>
        </section>
      </main>
    </div>
  )
}
