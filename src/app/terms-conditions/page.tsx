"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/resortData";
import { Clock, UserCheck, Shield, Ban, MapPin, Building, HelpCircle } from "lucide-react";

export default function TermsConditions() {
  const rules = [
    {
      icon: Clock,
      title: "Check-In & Check-Out",
      items: [
        "Check-in Time: 9:00 AM",
        "Check-out Time: 8:00 AM",
        "Early check-ins and late check-outs are subject to availability",
      ],
    },
    {
      icon: UserCheck,
      title: "Couple / Bachelor Rules",
      items: [
        "Unmarried couples are allowed",
        "Local ID holders are allowed",
        "Groups with only male guests are allowed",
      ],
    },
    {
      icon: Shield,
      title: "Guest Requirements",
      items: [
        "Primary guest must be at least 18 years of age",
        "Aadhaar and Driving License are accepted as ID proof",
      ],
    },
    {
      icon: Ban,
      title: "Restrictions",
      items: [
        "Pets are not allowed",
        "Smoking within the premises is not allowed",
      ],
    },
  ];

  const faq = [
    {
      q: "What are the customer ratings for Sabitri Guest House?",
      a: "The overall rating for Sabitri Guest House stands out of 5, as reviewed by guests on MakeMyTrip. You can explore in-depth guest reviews and browse through photos shared by visitors directly on the MakeMyTrip platform.",
    },
    {
      q: "How many types of rooms are available at Sabitri Guest House in Puri?",
      a: "At Sabitri Guest House, we offer room types tailored to meet the needs of every traveler. Check detailed room features, images, and the latest availability. Each room is designed to make your stay unforgettable.",
    },
    {
      q: "What are the Check-In and Check-Out times of Sabitri Guest House, Puri?",
      a: "Check-In Time: 9 AM. Check-Out Time: 8 AM. Early check-ins and late check-outs are subject to availability.",
    },
    {
      q: "How far is Sabitri Guest House from the city center?",
      a: "From the city center, it is 1.1 km away.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Property Rules & Terms</h1>
        <p className="text-muted-foreground text-sm mb-12">
          Please read the following rules and terms carefully before booking your stay at {siteConfig.name}.
        </p>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {rules.map((rule) => (
            <div key={rule.title} className="border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-400/15 flex items-center justify-center text-amber-400">
                  <rule.icon size={18} />
                </div>
                <h3 className="font-serif text-lg text-foreground">{rule.title}</h3>
              </div>
              <ul className="space-y-2">
                {rule.items.map((item) => (
                  <li key={item} className="text-foreground/70 text-sm flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ID Proof Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
            <Building size={20} className="text-amber-400" />
            ID Proof Related
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            Guests are required to present a valid government-issued ID proof at the time of check-in.
            Aadhaar Card and Driving License are accepted. PAN Card is not accepted as a valid ID proof
            for hotel stays. Foreign nationals must present their valid passport and visa.
          </p>
        </section>

        {/* Nearby Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
            <MapPin size={20} className="text-amber-400" />
            Nearby
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            {siteConfig.name} is located at Shree Marg, Chudanga Sahi, Puri — just {siteConfig.distanceFromTemple} from the
            Shree Jagannath Temple, {siteConfig.distanceFromBeach} from Puri Beach, and 1.1 km from the city center.
            The property is well-connected to all major landmarks and pilgrimage sites.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-2">
            <HelpCircle size={20} className="text-amber-400" />
            Questions & Answers
          </h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="border border-border rounded-xl p-5">
                <h3 className="font-medium text-foreground mb-2">{item.q}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Terms */}
        <section className="border-t border-border pt-8">
          <h2 className="font-serif text-2xl text-foreground mb-4">General Booking Terms</h2>
          <ul className="space-y-2 text-foreground/70 text-sm leading-relaxed list-disc pl-5">
            <li>Room rates are subject to change without prior notice.</li>
            <li>Cancellation policies vary by room type and season. Please check at the time of booking.</li>
            <li>Additional charges may apply for extra guests or services.</li>
            <li>The management reserves the right to refuse admission or service.</li>
            <li>Guests are responsible for any damage caused to property during their stay.</li>
            <li>Valuables should be kept secure. The management is not responsible for lost or stolen items.</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
