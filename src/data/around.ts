// ────────────────────────────────────────────
// around.ts  —  Sabitri Guest House · Around Us
// ────────────────────────────────────────────

import {
  Navigation,
  Waves,
  Compass,
  Building2,
  Trees,
  PlaneTakeoff,
  Anchor,
  Wind,
} from "lucide-react";

// ── Nearby attractions ────────────────────────
export const locations = [
  {
    name:        "Jagannath Temple",
    distance:    "200m",
    unit:        "from the guest house",
    description: "One of India's four sacred Dhamas, the 12th-century Jagannath Temple is the spiritual heart of Puri. Entry is restricted to Hindus; our staff will guide you on visiting protocols.",
    icon:        Navigation,
    category:    "Heritage",
    travel:      "3-min walk",
  },
  {
    name:        "Puri Beach (Golden Beach)",
    distance:    "1km",
    unit:        "from the guest house",
    description: "A wide, clean stretch of the Bay of Bengal shore. Popular for sunrise walks, horse rides, and evening snacks from beach-side stalls.",
    icon:        Waves,
    category:    "Nature",
    travel:      "12-min walk",
  },
  {
    name:        "Swargadwar Cremation Ground",
    distance:    "1.5km",
    unit:        "from the guest house",
    description: "A sacred riverside site of immense spiritual significance, believed to grant moksha. A solemn place visited by many pilgrims during their stay in Puri.",
    icon:        Compass,
    category:    "Heritage",
    travel:      "18-min walk",
  },
  {
    name:        "Konark Sun Temple",
    distance:    "35km",
    unit:        "from Puri",
    description: "A UNESCO World Heritage Site and one of India's greatest architectural marvels — the 13th-century Sun Temple shaped like a colossal chariot. Day trips easily arranged.",
    icon:        Building2,
    category:    "Heritage",
    travel:      "45-min taxi",
  },
  {
    name:        "Chilika Lake",
    distance:    "50km",
    unit:        "from Puri",
    description: "Asia's largest brackish water lagoon, home to Irrawaddy dolphins, flamingos, and hundreds of migratory bird species. Boat safaris available.",
    icon:        Waves,
    category:    "Wildlife",
    travel:      "1-hr taxi",
  },
  {
    name:        "Raghurajpur Craft Village",
    distance:    "14km",
    unit:        "from Puri",
    description: "A UNESCO-recognised heritage village where every family practises traditional Pattachitra painting, palm-leaf engraving, and stone carving. A living art experience.",
    icon:        Trees,
    category:    "Culture",
    travel:      "25-min taxi",
  },
];

// ── Category colour map ───────────────────────
export const categoryColors: Record<string, string> = {
  Nature:  "text-emerald-600",
  Culture: "text-amber-600",
  Heritage:"text-stone-500",
  Wildlife:"text-cyan-600",
  Urban:   "text-violet-600",
};

// ── Transport options strip ───────────────────
export const transports = [
  { icon: PlaneTakeoff, type: "By Air",          duration: "60 km", desc: "From Biju Patnaik Airport, Bhubaneswar" },
  { icon: Anchor,       type: "By Train",        duration: "1 km",  desc: "From Puri Railway Station" },
  { icon: Wind,         type: "By Bus",          duration: "2 km",  desc: "From Puri Bus Stand" },
  { icon: Waves,        type: "Auto-Rickshaw",   duration: "5 min", desc: "Easily available throughout the city" },
];

// ── Key highlights panel ──────────────────────
export const islandHighlights = [
  { label: "Temple Distance", value: "200m",  note: "Walk in 3 minutes" },
  { label: "Beach Distance",  value: "1km",   note: "Easy 12-min walk" },
  { label: "Guest Rating",    value: "4.7★",  note: "Verified on Justdial" },
  { label: "Reviews",         value: "227+",  note: "Across platforms" },
];
