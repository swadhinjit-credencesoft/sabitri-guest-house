import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover curated experiences in Puri — Jagannath Temple darshan (200m walk), Puri Golden Beach (1km), Konark Sun Temple (35km), Chilika Lake excursions, and Rath Yatra festival. Book from Sabitri Guest House.",
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
  return children;
}
