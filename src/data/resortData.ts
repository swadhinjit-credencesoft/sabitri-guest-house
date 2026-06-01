import {
  Droplets,
  Star,
  Waves,
  UtensilsCrossed,
  Sparkles,
  Wifi,
  Coffee,
  Moon,
  Clock,
  ChefHat,
  GlassWater,
  Sunrise,
  Search,
  Settings,
  Award,
  Leaf,
  Heart,
  Users,
  MapPin,
  Trees,
  Building2,
  Navigation,
  PlaneTakeoff,
  Anchor,
  Wind,
  Compass,
  Phone,
  MessageCircle,
  Mail,
  Shield
} from "lucide-react";

// ── Navigation links ──
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Dining", path: "/dining" },
  { name: "Experiences", path: "/experiences" },
  { name: "About", path: "/about" },
  { name: "Around Us", path: "/around" },
  { name: "Contact", path: "/contact" },
];

// ── Home Page Data ──
export const stats = [
  { value: "48", label: "Overwater Villas" },
  { value: "2", label: "Michelin Stars" },
  { value: "63", label: "Spa Treatments" },
  { value: "1.2km", label: "Private Beach" },
];

export const awards = [
  "Conde Nast Traveler #1",
  "Forbes Five-Star",
  "Travel + Leisure World's Best",
  "Two Michelin Stars",
  "Tatler Best Hotel",
  "Virtuoso Sustainable Luxury",
];

export const testimonials = [
  { quote: "Aurelia is not merely a hotel — it is the gold standard against which every future stay will be measured. Perfection made tangible.", guest: "Sarah & James M.", origin: "London, UK", stars: 5 },
  { quote: "In thirty years of diplomacy across sixty countries, no property has matched the quiet mastery of Aurelia's team. Extraordinary.", guest: "H.E. Ambassador Chen", origin: "Singapore", stars: 5 },
  { quote: "We returned for our fifth anniversary. We will return for our tenth, twentieth, and every one after. There is nowhere else.", guest: "Isabella R.", origin: "New York, USA", stars: 5 },
];

export const galleryImages = [
  { src: "/images/home-hero.png", alt: "Overwater villas at golden hour", span: "col-span-2 row-span-2" },
  { src: "/images/rooms-hero.png", alt: "Tropical villa architecture", span: "col-span-1 row-span-1" },
  { src: "/images/dining-saltwater.png", alt: "Beachfront dining", span: "col-span-1 row-span-1" },
  { src: "/images/experiences-hero.png", alt: "Oceanfront overwater pavilion at golden hour", span: "col-span-1 row-span-2" },
  { src: "/images/about-hero.png", alt: "Aurelia architecture", span: "col-span-1 row-span-1" },
  { src: "/images/dining-ember.png", alt: "Fire dining experience", span: "col-span-1 row-span-1" },
];

// ── Rooms Page Data ──
export const rooms = [
  { id: "overwater", name: "Overwater Villa", price: 1500, size: "1,200 sq ft", guests: "2 Guests", description: "Suspended above the turquoise lagoon with a private infinity plunge pool, glass floor panels, and direct ocean access. Wake to the sound of the sea.", image: "/images/home-hero.png" },
  { id: "ocean-suite", name: "Ocean Suite", price: 2200, size: "1,800 sq ft", guests: "2–4 Guests", description: "Expansive multi-level suite with panoramic ocean views, private butler service, and a sprawling outdoor deck with sun loungers and a hot tub.", image: "/images/rooms-hero.png" },
  { id: "garden", name: "Garden Pool Villa", price: 1200, size: "1,500 sq ft", guests: "2 Guests", description: "Nestled in lush tropical foliage, featuring a private courtyard, outdoor rain shower, and a heated pool surrounded by native flowering plants.", image: "/images/rooms-hero.png" },
  { id: "penthouse", name: "Penthouse Residence", price: 5500, size: "4,000 sq ft", guests: "6 Guests", description: "The pinnacle of luxury. Three bedrooms, private spa treatment room, rooftop dining terrace with 360° views, and a dedicated full-time staff.", image: "/images/about-hero.png" },
];

