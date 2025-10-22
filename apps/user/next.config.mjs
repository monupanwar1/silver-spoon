/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.free-food-menus-api-two.vercel.app",
      },
      {
        protocol: "https",
        hostname: "goldbelly.imgix.net",
      },
    ],
  },
};

export default nextConfig;
