// ─────────────────────────────────────────────────
// experiences.ts  —  Sabitri Guest House · Experiences
// ─────────────────────────────────────────────────

import { Search, Settings, Sparkles } from "lucide-react";

// ── Experiences grid cards ─────────────────────
export const experiences = [
  {
    title:       "Jagannath Temple Darshan",
    duration:    "1–3 Hours",
    description: "Walk just 200 metres from our doorstep to the sacred Jagannath Temple — one of India's four holiest Dhamas. Our staff can guide you on visiting timings and rituals.",
    image:       "/images/experiences-hero.png",
  },
  {
    title:       "Puri Beach Morning Walk",
    duration:    "60–90 Minutes",
    description: "Begin your morning with a peaceful stroll along the golden sands of Puri Beach, just 1 km from the guest house. Watch the sunrise over the Bay of Bengal.",
    image:       "/images/about-hero.png",
  },
  {
    title:       "Konark Sun Temple Day Trip",
    duration:    "Half Day",
    description: "Our reception can arrange an auto-rickshaw or taxi to the UNESCO World Heritage Konark Sun Temple, just 35 km away. A must-visit for history and architecture lovers.",
    image:       "/images/experiences-hero.png",
  },
  {
    title:       "Chilika Lake Excursion",
    duration:    "Full Day",
    description: "Explore Asia's largest brackish water lagoon, home to Irrawaddy dolphins and migratory birds. Day tours can be arranged from our reception with local guides.",
    image:       "/images/home-hero.png",
  },
  {
    title:       "Rath Yatra Festival Experience",
    duration:    "Full Day (Seasonal)",
    description: "Witness or participate in the world-famous Rath Yatra procession along Grand Road. Our guest house is ideally placed for viewing this magnificent annual festival.",
    image:       "/images/rooms-hero.png",
  },
  {
    title:       "Local Market & Handicraft Walk",
    duration:    "2–3 Hours",
    description: "Explore the vibrant local markets of Puri — pick up Pattachitra paintings, sea-shell crafts, and handloom textiles unique to Odisha. Our staff will guide you to the best spots.",
    image:       "/images/dining-ember.png",
  },
];

// ── Booking / how-it-works steps ──────────────
export const steps = [
  {
    icon:  Search,
    num:   "01",
    title: "Choose",
    desc:  "Browse our room options and select what suits your group size and budget best.",
  },
  {
    icon:  Settings,
    num:   "02",
    title: "Book",
    desc:  "Call us directly or book through MakeMyTrip, Goibibo, or Agoda. We confirm within hours.",
  },
  {
    icon:  Sparkles,
    num:   "03",
    title: "Arrive",
    desc:  "Check in anytime after 12:00 PM. Our team will welcome you and help you settle in quickly.",
  },
];

// ── Seasonal guide strip ───────────────────────
export const seasons = [
  { name: "Oct – Feb", label: "Peak Season",  weather: "22–28°C | Pleasant",        note: "Best time for temple & beach" },
  { name: "Mar – May", label: "Warm Season",  weather: "30–38°C | Sunny",           note: "Fewer crowds, lower rates" },
  { name: "Jun – Jul", label: "Rath Yatra",   weather: "28–32°C | Monsoon onset",   note: "Famous chariot festival" },
  { name: "Aug – Sep", label: "Monsoon",      weather: "25–30°C | Rains",           note: "Lush greenery, quiet retreat" },
];

// ── Mini stats shown in the "Darshan" hero section ─
export const darshantStats = [
  { v: "200m",   l: "Walk to Temple" },
  { v: "5:30 AM", l: "First Darshan" },
  { v: "100%",   l: "Devotional Stay" },
];
