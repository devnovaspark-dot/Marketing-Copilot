import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Linkedin marketing services in India | Marketing Copilot',
  description:
    'Discover expert LinkedIn marketing services in India with Marketing Copilot. Enhance your visibility and drive engagement to achieve your business goals.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'LinkedIn Marketing Services in India',
    'LinkedIn Marketing Agency India',
    'LinkedIn B2B Lead Generation India',
    'LinkedIn Ads Management India',
    'B2B Marketing Agency India',
    'LinkedIn Company Page Management',
    'LinkedIn Content Marketing India',
    'B2B Social Media Marketing India',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services/linkedin-marketing-services-in-india',
  },
  openGraph: {
    title: 'Linkedin marketing services in India | Marketing Copilot',
    description:
      'Discover expert LinkedIn marketing services in India with Marketing Copilot. Enhance your visibility and drive engagement to achieve your business goals.',
    url: 'https://marketingcopilot.in/services/linkedin-marketing-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://marketingcopilot.in/images/linkedin_b2b_dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'LinkedIn Marketing Services in India - Marketing Copilot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linkedin marketing services in India | Marketing Copilot',
    description:
      'Discover expert LinkedIn marketing services in India with Marketing Copilot. Enhance your visibility and drive engagement to achieve your business goals.',
    images: ['https://marketingcopilot.in/images/linkedin_b2b_dashboard.jpg'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LinkedIn Marketing Services in India',
  serviceType: 'LinkedIn Marketing & B2B Lead Generation',
  provider: {
    '@type': 'Organization',
    name: 'Marketing Copilot',
    url: 'https://marketingcopilot.in',
    logo: 'https://marketingcopilot.in/images/marketing-copilot-brand.png',
    telephone: '+918280788689',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mallick Complex, Unit 3, Kharvela Nagar',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      postalCode: '751001',
      addressCountry: 'IN',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  url: 'https://marketingcopilot.in/services/linkedin-marketing-services-in-india',
  description:
    'Strategic LinkedIn marketing services in India including LinkedIn Ads management, LinkedIn Sales Navigator prospect research, B2B lead generation, company page management, content marketing, and campaign analytics.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: 'https://marketingcopilot.in/services/linkedin-marketing-services-in-india',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can LinkedIn marketing help my business grow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LinkedIn marketing helps businesses build professional credibility, reach decision-makers, generate B2B leads, and connect with potential clients through targeted campaigns and relevant content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which LinkedIn marketing services does Marketing Copilot offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marketing Copilot provides LinkedIn Ads management, company page management, content marketing, B2B lead generation, Sales Navigator prospect research, campaign optimization, and performance reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LinkedIn marketing suitable for small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, small businesses can use LinkedIn marketing to reach niche audiences, showcase their expertise, build industry connections, and attract potential customers within their budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do LinkedIn Ads help generate qualified leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Businesses can create LinkedIn ads targeted to specific industries, job types, company sizes, and seniority levels, and share offers that match their ideal customer profile.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should a business invest in LinkedIn marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Investment is based on campaign goals, target market, content needs, and campaign spending. With a customized strategy, you can ensure that your marketing efforts are aligned with your budget and growth objectives.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for LinkedIn marketing to produce success?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paid can create leads quickly after launch, but organic campaigns take time for both engagement and content. Outcomes depend on your audience, budget, and strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I measure the ROI of LinkedIn marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Know the value of a lead, conversion rates, cost per lead, customer acquisition costs, and the revenue generated from LinkedIn to determine ROI.',
      },
    },
  ],
};

export default function LinkedInMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
