import type { Metadata } from "next";
import PrivacyPolicyView from "@/components/privacy/PrivacyPolicyView";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How RIDERMO (PVT) LTD collects, uses, protects and shares personal information when you visit our showroom or website.",
};

export default function PrivacyPage() {
  return <PrivacyPolicyView />;
}
