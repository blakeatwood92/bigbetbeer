import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Casino & Sportsbook Bonuses 2024 - Exclusive Offers",
  description:
    "Find the best casino welcome bonuses, sportsbook signup offers, and exclusive promotional codes. Compare bonus terms and claim your rewards today.",
  keywords:
    "casino bonuses, sportsbook bonuses, welcome bonus, signup bonus, promotional codes, free spins, no deposit bonus",
}

const bonuses = [
  {
    id: 1,
    site: "BetMGM",
    type: "Sportsbook",
    bonus: "$1,000 No Sweat First Bet",
    code: "BIGBET1000",
    terms: "New users only. Min $10 bet. Get bet back as bonus bet if it loses.",
    expiry: "2024-12-31",
    rating: 4.8,
  },
  {
    id: 2,
    site: "Caesars Casino",
    type: "Casino",
    bonus: "$10 No Deposit + 100% up to $2,000",
    code: "BEER10",
    terms: "New players only. 30x wagering requirement. Valid for 30 days.",
    expiry: "2024-12-31",
    rating: 4.7,
  },
  {
    id: 3,
    site: "DraftKings",
    type: "Sportsbook",
    bonus: "$35 No Deposit + 100% up to $2,000",
    code: "DRAFT35",
    terms: "New customers only. Play through requirements apply.",
    expiry: "2024-12-31",
    rating: 4.6,
  },
]

export default function BonusesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">
                Exclusive Bonuses & Offers 💰
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Claim the best casino and sportsbook bonuses with our exclusive promotional codes
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4">
            <div className="grid gap-6 max-w-4xl mx-auto">
              {bonuses.map((bonus) => (
                <Card key={bonus.id} className="bg-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl">{bonus.site}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {bonus.type}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-lg">⭐</span>
                          <span className="font-semibold">{bonus.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-accent text-lg mb-2">{bonus.bonus}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Promo Code:</span>
                        <Badge className="bg-primary text-primary-foreground font-mono">{bonus.code}</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Terms & Conditions</h4>
                      <p className="text-sm text-muted-foreground">{bonus.terms}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Expires: {new Date(bonus.expiry).toLocaleDateString()}
                      </span>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Claim Bonus 🎯</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
