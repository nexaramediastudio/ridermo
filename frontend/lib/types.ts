export type BikeCategory = "Scooter" | "Motor Bike" | "Moped";

export type FuelType = "Petrol" | "Electric";

export interface FinanceOption {
  id: string;
  bikeId: string;
  downPayment: number;
  monthlyPayment: number;
  durationMonths: number;
}

export interface BikeImage {
  id: string;
  bikeId: string;
  imageUrl: string;
}

export interface Bike {
  id: string;
  name: string;
  slug: string;
  category: BikeCategory;
  fuelType: FuelType;
  engineCc: number;
  price: number;
  mrp: number;
  discount: number | null;
  description: string;
  topSpeed?: string | null;
  mileage?: string | null;
  features: string[];
  featured: boolean;
  images: BikeImage[];
  financeOptions?: FinanceOption[];
}

export const BIKE_CATEGORIES: BikeCategory[] = ["Scooter", "Motor Bike", "Moped"];
