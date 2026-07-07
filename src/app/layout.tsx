import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "../index.css";
import { Providers } from "./providers";
import { PageLayout } from "@/components/layout/PageLayout";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sabitri Guest House | Budget Guest House in Puri Near Jagannath Temple",
    template: "%s | Sabitri Guest House Puri",
  },
  description:
    "Sabitri Guest House is Puri's top-rated budget guest house, located just 200 meters from Shree Jagannath Temple. Clean AC/non-AC rooms, family-friendly, 4.7★ rating. Book your affordable stay today!",
  keywords: [
    "Sabitri Guest House",
    "budget guest house in Puri",
    "guest house near Jagannath Temple",
    "hotel near Jagannath Temple",
    "family guest house Puri",
    "best guest house in Puri",
    "affordable hotel Puri",
    "budget hotel near sea beach Puri",
    "stay near Jagannath Temple",
    "Puri accommodation",
    "rooms in Puri",
    "budget stay in Puri",
    "family rooms in Puri",
    "Puri guest house near temple",
    "Sabitri Lodge",
    "cheap hotels in Puri",
    "Puri budget hotels",
    "guest house in Puri for family",
    "lodges in Puri near temple",
    "Puri hotel near beach",
    "budget family hotel Puri",
    "Puri dharamshala",
    "Puri tour packages",
    "Jagannath Puri accommodation",
  ],
  metadataBase: new URL("https://sabitriguesthouse.in"),
  applicationName: "Sabitri Guest House Puri",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  publisher: "Sabitri Guest House",
  creator: "Sabitri Guest House",
  authors: [{ name: "Sabitri Guest House" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/favicon.svg" }],
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#b8860b" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sabitri Guest House | Budget Family Stay near Jagannath Temple, Puri",
    description:
      "Enjoy a comfortable and budget-friendly family stay at Sabitri Guest House, just a 3-minute walk (200m) from Lord Jagannath Temple in Puri, Odisha. Clean AC & Non-AC rooms with warm hospitality.",
    url: "https://sabitriguesthouse.in",
    siteName: "Sabitri Guest House Puri",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Sabitri Guest House - Budget Family Stay near Jagannath Temple, Puri",
      },
      {
        url: "/images/home-hero.png",
        width: 800,
        height: 600,
        alt: "Sabitri Guest House exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sabitriguesthouse",
    creator: "@sabitriguesthouse",
    title: "Sabitri Guest House | Budget Family Guest House in Puri",
    description:
      "Top-rated budget family guest house located just 200m from Shree Jagannath Temple, Puri. Experience warm Odia hospitality.",
    images: ["/opengraph.jpg"],
  },
  category: "travel",
  classification: "Hotel Accommodation",
  other: {
    "theme-color": "#fcf9f4",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Sabitri Guest House",
    "format-detection": "telephone=yes",
    "geo.region": "IN-OD",
    "geo.placename": "Puri",
    "geo.position": "19.808070;85.820156",
    "ICBM": "19.808070, 85.820156",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sabitriguesthouse.in/#organization",
      "name": "Sabitri Guest House",
      "alternateName": ["Sabitri Lodge", "Sabitri Homestay Puri"],
      "url": "https://sabitriguesthouse.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sabitriguesthouse.in/favicon.svg",
        "width": 512,
        "height": 512,
      },
      "description":
        "Budget family guest house located 200m from Shree Jagannath Temple, Puri. Clean rooms, warm Odia hospitality since 2008.",
      "foundingDate": "2008",
      "email": "sabitriguesthousepuri@gmail.com",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61574277167203",
        "https://www.instagram.com/sabitriguesthousepuri/",
        "https://sabitriguesthouse.in",
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shree Marg, Chudanga Sahi",
        "addressLocality": "Puri",
        "addressRegion": "Odisha",
        "postalCode": "752001",
        "addressCountry": "IN",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919078240376",
        "contactType": "reservations",
        "availableLanguage": ["English", "Hindi", "Odia", "Bengali"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59",
        },
      },
    },
    {
      "@type": "Hotel",
      "@id": "https://sabitriguesthouse.in/#hotel",
      "name": "Sabitri Guest House",
      "alternateName": ["Sabitri Lodge Puri", "Sabitri Homestay"],
      "description":
        "Sabitri Guest House is a top-rated, budget-friendly guest house in Puri, located just 200 meters from the holy Shree Jagannath Temple. Clean rooms, warm Odia hospitality, and family-friendly amenities.",
      "image": [
        "https://sabitriguesthouse.in/images/home-hero.png",
        "https://sabitriguesthouse.in/opengraph.jpg",
        "https://sabitriguesthouse.in/room4 (1).avif",
      ],
      "url": "https://sabitriguesthouse.in",
      "telephone": "+919078240376",
      "email": "sabitriguesthousepuri@gmail.com",
      "priceRange": "₹1,500 – ₹2,000",
      "currenciesAccepted": "INR",
      "paymentAccepted": ["Cash", "UPI", "Credit Card", "Debit Card"],
      "checkinTime": "12:00",
      "checkoutTime": "11:00",
      "parentOrganization": { "@id": "https://sabitriguesthouse.in/#organization" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shree Marg, Chudanga Sahi",
        "addressLocality": "Puri",
        "addressRegion": "Odisha",
        "postalCode": "752001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.808069569109232,
        "longitude": 85.82015639999999,
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "227",
        "bestRating": "5",
        "worstRating": "1",
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "24-Hour Front Desk", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Complimentary Breakfast", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Hot & Cold Water", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "CCTV Security", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Geyser", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Flat-Screen TV", "value": true },
      ],
      "containsPlace": {
        "@type": "Place",
        "name": "Shree Jagannath Temple",
        "distance": "200m",
        "containedInPlace": { "@type": "City", "name": "Puri" },
      },
      "nearby": [
        { "@type": "Place", "name": "Puri Beach", "distance": "1 km" },
        { "@type": "Place", "name": "Konark Sun Temple", "distance": "35 km" },
        { "@type": "Place", "name": "Chilika Lake", "distance": "50 km" },
      ],
      "numberOfRooms": 24,
      "petsAllowed": false,
      "starRating": { "@type": "Rating", "ratingValue": "3" },
    },
    {
      "@type": "WebSite",
      "@id": "https://sabitriguesthouse.in/#website",
      "url": "https://sabitriguesthouse.in",
      "name": "Sabitri Guest House",
      "alternateName": ["Sabitri Guest House Puri", "Sabitri Lodge Puri"],
      "description": "Budget family guest house in Puri near Jagannath Temple.",
      "about": {
        "@type": "Hotel",
        "name": "Sabitri Guest House",
        "url": "https://sabitriguesthouse.in",
      },
      "inLanguage": "en-IN",
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://sabitriguesthouse.in/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://bookone.io/Sabitri-Guest-House?bookingEngine=true",
            "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sabitriguesthouse.in/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sabitriguesthouse.in" },
        { "@type": "ListItem", "position": 2, "name": "Rooms & Suites", "item": "https://sabitriguesthouse.in/rooms" },
        { "@type": "ListItem", "position": 3, "name": "Experiences", "item": "https://sabitriguesthouse.in/experiences" },
        { "@type": "ListItem", "position": 4, "name": "About Us", "item": "https://sabitriguesthouse.in/about" },
        { "@type": "ListItem", "position": 5, "name": "Around Us", "item": "https://sabitriguesthouse.in/around" },
        { "@type": "ListItem", "position": 6, "name": "Contact Us", "item": "https://sabitriguesthouse.in/contact" },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://sabitriguesthouse.in/#localbusiness",
      "name": "Sabitri Guest House",
      "description": "Budget family guest house near Jagannath Temple, Puri. Clean rooms, warm hospitality.",
      "url": "https://sabitriguesthouse.in",
      "telephone": "+919078240376",
      "priceRange": "₹1,500 – ₹2,000",
      "openingHours": "Mo-Su 00:00-23:59",
      "image": "https://sabitriguesthouse.in/images/home-hero.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shree Marg, Chudanga Sahi",
        "addressLocality": "Puri",
        "addressRegion": "Odisha",
        "postalCode": "752001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.808069569109232,
        "longitude": 85.82015639999999,
      },
      "areaServed": [
        { "@type": "City", "name": "Puri" },
        { "@type": "State", "name": "Odisha" },
        { "@type": "Country", "name": "India" },
      ],
      "serviceArea": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 19.80807, "longitude": 85.82016 }, "geoRadius": "50000" },
    },
    {
      "@type": "Product",
      "@id": "https://sabitriguesthouse.in/#room-deluxe-ac",
      "name": "Deluxe AC Room - Sabitri Guest House",
      "description": "Spacious air-conditioned room with king-size bed, attached bathroom, geyser, high-speed WiFi, and flat-screen TV. Perfect for couples and small families.",
      "image": "https://sabitriguesthouse.in/room4 (1).avif",
      "offers": {
        "@type": "Offer",
        "price": "2000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://sabitriguesthouse.in/rooms",
        "priceValidUntil": "2027-12-31",
      },
      "category": "Hotel Room",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${cormorantGaramond.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://bookone.io" />
        <link rel="dns-prefetch" href="https://bookone.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-amber-500 focus:text-white focus:rounded-full focus:text-sm focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}
