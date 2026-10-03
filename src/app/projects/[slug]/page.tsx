import Image from "next/image";
import { MapPin, Bed, Bath, Square, CheckCircle2 } from "lucide-react";

export default function ProjectDetail() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[60vh] w-full mt-20">
        <Image src="/emirates_mall_residences.jpg" alt="Project" fill className="object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="absolute bottom-10 left-0 right-0 container mx-auto px-6 max-w-[1400px]">
          <span className="bg-brand text-white px-3 py-1 text-xs uppercase tracking-wider mb-4 inline-block">Off-Plan</span>
          <h1 className="text-5xl font-light text-white mb-2">One Canal Road</h1>
          <p className="text-white/80 flex items-center gap-2"><MapPin size={16}/> Canal Bank Road, Lahore</p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-light text-brand mb-6">Overview</h2>
          <p className="text-muted leading-relaxed mb-10">
            One Canal Road is a pinnacle of luxury vertical living in Lahore. Designed by world-renowned architects, it offers unparalleled views of the canal and features state-of-the-art smart home technologies.
          </p>
          
          <h2 className="text-2xl font-light text-brand mb-6">Amenities</h2>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="flex items-center gap-3 text-muted"><CheckCircle2 size={18} className="text-brand"/> Infinity Pool</div>
            <div className="flex items-center gap-3 text-muted"><CheckCircle2 size={18} className="text-brand"/> Private Cinema</div>
            <div className="flex items-center gap-3 text-muted"><CheckCircle2 size={18} className="text-brand"/> Fitness Center</div>
            <div className="flex items-center gap-3 text-muted"><CheckCircle2 size={18} className="text-brand"/> 24/7 Concierge</div>
          </div>
        </div>

        <div>
          <div className="bg-surface border border-border p-8 sticky top-32">
            <h3 className="text-2xl font-light text-brand mb-2">Register Interest</h3>
            <p className="text-sm text-muted mb-6">Contact our advisors for pricing and floor plans.</p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" className="border border-border p-3 w-full bg-transparent outline-none focus:border-brand" />
              <input type="email" placeholder="Email Address" className="border border-border p-3 w-full bg-transparent outline-none focus:border-brand" />
              <input type="tel" placeholder="Phone Number" className="border border-border p-3 w-full bg-transparent outline-none focus:border-brand" />
              <button type="button" className="bg-brand text-white p-4 font-semibold uppercase tracking-wider text-sm mt-2 hover:bg-brand/90 transition-colors">
                Enquire Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
