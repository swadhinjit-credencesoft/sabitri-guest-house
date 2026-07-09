import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Sabitri Guest House website. Understand the terms governing your use of our website and online booking services.",
  keywords: [
    "Sabitri Guest House terms of service",
    "website terms Puri hotel",
    "online booking terms",
    "hotel website terms of use",
  ],
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/terms-conditions",
  },
  openGraph: {
    title: "Terms of Service | Sabitri Guest House Puri",
    description:
      "Read the Terms of Service for using the Sabitri Guest House website and booking platform.",
    url: "https://sabitriguesthouse.in/terms-of-service",
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
    title: "Terms of Service | Sabitri Guest House Puri",
    description:
      "Terms of Service for Sabitri Guest House website.",
    images: ["/opengraph.jpg"],
  },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
