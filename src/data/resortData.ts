
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
  { value: "24", label: "Clean Rooms" },
  { value: "200m", label: "From Jagannath Temple" },
  { value: "4.7★", label: "Guest Rating" },
  { value: "15+", label: "Years of Service" },
];
 
export const awards = [
  "200m from Jagannath Temple",
  "Rated 4.7 on Justdial",
  "Family Friendly Stay",
  "Trusted by Pilgrims",
  "Budget Friendly Pricing",
  "Highly Rated on MakeMyTrip",
];
 
export const testimonials = [
  { quote: "Sabitri Guest House is a gem for pilgrims. Clean rooms, warm staff, and just a short walk to the temple. We felt at home instantly.", guest: "Ramesh & Sunita P.", origin: "Bhubaneswar, Odisha", stars: 5 },
  { quote: "Best budget stay in Puri. The location is unbeatable — you can hear the temple bells from your room. Staff is very helpful and kind.", guest: "Anjali Mohanty", origin: "Cuttack, Odisha", stars: 5 },
  { quote: "We visit Puri every year for Rath Yatra and always stay at Sabitri. The cleanliness and hospitality keep bringing us back.", guest: "Suresh Kumar", origin: "Kolkata, West Bengal", stars: 5 },
];
 
export const galleryImages = [
  { src: "/images/home-hero.png", alt: "Sabitri Guest House exterior near Jagannath Temple", span: "col-span-2 row-span-2" },
  { src: "/images/rooms-hero.png", alt: "Clean and comfortable guest room", span: "col-span-1 row-span-1" },
  { src: "/images/dining-saltwater.png", alt: "Breakfast dining area", span: "col-span-1 row-span-1" },
  { src: "/images/experiences-hero.png", alt: "View of Jagannath Temple from nearby", span: "col-span-1 row-span-2" },
  { src: "/images/about-hero.png", alt: "Sabitri Guest House lobby", span: "col-span-1 row-span-1" },
  { src: "/images/dining-ember.png", alt: "Local Odia food served at the guest house", span: "col-span-1 row-span-1" },
];
 
// ── Rooms Page Data ──
export const rooms = [
  { id: "standard-non-ac", name: "Standard Non-AC Room", price: 600, size: "180 sq ft", guests: "2 Guests", description: "A clean and comfortable non-AC room with a ceiling fan, attached bathroom, and all basic amenities. Ideal for budget-conscious pilgrims and travellers.", image: "/images/rooms-hero.png" },
  { id: "standard-ac", name: "Standard AC Room", price: 900, size: "200 sq ft", guests: "2 Guests", description: "A well-maintained air-conditioned room with a comfortable bed, hot water facility, and a calm environment — perfect for a peaceful night after temple darshan.", image: "/images/home-hero.png" },
  { id: "deluxe-ac", name: "Deluxe AC Room", price: 1200, size: "250 sq ft", guests: "2–3 Guests", description: "Spacious deluxe room with AC, TV, wardrobe, and an attached bathroom with hot and cold water. A comfortable choice for families visiting for pilgrimage or leisure.", image: "/images/rooms-hero.png" },
  { id: "family-room", name: "Family Room", price: 1600, size: "380 sq ft", guests: "4–5 Guests", description: "Our largest room, ideal for families. Features multiple beds, ample storage, a large attached bathroom, and all the comforts needed for an extended stay in Puri.", image: "/images/about-hero.png" },
];
 
export const amenities = [
  { icon: Droplets, label: "Hot & Cold Water" },
  { icon: Star, label: "Daily Housekeeping" },
  { icon: Waves, label: "Near Puri Beach" },
  { icon: UtensilsCrossed, label: "Complimentary Breakfast" },
  { icon: Sparkles, label: "Clean Bathrooms" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Coffee, label: "Morning Tea/Coffee" },
  { icon: Moon, label: "24-Hour Reception" },
];
 
export const villas = [
  { name: "Standard Non-AC", pool: false, butler: false, size: "180", from: 600, sea: false, beds: 1 },
  { name: "Standard AC", pool: false, butler: false, size: "200", from: 900, sea: false, beds: 1 },
  { name: "Deluxe AC", pool: false, butler: false, size: "250", from: 1200, sea: false, beds: 1 },
  { name: "Family Room", pool: false, butler: false, size: "380", from: 1600, sea: false, beds: 2 },
];
 
