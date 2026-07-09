"use client";
import { useState, useEffect } from "react";
import { Phone, Calendar, X } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export function FloatingActionWidget() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <div className="flex flex-col items-end gap-3 animate-in slide-in-from-right-2 fade-in duration-200">
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <a
                href="tel:+919078240376"
                className="flex items-center gap-2 bg-blue-500 text-white rounded-full px-4 py-2.5 shadow-lg hover:bg-blue-600 transition-all text-sm font-medium"
                aria-label="Call Sabitri Guest House"
              >
                <Phone size={18} />
                <span className="text-xs uppercase tracking-wider">Call Now</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="left">Call us at +91 90782 40376</TooltipContent>
          </Tooltip>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>
            <TooltipContent side="left">Book your Deluxe AC Room</TooltipContent>
          </Tooltip>
        </div>
      )}
      <div className={expanded ? "" : "animate-levitate"}>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <button
              onClick={() => setExpanded(!expanded)}
              className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-200 ${
                expanded
                  ? "bg-stone-800 text-white rotate-45"
                  : "bg-amber-500 text-white hover:bg-amber-600 animate-glow-ring"
              }`}
              aria-label={expanded ? "Close booking options" : "Quick booking options"}
            >
              {expanded ? <X size={20} /> : <Calendar size={20} />}
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">{expanded ? "Close" : "Book now"}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
