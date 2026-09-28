import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
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
        source: '/llm.txt',
        destination: '/llms.txt',
      },
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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

