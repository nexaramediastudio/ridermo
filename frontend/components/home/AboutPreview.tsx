"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import SiteImage from "@/components/ui/SiteImage";
import { siteImage } from "@/lib/images";
import { blurReveal, fadeUp, scrollViewport } from "@/animations/variants";

export default function AboutPreview() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-secondary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.08] lg:aspect-[4/3]">
              <motion.div className="absolute inset-0" style={{ y: imageY }}>
                <SiteImage
                  src={siteImage("aboutPreview")}
                  alt="Ridermo Showroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/10 bg-[#0B0B0B]/90 px-6 py-4 backdrop-blur-xl md:-right-8">
              <p className="text-3xl font-bold text-tvs-red">11</p>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-text">
                Models In Stock
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-tvs-red">
              <span className="h-px w-8 bg-tvs-red/60" />
              Our Showroom
            </span>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              Where Passion
              <br />
              Meets Precision
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-text md:text-lg">
              Ridermo is your destination for premium TVS two-wheelers. Transparent pricing,
              expert guidance, and after-sales care — everything a serious rider expects.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-10">
              {[
                { value: "10+", label: "Years" },
                { value: "5000+", label: "Riders" },
                { value: "100%", label: "Genuine" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-gray-text">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/about" variant="secondary">
                Discover Ridermo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
