export type Property = {
  id: string;
  slug: string;
  title: string;
  type: "Apartment" | "Villa" | "Commercial" | "Penthouse";
  purpose: "For Sale" | "For Rent";
  location: string;
  locationSlug: string;
  address: string;
  price: string;
  priceValue: number; // For sorting and numeric filtering
  beds: number;
  baths: number;
  area: string;
  areaSqft: number;
  image: string;
  featured: boolean;
  verified: boolean;
  parkingSpaces: number;
  floor?: string;
  description: string;
  features: string[];
};

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    slug: "luxury-duplex-penthouse-gulberg",
    title: "Ultra-Luxury 4 Bed Duplex Penthouse",
    type: "Penthouse",
    purpose: "For Sale",
    location: "Gulberg III, Lahore",
    locationSlug: "gulberg",
    address: "Galleria Heights, Main Boulevard, Gulberg III",
    price: "PKR 145,000,000",
    priceValue: 145000000,
    beds: 4,
    baths: 5,
    area: "4,800 sq.ft",
    areaSqft: 4800,
    image: "/emirates_mall_residences.jpg",
    featured: true,
    verified: true,
    parkingSpaces: 3,
    floor: "18th & 19th Floor",
    description: "Architectural masterpiece boasting private infinity splash pool, panoramic city views, Italian kitchen, and smart home automation.",
    features: ["Private Terrace", "Smart Home Automation", "Maid's Quarters", "Concierge Service", "High Speed Elevators"]
  },
  {
    id: "prop-2",
    slug: "designer-1-kanal-villa-dha-phase-6",
    title: "1 Kanal Modern Designer Villa",
    type: "Villa",
    purpose: "For Sale",
    location: "DHA Phase 6, Lahore",
    locationSlug: "dha",
    address: "Block K, Phase 6, DHA Lahore",
    price: "PKR 98,000,000",
    priceValue: 98000000,
    beds: 5,
    baths: 6,
    area: "4,500 sq.ft (1 Kanal)",
    areaSqft: 4500,
    image: "/the_meridian_villas.jpg",
    featured: true,
    verified: true,
    parkingSpaces: 4,
    description: "Brand new modern Spanish architecture with imported ash wood finish, basement cinema room, landscaped courtyard, and solar backup system.",
    features: ["Basement Home Theatre", "Solar Power System", "Landscaped Lawn", "Double Height Lobby", "Dirty & Clean Kitchen"]
  },
  {
    id: "prop-3",
    slug: "executive-apartment-canal-road",
    title: "Executive 3 Bed Canal-Facing Residence",
    type: "Apartment",
    purpose: "For Rent",
    location: "Canal Bank Road, Lahore",
    locationSlug: "canal-bank",
    address: "Canal View Heights, Canal Bank Road",
    price: "PKR 350,000 / mo",
    priceValue: 350000,
    beds: 3,
    baths: 4,
    area: "2,600 sq.ft",
    areaSqft: 2600,
    image: "/hero_background.jpg",
    featured: false,
    verified: true,
    parkingSpaces: 2,
    floor: "8th Floor",
    description: "Fully furnished executive rental apartment with expansive balcony overlooking the Lahore Canal promenade and lush greenery.",
    features: ["Fully Furnished", "Canal Facing", "Gym & Pool Access", "24/7 Security", "Backup Generator"]
  },
  {
    id: "prop-4",
    slug: "luxury-2-bed-serviced-suite-gulberg",
    title: "Furnished 2 Bed Serviced Suite",
    type: "Apartment",
    purpose: "For Rent",
    location: "Gulberg II, Lahore",
    locationSlug: "gulberg",
    address: "M.M. Alam Enclave, Gulberg II",
    price: "PKR 275,000 / mo",
    priceValue: 275000,
    beds: 2,
    baths: 2,
    area: "1,450 sq.ft",
    areaSqft: 1450,
    image: "/emirates_mall_residences.jpg",
    featured: false,
    verified: true,
    parkingSpaces: 1,
    floor: "6th Floor",
    description: "Walkable to M.M. Alam Road's fine dining and fashion outlets. Includes housekeeping options, valet parking, and high-speed fibre internet.",
    features: ["Walking to M.M. Alam", "Housekeeping Available", "Underground Parking", "Central AC", "24/7 CCTV"]
  },
  {
    id: "prop-5",
    slug: "golf-view-villa-bahria-town",
    title: "Golf View 10 Marla Luxury Residence",
    type: "Villa",
    purpose: "For Sale",
    location: "Bahria Town, Lahore",
    locationSlug: "bahria-town",
    address: "Sector C, Golf Course Enclave, Bahria Town",
    price: "PKR 48,000,000",
    priceValue: 48000000,
    beds: 4,
    baths: 5,
    area: "2,700 sq.ft (10 Marla)",
    areaSqft: 2700,
    image: "/the_meridian_villas.jpg",
    featured: true,
    verified: true,
    parkingSpaces: 2,
    description: "Direct uninterrupted views of the 18-hole championship golf course. Contemporary layout with floor-to-ceiling glass and imported sanitary ware.",
    features: ["Golf Course View", "Rooftop BBQ Deck", "Imported Marble", "Modern Kitchen", "Gated Security"]
  },
  {
    id: "prop-6",
    slug: "prime-commercial-retail-floor-johar-town",
    title: "Prime Commercial Floor on Boulevard",
    type: "Commercial",
    purpose: "For Sale",
    location: "Johar Town, Lahore",
    locationSlug: "johar-town",
    address: "G1 Market Main Boulevard, Johar Town",
    price: "PKR 125,000,000",
    priceValue: 125000000,
    beds: 0,
    baths: 2,
    area: "3,500 sq.ft",
    areaSqft: 3500,
    image: "/hero_background.jpg",
    featured: false,
    verified: true,
    parkingSpaces: 6,
    floor: "Ground Floor",
    description: "High-footfall ground floor commercial space ideal for multinational banks, luxury apparel flagship, or upscale cafe chains.",
    features: ["Main Boulevard Facing", "High Footfall Zone", "Wide Frontage", "Dedicated Customer Parking", "Ready for Fit-out"]
  },
  {
    id: "prop-7",
    slug: "modern-minimalist-villa-dha-phase-5",
    title: "2 Kanal State-of-the-Art Estate",
    type: "Villa",
    purpose: "For Sale",
    location: "DHA Phase 5, Lahore",
    locationSlug: "dha",
    address: "Sector G, DHA Phase 5, Lahore",
    price: "PKR 220,000,000",
    priceValue: 220000000,
    beds: 6,
    baths: 7,
    area: "9,000 sq.ft (2 Kanal)",
    areaSqft: 9000,
    image: "/the_meridian_villas.jpg",
    featured: true,
    verified: true,
    parkingSpaces: 6,
    description: "One of Phase 5's most prestigious estates featuring indoor temperature-controlled pool, elevator, sauna, guest annex, and mature gardens.",
    features: ["Indoor Heated Pool", "Private Elevator", "Steam & Sauna", "Separate Guest Annex", "Commercial Grade Generator"]
  },
  {
    id: "prop-8",
    slug: "sky-apartment-gulberg-for-sale",
    title: "3 Bed Corner Sky Suite with Balcony",
    type: "Apartment",
    purpose: "For Sale",
    location: "Gulberg III, Lahore",
    locationSlug: "gulberg",
    address: "Canal Residences, Gulberg III",
    price: "PKR 62,000,000",
    priceValue: 62000000,
    beds: 3,
    baths: 3,
    area: "2,200 sq.ft",
    areaSqft: 2200,
    image: "/emirates_mall_residences.jpg",
    featured: false,
    verified: true,
    parkingSpaces: 2,
    floor: "12th Floor",
    description: "Corner apartment featuring wraparound glass balconies, natural light all day, and swift access to Kalma Chowk and Canal Road.",
    features: ["Corner Unit", "Wraparound Balcony", "Central HVAC", "Infinity Pool Access", "Dedicated Basement Stalls"]
  }
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}
