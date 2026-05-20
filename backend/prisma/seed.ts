import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const scooterImg =
  "https://images.unsplash.com/photo-1583121274602-3b283f773ed6?w=1200&q=80";
const bikeImg =
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1200&q=80";
const sportImg =
  "https://images.unsplash.com/photo-1609630875171-b132b7fd85f2?w=1200&q=80";
const electricImg =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80";

const bikes = [
  {
    name: "TVS NTORQ XP",
    slug: "tvs-ntorq-xp",
    category: "Scooter",
    engineCc: 125,
    price: 839000,
    description: "Top-spec Ntorq with premium features and advanced connectivity.",
    featured: true,
    images: [scooterImg],
  },
  {
    name: "TVS NTORQ RE",
    slug: "tvs-ntorq-re",
    category: "Scooter",
    engineCc: 125,
    price: 799000,
    description: "Race Edition Ntorq with exclusive graphics and performance tuning.",
    featured: false,
    images: [scooterImg],
  },
  {
    name: "TVS NTORQ DISC",
    slug: "tvs-ntorq-disc",
    category: "Scooter",
    engineCc: 125,
    price: 749000,
    description: "Disc brake Ntorq with confident stopping and sporty character.",
    featured: false,
    images: [scooterImg],
  },
  {
    name: "TVS NTORQ DRUM",
    slug: "tvs-ntorq-drum",
    category: "Scooter",
    engineCc: 125,
    price: 689000,
    description: "Affordable Ntorq entry with drum brakes and sporty design.",
    featured: false,
    images: [scooterImg],
  },
  {
    name: "TVS JUPITER",
    slug: "tvs-jupiter",
    category: "Scooter",
    engineCc: 125,
    price: 699000,
    description: "Premium family scooter with comfort and reliability.",
    featured: true,
    images: [scooterImg],
  },
  {
    name: "TVS SPORT 110",
    slug: "tvs-sport-110",
    category: "Motor Bike",
    engineCc: 110,
    price: 577000,
    description: "Efficient 110cc commuter for daily rides.",
    featured: false,
    images: [sportImg],
  },
  {
    name: "TVS RAIDER 125",
    slug: "tvs-raider-125",
    category: "Motor Bike",
    engineCc: 125,
    price: 749000,
    description: "Sportiest 125cc with bold design and smart features.",
    featured: true,
    images: [sportImg],
  },
  {
    name: "TVS APACHE 4V 160",
    slug: "tvs-apache-4v-160",
    category: "Motor Bike",
    engineCc: 160,
    price: 909000,
    description: "4-valve street fighter with dual-channel ABS.",
    featured: true,
    images: [bikeImg],
  },
  {
    name: "TVS RONIN 225",
    slug: "tvs-ronin-225",
    category: "Motor Bike",
    engineCc: 225,
    price: 1499000,
    description: "Neo-retro roadster with TFT console and 225cc engine.",
    featured: true,
    images: [bikeImg],
  },
  {
    name: "XL 100 I TOUCH",
    slug: "xl-100-i-touch",
    category: "Moped",
    engineCc: 100,
    price: 399000,
    description: "Trusted moped with i-Touch start and great value.",
    featured: false,
    images: [sportImg],
  },
  {
    name: "TVS iQUBE S 3.5KW",
    slug: "tvs-iqube-s-3-5kw",
    category: "Scooter",
    engineCc: 0,
    price: 799000,
    description: "Smart electric scooter with connected features.",
    featured: true,
    images: [electricImg],
  },
];

async function main() {
  console.log("Seeding database...");

  await prisma.financeOption.deleteMany();
  await prisma.bikeImage.deleteMany();
  await prisma.inquiry.deleteMany();
  await prisma.bike.deleteMany();

  for (const bike of bikes) {
    const { images, ...data } = bike;
    const created = await prisma.bike.create({
      data: {
        ...data,
        features: [],
        images: { create: images.map((url) => ({ imageUrl: url })) },
      },
    });
    console.log(`  Created: ${created.name}`);
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
