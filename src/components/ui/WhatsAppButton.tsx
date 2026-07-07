"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-72 md:w-80 rounded-2xl shadow-2xl overflow-hidden border border-green-200 animate-in slide-in-from-bottom-10">
          <div className="bg-green-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Sabitri Guest House</p>
                <p className="text-green-100 text-xs">Typically replies within 5 min</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close WhatsApp chat"
            >
              <X size={18} />
            </button>
          </div>
          <div className="bg-white p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-3 text-sm text-gray-700">
              👋 Hi! Welcome to Sabitri Guest House. How can we help you with your booking?
            </div>
            <a
              href="https://wa.me/919078240376?text=Hi%21%20I%27d%20like%20to%20book%20a%20room%20at%20Sabitri%20Guest%20House%20in%20Puri."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg text-sm font-medium transition-colors"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}
    </>
  );
}
