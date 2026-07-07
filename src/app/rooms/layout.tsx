import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore 24 clean and spacious AC & non-AC rooms at Sabitri Guest House in Puri. Family-friendly lodgings with attached bathrooms, WiFi, and housekeeping starting at ₹1,500/night. Budget guest house near Jagannath Temple. Book now!",
  alternates: {
    canonical: "/rooms",
  },
  openGraph: {
    title: "Rooms & Suites | Sabitri Guest House Puri",
    description:
      "Browse AC & non-AC rooms at Sabitri Guest House, Puri. Deluxe rooms with attached bathroom, WiFi, TV. Budget-friendly family stay near Jagannath Temple. Rooms from ₹1,500.",
    url: "https://sabitriguesthouse.in/rooms",
    images: [
      {
        url: "/room4 (1).avif",
        width: 1200,
        height: 630,
        alt: "Deluxe AC Room at Sabitri Guest House Puri near Jagannath Temple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms & Suites | Sabitri Guest House Puri",
    description:
      "Browse AC & non-AC rooms at Sabitri Guest House. Budget-friendly family stay near Jagannath Temple.",
    images: ["/room4 (1).avif"],
  },
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
