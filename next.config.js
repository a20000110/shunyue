
/** @type {import("next").NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 60 * 60 * 24,
  reactStrictMode: false,
  images: {
    domains: ["secure.gravatar.com"]
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap" // Proxy to Backend
      }
    ];
  }
};

module.exports = nextConfig;
