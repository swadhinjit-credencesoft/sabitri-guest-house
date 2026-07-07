import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sabitri Guest House in Puri — established 2008, located 200m from Shree Jagannath Temple. Budget-friendly family accommodation with warm Odia hospitality. 4.7★ rated on Justdial with 227+ reviews.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Sabitri Guest House Puri",
    description:
      "Founded in 2008, Sabitri Guest House offers clean budget accommodation 200m from Jagannath Temple. Family-run, 4.7★ rated, serving pilgrims for 15+ years. Read our story.",
    url: "https://sabitriguesthouse.in/about",
    images: [
      {
        url: "/sabitri3 (1).avif",
        width: 1200,
        height: 630,
        alt: "Sabitri Guest House lobby and reception area in Puri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Sabitri Guest House Puri",
    description:
      "Family-run guest house near Jagannath Temple since 2008. 4.7★ rated, budget-friendly. Read our story.",
    images: ["/sabitri3 (1).avif"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
