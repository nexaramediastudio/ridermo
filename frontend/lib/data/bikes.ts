import type { Bike } from "@/lib/types";
import { bikePhoto, bikePhotoExtra } from "@/lib/images";

/** @see lib/images.ts — put files in public/bikes/{slug}.jpg */
const fallbacks = {
  scooter: "https://images.unsplash.com/photo-1583121274602-3b283f773ed6?w=1200&q=80",
  bike: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1200&q=80",
  sport: "https://images.unsplash.com/photo-1609630875171-b132b7fd85f2?w=1200&q=80",
  electric: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
};

export const photo = bikePhoto;
export const photoExtra = bikePhotoExtra;

/** Official Ridermo TVS price list */
export const bikesData: Bike[] = [
  {
    id: "1",
    name: "TVS NTORQ XP",
    slug: "tvs-ntorq-xp",
    category: "Scooter",
    fuelType: "Petrol",
    engineCc: 125,
    mrp: 899000,
    discount: 60000,
    price: 839000,
    description:
      "Top-spec Ntorq with premium features, sporty styling, and advanced connectivity for the ultimate urban ride.",
    features: ["SmartXonnect", "Race Inspired Design", "LED Lighting", "External Fuel Filler"],
    featured: true,
    images: [{ id: "1a", bikeId: "1", imageUrl: photo("tvs-ntorq-xp", fallbacks.scooter) }],
  },
  {
    id: "2",
    name: "TVS NTORQ RE",
    slug: "tvs-ntorq-re",
    category: "Scooter",
    fuelType: "Petrol",
    engineCc: 125,
    mrp: 849000,
    discount: 50000,
    price: 799000,
    description:
      "Race Edition Ntorq with exclusive graphics and performance-tuned setup for enthusiasts.",
    features: ["Race Edition Styling", "SmartXonnect", "Sport Mode", "USB Charger"],
    featured: false,
    images: [{ id: "2a", bikeId: "2", imageUrl: photo("tvs-ntorq-re", fallbacks.scooter) }],
  },
  {
    id: "3",
    name: "TVS NTORQ DISC",
    slug: "tvs-ntorq-disc",
    category: "Scooter",
    fuelType: "Petrol",
    engineCc: 125,
    mrp: 809000,
    discount: 60000,
    price: 749000,
    description:
      "Disc brake variant with confident stopping power and the signature Ntorq sporty character.",
    features: ["Front Disc Brake", "Digital Console", "LED DRLs", "Sporty Exhaust"],
    featured: false,
    images: [{ id: "3a", bikeId: "3", imageUrl: photo("tvs-ntorq-disc", fallbacks.scooter) }],
  },
  {
    id: "4",
    name: "TVS NTORQ DRUM",
    slug: "tvs-ntorq-drum",
    category: "Scooter",
    fuelType: "Petrol",
    engineCc: 125,
    mrp: 759000,
    discount: 70000,
    price: 689000,
    description:
      "Entry Ntorq with drum brakes — affordable access to India's sportiest 125cc scooter lineup.",
    features: ["Economical Variant", "LED Headlamp", "Mobile Charging", "Sporty Design"],
    featured: false,
    images: [{ id: "4a", bikeId: "4", imageUrl: photo("tvs-ntorq-drum", fallbacks.scooter) }],
  },
  {
    id: "5",
    name: "TVS JUPITER",
    slug: "tvs-jupiter",
    category: "Scooter",
    fuelType: "Petrol",
    engineCc: 125,
    mrp: 749000,
    discount: 50000,
    price: 699000,
    description:
      "Premium family scooter known for comfort, reliability, and best-in-class ride quality.",
    features: ["External Fuel Filler", "LED Headlamp", "Mobile Charging", "Econometer"],
    featured: true,
    images: [{ id: "5a", bikeId: "5", imageUrl: photo("tvs-jupiter", fallbacks.scooter) }],
  },
  {
    id: "6",
    name: "TVS SPORT 110",
    slug: "tvs-sport-110",
    category: "Motor Bike",
    fuelType: "Petrol",
    engineCc: 110,
    mrp: 637000,
    discount: 60000,
    price: 577000,
    description:
      "Efficient 110cc commuter built for daily rides with low running costs and trusted TVS reliability.",
    features: ["Fuel Efficient", "Comfortable Seating", "Stylish Graphics", "Easy Handling"],
    featured: false,
    images: [{ id: "6a", bikeId: "6", imageUrl: photo("tvs-sport-110", fallbacks.sport) }],
  },
  {
    id: "7",
    name: "TVS RAIDER 125",
    slug: "tvs-raider-125",
    category: "Motor Bike",
    fuelType: "Petrol",
    engineCc: 125,
    mrp: 849000,
    discount: 100000,
    price: 749000,
    description:
      "India's sportiest 125cc motorcycle with bold design, smart features, and peppy performance.",
    features: ["3-Valve Engine", "SmartXonnect", "LED Headlamp", "Digital Console"],
    featured: true,
    images: [{ id: "7a", bikeId: "7", imageUrl: photo("tvs-raider-125", fallbacks.sport) }],
  },
  {
    id: "8",
    name: "TVS APACHE 4V 160",
    slug: "tvs-apache-4v-160",
    category: "Motor Bike",
    fuelType: "Petrol",
    engineCc: 160,
    mrp: 999000,
    discount: 90000,
    price: 909000,
    description:
      "Race-inspired 4-valve street fighter with dual-channel ABS and aggressive track-ready styling.",
    features: ["4-Valve Engine", "Dual Channel ABS", "RT-FI 2.0", "Glide Through Technology"],
    featured: true,
    images: [{ id: "8a", bikeId: "8", imageUrl: photo("tvs-apache-4v-160", fallbacks.bike) }],
  },
  {
    id: "9",
    name: "TVS RONIN 225",
    slug: "tvs-ronin-225",
    category: "Motor Bike",
    fuelType: "Petrol",
    engineCc: 225,
    mrp: 1499000,
    discount: null,
    price: 1499000,
    description:
      "Modern roadster with neo-retro design, TFT console, and a torque-rich 225cc engine.",
    features: ["TFT Console", "Dual Channel ABS", "Slipper Clutch", "3 Ride Modes"],
    featured: true,
    images: [{ id: "9a", bikeId: "9", imageUrl: photo("tvs-ronin-225", fallbacks.bike) }],
  },
  {
    id: "10",
    name: "XL 100 I TOUCH",
    slug: "xl-100-i-touch",
    category: "Moped",
    fuelType: "Petrol",
    engineCc: 100,
    mrp: 459000,
    discount: 60000,
    price: 399000,
    description:
      "Trusted TVS moped with i-Touch start, practical design, and unbeatable value for everyday use.",
    features: ["i-Touch Start", "Fuel Efficient", "Large Storage", "Low Maintenance"],
    featured: false,
    images: [{ id: "10a", bikeId: "10", imageUrl: photo("xl-100-i-touch", fallbacks.sport) }],
  },
  {
    id: "11",
    name: "TVS iQUBE S 3.5KW",
    slug: "tvs-iqube-s-3-5kw",
    category: "Scooter",
    fuelType: "Electric",
    engineCc: 0,
    mrp: 899000,
    discount: 100000,
    price: 799000,
    description:
      "Smart electric scooter with connected features, zero emissions, and instant torque for city commuting.",
    features: ["Electric Powertrain", "SmartXonnect", "Regenerative Braking", "3.5kW Motor"],
    featured: true,
    images: [{ id: "11a", bikeId: "11", imageUrl: photo("tvs-iqube-s-3-5kw", fallbacks.electric) }],
  },
];

export function getBikeBySlug(slug: string): Bike | undefined {
  return bikesData.find((b) => b.slug === slug);
}

export function getFeaturedBikes(): Bike[] {
  return bikesData.filter((b) => b.featured);
}

export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString("en-LK")}`;
}

export function hasDiscount(bike: Bike): boolean {
  return bike.discount !== null && bike.discount > 0;
}
