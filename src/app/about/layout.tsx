import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sabitri Guest House in Puri — established 2008, located 200m from Shree Jagannath Temple. Budget-friendly family accommodation with warm Odia hospitality.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
