import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <h1 className="text-4xl md:text-5xl font-light text-brand mb-4">Our Projects</h1>
        <p className="text-muted max-w-2xl mb-12">Discover our portfolio of premium real estate developments in Lahore.</p>
        
        {/* Filters placeholder */}
        <div className="flex gap-4 mb-8 border-b border-border pb-4">
          <button className="text-brand font-medium">All Projects</button>
          <button className="text-muted hover:text-brand">Under Construction</button>
          <button className="text-muted hover:text-brand">Ready to Move</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Project 1 */}
          <Link href="/projects/one-canal-road" className="group block">
            <div className="relative aspect-[4/3] bg-muted/5 overflow-hidden mb-4">
              <Image src="/emirates_mall_residences.jpg" alt="One Canal Road" fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
              <div className="absolute top-4 left-4 bg-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest z-10">Ultra Luxury</div>
            </div>
            <h3 className="text-2xl font-light text-brand mb-2">One Canal Road</h3>
            <p className="text-muted text-sm flex items-center gap-2"><MapPin size={14}/> Canal Bank Road</p>
          </Link>

          {/* Project 2 */}
          <Link href="/projects/dha-prism" className="group block">
            <div className="relative aspect-[4/3] bg-muted/5 overflow-hidden mb-4">
              <Image src="/the_meridian_villas.jpg" alt="DHA 9 Prism" fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
              <div className="absolute top-4 left-4 bg-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest z-10">Villas</div>
            </div>
            <h3 className="text-2xl font-light text-brand mb-2">Prism Signature Villas</h3>
            <p className="text-muted text-sm flex items-center gap-2"><MapPin size={14}/> DHA Phase 9 Prism</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
