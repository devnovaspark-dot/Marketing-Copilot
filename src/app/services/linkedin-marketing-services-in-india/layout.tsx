import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn Marketing Services in India | B2B Lead Gen & Ads | Marketing Copilot',
  description:
    'Reach decision-makers and generate quality B2B leads with strategic LinkedIn marketing services in India. Page management, targeted ads, content & reporting.',
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
    title: 'LinkedIn Marketing Services in India | B2B Lead Gen & Ads | Marketing Copilot',
    description:
      'Reach the right professionals, build meaningful business connections, and generate quality leads with strategic LinkedIn marketing in India.',
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
    title: 'LinkedIn Marketing Services in India | Marketing Copilot',
    description:
      'Reach decision-makers and generate quality B2B leads with strategic LinkedIn marketing services in India.',
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
    'Strategic LinkedIn marketing services in India including LinkedIn Ads management, B2B lead generation, company page management, content marketing, and campaign analytics.',
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
      name: 'What do LinkedIn marketing services include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LinkedIn marketing services may include company page management, content creation, LinkedIn Ads management, audience targeting, B2B lead generation, campaign optimisation, and performance reporting. The exact scope depends on your business requirements and selected service package.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can LinkedIn marketing generate B2B leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LinkedIn marketing can help businesses reach relevant professionals based on factors such as job role, industry, company, and seniority. Through useful content, targeted advertising, relevant offers, and clear conversion paths, businesses can attract potential customers and encourage enquiries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do LinkedIn marketing services cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost depends on the scope of work, campaign complexity, content requirements, advertising budget, and reporting needs. Agency fees and advertising spend may be charged separately. Contact Marketing Copilot to discuss a plan suited to your objectives and budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between LinkedIn organic marketing and LinkedIn Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organic marketing focuses on company page content, professional engagement, and brand credibility without paying for each advertisement placement. LinkedIn Ads use paid campaigns to reach selected audiences and support objectives such as website visits, lead generation, and brand awareness. Both approaches can complement each other.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from LinkedIn marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The timeline varies by objective, audience, budget, offer, and execution. Paid campaigns can generate early engagement or enquiries after launch, while building brand authority and a consistent organic presence generally requires sustained effort. Performance should be evaluated against agreed objectives over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can small businesses and startups benefit from LinkedIn marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Small businesses and startups can use LinkedIn to reach professional audiences, demonstrate expertise, build relevant connections, and test demand for their services. The strategy should match the company\'s target market, budget, and available resources.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure LinkedIn marketing performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Performance can be measured using relevant metrics such as reach, engagement, clicks, leads, conversion rate, and cost per lead. When CRM and sales data are available, lead quality and pipeline contribution can also be assessed.',
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
