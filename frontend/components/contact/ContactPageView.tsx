"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Share2, Camera } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/contact/InquiryForm";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  EMAIL,
  ADDRESS,
  SOCIAL_LINKS,
  WHATSAPP_DISPLAY,
  LANDLINE_NUMBER,
  LANDLINE_TEL,
  MAPS_EMBED_URL,
  MAPS_URL,
} from "@/lib/constants";
import { staggerContainer, staggerItem, scrollViewport } from "@/animations/variants";

export default function ContactPageView() {
  return (
    <div className="bg-primary pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Reach out for test rides, finance quotes, or any questions about our TVS lineup."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal variant="slideLeft">
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="mb-6 text-lg font-bold text-white">Contact Info</h3>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4 text-gray-text">
                    <MessageCircle className="h-5 w-5 shrink-0 text-tvs-red" />
                    <a
                      href={SOCIAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      WhatsApp: {WHATSAPP_DISPLAY}
                    </a>
                  </li>
                  <li className="flex items-center gap-4 text-gray-text">
                    <Phone className="h-5 w-5 shrink-0 text-tvs-red" />
                    <a href={`tel:${LANDLINE_TEL}`} className="hover:text-white">
                      Landline: {LANDLINE_NUMBER}
                    </a>
                  </li>
                  <li className="flex items-center gap-4 text-gray-text">
                    <Mail className="h-5 w-5 shrink-0 text-tvs-red" />
                    <a href={`mailto:${EMAIL}`} className="hover:text-white">
                      {EMAIL}
                    </a>
                  </li>
                  <li className="flex items-start gap-4 text-gray-text">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-tvs-red" />
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leading-relaxed hover:text-white"
                    >
                      {ADDRESS}
                    </a>
                  </li>
                </ul>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={scrollViewport}
                className="flex flex-wrap gap-3"
              >
                {[
                  { href: SOCIAL_LINKS.whatsapp, icon: MessageCircle, label: "WhatsApp", variant: "primary" as const },
                  { href: `mailto:${EMAIL}`, icon: Mail, label: "Email", variant: "secondary" as const },
                  { href: SOCIAL_LINKS.facebook, icon: Share2, label: "Facebook", variant: "secondary" as const },
                  { href: SOCIAL_LINKS.instagram, icon: Camera, label: "Instagram", variant: "secondary" as const },
                ].map((s) => (
                  <motion.div key={s.label} variants={staggerItem}>
                    <Button href={s.href} external variant={s.variant}>
                      <s.icon className="h-4 w-4" />
                      {s.label}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              <ScrollReveal variant="fadeUp" delay={0.1}>
                <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
                  <iframe
                    title="Ridermo Showroom Location"
                    src={MAPS_EMBED_URL}
                    className="h-64 w-full grayscale invert md:h-80"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideRight" delay={0.08}>
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">Send an Inquiry</h3>
              <InquiryForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
