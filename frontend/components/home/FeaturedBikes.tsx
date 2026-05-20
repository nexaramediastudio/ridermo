"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Bike } from "@/lib/types";
import BikeCard from "@/components/ui/BikeCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { staggerContainer, staggerItem, scrollViewport } from "@/animations/variants";

interface FeaturedBikesProps {
  bikes: Bike[];
}

export default function FeaturedBikes({ bikes }: FeaturedBikesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const featured = bikes.filter((b) => b.featured);
  const display = featured.length > 0 ? featured : bikes;

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-primary"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-tvs-red/[0.06] blur-[100px]"
      />
      <motion.div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Featured"
          title="Curated For Performance"
          description="Our most sought-after TVS models — premium picks with exclusive showroom offers."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8"
        >
          {display.map((bike, i) => (
            <motion.div key={bike.id} variants={staggerItem} className="h-full">
              <div className="h-full [&_article]:h-full [&_article>a]:block [&_article>a]:h-full [&_.glass-card]:flex [&_.glass-card]:h-full [&_.glass-card]:flex-col">
                <BikeCard bike={bike} index={i} animateOnScroll={false} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="/collection">View All 11 Models</Button>
          <span className="text-sm text-gray-text">
            Scooters · Motor Bikes · Mopeds · Electric
          </span>
        </motion.div>
      </div>
    </section>
  );
}
