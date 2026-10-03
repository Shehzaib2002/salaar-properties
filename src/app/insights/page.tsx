export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-32 px-6">
      <div className="container mx-auto max-w-[1400px]">
        <h1 className="text-4xl md:text-5xl font-light text-brand mb-4">Market Insights</h1>
        <p className="text-muted max-w-2xl mb-12">News, updates, and analysis of Lahore's real estate market.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-border p-8 bg-surface">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-2 block">Market Report</span>
            <h3 className="text-2xl font-light text-brand mb-4">Why High-Rise Living is Surging in Lahore</h3>
            <p className="text-muted text-sm font-light mb-6 line-clamp-3">
              As land prices in central districts like Gulberg soar, vertical developments are offering unprecedented luxury and ROI for both local and overseas investors.
            </p>
            <button className="text-sm font-semibold uppercase tracking-wider text-brand border-b border-brand pb-1 hover:opacity-70 transition-opacity">Read Article</button>
          </div>
          <div className="border border-border p-8 bg-surface">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-2 block">Developer News</span>
            <h3 className="text-2xl font-light text-brand mb-4">DHA Lahore Announces New Infrastructure Updates</h3>
            <p className="text-muted text-sm font-light mb-6 line-clamp-3">
              Recent road network expansions and commercial sector zoning are poised to increase the valuation of Phase 9 Prism and Phase 8 properties.
            </p>
            <button className="text-sm font-semibold uppercase tracking-wider text-brand border-b border-brand pb-1 hover:opacity-70 transition-opacity">Read Article</button>
          </div>
        </div>
      </div>
    </div>
  );
}
