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

export const rooms = [
  {
    id: "8721",
    name: "Deluxe AC Room",
    price: 2000,
    size: "250 sq ft",
    guests: "2–4 Guests",
    description: "Spacious air-conditioned room with comfortable bedding, modern amenities, attached bathroom, free Wi-Fi, and a relaxing atmosphere. Perfect for couples and small families.",
    image: "/room4 (1).avif",
  },
];

export const amenities = [
  { icon: Droplets,      label: "Hot & Cold Water" },
  { icon: Star,          label: "Daily Housekeeping" },
  { icon: Waves,         label: "Near Puri Beach" },
  { icon: UtensilsCrossed, label: "Complimentary Tea/Coffee" },
  { icon: Sparkles,      label: "Clean Bathrooms" },
  { icon: Wifi,          label: "Free WiFi" },
  { icon: Coffee,        label: "Morning Tea/Coffee" },
  { icon: Moon,          label: "24-Hour Reception" },
];

export const villas = [
  { name: "Deluxe AC",       ac: true,  tv: true,  size: "250", from: 2000, geyser: true,  beds: 1 },
];
