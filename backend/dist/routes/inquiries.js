import { Router } from "express";
import { createInquiry, getInquiries, } from "../controllers/inquiryController.js";
const router = Router();
router.get("/", getInquiries);
router.post("/", createInquiry);
export default router;
