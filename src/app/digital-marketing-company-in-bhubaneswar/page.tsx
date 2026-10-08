import type { Metadata } from 'next';
import HeroSection from '../_components/HeroSection';
import ClientsSection from '../_components/ClientsSection';
import StoryVideoSection from '../_components/StoryVideoSection';
import QuickConnectMapSection from '../_components/QuickConnectMapSection';
import MetricsSection from '../_components/MetricsSection';
import ServicesSection from '../_components/ServicesSection';
import StrategySection from '../_components/StrategySection';
import QuotesSection from '../_components/QuotesSection';
import TeamPreview from '../_components/TeamPreview';
import WhyChooseSection from '../_components/WhyChooseSection';
import RealGrowthSection from '../_components/RealGrowthSection';
import FAQSection from '../_components/FAQSection';
import CTASection from '../_components/CTASection';

import StrategistDeskCta from '@/components/StrategistDeskCta';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in India',
  description: 'India’s leading digital marketing company. Drive revenue, high-intent leads, and top Google rankings with Marketing Copilot.',
  alternates: {
    canonical: 'https://marketingcopilot.in/digital-marketing-company-in-india',
  },
};

export default function DigitalMarketingBhubaneswarPage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <QuickConnectMapSection />
      <StrategistDeskCta
        id="desk-cta-in-1"
        defaultTopic="🎯 Google & Meta Ads"
        title="Ask Our Strategists Directly."
        subtitle="Submit your question below for a free, confidential strategic breakdown."
      />
      <StoryVideoSection />
      <MetricsSection />
      <ServicesSection />
      <StrategistDeskCta
        id="desk-cta-in-2"
        defaultTopic="📍 Local SEO 3-Pack"
        title="Let’s Talk About Your Growth."
        subtitle="Send us your question for a free, confidential growth assessment."
      />
      <StrategySection />
      <QuotesSection />
      <TeamPreview />
      <StrategistDeskCta
        id="desk-cta-in-3"
        defaultTopic="⚡ Next.js Web Speed"
        title="Let’s Find Your Fastest Path to Growth."
        subtitle="Get direct answers from our senior revenue architects on how to scale profitably."
      />
      <WhyChooseSection />
      <RealGrowthSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
