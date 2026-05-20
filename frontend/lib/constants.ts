export const SITE_NAME = "Ridermo TVS Showroom";
export const SITE_DESCRIPTION =
  "Premium TVS motorcycle showroom — explore Apache, Raider, Ntorq, Ronin and more. Finance available.";

/** Public site URL (set in Vercel: NEXT_PUBLIC_SITE_URL=https://yourdomain.com) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

/** WhatsApp (wa.me uses country code, no leading 0) */
export const WHATSAPP_NUMBER = "94705771234";
export const WHATSAPP_DISPLAY = "070 577 1234";

export const LANDLINE_NUMBER = "055 772 3970";
export const LANDLINE_TEL = "+94557723970";

/** @deprecated Prefer LANDLINE_NUMBER / WHATSAPP_DISPLAY */
export const PHONE_NUMBER = LANDLINE_NUMBER;

export const EMAIL = "ridermo.global@gmail.com";
export const ADDRESS =
  "No.45, Sorabora Junction, Girandurukotte Road, Mahiyangana, Sri Lanka, BD 90700";

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export const SOCIAL_LINKS = {
  facebook: "https://web.facebook.com/ridermo.co/",
  instagram: "https://www.instagram.com/ridermo.co/",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export const NEXARA_MEDIA_LABEL = "Nexara Media";
export const NEXARA_MEDIA_URL = "https://www.instagram.com/nexaramedia";

/** Set `NEXT_PUBLIC_API_URL` in `.env.local` only when the Express backend is running. */
export const API_ENABLED = Boolean(process.env.NEXT_PUBLIC_API_URL?.trim());
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
