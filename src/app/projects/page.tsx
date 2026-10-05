"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "one-canal-road",
    name: "One Canal Road",
    developer: "Zameen Developments",
    location: "Gulberg",
    status: "Under Construction",
    type: "High-Rise Apartment",
    price: "From â‚¨ 150M",
    image: "/emirates_mall_residences.jpg",
    tags: ["Ultra Luxury", "Smart Home"]
  },
  {
    id: "dha-prism",
    name: "Prism Signature Villas",
    developer: "DHA Lahore",
    location: "DHA Lahore",
    status: "Ready to Move",
    type: "Luxury Villa",
    price: "From â‚¨ 85M",
    image: "/the_meridian_villas.jpg",
    tags: ["Golf Course View", "Premium"]
  },
  {
    id: "lahore-sky",
    name: "Lahore Sky",
    developer: "OZ Developers",
    location: "Ferozepur Road",
    status: "Under Construction",
    type: "High-Rise Apartment",
    price: "From â‚¨ 40M",
    image: "/hero_background.jpg",
    tags: ["IT Park", "Commercial"]
  },
  {
    id: "union-living",
    name: "Union Living",
    developer: "Union Developers",
    location: "Canal Bank Road",
    status: "Ready to Move",
    type: "High-Rise Apartment",
    price: "From â‚¨ 65M",
    image: "/emirates_mall_residences.jpg",
    tags: ["Family Oriented", "Premium Amenities"]
  },
  {
    id: "bahria-town-heights",
    name: "Bahria Sky",
    developer: "Bahria Town",
    location: "Bahria Town",
    status: "Under Construction",
    type: "High-Rise Apartment",
    price: "From â‚¨ 55M",
    image: "/the_meridian_villas.jpg",
    tags: ["Mall Integration", "High Yield"]
  },
  {
    id: "dha-penthouse",
    name: "The Penta DHA",
    developer: "Izhar Monnoo",
    location: "DHA Lahore",
    status: "Ready to Move",
    type: "High-Rise Apartment",
    price: "From â‚¨ 250M",
    image: "/hero_background.jpg",
    tags: ["Penthouse", "Exclusive"]
  },
  {
    id: "gulberg-galleria-residences",
    name: "Galleria Residences",
    developer: "Gulberg Group",
    location: "Gulberg",
    status: "Under Construction",
    type: "High-Rise Apartment",
    price: "From â‚¨ 120M",
    image: "/emirates_mall_residences.jpg",
    tags: ["Boutique", "Commercial Hub"]
  },
  {
    id: "lake-city-villas",
    name: "Lake City Golf Villas",
    developer: "Lake City Holdings",
    location: "Raiwind Road",
    status: "Ready to Move",
    type: "Luxury Villa",
    price: "From â‚¨ 180M",
    image: "/the_meridian_villas.jpg",
    tags: ["Golf Estate", "Gated Community"]
  },
  {
    id: "johar-town-commercial",
    name: "The Financial Tower",
    developer: "United Lifestyle",
    location: "Johar Town",
    status: "Under Construction",
    type: "Commercial Space",
    price: "From â‚¨ 30M",
    image: "/hero_background.jpg",
    tags: ["Corporate", "High ROI"]
  }
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLocation, setActiveLocation] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [activeType, setActiveType] = useState("All");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.developer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = activeLocation === "All" || project.location.includes(activeLocation);
    const matchesStatus = activeStatus === "All" || project.status === activeStatus;
    const matchesType = activeType === "All" || project.type === activeType;
    
    return matchesSearch && matchesLocation && matchesStatus && matchesType;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background pt-32">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-light text-brand mb-4">Portfolio</h1>
            <p className="text-muted max-w-2xl text-lg font-light">
              Explore our curated selection of Lahore&apos;s most prestigious real estate developments.
            </p>
          </div>
          
          <div className="w-full md:w-auto relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Search projects or developers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-80 pl-12 pr-4 py-4 bg-surface border border-border focus:border-brand outline-none transition-colors"
            />
          </div>
        </div>
        
        {/* Advanced Filters */}
        <div className="bg-surface border border-border p-6 mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex items-center gap-3 text-brand font-medium uppercase tracking-widest text-xs shrink-0 w-full md:w-auto border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-8">
            <SlidersHorizontal size={16} /> Filters
          </div>
          
          <div className="flex flex-wrap gap-4 w-full">
            <select 
              className="bg-transparent border-b border-border pb-2 text-sm text-brand focus:outline-none focus:border-brand cursor-pointer"
              value={activeLocation}
              onChange={(e) => setActiveLocation(e.target.value)}
            >
              <option value="All">All Locations</option>
              <option value="DHA">DHA Lahore</option>
              <option value="Gulberg">Gulberg</option>
              <option value="Ferozepur Road">Ferozepur Road</option>
            </select>

            <select 
              className="bg-transparent border-b border-border pb-2 text-sm text-brand focus:outline-none focus:border-brand cursor-pointer"
              value={activeType}
              onChange={(e) => setActiveType(e.target.value)}
            >
              <option value="All">All Property Types</option>
              <option value="High-Rise Apartment">High-Rise Apartments</option>
              <option value="Luxury Villa">Luxury Villas</option>
              <option value="Commercial Space">Commercial Spaces</option>
            </select>

            <div className="flex gap-2 ml-auto">
              <button 
                onClick={() => setActiveStatus("All")}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider border transition-colors ${activeStatus === "All" ? "border-brand bg-brand text-white" : "border-border text-muted hover:border-brand"}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveStatus("Ready to Move")}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider border transition-colors ${activeStatus === "Ready to Move" ? "border-brand bg-brand text-white" : "border-border text-muted hover:border-brand"}`}
              >
                Ready
              </button>
              <button 
                onClick={() => setActiveStatus("Under Construction")}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider border transition-colors ${activeStatus === "Under Construction" ? "border-brand bg-brand text-white" : "border-border text-muted hover:border-brand"}`}
              >
                Off-Plan
              </button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted">
          Showing {filteredProjects.length} Result{filteredProjects.length !== 1 ? 's' : ''}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="group block flex flex-col h-full border border-border bg-surface hover:border-brand transition-colors">
                <div className="relative aspect-[4/3] bg-muted/5 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" 
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    <span className="bg-surface/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                      {project.status === "Ready to Move" ? "Ready" : "Off-Plan"}
                    </span>
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-brand text-white px-3 py-1 text-[10px] font-semibold uppercase tracking-widest self-start">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-light text-brand">{project.name}</h3>
                  </div>
                  <p className="text-muted text-sm flex items-center gap-2 mb-4 font-medium uppercase tracking-wider">
                    <MapPin size={14}/> {project.location}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-border flex justify-between items-end">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-muted block mb-1">Developer</span>
                      <span className="text-sm font-medium text-brand">{project.developer}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-widest text-muted block mb-1">Starting Price</span>
                      <span className="text-brand font-medium">{project.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 flex flex-col items-center justify-center border border-dashed border-border text-center">
              <Search className="text-muted/30 mb-4" size={48} />
              <h3 className="text-xl font-medium text-brand mb-2">No projects found</h3>
              <p className="text-muted">Adjust your filters to discover more properties.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setActiveLocation("All");
                  setActiveStatus("All");
                  setActiveType("All");
                }}
                className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand border-b border-brand pb-1 hover:opacity-70"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
