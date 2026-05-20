import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
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
