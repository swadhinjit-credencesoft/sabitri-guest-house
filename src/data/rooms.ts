// ────────────────────────────────────────────
// rooms.ts  —  Sabitri Guest House · Rooms
// ────────────────────────────────────────────

import {
  Droplets,
  Star,
  Waves,
  UtensilsCrossed,
  Sparkles,
  Wifi,
  Coffee,
  Moon,
} from "lucide-react";

// ── Room cards ────────────────────────────────
export const rooms = [
  {
    id:          "8722",
    name:        "Deluxe Non AC Room",
    price:       1500,
    size:        "200 sq ft",
    guests:      "2–4 Guests",
    description: "Comfortable non-air-conditioned room featuring cozy bedding, attached bathroom, essential amenities, natural ventilation, and a peaceful stay experience.",
    image:       "/room2 (1).avif",
  },
  {
    id:          "8721",
    name:        "Deluxe AC Room",
    price:       2000,
    size:        "250 sq ft",
    guests:      "2–4 Guests",
    description: "Spacious air-conditioned room with comfortable bedding, modern amenities, attached bathroom, free Wi-Fi, and a relaxing atmosphere.",
    image:       "/room4 (1).avif",
  },
];

// ── Amenities grid ────────────────────────────
export const amenities = [
  { icon: Droplets,      label: "Hot & Cold Water" },
  { icon: Star,          label: "Daily Housekeeping" },
  { icon: Waves,         label: "Near Puri Beach" },
  { icon: UtensilsCrossed, label: "Complimentary Breakfast" },
  { icon: Sparkles,      label: "Clean Bathrooms" },
  { icon: Wifi,          label: "Free WiFi" },
  { icon: Coffee,        label: "Morning Tea/Coffee" },
  { icon: Moon,          label: "24-Hour Reception" },
];

// ── Comparison table rows ─────────────────────
export const villas = [
  { name: "Deluxe Non AC",   ac: false, tv: true,  size: "200", from: 1500, geyser: true,  beds: 1 },
  { name: "Deluxe AC",       ac: true,  tv: true,  size: "250", from: 2000, geyser: true,  beds: 1 },
];
