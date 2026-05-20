"use client";

import { motion } from "framer-motion";
import { CreditCard, Percent, Clock, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { staggerContainer, staggerItem, scrollViewport } from "@/animations/variants";

const perks = [
  {
    icon: Percent,
    title: "Low Down Payment",
    text: "Plans from Rs. 50,000 down — flexible for every budget.",
  },
  {
    icon: CreditCard,
    title: "Easy EMI",
    text: "Spread payments up to 36 months with quick approval.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    text: "Get finance approval within 24 hours at our showroom.",
  },
];

export default function FinanceSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_100%_50%,rgba(225,6,0,0.1),transparent)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              label="Finance"
              title="Own Your TVS. On Your Terms."
              description="Transparent financing with showroom-exclusive rates — ride home sooner."
              align="left"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={scrollViewport}
              className="hidden lg:block"
            >
              <p className="text-7xl font-bold tracking-tighter text-white/[0.04]">FINANCE</p>
            </motion.div>
          </div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="space-y-4"
          >
            {perks.map((perk) => (
              <motion.li
                key={perk.title}
                variants={staggerItem}
                className="group flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-tvs-red/20 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tvs-red/10 text-tvs-red transition-colors group-hover:bg-tvs-red group-hover:text-white">
                  <perk.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{perk.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-text">{perk.text}</p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/20 transition-all group-hover:text-tvs-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.li>
            ))}
            <li className="pt-4">
              <Button href="/contact">Get Finance Quote</Button>
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
