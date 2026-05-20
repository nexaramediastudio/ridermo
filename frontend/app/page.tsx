import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ModelMarquee from "@/components/home/ModelMarquee";
import FeaturedBikes from "@/components/home/FeaturedBikes";
import BrandShowcase from "@/components/home/BrandShowcase";
import FinanceSection from "@/components/home/FinanceSection";
import AboutPreview from "@/components/home/AboutPreview";
import SocialSection from "@/components/home/SocialSection";
import ContactCTA from "@/components/home/ContactCTA";
import { getBikes } from "@/lib/api";

export default async function HomePage() {
  const featuredBikes = await getBikes({ featured: true });

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <StatsStrip />
      <ModelMarquee />
      <FeaturedBikes bikes={featuredBikes} />
      <BrandShowcase />
      <FinanceSection />
      <AboutPreview />
      <SocialSection />
      <ContactCTA />
    </div>
  );
}
