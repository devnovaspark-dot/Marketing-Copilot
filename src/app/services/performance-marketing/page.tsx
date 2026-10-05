'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import PerformanceOmnichannelSimulator from './_components/PerformanceOmnichannelSimulator';
import styles from './performance-marketing-page.module.css';

// 4 Full-Funnel Stages
const funnelStages = [
  {
    num: '01',
    stage: 'Top of Funnel',
    tag: 'AWARENESS & QUALIFIED TRAFFIC',
    desc: 'We provide campaigns across Google, Meta, and other platforms where it is relevant to your brand. We use audience research, creative testing, compelling messaging, and campaign optimization to create awareness, attract qualified traffic, and build a large pool of potential customers for the next stage.',
  },
  {
    num: '02',
    stage: 'Middle of Funnel',
    tag: 'CONSIDERATION & NURTURING',
    desc: 'Our search campaigns, remarketing, educational content, and conversion-centric landing pages bring in interested prospects and close them to sales. By understanding user behavior and engagement, we refine targeting and messaging to nurture prospects, improve conversion intent, and generate more relevant inquiries for your business.',
  },
  {
    num: '03',
    stage: 'Bottom of Funnel',
    tag: 'HIGH-INTENT CONVERSION',
    desc: 'Conversion-focused campaigns are our focus to convert high-intent users into customers. From purchase to phone call, WhatsApp enquiry, and form submission to booking or consultation, we optimize targeting, creative, landing page, and budgets around measurable acquisition outcomes.',
  },
  {
    num: '04',
    stage: 'Retention & Growth',
    tag: 'LIFETIME VALUE & REPEAT SALES',
    desc: 'Our performance marketing strategy doesn\'t stop there. We target our past customers through remarketing, customer segments, repeat purchase campaigns, and upselling tactics. Such initiatives can lead to repeat sales, better customer relations, and extra revenue sources, and boost customer lifetime value.',
  },
];

// 4 Performance Marketing Services
const performanceServices = [
  {
    icon: '🎯',
    tag: 'HIGH-INTENT SEARCH & PMAX',
    title: 'Google Ads Management',
    desc: 'Connect with your target audience who are actively looking for your products or services on Google. We optimize search, shopping, performance max, display, and remarketing campaigns through keyword research, ad copy, targeting, conversion tracking, and regular optimization.',
  },
  {
    icon: '📱',
    tag: 'FACEBOOK & INSTAGRAM ADS',
    title: 'Meta Ads Management',
    desc: 'Targeted ads for your ideal customers on Facebook and Instagram. We handle lead generation, sales, retargeting, catalogue, and conversion campaigns with audience research, creative testing, campaign optimization, and performance tracking.',
  },
  {
    icon: '⚡',
    tag: 'QUALIFIED PIPELINE ACCELERATION',
    title: 'Lead Generation Campaigns',
    desc: 'Make the right inquiries rather than just the more inquiries. Your advertising, audience targeting, offers, landing pages, and follow-up process are integrated to bring true visitors to your real estate, healthcare, education, financial, hospitality, and professional services business.',
  },
  {
    icon: '🛍️',
    tag: 'ROAS & CATALOG SCALING',
    title: 'E-commerce Performance Marketing',
    desc: 'Increase product sales with connected advertising campaigns. We use Google Shopping, Performance Max, Meta catalogue ads, and remarketing to reach potential buyers while monitoring important metrics such as ROAS, CPA, conversion rate, and average order value.',
  },
];

// 4 Pillars of Why Choose Nova Spark
const whyPillars = [
  {
    icon: '🏙️',
    tag: 'BHUBANESWAR & REGIONAL EXPERTISE',
    title: 'Local Market Understanding',
    desc: 'We know the different business landscape of Bhubaneswar, ranging from start-ups, education, healthcare, real estate, retail, to hospitality. When creating campaigns for your business, we take your audience, location, competition and customer behaviour into consideration.',
  },
  {
    icon: '🔄',
    tag: 'CONNECTED ACQUISITION SYSTEM',
    title: 'Full-Funnel Approach',
    desc: 'Google Ads, Meta Ads, landing pages, remarketing & conversion tracking are not standalone actions but are connected. This can help streamline the customer journey and provide your business with a more structured way to approach potential customers.',
  },
  {
    icon: '📊',
    tag: 'NO FLUFF · MEASURABLE REVENUE',
    title: 'Transparent Reporting',
    desc: 'It is our opinion that it is vital that you know where your ad dollars are going. We provide you with valuable metrics like leads, conversions, cost per lead, sales, and campaign performance so that you can see what is working and what is not.',
  },
  {
    icon: '🚀',
    tag: 'AGILE TESTING & BUDGET TUNING',
    title: 'Continuous Optimisation',
    desc: 'It is important that performance campaigns are monitored regularly as audience, competition, costs and customer behaviour can change. We track campaign performance, analyze data, experiment with strategies, and continuously optimize targeting, creatives, budgets, and other campaign components.',
  },
];

