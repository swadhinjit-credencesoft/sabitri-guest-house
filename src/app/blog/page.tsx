"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { getWhatsAppBookingUrl } from "@/data/site";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";

export default function BlogPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-x-hidden">
      <section className="relative">
        <div className="absolute top-20 left-0 right-0 z-20 container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <PageBreadcrumb light items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
        </div>
        <CinematicHero
        bgImage="/jagannathmandir3.jpg"
        altText="Sabitri Guest House travel blog - Puri travel guides and tips"
        eyebrow="Sabitri Guest House"
        title={
          <>
            Puri Travel<br /><span className="text-amber-400 italic">Blog &amp; Guides</span>
          </>
        }
        subtitle="Expert travel guides, tips, and local insights to help you plan the perfect trip to Puri, Odisha."
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="text-amber-600 uppercase tracking-widest text-xs font-medium">Book Direct & Save</span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3 mb-4">
            Stay at Sabitri Guest House — Just 200m from <span className="text-amber-600 italic">Jagannath Temple</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8 text-lg">
            Clean AC & Non-AC rooms &bull; Free WiFi &bull; 4.7&starf; Rating &bull; From ₹1,500/night
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-10 py-5 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-sm font-semibold transition-colors shadow-lg shadow-amber-500/30"
            >
              Book Your Stay Now
            </a>
            <Link
              href="/rooms"
              className="inline-block rounded-full px-10 py-5 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 uppercase tracking-widest text-sm font-medium transition-colors"
            >
              View Rooms & Pricing
            </Link>
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-10 py-5 bg-green-500 text-white hover:bg-green-600 uppercase tracking-widest text-xs font-medium transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-stone-900">Explore Our Travel Guides</h2>
            <p className="text-stone-500 mt-2">Plan your perfect Puri trip with our detailed articles</p>
          </div>

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

      <section className="py-16 bg-stone-900 text-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to Experience Puri?
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-8">
            Book your stay at Sabitri Guest House and enjoy the best of Puri — spirituality, beaches, and warm Odia hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-10 py-5 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-sm font-semibold transition-colors shadow-lg shadow-amber-500/30"
            >
              Book Now — From ₹1,500/night
            </a>
            <a
              href="tel:+919078240376"
              className="inline-block rounded-full px-10 py-5 border border-white/30 text-white hover:bg-white/10 uppercase tracking-widest text-sm transition-colors"
            >
              Call +91 90782 40376
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
