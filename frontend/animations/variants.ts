import type { HTMLMotionProps } from "framer-motion";

/** `motion` viewport options (Framer Motion v12+ no longer exports `Viewport`). */
export type MotionViewport = NonNullable<HTMLMotionProps<"div">["viewport"]>;

/** Default viewport for scroll reveals — enter slightly before element is centered */
export const scrollViewport: MotionViewport = {
  once: true,
  margin: "-12% 0px -8% 0px",
  amount: 0.15,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" as const },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const heroZoom = {
  initial: { scale: 1.1 },
  animate: {
    scale: 1,
    transition: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" as const },
  },
};

export const blurReveal = {
  hidden: { opacity: 0, filter: "blur(14px)", y: 28 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};
