import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About BigBet.Beer - Your Trusted Betting Guide",
  description:
    "Learn about BigBet.Beer's mission to provide honest reviews, exclusive bonuses, and the latest betting news to help you make informed gambling decisions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">About BigBet.Beer 🍺</h1>
              <p className="text-xl text-muted-foreground">
                Your trusted source for honest betting reviews and exclusive bonuses
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="grid gap-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-serif text-primary mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At BigBet.Beer, we're passionate about providing honest, comprehensive reviews of the best
                    sportsbooks and online casinos. Our team of experienced bettors and industry experts work tirelessly
                    to bring you exclusive bonuses, detailed comparisons, and the latest news in the gambling world.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-serif text-primary mb-4">What We Do</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">🎯</span>
                      <span>Review and rank the top sportsbooks and online casinos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">💰</span>
                      <span>Negotiate exclusive bonuses and promotional offers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">📰</span>
                      <span>Provide the latest news and insights from the betting industry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">🎰</span>
                      <span>Showcase the hottest slot games and casino offerings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-serif text-primary mb-4">Responsible Gaming</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to promoting responsible gambling. All our recommended sites are licensed and
                    regulated, and we encourage our users to gamble responsibly. If you or someone you know has a
                    gambling problem, please seek help from organizations like the National Council on Problem Gambling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
