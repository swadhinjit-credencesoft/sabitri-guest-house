import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dining",
  description: "Sacred vegetarian flavours at Sabitri Guest House in Puri. Enjoy authentic Odia home-style thalis, Mahaprasad, traditional refreshments, and rooftop masala chai.",
};

export default function DiningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
