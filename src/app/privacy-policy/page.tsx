"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/resortData";

export default function PrivacyPolicy() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-28 pb-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">1. Introduction</h2>
            <p>
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a booking with us.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, mailing address, and government ID details provided during booking.</li>
              <li><strong>Booking Information:</strong> Check-in/out dates, room preferences, special requests, and payment details.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and referring URLs.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device type.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>To process and confirm your room reservations.</li>
              <li>To communicate with you regarding your booking, check-in instructions, and stay details.</li>
              <li>To improve our website, services, and guest experience.</li>
              <li>To send promotional offers and updates with your consent.</li>
              <li>To comply with legal obligations and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, or managing bookings, provided they agree to keep your information confidential.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">6. Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites such as BookOne (our booking engine), MakeMyTrip, and other travel platforms. We are not responsible for the privacy practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access, update, or delete your personal information held by us.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Request a copy of the data we hold about you.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="mt-3 p-5 bg-muted rounded-xl space-y-1 text-sm">
              <p><strong>{siteConfig.name}</strong></p>
              <p>{siteConfig.address}</p>
              <p>Phone: <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary hover:underline">{siteConfig.phone}</a></p>
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a></p>
              <p>WhatsApp: <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{siteConfig.phone}</a></p>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
