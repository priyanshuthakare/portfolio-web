import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["ncdai.localhost", "ncdai.local"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  compiler:
    process.env.NODE_ENV === "production"
      ? {
          removeConsole: {
            exclude: ["error"],
          },
        }
      : undefined,
  async redirects() {
    return [
      {
        source: "/wall-of-love",
        destination: "/testimonials",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "/blog/rss",
      },
    ]
  },
}

export default nextConfig
