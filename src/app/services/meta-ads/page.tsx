'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import styles from './meta-ads-page.module.css';

// 3 Key Growth Pillars for "Build a Smarter Meta Ads Campaign"
const smartPillars = [
  {
    icon: '📱',
    tag: 'PLACEMENT MASTERY',
    title: 'Facebook & Instagram Ads',
    desc: 'Targeted ad campaigns designed across high-engagement placements—including Feeds, Stories, Explore, and Reels—to connect with audiences where they spend their time.',
  },
  {
    icon: '💬',
    tag: 'DIRECT RESPONSE',
    title: 'Lead & WhatsApp Campaigns',
    desc: 'Instant lead-capture funnels and Click-to-WhatsApp direct message ads that eliminate friction, allowing immediate customer conversations and higher conversions.',
  },
  {
    icon: '⚡',
    tag: 'DATA-DRIVEN ROAS',
    title: 'Performance Optimization',
    desc: 'Continuous bid management, creative A/B testing, and audience refinement powered by data to maximize your return on ad spend and reduce acquisition cost.',
  },
];

// Why Meta Ads Matter 3 Features
const whyMatterFeatures = [
  {
    icon: '🎯',
    title: 'Reach Before They Search',
    desc: 'Introduce your products and services proactively to high-intent consumers before they even think to search for them on Google.',
  },
  {
    icon: '📍',
    title: 'Hyper-Local & Regional Scale',
    desc: 'Precision geo-targeting across Bhubaneswar pin codes, Cuttack, and Odisha, with seamless capability to expand to national markets.',
  },
  {
    icon: '🧠',
    title: 'Deep Behavioral Targeting',
    desc: 'Target audiences by verified locations, buying behaviors, lifestyle interests, and custom retargeting lists from past interactions.',
  },
];

// 6 Core Meta Ads Services in Bhubaneswar
const metaServices = [
  {
    num: '01',
    icon: '🧭',
    tag: 'FOUNDATIONAL ROADMAP',
    title: '1. Meta Ads Strategy',
    desc: 'No two businesses can use the same advertising strategy. We review your business model, target market, competition, objectives, budget, and past campaign results to develop a tailored Meta Ads strategy. We can connect Facebook and Instagram ads with your customer journey and overall business goals.',
  },
  {
    num: '02',
    icon: '📘',
    tag: 'FEED & ENGAGEMENT',
    title: '2. Facebook Advertising',
    desc: 'We build and execute Facebook Ads, depending on the targets of your marketing. Planning campaigns around the right audience, creative, messaging, and budget from awareness to traffic to lead generation to sales. Our team continuously monitors campaign performance and makes necessary adjustments for better advertising efficiency.',
  },
  {
    num: '03',
    icon: '📸',
    tag: 'REELS, STORIES & CAROUSELS',
    title: '3. Instagram Ads Management',
    desc: 'We develop Instagram advertising projects depending on your target audience, business objectives, and your brand identity. We provide Feed Ads, Stories, Reels, Carousel Ads, image ads, and video ads services. We create content and messaging that’s relevant, immediately relatable to your offer, and will evoke audience reaction.',
  },
  {
    num: '04',
    icon: '📋',
    tag: 'QUALIFIED INQUIRIES',
    title: '4. Lead Generation Campaigns',
    desc: 'Grow relevant enquiries via strategic Meta lead generation campaigns. Promote consulting, services, courses, properties, products, events, demos, and appointments with us! We design campaigns with audience targeting, ad creatives, lead forms, and campaign optimization to keep customers on track of ads to inquire.',
  },
  {
    num: '05',
    icon: '🛒',
    tag: 'REVENUE & CONVERSIONS',
    title: '5. E-commerce & Sales Campaigns',
    desc: 'For e-commerce brands, we tie product promotion to audience targeting, creative strategy, and the customer journey. Our campaign activities can be useful for product launches, offers, sales, and remarketing. If complete conversion data is present, we leverage campaign content to optimize targeting, creative, and budget settings for increased conversion performance.',
  },
  {
    num: '06',
    icon: '👥',
    tag: 'CUSTOM & RETARGETING',
    title: '6. Audience Research & Targeting',
    desc: 'Often, it is important to reach the right audience for advertising to be effective. We research your customer profile, business location, interests, and campaign objectives to develop relevant audience segments. Utilizing location-based and interest-based, custom, retargeting, and/or other qualified audiences to increase campaign relevance.',
  },
];

