import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/shared/WebPageJsonLd";

export const metadata: Metadata = {
  title: "Book Your Puri Stay | Budget AC Rooms Near Jagannath Temple",
  description:
    "Book your stay at Sabitri Guest House — the best budget guest house in Puri near Jagannath Temple. AC rooms from ₹2,000/night. Direct booking, best rates, family-friendly. Reserve your room now.",
  keywords: [
    "book Sabitri Guest House",
    "book hotel in Puri",
    "Puri hotel booking",
    "book guest house near Jagannath Temple",
    "direct booking Puri",
    "Puri accommodation booking",
    "hotel reservation Puri",
    "online booking Puri hotel",
    "best rates Puri guest house",
    "reserve room in Puri",
  ],
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "Book Your Stay | Sabitri Guest House Puri",
    description:
      "Book your Puri stay at Sabitri Guest House – just 200m from Jagannath Temple. AC & non-AC rooms from ₹1,500. Direct booking – best rates, free WiFi, family-friendly.",
    url: "https://sabitriguesthouse.in/booking",
    images: [
      {
        url: "/room4 (1).avif",
        width: 1200,
        height: 630,
        alt: "Book Deluxe AC Room at Sabitri Guest House Puri near Jagannath Temple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Stay | Sabitri Guest House Puri",
    description:
      "Book directly at Sabitri Guest House. Best rates, no markup. 200m from Jagannath Temple.",
    images: ["/room4 (1).avif"],
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageJsonLd
        url="https://sabitriguesthouse.in/booking"
        name="Book Your Stay | Sabitri Guest House Puri"
        description="Book your stay at Sabitri Guest House in Puri. Budget-friendly AC & non-AC rooms from ₹1,500/night, 200m from Jagannath Temple."
        image="https://sabitriguesthouse.in/room4 (1).avif"
      />
      {children}
    </>
  );
}
