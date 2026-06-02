// ────────────────────────────────────────────
// dining.ts  —  Sabitri Guest House · Dining
// ────────────────────────────────────────────

// ── Restaurant / venue listings ───────────────
export const restaurants = [
  {
    id:          "sabitri-kitchen",
    name:        "Sabitri Kitchen",
    concept:     "Home-Style Odia Meals",
    hours:       "07:00 – 10:00 & 12:00 – 21:00",
    description: "Start your day with a wholesome Odia breakfast and enjoy simple, freshly cooked vegetarian meals throughout the day. Our kitchen serves authentic local flavours using fresh, seasonal ingredients sourced from nearby markets.",
    image:       "/images/dining-saltwater.png",
    align:       "left",
  },
  {
    id:          "prasad-corner",
    name:        "Prasad Corner",
    concept:     "Mahaprasad & Temple Sweets",
    hours:       "06:00 – 20:00",
    description: "Conveniently located near our reception, Prasad Corner offers the sacred Mahaprasad of Lord Jagannath along with traditional Odia sweets and snacks for devotees and guests throughout the day.",
    image:       "/images/dining-ember.png",
    align:       "right",
  },
  {
    id:          "rooftop-chai",
    name:        "Rooftop Chai Stall",
    concept:     "Evening Tea & Snacks",
    hours:       "17:00 – 21:00",
    description: "Unwind on our rooftop terrace with a warm cup of masala chai, light snacks, and a gentle breeze as the evening settles over Puri. A perfect spot to relax after a day of darshan and sightseeing.",
    image:       "/images/home-hero.png",
    align:       "left",
  },
];

// ── Morning menu items ─────────────────────────
export const morningItems = [
  {
    title: "Odia Breakfast Thali",
    desc:  "A filling morning spread of upma, poha, idli, sambar, chutney, and seasonal fruits — all freshly prepared in our kitchen. Served between 7:00 AM and 10:00 AM.",
  },
  {
    title: "Early Darshan Tea Service",
    desc:  "For guests attending early morning temple darshan, we offer hot tea and biscuits from 5:30 AM onwards at the ground-floor lobby on request.",
  },
  {
    title: "Packed Lunch for Excursions",
    desc:  "Planning a day trip to Konark or Chilika Lake? Let us know the night before and we will prepare a simple packed vegetarian lunch for your journey.",
  },
];

// ── Traditional drinks / beverages ────────────
export const wines = [
  { region: "Puri, Odisha", label: "Mahaprasad of Jagannath Temple",  style: "Sacred Odia Temple Offering" },
  { region: "Puri, Odisha", label: "Fresh Coconut Water, Grand Road",  style: "Natural Tropical Refreshment" },
  { region: "Puri, Odisha", label: "Lassi from Local Dairy, Bada Danda", style: "Chilled Sweet or Salted" },
  { region: "Puri, Odisha", label: "Masala Chai, Sabitri Rooftop",     style: "Ginger & Cardamom Blend" },
];
