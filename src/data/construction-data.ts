import {
  Building2,
  HardHat,
  Warehouse,
  Landmark,
  Award,
  ShieldCheck,
  Sprout,
  CheckCircle2,
} from "lucide-react";

import heroShip from "@/assets/heroShip.asset.json";
import warehouse from "@/assets/warehouse.asset.json";
import ship from "@/assets/ship.asset.json";
import plane from "@/assets/plane.asset.json";
import trust from "@/assets/trust.asset.json";
import truck from "@/assets/truck.asset.json";
import warehouseFacility from "@/assets/warehouseFacility.asset.json";
import residentialVilla from "@/assets/residentialVilla.asset.json";
import newsGreen from "@/assets/newsGreen.asset.json";
import newsCrane from "@/assets/newsCrane.asset.json";
import client1 from "@/assets/client1.asset.json";
import client2 from "@/assets/client2.asset.json";
import client3 from "@/assets/client3.asset.json";
import safetyInspection from "@/assets/safetyInspection.asset.json";

export const partners = [
  "DLF COMMERCIAL",
  "TATA REALTY & INFRA",
  "GODREJ PROPERTIES",
  "BROOKFIELD ASSETS",
  "HINES GLOBAL",
  "L&T INFRASTRUCTURE",
];

export const stats = [
  {
    number: "450+",
    label: "MEGA PROJECTS DELIVERED",
    desc: "Commercial skyscrapers, major bridges, and automated industrial facilities delivered across the country.",
  },
  {
    number: "12.8M",
    label: "SQ. FT. CONSTRUCTED",
    desc: "Turnkey built-up area executed with structural BIM modeling and zero rework tolerances.",
  },
  {
    number: "4.2M+",
    label: "SAFE MAN-HOURS LOGGED",
    desc: "Zero lost-time injury incidents with full OSHA and ISO 45001 safety governance.",
  },
  {
    number: "99.4%",
    label: "ON-TIME COMPLETION",
    desc: "Rigid milestone tracking, automated supply chains, and locked turnkey completion dates.",
  },
];

export const certifications = [
  {
    Icon: Award,
    title: "ISO 9001:2015",
    desc: "Certified Quality Management System",
  },
  {
    Icon: ShieldCheck,
    title: "ISO 45001:2018",
    desc: "Occupational Health & Site Safety",
  },
  {
    Icon: Sprout,
    title: "USGBC LEED Partner",
    desc: "Platinum & Gold Sustainable Building",
  },
  {
    Icon: CheckCircle2,
    title: "RERA & IGBC Registered",
    desc: "Complete Regulatory Compliance",
  },
];

export const blueprintSteps = [
  {
    step: "01",
    title: "Geotechnical & 5D BIM Simulation",
    desc: "Deep soil core sampling, digital laser topography, and multi-dimensional BIM clash detection to lock construction cost and timeline before groundbreaking.",
    badge: "DIGITAL TWIN SIMULATION",
  },
  {
    step: "02",
    title: "Statutory Clearances & Material QA",
    desc: "Complete municipal and environmental green clearances alongside spectroscopic tensile strength testing on all rebar and ASTM certified concrete batches.",
    badge: "ASTM & ISO VERIFIED",
  },
  {
    step: "03",
    title: "Precision Structural Erection",
    desc: "Automated batching operations, high-capacity tower cranes, post-tensioned slabs, and weekly drone LiDAR point-cloud audits to ensure zero structural deviations.",
    badge: "WEEKLY DRONE AUDITS",
  },
  {
    step: "04",
    title: "MEP Commissioning & 10-Yr Handover",
    desc: "Dynamic seismic simulation, full-load MEP electrical/HVAC commissioning, fire safety protocols, and a comprehensive 10-year institutional structural guarantee.",
    badge: "10-YEAR WARRANTY BACKED",
  },
];

