"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center px-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="p-8 space-y-6">
          <div className="text-6xl">⚠️</div>
          <div>
            <h1 className="text-3xl font-bold font-serif text-primary mb-2">Something Went Wrong</h1>
            <p className="text-muted-foreground">
              Looks like we hit a rough patch. Don't worry, these things happen in the betting world!
            </p>
          </div>

          <div className="space-y-3">
            <Button onClick={reset} className="w-full bg-accent hover:bg-accent/90">
              Try Again 🔄
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <a href="/">Go Home</a>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">If this problem persists, please contact support</div>
        </CardContent>
      </Card>
    </div>
  )
}
