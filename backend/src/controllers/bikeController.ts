import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export async function getAllBikes(req: Request, res: Response) {
  try {
    const { category, featured } = req.query;
    const bikes = await prisma.bike.findMany({
      where: {
        ...(category && typeof category === "string"
          ? { category }
          : {}),
        ...(featured === "true" ? { featured: true } : {}),
      },
      include: {
        images: true,
        financeOptions: true,
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(bikes);
  } catch {
    res.status(500).json({ error: "Failed to fetch bikes" });
  }
}

export async function getBikeBySlug(req: Request, res: Response) {
  try {
    const bike = await prisma.bike.findUnique({
      where: { slug: req.params.slug },
      include: {
        images: true,
        financeOptions: true,
      },
    });
    if (!bike) {
      res.status(404).json({ error: "Bike not found" });
      return;
    }
    res.json(bike);
  } catch {
    res.status(500).json({ error: "Failed to fetch bike" });
  }
}

export async function createBike(req: Request, res: Response) {
  try {
    const bike = await prisma.bike.create({
      data: req.body,
      include: { images: true, financeOptions: true },
    });
    res.status(201).json(bike);
  } catch {
    res.status(500).json({ error: "Failed to create bike" });
  }
}

export async function updateBike(req: Request, res: Response) {
  try {
    const bike = await prisma.bike.update({
      where: { id: req.params.id },
      data: req.body,
      include: { images: true, financeOptions: true },
    });
    res.json(bike);
  } catch {
    res.status(500).json({ error: "Failed to update bike" });
  }
}

export async function deleteBike(req: Request, res: Response) {
  try {
    await prisma.bike.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete bike" });
  }
}
