import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - BigBet.Beer",
  description:
    "Read BigBet.Beer's privacy policy to understand how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">Privacy Policy 🔒</h1>
              <p className="text-xl text-muted-foreground">Your privacy is important to us</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 prose prose-slate max-w-none">
                <p className="text-muted-foreground mb-6">Last updated: January 2024</p>

                <h2 className="text-xl font-bold font-serif text-primary mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-6">
                  We collect information you provide directly to us, such as when you create an account, subscribe to
                  our newsletter, or contact us for support.
                </p>

                <h2 className="text-xl font-bold font-serif text-primary mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-6">
                  We use the information we collect to provide, maintain, and improve our services, send you updates
                  about new bonuses and promotions, and respond to your inquiries.
                </p>

                <h2 className="text-xl font-bold font-serif text-primary mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy.
                </p>

                <h2 className="text-xl font-bold font-serif text-primary mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at privacy@bigbet.beer
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
