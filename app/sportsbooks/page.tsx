import { Header } from "@/components/header"
import { SportsbookGrid } from "@/components/sportsbook-grid"
import { SportsbookFilters } from "@/components/sportsbook-filters"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Sportsbooks 2024 - Compare Betting Sites & Bonuses | BigBet.Beer",
  description:
    "Compare the top sportsbook sites with exclusive signup bonuses. Find the best betting odds, live betting options, and welcome offers for 2024.",
  keywords: "sportsbooks, betting sites, sportsbook bonuses, best betting sites, sports betting, signup bonus",
}

export default function SportsbooksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">Best Sportsbooks 2024 🏈</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Compare top-rated sportsbooks, exclusive signup bonuses, and find the perfect betting site for you
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4">
            <SportsbookFilters />
            <SportsbookGrid />
          </div>
        </section>
      </main>
    </div>
  )
}
