/**
 * Tahseen Jaber Cold Storage - Centralized Content & Configuration
 * 
 * NOTE FOR SITE OWNERS:
 * All business details, service specifications, and contact placeholders 
 * can be edited directly here without modifying component code.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItemData {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  details: string[];
  badge: string;
}

export interface FacilityZone {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
}

export interface WhyPillar {
  number: string;
  title: string;
  description: string;
}

export const SITE_CONFIG = {
  companyName: "Tahseen Jaber",
  tagline: "Cold Storage",
  fullName: "Tahseen Jaber Cold Storage",
  phone: "+1 (555) 019-2834", // Editable placeholder
  phoneDisplay: "+1 (555) 019-2834",
  email: "contact@tahseenjaber.com", // Editable placeholder
  address: "Industrial Logistics Corridor, Cold Chain District", // Editable placeholder
  hours: "Monday – Saturday: 07:00 – 19:00 | Receiving: 24/7 By Appointment",
  logoPath: "/tahseenjaber-logo.jpeg",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES_LIST: ServiceItemData[] = [
  {
    id: "temperature-controlled-storage",
    number: "01",
    title: "Temperature-Controlled Storage",
    shortDesc: "Regulated refrigeration chambers engineered to maintain consistent thermal stability for perishable inventory.",
    details: [
      "Precision-calibrated cooling tailored to product specifications",
      "Vapor-barrier insulation to prevent thermal fluctuation",
      "Continuous atmospheric circulation and humidity management",
      "Hygienic sealed flooring and food-grade storage conditions",
    ],
    badge: "Core Solution",
  },
  {
    id: "industrial-warehousing",
    number: "02",
    title: "Industrial Warehousing",
    shortDesc: "High-density pallet racking systems with systematic inventory organization and rapid-access staging lanes.",
    details: [
      "Multi-tier vertical storage maximizing cubic volume",
      "Safe forklift staging lanes and pallet safety crossbeams",
      "Clean receiving and quarantine holding areas",
      "Flexible short-term and contract allocation plans",
    ],
    badge: "Storage & Handling",
  },
  {
    id: "cold-chain-support",
    number: "03",
    title: "Cold Chain Support",
    shortDesc: "Protected dock loading and seamless cross-docking to safeguard cargo temperature during transfers.",
    details: [
      "Weather-sealed dock levelers preventing warm air ingress",
      "Rapid turnaround cross-dock staging bays",
      "Coordination with refrigerated transport fleets",
      "Careful pallet handling with temperature verification checks",
    ],
    badge: "Distribution",
  },
  {
    id: "fresh-produce-storage",
    number: "04",
    title: "Fresh Produce Preservation",
    shortDesc: "Specialized cold environment preservation to extend shelf life for agricultural crops, fruits, and vegetables.",
    details: [
      "Optimized humidity levels to prevent dehydration and shrinkage",
      "Air exchange cycles to maintain freshness and aroma",
      "Dedicated handling for wooden crates and plastic bulk bins",
      "Direct support for agricultural growers and distributors",
    ],
    badge: "Agriculture",
  },
];

export const FACILITY_ZONES: FacilityZone[] = [
  {
    id: "racking",
    number: "01",
    name: "High-Bay Pallet Racking",
    category: "Storage Architecture",
    description: "Heavy-duty industrial steel racking engineered for maximum vertical storage density and optimal airflow between pallets.",
    highlights: ["Multi-tier reinforced uprights", "Seismic & load-rated engineering", "Clear aisle spacing for reach trucks"],
  },
  {
    id: "cooling-plant",
    number: "02",
    name: "Refrigeration Plant & Compressors",
    category: "Cooling Infrastructure",
    description: "Industrial cooling infrastructure utilizing heavy-duty compressors and ceiling-mounted evaporators to distribute cold air evenly.",
    highlights: ["Stainless steel piping & valves", "Pressure-balanced refrigeration loops", "Redundant cooling circuit architecture"],
  },
  {
    id: "staging-docks",
    number: "03",
    name: "Insulated Loading Docks",
    category: "Logistics Interface",
    description: "Sealed loading bay doors with hydraulic levelers ensuring that refrigerated trucks dock without compromising internal temperatures.",
    highlights: ["Cushioned perimeter dock seals", "Rapid-rise insulated doors", "Spacious pre-cooling staging apron"],
  },
  {
    id: "sanitation",
    number: "04",
    name: "Hygienic Cleanroom Finishes",
    category: "Sanitation Standards",
    description: "Smooth, non-porous floor coatings and washable insulated wall panels designed for rigorous sanitation and food safety compliance.",
    highlights: ["Seamless polyurethane floor finish", "Impact-resistant wall bumpers", "Moisture-resistant LED lighting fixtures"],
  },
];

export const WHY_PILLARS: WhyPillar[] = [
  {
    number: "01",
    title: "Reliability",
    description: "Perishable cargo cannot wait. Our operations are structured around dependable turnarounds, consistent thermal integrity, and prompt dispatch.",
  },
  {
    number: "02",
    title: "Quality",
    description: "From harvest to commercial distribution, our controlled environment protects product texture, taste, weight, and market value.",
  },
  {
    number: "03",
    title: "Precision",
    description: "Refrigeration demands exactness. Our cooling units and insulated barriers maintain uniform conditions across every rack tier.",
  },
];
