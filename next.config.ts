import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    SANITY_DATASET: process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    SANITY_API_VERSION: process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: '/insights',
      },
      {
        source: '/blog/:slug',
        destination: '/insights/:slug',
      },
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
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/(favicon.ico|icon.png|apple-touch-icon.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(llms.txt|llm.txt)',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/markdown; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

