"use client";

import Image, { type ImageProps } from "next/image";
import { isLocalImage, withImageCacheBust } from "@/lib/images";

type SiteImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/**
 * Use for all site images. Local files in /public/bikes/ or /public/site/
 * skip heavy caching so replacements show after bumping IMAGE_VERSION.
 */
export default function SiteImage({ src, alt, ...props }: SiteImageProps) {
  const base = src.split("?")[0];
  const resolvedSrc = isLocalImage(base) ? withImageCacheBust(base) : src;
  const local = isLocalImage(resolvedSrc);

  return (
    <Image
      {...props}
      src={resolvedSrc}
      alt={alt}
      unoptimized={local}
    />
  );
}
