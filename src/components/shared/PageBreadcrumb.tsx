"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, ChevronRight } from "lucide-react";

interface Crumb {
  name: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items: [Crumb, ...Crumb[]];
  light?: boolean;
}

export function PageBreadcrumb({ items, light }: PageBreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className={cn(
        "flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-widest font-medium",
        light ? "text-white/60" : "text-stone-400"
      )}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight size={10} className={cn("shrink-0", light ? "text-white/30" : "text-stone-300")} />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className={cn(
                    light
                      ? "text-white/90 font-semibold tracking-wider"
                      : "text-stone-700 font-semibold tracking-wider"
                  )}
                >
                  {i === 0 && <Home size={10} className="inline -mt-0.5 mr-1 opacity-60" />}
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href || "/"}
                  className={cn(
                    "transition-colors inline-flex items-center",
                    light
                      ? "text-white/60 hover:text-white"
                      : "text-stone-400 hover:text-amber-600"
                  )}
                >
                  {i === 0 && <Home size={10} className="inline -mt-0.5 mr-1" />}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
