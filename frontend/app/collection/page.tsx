import type { Metadata } from "next";
import CollectionClient from "@/components/collection/CollectionClient";
import { getBikes } from "@/lib/api";

export const metadata: Metadata = {
  title: "Collection",
  description: "Browse our complete TVS motorcycle collection — Apache, Raider, Ntorq, Ronin and scooters.",
};

export default async function CollectionPage() {
  const bikes = await getBikes();

  return (
    <div className="overflow-x-hidden bg-primary pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <CollectionClient bikes={bikes} />
      </div>
    </div>
  );
}
