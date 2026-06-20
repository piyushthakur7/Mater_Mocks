import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // In development, route to local v2.0 backend. In production, route to live server.
    const isDev = process.env.NODE_ENV === "development";
    return [
      {
        source: "/api/v1/:path*",
        destination: isDev 
          ? "http://localhost:5000/api/v1/:path*" 
          : "https://backend.mastermocks.in/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
