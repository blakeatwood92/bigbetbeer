"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const filterOptions = {
  bonusType: ["No Deposit", "First Bet Insurance", "Deposit Match", "Free Bets"],
  features: ["Live Betting", "Cash Out", "Same Game Parlays", "Live Streaming", "Mobile App"],
  sports: ["NFL", "NBA", "MLB", "NHL", "Soccer", "Tennis", "Golf", "UFC"],
}

export function SportsbookFilters() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    bonusType: [],
    features: [],
    sports: [],
  })

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }))
  }

  const clearAllFilters = () => {
    setActiveFilters({ bonusType: [], features: [], sports: [] })
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold font-serif">Filter Sportsbooks</h3>
          <Button variant="outline" onClick={clearAllFilters} size="sm">
            Clear All
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Bonus Type</h4>
            <div className="flex flex-wrap gap-2">
              {filterOptions.bonusType.map((option) => (
                <Badge
                  key={option}
                  variant={activeFilters.bonusType.includes(option) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                  onClick={() => toggleFilter("bonusType", option)}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Features</h4>
            <div className="flex flex-wrap gap-2">
              {filterOptions.features.map((option) => (
                <Badge
                  key={option}
                  variant={activeFilters.features.includes(option) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                  onClick={() => toggleFilter("features", option)}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Sports</h4>
            <div className="flex flex-wrap gap-2">
              {filterOptions.sports.map((option) => (
                <Badge
                  key={option}
                  variant={activeFilters.sports.includes(option) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                  onClick={() => toggleFilter("sports", option)}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
