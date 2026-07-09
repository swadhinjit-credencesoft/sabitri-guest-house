import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActionWidget } from "@/components/shared/FloatingActionWidget";
import { CookieConsent } from "@/components/shared/CookieConsent";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingActionWidget />
      <CookieConsent />
    </div>
  );
}
