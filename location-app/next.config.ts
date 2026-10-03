import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // nécessaire si vous utilisez le composant <Image>
};

module.exports = nextConfig;

export default nextConfig;
