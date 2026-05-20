"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { blurReveal, scrollViewport } from "@/animations/variants";

export default function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={blurReveal}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] px-8 py-20 text-center md:px-20 md:py-28"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-tvs-red/15 via-[#121212] to-[#0B0B0B]" />
          <motion.div
            className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-tvs-red/20 blur-[100px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-tvs-red/10 blur-[100px]"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative">
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-tvs-red">
              Start Your Journey
            </span>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
              Ready to Ride?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base text-gray-text md:text-lg">
              Book a test ride, get a finance quote, or speak with our team. Your next TVS is one
              visit away.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" className="group min-w-[180px]">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/collection" variant="secondary" className="min-w-[180px]">
                Browse Collection
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
