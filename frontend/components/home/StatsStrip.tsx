"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, scrollViewport } from "@/animations/variants";

const stats = [
  { value: "11", label: "TVS Models" },
  { value: "3", label: "Categories" },
  { value: "24h", label: "Finance Approval" },
  { value: "100%", label: "Genuine Parts" },
];

export default function StatsStrip() {
  return (
    <section className="relative border-b border-white/[0.06] bg-secondary/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid grid-cols-2 divide-x divide-white/[0.06] md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="flex flex-col items-center justify-center py-10 md:py-12"
            >
              <span className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-text">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
