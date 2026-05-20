"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SiteImage from "@/components/ui/SiteImage";
import { siteImage } from "@/lib/images";
import { fadeIn, fadeUp } from "@/animations/variants";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-16 sm:pb-20 md:pb-0"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imageY, scale: imageScale }}
      >
        <SiteImage
          src={siteImage("hero")}
          alt="TVS Motorcycle Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <motion.div className="grain absolute inset-0 opacity-[0.35]" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/85 via-[#0B0B0B]/35 to-[#0B0B0B]" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(225,6,0,0.22),transparent)]"
        aria-hidden
      />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B0B0B] to-transparent" />

      <motion.div
        className="pointer-events-none absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-tvs-red/15 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-28 text-center lg:px-8 lg:pt-32"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tvs-red opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-tvs-red" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90">
            Authorized TVS Dealer
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white"
        >
          <span className="block">Ride Beyond</span>
          <span className="mt-1 block bg-gradient-to-r from-white via-white/90 to-tvs-red bg-clip-text text-transparent">
            Ordinary
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.12 }}
          className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-gray-text md:text-lg"
        >
          Premium TVS showroom — 11 models, transparent pricing, and a buying experience
          crafted for riders who demand more.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.24 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/collection" className="group min-w-[200px]">
            Explore Collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button href="/contact" variant="secondary" className="min-w-[200px]">
            Book Test Ride
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
