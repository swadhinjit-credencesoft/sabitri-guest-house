"use client";

import { ReactNode } from "react";

interface GSAPTextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function GSAPTextReveal({
  children,
  className = "",
}: GSAPTextRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface GSAPStaggerRevealProps {
  children: ReactNode;
  className?: string;
  selector?: string;
  stagger?: number;
  duration?: number;
  yOffset?: number;
}

export function GSAPStaggerReveal({
  children,
  className = "",
}: GSAPStaggerRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