export const amenities = [
  { icon: Droplets, label: "Private Plunge Pool" },
  { icon: Star, label: "Butler Service" },
  { icon: Waves, label: "Direct Ocean Access" },
  { icon: UtensilsCrossed, label: "In-Villa Dining" },
  { icon: Sparkles, label: "Spa Minibar" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Coffee, label: "Nespresso & Minibar" },
  { icon: Moon, label: "Nightly Turndown" },
];

export const villas = [
  { name: "Overwater", pool: true, butler: true, size: "1,200", from: 1500, sea: true, beds: 1 },
  { name: "Ocean Suite", pool: true, butler: true, size: "1,800", from: 2200, sea: true, beds: 2 },
  { name: "Garden Pool", pool: true, butler: false, size: "1,500", from: 1200, sea: false, beds: 1 },
  { name: "Penthouse", pool: true, butler: true, size: "4,000", from: 5500, sea: true, beds: 3 },
];

// ── Dining Page Data ──
export const restaurants = [
  { id: "saltwater", name: "Saltwater", concept: "Beachfront Seafood", hours: "18:00 – 23:00", description: "Dine on pristine white sands with the ocean lapping gently at the shore. Saltwater offers the day's freshest catch, prepared with elegant simplicity and paired with an extensive champagne collection.", image: "/images/dining-saltwater.png", align: "left" },
  { id: "ember", name: "Ember", concept: "Fire-Roasted Al Fresco", hours: "19:00 – 00:00", description: "Deep in the jungle canopy, Ember harnesses the primal element of fire. Experience dramatic open-flame cooking, premium aged wagyu, and bold smoky flavours in an unforgettable architectural setting.", image: "/images/dining-ember.png", align: "right" },
  { id: "soleil", name: "Soleil", concept: "Rooftop Champagne Bar", hours: "17:00 – 01:00", description: "Suspended between the ocean and the stars. Soleil is the ultimate destination for sunset cocktails, rare vintages, and delicate canapés with uninterrupted panoramic views of the horizon.", image: "/images/home-hero.png", align: "left" },
];

export const morningItems = [
  { title: "The Aurelia Breakfast", desc: "A 24-item spread of tropical fruits, freshly baked viennoiseries, artisan cheeses, and made-to-order egg dishes. Served in-villa or at Saltwater's beachside terrace." },
  { title: "Sunrise Tray Service", desc: "Requested the evening before. Delivered at the exact moment the sun clears the horizon — a personal ritual for those who know." },
  { title: "The Juice Ritual", desc: "Our juice master prepares bespoke cold-pressed blends each morning, drawing from the resort's private garden. Your preferences are noted and remembered." },
];

export const wines = [
  { region: "Burgundy, France", label: "Domaine de la Romanée-Conti, 2018", style: "Grand Cru Pinot Noir" },
  { region: "Champagne, France", label: "Krug, Grande Cuvée 170ème Édition", style: "Prestige Blanc de Blancs" },
  { region: "Napa Valley, USA", label: "Screaming Eagle, Cabernet Sauvignon 2019", style: "Cult Cabernet" },
  { region: "Priorat, Spain", label: "Álvaro Palacios, L'Ermita 2020", style: "Old Vine Garnacha" },
];

// ── Experiences Page Data ──
export const experiences = [
  { title: "Private Yacht Charter", duration: "Half or Full Day", description: "Set sail on a fully crewed luxury catamaran. Snorkel pristine sandbars, enjoy champagne at anchor, and return at dusk.", image: "/images/experiences-hero.png" },
  { title: "Sunrise Reef Yoga", duration: "60 Minutes", description: "Begin your morning suspended above the lagoon on a floating platform as the sun rises over the atoll.", image: "/images/about-hero.png" },
  { title: "Coral Restoration Dive", duration: "120 Minutes", description: "Join our resident marine biologist to plant coral fragments and witness the underwater garden you helped create.", image: "/images/experiences-hero.png" },
  { title: "Helicopter Island Tour", duration: "45 Minutes", description: "A breathtaking aerial perspective of the atolls, lagoons, and uninhabited islands stretching to the horizon.", image: "/images/home-hero.png" },
  { title: "Couples' Spa Ritual", duration: "150 Minutes", description: "An immersive journey through warm stone, tropical oils, and ancient Maldivian healing techniques for two.", image: "/images/rooms-hero.png" },
  { title: "Private Beach Bonfire", duration: "Evening", description: "A secluded stretch of sand, a roaring fire, a private chef, and a sky full of stars. Nothing else exists tonight.", image: "/images/dining-ember.png" },
];

