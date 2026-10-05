export type LocationGuide = {
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  description: string;
  propertyCount: number;
  avgPrice: string;
  roi: string;
  capitalAppreciation: string;
  highlights: string[];
  keyInfrastructure: {
    category: string;
    items: string[];
  }[];
  lifestyleSummary: string;
  investmentAnalysis: string;
  mapEmbedQuery: string;
};

export const LOCATIONS_DATA: LocationGuide[] = [
  {
    slug: "dha",
    name: "DHA Lahore",
    tagline: "The Gold Standard of Gated Master-Planned Living",
    subtitle: "Prestigious phases, elite security, and world-class clubs",
    heroImage: "/the_meridian_villas.jpg",
    overview:
      "Defence Housing Authority (DHA) Lahore is synonymous with elite prestige and uncompromised security. With modern underground utilities, 24/7 guarded security, lush green parks, championship golf facilities, and premier international educational institutes, DHA continues to lead capital appreciation across Punjab.",
    description:
      "Spanning Phases 1 through 9 Prism and beyond, DHA caters to ultra-high-net-worth families, expats, and visionary investors. Whether seeking a signature custom-built 2 Kanal estate in Phase 5 or high-yield commercial plots in Phase 6 & Phase 8, DHA remains Lahore's top wealth preservation asset.",
    propertyCount: 45,
    avgPrice: "PKR 85,000,000",
    roi: "8 - 12% Annual Yield",
    capitalAppreciation: "14.5% 3-Year Avg",
    highlights: [
      "DHA Phase 5, 6, 7, 8, & 9 Prism",
      "Defence Raya Golf & Country Club",
      "LUMS & Leading International Academies",
      "Underground Electrification & Fiber Optics",
      "Dedicated Armed Security Patrols"
    ],
    keyInfrastructure: [
      {
        category: "Education & Academies",
        items: ["LUMS (Lahore University of Management Sciences)", "LGS International Defence", "The City School DHA Campus", "Beaconhouse Defence Ring"]
      },
      {
        category: "Healthcare & Wellness",
        items: ["National Hospital DHA", "Evercare Hospital Corridor", "Surgimed Defence Annex", "DHA Medical Center"]
      },
      {
        category: "Leisure & Dining",
        items: ["Defence Raya Championship Golf Course", "DHA Cinema & Club", "Y-Block Commercial Hub", "Phase 6 Broadway Boulevard"]
      },
      {
        category: "Transit & Access",
        items: ["Lahore Ring Road interchange direct link", "15 Mins to Allama Iqbal International Airport", "Direct arterial access to Bedian Road and Ferozepur Road"]
      }
    ],
    lifestyleSummary:
      "Living in DHA offers tranquility, wide manicured avenues, strict construction standards, and an exclusive neighborhood ambiance unmatched anywhere else in the metropolitan region.",
    investmentAnalysis:
      "Historical data over the last decade demonstrates that DHA properties have outpaced domestic inflation benchmarks. Recent road connections in Phase 8 and Phase 9 Prism provide immense upside for medium-term capital gains.",
    mapEmbedQuery: "DHA+Phase+6+Lahore"
  },
  {
    slug: "gulberg",
    name: "Gulberg",
    tagline: "The High-Rise & Commercial Heart of Lahore",
    subtitle: "Iconic towers, luxury retail, and elite lifestyle avenues",
    heroImage: "/emirates_mall_residences.jpg",
    overview:
      "Gulberg is the metropolitan center of Lahore, uniting corporate headquarters, Michelin-caliber dining, and vertical architectural luxury. It is undergoing a historic high-rise revolution driven by modern luxury penthouses and corporate developments.",
    description:
      "From the glamorous retail boulevard of M.M. Alam Road to the scenic frontage of Main Boulevard and Canal Road, Gulberg is the primary choice for modern urbanites desiring five-star concierge living, infinity rooftop pools, and walkability to Lahore's premier dining corridors.",
    propertyCount: 28,
    avgPrice: "PKR 50,000,000",
    roi: "9 - 14% Annual Yield",
    capitalAppreciation: "18.2% 3-Year Avg",
    highlights: [
      "M.M. Alam Road Fine Dining & Designer Boutiques",
      "Canal Road & Main Boulevard Access",
      "Ultra-Luxury Serviced Apartments & Penthouses",
      "Gaddafi Stadium Sports Complex",
      "Highest Commercial Rental Yield in Lahore"
    ],
    keyInfrastructure: [
      {
        category: "Retail & Gastronomy",
        items: ["M.M. Alam Road", "Mall of Lahore / Park Pack", "Monal & High-End Bistros", "Pace Shopping Mall Corridor"]
      },
      {
        category: "Healthcare Facilities",
        items: ["Doctors Hospital Annex", "United Christian Hospital", "Hamid Latif Hospital Nearby"]
      },
      {
        category: "Sports & Culture",
        items: ["Gaddafi Stadium Cricket Ground", "Lahore Gymkhana Club nearby", "Alhamra Cultural Center"]
      },
      {
        category: "Connectivity",
        items: ["Central Metrobus Station", "Canal Bank Underpass network", "10 Mins to Mall Road & Downtown"]
      }
    ],
    lifestyleSummary:
      "A vibrant, 24/7 lifestyle surrounded by skyline views, rooftop cafes, art galleries, and immediate proximity to the city's primary corporate clusters.",
    investmentAnalysis:
      "High-rise apartments in Gulberg yield the highest rental return in Lahore (often exceeding 10-12% for fully serviced units), fueled by substantial demand from multinational executives and overseas diaspora.",
    mapEmbedQuery: "Main+Boulevard+Gulberg+Lahore"
  },
  {
    slug: "bahria-town",
    name: "Bahria Town",
    tagline: "A Complete Master-Planned Community with Unrivaled Leisure",
    subtitle: "Self-contained elegance, global monuments, and lush parks",
    heroImage: "/hero_background.jpg",
    overview:
      "Bahria Town Lahore represents private master planning on a monumental scale. Featuring its own independent power generation infrastructure, world-renowned landmarks like the Grand Jamia Mosque, theme parks, and championship golf courses, Bahria Town is a city within a city.",
    description:
      "Offering expansive residential sectors from Sector A to F, Bahria Town delivers complete peace of mind with uninterrupted power supply, private security, world-class hospitals, and international school networks tailored for family living.",
    propertyCount: 35,
    avgPrice: "PKR 55,000,000",
    roi: "7 - 11% Annual Yield",
    capitalAppreciation: "12% 3-Year Avg",
    highlights: [
      "Grand Jamia Mosque (3rd Largest in Pakistan)",
      "Uninterrupted 24/7 Electricity Grid",
      "Eiffel Tower Replica & International Theme Park",
      "Bahria Town Country Club & 18-Hole Golf",
      "Bahria International Hospital"
    ],
    keyInfrastructure: [
      {
        category: "Landmarks & Attractions",
        items: ["Grand Jamia Mosque", "Eiffel Tower Park", "Trafalgar Square Lahore", "CineGold Plex 3D Luxury Cinema"]
      },
      {
        category: "Hospitals & Care",
        items: ["Bahria International Hospital (State of the Art)", "Begum Akhtar Rukhsana Hospital"]
      },
      {
        category: "Education",
        items: ["Bahria Town School & College", "Beaconhouse Bahria Campus", "Mazhar Academy"]
      },
      {
        category: "Connectivity",
        items: ["Lahore Ring Road Southern Loop Connection", "Multan Road Highway", "Canal Road Expressway"]
      }
    ],
    lifestyleSummary:
      "Suburban serenity paired with comprehensive urban conveniences, wide parks, and self-contained community facilities.",
    investmentAnalysis:
      "Bahria Town presents steady capital growth and consistent rental demand, bolstered significantly by the Ring Road Southern Loop which slashed travel time to the airport and DHA to under 25 minutes.",
    mapEmbedQuery: "Bahria+Town+Lahore"
  },
  {
    slug: "canal-bank",
    name: "Canal Bank Road",
    tagline: "The Scenic Green Corridor of Metropolitan Lahore",
    subtitle: "Waterfront tranquility with effortless arterial connectivity",
    heroImage: "/emirates_mall_residences.jpg",
    overview:
      "Canal Bank Road is the central lifeline connecting Lahore east to west. Flanked by lush tree-lined canals and heritage walkways, this prestigious corridor is becoming home to prestigious mid-rise and high-rise boutique residential complexes.",
    description:
      "Properties along Canal Bank Road benefit from uninterrupted arterial speed via a continuous system of signal-free underpasses, making it the most well-connected luxury corridor for professionals and high-net-worth investors.",
    propertyCount: 18,
    avgPrice: "PKR 65,000,000",
    roi: "8 - 10% Annual Yield",
    capitalAppreciation: "15% 3-Year Avg",
    highlights: [
      "Canal-Facing Panoramic Water & Greenery Views",
      "Continuous Signal-Free Underpass Transit",
      "Direct Linkage between Thokar Niaz Baig & Dharampura",
      "Proximity to Tech Hubs & Top Universities",
      "Boutique High-Rise Luxury Developments"
    ],
    keyInfrastructure: [
      {
        category: "Transit Access",
        items: ["Signal-Free Canal Expressway", "Orange Line Metro Train Stations", "Ring Road Thokar Junction"]
      },
      {
        category: "Universities & Campuses",
        items: ["Punjab University New Campus", "FC College University", "Doctors Hospital Medical Corridor"]
      },
      {
        category: "Recreation",
        items: ["Canal Promenade Walking Trails", "Sukh Chayn Gardens nearby", "Oasis Golf & Aqua Resort access"]
      }
    ],
    lifestyleSummary:
      "Relaxed waterside views amidst lush foliage, combined with fastest cross-city travel times in all of Lahore.",
    investmentAnalysis:
      "Canal Bank Road properties enjoy exceptionally high tenant retention rates due to strategic mid-point positioning between downtown, Gulberg, and southern housing developments.",
    mapEmbedQuery: "Canal+Bank+Road+Lahore"
  },
  {
    slug: "johar-town",
    name: "Johar Town",
    tagline: "The Thriving Commercial & Healthcare Epicenter",
    subtitle: "Dynamic business corridors, leading hospitals, and family living",
    heroImage: "/hero_background.jpg",
    overview:
      "Johar Town has transformed into Lahore's premier suburban commercial and medical hub. Centered around Doctors Hospital, Emporium Mall, and Expo Centre Lahore, it offers high-volume commercial footfall alongside established residential phases.",
    description:
      "Whether investing in high-yield commercial showrooms on Main Boulevard or spacious residential properties near Expo Center, Johar Town represents immediate cash flow and rapid commercial lease appreciation.",
    propertyCount: 22,
    avgPrice: "PKR 30,000,000",
    roi: "10 - 15% Annual Yield",
    capitalAppreciation: "13% 3-Year Avg",
    highlights: [
      "Emporium Mall (One of Pakistan's Largest)",
      "Expo Centre Lahore Commercial Hub",
      "Doctors Hospital & Shaukat Khanum Nearby",
      "G1 & Allah Hoo Dining Corridors",
      "Outstanding Commercial Retail ROI"
    ],
    keyInfrastructure: [
      {
        category: "Retail & Malls",
        items: ["Emporium Mall by Nishat", "G1 Commercial Market", "Allah Hoo Roundabout Food Strip"]
      },
      {
        category: "Healthcare",
        items: ["Doctors Hospital & Medical Center", "Shaukat Khanum Memorial Hospital Corridor"]
      },
      {
        category: "Exhibitions & Corporate",
        items: ["Lahore Expo Centre", "Finance & Trade Centre (FTC) Zone"]
      },
      {
        category: "Transit",
        items: ["Khayaban-e-Firdousi Boulevard", "Southern Bypass link", "Orange Line Orange Train linkage"]
      }
    ],
    lifestyleSummary:
      "Buzzing urban energy with everything from international fashion brands to specialized healthcare and schools right at your doorstep.",
    investmentAnalysis:
      "Commercial rentals in Johar Town regularly achieve 10% to 15% annual rental yield, making it an undisputed favorite for investors seeking steady monthly revenue streams.",
    mapEmbedQuery: "Johar+Town+Lahore"
  }
];

export function getLocationBySlug(slug: string): LocationGuide | undefined {
  return LOCATIONS_DATA.find((loc) => loc.slug === slug);
}
