import type { Metadata } from "next";
import { InsightsList } from "@/components/insights-list";

export const metadata: Metadata = {
  title: "Market Insights",
  description: "Lahore real estate news, market reports, and investment guides from Salaar Properties â€” your source for data-driven property insights.",
};

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-40 pb-16 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Analysis & News</div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h1 className="text-5xl md:text-7xl font-light text-brand leading-tight">
              Market<br /><span className="font-medium">Insights</span>
            </h1>
            <p className="text-muted text-lg font-light max-w-lg pb-2">
              News, market reports, and investment guides from Salaar Properties&apos; expert advisory team.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter and Article Grid */}
      <InsightsList />

      {/* Newsletter CTA */}
      <section className="bg-brand text-white py-20">
        <div className="container mx-auto px-6 max-w-[800px] text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Stay Ahead of the Market</h2>
          <p className="text-white/60 font-light mb-10">Receive exclusive market reports and investment alerts directly from our advisory team.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 outline-none focus:border-white transition-colors" />
            <button className="bg-white text-brand px-6 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}