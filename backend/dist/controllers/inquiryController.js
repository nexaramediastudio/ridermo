import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function createInquiry(req, res) {
    try {
        const { customerName, phoneNumber, message, bikeId } = req.body;
        if (!customerName || !phoneNumber || !message) {
            res.status(400).json({ error: "Name, phone, and message are required" });
            return;
        }
        const inquiry = await prisma.inquiry.create({
            data: { customerName, phoneNumber, message, bikeId },
        });
        res.status(201).json(inquiry);
    }
    catch {
        res.status(500).json({ error: "Failed to submit inquiry" });
    }
}
export async function getInquiries(_req, res) {
    try {
        const inquiries = await prisma.inquiry.findMany({
            include: { bike: { select: { name: true, slug: true } } },
            orderBy: { createdAt: "desc" },
        });
        res.json(inquiries);
    }
    catch {
        res.status(500).json({ error: "Failed to fetch inquiries" });
    }
}
