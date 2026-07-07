// ─────────────────────────────────────────────
// site.ts  —  Sabitri Guest House · Site Config
// ─────────────────────────────────────────────

/** Canonical site metadata used across pages, layout & schema */
export const siteConfig = {
  name: "Sabitri Guest House",
  tagline: "Budget Family Guest House near Jagannath Temple, Puri",
  address: "Shree Marg, Chudanga Sahi, Puri, Odisha – 752001",
  phone: "+91 90782 40376",
  phoneRaw: "+919078240376",
  whatsapp: "https://wa.me/919078240376",
  email: "sabitriguesthousepuri@gmail.com",
  website: "https://sabitriguesthouse.in",
  coordinates: { lat: 19.808069569109232, lng: 85.82015639999999 },
  rating: "4.7",
  reviews: "227",
  yearFounded: "2008",
  distanceFromTemple: "200m",
  distanceFromBeach: "1 km",
  priceRange: "₹1,500 – ₹2,000",
};

// ── Navigation links ──────────────────────────
export const navLinks = [
  { name: "Home",        path: "/" },
  { name: "Rooms",       path: "/rooms" },
  { name: "Experiences", path: "/experiences" },
  { name: "About",       path: "/about" },
  { name: "Around Us",   path: "/around" },
  { name: "Contact",     path: "/contact" },
];
