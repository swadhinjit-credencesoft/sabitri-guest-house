"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { CinematicHero } from "@/components/layout/CinematicHero";

export default function BlogPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-x-hidden">
      <CinematicHero
        bgImage="/jagannathmandir3.jpg"
        altText="Sabitri Guest House travel blog - Puri travel guides and tips"
        eyebrow="Sabitri Guest House"
        title={
          <>
            Travel Blog &amp;<br /><span className="text-amber-400 italic">Guides</span>
          </>
        }
        subtitle="Expert travel guides, tips, and local insights to help you plan the perfect trip to Puri, Odisha."
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />

      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span className="text-stone-300">|</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl text-stone-900 group-hover:text-amber-700 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <span className="inline-block mt-4 text-amber-600 text-xs font-medium uppercase tracking-wider group-hover:underline">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
