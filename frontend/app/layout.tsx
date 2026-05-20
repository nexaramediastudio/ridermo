import type { Metadata } from "next";
import { Sora } from "next/font/google";
import SiteShell from "@/components/layout/SiteShell";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "TVS motorcycles",
    "TVS showroom",
    "Apache RTR",
    "TVS Raider",
    "TVS Ntorq",
    "TVS Ronin",
    "bike dealer",
  ],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-primary font-sans text-white antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
