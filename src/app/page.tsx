import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from './_components/HeroSection';

const ClientsSection = dynamic(() => import('./_components/ClientsSection'));

const StrategistGrowthCockpit = dynamic(() => import('@/components/StrategistGrowthCockpit'));
const PerformanceAuditTerminal = dynamic(() => import('@/components/PerformanceAuditTerminal'));
const ExecutiveRevenueBlueprint = dynamic(() => import('@/components/ExecutiveRevenueBlueprint'));
const StoryVideoSection = dynamic(() => import('./_components/StoryVideoSection'));
const MetricsSection = dynamic(() => import('./_components/MetricsSection'));
const ProofShowcaseSection = dynamic(() => import('./_components/ProofShowcaseSection'));
const BrandSpotlightSection = dynamic(() => import('./_components/BrandSpotlightSection'));
const ServicesSection = dynamic(() => import('./_components/ServicesSection'));
const StrategySection = dynamic(() => import('./_components/StrategySection'));
const QuotesSection = dynamic(() => import('./_components/QuotesSection'));
const TeamPreview = dynamic(() => import('./_components/TeamPreview'));
const WhyChooseSection = dynamic(() => import('./_components/WhyChooseSection'));
const RealGrowthSection = dynamic(() => import('./_components/RealGrowthSection'));
const FAQSection = dynamic(() => import('./_components/FAQSection'));
const CTASection = dynamic(() => import('./_components/CTASection'));

export const metadata: Metadata = {
  title: 'Digital Marketing Company in India | Marketing Copilot',
  description: 'Top-rated digital marketing agency in India. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for businesses across India.',
  keywords: [
    'Digital Marketing Company in India',
    'Marketing Copilot',
    'Digital Marketing Agency India',
    'Best Digital Marketing Company in India',
    'Digital Marketing Services India',
    'SEO Company India',
    'Google Ads Agency India',
    'Meta Ads Agency India',
    'Performance Marketing India',
  ],
  verification: {
    google: '79f0bLLJO5DmUzDFyrPHZ1vouQGfmYsHB5NZ594DHww',
  },
  alternates: {
    canonical: 'https://marketingcopilot.in/',
  },
  openGraph: {
    title: 'Digital Marketing Company in India | Marketing Copilot',
    description: 'Top-rated digital marketing agency in India. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for businesses across India.',
    url: 'https://marketingcopilot.in/',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://marketingcopilot.in/images/dashboard_hero.jpg',
        secureUrl: 'https://marketingcopilot.in/images/dashboard_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Marketing Copilot Digital Marketing Company in India',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company in India | Marketing Copilot',
    description: 'Top-rated digital marketing agency in India. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for businesses across India.',
    images: ['https://marketingcopilot.in/images/dashboard_hero.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StrategistGrowthCockpit
        id="home-strategy-cockpit"
        title="Book a Free Growth Strategy Consultation"
        subtitle="Submit your details below. Get an actionable growth roadmap tailored for your business in India from our senior strategists."
        formLocation="/"
      />
      <ClientsSection />
      <BrandSpotlightSection />
      <div className="section-cv"><StoryVideoSection /></div>
      <div className="section-cv"><MetricsSection /></div>
      <PerformanceAuditTerminal
        id="home-performance-audit"
        title="Book a Free Performance & Growth Audit"
        subtitle="Submit your details below. Our performance team will analyze your ad accounts and search visibility to find where you are leaking revenue."
        formLocation="/"
      />
      <div className="section-cv"><ProofShowcaseSection /></div>
      <div className="section-cv"><ServicesSection /></div>
      <div className="section-cv"><StrategySection /></div>
      <ExecutiveRevenueBlueprint
        id="home-executive-blueprint"
        title="Book a Free 90-Day Revenue Blueprint"
        subtitle="Connect directly with our senior growth partners. Get a predictable scaling roadmap engineered for your market."
        formLocation="/"
      />
      <div className="section-cv"><QuotesSection /></div>
      <div className="section-cv"><TeamPreview /></div>
      <div className="section-cv"><WhyChooseSection /></div>
      <div className="section-cv"><RealGrowthSection /></div>
      <div className="section-cv"><FAQSection /></div>
      <div className="section-cv"><CTASection /></div>
    </>
  );
}
