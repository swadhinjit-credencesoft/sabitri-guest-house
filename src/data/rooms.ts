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
    id:          "standard-non-ac",
    name:        "Standard Non-AC Room",
    price:       600,
    size:        "180 sq ft",
    guests:      "2 Guests",
    description: "A clean and comfortable non-AC room with a ceiling fan, attached bathroom, and all basic amenities. Ideal for budget-conscious pilgrims and travellers.",
    image:       "/images/rooms-hero.png",
  },
  {
    id:          "standard-ac",
    name:        "Standard AC Room",
    price:       900,
    size:        "200 sq ft",
    guests:      "2 Guests",
    description: "A well-maintained air-conditioned room with a comfortable bed, hot water facility, and a calm environment — perfect for a peaceful night after temple darshan.",
    image:       "/images/home-hero.png",
  },
  {
    id:          "deluxe-ac",
    name:        "Deluxe AC Room",
    price:       1200,
    size:        "250 sq ft",
    guests:      "2–3 Guests",
    description: "Spacious deluxe room with AC, TV, wardrobe, and an attached bathroom with hot and cold water. A comfortable choice for families visiting for pilgrimage or leisure.",
    image:       "/images/rooms-hero.png",
  },
  {
    id:          "family-room",
    name:        "Family Room",
    price:       1600,
    size:        "380 sq ft",
    guests:      "4–5 Guests",
    description: "Our largest room, ideal for families. Features multiple beds, ample storage, a large attached bathroom, and all the comforts needed for an extended stay in Puri.",
    image:       "/images/about-hero.png",
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
  { name: "Standard Non-AC", ac: false, tv: false, size: "180", from: 600,  geyser: false, beds: 1 },
  { name: "Standard AC",     ac: true,  tv: false, size: "200", from: 900,  geyser: true,  beds: 1 },
  { name: "Deluxe AC",       ac: true,  tv: true,  size: "250", from: 1200, geyser: true,  beds: 1 },
  { name: "Family Room",     ac: true,  tv: true,  size: "380", from: 1600, geyser: true,  beds: 2 },
];
