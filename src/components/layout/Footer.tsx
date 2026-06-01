import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 py-16 md:py-20 border-t border-stone-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="sm:col-span-2 space-y-6">
            <Link href="/" className="font-serif text-3xl text-amber-400 tracking-widest uppercase block">
              AURELIA
            </Link>
            <p className="text-stone-400 text-base max-w-xs italic font-serif leading-relaxed">
              "Where time dissolves into luxury"
            </p>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              An exclusive sanctuary at the edge of the world. Est. 1998, Maldives.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400/50 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400/50 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400/50 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-stone-200 tracking-wide">Discover</h4>
            <ul className="space-y-3">
              {[
                { label: "Rooms & Villas", path: "/rooms" },
                { label: "Dining", path: "/dining" },
                { label: "Experiences", path: "/experiences" },
                { label: "About Us", path: "/about" },
                { label: "Around Us", path: "/around" },
              ].map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-stone-200 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li>1 Aurelia Atoll</li>
              <li>Maldives, MV 00120</li>
              <li className="pt-1">
                <a href="tel:+9601234567" className="hover:text-amber-400 transition-colors">+960 123 4567</a>
              </li>
              <li>
                <a href="https://wa.me/960987654" className="hover:text-amber-400 transition-colors">WhatsApp: +960 987 6543</a>
              </li>
              <li>
                <a href="mailto:reservations@aurelia.com" className="hover:text-amber-400 transition-colors">reservations@aurelia.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Aurelia Resort &amp; Spa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
