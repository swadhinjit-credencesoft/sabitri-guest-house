import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Sabitri Guest House in Puri. Call +91 90782 40376, email us, or use our online booking engine. Available 24/7 for reservations and inquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
