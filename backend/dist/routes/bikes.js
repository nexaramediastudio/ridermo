import { Router } from "express";
import { getAllBikes, getBikeBySlug, createBike, updateBike, deleteBike, } from "../controllers/bikeController.js";
const router = Router();
router.get("/", getAllBikes);
router.get("/:slug", getBikeBySlug);
router.post("/", createBike);
router.put("/:id", updateBike);
router.delete("/:id", deleteBike);
export default router;
