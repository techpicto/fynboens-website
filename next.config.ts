import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Der ligger en package-lock.json i brugermappen; peg eksplicit på projektroden.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
