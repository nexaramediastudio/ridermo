"use client";

import { motion } from "framer-motion";
import { BIKE_CATEGORIES } from "@/lib/types";

interface CategoryFilterProps {
  active: string | null;
  onChange: (category: string | null) => void;
}

const allCategories = ["All", ...BIKE_CATEGORIES];

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div
      className="-mx-6 overflow-x-auto overscroll-x-contain px-6 pb-1 scrollbar-hide sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0"
      data-lenis-prevent
    >
      <div className="flex w-max min-w-full flex-nowrap justify-start gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
        {allCategories.map((cat) => {
          const isActive = (cat === "All" && !active) || cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onChange(cat === "All" ? null : cat)}
              className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                isActive ? "text-white" : "text-gray-text hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="category-pill-collection"
                  className="absolute inset-0 rounded-full bg-tvs-red shadow-[0_0_20px_rgba(225,6,0,0.4)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">{cat}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
