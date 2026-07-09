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
  whatsapp: getWhatsAppBookingUrl(),
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

export function getWhatsAppBookingUrl(): string {
  const baseUrl = "https://api.whatsapp.com/send";
  const message =
    "This is an Enquiry from : Sabitri Guest House Website" +
    "\nHotel Name: Sabitri Guest House" +
    "\nProperty Id: SGH-001" +
    "\nexternalSite: WebSite" +
    "\nAddress: Shree Marg, Chudanga Sahi, Puri, Odisha - 752001, India";
  return baseUrl + "?phone=919078240376&text=" + encodeURIComponent(message);
}

// ── Navigation links ──────────────────────────
export const navLinks = [
  { name: "Home",        path: "/" },
  { name: "Rooms",       path: "/rooms" },
  // { name: "Booking",     path: "/booking" },
  { name: "Experiences", path: "/experiences" },
  { name: "About",       path: "/about" },
  { name: "Around Us",   path: "/around" },
  { name: "Blog",        path: "/blog" },
  { name: "Contact",     path: "/contact" },
];
