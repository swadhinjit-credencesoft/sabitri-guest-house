// ─────────────────────────────────────────────
// site.ts  —  Sabitri Guest House · Site Config
// ─────────────────────────────────────────────

/** Canonical site metadata used across pages, layout & schema */
export const siteConfig = {
  name: "Sabitri Guest House",
  tagline: "Budget Family Guest House near Jagannath Temple, Puri",
  address: "Shree Marg, Chudanga Sahi, Puri, Odisha – 752001",
  phone: "+91 90901 48874",
  phoneRaw: "+919090148874",
  whatsapp: "https://wa.me/919090148874",
  email: "sabitriguesthouse@gmail.com",
  website: "https://sabitriguesthouse.com",
  coordinates: { lat: 19.8049, lng: 85.8179 },
  rating: "4.7",
  reviews: "227",
  yearFounded: "2008",
  distanceFromTemple: "200m",
  distanceFromBeach: "1 km",
  priceRange: "₹600 – ₹1,600",
};

// ── Navigation links ──────────────────────────
export const navLinks = [
  { name: "Home",        path: "/" },
  { name: "Rooms",       path: "/rooms" },
  { name: "Dining",      path: "/dining" },
  { name: "Experiences", path: "/experiences" },
  { name: "About",       path: "/about" },
  { name: "Around Us",   path: "/around" },
  { name: "Contact",     path: "/contact" },
];
