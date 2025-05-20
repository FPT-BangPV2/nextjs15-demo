import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    externalDir: true,
  },

  images: {
    domains: ["i.imgur.com", "placehold.co", "placeimg.com"],
  },

  async headers() {
    return [
      {
        source: "/products",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300",
          },
        ],
      },
    ];
  },

};

export default nextConfig;
