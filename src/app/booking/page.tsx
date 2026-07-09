import Link from "next/link";
import { rooms } from "@/data/rooms";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/site";

export default function BookingPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-amber-600 uppercase tracking-widest text-xs font-medium">Best Rates Guaranteed</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mt-3 mb-4">
            Book Your Stay at <span className="text-amber-600 italic">Sabitri Guest House</span>
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Just 200m from Shree Jagannath Temple &bull; 1km from Puri Beach &bull; Family-Friendly &bull; 4.7&starf; Rated
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-amber-50 rounded-xl p-6 text-center border border-amber-200">
            <p className="text-3xl font-bold text-amber-600 mb-1">200m</p>
            <p className="text-sm text-stone-600">From Jagannath Temple</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-6 text-center border border-amber-200">
            <p className="text-3xl font-bold text-amber-600 mb-1">24</p>
            <p className="text-sm text-stone-600">Clean Rooms</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-6 text-center border border-amber-200">
            <p className="text-3xl font-bold text-amber-600 mb-1">4.7&starf;</p>
            <p className="text-sm text-stone-600">Guest Rating (227+ Reviews)</p>
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

        <div className="mt-16 text-center">
          <Link href="/rooms" className="text-amber-600 hover:text-amber-700 underline underline-offset-4 text-sm">
            &larr; View All Room Details & Amenities
          </Link>
        </div>
      </div>
    </div>
  );
}
