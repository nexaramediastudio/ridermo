import type { Bike } from "@/lib/types";
import { bikesData } from "@/lib/data/bikes";
import { API_ENABLED, API_URL } from "@/lib/constants";

async function fetchApi<T>(path: string): Promise<T | null> {
  if (!API_ENABLED) return null;
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getBikes(options?: {
  category?: string;
  featured?: boolean;
}): Promise<Bike[]> {
  const params = new URLSearchParams();
  if (options?.category) params.set("category", options.category);
  if (options?.featured) params.set("featured", "true");
  const query = params.toString() ? `?${params}` : "";

  const data = await fetchApi<Bike[]>(`/api/bikes${query}`);
  let bikes =
    data && data.length > 0
      ? data.map((bike) => mergeBikeWithLocal(bike))
      : [...bikesData];

  if (options?.category) {
    bikes = bikes.filter((b) => b.category === options.category);
  }
  if (options?.featured) {
    bikes = bikes.filter((b) => b.featured);
  }
  return bikes;
}

function mergeBikeWithLocal(bike: Bike): Bike {
  const local = bikesData.find((b) => b.slug === bike.slug);
  if (!local) {
    return {
      ...bike,
      fuelType: bike.fuelType ?? "Petrol",
      mrp: bike.mrp ?? bike.price,
      discount: bike.discount ?? null,
    };
  }
  return {
    ...local,
    ...bike,
    fuelType: bike.fuelType ?? local.fuelType,
    mrp: bike.mrp ?? local.mrp,
    discount: bike.discount !== undefined ? bike.discount : local.discount,
    images: bike.images?.length ? bike.images : local.images,
  };
}

export async function getBike(slug: string): Promise<Bike | null> {
  const data = await fetchApi<Bike>(`/api/bikes/${slug}`);
  if (data) return mergeBikeWithLocal(data);
  const local = bikesData.find((b) => b.slug === slug);
  return local ?? null;
}

