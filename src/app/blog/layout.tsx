import type { Metadata } from "next";
import { StickyBookingBar } from "@/components/blog/StickyBookingBar";
import { WebPageJsonLd } from "@/components/shared/WebPageJsonLd";

export const metadata: Metadata = {
  title: "Puri Travel Blog & Guides | Plan Your Stay Near Jagannath Temple",
  description:
    "Expert Puri travel blog with guides on Jagannath Temple, Rath Yatra, Puri Beach, Konark, Chilika Lake. Find the best budget guest house near Jagannath Temple for your Puri trip.",
  keywords: [
    "Puri travel blog",
    "Puri travel guide",
    "Jagannath Temple guide",
    "Rath Yatra information",
    "Puri beach guide",
    "Puri tourism blog",
    "places to visit in Puri",
    "Puri trip planning",
    "Odisha travel blog",
    "budget travel Puri",
  ],
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
      <WebPageJsonLd
        url="https://sabitriguesthouse.in/blog"
        name="Sabitri Guest House Travel Blog | Puri Travel Guides & Tips"
        description="Discover expert travel guides, tips, and local insights about Puri, Odisha. Jagannath Temple, Rath Yatra, Puri Beach, and budget-friendly accommodation."
        image="https://sabitriguesthouse.in/opengraph.jpg"
      />
      {children}
      <StickyBookingBar />
    </>
  );
}
