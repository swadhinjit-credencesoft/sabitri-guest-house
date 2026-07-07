import type { Metadata } from "next";
import { StickyBookingBar } from "@/components/blog/StickyBookingBar";

export const metadata: Metadata = {
  title: "Travel Blog",
  description:
    "Discover expert travel guides, tips, and local insights about Puri, Odisha. Read about Jagannath Temple, Rath Yatra, Puri Beach, nearby attractions, and the best budget-friendly places to stay near the temple.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Sabitri Guest House Travel Blog | Puri Travel Guides & Tips",
    description:
      "Plan your perfect Puri trip with our detailed travel guides — Rath Yatra, Jagannath Temple darshan, best places to visit, seasonal tips, and budget accommodation near the temple.",
    url: "https://sabitriguesthouse.in/blog",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Sabitri Guest House Travel Blog - Puri Travel Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabitri Guest House Travel Blog | Puri Travel Guides",
    description:
      "Plan your perfect Puri trip with our detailed travel guides and tips.",
    images: ["/opengraph.jpg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <StickyBookingBar />
    </>
  );
}
