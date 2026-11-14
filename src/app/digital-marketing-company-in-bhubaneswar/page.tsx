import type { Metadata } from 'next';
import HeroSection from '../_components/HeroSection';
import ClientsSection from '../_components/ClientsSection';
import StoryVideoSection from '../_components/StoryVideoSection';
import MetricsSection from '../_components/MetricsSection';
import ServicesSection from '../_components/ServicesSection';
import StrategySection from '../_components/StrategySection';
import QuotesSection from '../_components/QuotesSection';
import TeamPreview from '../_components/TeamPreview';
import WhyChooseSection from '../_components/WhyChooseSection';
import RealGrowthSection from '../_components/RealGrowthSection';
import FAQSection from '../_components/FAQSection';
import CTASection from '../_components/CTASection';

import StrategistGrowthCockpit from '@/components/StrategistGrowthCockpit';
import PerformanceAuditTerminal from '@/components/PerformanceAuditTerminal';
import ExecutiveRevenueBlueprint from '@/components/ExecutiveRevenueBlueprint';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in India | Marketing Copilot',
  description: 'India’s leading digital marketing company. Drive revenue, high-intent leads, and top Google rankings with Marketing Copilot.',
  keywords: [
    'Digital Marketing Company in India',
    'Marketing Copilot India',
    'Best Digital Marketing Agency India',
    'Full Stack Digital Marketing',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/digital-marketing-company-in-india',
  },
};

export default function DigitalMarketingBhubaneswarPage() {
  return (
    <>
      <HeroSection />
      <StrategistGrowthCockpit
        id="desk-cta-in-1"
        eyebrow="🇮🇳 BHUBANESWAR HQ • PAN-INDIA STRATEGY"
        title="Book a Free Regional Business Consultation"
        subtitle="Connect directly with our senior Indian growth strategists for a free audit and 90-day execution roadmap."
        formLocation="/digital-marketing-company-in-bhubaneswar"
      />
      <ClientsSection />
      <StoryVideoSection />
      <MetricsSection />
      <ServicesSection />
      <PerformanceAuditTerminal
        id="desk-cta-in-2"
        eyebrow="🇮🇳 PERFORMANCE LAB • ₹0 AUDIT"
        title="Book a Free Channel & Ad Spend Audit"
        subtitle="Submit your details below. Our performance team will analyze your ad accounts and search channels to stop budget waste."
        formLocation="/digital-marketing-company-in-bhubaneswar"
      />
      <StrategySection />
      <QuotesSection />
      <TeamPreview />
      <ExecutiveRevenueBlueprint
        id="desk-cta-in-3"
        eyebrow="🇮🇳 FOUNDER & CXO ADVISORY • 90-DAY SCALE"
        title="Book a Free 90-Day Revenue Blueprint"
        subtitle="Get a milestone-driven scaling engine engineered for your market with direct senior partner alignment."
        formLocation="/digital-marketing-company-in-bhubaneswar"
      />
      <WhyChooseSection />
      <RealGrowthSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
