"use client";

import SiteImage from "@/components/ui/SiteImage";
import { siteImage } from "@/lib/images";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Bike } from "@/lib/types";
import { formatPrice, hasDiscount } from "@/lib/data/bikes";
import { fadeUp } from "@/animations/variants";

interface BikeCardProps {
  bike: Bike;
  index?: number;
  /** When false, parent handles scroll-in animation (stagger / fade). Default true. */
  animateOnScroll?: boolean;
}

export default function BikeCard({
  bike,
  index = 0,
  animateOnScroll = true,
}: BikeCardProps) {
  const imageUrl = bike.images[0]?.imageUrl ?? siteImage("hero");

  const badgeLabel =
    bike.fuelType === "Electric" ? "Electric" : `${bike.engineCc}cc`;

  const inner = (
    <Link href={`/bikes/${bike.slug}`} className="block">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card overflow-hidden rounded-2xl border border-white/[0.08] transition-shadow duration-500 group-hover:border-tvs-red/30 group-hover:shadow-[0_0_40px_rgba(225,6,0,0.15)]"
      >
        <motion.div
          className="relative aspect-[4/3] overflow-hidden bg-secondary"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0"
            variants={{ hover: { scale: 1.08 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SiteImage
              src={imageUrl}
              alt={bike.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80"
            variants={{ hover: { opacity: 0.6 } }}
          />
          <span className="absolute left-4 top-4 rounded-full bg-tvs-red/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {badgeLabel}
          </span>
          {hasDiscount(bike) && (
            <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-tvs-red backdrop-blur-sm">
              Save {formatPrice(bike.discount!)}
            </span>
          )}
        </motion.div>

        <motion.div className="p-6" variants={{ hover: { y: -2 } }}>
          <p className="text-xs font-medium uppercase tracking-wider text-tvs-red">
            {bike.category} · {bike.fuelType}
          </p>
          <h3 className="mt-2 text-xl font-bold text-white">{bike.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-gray-text">{bike.description}</p>
          <div className="mt-5">
            {hasDiscount(bike) && (
              <p className="text-sm text-gray-text line-through">
                MRP {formatPrice(bike.mrp)}
              </p>
            )}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">
                {formatPrice(bike.price)}
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold text-tvs-red transition-colors group-hover:text-white">
                Explore
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );

  if (animateOnScroll) {
    return (
      <motion.article variants={fadeUp} custom={index} className="group relative">
        {inner}
      </motion.article>
    );
  }

  return <article className="group relative">{inner}</article>;
}
