import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["kefass-macbook-air", "kefass-macbook-air.tail9acdb6.ts.net"],
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
