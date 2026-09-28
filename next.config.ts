import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/digital-marketing-company-services-bhubaneswar',
        destination: '/services',
      },
      {
        source: '/digital-marketing-company-services-Bhubaneswar',
        destination: '/services',
      },
      {
        source: '/about-digital-marketing-company-bhubaneswar',
        destination: '/about',
      },
      {
        source: '/about-digital-marketing-company-Bhubaneswar',
        destination: '/about',
      },
      {
        source: '/digital-marketing-portfolio-bhubaneswar',
        destination: '/portfolio',
      },
      {
        source: '/digital-marketing-portfolio-Bhubaneswar',
        destination: '/portfolio',
      },
      {
        source: '/digital-marketing-services-industries-bhubaneswar',
        destination: '/industries',
      },
      {
        source: '/digital-marketing-services-industries-Bhubaneswar',
        destination: '/industries',
      },
      {
        source: '/faq-digital-marketing-bhubaneswar',
        destination: '/faq',
      },
      {
        source: '/faq-digital-marketing-Bhubaneswar',
        destination: '/faq',
      },
    ];
  },
};

export default nextConfig;

