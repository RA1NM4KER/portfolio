import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