export const steps = [
  { icon: Search, num: "01", title: "Choose", desc: "Browse our curated collection and select the moments that speak to you." },
  { icon: Settings, num: "02", title: "Personalise", desc: "Your personal concierge shapes every detail — timing, additions, special requests." },
  { icon: Sparkles, num: "03", title: "Immerse", desc: "Every detail handled. Every moment extraordinary. Simply arrive and be present." },
];

export const seasons = [
  { name: "Jan – Mar", label: "Peak Season", weather: "28°C | Calm seas", note: "Ideal diving & snorkelling" },
  { name: "Apr – Jun", label: "Shoulder Season", weather: "30°C | Light winds", note: "Best surf & water sports" },
  { name: "Jul – Sep", label: "Green Season", weather: "29°C | Tropical rains", note: "Whale shark migrations" },
  { name: "Oct – Dec", label: "Transition", weather: "27°C | Variable", note: "Manta ray feeding season" },
];

// ── About Page Data ──
export const aboutAwards = [
  { name: "Conde Nast Traveler", title: "Top Resort in the Indian Ocean", year: "2024" },
  { name: "Forbes Travel Guide", title: "Five-Star Rated", year: "2023–2024" },
  { name: "Travel + Leisure", title: "World's Best Hotel", year: "2023" },
  { name: "Michelin Guide", title: "Two Stars — Saltwater", year: "2022–2024" },
  { name: "Tatler", title: "Best New Hotel", year: "2022" },
  { name: "Virtuoso", title: "Best Sustainable Luxury Resort", year: "2023" },
];

export const values = [
  { icon: Heart, title: "Handcrafted Hospitality", body: "Every detail is personally curated by our resident experience architects. Nothing is templated. Nothing is overlooked." },
  { icon: Leaf, title: "Sustainability Pledge", body: "100% renewable energy, coral restoration programs, zero single-use plastics, and a dedicated marine biologist on-site since 2009." },
  { icon: Star, title: "The Aurelia Standard", body: "A guest-to-staff ratio of 1:4 ensures anticipatory service that feels instinctive, never intrusive." },
];

export const timeline = [
  { year: "1998", title: "Foundation", desc: "First overwater villa completed — built by hand over seven years by a marine architect and a Maldivian hospitality dynasty." },
  { year: "2003", title: "First Michelin Recognition", desc: "Saltwater becomes the first Maldivian restaurant to earn a Michelin star, putting Aurelia on the world culinary map." },
  { year: "2009", title: "Marine Conservation", desc: "Aurelia launches its coral restoration initiative, personally planting 18,000 coral fragments across the lagoon reef." },
  { year: "2015", title: "Penthouse Opens", desc: "The 4,000 sq ft Penthouse Residence is unveiled — Aurelia's most exclusive accommodation to date." },
  { year: "2022", title: "Second Michelin Star", desc: "A second star awarded to Saltwater, cementing Chef Arnaud Villeneuve's ocean-to-table philosophy globally." },
  { year: "2024", title: "Forbes Recertified", desc: "Forbes Travel Guide recertifies Aurelia with Five Stars for the eighth consecutive year." },
];

export const founders = [
  { name: "Jean-Michel Reyes", role: "Co-Founder & Marine Architect", quote: "I wanted to build something that could only exist here, only in this light, only over this lagoon.", img: "/images/about-hero.png" },
  { name: "Amina Nasheed", role: "Co-Founder & Hospitality Director", quote: "Maldivian culture is built on the rhythm of the ocean. Everything we do at Aurelia honours that rhythm.", img: "/images/rooms-hero.png" },
  { name: "Arnaud Villeneuve", role: "Executive Chef, Two Michelin Stars", quote: "I came for two weeks. That was eighteen years ago. The lagoon never lets you go.", img: "/images/dining-saltwater.png" },
];

