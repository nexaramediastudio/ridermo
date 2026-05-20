"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-tvs-red text-white shadow-[0_0_30px_rgba(225,6,0,0.35)] hover:shadow-[0_0_40px_rgba(225,6,0,0.55)] hover:bg-red-600",
  secondary:
    "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-tvs-red/50 hover:bg-white/10",
  ghost: "text-gray-text hover:text-white",
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    const isProtocolLink =
      href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("https://wa.me/");
    if (external && !isProtocolLink) {
      return (
        <motion.a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...motionProps}>
          {children}
        </motion.a>
      );
    }
    if (external || isProtocolLink) {
      return (
        <motion.a href={href} className={classes} {...motionProps}>
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
