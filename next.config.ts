import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Only hosts we actually load from. A wildcard lets anyone make the
    // optimizer fetch and decode arbitrary images (sharp/libheif RCE).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui.shadcn.com",
        pathname: "/favicon.ico",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
