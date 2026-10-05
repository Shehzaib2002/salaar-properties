import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, MapPin, Building, ChevronRight, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative h-[92vh] min-h-[720px] w-full flex items-center justify-center">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="/hero_background.jpg"
            alt="Luxury Real Estate in Lahore"
            fill
            className="object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate] brightness-[0.7]"
            priority
          />
          {/* Rich luxury gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/85" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-[1400px] flex flex-col items-start mt-16 mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/40 backdrop-blur-md border border-[#c5a880]/50 text-[#c5a880] text-xs uppercase tracking-[0.25em] mb-8 shadow-md">
            <span className="w-1.5 h-1.5 bg-[#c5a880] rounded-full animate-pulse"></span>
            Exclusive Lahore Properties
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.1] mb-8 drop-shadow-2xl">
            Redefining <br className="hidden md:block"/>
            <span className="font-medium text-white">Luxury Living</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/85 max-w-xl mb-12 font-light leading-relaxed drop-shadow-md">
            Discover Lahore&apos;s most prestigious addresses. From DHA&apos;s ultra-luxury villas to vertical grandeur at One Canal Road.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/projects" className="bg-[#c5a880] text-[#0b0f17] px-10 py-5 text-xs uppercase tracking-widest font-semibold hover:bg-[#d8bb94] transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl">
              Explore Portfolio
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="bg-white/10 text-white border border-white/30 backdrop-blur-md px-10 py-5 text-xs uppercase tracking-widest font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 group">
              <Play size={15} className="fill-white" />
              Watch Brand Film
            </button>
          </div>
        </div>
      </section>

      {/* Floating Search Bar (Luxury Console) */}
      <div className="relative z-20 px-6 -mt-24 md:-mt-12 lg:-mt-16 mb-12">
        <div className="container mx-auto max-w-[1400px]">
          <div className="bg-white border border-slate-200/80 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-end shadow-[0_25px_60px_rgba(11,15,23,0.14)]">
            <div className="flex-1 w-full relative">
              <MapPin className="absolute left-0 bottom-3 text-[#c5a880]" size={20} />
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8c734b] mb-3 ml-8">Location</label>
              <select className="w-full border-b border-border py-2 text-brand focus:outline-none focus:border-[#c5a880] bg-transparent appearance-none ml-8 font-medium text-base">
                <option className="text-brand">DHA Lahore</option>
                <option className="text-brand">Gulberg</option>
                <option className="text-brand">Bahria Town</option>
                <option className="text-brand">Johar Town</option>
              </select>
            </div>
            <div className="w-px h-12 bg-border hidden md:block"></div>
            <div className="flex-1 w-full relative">
              <Building className="absolute left-0 bottom-3 text-[#c5a880]" size={20} />
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8c734b] mb-3 ml-8">Property Type</label>
              <select className="w-full border-b border-border py-2 text-brand focus:outline-none focus:border-[#c5a880] bg-transparent appearance-none ml-8 font-medium text-base">
                <option className="text-brand">High-Rise Apartment</option>
                <option className="text-brand">Luxury Villa</option>
                <option className="text-brand">Commercial Space</option>
              </select>
            </div>
            <Link href="/projects" className="bg-[#0b0f17] hover:bg-[#c5a880] hover:text-[#0b0f17] text-white px-10 py-4 h-[56px] w-full md:w-auto transition-all duration-300 flex items-center justify-center gap-3 shrink-0 shadow-lg font-semibold uppercase tracking-widest text-xs">
              <Search size={16} />
              <span>Find Property</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. STATS & TRUST BAR */}
      <section className="border-b border-border bg-surface pb-12 pt-4">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            <div className="py-12 px-6 text-center">
              <h3 className="text-4xl font-light text-brand mb-2"><span className="text-[#c5a880] font-normal">15</span>+</h3>
              <p className="text-xs uppercase tracking-widest text-muted font-medium">Years in Lahore</p>
            </div>
            <div className="py-12 px-6 text-center">
              <h3 className="text-4xl font-light text-brand mb-2"><span className="text-[#c5a880] font-normal">40</span>B</h3>
              <p className="text-xs uppercase tracking-widest text-muted font-medium">PKR Delivered Value</p>
            </div>
            <div className="py-12 px-6 text-center">
              <h3 className="text-4xl font-light text-brand mb-2"><span className="text-[#c5a880] font-normal">24/7</span></h3>
              <p className="text-xs uppercase tracking-widest text-muted font-medium">Concierge Service</p>
            </div>
            <div className="py-12 px-6 text-center">
              <h3 className="text-4xl font-light text-brand mb-2"><span className="text-[#c5a880] font-normal">100</span>%</h3>
              <p className="text-xs uppercase tracking-widest text-muted font-medium">LDA & DHA Approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DEVELOPMENTS */}
      <section className="section-spacing container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-muted/50"></span> Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-brand leading-tight">Masterpieces of <br/> Modern Architecture</h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-3 text-brand font-semibold hover:opacity-70 transition-opacity text-sm uppercase tracking-widest border-b border-brand pb-1">
            View Complete Collection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <Link href="/projects/one-canal-road" className="group block">
            <div className="relative aspect-[4/3] bg-muted/5 overflow-hidden">
              <Image 
                src="/emirates_mall_residences.jpg" 
                alt="One Canal Road"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute top-6 left-6 bg-surface/90 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-widest z-10 border border-border">
                Ultra Luxury
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-3xl font-light text-brand">One Canal Road</h3>
                <span className="text-lg font-medium text-brand mt-1">From â‚¨ 150M</span>
              </div>
              <p className="text-muted text-sm font-medium uppercase tracking-wider mb-5 flex items-center gap-2">
                <MapPin size={14}/> Canal Bank Road, Lahore
              </p>
              <div className="flex gap-6 text-sm border-t border-border pt-5">
                <div className="flex flex-col gap-1">
                  <span className="text-muted text-xs uppercase tracking-wider font-semibold">Developer</span>
                  <span className="text-brand font-medium">Zameen Developments</span>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-muted text-xs uppercase tracking-wider font-semibold">Status</span>
                  <span className="text-brand font-medium">Nearing Completion</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/projects/dha-prism" className="group block md:mt-24">
            <div className="relative aspect-[4/3] bg-muted/5 overflow-hidden">
              <Image 
                src="/the_meridian_villas.jpg" 
                alt="DHA 9 Prism Villas"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute top-6 left-6 bg-surface/90 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-widest z-10 border border-border">
                Ready to Move
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-3xl font-light text-brand">Prism Signature Villas</h3>
                <span className="text-lg font-medium text-brand mt-1">From â‚¨ 85M</span>
              </div>
              <p className="text-muted text-sm font-medium uppercase tracking-wider mb-5 flex items-center gap-2">
                <MapPin size={14}/> DHA Phase 9 Prism, Lahore
              </p>
              <div className="flex gap-6 text-sm border-t border-border pt-5">
                <div className="flex flex-col gap-1">
                  <span className="text-muted text-xs uppercase tracking-wider font-semibold">Developer</span>
                  <span className="text-brand font-medium">DHA Lahore</span>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-muted text-xs uppercase tracking-wider font-semibold">Types</span>
                  <span className="text-brand font-medium">1 & 2 Kanal</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. PREMIUM BRAND SECTION */}
      <section className="bg-brand text-brand-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
           {/* Abstract geometric shape for background texture */}
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
             <path d="M0,100 L100,0 L100,100 Z" fill="currentColor"></path>
           </svg>
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="text-brand-foreground/50 text-xs font-semibold uppercase tracking-[0.2em] mb-6">The Salaar Standard</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">Curating Lahore&apos;s Skyline</h2>
              <p className="text-brand-foreground/70 text-lg leading-relaxed mb-10 font-light">
                We partner with Tier-1 developers like Union Developers and Izhar Monnoo to bring you investments that offer both unparalleled lifestyle and exceptional capital appreciation in Pakistan&apos;s cultural capital.
              </p>
              <Link href="/about-us" className="inline-flex items-center gap-3 text-white font-semibold hover:opacity-70 transition-opacity uppercase tracking-widest text-sm border border-white/30 px-8 py-4">
                Our Heritage <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-medium mb-3">Verified Approvals</h4>
                  <p className="text-brand-foreground/60 text-sm leading-relaxed font-light">Every project we list undergoes strict due diligence for LDA and DHA NOCs.</p>
                </div>
                <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-medium mb-3">Premium Locations</h4>
                  <p className="text-brand-foreground/60 text-sm leading-relaxed font-light">Focusing strictly on prime corridors: Gulberg, DHA, and Canal Bank Road.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-medium mb-3">Investment Advisory</h4>
                  <p className="text-brand-foreground/60 text-sm leading-relaxed font-light">Data-driven insights for high rental yields and secure capital growth.</p>
                </div>
                <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-medium mb-3">End-to-End Service</h4>
                  <p className="text-brand-foreground/60 text-sm leading-relaxed font-light">From initial viewing to legal handover and property management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER FEEDBACK */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Client Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-light text-brand">The Salaar Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-surface border border-border p-12 relative group hover:border-brand transition-colors">
              <span className="text-6xl font-serif text-brand/10 absolute top-8 right-12 group-hover:text-brand/20 transition-colors">&ldquo;</span>
              <div className="flex gap-1 text-brand mb-8">
                {[1,2,3,4,5].map(star => <span key={star}>â˜…</span>)}
              </div>
              <p className="text-lg font-light text-brand leading-relaxed mb-10">
                &ldquo;I&apos;ve rented through Salaar Properties for over a year. Maintenance is handled quickly, communication is clear, and I&apos;ve never had any issues. Highly recommended.&rdquo;
              </p>
              <div>
                <h4 className="font-medium text-brand">Ayesha Khan</h4>
                <p className="text-xs uppercase tracking-widest text-muted mt-1">Tenant</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-surface border border-border p-12 relative group hover:border-brand transition-colors">
              <span className="text-6xl font-serif text-brand/10 absolute top-8 right-12 group-hover:text-brand/20 transition-colors">&ldquo;</span>
              <div className="flex gap-1 text-brand mb-8">
                {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
              </div>
              <p className="text-lg font-light text-brand leading-relaxed mb-10">
                &ldquo;From the first meeting to the final paperwork, Salaar Properties was professional and transparent. They made selling my property quick and entirely stress-free.&rdquo;
              </p>
              <div>
                <h4 className="font-medium text-brand">Bilal Hussain</h4>
                <p className="text-xs uppercase tracking-widest text-muted mt-1">Property Seller</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="text-sm font-semibold uppercase tracking-wider text-brand border-b border-brand pb-1 hover:opacity-70 transition-opacity">
              View All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* 6. MEET THE TEAM */}
      <section className="section-spacing bg-surface border-t border-border">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4 flex items-center gap-4">
                <span className="w-8 h-px bg-muted/50"></span> Leadership
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-brand leading-tight">The Visionaries <br/> Behind Salaar</h2>
            </div>
            <p className="text-muted text-lg font-light max-w-md pb-2">
              Our team brings decades of combined expertise in Lahore&apos;s premium real estate market, committed to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative aspect-[3/4] bg-muted/10 mb-6 overflow-hidden">
                <Image src="/hero_background.jpg" alt="Mian Ammar Mehmood" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h4 className="text-xl font-medium text-brand mb-1">Mian Ammar<br/>Mehmood</h4>
              <p className="text-xs uppercase tracking-widest text-muted">CEO / Founder</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="group md:mt-12">
              <div className="relative aspect-[3/4] bg-muted/10 mb-6 overflow-hidden">
                <Image src="/emirates_mall_residences.jpg" alt="Muhammad Arfan" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h4 className="text-xl font-medium text-brand mb-1">Muhammad<br/>Arfan</h4>
              <p className="text-xs uppercase tracking-widest text-muted">GM</p>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative aspect-[3/4] bg-muted/10 mb-6 overflow-hidden">
                <Image src="/the_meridian_villas.jpg" alt="Sheikh Asadullah" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h4 className="text-xl font-medium text-brand mb-1">Sheikh<br/>Asadullah</h4>
              <p className="text-xs uppercase tracking-widest text-muted">Senior Sales Advisor</p>
            </div>

            {/* Team Member 4 */}
            <div className="group md:mt-12">
              <div className="relative aspect-[3/4] bg-muted/10 mb-6 overflow-hidden">
                <Image src="/hero_background.jpg" alt="Hassan Khan" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h4 className="text-xl font-medium text-brand mb-1">Hassan<br/>Khan</h4>
              <p className="text-xs uppercase tracking-widest text-muted">Sales Advisor</p>
            </div>

            {/* Team Member 5 */}
            <div className="group">
              <div className="relative aspect-[3/4] bg-muted/10 mb-6 overflow-hidden">
                <Image src="/emirates_mall_residences.jpg" alt="Mian Hamad Mahmood" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h4 className="text-xl font-medium text-brand mb-1">Mian Hamad<br/>Mahmood</h4>
              <p className="text-xs uppercase tracking-widest text-muted">Sales Representative</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXPLORE COMMUNITIES */}
      <section className="section-spacing container mx-auto px-6 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Location Intelligence</div>
          <h2 className="text-4xl md:text-5xl font-light text-brand mb-6">Explore Key Neighborhoods</h2>
          <p className="text-muted text-lg font-light">Find your perfect address in Lahore&apos;s most sought-after districts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/locations/dha" className="group relative aspect-square md:aspect-[3/4] overflow-hidden bg-brand">
            <Image src="/the_meridian_villas.jpg" alt="DHA Lahore" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-light text-white mb-2">DHA Lahore</h3>
              <p className="text-white/80 font-light flex items-center justify-between">
                <span>45 Properties</span>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </p>
            </div>
          </Link>
          <Link href="/locations/gulberg" className="group relative aspect-square md:aspect-[3/4] overflow-hidden bg-brand">
            <Image src="/emirates_mall_residences.jpg" alt="Gulberg" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-light text-white mb-2">Gulberg</h3>
              <p className="text-white/80 font-light flex items-center justify-between">
                <span>High-Rise Luxury</span>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </p>
            </div>
          </Link>
          <Link href="/locations/bahria-town" className="group relative aspect-square md:aspect-[3/4] overflow-hidden bg-brand">
            <Image src="/hero_background.jpg" alt="Bahria Town" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-light text-white mb-2">Bahria Town</h3>
              <p className="text-white/80 font-light flex items-center justify-between">
                <span>Secure Gated Living</span>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
