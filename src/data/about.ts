// ────────────────────────────────────────────
// about.ts  —  Sabitri Guest House · About
// ────────────────────────────────────────────

import { Heart, Leaf, Star } from "lucide-react";

// ── Our Story paragraphs ──────────────────────
export const storyParagraphs = [
  "Sabitri Guest House was born from a simple conviction: that every pilgrim visiting the holy land of Puri deserves a clean, safe, and welcoming home to rest. Founded in 2008 by the Sabitri family, our lodge was built with love, purpose, and dedication to serving travelers.",
  "Located just a 3-minute walk (200 meters) from the magnificent Shree Jagannath Temple, our guest rooms are positioned to offer the quiet and peaceful atmosphere crucial for spiritual contemplation. Our family-run team works around the clock to provide guidance, manage bookings, and arrange fresh, local vegetarian meals.",
  "Over fifteen years later, Sabitri Guest House has welcomed thousands of families and pilgrims from across India, many of whom return year after year for their annual darshan. We remain committed to our founding promise: honest budget pricing and clean comfort, always.",
];

// ── Mini stats in the "Pilgrim Hospitality" section ─
export const aboutMiniStats = [
  { v: "15+",  l: "Years of Service" },
  { v: "200m", l: "To Jagannath Temple" },
  { v: "4.7★", l: "Verified Justdial Rating" },
];

// ── Platform recognition / awards ─────────────
export const aboutAwards = [
  { name: "Justdial",   title: "Rated 4.7 – Guest Houses in Puri",        year: "2024" },
  { name: "MakeMyTrip", title: "Highly Recommended Budget Stay",           year: "2023–2024" },
  { name: "Goibibo",    title: "Very Good Rating – Popular Among Tourists", year: "2023" },
  { name: "Agoda",      title: "Top-Rated Homestay in Puri",               year: "2022–2024" },
  { name: "Expedia",    title: "15-Min Walk to Jagannath Temple",           year: "2023" },
  { name: "TripAdvisor",title: "Budget Friendly, Good Value Stay",          year: "2024" },
];

// ── Philosophy / values cards ─────────────────
export const values = [
  {
    icon:  Heart,
    title: "Warm Odia Hospitality",
    body:  "We treat every guest like family. From helping you plan your temple visits to arranging local transport, our team is always ready to assist with a smile.",
  },
  {
    icon:  Leaf,
    title: "Clean & Hygienic Rooms",
    body:  "Our rooms are cleaned daily and inspected before every check-in. We maintain strict hygiene standards so you can focus entirely on your pilgrimage or holiday.",
  },
  {
    icon:  Star,
    title: "Unbeatable Location",
    body:  "Just 200 metres from the Jagannath Temple and 1 km from Puri Beach — no guest house in Puri puts you closer to the places that matter most.",
  },
];

// ── Milestone timeline ────────────────────────
export const timeline = [
  { year: "2008", title: "Founded",                 desc: "Sabitri Guest House was established by the Sabitri family to offer clean, affordable accommodation for pilgrims and tourists visiting Jagannath Temple." },
  { year: "2011", title: "First Expansion",         desc: "Added a new block of AC rooms to meet growing demand from families and groups visiting during Rath Yatra and other festivals." },
  { year: "2015", title: "Online Presence",         desc: "Listed on MakeMyTrip, Goibibo, and Agoda, making it easier for guests across India and abroad to discover and book Sabitri Guest House." },
  { year: "2018", title: "Breakfast Service Launched", desc: "Introduced a complimentary Odia breakfast service for all guests, earning widespread praise in guest reviews across all platforms." },
  { year: "2021", title: "Rating Milestone",        desc: "Crossed 200 verified reviews on Justdial with a consistent 4.7-star rating — a testament to the loyalty and satisfaction of our guests." },
  { year: "2024", title: "Renovation & Upgrade",   desc: "Completed a full renovation of all deluxe and family rooms with new furnishings, improved bathrooms, and upgraded WiFi infrastructure." },
];

// ── Team / founders ───────────────────────────
export const founders = [
  {
    name:  "Sabitri Devi",
    role:  "Founder & Proprietor",
    quote: "Every pilgrim who comes here deserves a clean bed and a warm welcome. That is all we have ever promised.",
    img:   "/images/about-hero.png",
  },
  {
    name:  "Bikash Mohanty",
    role:  "Manager & Operations Head",
    quote: "Our guests travel from across India to seek blessings. It is our honour to make their stay comfortable and worry-free.",
    img:   "/images/rooms-hero.png",
  },
  {
    name:  "Priya Sabitri",
    role:  "Guest Relations & Booking",
    quote: "From the first inquiry to check-out, we want every guest to feel they have a local friend in Puri.",
    img:   "/images/dining-saltwater.png",
  },
];
