"use client";

import { motion } from "framer-motion";
import { bikesData } from "@/lib/data/bikes";
import { scrollViewport } from "@/animations/variants";

const models = bikesData.map((b) => b.name);

export default function ModelMarquee() {
  const track = [...models, ...models];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={scrollViewport}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0a0a0a] py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      <div className="marquee-track flex w-max gap-12">
        {track.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-white/25"
          >
            {name}
            <span className="mx-12 text-tvs-red/40">◆</span>
          </span>
        ))}
      </div>
    </motion.section>
  );
}
