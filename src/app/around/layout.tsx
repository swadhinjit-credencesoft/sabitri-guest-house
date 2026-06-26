import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Around Us",
  description: "Explore what's around Sabitri Guest House in Puri — Jagannath Temple (200m), Puri Beach (1 km), Konark Sun Temple, Chilika Lake. Transportation guides and local attractions.",
};

export default function AroundLayout({ children }: { children: React.ReactNode }) {
  return children;
}
