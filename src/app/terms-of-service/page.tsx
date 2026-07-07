"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/resortData";

export default function TermsOfService() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-28 pb-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the {siteConfig.name} website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">2. Website Use</h2>
            <p>
              You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site. You must not:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the website for any fraudulent or unlawful activity.</li>
              <li>Attempt to gain unauthorized access to our systems.</li>
              <li>Interfere with the proper functioning of the website.</li>
              <li>Upload or distribute malicious software or content.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">3. Booking and Reservations</h2>
            <p>
              All room bookings made through our website or through third-party platforms are subject to availability and confirmation. We reserve the right to cancel or modify bookings under exceptional circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the property of {siteConfig.name} unless otherwise stated. You may not reproduce, distribute, or use any content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">5. Limitation of Liability</h2>
            <p>
              {siteConfig.name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or your stay at our property, to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">6. External Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g., BookOne, MakeMyTrip). We do not endorse or assume responsibility for the content or practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting on this page. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Puri, Odisha.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">9. Contact</h2>
            <div className="p-5 bg-muted rounded-xl space-y-1 text-sm">
              <p><strong>{siteConfig.name}</strong></p>
              <p>{siteConfig.address}</p>
              <p>Phone: <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary hover:underline">{siteConfig.phone}</a></p>
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a></p>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
