import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description: "Explore 24 clean and spacious AC & non-AC rooms at Sabitri Guest House in Puri. Family-friendly lodgings with attached bathrooms, WiFi, and housekeeping starting at ₹1,500/night.",
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
