"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Bike } from "@/lib/types";
import BikeCard from "@/components/ui/BikeCard";
import CategoryFilter from "@/components/bikes/CategoryFilter";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem, scrollViewport } from "@/animations/variants";

interface CollectionClientProps {
  bikes: Bike[];
}

export default function CollectionClient({ bikes }: CollectionClientProps) {
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!category) return bikes;
    return bikes.filter((b) => b.category === category);
  }, [bikes, category]);

  return (
    <>
      <SectionHeading
        label="Collection"
        title="TVS Motorcycle Lineup"
        description="Explore our complete range — from Apache sport bikes to premium scooters."
      />

      <div className="mb-10 sm:mb-12">
        <CategoryFilter active={category} onChange={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={scrollViewport}
          className="text-center text-gray-text"
        >
          No bikes found in this category.
        </motion.p>
      ) : (
        <motion.div
          key={category ?? "all"}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid min-w-0 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
          {filtered.map((bike, i) => (
            <motion.div key={bike.id} variants={staggerItem} className="min-w-0">
              <BikeCard bike={bike} index={i} animateOnScroll={false} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
