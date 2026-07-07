import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Around Us",
  description:
    "Explore what's around Sabitri Guest House in Puri — Jagannath Temple (200m walk), Puri Golden Beach (1km), Konark Sun Temple (35km), Chilika Lake (50km). Transportation guides, local attractions, and excursion tips for your Puri trip.",
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
  return children;
}
