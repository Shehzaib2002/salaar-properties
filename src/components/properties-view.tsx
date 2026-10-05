"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  MapPin, Bed, Bath, Maximize2, Search, SlidersHorizontal,
  MessageCircle, CheckCircle2, ShieldCheck, X
} from "lucide-react";
import { PROPERTIES, Property } from "@/lib/properties-data";
import { submitEnquiry } from "@/app/actions";

export function PropertiesView() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedPurpose, setSelectedPurpose] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [selectedBeds, setSelectedBeds] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Enquiry modal state
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryLoading, setEnquiryLoading] = useState(false);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      if (selectedType !== "All" && prop.type !== selectedType) return false;
      if (selectedPurpose !== "All" && prop.purpose !== selectedPurpose) return false;
      if (selectedLocation !== "All" && prop.locationSlug !== selectedLocation) return false;
      if (selectedBeds !== "All") {
        if (selectedBeds === "4+" && prop.beds < 4) return false;
        if (selectedBeds !== "4+" && prop.beds !== parseInt(selectedBeds)) return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matches =
          prop.title.toLowerCase().includes(q) ||
          prop.location.toLowerCase().includes(q) ||
          prop.address.toLowerCase().includes(q) ||
          prop.type.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    });
  }, [selectedType, selectedPurpose, selectedLocation, selectedBeds, searchQuery]);

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedProperty) return;
    setEnquiryLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.set("projectId", selectedProperty.id);
    formData.set("propertyTitle", selectedProperty.title);
    
    await submitEnquiry(formData);
    setEnquiryLoading(false);
    setEnquirySuccess(true);
  };

  const clearFilters = () => {
    setSelectedType("All");
    setSelectedPurpose("All");
    setSelectedLocation("All");
    setSelectedBeds("All");
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header Banner */}
      <section className="relative h-[48vh] min-h-[380px] w-full flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/hero_background.jpg"
            alt="Properties Portfolio"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative container mx-auto px-6 max-w-[1400px] pb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 mb-3">
            Verified Inventory
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
            Curated <span className="font-medium">Properties</span>
          </h1>
          <p className="text-white/70 max-w-2xl mt-4 font-light text-sm md:text-base leading-relaxed">
            Exclusive resale residences, luxury villas, and prime commercial spaces across Lahore&apos;s most coveted enclaves.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="sticky top-20 z-30 bg-surface/95 backdrop-blur-md border-b border-border shadow-sm py-4">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by neighborhood, street, or property name..."
                className="w-full bg-background border border-border pl-10 pr-4 py-2.5 text-sm rounded-none focus:outline-none focus:border-brand transition-colors placeholder:text-muted/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-brand"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Select Dropdowns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Purpose */}
              <select
                value={selectedPurpose}
                onChange={(e) => setSelectedPurpose(e.target.value)}
                className="bg-background border border-border px-3 py-2.5 text-xs uppercase tracking-wider text-brand font-medium focus:outline-none focus:border-brand"
              >
                <option value="All">All Purposes</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>

              {/* Type */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-background border border-border px-3 py-2.5 text-xs uppercase tracking-wider text-brand font-medium focus:outline-none focus:border-brand"
              >
                <option value="All">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Commercial">Commercial</option>
              </select>

              {/* Location */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-background border border-border px-3 py-2.5 text-xs uppercase tracking-wider text-brand font-medium focus:outline-none focus:border-brand"
              >
                <option value="All">All Locations</option>
                <option value="dha">DHA Lahore</option>
                <option value="gulberg">Gulberg</option>
                <option value="bahria-town">Bahria Town</option>
                <option value="canal-bank">Canal Bank Road</option>
                <option value="johar-town">Johar Town</option>
              </select>

              {/* Beds */}
              <select
                value={selectedBeds}
                onChange={(e) => setSelectedBeds(e.target.value)}
                className="bg-background border border-border px-3 py-2.5 text-xs uppercase tracking-wider text-brand font-medium focus:outline-none focus:border-brand"
              >
                <option value="All">All Beds</option>
                <option value="2">2 Beds</option>
                <option value="3">3 Beds</option>
                <option value="4">4 Beds</option>
                <option value="4+">5+ Beds</option>
              </select>
            </div>
          </div>

          {/* Active Filter Pills & Count */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-3 pt-3 border-t border-border/60 text-xs">
            <div className="flex items-center gap-2 text-muted">
              <SlidersHorizontal size={14} />
              <span>
                Showing <strong className="text-brand font-semibold">{filteredProperties.length}</strong> verified properties
              </span>
            </div>

            {(selectedType !== "All" || selectedPurpose !== "All" || selectedLocation !== "All" || selectedBeds !== "All" || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-brand/70 hover:text-brand font-medium underline underline-offset-4"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Property Cards Grid */}
      <section className="py-14 container mx-auto px-6 max-w-[1400px] flex-1">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-border bg-surface/50 p-8">
            <p className="text-xl font-light text-brand mb-2">No matching properties found</p>
            <p className="text-muted text-sm max-w-md mx-auto mb-6">
              We update our verified listings daily. Reset your search criteria or contact our concierge desk for off-market inventory.
            </p>
            <button
              onClick={clearFilters}
              className="bg-brand text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-brand/90 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="group border border-border bg-surface hover:border-brand transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/10">
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="bg-brand text-white text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1">
                        {prop.purpose}
                      </span>
                      <span className="bg-surface/90 backdrop-blur-sm text-brand text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1">
                        {prop.type}
                      </span>
                    </div>
                    {prop.verified && (
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-emerald-800 text-[10px] uppercase font-bold tracking-wider px-2 py-1 flex items-center gap-1 shadow-sm">
                        <ShieldCheck size={13} className="text-emerald-600" /> Verified
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-white text-xl font-semibold bg-black/60 backdrop-blur-sm px-3 py-1.5 inline-block">
                        {prop.price}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-muted uppercase tracking-wider mb-2">
                      <MapPin size={13} className="text-brand shrink-0" />
                      <span className="truncate">{prop.location}</span>
                    </div>
                    <h3 className="text-lg font-medium text-brand mb-2 line-clamp-1 group-hover:text-brand/80 transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-muted text-xs line-clamp-2 font-light leading-relaxed mb-4">
                      {prop.description}
                    </p>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/70 text-xs text-brand/80 font-medium">
                      {prop.beds > 0 && (
                        <div className="flex items-center gap-1.5">
                          <Bed size={15} className="text-muted" />
                          <span>{prop.beds} Beds</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Bath size={15} className="text-muted" />
                        <span>{prop.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 size={14} className="text-muted" />
                        <span>{prop.area}</span>
                      </div>
                    </div>

                    {/* Features preview */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {prop.features.slice(0, 3).map((feat, idx) => (
                        <span
                          key={idx}
                          className="bg-background text-muted text-[11px] px-2 py-1 border border-border/80"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 border-t border-border/40 mt-4 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedProperty(prop);
                      setEnquirySuccess(false);
                    }}
                    className="flex-1 bg-brand text-white py-3 text-xs uppercase font-semibold tracking-wider hover:bg-brand/90 transition-colors text-center"
                  >
                    Inquire Now
                  </button>
                  <a
                    href={`https://wa.me/924211122333?text=${encodeURIComponent(
                      `Hi Salaar Properties, I am interested in viewing: ${prop.title} (${prop.price}) in ${prop.location}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border hover:border-emerald-600 hover:text-emerald-600 text-brand transition-colors"
                    aria-label="WhatsApp Inquiry"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Inquiry Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface border border-border w-full max-w-lg p-6 md:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute right-4 top-4 text-muted hover:text-brand"
            >
              <X size={20} />
            </button>

            {enquirySuccess ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-2xl font-light text-brand mb-2">Inquiry Lodged</h4>
                <p className="text-muted text-sm font-light max-w-sm mx-auto mb-6">
                  Thank you. An assigned specialist for <strong className="text-brand font-medium">{selectedProperty.title}</strong> will contact you shortly.
                </p>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="bg-brand text-white px-6 py-3 text-xs uppercase font-semibold tracking-widest hover:bg-brand/90 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="text-xs uppercase font-semibold tracking-widest text-muted mb-1">
                  Schedule Private Viewing
                </div>
                <h3 className="text-xl font-medium text-brand mb-1">{selectedProperty.title}</h3>
                <p className="text-sm font-semibold text-brand mb-4">{selectedProperty.price} &bull; {selectedProperty.location}</p>

                <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs uppercase font-medium text-muted tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Mian Zubair"
                      className="w-full border-b border-border py-2.5 bg-transparent text-sm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-medium text-muted tracking-wider block mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      className="w-full border-b border-border py-2.5 bg-transparent text-sm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-medium text-muted tracking-wider block mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+92 300 1234567"
                      className="w-full border-b border-border py-2.5 bg-transparent text-sm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-medium text-muted tracking-wider block mb-1">
                      Preferred Viewing Time or Note
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="I would like to arrange a site visit this weekend..."
                      className="w-full border-b border-border py-2 bg-transparent text-sm focus:outline-none focus:border-brand transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      type="submit"
                      disabled={enquiryLoading}
                      className="flex-1 bg-brand text-white py-3.5 text-xs uppercase font-semibold tracking-widest hover:bg-brand/90 transition-colors disabled:opacity-50"
                    >
                      {enquiryLoading ? "Submitting..." : "Submit Inquiry"}
                    </button>
                    <a
                      href={`https://wa.me/924211122333?text=${encodeURIComponent(
                        `Hi, I would like to instantly inspect property: ${selectedProperty.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#25d366] text-white px-5 py-3.5 text-xs uppercase font-semibold tracking-widest hover:bg-[#1ebe5d] transition-colors"
                    >
                      <MessageCircle size={15} /> WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
