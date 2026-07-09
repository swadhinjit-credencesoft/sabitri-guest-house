import Link from "next/link";
import { rooms } from "@/data/rooms";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/site";
import { testimonials } from "@/data/home";
import { Shield, BadgeCheck, Lock, Star, MapPin, Phone } from "lucide-react";

const bookingFaqs = [
  {
    question: "How do I make a direct booking?",
    answer: "You can book directly by clicking 'Book Online Now' above, calling +91 90782 40376, or messaging us on WhatsApp. Direct bookings get the best rates with no hidden charges.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "Free cancellation up to 24 hours before check-in. Late cancellations may incur a one-night charge. Please see our Terms & Conditions for full details.",
  },
  {
    question: "Is advance payment required?",
    answer: "A partial advance payment may be required to confirm your reservation during peak seasons like Rath Yatra and winter holidays. Rest assured, our direct booking ensures no hidden fees.",
  },
  {
    question: "What identification is needed at check-in?",
    answer: "All guests must present a valid government-issued ID (Aadhaar, Voter ID, Passport, or Driving License) at check-in. Foreign nationals require a valid Passport and Visa.",
  },
];

export default function BookingPage() {
  return (
    <div className="pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": bookingFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
          }),
        }}
      />

      <div className="relative bg-gradient-to-b from-stone-900 via-stone-900/95 to-stone-900/0 pt-16 pb-24 md:pb-32 mb-8 -mt-28 px-4">
        <div className="container mx-auto md:px-6 lg:px-8 max-w-6xl">
          <div className="text-center pt-8">
            <span className="text-amber-400 uppercase tracking-widest text-xs font-medium">Best Rates Guaranteed</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4">
              Book Your Stay at <span className="text-amber-400 italic">Sabitri Guest House</span>
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Just 200m from Shree Jagannath Temple &bull; 1km from Puri Beach &bull; Family-Friendly &bull; 4.7&starf; Rated
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">

        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <div className="bg-amber-50 rounded-xl p-5 text-center border border-amber-200">
            <MapPin size={20} className="text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-amber-600 mb-1">200m</p>
            <p className="text-xs text-stone-600">From Jagannath Temple</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 text-center border border-amber-200">
            <BadgeCheck size={20} className="text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-amber-600 mb-1">24</p>
            <p className="text-xs text-stone-600">Clean Rooms</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 text-center border border-amber-200">
            <Star size={20} className="text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-amber-600 mb-1">4.7&starf;</p>
            <p className="text-xs text-stone-600">Guest Rating (227+)</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 text-center border border-amber-200">
            <Phone size={20} className="text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-amber-600 mb-1">24/7</p>
            <p className="text-xs text-stone-600">Helpline</p>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-16 max-w-lg mx-auto">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl text-stone-900 mb-2">{room.name}</h2>
                <p className="text-stone-500 text-sm mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-stone-100 px-3 py-1 rounded-full text-stone-600">{room.size}</span>
                  <span className="text-xs bg-stone-100 px-3 py-1 rounded-full text-stone-600">{room.guests}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <div>
                    <span className="text-2xl font-bold text-amber-600">₹{room.price}</span>
                    <span className="text-stone-400 text-sm"> /night</span>
                  </div>
                  <a
                    href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-6 py-2.5 bg-amber-500 text-white hover:bg-amber-600 text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">Book Direct & Save</h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-8">
            Contact us directly for the best available rates, special requests, and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-sm font-semibold transition-colors shadow-lg shadow-amber-500/30"
            >
              Book Online Now
            </a>
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 bg-green-500 text-white hover:bg-green-600 uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+919078240376"
              className="rounded-full px-8 py-4 border border-white/30 text-white hover:bg-white/10 uppercase tracking-widest text-sm transition-colors"
            >
              Call +91 90782 40376
            </a>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border border-stone-200 text-center">
              <Lock size={24} className="text-green-600 mx-auto mb-3" />
              <h3 className="font-serif text-lg text-stone-900 mb-2">Secure Booking</h3>
              <p className="text-stone-500 text-sm">Your payment details are encrypted and secure. We never share your information with third parties.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-stone-200 text-center">
              <Shield size={24} className="text-green-600 mx-auto mb-3" />
              <h3 className="font-serif text-lg text-stone-900 mb-2">Best Rate Guarantee</h3>
              <p className="text-stone-500 text-sm">Booking directly with us ensures the lowest available rate — no commissions, no markups.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-stone-200 text-center">
              <BadgeCheck size={24} className="text-green-600 mx-auto mb-3" />
              <h3 className="font-serif text-lg text-stone-900 mb-2">4.7&starf; Rated</h3>
              <p className="text-stone-500 text-sm">Trusted by 227+ guests. Consistently rated among the best budget guest houses near Jagannath Temple.</p>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 md:p-12 border border-stone-200 mb-12">
            <span className="text-amber-600 uppercase tracking-widest text-xs font-medium text-center block mb-2">What Our Guests Say</span>
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 text-center mb-8">Guest <span className="text-amber-500 italic">Testimonials</span></h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-stone-200">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.stars)].map((_, s) => (<Star key={s} size={14} className="fill-amber-400 text-amber-400" />))}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="text-xs text-stone-400">
                    <p className="font-medium text-stone-700">{t.guest}</p>
                    <p>{t.origin}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 text-center mb-8">Frequently Asked <span className="text-amber-500 italic">Questions</span></h2>
            <div className="space-y-4">
              {bookingFaqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
                  <summary className="p-4 md:p-5 cursor-pointer font-medium text-stone-900 text-sm md:text-base hover:bg-stone-50 transition-colors list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <svg className="w-4 h-4 text-stone-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-4 md:px-5 pb-4 md:pb-5 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/rooms" className="text-amber-600 hover:text-amber-700 underline underline-offset-4 text-sm">
            &larr; View All Room Details & Amenities
          </Link>
        </div>
      </div>
    </div>
  );
}