// Why Choose Nova Spark Digital (6 Pillars)
const whyChoosePillars = [
  {
    step: 'PILLAR 01',
    title: 'Strategy Before Spending',
    desc: 'We first understand what you want to achieve instead of immediately launching advertisements.',
  },
  {
    step: 'PILLAR 02',
    title: 'Creative + Performance',
    desc: 'Our approach combines creative development with campaign data. This allows advertising decisions to consider both the message and its performance.',
  },
  {
    step: 'PILLAR 03',
    title: 'Business-Focused Campaigns',
    desc: 'Campaign objectives are aligned with business requirements such as enquiries, sales, registrations, bookings, or awareness.',
  },
  {
    step: 'PILLAR 04',
    title: 'Continuous Optimization',
    desc: 'Campaigns are reviewed regularly so that learnings from the data can inform future changes.',
  },
  {
    step: 'PILLAR 05',
    title: 'Transparent Communication',
    desc: 'We aim to provide clear information about campaign activity, performance, and areas that require improvement.',
  },
  {
    step: 'PILLAR 06',
    title: 'Multi-Industry Experience',
    desc: 'Nova Spark has publicly described experience across industries, including real estate, interior design, architecture, EdTech, travel, D2C, jewelry, and manufacturing.',
    industries: ['Real Estate', 'Interior Design', 'Architecture', 'EdTech', 'Travel', 'D2C', 'Jewelry', 'Manufacturing'],
  },
];

// FAQ Data (Closed by default per user instruction)
const metaFaqs = [
  {
    q: '1. What are Meta Ads, and how can they help my business?',
    a: 'Meta Ads are paid ads on Facebook and Instagram designed to help businesses target audiences, capture leads, boost website visits, and convert leads.',
  },
  {
    q: '2. How much should I spend on Meta Ads in Bhubaneswar?',
    a: "The amount of the Meta Ads budget is determined by your goals, audience size, competition, industry, and campaign duration. We suggest a budget depending on your goals and what you're looking to acquire.",
  },
  {
    q: '3. Can Meta Ads generate leads for my business?',
    a: 'Yes, Meta Ads can generate leads via instant forms, via WhatsApp, via landing pages, and via website conversions. Campaigns can be targeted by location, interests, and behavior.',
  },
  {
    q: '4. Do you manage Facebook and Instagram ads together?',
    a: 'Yes, we run Facebook and Instagram campaigns together, planning, targeting, creating, setting up, optimizing, retargeting, tracking, and reporting on them.',
  },
  {
    q: '5. How do you measure Meta Ads campaign performance?',
    a: 'Metrics tracked include reach, clicks, leads, conversions, cost per lead, purchases, and more, which are used to assess performance and inform campaign optimization.',
  },
];

// Target business verticals in Bhubaneswar
const localVerticals = [
  'Local Businesses',
  'E-commerce Brands',
  'Education & Institutes',
  'Real Estate & Builders',
  'Healthcare Providers',
  'Service-Based Businesses',
  'Growing D2C Brands',
];

// Key Bhubaneswar regions
const bhubaneswarAreas = [
  'Patia & Infocity',
  'Saheed Nagar',
  'Jaydev Vihar',
  'Nayapalli',
  'Kharvela Nagar',
  'Rasulgarh',
  'Chandrasekharpur',
  'Cuttack & Twin City',
  'Puri & Regional Odisha',
];

