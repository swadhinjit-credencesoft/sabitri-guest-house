import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/shared/WebPageJsonLd";

export const metadata: Metadata = {
  title: "Places to Visit in Puri | Nearby Attractions & Hotels Near Jagannath Temple",
  description:
    "Explore places to visit in Puri — Jagannath Temple (200m), Puri Beach (1km), Konark Sun Temple, Chilika Lake. Complete guide to attractions near your budget guest house. Plan your Puri trip today.",
  keywords: [
    "attractions near Puri",
    "places to visit in Puri",
    "Puri nearby places",
    "Jagannath Temple distance",
    "Puri beach distance",
    "Konark Sun Temple distance",
    "Chilika Lake from Puri",
    "how to reach Puri",
    "Puri local transport",
    "Puri sightseeing places",
  ],
  alternates: {
    canonical: "/around",
  },
  openGraph: {
    title: "Around Us | Sabitri Guest House Puri",
    description:
      "Discover attractions near Sabitri Guest House. Jagannath Temple (200m), Puri Beach (1km), Konark Sun Temple, Chilika Lake. Plan your Puri trip from our guest house.",
    url: "https://sabitriguesthouse.in/around",
    images: [
      {
        url: "/jagannathmandir3.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Jagannath Temple Puri - 200m from Sabitri Guest House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Around Us | Sabitri Guest House Puri",
    description:
      "Attractions near Sabitri Guest House: Jagannath Temple (200m), Puri Beach (1km), Konark, Chilika.",
    images: ["/jagannathmandir3.jpg"],
  },
};

export default function AroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageJsonLd
        url="https://sabitriguesthouse.in/around"
        name="Around Us | Sabitri Guest House Puri"
        description="Explore attractions around Sabitri Guest House — Jagannath Temple (200m), Puri Beach (1km), Konark Sun Temple (35km). Transportation guides and excursion tips."
        image="https://sabitriguesthouse.in/jagannathmandir3.jpg"
      />
      {children}
    </>
  );
}
