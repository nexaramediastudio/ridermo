import Link from "next/link";
import { Share2, Camera, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import {
  SITE_NAME,
  EMAIL,
  ADDRESS,
  SOCIAL_LINKS,
  WHATSAPP_DISPLAY,
  LANDLINE_NUMBER,
  LANDLINE_TEL,
  MAPS_URL,
  NEXARA_MEDIA_LABEL,
  NEXARA_MEDIA_URL,
  API_ENABLED,
} from "@/lib/constants";

const footerLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  ...(API_ENABLED ? [{ href: "/admin", label: "Admin" }] : []),
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              Ride<span className="text-tvs-red">rmo</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-text">
              Your premium authorized TVS motorcycle showroom. Experience power, performance, and trust.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-text transition-colors hover:border-tvs-red/50 hover:text-tvs-red"
                aria-label="Facebook"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-text transition-colors hover:border-tvs-red/50 hover:text-tvs-red"
                aria-label="Instagram"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-text transition-colors hover:border-tvs-red/50 hover:text-tvs-red"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-text transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-text">
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-tvs-red" />
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-tvs-red" />
                <a href={`tel:${LANDLINE_TEL}`} className="transition-colors hover:text-white">
                  {LANDLINE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-tvs-red" />
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tvs-red" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-text">
              <li>Scooters</li>
              <li>Motor Bikes</li>
              <li>Mopeds</li>
              <li>Electric Models</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-center text-xs text-gray-text sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="flex flex-col items-center gap-1 sm:items-end">
            <span>Authorized TVS Motor Company Dealer</span>
            <span>
              Created by{" "}
              <a
                href={NEXARA_MEDIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-tvs-red"
              >
                {NEXARA_MEDIA_LABEL}
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
