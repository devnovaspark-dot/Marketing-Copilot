import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from './_components/HeroSection';

const ClientsSection = dynamic(() => import('./_components/ClientsSection'));

const QuickConnectMapSection = dynamic(() => import('./_components/QuickConnectMapSection'));
const StrategistDeskCta = dynamic(() => import('@/components/StrategistDeskCta'));
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
      <ClientsSection />
      <QuickConnectMapSection />
      <StrategistDeskCta
        id="home-cta-1"
        defaultTopic="🎯 Growth Strategy & Performance Marketing"
        eyebrow="CONFIDENTIAL STRATEGY DISPATCH • NO OBLIGATION"
        title="Book a Free Consultation"
        subtitle="Submit your details below for a free, confidential growth audit and 90-day execution blueprint."
        formLocation="/"
      />
      <BrandSpotlightSection />
      <div className="section-cv"><StoryVideoSection /></div>
      <div className="section-cv"><MetricsSection /></div>
      <StrategistDeskCta
        id="home-cta-2"
        defaultTopic="🚀 Paid Ads & Search Scale"
        eyebrow="DATA-BACKED EXECUTION • PROVEN PLAYBOOK"
        title="Let’s Talk About Your Growth"
        subtitle="Send us your business details for a free competitor teardown and growth roadmap."
        formLocation="/"
      />
      <div className="section-cv"><ProofShowcaseSection /></div>
      <div className="section-cv"><ServicesSection /></div>
      <div className="section-cv"><StrategySection /></div>
      <StrategistDeskCta
        id="home-cta-3"
        defaultTopic="⚡ Full-Funnel Conversion & Scaling"
        eyebrow="FOUNDER & STRATEGIST ON-DUTY • INDIA DESK"
        title="Find Your Fastest Path to Growth"
        subtitle="Get direct, actionable answers from our senior revenue architects on how to scale profitably."
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
