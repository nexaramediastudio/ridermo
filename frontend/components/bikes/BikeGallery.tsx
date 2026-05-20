"use client";

import { useState } from "react";
import SiteImage from "@/components/ui/SiteImage";
import { siteImage } from "@/lib/images";
import { motion, AnimatePresence } from "framer-motion";

interface BikeGalleryProps {
  images: { imageUrl: string }[];
  name: string;
}

export default function BikeGallery({ images, name }: BikeGalleryProps) {
  const [active, setActive] = useState(0);
  const urls = images.length
    ? images.map((i) => i.imageUrl)
    : [siteImage("hero")];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-secondary">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <SiteImage
              src={urls[active]}
              alt={`${name} - image ${active + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {urls.length > 1 && (
        <div className="flex gap-3">
          {urls.map((url, i) => (
            <button
              key={url}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-20 w-28 overflow-hidden rounded-lg border-2 transition-colors ${
                i === active ? "border-tvs-red" : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <SiteImage src={url} alt="" fill className="object-cover" sizes="112px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
