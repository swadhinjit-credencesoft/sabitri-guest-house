import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { BlogJsonLd } from "@/components/blog/BlogJsonLd";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://sabitriguesthouse.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <BlogJsonLd
        title={post.title}
        description={post.description}
        url={`https://${siteConfig.website}/blog/${post.slug}`}
        image={`https://${siteConfig.website}${post.image}`}
        datePublished={post.date}
        dateModified={post.date}
        authorName={siteConfig.name}
        publisherName={siteConfig.name}
        publisherLogo={`https://${siteConfig.website}/favicon.svg`}
      />

      <article className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-stone-500 mb-4">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span className="text-stone-300">|</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="relative aspect-[2/1] mb-12 overflow-hidden rounded-xl">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="prose prose-stone prose-lg max-w-none">
            {post.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-stone-600 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-stone-50 rounded-xl border border-stone-200">
            <div className="text-center">
              <h3 className="font-serif text-2xl text-stone-900 mb-3">
                Plan Your Stay at Sabitri Guest House
              </h3>
              <p className="text-stone-600 mb-6 max-w-lg mx-auto">
                Located just 200m from Jagannath Temple, we offer clean, affordable rooms with free WiFi,
                complimentary breakfast, and warm Odia hospitality. Book directly for the best rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/rooms"
                  className="inline-block rounded-full px-8 py-4 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs font-medium transition-colors"
                >
                  View Rooms
                </Link>
                <a
                  href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-8 py-4 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 uppercase tracking-widest text-xs font-medium transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-amber-600 hover:text-amber-700 underline underline-offset-4 text-sm"
            >
              &larr; Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
