interface Testimonial {
  quote: string;
  guest: string;
  origin: string;
  stars: number;
}

interface ReviewJsonLdProps {
  testimonials: Testimonial[];
  itemReviewedName: string;
  itemReviewedUrl: string;
}

export function ReviewJsonLd({
  testimonials,
  itemReviewedName,
  itemReviewedUrl,
}: ReviewJsonLdProps) {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@graph": testimonials.map((t, i) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.guest },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.stars,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: t.quote,
      itemReviewed: {
        "@type": "Hotel",
        name: itemReviewedName,
        url: itemReviewedUrl,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}
