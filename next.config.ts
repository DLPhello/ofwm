import type { NextConfig } from "next";

/** Set to `/ofw` in CI (e.g. GitHub Actions) for project Pages at github.io/ofw/ */
const basePath =
  (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "") || undefined;

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath
    ? { basePath, assetPrefix: basePath }
    : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.oatleywines.com.au",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
