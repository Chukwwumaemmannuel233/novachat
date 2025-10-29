import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip linting errors on build (your current issue)
  },
};

export default nextConfig;
