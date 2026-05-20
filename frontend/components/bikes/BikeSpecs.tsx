"use client";

import { motion } from "framer-motion";
import { Gauge, Fuel, Tag } from "lucide-react";
import type { Bike } from "@/lib/types";
import { formatPrice, hasDiscount } from "@/lib/data/bikes";
import { fadeUp, staggerContainer } from "@/animations/variants";

interface BikeSpecsProps {
  bike: Bike;
}

export default function BikeSpecs({ bike }: BikeSpecsProps) {
  const finance = bike.financeOptions?.[0];
  const specs = [
    {
      icon: Gauge,
      label: bike.fuelType === "Electric" ? "Motor" : "Engine",
      value: bike.fuelType === "Electric" ? "3.5 kW" : `${bike.engineCc} cc`,
    },
    { icon: Fuel, label: "Fuel", value: bike.fuelType },
    { icon: Tag, label: "Category", value: bike.category },
  ];

  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm font-medium uppercase tracking-wider text-tvs-red">
          {bike.category} · {bike.fuelType}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {bike.name}
        </h1>

        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-text">MRP</p>
              <p
                className={`mt-1 text-lg font-semibold ${
                  hasDiscount(bike) ? "text-gray-text line-through" : "text-white"
                }`}
              >
                {formatPrice(bike.mrp)}
              </p>
            </div>
            {hasDiscount(bike) && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-text">Discount</p>
                <p className="mt-1 text-lg font-semibold text-tvs-red">
                  −{formatPrice(bike.discount!)}
                </p>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-text">Selling Price</p>
              <p className="mt-1 text-2xl font-bold text-white">{formatPrice(bike.price)}</p>
            </div>
          </div>
        </div>

        <p className="mt-4 leading-relaxed text-gray-text">{bike.description}</p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {specs.map((spec) => (
          <motion.div
            key={spec.label}
            variants={fadeUp}
            className="glass-card rounded-xl p-5 text-center"
          >
            <spec.icon className="mx-auto h-6 w-6 text-tvs-red" />
            <p className="mt-2 text-xs uppercase tracking-wider text-gray-text">{spec.label}</p>
            <p className="mt-1 font-semibold text-white">{spec.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {bike.features.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Key Features</h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {bike.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-gray-text before:h-1.5 before:w-1.5 before:rounded-full before:bg-tvs-red"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {finance && (
        <div className="rounded-2xl border border-tvs-red/20 bg-tvs-red/5 p-6">
          <h3 className="font-bold text-white">Finance Available</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-gray-text">Down Payment</p>
              <p className="font-semibold text-white">{formatPrice(finance.downPayment)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-text">Monthly EMI</p>
              <p className="font-semibold text-white">{formatPrice(finance.monthlyPayment)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-text">Duration</p>
              <p className="font-semibold text-white">{finance.durationMonths} months</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