// 6 Framework Steps (From Clicks to Customers)
const frameworkSteps = [
  {
    step: '01',
    icon: '🔍',
    title: 'Understand',
    desc: 'We learn about your business, customers, products, services and growth objectives.',
  },
  {
    step: '02',
    icon: '🛠️',
    title: 'Build',
    desc: 'We create your campaign structure, audiences, messaging, tracking and conversion journey.',
  },
  {
    step: '03',
    icon: '🚀',
    title: 'Launch',
    desc: 'Campaigns go live across the selected advertising platforms.',
  },
  {
    step: '04',
    icon: '📈',
    title: 'Measure',
    desc: 'We monitor traffic, leads, conversions, acquisition costs and other relevant KPIs.',
  },
  {
    step: '05',
    icon: '⚙️',
    title: 'Optimise',
    desc: 'Budgets, audiences, creatives, keywords and landing pages are refined based on performance data.',
  },
  {
    step: '06',
    icon: '🏆',
    title: 'Scale',
    desc: 'Once campaigns show sustainable performance, we identify opportunities for controlled growth.',
  },
];

// 5 FAQs (Closed by default per user requirement)
const performanceFaqs = [
  {
    q: 'Which platforms do you use for performance marketing?',
    a: 'Campaigns can be Google Ads, Meta Ads, or other digital advertising platforms that are applicable to your business and audience. The channel mix you select should be suited to your business goals, target customers, and their buying process.',
  },
  {
    q: 'Do you provide Google Ads management in Bhubaneswar?',
    a: 'Yes. Nova Spark can handle Google Ads ads for businesses in Bhubaneswar, as well as businesses in India or elsewhere.',
  },
  {
    q: 'Do you provide Meta Ads management?',
    a: 'Yes. We can handle all your social leads, conversions, e-commerce, and remarketing campaigns for your Facebook and Instagram pages using our Meta advertising services.',
  },
  {
    q: 'How do you measure campaign performance?',
    a: 'Depending on the campaign objective, we choose the appropriate KPIs. These can be leads, qualified leads, conversion rate, cost per lead, customer acquisition cost, revenue, and ROAS.',
  },
  {
    q: 'Could you make the best of my campaigns?',
    a: 'Yes. Targeting, structure, creatives, keywords, bidding, tracking, landing page, and conversion performance can be audited before optimization recommendations are made for existing campaigns.',
  },
];

