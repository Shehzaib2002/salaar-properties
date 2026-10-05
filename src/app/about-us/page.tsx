import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users, TrendingUp, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Salaar Properties, Lahore''s premier real estate advisory firm with 15+ years of expertise in DHA, Gulberg, and Bahria Town.",
};

const TEAM = [
  { name: "Mian Ammar Mehmood", role: "CEO / Founder", image: "/hero_background.jpg" },
  { name: "Muhammad Arfan",     role: "General Manager",        image: "/emirates_mall_residences.jpg" },
  { name: "Sheikh Asadullah",   role: "Senior Sales Advisor",   image: "/the_meridian_villas.jpg" },
  { name: "Hassan Khan",        role: "Sales Advisor",          image: "/hero_background.jpg" },
  { name: "Mian Hamad Mahmood", role: "Sales Representative",   image: "/emirates_mall_residences.jpg" },
];

const VALUES = [
  { icon: Shield,   title: "Integrity",    desc: "Every transaction is conducted with complete transparency and legal compliance." },
  { icon: Award,    title: "Excellence",   desc: "We represent only Tier-1 developments that meet our strict quality benchmarks." },
  { icon: Users,    title: "Client-First", desc: "Your investment goals guide every recommendation we make." },
  { icon: TrendingUp, title: "Growth",     desc: "Data-driven advisory focused on maximizing your capital appreciation." },
];

const STATS = [
  { value: "15+",  label: "Years in Lahore" },
  { value: "40B",  label: "PKR Delivered Value" },
  { value: "500+", label: "Happy Clients" },
  { value: "100%", label: "LDA & DHA Approved" },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] w-full flex items-end">
        <div className="absolute inset-0">
          <Image src="/emirates_mall_residences.jpg" alt="About Salaar Properties" fill className="object-cover brightness-[0.45]" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative container mx-auto px-6 max-w-[1400px] pb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 mb-4">Our Story</div>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
            The Salaar<br /><span className="font-medium">Legacy</span>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand text-white py-20">
        <div className="container mx-auto px-6 max-w-[1000px] text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/90">
            &ldquo;We do not sell properties — we curate <em>legacies</em>. Every address we represent is a statement of architectural ambition and enduring value.&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-white/30" />
            <span className="text-white/50 text-sm uppercase tracking-widest font-medium">Mian Ammar Mehmood, Founder</span>
            <div className="w-10 h-px bg-white/30" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> Our Heritage</div>
              <h2 className="text-4xl md:text-5xl font-light text-brand mb-8 leading-tight">Founded on Trust.<br />Built on Results.</h2>
              <div className="prose max-w-none">
                <p>Salaar Properties was established with a single guiding principle: that every client deserves access to Lahore&apos;s finest real estate, backed by complete transparency and rigorous due diligence.</p>
                <p>Over 15 years, we have partnered with Pakistan&apos;s most reputable developers — Union Developers, Izhar Monnoo, Bahria Town, and DHA Lahore — to bring our clients investments that offer both unparalleled lifestyle and exceptional capital appreciation.</p>
                <p>Our strict vetting process ensures every project we represent holds the necessary LDA and DHA NOCs, protecting our clients from the risks that plague the broader market.</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/the_meridian_villas.jpg" alt="Salaar Properties Office" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-14 px-8 text-center">
                <h3 className="text-4xl md:text-5xl font-light text-brand mb-2">{stat.value}</h3>
                <p className="text-xs uppercase tracking-widest text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Our Principles</div>
            <h2 className="text-4xl md:text-5xl font-light text-brand">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface border border-border p-8 hover:border-brand transition-colors group">
                <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all">
                  <Icon size={22} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-brand mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-surface border-t border-border">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> Leadership</div>
              <h2 className="text-4xl md:text-5xl font-light text-brand leading-tight">The Visionaries<br />Behind Salaar</h2>
            </div>
            <p className="text-muted text-lg font-light max-w-md pb-2">
              Decades of combined expertise in Lahore&apos;s premium real estate market, committed to delivering exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {TEAM.map((member, i) => (
              <div key={member.name} className={`group ${i % 2 !== 0 ? "md:mt-12" : ""}`}>
                <div className="relative aspect-[3/4] bg-muted/10 mb-6 overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <h4 className="text-lg font-medium text-brand mb-1">{member.name}</h4>
                <p className="text-xs uppercase tracking-widest text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approvals & Affiliations */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Authorized & Trusted</div>
            <h2 className="text-4xl font-light text-brand">Our Affiliations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["LDA Authorized", "DHA Approved", "Zameen Partner", "Bahria Town Partner"].map((aff) => (
              <div key={aff} className="border border-border bg-surface p-8 text-center hover:border-brand transition-colors">
                <div className="w-10 h-10 border border-brand flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={18} className="text-brand" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand">{aff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-white py-24">
        <div className="container mx-auto px-6 max-w-[1400px] text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Start Your Property Journey</h2>
          <p className="text-white/60 text-lg font-light max-w-xl mx-auto mb-10">
            Let our advisors guide you to the right investment in Lahore&apos;s most prestigious addresses.
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-3 bg-white text-brand px-10 py-5 text-sm font-semibold tracking-wider hover:bg-white/90 transition-colors group">
            Speak to an Advisor <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}