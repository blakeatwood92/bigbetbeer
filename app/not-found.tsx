import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center px-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="p-8 space-y-6">
          <div className="text-6xl">🎲</div>
          <div>
            <h1 className="text-3xl font-bold font-serif text-primary mb-2">Page Not Found</h1>
            <p className="text-muted-foreground">
              Looks like this page hit the jackpot and disappeared! Don't worry, we'll help you get back on track.
            </p>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/">Go Home 🏠</Link>
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/sportsbooks">Sportsbooks</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/casinos">Casinos</Link>
              </Button>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            Error 404 •{" "}
            <Link href="/" className="text-primary hover:underline">
              BigBet.Beer
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
