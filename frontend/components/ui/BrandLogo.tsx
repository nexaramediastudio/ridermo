"use client";

import { useState } from "react";
import Image from "next/image";
import { siteLogoSrc } from "@/lib/images";

interface BrandLogoProps {
  /** Box size (logo scales inside with object-contain) */
  size?: number;
  className?: string;
  showFallbackLetter?: boolean;
}

/**
 * Showroom logo — add your file at public/site/logo.png (PNG/SVG as PNG recommended).
 * Falls back to “R” if the file is missing.
 */
export default function BrandLogo({
  size = 64,
  className = "",
  showFallbackLetter = true,
}: BrandLogoProps) {
  const [missing, setMissing] = useState(false);

  if (missing && showFallbackLetter) {
    return (
      <span
        className={`flex items-center justify-center text-2xl font-bold text-tvs-red ${className}`}
        style={{ width: size, height: size }}
      >
        R
      </span>
    );
  }

  return (
    <Image
      src={siteLogoSrc()}
      alt="Ridermo logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      unoptimized
      priority
      onError={() => setMissing(true)}
    />
  );
}
