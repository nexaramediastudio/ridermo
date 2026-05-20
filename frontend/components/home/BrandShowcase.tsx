"use client";

import { motion } from "framer-motion";
import { Shield, Award, Wrench, Headphones } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem, scrollViewport } from "@/animations/variants";

const values = [
  {
    icon: Shield,
    title: "Authorized Dealer",
    description: "Genuine TVS with full manufacturer warranty and official support.",
    span: "lg:col-span-2",
  },
  {
    icon: Award,
    title: "Premium Experience",
    description: "A luxury showroom environment built for discerning riders.",
    span: "lg:col-span-1",
  },
  {
    icon: Wrench,
    title: "Expert Service",
    description: "Certified technicians and genuine spare parts.",
    span: "lg:col-span-1",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal guidance from inquiry through delivery and beyond.",
    span: "lg:col-span-2",
  },
];

export default function BrandShowcase() {
  return (
    <section className="section-padding relative bg-secondary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Why Ridermo"
          title="Engineered Trust. Delivered Daily."
          description="Every visit reflects the precision and passion behind TVS — and the premium standard we hold ourselves to."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-tvs-red/25 hover:bg-white/[0.04] ${item.span}`}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-tvs-red/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-tvs-red/20 bg-tvs-red/10 text-tvs-red transition-all duration-300 group-hover:border-tvs-red group-hover:bg-tvs-red group-hover:text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-medium tabular-nums text-white/20">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