// ── Dining Page Data ──
export const restaurants = [
  { id: "sabitri-kitchen", name: "Sabitri Kitchen", concept: "Home-Style Odia Meals", hours: "07:00 – 10:00 & 12:00 – 21:00", description: "Start your day with a wholesome Odia breakfast and enjoy simple, freshly cooked vegetarian meals throughout the day. Our kitchen serves authentic local flavours using fresh, seasonal ingredients sourced from nearby markets.", image: "/images/dining-saltwater.png", align: "left" },
  { id: "prasad-corner", name: "Prasad Corner", concept: "Mahaprasad & Temple Sweets", hours: "06:00 – 20:00", description: "Conveniently located near our reception, Prasad Corner offers the sacred Mahaprasad of Lord Jagannath along with traditional Odia sweets and snacks for devotees and guests throughout the day.", image: "/images/dining-ember.png", align: "right" },
  { id: "rooftop-chai", name: "Rooftop Chai Stall", concept: "Evening Tea & Snacks", hours: "17:00 – 21:00", description: "Unwind on our rooftop terrace with a warm cup of masala chai, light snacks, and a gentle breeze as the evening settles over Puri. A perfect spot to relax after a day of darshan and sightseeing.", image: "/images/home-hero.png", align: "left" },
];
 
export const morningItems = [
  { title: "Odia Breakfast Thali", desc: "A filling morning spread of upma, poha, idli, sambar, chutney, and seasonal fruits — all freshly prepared in our kitchen. Served between 7:00 AM and 10:00 AM." },
  { title: "Early Darshan Tea Service", desc: "For guests attending early morning temple darshan, we offer hot tea and biscuits from 5:30 AM onwards at the ground-floor lobby on request." },
  { title: "Packed Lunch for Excursions", desc: "Planning a day trip to Konark or Chilika Lake? Let us know the night before and we will prepare a simple packed vegetarian lunch for your journey." },
];
 
export const wines = [
  { region: "Puri, Odisha", label: "Mahaprasad of Jagannath Temple", style: "Sacred Odia Temple Offering" },
  { region: "Puri, Odisha", label: "Fresh Coconut Water, Grand Road", style: "Natural Tropical Refreshment" },
  { region: "Puri, Odisha", label: "Lassi from Local Dairy, Bada Danda", style: "Chilled Sweet or Salted" },
  { region: "Puri, Odisha", label: "Masala Chai, Sabitri Rooftop", style: "Ginger & Cardamom Blend" },
];
 
// ── Experiences Page Data ──
export const experiences = [
  { title: "Jagannath Temple Darshan", duration: "1–3 Hours", description: "Walk just 200 metres from our doorstep to the sacred Jagannath Temple — one of India's four holiest Dhamas. Our staff can guide you on visiting timings and rituals.", image: "/images/experiences-hero.png" },
  { title: "Puri Beach Morning Walk", duration: "60–90 Minutes", description: "Begin your morning with a peaceful stroll along the golden sands of Puri Beach, just 1 km from the guest house. Watch the sunrise over the Bay of Bengal.", image: "/images/about-hero.png" },
  { title: "Konark Sun Temple Day Trip", duration: "Half Day", description: "Our reception can arrange an auto-rickshaw or taxi to the UNESCO World Heritage Konark Sun Temple, just 35 km away. A must-visit for history and architecture lovers.", image: "/images/experiences-hero.png" },
  { title: "Chilika Lake Excursion", duration: "Full Day", description: "Explore Asia's largest brackish water lagoon, home to Irrawaddy dolphins and migratory birds. Day tours can be arranged from our reception with local guides.", image: "/images/home-hero.png" },
  { title: "Rath Yatra Festival Experience", duration: "Full Day (Seasonal)", description: "Witness or participate in the world-famous Rath Yatra procession along Grand Road. Our guest house is ideally placed for viewing this magnificent annual festival.", image: "/images/rooms-hero.png" },
  { title: "Local Market & Handicraft Walk", duration: "2–3 Hours", description: "Explore the vibrant local markets of Puri — pick up Pattachitra paintings, sea-shell crafts, and handloom textiles unique to Odisha. Our staff will guide you to the best spots.", image: "/images/dining-ember.png" },
];
 
export const steps = [
  { icon: Search, num: "01", title: "Choose", desc: "Browse our room options and select what suits your group size and budget best." },
  { icon: Settings, num: "02", title: "Book", desc: "Call us directly or book through MakeMyTrip, Goibibo, or Agoda. We confirm within hours." },
  { icon: Sparkles, num: "03", title: "Arrive", desc: "Check in anytime after 12:00 PM. Our team will welcome you and help you settle in quickly." },
];
 
