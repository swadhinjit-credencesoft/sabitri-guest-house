import type { Metadata } from "next";
import "../index.css";
import { Providers } from "./providers";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Resort Hotel",
  description: "Resort Hotel — built on Replit. Update this description to reflect the app.",
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Resort Hotel",
    description: "Resort Hotel — built on Replit. Update this description to reflect the app.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resort Hotel",
    description: "Resort Hotel — built on Replit. Update this description to reflect the app.",
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
      </head>
      <body>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}

