"use client";

import { motion } from "framer-motion";
import { Shield, Users, Target, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import SiteImage from "@/components/ui/SiteImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteImage } from "@/lib/images";
import { staggerContainer, staggerItem, scrollViewport } from "@/animations/variants";

const services = [
  "New bike sales",
  "Test rides",
  "Finance assistance",
  "Insurance support",
  "Genuine spare parts",
  "Authorized service center",
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver an exceptional TVS ownership experience through transparency, expertise, and premium service.",
  },
  {
    icon: Shield,
    title: "Why Choose Us",
    text: "Authorized dealer status, competitive pricing, and a team passionate about two-wheelers.",
  },
  {
    icon: Users,
    title: "Our Story",
    text: "Founded with a vision to bring world-class showroom standards to local riders seeking TVS excellence.",
  },
  {
    icon: Wrench,
    title: "Our Services",
    text: "End-to-end support from your first visit to years of reliable after-sales care.",
  },
];

export default function AboutPageView() {
  return (
    <div className="bg-primary pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading
          label="About"
          title="Ridermo TVS Showroom"
          description="Where premium meets performance — your trusted TVS destination."
        />

        <ScrollReveal variant="scale" className="relative mb-20 aspect-[21/9] overflow-hidden rounded-2xl">
          <SiteImage
            src={siteImage("aboutBanner")}
            alt="Ridermo showroom"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid gap-8 md:grid-cols-2"
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="glass-card rounded-2xl p-8 transition-colors duration-300 hover:border-tvs-red/20"
            >
              <item.icon className="mb-4 h-8 w-8 text-tvs-red" />
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-text">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal variant="fadeUp" className="mt-20" delay={0.05}>
          <h2 className="mb-8 text-2xl font-bold text-white">What We Offer</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service}
                variants={staggerItem}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-tvs-red" />
                <span className="text-white">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>

        <ScrollReveal variant="blur" className="mt-16 text-center">
          <Button href="/contact">Get in Touch</Button>
        </ScrollReveal>
      </div>
    </div>
  );
}