export const seasons = [
  { name: "Oct – Feb", label: "Peak Season", weather: "22–28°C | Pleasant", note: "Best time for temple & beach" },
  { name: "Mar – May", label: "Warm Season", weather: "30–38°C | Sunny", note: "Fewer crowds, lower rates" },
  { name: "Jun – Jul", label: "Rath Yatra", weather: "28–32°C | Monsoon onset", note: "Famous chariot festival" },
  { name: "Aug – Sep", label: "Monsoon", weather: "25–30°C | Rains", note: "Lush greenery, quiet retreat" },
];
 
// ── About Page Data ──
export const aboutAwards = [
  { name: "Justdial", title: "Rated 4.7 – Guest Houses in Puri", year: "2024" },
  { name: "MakeMyTrip", title: "Highly Recommended Budget Stay", year: "2023–2024" },
  { name: "Goibibo", title: "Very Good Rating – Popular Among Tourists", year: "2023" },
  { name: "Agoda", title: "Top-Rated Homestay in Puri", year: "2022–2024" },
  { name: "Expedia", title: "15-Min Walk to Jagannath Temple", year: "2023" },
  { name: "TripAdvisor", title: "Budget Friendly, Good Value Stay", year: "2024" },
];
 
export const values = [
  { icon: Heart, title: "Warm Odia Hospitality", body: "We treat every guest like family. From helping you plan your temple visits to arranging local transport, our team is always ready to assist with a smile." },
  { icon: Leaf, title: "Clean & Hygienic Rooms", body: "Our rooms are cleaned daily and inspected before every check-in. We maintain strict hygiene standards so you can focus entirely on your pilgrimage or holiday." },
  { icon: Star, title: "Unbeatable Location", body: "Just 200 metres from the Jagannath Temple and 1 km from Puri Beach — no guest house in Puri puts you closer to the places that matter most." },
];
 
export const timeline = [
  { year: "2008", title: "Founded", desc: "Sabitri Guest House was established by the Sabitri family to offer clean, affordable accommodation for pilgrims and tourists visiting Jagannath Temple." },
  { year: "2011", title: "First Expansion", desc: "Added a new block of AC rooms to meet growing demand from families and groups visiting during Rath Yatra and other festivals." },
  { year: "2015", title: "Online Presence", desc: "Listed on MakeMyTrip, Goibibo, and Agoda, making it easier for guests across India and abroad to discover and book Sabitri Guest House." },
  { year: "2018", title: "Breakfast Service Launched", desc: "Introduced a complimentary Odia breakfast service for all guests, earning widespread praise in guest reviews across all platforms." },
  { year: "2021", title: "Rating Milestone", desc: "Crossed 200 verified reviews on Justdial with a consistent 4.7-star rating — a testament to the loyalty and satisfaction of our guests." },
  { year: "2024", title: "Renovation & Upgrade", desc: "Completed a full renovation of all deluxe and family rooms with new furnishings, improved bathrooms, and upgraded WiFi infrastructure." },
];
 
export const founders = [
  { name: "Sabitri Devi", role: "Founder & Proprietor", quote: "Every pilgrim who comes here deserves a clean bed and a warm welcome. That is all we have ever promised.", img: "/images/about-hero.png" },
  { name: "Bikash Mohanty", role: "Manager & Operations Head", quote: "Our guests travel from across India to seek blessings. It is our honour to make their stay comfortable and worry-free.", img: "/images/rooms-hero.png" },
  { name: "Priya Sabitri", role: "Guest Relations & Booking", quote: "From the first inquiry to check-out, we want every guest to feel they have a local friend in Puri.", img: "/images/dining-saltwater.png" },
];
 
