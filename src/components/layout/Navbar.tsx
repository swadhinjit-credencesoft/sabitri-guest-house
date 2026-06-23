"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navLinks } from "@/data/resortData";

export function Navbar() {
  const location = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(252,249,244,0.95)" : "rgba(0,0,0,0)",
        borderBottomColor: scrolled ? "rgba(210,195,175,0.5)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl md:text-3xl text-primary tracking-widest uppercase" data-testid="link-logo">
          SABITRI Guest house
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                location === link.path
                  ? "text-primary"
                  : scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
              data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className={`rounded-full px-6 xl:px-8 uppercase tracking-widest text-xs transition-all duration-300 ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white/10 text-white border border-white/40 hover:bg-white/20 backdrop-blur-sm"
              }`}
              data-testid="button-book-now-nav"
            >
              Book Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden"
        style={{ backgroundColor: "rgba(252,249,244,0.97)", backdropFilter: "blur(20px)" }}
      >
        <nav className="flex flex-col items-center py-8 gap-5 border-t border-border/40">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm uppercase tracking-widest ${
                location === link.path ? "text-primary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center"
          >
            <Button className="mt-2 rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs w-[80%] mx-auto block">
              Book Now
            </Button>
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