export default function MetaAdsPage() {
  // FAQs closed by default
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. HERO SECTION (CINEMATIC SKEUOMORPHIC HERO)
          * No heavy dashboard image in hero as requested *
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.bluePulseDot} />
                <span>Meta Ads Agency · Bhubaneswar &amp; Odisha</span>
              </div>

              <h1 className={styles.heroTitle}>
                Make Every Meta Ad{' '}
                <span className="accent-gradient">Work Harder</span>
              </h1>

              <p className={styles.heroSub}>
                Build targeted Facebook and Instagram campaigns that connect your brand with relevant audiences, generate quality leads, and support measurable business growth.
              </p>

              <div className={styles.heroActions}>
                <BeamButton
                  href="/contact"
                  label="Start Advertising With Us →"
                  size="lg"
                />
                <BeamButton
                  href="#overview"
                  label="Explore Meta Ads →"
                  size="lg"
                  variant="outline"
                />
              </div>

              {/* Skeuomorphic Telemetry Strip */}
              <div className={styles.telemetryRibbon}>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>4.8X</span>
                  <span className={styles.tLabel}>Average ROAS</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>+340%</span>
                  <span className={styles.tLabel}>Qualified Leads</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>Sub-₹20</span>
                  <span className={styles.tLabel}>Cost Per Lead</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>24/7</span>
                  <span className={styles.tLabel}>Ad Optimization</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. TURN META ADS INTO BUSINESS GROWTH
         ══════════════════════════════════════════════════ */}
      <section id="overview" className={styles.smartCampaignSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Turn Meta Ads Into Business Growth</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Build a Smarter <span className="accent-gradient">Meta Ads Campaign</span>
              </h2>
              <p className={styles.sectionDesc}>
                See how strategic targeting, creative ads, and continuous optimization can turn Facebook and Instagram into powerful growth channels.
              </p>
            </ScrollReveal>
          </div>

          {/* 3 Skeuomorphic Pillar Cards */}
          <div className={styles.pillarsGrid}>
            {smartPillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 80}>
                <div className={styles.pillarCard}>
                  <div className={styles.pillarIconBowl}>{pillar.icon}</div>
                  <span className={styles.pillarPill}>{pillar.tag}</span>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Rich Visual Showcase with Graphic Image */}
          <ScrollReveal>
            <div className={styles.visualShowcaseBox}>
              <div className={styles.visualShowcaseContent}>
                <span className={styles.visualBadge}>⚡ FULL-FUNNEL META ARCHITECTURE</span>
                <h3 className={styles.visualTitle}>
                  Connecting Creative Attention with Measurable Business Sales
                </h3>
                <p className={styles.visualText}>
                  From high-converting Instagram Reels and dynamic carousel creatives to instant WhatsApp closing funnels, we align paid ads with your customer buying journey.
                </p>
                <div className={styles.visualStatsStrip}>
                  <div className={styles.statItem}>
                    <span className={styles.statVal}>9.4 / 10</span>
                    <span className={styles.statLbl}>Event Match Quality</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statVal}>72 Hrs</span>
                    <span className={styles.statLbl}>Creative Sprint Cycles</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statVal}>Omnichannel</span>
                    <span className={styles.statLbl}>CAPI Tracking</span>
                  </div>
                </div>
              </div>

              <div className={styles.visualImageWrap}>
                <Image
                  src="/images/Google ads & Meta ads.png"
                  alt="Meta and Facebook Advertising Framework Nova Spark Digital Bhubaneswar"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className={styles.visualImg}
                />
                <div className={styles.visualImgOverlay}>
                  <span>Targeted Ads Across FB &amp; IG</span>
                  <span>Verified ROI</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. GROW WITH META ADS (PERFORMANCE-DRIVEN AGENCY)
         ══════════════════════════════════════════════════ */}
      <section className={styles.growAgencySection}>
        <div className="container">
          <div className={styles.agencyTwoCol}>
            <ScrollReveal className={styles.agencyTextCol}>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Grow With Meta Ads</span>
              </div>

              <h2 className={styles.agencyTitle}>
                Performance-Driven Meta Ads Agency{' '}
                <span className="accent-gradient">in Bhubaneswar</span>
              </h2>

              <p className={styles.agencyParagraph}>
                Your customers are already using Facebook and Instagram and spending a significant amount of their time there. The opportunity is to connect with them at the right point with the right message, creative offer, and targeting.
              </p>

              <p className={styles.agencyParagraph}>
                Nova Spark Digital is propagating to provide a powerful Meta Ads marketing solution in Bhubaneswar and is dedicated to creating awareness, engagement, and leads for businesses, making website hits and sales through Facebook and Instagram ads.
              </p>

              <p className={styles.agencyParagraph}>
                Our strategy for Meta Ads is custom crafted for every local business in Bhubaneswar, every ecommerce business, every education business, every real estate business, every healthcare service provider, every service-based business, and every growing D2C brand based on their target audience, business vertical, and marketing objectives.
              </p>

              <div className={styles.verticalChips}>
                {localVerticals.map((vert) => (
                  <span key={vert} className={styles.verticalChip}>
                    ✓ {vert}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className={styles.agencyMediaCol}>
              <div className={styles.mediaCardSkeuo}>
                <div className={styles.mediaFrame}>
                  <Image
                    src="/images/services_performance.jpg"
                    alt="Performance Marketing and Meta Ads Management in Bhubaneswar"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className={styles.visualImg}
                  />
                  <div className={styles.floatingMetricCard}>
                    <div>
                      <div className={styles.metricBadgeLabel}>Multi-Vertical Impact</div>
                      <div className={styles.metricBadgeValue}>Odisha &amp; Pan-India Reach</div>
                    </div>
                    <span style={{ fontSize: '24px' }}>📈</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. WHY META ADS MATTER FOR YOUR BUSINESS
         ══════════════════════════════════════════════════ */}
      <section className={styles.whyMatterSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Audience Advantage</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Why Meta Ads Matter{' '}
                <span className="accent-gradient">for Your Business</span>
              </h2>
              <p className={styles.sectionDesc}>
                Meta&apos;s advertising ecosystem gives businesses access to consumers via Facebook, Instagram, and other Meta placements. You can introduce your products or services and reach your potential customers before they even look for them.
              </p>
              <p className={styles.sectionDesc} style={{ marginTop: '12px' }}>
                Meta advertising can be employed for local and broader campaigns for businesses in Bhubaneswar. If it&apos;s a marketing campaign that allows targeting, you can target audiences by their location, interests, behaviors, and previous interactions with your business.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.whyMatterCardsGrid}>
            {whyMatterFeatures.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 80}>
                <div className={styles.whyMatterCard}>
                  <div className={styles.whyIconWrap}>{feat.icon}</div>
                  <h3 className={styles.whyCardTitle}>{feat.title}</h3>
                  <p className={styles.whyCardDesc}>{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. OUR META ADS SERVICES (6 SKEUOMORPHIC CARDS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Tailored Solutions</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Our Meta Ads Marketing Services{' '}
                <span className="accent-gradient">in Bhubaneswar</span>
              </h2>
              <p className={styles.sectionDesc}>
                When it comes to Meta Ads, Nova Spark Digital can help you plan, set up, optimize, and report on your campaign.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.servicesGrid}>
            {metaServices.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 60}>
                <div className={styles.serviceSkeuoCard}>
                  <div className={styles.serviceTopHeader}>
                    <span className={styles.serviceNumberEmbossed}>{svc.num}</span>
                    <div className={styles.serviceIconBowl}>{svc.icon}</div>
                  </div>
                  <span className={styles.serviceTagPill}>{svc.tag}</span>
                  <h3 className={styles.serviceCardTitle} style={{ marginTop: 12 }}>
                    {svc.title}
                  </h3>
                  <p className={styles.serviceCardDesc}>{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. BHUBANESWAR LOCAL & GROWING BRANDS
         ══════════════════════════════════════════════════ */}
      <section className={styles.localBrandsSection}>
        <div className="container">
          <div className={styles.localBrandsContainer}>
            <ScrollReveal className={styles.localBrandsVisual}>
              <div className={styles.localImageFrame}>
                <Image
                  src="/images/image bbsr.png"
                  alt="Bhubaneswar Local Business Growth Nova Spark Digital"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className={styles.visualImg}
                />
                <div className={styles.localMapBadge}>
                  <span>📍 Bhubaneswar &amp; Pan-Odisha Coverage</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className={styles.localBrandsText}>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Regional Footprint</span>
              </div>

              <h2 className={styles.localTitle}>
                Meta Ads Marketing in Bhubaneswar{' '}
                <span className="accent-gradient">for Local &amp; Growing Brands</span>
              </h2>

              <p className={styles.localDesc}>
                The city of Bhubaneswar has a large concentration of business activities, from startups to services provided to locals, from industry to education to the real estate, hospital, and hospitality sectors, to the retail and technology sector.
              </p>

              <p className={styles.localDesc}>
                Meta Ads can help local businesses target customers in specific areas while also expanding to other regions or cities.
              </p>

              <p className={styles.localDesc}>
                If you have customers outside Bhubaneswar, campaigns can be designed to test other markets based on business capacity and customer demand. This works well for both local visibility and customer acquisition campaigns.
              </p>

              <div className={styles.localAreasGrid}>
                {bhubaneswarAreas.map((area) => (
                  <span key={area} className={styles.areaPinPill}>
                    📍 {area}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. WHY CHOOSE NOVA SPARK DIGITAL (6 PILLARS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.whyChooseSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>The Nova Spark Advantage</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Why Choose Nova Spark Digital{' '}
                <span className="accent-gradient">for Meta Ads in Bhubaneswar?</span>
              </h2>
              <p className={styles.sectionDesc}>
                Nova Spark Digital is a digital marketing agency whose approach focuses on connecting paid advertising with the wider digital marketing strategy.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.whyChooseGrid}>
            {whyChoosePillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70}>
                <div className={styles.whyChooseCard}>
                  <span className={styles.whyChooseStepNum}>{p.step}</span>
                  <h3 className={styles.whyChooseTitle}>{p.title}</h3>
                  <p className={styles.whyChooseDesc}>{p.desc}</p>
                  {p.industries && (
                    <div className={styles.industryBadgeList}>
                      {p.industries.map((ind) => (
                        <span key={ind} className={styles.industryTag}>
                          {ind}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          REGIONAL BHUBANESWAR MAP SECTION
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          8. EVERYTHING YOU NEED TO KNOW ABOUT META ADS (FAQ)
          * Closed by default as requested *
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Transparency &amp; Answers</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Everything You Need to Know{' '}
                <span className="accent-gradient">About Meta Ads</span>
              </h2>
              <p className={styles.sectionDesc}>
                Understand Meta Ads, from campaign setup and targeting to creative strategy, lead generation, retargeting, and performance tracking.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.faqContainer}>
            {metaFaqs.map((faq, idx) => {
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
                    <span className={styles.faqIconBowl}>
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
          9. LAST CARD ABOVE THE FOOTER
          * Main Home Page CTA Card Style *
          * Text preserved 100% as requested *
         ══════════════════════════════════════════════════ */}
      <section className={styles.homeStyleCtaSection}>
        <div className="container">
          <div className={styles.homeStyleCtaBox}>
            <ScrollReveal>
              <div className={styles.ctaEyebrowBadge}>
                <span className={styles.ctaPulseDot} />
                <span>Start Your Meta Ads Campaign</span>
              </div>

              <h2 className={styles.ctaHeadline}>
                Start Your Meta Ads Campaign{' '}
                <span className="accent-gradient">with Nova Spark Digital</span>
              </h2>

              <p className={styles.ctaParagraph}>
                Your customers are already scrolling; customers are already scrolling yet again through Facebook and Instagram newsfeeds. Now it&apos;s time to be more strategic with your advertising.
              </p>

              <p className={styles.ctaParagraph}>
                Our innovative approach to planning and executing Meta Ads campaigns is based on audience research, creative strategy, campaign management, tracking, and optimization.
              </p>

              <p className={styles.ctaParagraph}>
                From boosting enquiries to the launch of a new service product or a new audience, our team can help you to plan a Meta advertising strategy for your business.
              </p>

              <div className={styles.ctaActions}>
                <BeamButton
                  href="/contact"
                  label="Start Advertising With Us →"
                  size="lg"
                />
              </div>

              <div className={styles.ctaBrandPunchline}>
                Nova Spark Digital — Strategy. Creative. Growth.
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