export default function PerformanceMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. CENTERED HERO (FULL WINDOW COVERAGE · NO HARSH LINE)
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container" style={{ width: '100%' }}>
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>Performance Marketing Agency in Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                Turn Marketing Spend Into{' '}
                <span className="accent-gradient">Measurable Growth</span>
              </h1>

              <p className={styles.heroSub}>
                From Google Ads and Meta Ads to landing page optimisation, remarketing, audience targeting, and conversion tracking, we build performance-driven campaigns focused on the outcomes that matter: qualified leads, sales, customer acquisition, and revenue growth.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Get Your Performance Audit →" size="lg" />
                <a href="#funnel-strategy" className={styles.heroSecondaryBtn}>
                  <span>Explore Our Strategy →</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Skeuomorphic Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>4.8X</span>
                <span className={styles.tLabel}>Blended ROAS SLA</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>-38%</span>
                <span className={styles.tLabel}>Average CAC Drop</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>99.4%</span>
                <span className={styles.tLabel}>Attribution Accuracy</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>24/7</span>
                <span className={styles.tLabel}>Bidding Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. REGIONAL MAP SECTION (DIRECTLY BELOW HERO)
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          3. FULL-FUNNEL PERFORMANCE MARKETING STRATEGY
         ══════════════════════════════════════════════════ */}
      <section className={styles.funnelSection} id="funnel-strategy">
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div className={styles.eyebrow}>
              <span>Full-Funnel Performance Marketing Strategy</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Turn Every Marketing Rupee Into a{' '}
              <span className="accent-gradient">Measurable Growth Opportunity</span>
            </h2>
            <p className={styles.sectionDesc}>
              Instead of running isolated campaigns across different platforms, Nova Spark creates a full-funnel performance marketing system that connects awareness, consideration, conversion, and retention.
            </p>
          </ScrollReveal>

          <div className={styles.funnelGrid}>
            {funnelStages.map((stage, idx) => (
              <ScrollReveal key={stage.num} delay={idx * 0.08} className={styles.cardCol}>
                <div className={styles.funnelCard}>
                  <div>
                    <div className={styles.funnelCardHeader}>
                      <span className={styles.funnelNum}>{stage.num}</span>
                      <span className={styles.funnelTag}>{stage.tag}</span>
                    </div>
                    <h3 className={styles.funnelTitle}>{stage.stage}</h3>
                    <p className={styles.funnelDesc}>{stage.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. PERFORMANCE SERVICES & VISUAL GRAPHIC SHOWCASE
         ══════════════════════════════════════════════════ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div className={styles.eyebrow}>
              <span>Performance Marketing Services in Bhubaneswar</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Everything You Need to Build a{' '}
              <span className="accent-gradient">Scalable Paid Growth Engine</span>
            </h2>
            <p className={styles.sectionDesc}>
              Connect with target audiences, eliminate ad waste, and accelerate pipeline velocity across high-intent channels.
            </p>
          </ScrollReveal>

          <div className={styles.servicesGrid}>
            {performanceServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.06} className={styles.cardCol}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.serviceCardHeader}>
                      <div className={styles.serviceIconBowl}>{service.icon}</div>
                      <span className={styles.serviceTag}>{service.tag}</span>
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Visual Showcase Card with Graphic */}
          <ScrollReveal>
            <div className={styles.visualShowcaseCard}>
              <div className={styles.visualImgWrapper}>
                <Image
                  src="/images/Google ads & Meta ads.png"
                  alt="Nova Spark Google Ads & Meta Ads Performance Engine Bhubaneswar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className={styles.showcaseImg}
                />
              </div>

              <div className={styles.visualContentWrapper}>
                <div className={styles.visualBadge}>
                  <span>⚡ CROSS-NETWORK ATTRIBUTION</span>
                </div>
                <h3 className={styles.visualTitle}>
                  Unified Google &amp; Meta Performance Optimization
                </h3>
                <p className={styles.visualDesc}>
                  We bridge the gap between intent-driven Google Search clicks and high-aesthetic Meta storytelling to deliver optimal blended acquisition costs.
                </p>

                <div className={styles.visualFeatures}>
                  <div className={styles.visualFeatureRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Single source of truth attribution &amp; server-side CAPI tracking</span>
                  </div>
                  <div className={styles.visualFeatureRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Dynamic landing page split testing with sub-second loads</span>
                  </div>
                  <div className={styles.visualFeatureRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Automated bid scaling protected by strict ROAS guardrails</span>
                  </div>
                  <div className={styles.visualFeatureRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Instant WhatsApp lead notifications &amp; CRM pipeline sync</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. WHY CHOOSE NOVA SPARK FOR PERFORMANCE MARKETING
         ══════════════════════════════════════════════════ */}
      <section className={styles.whySection}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div className={styles.eyebrow}>
              <span>Why Choose Nova Spark for Performance Marketing in Bhubaneswar?</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Smart Strategy Backed by{' '}
              <span className="accent-gradient">Performance Data</span>
            </h2>
            <p className={styles.sectionDesc}>
              A disciplined, data-first acquisition methodology built for the realities of Bhubaneswar and national scaling.
            </p>
          </ScrollReveal>

          <div className={styles.whyGrid}>
            {whyPillars.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08} className={styles.cardCol}>
                <div className={styles.whyCard}>
                  <div>
                    <div className={styles.whyCardHeader}>
                      <div className={styles.whyIconBowl}>{item.icon}</div>
                      <span className={styles.whyTag}>{item.tag}</span>
                    </div>
                    <h3 className={styles.whyTitle}>{item.title}</h3>
                    <p className={styles.whyDesc}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. CONVERSION TRACKING & ANALYTICS SECTION
         ══════════════════════════════════════════════════ */}
      <section className={styles.analyticsSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.analyticsCard}>
              <div className={styles.analyticsBadge}>
                <span>Conversion Tracking &amp; Analytics</span>
              </div>

              <h2 className={styles.analyticsTitle}>
                Know What Is Actually Driving{' '}
                <span className="accent-gradient">Your Results</span>
              </h2>

              <p className={styles.analyticsLead}>
                Without accurate tracking, it is difficult to understand which campaigns, audiences, and channels are generating meaningful business outcomes. Nova Spark helps businesses establish a clear measurement framework across their digital campaigns.
              </p>

              {/* Measurement Stack Pills */}
              <div className={styles.analyticsStack}>
                {[
                  'Google Analytics 4',
                  'Google Tag Manager',
                  'Meta Pixel',
                  'Conversion Tracking',
                  'Google Ads Conversion Tracking',
                  'Lead Tracking',
                  'Event Tracking',
                  'UTM Tracking',
                ].map((tool) => (
                  <span key={tool} className={styles.stackPill}>
                    <span className={styles.stackDot} />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>

              {/* Value Pipeline Callout */}
              <div className={styles.pipelineBox}>
                <div className={styles.pipelineLabel}>
                  Track What Matters · Full Value Pipeline
                </div>
                <div className={styles.pipelineRow}>
                  <span className={styles.pipelineStep}>Spend</span>
                  <span className={styles.pipelineArrow}>→</span>
                  <span className={styles.pipelineStep}>Traffic</span>
                  <span className={styles.pipelineArrow}>→</span>
                  <span className={styles.pipelineStep}>Leads</span>
                  <span className={styles.pipelineArrow}>→</span>
                  <span className={styles.pipelineStep}>Qualified Leads</span>
                  <span className={styles.pipelineArrow}>→</span>
                  <span className={styles.pipelineStep}>Sales</span>
                  <span className={styles.pipelineArrow}>→</span>
                  <span className={styles.pipelineStep} style={{ background: '#0B2093', color: '#FFFFFF' }}>
                    Revenue
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. FROM CLICKS TO CUSTOMERS (6-STEP FRAMEWORK)
         ══════════════════════════════════════════════════ */}
      <section className={styles.frameworkSection}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div className={styles.eyebrow}>
              <span>From Clicks to Customers</span>
            </div>
            <h2 className={styles.sectionTitle}>
              A Simple Performance{' '}
              <span className="accent-gradient">Marketing Framework</span>
            </h2>
            <p className={styles.sectionDesc}>
              Our systematic 6-stage lifecycle engineered to take campaigns from initial research to predictable revenue scaling.
            </p>
          </ScrollReveal>

          <div className={styles.frameworkGrid}>
            {frameworkSteps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.05} className={styles.cardCol}>
                <div className={styles.frameworkCard}>
                  <div>
                    <div className={styles.frameworkHeader}>
                      <span className={styles.frameworkStepBadge}>STEP {item.step}</span>
                      <div className={styles.frameworkIconBowl}>{item.icon}</div>
                    </div>
                    <h3 className={styles.frameworkTitle}>{item.title}</h3>
                    <p className={styles.frameworkDesc}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. INTERACTIVE OMNICHANNEL PERFORMANCE SIMULATOR
         ══════════════════════════════════════════════════ */}
      <PerformanceOmnichannelSimulator />

      {/* ══════════════════════════════════════════════════
          9. FREQUENTLY ASKED QUESTIONS (CLOSED BY DEFAULT)
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div className={styles.eyebrow}>
              <span>Need To Know</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Frequently Asked{' '}
              <span className="accent-gradient">Performance Marketing Questions</span>
            </h2>
            <p className={styles.sectionDesc}>
              Clear, transparent answers on ad spend allocation, attribution modeling, channel selection, and ROAS benchmarks in Bhubaneswar.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {performanceFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <span className={styles.faqIcon}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.faqPane}>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. PRE-FOOTER CTA CARD (LIGHT SKEUOMORPHIC .homeCtaInnerBox)
         ══════════════════════════════════════════════════ */}
      <section className={styles.homeCtaSection}>
        <div className="container">
          <div className={styles.homeCtaInnerBox}>
            <ScrollReveal className="text-center">
              <div className={styles.homeCtaEyebrow}>
                <span className={styles.homeCtaDot} />
                <span>SCALE YOUR BUSINESS WITH PERFORMANCE MARKETING</span>
              </div>

              <h2 className={styles.homeCtaHeadline}>
                Turn Marketing Spend Into{' '}
                <span className="accent-gradient">Measurable Growth</span>
              </h2>

              <p className={styles.homeCtaSub}>
                Ready to eliminate wasted ad budget and scale revenue predictably? Claim your free performance audit and strategic roadmap from Nova Spark today.
              </p>

              <div className={styles.homeCtaActions}>
                <BeamButton
                  href="/contact"
                  label="Get Your Performance Audit →"
                  size="lg"
                />
                <BeamButton
                  href="tel:+918280788689"
                  label="Talk to Our Growth Specialists"
                  size="lg"
                  variant="outline"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
