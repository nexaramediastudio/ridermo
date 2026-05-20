"use client";

import { motion, type Variants } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  blurReveal,
  slideInLeft,
  slideInRight,
  scaleIn,
  scrollViewport,
  type MotionViewport,
} from "@/animations/variants";

const presets = {
  fadeUp,
  fadeIn,
  blur: blurReveal,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
  scale: scaleIn,
} as const;

export type ScrollRevealPreset = keyof typeof presets;

function withDelay(variant: Variants, delay: number): Variants {
  const vis = variant.visible;
  if (typeof vis !== "object" || vis === null) return variant;
  const v = vis as Record<string, unknown>;
  const t = v.transition;
  const transition =
    typeof t === "object" && t !== null ? { ...(t as object), delay } : { delay };
  return {
    hidden: variant.hidden,
    visible: { ...v, transition },
  };
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: ScrollRevealPreset;
  delay?: number;
  once?: boolean;
  viewport?: MotionViewport;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  once = true,
  viewport = scrollViewport,
}: ScrollRevealProps) {
  const base = presets[variant];
  const variants = delay > 0 ? withDelay(base, delay) : base;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, once }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
