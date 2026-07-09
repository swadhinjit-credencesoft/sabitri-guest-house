interface WebPageJsonLdProps {
  url: string;
  name: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export function WebPageJsonLd({ url, name, description, image, datePublished, dateModified }: WebPageJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name,
    description,
    isPartOf: {
      "@id": "https://sabitriguesthouse.in/#website",
    },
  };

  if (image) schema.image = image;
  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
