import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "404 – Page Not Found",
  description: "The page you are looking for does not exist at Sabitri Guest House. Return to our homepage to explore budget accommodation in Puri.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 – Page Not Found</h1>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full px-6 py-3 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs"
          >
            Return Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
