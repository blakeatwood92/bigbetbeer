export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin text-4xl">🎰</div>
        <div>
          <h2 className="text-xl font-semibold font-serif text-primary">Loading BigBet.Beer</h2>
          <p className="text-muted-foreground">Getting the best odds ready for you...</p>
        </div>
      </div>
    </div>
  )
}
