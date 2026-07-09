"use client";
import { useState, useEffect } from "react";
import { MessageCircle, Phone, Calendar, X } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/data/site";

export function FloatingActionWidget() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <div className="flex flex-col items-end gap-3 animate-in slide-in-from-right-2 fade-in duration-200">
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white rounded-full px-4 py-2.5 shadow-lg hover:bg-green-600 transition-all text-sm font-medium"
            aria-label="Book via WhatsApp"
          >
            <MessageCircle size={18} />
            <span className="text-xs uppercase tracking-wider">WhatsApp</span>
          </a>
          <a
            href="tel:+919078240376"
            className="flex items-center gap-2 bg-blue-500 text-white rounded-full px-4 py-2.5 shadow-lg hover:bg-blue-600 transition-all text-sm font-medium"
            aria-label="Call Sabitri Guest House"
          >
            <Phone size={18} />
            <span className="text-xs uppercase tracking-wider">Call Now</span>
          </a>
          <a
            href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber-500 text-white rounded-full px-4 py-2.5 shadow-lg hover:bg-amber-600 transition-all text-sm font-medium"
            aria-label="Book your stay now"
          >
            <Calendar size={18} />
            <span className="text-xs uppercase tracking-wider">Book Now</span>
          </a>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200 ${
          expanded
            ? "bg-stone-800 text-white rotate-45"
            : "bg-amber-500 text-white hover:bg-amber-600"
        }`}
        aria-label={expanded ? "Close booking options" : "Quick booking options"}
      >
        {expanded ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
