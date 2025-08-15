import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact BigBet.Beer - Get in Touch",
  description:
    "Contact the BigBet.Beer team for questions, feedback, or partnership opportunities. We're here to help with all your betting needs.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">Contact Us 📧</h1>
              <p className="text-xl text-muted-foreground">Have questions or feedback? We'd love to hear from you!</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us more..." rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message 📤
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
