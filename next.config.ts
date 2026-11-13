import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    return [
      {
        source: "/newinmeter",
        destination: "/#case-studies",
        permanent: true,
      },
      {
        source: "/livenopay",
        destination: "/#case-studies",
        permanent: true,
      },
      {
        source: "/LiveNoPay",
        destination: "/#case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
