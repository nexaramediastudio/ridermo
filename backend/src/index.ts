import "dotenv/config";
import express from "express";
import cors from "cors";
import bikeRoutes from "./routes/bikes.js";
import inquiryRoutes from "./routes/inquiries.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "ridermo-api" });
});

app.use("/api/bikes", bikeRoutes);
app.use("/api/inquiries", inquiryRoutes);

app.listen(PORT, () => {
  console.log(`Ridermo API running on http://localhost:${PORT}`);
});