export const services = [
  {
    id: "commercial",
    name: "Commercial Towers",
    Icon: Building2,
    title: "Modern Commercial High-Rises",
    tagline: "Iconic Corporate Skylines & Grade-A Business Centers",
    description:
      "Turnkey architectural and EPC construction for iconic corporate headquarters, Grade-A office towers, and mixed-use complexes.",
    image: heroShip.url,
    benefits: [
      "Seismic-Resilient Steel Structures",
      "Smart BMS & LEED Certified Engineering",
      "Predictable Milestone Timelines",
    ],
    features: [
      "High-performance energy efficient curtain wall glazing",
      "High-speed destination-controlled elevator shafts",
      "Post-tensioned long-span floor slabs for column-free offices",
      "Integrated Building Management Systems (BMS) with IoT sensors",
    ],
  },
  {
    id: "industrial",
    name: "Industrial & Logistics",
    Icon: Warehouse,
    title: "Pre-Engineered Industrial Facilities",
    tagline: "Smart Factories, Logistics Hubs & Cold Storages",
    description:
      "Large-span pre-engineered steel buildings, smart manufacturing plants, automated logistics hubs, and cold storage facilities.",
    image: warehouseFacility.url,
    benefits: [
      "Heavy-Load Polished Concrete Flooring",
      "High-Clearance Structural Steel Spans",
      "Advanced Fire Suppression & Solar-Ready",
    ],
    features: [
      "FM2 laser-screed superflat flooring for robotic automation",
      "Clear ceiling heights up to 14 meters with high-bay LED",
      "Heavy-duty overhead crane runways and dock levelers",
      "Solar rooftop infrastructure with net-zero potential",
    ],
  },
  {
    id: "civil",
    name: "Civil Infrastructure",
    Icon: HardHat,
    title: "Heavy Civil & Transportation Infrastructure",
    tagline: "Highways, Bridges, Overpasses & Deep Geotechnics",
    description:
      "Mega-scale transportation corridors, cable-stayed bridges, elevated expressways, urban flyovers, and deep foundation geotechnical works.",
    image: truck.url,
    benefits: [
      "Heavy Geotechnical & Piling Mastery",
      "Rapid Pre-Cast Segmental Construction",
      "Zero-Harm Site Safety Standards",
    ],
    features: [
      "Hydraulic rotary piling up to 60m depth in complex strata",
      "Pre-cast segmental erection with specialized launching girders",
      "High-durability marine-grade concrete with corrosion inhibitors",
      "Real-time structural health monitoring sensors",
    ],
  },
  {
    id: "residential",
    name: "Luxury Residential",
    Icon: Landmark,
    title: "Bespoke Luxury Villas & High-End Living",
    tagline: "Architectural Estates & Signature Residences",
    description:
      "Architectural residential estates featuring cantilevered structures, floor-to-ceiling panoramic glass, and custom luxury finishes.",
    image: residentialVilla.url,
    benefits: [
      "Custom Architectural Precision",
      "Acoustic & Thermal Insulation",
      "Premium Stone & Glass Detailing",
    ],
    features: [
      "Architectural exposed concrete with handcrafted formwork",
      "Cantilevered swimming pools and seamless indoor-outdoor decks",
      "Thermal break triple-glazed acoustic window assemblies",
      "Custom smart home automation, geocooling and air purification",
    ],
  },
];

