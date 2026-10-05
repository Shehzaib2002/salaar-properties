import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, TrendingUp, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Locations",
  description: "Explore prime neighborhoods in Lahore â€” DHA, Gulberg, Bahria Town, Canal Bank Road, and Johar Town. Discover market insights and premium properties by location.",
};

const LOCATIONS = [
  {
    slug: "dha",
    name: "DHA Lahore",
    subtitle: "The Gold Standard of Gated Living",
    description: "Defence Housing Authority Lahore represents the pinnacle of planned community living in Pakistan. From ultra-luxury villas in Phase 5 to modern apartments in Phase 9 Prism, DHA offers unmatched security, infrastructure, and investment potential.",
    image: "/the_meridian_villas.jpg",
    propertyCount: 45,
    avgPrice: "From â‚¨ 85M",
    roi: "8-12%",
    highlights: ["Phase 5, 6, 7, 8, 9 Prism", "Golf courses & country clubs", "International schools", "Ultra-secure gated community"],
  },
  {
    slug: "gulberg",
    name: "Gulberg",
    subtitle: "The High-Rise & Commercial Heart",
    description: "Gulberg is Lahore's most prestigious commercial and luxury residential district. Home to landmark towers like One Canal Road and Galleria Residences, it sits at the intersection of corporate excellence and urban luxury living.",
    image: "/emirates_mall_residences.jpg",
    propertyCount: 28,
    avgPrice: "From â‚¨ 50M",
    roi: "9-14%",
    highlights: ["M.M. Alam Road walkable", "Canal Bank Road frontage", "Premium restaurants & retail", "Ultra-luxury high-rises"],
  },
  {
    slug: "bahria-town",
    name: "Bahria Town",
    subtitle: "Unmatched Amenities & Community",
    description: "Bahria Town Lahore is one of the world's largest private housing projects. With its own theme parks, international-standard golf course, Grand Jamia Mosque, and hospitals, it delivers a fully self-contained lifestyle.",
    image: "/hero_background.jpg",
    propertyCount: 35,
    avgPrice: "From â‚¨ 55M",
    roi: "7-11%",
    highlights: ["18-hole golf course", "Grand Jamia Mosque", "Own theme park", "Full civic infrastructure"],
  },
  {
    slug: "canal-bank",
    name: "Canal Bank Road",
    subtitle: "The Scenic Luxury Corridor",
    description: "Canal Bank Road is Lahore's most scenic address, offering canal-facing apartments, boutique hotels, and high-end restaurants. Developments like Union Living deliver premium apartment living with breathtaking canal views.",
    image: "/emirates_mall_residences.jpg",
    propertyCount: 18,
    avgPrice: "From â‚¨ 65M",
    roi: "8-10%",
    highlights: ["Canal-facing apartments", "Promenade lifestyle", "High-end F&B corridor", "Central Lahore access"],
  },
  {
    slug: "johar-town",
    name: "Johar Town",
    subtitle: "The Rising Commercial District",
    description: "Johar Town has emerged as one of Lahore's fastest-growing business and residential districts. With excellent connectivity, competitive prices, and high ROI potential, it's the top pick for commercial investors.",
    image: "/hero_background.jpg",
    propertyCount: 22,
    avgPrice: "From â‚¨ 30M",
    roi: "10-15%",
    highlights: ["Main Boulevard frontage", "IT & corporate hub", "Affordably priced", "High rental demand"],
  },
];

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* Header */}
      <section className="pt-40 pb-20 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Location Intelligence</div>
          <h1 className="text-5xl md:text-7xl font-light text-brand mb-6">Explore Lahore&apos;s<br /><span className="font-medium">Prime Addresses</span></h1>
          <p className="text-muted text-lg font-light max-w-2xl">
            From gated villa communities in DHA to canal-front high-rises in Gulberg, discover the neighborhoods where Salaar Properties operates.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12">
            {LOCATIONS.map((loc, i) => (
              <div key={loc.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden group hover:border-brand transition-colors ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                  <Image src={loc.image} alt={loc.name} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/15 backdrop-blur-sm text-white border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                      {loc.propertyCount} Properties
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className={`p-10 lg:p-14 flex flex-col justify-center bg-surface ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="flex items-center gap-2 text-muted text-xs uppercase tracking-widest font-medium mb-3">
                    <MapPin size={12} /> {loc.subtitle}
                  </div>
                  <h2 className="text-4xl font-light text-brand mb-5">{loc.name}</h2>
                  <p className="text-muted font-light leading-relaxed mb-8">{loc.description}</p>

                  {/* Key highlights */}
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {loc.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-brand font-medium">
                        <span className="w-1.5 h-1.5 bg-brand rounded-full shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Quick stats */}
                  <div className="flex gap-8 border-t border-border pt-6 mb-8">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted mb-1">
                        <Building2 size={12} /> Avg. Price
                      </div>
                      <p className="text-brand font-medium text-sm">{loc.avgPrice}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted mb-1">
                        <TrendingUp size={12} /> Est. ROI
                      </div>
                      <p className="text-brand font-medium text-sm">{loc.roi} p.a.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6">
                    <Link href={`/locations/${loc.slug}`} className="inline-flex items-center gap-2 group/link text-brand font-semibold text-sm uppercase tracking-widest border-b border-brand pb-1 hover:opacity-70 transition-opacity w-fit">
                      Neighborhood Dossier <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link href={`/projects?location=${loc.slug}`} className="inline-flex items-center gap-2 text-muted hover:text-brand font-medium text-sm uppercase tracking-widest pb-1 transition-colors w-fit">
                      View Projects
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-white py-20">
        <div className="container mx-auto px-6 max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-3">Not sure which location is right?</h2>
            <p className="text-white/60 font-light">Our advisors provide complimentary location consultations.</p>
          </div>
          <Link href="/contact-us" className="shrink-0 inline-flex items-center gap-3 bg-white text-brand px-8 py-4 text-sm font-semibold tracking-wider hover:bg-white/90 transition-colors">
            Get Expert Advice <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}