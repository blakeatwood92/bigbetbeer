import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsible Gaming - BigBet.Beer",
  description:
    "Learn about responsible gambling practices, get help resources, and understand how to gamble safely and within your limits.",
}

export default function ResponsibleGamingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">Responsible Gaming 🛡️</h1>
              <p className="text-xl text-muted-foreground">Gambling should be fun and entertaining, not a problem</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="grid gap-8">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-serif text-primary mb-4">Need Help?</h2>
                  <p className="text-muted-foreground mb-6">
                    If you or someone you know has a gambling problem, help is available 24/7.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90">
                      <a href="tel:1-800-522-4700">Call 1-800-GAMBLER</a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="https://www.ncpgambling.org/" target="_blank" rel="noopener noreferrer">
                        Visit NCPG Website
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-serif text-primary mb-4">Gambling Guidelines</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Set a budget and stick to it</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Never gamble with money you can't afford to lose</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Take regular breaks from gambling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Don't chase losses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Keep gambling fun and entertaining</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-serif text-primary mb-4">Warning Signs</h2>
                  <p className="text-muted-foreground mb-4">Watch out for these signs of problem gambling:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Spending more money than you can afford</li>
                    <li>• Gambling to escape problems or negative feelings</li>
                    <li>• Lying about gambling activities</li>
                    <li>• Neglecting work, family, or other responsibilities</li>
                    <li>• Borrowing money to gamble</li>
                  </ul>
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
