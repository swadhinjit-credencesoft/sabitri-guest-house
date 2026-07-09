"use client";
import { useState, useEffect } from "react";

export function CookieConsent() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored !== "true") {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-stone-900/95 backdrop-blur-md border-t border-stone-700 px-4 py-4">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-stone-300 text-sm text-center sm:text-left">
          This website uses cookies to improve your experience. By continuing, you agree to our{" "}
          <a href="/privacy-policy" className="text-amber-400 hover:underline">Privacy Policy</a>.
        </p>
        <button
          onClick={handleAccept}
          className="rounded-full px-6 py-2 bg-amber-500 text-white hover:bg-amber-600 text-xs uppercase tracking-wider font-semibold transition-colors whitespace-nowrap"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
