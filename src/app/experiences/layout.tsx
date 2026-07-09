import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/shared/WebPageJsonLd";

export const metadata: Metadata = {
  title: "Things to Do in Puri | Sacred Experiences & Attractions Near Jagannath Temple",
  description:
    "Discover the best things to do in Puri — Jagannath Temple darshan (200m walk), Puri Beach (1km), Konark Sun Temple (35km), Chilika Lake. Explore top attractions near your guest house in Puri. Book now.",
  keywords: [
    "experiences in Puri",
    "things to do in Puri",
    "Puri temple darshan",
    "Puri beach activities",
    "Konark Sun Temple tour",
    "Chilika Lake boat ride",
    "Rath Yatra Puri",
    "Puri sightseeing",
    "Puri travel experiences",
    "what to do in Puri",
  ],
  alternates: {
    canonical: "/experiences",
  },
  openGraph: {
    title: "Experiences | Sabitri Guest House Puri",
    description:
      "Explore Puri's top attractions from Sabitri Guest House. Jagannath Temple darshan, Golden Beach walks, Konark Sun Temple day trip, Chilika Lake boat safari. Book your Puri tour.",
    url: "https://sabitriguesthouse.in/experiences",
    images: [
      {
        url: "/sabitri13 (1).avif",
        width: 1200,
        height: 630,
        alt: "Puri experiences near Sabitri Guest House - Temple, Beach, Konark, Chilika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences | Sabitri Guest House Puri",
    description:
      "Discover Puri's best experiences — temple darshan, beach walks, Konark, Chilika. Stay at Sabitri Guest House.",
    images: ["/sabitri13 (1).avif"],
  },
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageJsonLd
        url="https://sabitriguesthouse.in/experiences"
        name="Experiences | Sabitri Guest House Puri"
        description="Discover curated experiences in Puri — Jagannath Temple darshan (200m), Puri Beach (1km), Konark Sun Temple (35km), Chilika Lake. Book from Sabitri Guest House."
        image="https://sabitriguesthouse.in/sabitri13 (1).avif"
      />
      {children}
    </>
  );
}
