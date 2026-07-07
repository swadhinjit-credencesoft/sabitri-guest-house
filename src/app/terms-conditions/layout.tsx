import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Property rules, booking terms, and conditions at Sabitri Guest House in Puri. Check-in 9 AM, check-out 8 AM, couple-friendly, family stay near Jagannath Temple.",
  alternates: {
    canonical: "/terms-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Sabitri Guest House Puri",
    description:
      "View property rules, check-in/out timings, ID requirements, and booking policies at Sabitri Guest House near Jagannath Temple, Puri.",
    url: "https://sabitriguesthouse.in/terms-conditions",
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
    title: "Terms & Conditions | Sabitri Guest House Puri",
    description:
      "Property rules, check-in/out, and booking policies at Sabitri Guest House, Puri.",
    images: ["/opengraph.jpg"],
  },
};

export default function TermsConditionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
