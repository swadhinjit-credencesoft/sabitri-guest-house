// ────────────────────────────────────────────
// contact.ts  —  Sabitri Guest House · Contact
// ────────────────────────────────────────────

import { Phone, MessageCircle, Mail, MapPin, Clock, Shield, Star } from "lucide-react";
import { getWhatsAppBookingUrl } from "./site";

// ── Contact detail cards ──────────────────────
export const contactDetails = [
  { icon: Phone,         label: "Call Us",   value: "+91 90782 40376",                          href: "tel:+919078240376" },
  { icon: MessageCircle, label: "WhatsApp",  value: "+91 90782 40376",                          href: getWhatsAppBookingUrl() },
  { icon: Mail,          label: "Email",     value: "sabitriguesthousepuri@gmail.com",          href: "mailto:sabitriguesthousepuri@gmail.com" },
  { icon: MapPin,        label: "Address",   value: "Shree Marg, Chudanga Sahi, Puri, Odisha – 752001", href: "#" },
];

// ── Concierge promises ────────────────────────
export const promises = [
  {
    icon:  Clock,
    title: "Quick Confirmation",
    desc:  "All booking enquiries confirmed within 2 hours by our reception team. Call or WhatsApp any time.",
  },
  {
    icon:  Shield,
    title: "Safe & Secure Stay",
    desc:  "CCTV-monitored premises, 24-hour reception, and a safe neighbourhood just steps from the temple complex.",
  },
  {
    icon:  Star,
    title: "Honest Pricing",
    desc:  "No hidden charges. What you see is what you pay — clean rooms at fair prices, every single time.",
  },
];

// ── FAQ accordion ─────────────────────────────
export const faqs = [
  {
    q: "What is the check-in and check-out time?",
    a: "Check-in is at 12:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available on request, subject to room availability.",
  },
  {
    q: "Is the guest house close to Jagannath Temple?",
    a: "Yes — Sabitri Guest House is located just 200 metres from the Jagannath Temple on Shree Marg, Chudanga Sahi. You can walk to the temple in under 5 minutes.",
  },
  {
    q: "Do you provide complimentary tea or coffee?",
    a: "Yes, complimentary tea and coffee are available at the reception. Our guests appreciate a warm cup before heading out for early morning temple darshan.",
  },
  {
    q: "Is parking available?",
    a: "Limited two-wheeler parking is available on the premises. For four-wheelers, a public parking area is available nearby. Please inform us in advance if you are arriving by car.",
  },
  {
    q: "Do you accommodate solo female travellers and families?",
    a: "Absolutely. We welcome families, couples, solo male and solo female travellers. Our premises are safe, well-monitored, and staffed around the clock.",
  },
];
