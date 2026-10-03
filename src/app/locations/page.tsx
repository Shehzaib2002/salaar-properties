export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-32 px-6">
      <div className="container mx-auto max-w-[1400px]">
        <h1 className="text-4xl md:text-5xl font-light text-brand mb-4">Locations</h1>
        <p className="text-muted max-w-2xl mb-12">Discover premium neighborhoods across Lahore.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-border p-8 bg-surface hover:border-brand transition-colors">
            <h3 className="text-2xl font-light text-brand mb-2">DHA Lahore</h3>
            <p className="text-muted text-sm font-light">The pinnacle of gated community living in Lahore.</p>
          </div>
          <div className="border border-border p-8 bg-surface hover:border-brand transition-colors">
            <h3 className="text-2xl font-light text-brand mb-2">Gulberg</h3>
            <p className="text-muted text-sm font-light">The commercial and luxury high-rise heart of the city.</p>
          </div>
          <div className="border border-border p-8 bg-surface hover:border-brand transition-colors">
            <h3 className="text-2xl font-light text-brand mb-2">Bahria Town</h3>
            <p className="text-muted text-sm font-light">Unmatched amenities and secure family living.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
