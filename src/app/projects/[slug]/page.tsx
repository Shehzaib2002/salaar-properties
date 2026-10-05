"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin, CheckCircle2, Calculator, Phone, MessageCircle,
  ChevronRight, X, ChevronLeft, Building2, Layers, Calendar, Home, ArrowRight,
} from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/lib/projects-data";
import { submitEnquiry } from "@/app/actions";

function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void; }) {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={onClose}>
      <div className="relative w-full max-w-5xl px-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-[16/9]">
          <Image src={images[current]} alt="Property" fill className="object-contain" />
        </div>
        <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
          <ChevronRight size={24} />
        </button>
        <button onClick={onClose} className="absolute top-0 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
          <X size={20} />
        </button>
        <p className="text-center text-white/50 text-sm mt-4">{current + 1} / {images.length}</p>
      </div>
    </div>
  );
}

function EnquiryForm({ projectId }: { projectId: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    formData.set("projectId", projectId);
    const result = await submitEnquiry(formData);
    if (result.error) { setErrorMsg(result.error); setStatus("error"); }
    else { setStatus("success"); formRef.current?.reset(); }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={28} /></div>
        <h4 className="text-xl font-light text-brand mb-2">Request Received</h4>
        <p className="text-muted text-sm font-light">Our advisor will contact you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand border-b border-brand pb-0.5 hover:opacity-70 transition-opacity">Send Another</button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input required type="text" name="name" placeholder="Full Name" className="border-b border-border py-3 bg-transparent outline-none focus:border-brand text-sm transition-colors placeholder:text-muted/60" />
      <input required type="email" name="email" placeholder="Email Address" className="border-b border-border py-3 bg-transparent outline-none focus:border-brand text-sm transition-colors placeholder:text-muted/60" />
      <input required type="tel" name="phone" placeholder="Phone Number" className="border-b border-border py-3 bg-transparent outline-none focus:border-brand text-sm transition-colors placeholder:text-muted/60" />
      <textarea name="message" placeholder="Message (optional)" rows={3} className="border-b border-border py-3 bg-transparent outline-none focus:border-brand text-sm transition-colors placeholder:text-muted/60 resize-none" />
      {status === "error" && <p className="text-red-500 text-xs">{errorMsg}</p>}
      <button type="submit" disabled={status === "loading"} className="bg-brand text-white py-4 font-semibold uppercase tracking-widest text-xs mt-2 hover:bg-brand/90 transition-colors disabled:opacity-50">
        {status === "loading" ? "Sending..." : "Register Interest"}
      </button>
    </form>
  );
}
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [propertyValue, setPropertyValue] = useState(project.priceValue);
  const [rentalYield, setRentalYield] = useState(7);
  const [appreciation, setAppreciation] = useState(10);

  const annualRent = (propertyValue * rentalYield) / 100;
  const capitalGrowth = (propertyValue * appreciation) / 100;
  const totalReturn = annualRent + capitalGrowth;
  const related = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {lightboxIndex !== null && (
        <Lightbox images={project.images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}

      {/* Hero */}
      <div className="relative h-[65vh] min-h-[480px] w-full">
        <Image src={project.images[0]} alt={project.name} fill className="object-cover brightness-[0.65]" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-28 left-0 right-0 container mx-auto px-6 max-w-[1400px]">
          <nav className="flex items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">{project.name}</span>
          </nav>
        </div>
        <div className="absolute bottom-10 left-0 right-0 container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-brand text-white px-3 py-1 text-xs font-semibold uppercase tracking-widest">{project.status}</span>
            {project.tags.map((tag) => (
              <span key={tag} className="bg-white/15 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold uppercase tracking-widest border border-white/20">{tag}</span>
            ))}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-3 leading-tight">{project.name}</h1>
          <p className="text-white/70 flex items-center gap-2 text-sm font-medium uppercase tracking-wider mb-2"><MapPin size={14} /> {project.address}</p>
          <p className="text-white/50 text-sm font-light italic max-w-xl">{project.tagline}</p>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-brand text-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <div className="py-6 px-8 flex items-center gap-4"><Building2 size={20} className="text-white/40 shrink-0" /><div><p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Developer</p><p className="text-sm font-medium">{project.developer}</p></div></div>
            <div className="py-6 px-8 flex items-center gap-4"><Layers size={20} className="text-white/40 shrink-0" /><div><p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Total Floors</p><p className="text-sm font-medium">{project.totalFloors} Floors</p></div></div>
            <div className="py-6 px-8 flex items-center gap-4"><Home size={20} className="text-white/40 shrink-0" /><div><p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Total Units</p><p className="text-sm font-medium">{project.totalUnits} Units</p></div></div>
            <div className="py-6 px-8 flex items-center gap-4"><Calendar size={20} className="text-white/40 shrink-0" /><div><p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Completion</p><p className="text-sm font-medium">{project.completionDate}</p></div></div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-[1400px] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left 2/3 */}
          <div className="lg:col-span-2 space-y-16">

            {/* Overview */}
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> Overview</div>
              <h2 className="text-3xl font-light text-brand mb-6">Project Description</h2>
              <p className="text-muted leading-relaxed font-light text-lg">{project.description}</p>
            </section>

            {/* Highlights */}
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> Key Highlights</div>
              <h2 className="text-3xl font-light text-brand mb-8">Why Invest Here</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 bg-surface border border-border p-4 hover:border-brand transition-colors group">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-brand text-sm font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> Gallery</div>
              <h2 className="text-3xl font-light text-brand mb-8">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="col-span-2 row-span-2 relative aspect-[4/3] overflow-hidden cursor-pointer group" onClick={() => setLightboxIndex(0)}>
                  <Image src={project.images[0]} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-semibold uppercase tracking-widest border border-white/50 px-4 py-2 transition-opacity">View Gallery</span>
                  </div>
                </div>
                {project.images.slice(1, 5).map((img, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden cursor-pointer group" onClick={() => setLightboxIndex(i + 1)}>
                    <Image src={img} alt={`Gallery ${i + 2}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    {i === 3 && project.images.length > 5 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">+{project.images.length - 5} more</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Unit Types */}
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> Units</div>
              <h2 className="text-3xl font-light text-brand mb-8">Available Unit Types</h2>
              <div className="border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand text-white">
                      <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest">Type</th>
                      <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest">Area</th>
                      <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest">Starting Price</th>
                      <th className="p-4" />
                    </tr>
                  </thead>
                  <tbody>
                    {project.units.map((unit, i) => (
                      <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-surface" : "bg-background"} hover:bg-brand/5 transition-colors`}>
                        <td className="p-4 font-medium text-brand">{unit.type}</td>
                        <td className="p-4 text-muted">{unit.area}</td>
                        <td className="p-4 font-semibold text-brand">{unit.price}</td>
                        <td className="p-4 text-right"><Link href="/contact-us" className="text-xs font-semibold uppercase tracking-widest text-brand hover:opacity-70 transition-opacity">Enquire</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Amenities */}
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> Amenities</div>
              <h2 className="text-3xl font-light text-brand mb-8">World-Class Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-3 p-4 border border-border bg-surface hover:border-brand transition-colors">
                    <CheckCircle2 size={16} className="text-brand shrink-0" />
                    <span className="text-sm text-brand font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </section>
            {/* Location Map */}
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> Location</div>
              <h2 className="text-3xl font-light text-brand mb-8">Location & Connectivity</h2>
              <div className="bg-brand/5 border border-border p-5 mb-5">
                <p className="flex items-center gap-2 text-brand font-medium"><MapPin size={16} /> {project.address}</p>
              </div>
              <div className="relative w-full h-72 border border-border overflow-hidden">
                <iframe src={`https://maps.google.com/maps?q=${encodeURIComponent(project.address)}&output=embed`} className="w-full h-full border-0" loading="lazy" title={`Map of ${project.name}`} />
              </div>
            </section>

            {/* ROI Calculator */}
            <section id="roi-calculator">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> Calculator</div>
              <h2 className="text-3xl font-light text-brand mb-8">Investment ROI Calculator</h2>
              <div className="bg-surface border border-border p-8">
                <div className="flex items-center gap-3 mb-8"><Calculator className="text-brand" size={24} /><p className="text-muted text-sm font-light">Estimate your returns based on rental yield and capital appreciation.</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div>
                      <label className="flex justify-between text-xs font-semibold uppercase tracking-widest text-muted mb-3"><span>Property Value</span><span className="text-brand">Rs. {(propertyValue / 1000000).toFixed(1)}M</span></label>
                      <input type="range" min={10000000} max={500000000} step={5000000} value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                      <label className="flex justify-between text-xs font-semibold uppercase tracking-widest text-muted mb-3"><span>Rental Yield</span><span className="text-brand">{rentalYield}%</span></label>
                      <input type="range" min={3} max={15} step={0.5} value={rentalYield} onChange={(e) => setRentalYield(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                      <label className="flex justify-between text-xs font-semibold uppercase tracking-widest text-muted mb-3"><span>Annual Capital Growth</span><span className="text-brand">{appreciation}%</span></label>
                      <input type="range" min={0} max={25} step={1} value={appreciation} onChange={(e) => setAppreciation(Number(e.target.value))} className="w-full" />
                    </div>
                  </div>
                  <div className="bg-brand text-white p-8 flex flex-col justify-center">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Projected 1-Year Return</h4>
                    <p className="text-5xl font-light mb-8">Rs. {(totalReturn / 1000000).toFixed(2)}M</p>
                    <div className="space-y-3 text-sm border-t border-white/15 pt-5">
                      <div className="flex justify-between"><span className="text-white/60">Annual Rental Income</span><span>Rs. {(annualRent / 1000000).toFixed(2)}M</span></div>
                      <div className="flex justify-between"><span className="text-white/60">Capital Appreciation</span><span>Rs. {(capitalGrowth / 1000000).toFixed(2)}M</span></div>
                      <div className="flex justify-between border-t border-white/15 pt-3 font-semibold"><span className="text-white/60">Combined Return</span><span>{(rentalYield + appreciation).toFixed(1)}%</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-surface border border-border p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Starting Price</p>
                <p className="text-4xl font-light text-brand mb-1">{project.price}</p>
                <p className="text-sm text-muted font-light">{project.type} &middot; {project.location}</p>
                <div className="border-t border-border mt-6 pt-6 grid grid-cols-2 gap-4 text-sm">
                  <div><p className="text-xs uppercase tracking-widest text-muted mb-1">Status</p><p className="font-medium text-brand">{project.status}</p></div>
                  <div><p className="text-xs uppercase tracking-widest text-muted mb-1">Completion</p><p className="font-medium text-brand">{project.completionDate}</p></div>
                </div>
              </div>

              <div className="bg-surface border border-border p-8">
                <h3 className="text-2xl font-light text-brand mb-1">Register Interest</h3>
                <p className="text-sm text-muted mb-6 font-light">Our advisor will respond within 24 hours.</p>
                <EnquiryForm projectId={project.id} />
              </div>

              <div className="bg-surface border border-border p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Your Advisor</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-muted/10">
                    <Image src={project.agentPhoto} alt={project.agentName} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-brand">{project.agentName}</h4>
                    <p className="text-xs uppercase tracking-widest text-muted">Senior Sales Advisor</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={`tel:${project.agentPhone}`} className="flex items-center justify-center gap-2 border border-border py-3 text-sm font-medium text-brand hover:border-brand transition-colors">
                    <Phone size={16} /> {project.agentPhone}
                  </a>
                  <a href={`https://wa.me/${project.agentPhone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I am interested in " + project.name)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25d366] text-white py-3 text-sm font-medium hover:bg-[#1ebe5d] transition-colors">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <section className="bg-surface border-t border-border section-spacing">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3 flex items-center gap-3"><span className="w-8 h-px bg-muted/40" /> More Projects</div>
              <h2 className="text-4xl font-light text-brand">You May Also Like</h2>
            </div>
            <Link href="/projects" className="group inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-widest border-b border-brand pb-1 hover:opacity-70 transition-opacity">
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.id} href={`/projects/${p.slug}`} className="group block border border-border bg-background hover:border-brand transition-colors">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-surface/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-widest">{p.status === "Ready to Move" ? "Ready" : "Off-Plan"}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-brand mb-1">{p.name}</h3>
                  <p className="text-muted text-xs uppercase tracking-wider flex items-center gap-1.5 mb-4"><MapPin size={12} /> {p.location}</p>
                  <div className="flex justify-between items-end pt-4 border-t border-border">
                    <span className="text-xs uppercase tracking-widest text-muted">{p.developer}</span>
                    <span className="text-brand font-medium text-sm">{p.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}