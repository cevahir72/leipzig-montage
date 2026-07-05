import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pg", "pg-hstore", "sequelize"],
  async redirects() {
    return [
      { source: "/office", destination: "/büro", permanent: true },
      { source: "/kitchen", destination: "/küche", permanent: true },
      { source: "/bedroom", destination: "/schlafzimmer", permanent: true },
      { source: "/about", destination: "/uberuns", permanent: true },
      { source: "/gallery", destination: "/galerie", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
