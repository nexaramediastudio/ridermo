import type { Metadata } from "next";
import ContactPageView from "@/components/contact/ContactPageView";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ridermo TVS Showroom — book a test ride or request a quote.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
