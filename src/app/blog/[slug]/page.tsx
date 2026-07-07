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

  const midIndex = Math.ceil(post.sections.length / 2);

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

      <article className="pt-28 pb-24">
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
                {i === midIndex - 1 && (
                  <div className="my-10 p-6 bg-gradient-to-br from-amber-50 to-stone-50 rounded-xl border border-amber-200">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="flex-1 text-center sm:text-left">
                        <p className="font-serif text-xl text-stone-900">
                          Plan Your Stay at Sabitri Guest House
                        </p>
                        <p className="text-stone-500 text-sm mt-1">
                          200m from Jagannath Temple &bull; Rooms from ₹1,500
                        </p>
                      </div>
                      <div className="flex gap-3 shrink-0">
                        <a
                          href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full px-6 py-3 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs font-semibold transition-colors shadow-lg shadow-amber-500/30"
                        >
                          Book Now
                        </a>
                        <a
                          href="https://wa.me/919078240376"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full px-5 py-3 bg-green-500 text-white hover:bg-green-600 uppercase tracking-widest text-xs font-medium transition-colors"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 md:p-12 bg-stone-900 rounded-xl text-center">
            <span className="text-amber-400 uppercase tracking-widest text-xs font-medium">Book Direct & Save</span>
            <h3 className="font-serif text-3xl text-white mt-3 mb-2">
              Ready to Book Your Stay?
            </h3>
            <p className="text-stone-400 max-w-lg mx-auto mb-2">
              Sabitri Guest House &bull; 200m from Jagannath Temple &bull; 1km from Puri Beach
            </p>
            <p className="text-amber-400 text-xl font-semibold mb-8">
              Rooms from ₹1,500/night &bull; Free WiFi &bull; Breakfast Included
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-10 py-5 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-sm font-semibold transition-colors shadow-lg shadow-amber-500/30"
              >
                Book Now
              </a>
              <Link
                href="/rooms"
                className="inline-block rounded-full px-10 py-5 border border-white/30 text-white hover:bg-white/10 uppercase tracking-widest text-sm transition-colors"
              >
                View All Rooms
              </Link>
              <a
                href="tel:+919078240376"
                className="inline-block rounded-full px-10 py-5 border border-white/30 text-white hover:bg-white/10 uppercase tracking-widest text-sm transition-colors"
              >
                Call +91 90782 40376
              </a>
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
