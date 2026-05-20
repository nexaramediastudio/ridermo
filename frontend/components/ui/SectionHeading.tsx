"use client";

import { motion } from "framer-motion";
import { fadeUp, scrollViewport } from "@/animations/variants";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className={`mb-16 flex max-w-3xl flex-col ${alignClass}`}
    >
      {label && (
        <span className="mb-4 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-tvs-red">
          <span className="h-px w-8 bg-tvs-red/60" />
          {label}
          {align === "center" && <span className="h-px w-8 bg-tvs-red/60" />}
        </span>
      )}
      <h2
        className={`text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] ${
          light ? "text-white/90" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-text md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
