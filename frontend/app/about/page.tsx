import type { Metadata } from "next";
import AboutPageView from "@/components/about/AboutPageView";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Ridermo — your premium authorized TVS motorcycle showroom.",
};

export default function AboutPage() {
  return <AboutPageView />;
}
