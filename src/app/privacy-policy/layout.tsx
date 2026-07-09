import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/shared/WebPageJsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Sabitri Guest House in Puri. Learn how we collect, use, and protect your personal information when you book or stay with us near Jagannath Temple.",
  keywords: [
    "Sabitri Guest House privacy policy",
    "privacy policy Puri hotel",
    "data protection guest house",
    "booking privacy policy",
    "hotel privacy terms",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Sabitri Guest House Puri",
    description:
      "Read the privacy policy of Sabitri Guest House. Understand how we handle your personal data and ensure your privacy during your stay in Puri.",
    url: "https://sabitriguesthouse.in/privacy-policy",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Sabitri Guest House near Jagannath Temple Puri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Sabitri Guest House Puri",
    description:
      "Privacy Policy of Sabitri Guest House. Your data privacy matters to us.",
    images: ["/opengraph.jpg"],
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageJsonLd
        url="https://sabitriguesthouse.in/privacy-policy"
        name="Privacy Policy | Sabitri Guest House Puri"
        description="Privacy Policy of Sabitri Guest House in Puri. Learn how we collect, use, and protect your personal information."
      />
      {children}
    </>
  );
}
