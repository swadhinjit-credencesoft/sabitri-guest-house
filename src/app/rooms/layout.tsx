import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/shared/WebPageJsonLd";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "AC Rooms in Puri — Deluxe & Budget Rooms Near Jagannath Temple",
  description:
    "Explore AC rooms in Puri at Sabitri Guest House. Deluxe AC room with attached bathroom, WiFi, TV, geyser. Family-friendly budget accommodation near Jagannath Temple. Rooms from ₹2,000/night. Book now!",
  keywords: [
    "rooms in Puri",
    "AC rooms near Jagannath Temple",
    "budget rooms in Puri",
    "guest house rooms Puri",
    "hotel rooms near Puri beach",
    "deluxe room Puri",
    "non AC rooms Puri",
    "family rooms Puri",
    "rooms under 2000 Puri",
    "accommodation near Jagannath Temple",
  ],
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
  const roomSchema = rooms.map((room) => ({
    "@type": "HotelRoom",
    "@id": `https://sabitriguesthouse.in/#room-${room.id}`,
    "name": room.name,
    "description": room.description,
    "image": `https://sabitriguesthouse.in${room.image}`,
    "occupancy": { "@type": "QuantitativeValue", "maxValue": 4, "unitText": "guests" },
    "size": { "@type": "QuantitativeValue", "value": 250, "unitText": "square feet" },
    "offers": {
      "@type": "Offer",
      "price": room.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://sabitriguesthouse.in/booking",
    },
  }));

  return (
    <>
      <WebPageJsonLd
        url="https://sabitriguesthouse.in/rooms"
        name="Rooms & Suites | Sabitri Guest House Puri"
        description="Explore 24 AC and non-AC rooms at Sabitri Guest House, Puri. Budget-friendly family stay near Jagannath Temple with free WiFi, attached bathrooms, and housekeeping."
        image="https://sabitriguesthouse.in/room4 (1).avif"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...roomSchema,
              {
                "@type": "ItemList",
                "itemListElement": rooms.map((room, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "item": { "@id": `https://sabitriguesthouse.in/#room-${room.id}` },
                })),
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