// ── Around Us Page Data ──
export const locations = [
  { name: "Jagannath Temple", distance: "200m", unit: "from the guest house", description: "One of India's four sacred Dhamas, the 12th-century Jagannath Temple is the spiritual heart of Puri. Entry is restricted to Hindus; our staff will guide you on visiting protocols.", icon: Navigation, category: "Heritage", travel: "3-min walk" },
  { name: "Puri Beach (Golden Beach)", distance: "1km", unit: "from the guest house", description: "A wide, clean stretch of the Bay of Bengal shore. Popular for sunrise walks, horse rides, and evening snacks from beach-side stalls.", icon: Waves, category: "Nature", travel: "12-min walk" },
  { name: "Swargadwar Cremation Ground", distance: "1.5km", unit: "from the guest house", description: "A sacred riverside site of immense spiritual significance, believed to grant moksha. A solemn place visited by many pilgrims during their stay in Puri.", icon: Compass, category: "Heritage", travel: "18-min walk" },
  { name: "Konark Sun Temple", distance: "35km", unit: "from Puri", description: "A UNESCO World Heritage Site and one of India's greatest architectural marvels — the 13th-century Sun Temple shaped like a colossal chariot. Day trips easily arranged.", icon: Building2, category: "Heritage", travel: "45-min taxi" },
  { name: "Chilika Lake", distance: "50km", unit: "from Puri", description: "Asia's largest brackish water lagoon, home to Irrawaddy dolphins, flamingos, and hundreds of migratory bird species. Boat safaris available.", icon: Waves, category: "Wildlife", travel: "1-hr taxi" },
  { name: "Raghurajpur Craft Village", distance: "14km", unit: "from Puri", description: "A UNESCO-recognised heritage village where every family practises traditional Pattachitra painting, palm-leaf engraving, and stone carving. A living art experience.", icon: Trees, category: "Culture", travel: "25-min taxi" },
];
 
export const categoryColors: Record<string, string> = {
  Nature: "text-emerald-600",
  Culture: "text-amber-600",
  Heritage: "text-stone-500",
  Wildlife: "text-cyan-600",
  Urban: "text-violet-600",
};
 
export const transports = [
  { icon: PlaneTakeoff, type: "By Air", duration: "60 km", desc: "From Biju Patnaik Airport, Bhubaneswar" },
  { icon: Anchor, type: "By Train", duration: "1 km", desc: "From Puri Railway Station" },
  { icon: Wind, type: "By Bus", duration: "2 km", desc: "From Puri Bus Stand" },
  { icon: Waves, type: "Auto-Rickshaw", duration: "5 min", desc: "Easily available throughout the city" },
];
 
export const islandHighlights = [
  { label: "Temple Distance", value: "200m", note: "Walk in 3 minutes" },
  { label: "Beach Distance", value: "1km", note: "Easy 12-min walk" },
  { label: "Guest Rating", value: "4.7★", note: "Verified on Justdial" },
  { label: "Reviews", value: "227+", note: "Across platforms" },
];
 
// ── Contact Page Data ──
export const contactDetails = [
  { icon: Phone, label: "Call Us", value: "+91 90901 48874", href: "tel:+919090148874" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 90901 48874", href: "https://wa.me/919090148874" },
  { icon: Mail, label: "Email", value: "sabitriguesthouse@gmail.com", href: "mailto:sabitriguesthouse@gmail.com" },
  { icon: MapPin, label: "Address", value: "Shree Marg, Chudanga Sahi, Puri, Odisha – 752001", href: "#" },
];
 
export const promises = [
  { icon: Clock, title: "Quick Confirmation", desc: "All booking enquiries confirmed within 2 hours by our reception team. Call or WhatsApp any time." },
  { icon: Shield, title: "Safe & Secure Stay", desc: "CCTV-monitored premises, 24-hour reception, and a safe neighbourhood just steps from the temple complex." },
  { icon: Star, title: "Honest Pricing", desc: "No hidden charges. What you see is what you pay — clean rooms at fair prices, every single time." },
];
 
export const faqs = [
  { q: "What is the check-in and check-out time?", a: "Check-in is at 12:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available on request, subject to room availability." },
  { q: "Is the guest house close to Jagannath Temple?", a: "Yes — Sabitri Guest House is located just 200 metres from the Jagannath Temple on Shree Marg, Chudanga Sahi. You can walk to the temple in under 5 minutes." },
  { q: "Do you provide complimentary breakfast?", a: "Yes, a simple Odia breakfast is included with all room bookings. Tea and coffee are available at the reception from 5:30 AM for guests attending early morning darshan." },
  { q: "Is parking available?", a: "Limited two-wheeler parking is available on the premises. For four-wheelers, a public parking area is available nearby. Please inform us in advance if you are arriving by car." },
  { q: "Do you accommodate solo female travellers and families?", a: "Absolutely. We welcome families, couples, solo male and solo female travellers. Our premises are safe, well-monitored, and staffed around the clock." },
];
 