import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "fpimages.withfloats.com" },
      { protocol: "https", hostname: "fplogoimages.withfloats.com" },
      { protocol: "https", hostname: "fpfaviconimages.withfloats.com" },
      { protocol: "https", hostname: "productimages.withfloats.com" },
      { protocol: "https", hostname: "backgroundimages.withfloats.com" },
      { protocol: "https", hostname: "bizimages.withfloats.com" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