export const projectsList = [
  {
    id: "apex-tower",
    title: "Apex Innovation Hub & Financial Tower",
    category: "Commercial High-Rise",
    categoryKey: "commercial",
    location: "Cyber City, Gurugram",
    area: "1,450,000 Sq. Ft.",
    timeline: "Completed (22 Days Ahead)",
    image: heroShip.url,
    value: "$120M",
    description:
      "A 42-story LEED Platinum certified corporate landmark with double-curved glass facade and column-free floor plates.",
  },
  {
    id: "bayfront-bridge",
    title: "Bayfront Cable-Stayed Expressway Bridge",
    category: "Civil Infrastructure",
    categoryKey: "civil",
    location: "Western Coastal Corridor",
    area: "4.8 Km Span",
    timeline: "Completed on Schedule",
    image: truck.url,
    value: "$240M",
    description:
      "Massive 8-lane cable-stayed bridge over deep tidal waters with seismic isolation bearings and digital wind-load dampers.",
  },
  {
    id: "nexus-logistics",
    title: "Nexus Multi-Modal Mega Logistics Park",
    category: "Industrial & Logistics",
    categoryKey: "industrial",
    location: "NCR Industrial Corridor",
    area: "620,000 Sq. Ft.",
    timeline: "Delivered in 8 Months",
    image: warehouseFacility.url,
    value: "$65M",
    description:
      "Automated high-bay fulfillment facility featuring FM2 laser-leveled concrete and 40 automated docking bays.",
  },
  {
    id: "horizon-villa",
    title: "The Horizon Cantilever Residence",
    category: "Luxury Residential",
    categoryKey: "residential",
    location: "Aravalli Hills View Estate",
    area: "24,000 Sq. Ft.",
    timeline: "Completed",
    image: residentialVilla.url,
    value: "$14M",
    description:
      "Architectural marvel with 18-meter cantilevered concrete terraces, infinity pool, and panoramic mountain vistas.",
  },
  {
    id: "metropolitan-center",
    title: "The Vertex Geometric Commercial Center",
    category: "Commercial High-Rise",
    categoryKey: "commercial",
    location: "Golf Course Extension, Gurugram",
    area: "880,000 Sq. Ft.",
    timeline: "Completed",
    image: ship.url,
    value: "$95M",
    description:
      "Sculptural faceted glass and exposed architectural concrete center with sustainable biophilic green courtyards.",
  },
  {
    id: "aerotropolis-cargo",
    title: "SkyGate Pre-Engineered Logistics Hub",
    category: "Industrial & Logistics",
    categoryKey: "industrial",
    location: "Airport Cargo Zone",
    area: "380,000 Sq. Ft.",
    timeline: "Completed",
    image: warehouse.url,
    value: "$42M",
    description:
      "High-span steel truss air cargo terminal with multi-tier mezzanine storage and automated sorter integration.",
  },
];

export const testimonials = [
  {
    name: "Robert Vance",
    role: "Executive Vice President, Vance Global Development",
    project: "Apex Financial Tower ($120M)",
    avatar: client1.url,
    quote:
      '"Speeddex delivered our 42-story commercial tower 22 days ahead of schedule. Their 5D BIM clash detection eliminated over 8% in potential rework costs and their site safety protocols were exemplary. True master builders."',
  },
  {
    name: "Elena Rostova",
    role: "Managing Director, Trans-Continental Logistics Park",
    project: "Nexus Multi-Modal Hub (450K Sq Ft)",
    avatar: client2.url,
    quote:
      '"Constructing 450,000 sq. ft. of pre-engineered logistics warehouse space with super-flat polished concrete was executed with surgical precision. Their milestone predictability gave our investors complete peace of mind."',
  },
  {
    name: "Marcus Sterling",
    role: "Principal & Chief Architect, Studio Forma",
    project: "The Horizon Cantilever Residence",
    avatar: client3.url,
    quote:
      '"The cantilevered architectural concrete villa we designed seemed structurally impossible on paper to most contractors. Speeddex\'s post-tensioning engineering team delivered it without a single compromise in aesthetics or safety."',
  },
];

export const stories = [
  {
    title: "How Pre-Engineered Steel & Green Concrete Reduce Carbon Footprints",
    date: "10 October, 2026",
    category: "SUSTAINABLE ENGINEERING",
    image: newsGreen.url,
    snippet:
      "Exploring how low-clinker supplementary cementitious materials and recycled steel beams are setting new LEED standards across commercial developments.",
  },
  {
    title: "The Future of Mega-Infrastructure: Integrating 5D BIM and Drone Site Audits",
    date: "04 October, 2026",
    category: "CIVIL INFRASTRUCTURE",
    image: newsCrane.url,
    snippet:
      "Autonomous drone LiDAR point clouds now cross-verify millimeter structural tolerances against digital twin models in real time.",
  },
  {
    title: "Designing Resilient Workspaces: Structural Acoustics and Thermal Optimization",
    date: "28 September, 2026",
    category: "COMMERCIAL ARCHITECTURE",
    image: ship.url,
    snippet:
      "How specialized facade glazing assemblies and thermal mass engineering eliminate peak cooling loads in modern commercial towers.",
  },
];

export const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "PROCESS", href: "/process" },
  { name: "REVIEWS", href: "/reviews" },
  { name: "CONTACT", href: "/contact" },
];

export {
  heroShip,
  warehouse,
  ship,
  plane,
  trust,
  truck,
  warehouseFacility,
  residentialVilla,
  newsGreen,
  newsCrane,
  client1,
  client2,
  client3,
  safetyInspection,
};
