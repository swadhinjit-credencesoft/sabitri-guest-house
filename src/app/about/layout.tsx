import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/shared/WebPageJsonLd";

export const metadata: Metadata = {
  title: "About Sabitri Guest House | Family Guest House in Puri Near Jagannath Temple",
  description:
    "Learn about Sabitri Guest House in Puri — established 2008, located 200m from Shree Jagannath Temple. Family-run, budget-friendly family guest house in Puri with warm Odia hospitality. 4.7★ rated with 227+ reviews.",
  keywords: [
    "about Sabitri Guest House",
    "Sabitri Guest House Puri story",
    "family run guest house Puri",
    "guest house established 2008",
    "Odia hospitality Puri",
    "about us Puri hotel",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Sabitri Guest House Puri",
    description:
      "Founded in 2008, Sabitri Guest House offers clean budget accommodation 200m from Jagannath Temple. Family-run, 4.7★ rated, serving pilgrims for 15+ years. Read our story.",
    url: "https://sabitriguesthouse.in/about",
    images: [
      {
        url: "/sabitri3 (1).avif",
        width: 1200,
        height: 630,
        alt: "Sabitri Guest House lobby and reception area in Puri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Sabitri Guest House Puri",
    description:
      "Family-run guest house near Jagannath Temple since 2008. 4.7★ rated, budget-friendly. Read our story.",
    images: ["/sabitri3 (1).avif"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageJsonLd
        url="https://sabitriguesthouse.in/about"
        name="About Us | Sabitri Guest House Puri"
        description="Learn about Sabitri Guest House in Puri — established 2008, located 200m from Shree Jagannath Temple. Family-run, 4.7★ rated budget accommodation."
        image="https://sabitriguesthouse.in/sabitri3 (1).avif"
      />
      {children}
    </>
  );
}
