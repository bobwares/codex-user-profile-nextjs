/**
 * App: Codex User Profile Next.js
 * Package: root
 * File: next.config.mjs
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: nextConfig
 * Description: Next.js configuration tailored for the Pages Router application scaffold.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false
  }
};

export default nextConfig;
