"use client";
import { useState, useEffect } from "react";

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-stone-900/95 backdrop-blur-md border-t border-amber-500/30 px-4 py-3">
        <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-white text-sm font-medium">
              Sabitri Guest House — Just 200m from Jagannath Temple
            </p>
            <p className="text-amber-400 text-xs">Starting from ₹1,500/night</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:+919078240376"
              className="flex-1 sm:flex-none text-center rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 text-xs uppercase tracking-wider transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919078240376"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none text-center rounded-full px-5 py-2.5 bg-green-500 text-white hover:bg-green-600 text-xs uppercase tracking-wider font-medium transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none text-center rounded-full px-6 py-2.5 bg-amber-500 text-white hover:bg-amber-600 text-xs uppercase tracking-wider font-semibold transition-colors shadow-lg shadow-amber-500/30"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