// ── Around Us Page Data ──
export const locations = [
  { name: "Snorkel Reef", distance: "200m", unit: "from the jetty", description: "A living coral garden teeming with hawksbill turtles, manta rays, and over 300 species of tropical fish. Gear provided complimentary.", icon: Waves, category: "Nature", travel: "3-min swim" },
  { name: "Village Market", distance: "2km", unit: "by boat", description: "A vibrant local market offering hand-woven textiles, spices, and the island's legendary dried fish. Best visited at sunrise.", icon: Building2, category: "Culture", travel: "10-min boat" },
  { name: "Ancient Temple", distance: "8km", unit: "from resort", description: "A 12th-century Buddhist temple complex, one of the oldest remaining structures in the archipelago. Guided tours available daily.", icon: Navigation, category: "Heritage", travel: "20-min speedboat" },
  { name: "Twin Waterfalls", distance: "15km", unit: "inland", description: "Two dramatic cascades hidden deep in the rainforest. Aurelia arranges private jungle treks with expert naturalist guides.", icon: Trees, category: "Nature", travel: "30-min 4WD + hike" },
  { name: "Dolphin Channel", distance: "22km", unit: "by charter", description: "A renowned spinner dolphin nursery. Dawn excursions by private catamaran offer close, non-intrusive wildlife encounters.", icon: Waves, category: "Wildlife", travel: "45-min yacht" },
  { name: "Malé Capital", distance: "45km", unit: "by seaplane", description: "The compact island capital offers world-class dining, designer boutiques, and international connections.", icon: MapPin, category: "Urban", travel: "15-min seaplane" },
];

export const categoryColors: Record<string, string> = {
  Nature: "text-emerald-600",
  Culture: "text-amber-600",
  Heritage: "text-stone-500",
  Wildlife: "text-cyan-600",
  Urban: "text-violet-600",
};

export const transports = [
  { icon: PlaneTakeoff, type: "Seaplane", duration: "15 min", desc: "From Velana Airport" },
  { icon: Anchor, type: "Speedboat", duration: "45 min", desc: "Shared or private" },
  { icon: Wind, type: "Helicopter", duration: "20 min", desc: "Private charter" },
  { icon: Waves, type: "Private Yacht", duration: "60+ min", desc: "Fully crewed departure" },
];

export const islandHighlights = [
  { label: "Sandbars", value: "14", note: "Private access available" },
  { label: "Dive Sites", value: "28+", note: "PADI-certified guides" },
  { label: "Marine Species", value: "300+", note: "Reef-monitored" },
  { label: "Uninhabited Islands", value: "7", note: "Reachable by seaplane" },
];

// ── Contact Page Data ──
export const contactDetails = [
  { icon: Phone, label: "Reservations", value: "+960 123 4567", href: "tel:+9601234567" },
  { icon: MessageCircle, label: "WhatsApp", value: "+960 987 6543", href: "https://wa.me/960987654" },
  { icon: Mail, label: "Email", value: "reservations@aurelia.com", href: "mailto:reservations@aurelia.com" },
  { icon: MapPin, label: "Address", value: "Aurelia Atoll, MV 00120", href: "#" },
];

export const promises = [
  { icon: Clock, title: "2-Hour Response", desc: "All enquiries personally acknowledged within 2 hours by your assigned concierge." },
  { icon: Shield, title: "Total Discretion", desc: "Guest privacy is sacred at Aurelia. Our entire team operates under strict confidentiality protocols." },
  { icon: Star, title: "No Request Too Rare", desc: "From private jet arrangements to rare vintage sourcing — if it exists, we will find it." },
];

export const faqs = [
  { q: "What is the minimum stay?", a: "Three nights during peak season (December – April), two nights in off-peak periods. For holiday periods such as Christmas and New Year, a minimum of five nights applies." },
  { q: "Do you offer airport transfers?", a: "Yes — we arrange both seaplane (15 minutes) and speedboat (45 minutes) transfers from Velana International Airport. All transfers are pre-arranged by your personal concierge." },
  { q: "Is the resort all-inclusive?", a: "Rates are room-only. Curated dining, spa, and experience packages are available on request and can be tailored entirely to your preferences before arrival." },
  { q: "What is the cancellation policy?", a: "Full refund for cancellations made 14 or more days before arrival. Within 14 days, a one-night charge applies. Within 7 days, a two-night charge applies. Holiday periods may vary." },
  { q: "Can you accommodate dietary requirements?", a: "Absolutely. Our kitchen team accommodates all dietary preferences — vegan, gluten-free, Kosher, Halal, allergen-specific. Please advise at booking so we can prepare for your arrival." },
];
