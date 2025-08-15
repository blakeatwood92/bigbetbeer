import { Header } from "@/components/header"
import { SlotsGrid } from "@/components/slots-grid"
import { SlotsFilters } from "@/components/slots-filters"
import { FeaturedSlots } from "@/components/featured-slots"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Top Slots of the Month 2024 - Best Online Slot Games | BigBet.Beer",
  description:
    "Discover the hottest slot games of the month. Find top-rated slots with high RTP, big jackpots, and exciting features. Play at the best online casinos.",
  keywords: "top slots, best slot games, online slots, slot machines, high RTP slots, jackpot slots, slot reviews",
}

export default function SlotsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">Top Slots of the Month 🎰</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the hottest slot games with the best RTPs, biggest jackpots, and most exciting features
              </p>
            </div>
          </div>
        </section>

        <FeaturedSlots />

        <section className="py-12">
          <div className="container px-4">
            <SlotsFilters />
            <SlotsGrid />
          </div>
        </section>
      </main>
    </div>
  )
}
