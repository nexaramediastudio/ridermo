import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BikeGallery from "@/components/bikes/BikeGallery";
import BikeSpecs from "@/components/bikes/BikeSpecs";
import InquiryForm from "@/components/contact/InquiryForm";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getBike, getBikes } from "@/lib/api";
import { SOCIAL_LINKS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const bikes = await getBikes();
  return bikes.map((bike) => ({ slug: bike.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const bike = await getBike(slug);
  if (!bike) return { title: "Bike Not Found" };
  return {
    title: bike.name,
    description: bike.description,
    openGraph: {
      title: bike.name,
      description: bike.description,
      images: bike.images[0] ? [bike.images[0].imageUrl] : [],
    },
  };
}

export default async function BikeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const bike = await getBike(slug);

  if (!bike) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${bike.name}. Please share more details.`
  );
  const whatsappUrl = `${SOCIAL_LINKS.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="bg-primary pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="slideLeft">
            <BikeGallery images={bike.images} name={bike.name} />
          </ScrollReveal>
          <ScrollReveal variant="slideRight" delay={0.06}>
            <div className="space-y-8">
              <BikeSpecs bike={bike} />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" className="flex-1">
                  Send Inquiry
                </Button>
                <Button href={whatsappUrl} variant="secondary" external className="flex-1">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeUp" className="mt-20 max-w-xl" delay={0.1}>
          <h2 className="mb-6 text-2xl font-bold text-white">Request a Quote</h2>
          <InquiryForm bikeId={bike.id} bikeName={bike.name} />
        </ScrollReveal>
      </div>
    </div>
  );
}
