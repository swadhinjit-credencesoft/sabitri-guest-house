// ────────────────────────────────────────────
// home.ts  —  Sabitri Guest House · Home Page
// ────────────────────────────────────────────

// ── Stats strip ───────────────────────────────
export const stats = [
  { value: "24",   label: "Clean Rooms" },
  { value: "200m", label: "From Jagannath Temple" },
  { value: "4.7★", label: "Guest Rating" },
  { value: "15+",  label: "Years of Service" },
];

// ── Scrolling awards ticker ────────────────────
export const awards = [
  "200m from Jagannath Temple",
  "Rated 4.7 on Justdial",
  "Family Friendly Stay",
  "Trusted by Pilgrims",
  "Budget Friendly Pricing",
  "Highly Rated on MakeMyTrip",
];

// ── Guest testimonials ─────────────────────────
export const testimonials = [
  {
    quote: "Sabitri Guest House is a gem for pilgrims. Clean rooms, warm staff, and just a short walk to the temple. We felt at home instantly.",
    guest: "Ramesh & Sunita P.",
    origin: "Bhubaneswar, Odisha",
    stars: 5,
  },
  {
    quote: "Best budget stay in Puri. The location is unbeatable — you can hear the temple bells from your room. Staff is very helpful and kind.",
    guest: "Anjali Mohanty",
    origin: "Cuttack, Odisha",
    stars: 5,
  },
  {
    quote: "We visit Puri every year for Rath Yatra and always stay at Sabitri. The cleanliness and hospitality keep bringing us back.",
    guest: "Suresh Kumar",
    origin: "Kolkata, West Bengal",
    stars: 5,
  },
];

// ── Gallery mosaic images ──────────────────────
export const galleryImages = [
  { src: "/sabitri1.avif",         alt: "Sabitri Guest House exterior near Jagannath Temple", span: "col-span-2 row-span-2" },
  { src: "/sabitri6 (1).avif",        alt: "Clean and comfortable guest room",                  span: "col-span-1 row-span-1" },
  { src: "/room4 (1).avif",  alt: "Deluxe AC Room at Sabitri Guest House",            span: "col-span-1 row-span-1" },
  // { src: "/images/experiences-hero.png",  alt: "View of Jagannath Temple from nearby",             span: "col-span-1 row-span-2" },
  { src: "/images/about-hero.png",        alt: "Sabitri Guest House lobby",                        span: "col-span-1 row-span-1" },
  { src: "/handcraft.png",      alt: "Traditional Odisha handicrafts and souvenirs near Puri",        span: "col-span-1 row-span-1" },
];

// ── Inline stats shown in the "Devotional Rest" cinematic section ──
export const spaStats = [
  { v: "24",   l: "Clean Rooms" },
  { v: "200m", l: "To Temple" },
  { v: "24/7", l: "Front Desk" },
];

// ── Featured room editorial split ─────────────
export const featuredRoom = {
  imageSrc:    "/images/home-hero.png",
  imageAlt:    "Deluxe AC Room",
  eyebrow:     "Signature Accommodation",
  title:       "The Deluxe AC Room",
  description: "Spacious and fully air-conditioned, our Deluxe Room is designed with comfort in mind. Features a comfortable king-size bed, a large attached bathroom with geyser, high-speed WiFi, and a flat-screen TV — perfect for couples and small families.",
  features:    ["250 sq ft", "Air Conditioned", "Attached Bathroom", "High-Speed WiFi"],
};

// ── Philosophy section ─────────────────────────
export const philosophy = {
  eyebrow:     "Our Belief",
  headline:    "Serving pilgrims is our highest devotion.",
  subheadline: "Experience true Odia warmth.",
  body:        "For over 15 years, Sabitri Guest House has welcomed devotees and families visiting the holy town of Puri. We offer a clean, peaceful sanctuary near Lord Jagannath's holy temple, ensuring your spiritual journey is comfortable and worry-free.",
};
