import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ChevronRight, CheckCircle2,
  Phone, MessageCircle, ArrowRight, ShieldCheck, Landmark,
  GraduationCap, HeartPulse, UtensilsCrossed, Car
} from "lucide-react";
import { LOCATIONS_DATA, getLocationBySlug } from "@/lib/locations-data";
import { PROJECTS } from "@/lib/projects-data";
import { PROPERTIES } from "@/lib/properties-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Location Not Found" };

  return {
    title: `${location.name} Neighborhood Guide`,
    description: `Comprehensive real estate and lifestyle guide for ${location.name}, Lahore. Explore investment potential, properties, and infrastructure.`,
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Filter projects in this location
  const matchingProjects = PROJECTS.filter((p) =>
    p.location.toLowerCase().includes(location.name.toLowerCase()) ||
    p.address.toLowerCase().includes(location.name.toLowerCase())
  );

  // Filter properties in this location
  const matchingProperties = PROPERTIES.filter((p) => p.locationSlug === location.slug);

  const iconForCategory = (cat: string) => {
    if (cat.toLowerCase().includes("edu")) return GraduationCap;
    if (cat.toLowerCase().includes("health") || cat.toLowerCase().includes("care")) return HeartPulse;
    if (cat.toLowerCase().includes("din") || cat.toLowerCase().includes("retail")) return UtensilsCrossed;
    if (cat.toLowerCase().includes("transit") || cat.toLowerCase().includes("conn")) return Car;
    return Landmark;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[480px] w-full flex items-end">
        <div className="absolute inset-0">
          <Image
            src={location.heroImage}
            alt={location.name}
            fill
            className="object-cover brightness-[0.45]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 max-w-[1400px] pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <ChevronRight size={12} />
            <span className="text-white font-medium">{location.name}</span>
          </nav>

          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.25em] px-4 py-1.5 mb-4">
            Neighborhood Dossier
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            {location.name}
          </h1>
          <p className="text-white/80 max-w-2xl mt-3 font-light text-base md:text-lg">
            {location.tagline}
          </p>
        </div>
      </section>

      {/* Quick Metrics Bar */}
      <div className="bg-surface border-y border-border py-8">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted mb-1">Average Entry Price</div>
              <div className="text-xl md:text-2xl font-light text-brand">{location.avgPrice}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted mb-1">Target Rental Yield</div>
              <div className="text-xl md:text-2xl font-light text-brand">{location.roi}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted mb-1">Appreciation Benchmark</div>
              <div className="text-xl md:text-2xl font-light text-brand">{location.capitalAppreciation}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted mb-1">Active Portfolio</div>
              <div className="text-xl md:text-2xl font-light text-brand">{location.propertyCount}+ Units</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 max-w-[1400px] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main 2 Cols */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3">
                <span className="w-8 h-px bg-muted/40" /> Overview & Heritage
              </div>
              <h2 className="text-3xl font-light text-brand mb-6">
                Living in {location.name}
              </h2>
              <p className="text-muted leading-relaxed font-light text-base md:text-lg mb-6">
                {location.overview}
              </p>
              <p className="text-muted leading-relaxed font-light text-base md:text-lg">
                {location.description}
              </p>
            </section>

            {/* Key Highlights */}
            <section className="bg-surface border border-border p-8">
              <h3 className="text-xl font-light text-brand mb-6 flex items-center gap-2">
                <ShieldCheck size={20} className="text-brand" /> Signature Characteristics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {location.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-brand/90">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Infrastructure & Community Map Breakdown */}
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3">
                <span className="w-8 h-px bg-muted/40" /> Master Infrastructure
              </div>
              <h2 className="text-3xl font-light text-brand mb-8">
                Districts & Connectivity
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {location.keyInfrastructure.map((cat, idx) => {
                  const Icon = iconForCategory(cat.category);
                  return (
                    <div key={idx} className="border border-border bg-surface p-6">
                      <div className="w-10 h-10 bg-brand/5 border border-border flex items-center justify-center text-brand mb-4">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-medium text-brand mb-3">{cat.category}</h4>
                      <ul className="space-y-2">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs text-muted font-light flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Investment & Growth Thesis */}
            <section className="bg-brand text-white p-8 md:p-10">
              <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Advisory Insight</div>
              <h3 className="text-2xl font-light mb-4">Investment Potential & Growth Thesis</h3>
              <p className="text-white/80 font-light leading-relaxed mb-6">
                {location.investmentAnalysis}
              </p>
              <div className="pt-6 border-t border-white/20 flex flex-wrap gap-8 text-xs font-light text-white/70">
                <div>
                  <strong className="block text-white text-lg font-medium">{location.roi}</strong>
                  Expected Rental Yield
                </div>
                <div>
                  <strong className="block text-white text-lg font-medium">{location.capitalAppreciation}</strong>
                  Capital Growth Pace
                </div>
              </div>
            </section>

            {/* Properties Available in this Location */}
            {(matchingProjects.length > 0 || matchingProperties.length > 0) && (
              <section>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3">
                  <span className="w-8 h-px bg-muted/40" /> Featured Inventory
                </div>
                <h2 className="text-3xl font-light text-brand mb-8">
                  Available in {location.name}
                </h2>

                <div className="space-y-6">
                  {matchingProjects.map((p) => (
                    <Link
                      key={p.id}
                      href={`/projects/${p.slug}`}
                      className="group flex flex-col md:flex-row border border-border bg-surface hover:border-brand transition-colors overflow-hidden"
                    >
                      <div className="relative md:w-2/5 aspect-[16/10] md:aspect-auto">
                        <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-6 md:w-3/5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-brand/70 bg-background px-2.5 py-1 border border-border">
                              {p.type}
                            </span>
                            <span className="text-sm font-semibold text-brand">{p.price}</span>
                          </div>
                          <h3 className="text-xl font-light text-brand mb-2 group-hover:text-brand/80">
                            {p.name}
                          </h3>
                          <p className="text-muted text-xs font-light line-clamp-2 mb-4">
                            {p.tagline}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-border text-xs">
                          <span className="text-muted">{p.developer}</span>
                          <span className="text-brand font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            View Project <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}

                  {matchingProperties.map((prop) => (
                    <div
                      key={prop.id}
                      className="flex flex-col sm:flex-row items-center justify-between p-5 border border-border bg-surface hover:border-brand transition-colors gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 shrink-0 overflow-hidden">
                          <Image src={prop.image} alt={prop.title} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase font-semibold text-muted tracking-wider">{prop.purpose} &bull; {prop.type}</div>
                          <h4 className="font-medium text-brand text-sm">{prop.title}</h4>
                          <div className="text-xs text-muted">{prop.beds} Beds &bull; {prop.area}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="text-right">
                          <div className="text-sm font-semibold text-brand">{prop.price}</div>
                        </div>
                        <Link
                          href="/properties"
                          className="bg-brand text-white px-4 py-2 text-xs uppercase font-semibold tracking-wider hover:bg-brand/90 transition-colors"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Map Preview */}
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3">
                <span className="w-8 h-px bg-muted/40" /> Geographic Footprint
              </div>
              <h2 className="text-3xl font-light text-brand mb-6">
                Neighborhood Map
              </h2>
              <div className="relative aspect-[16/9] w-full border border-border overflow-hidden bg-muted/20">
                <iframe
                  title={`${location.name} Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${location.mapEmbedQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* Consultation Box */}
              <div className="border border-border bg-surface p-8 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">
                  Specialist Advisory
                </div>
                <h3 className="text-xl font-light text-brand mb-2">
                  Interested in {location.name}?
                </h3>
                <p className="text-muted text-xs font-light leading-relaxed mb-6">
                  Speak directly with our senior property consultant specializing in {location.name} acquisitions and off-market inventory.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+924211122333"
                    className="flex items-center justify-center gap-2 border border-border py-3 text-xs font-semibold uppercase tracking-widest text-brand hover:border-brand transition-colors"
                  >
                    <Phone size={15} /> +92 42 111 223 333
                  </a>
                  <a
                    href={`https://wa.me/924211122333?text=${encodeURIComponent(
                      `Hi Salaar Properties, I would like to inquire about investment opportunities in ${location.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25d366] text-white py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#1ebe5d] transition-colors"
                  >
                    <MessageCircle size={15} /> WhatsApp Consultant
                  </a>
                </div>
              </div>

              {/* Other Locations Nav */}
              <div className="border border-border bg-surface p-6">
                <h4 className="text-xs uppercase tracking-widest text-muted font-semibold mb-4">
                  Explore Other Enclaves
                </h4>
                <div className="space-y-3">
                  {LOCATIONS_DATA.filter((l) => l.slug !== location.slug).map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      className="group flex items-center justify-between text-sm py-1.5 border-b border-border/50 text-brand hover:text-brand/70 transition-colors"
                    >
                      <span>{l.name}</span>
                      <ChevronRight size={14} className="text-muted group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
