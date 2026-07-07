import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sabitri Guest House in Puri — call +91 90782 40376, WhatsApp, or email. Located 200m from Jagannath Temple, Shree Marg, Chudanga Sahi. Book your budget family stay today. 24/7 reception.",
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
  return children;
}
