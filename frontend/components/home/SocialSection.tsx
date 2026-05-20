"use client";

import { motion } from "framer-motion";
import { Camera, Share2, MessageCircle, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SOCIAL_LINKS, WHATSAPP_DISPLAY } from "@/lib/constants";
import { staggerContainer, staggerItem, scrollViewport } from "@/animations/variants";

const platforms = [
  { name: "Instagram", icon: Camera, href: SOCIAL_LINKS.instagram, handle: "@ridermo.co" },
  { name: "Facebook", icon: Share2, href: SOCIAL_LINKS.facebook, handle: "ridermo.co" },
  { name: "WhatsApp", icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, handle: WHATSAPP_DISPLAY },
];

export default function SocialSection() {
  return (
    <section className="section-padding relative bg-primary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Connect"
          title="Stay In The Fast Lane"
          description="Follow for new arrivals, exclusive offers, and stories from the road."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid gap-4 md:grid-cols-3"
        >
          {platforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors hover:border-tvs-red/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-tvs-red/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <platform.icon className="h-7 w-7 text-tvs-red" />
                <ExternalLink className="h-4 w-4 text-white/20 transition-colors group-hover:text-white/60" />
              </div>
              <p className="relative mt-6 text-lg font-semibold text-white">{platform.name}</p>
              <p className="relative mt-1 text-sm text-gray-text">{platform.handle}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
