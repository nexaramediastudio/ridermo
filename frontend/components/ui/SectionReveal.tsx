"use client";

import { motion, type Variants } from "framer-motion";
import { blurReveal, fadeUp, scrollViewport } from "@/animations/variants";

type RevealVariant = "fadeUp" | "blur";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  once?: boolean;
}

const variants: Record<RevealVariant, Variants> = {
  fadeUp,
  blur: blurReveal,
};

export default function SectionReveal({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  once = true,
}: SectionRevealProps) {
  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...scrollViewport, once }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
