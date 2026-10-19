import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Always the frontend app folder — not the monorepo root. */
const frontendDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Root lockfile at ../ makes Turbopack look for `next` in the wrong place.
  turbopack: {
    root: frontendDir,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Shorter cache so replaced local photos refresh sooner (still bump IMAGE_VERSION)
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 60,
  },
};

export default nextConfig;
