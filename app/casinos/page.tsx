import { Header } from "@/components/header"
import { CasinoGrid } from "@/components/casino-grid"
import { CasinoFilters } from "@/components/casino-filters"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Online Casinos 2024 - Top Casino Bonuses & Games | BigBet.Beer",
  description:
    "Discover the best online casinos with exclusive welcome bonuses, free spins, and top-rated games. Compare casino sites and claim your bonus today.",
  keywords: "online casinos, casino bonuses, welcome bonus, free spins, casino games, slots, blackjack, roulette",
}

export default function CasinosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">
                Best Online Casinos 2024 🎰
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Compare top-rated online casinos, exclusive welcome bonuses, and find the perfect casino for you
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4">
            <CasinoFilters />
            <CasinoGrid />
          </div>
        </section>
      </main>
    </div>
  )
}
