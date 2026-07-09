import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/shared/WebPageJsonLd";

export const metadata: Metadata = {
  title: "Contact Sabitri Guest House Puri | Book Budget Guest House Near Jagannath Temple",
  description:
    "Contact Sabitri Guest House — the best budget guest house in Puri near Jagannath Temple. Call +91 90782 40376, WhatsApp, or email. Located Shree Marg, Chudanga Sahi. Book your family stay today.",
  keywords: [
    "contact Sabitri Guest House",
    "Sabitri Guest House phone number",
    "Sabitri Guest House email",
    "book Sabitri Guest House",
    "guest house Puri contact",
    "hotel near Jagannath Temple contact",
    "Puri guest house booking",
    "Sabitri Guest House WhatsApp",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Sabitri Guest House Puri",
    description:
      "Get in touch with Sabitri Guest House. Call +91 90782 40376, WhatsApp, or email to book your budget stay near Jagannath Temple in Puri. Family-friendly rooms from ₹1,500.",
    url: "https://sabitriguesthouse.in/contact",
    images: [
      {
        url: "/sabitri5 (1).avif",
        width: 1200,
        height: 630,
        alt: "Contact Sabitri Guest House Puri - budget stay near Jagannath Temple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Sabitri Guest House Puri",
    description:
      "Contact Sabitri Guest House — call +91 90782 40376 or WhatsApp. Book your Puri stay today.",
    images: ["/sabitri5 (1).avif"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageJsonLd
        url="https://sabitriguesthouse.in/contact"
        name="Contact Us | Sabitri Guest House Puri"
        description="Contact Sabitri Guest House in Puri. Call +91 90782 40376, WhatsApp, or email. Located 200m from Jagannath Temple, Shree Marg, Chudanga Sahi."
        image="https://sabitriguesthouse.in/sabitri5 (1).avif"
      />
      {children}
    </>
  );
}
