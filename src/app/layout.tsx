import type { Metadata } from "next";
import "../index.css";
import { Providers } from "./providers";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: {
    default: "Sabitri Guest House | Budget Family Guest House in Puri",
    template: "%s | Sabitri Guest House Puri"
  },
  description: "Sabitri Guest House is a top-rated, budget-friendly guest house in Puri, located just 200 meters from the holy Shree Jagannath Temple. Clean rooms, warm Odia hospitality, and family-friendly amenities.",
  keywords: ["Sabitri Guest House", "Sabitri Lodge", "Sabitri Homestay Puri", "hotels near Jagannath Temple Puri", "budget stay in Puri", "family rooms in Puri", "Puri guest house near temple"],
  metadataBase: new URL("https://sabitriguesthouse.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Sabitri Guest House | Budget Family Stay near Jagannath Temple, Puri",
    description: "Enjoy a comfortable and budget-friendly family stay at Sabitri Guest House, just a 3-minute walk (200m) from Lord Jagannath Temple in Puri, Odisha. Clean AC & Non-AC rooms with warm hospitality.",
    url: "https://sabitriguesthouse.com",
    siteName: "Sabitri Guest House Puri",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabitri Guest House | Budget Family Guest House in Puri",
    description: "Top-rated budget family guest house located just 200m from Shree Jagannath Temple, Puri. Experience warm Odia hospitality.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Sabitri Guest House",
              "description": "Sabitri Guest House is a top-rated, budget-friendly guest house in Puri, located just 200 meters from the holy Shree Jagannath Temple. Clean rooms, warm Odia hospitality, and family-friendly amenities.",
              "image": "https://sabitriguesthouse.com/images/home-hero.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shree Marg, Chudanga Sahi",
                "addressLocality": "Puri",
                "addressRegion": "Odisha",
                "postalCode": "752001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.8049,
                "longitude": 85.8179
              },
              "url": "https://sabitriguesthouse.com",
              "telephone": "+919090148874",
              "priceRange": "INR 600 - 1600",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "227"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Free WiFi",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Air Conditioning",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Daily Housekeeping",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "24-Hour Front Desk",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Odia Breakfast",
                  "value": true
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}

