'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import SocialReelsStudioSimulator from './_components/SocialReelsStudioSimulator';
import styles from './social-media-page.module.css';

// 4 Core Social Media Services
const coreServices = [
  {
    num: '01',
    icon: '🧭',
    tag: 'STRATEGY & TIMELINES',
    title: 'Social Media Strategy & Planning',
    desc: 'We develop a social media plan that aligns with your business goals, target audience, your competitors, and your industry. Our team designs optimization platforms, themes, posts, posting timelines, and campaign ideas. We also track trends and performance to ensure it remains relevant, consistent, and aligned with steady growth.',
  },
  {
    num: '02',
    icon: '🎬',
    tag: 'REELS & BRAND ASSETS',
    title: 'Content Creation & Branding',
    desc: 'We produce content that is both fun and web-crawler-friendly, all while bearing your brand and connecting with your audience. We have services for graphics, Reels, carousel posts, stories, promotional creatives, and branded campaigns. Each content piece is designed to help you generate engagement, convey your message clearly, and maintain brand visibility online.',
  },
  {
    num: '03',
    icon: '🎯',
    tag: 'PAID SOCIAL & LEADS',
    title: 'Paid Social Media Advertising',
    desc: 'We provide social media advertising solutions for businesses to target the right audiences and promote their products and services. We create and manage campaigns for lead generation, brand awareness, website traffic, sales, retargeting, and app promotions. The campaign\'s performance is continually tracked and fine-tuned to maximize spend.',
  },
  {
    num: '04',
    icon: '📱',
    tag: 'COMMUNITY & ANALYTICS',
    title: 'Social Media Account Management',
    desc: 'We manage your social media accounts to keep your brand consistent, active, and responsive. We offer content optimization, regular content posting, audience engagement, community management, hashtag optimization, and analytics. We carry out the day-to-day tasks and use data and insights to optimize the social media presence over time.',
  },
];

// 6 Small Business & Specialized Social Growth Solutions
const smallBizServices = [
  {
    num: '01',
    icon: '🏪',
    tag: 'LOCAL REACH & ROI',
    title: 'Small Business Marketing',
    desc: 'The strategies that can be utilized for promoting small businesses should be targeted and depend on the business objectives and finances. Building your online presence, connecting with relevant customers, developing content, and increasing online visibility is all achieved with a social media marketing service from us.',
  },
  {
    num: '02',
    icon: '🚀',
    tag: 'EARLY RAPPORT & AWARENESS',
    title: 'Startup Social Growth',
    desc: 'There is a need to create awareness and develop a rapport with the targeted audience for startups. We craft social media strategies focused on content, campaigns, engagement, and audience growth to make new businesses reputable in the digital landscape.',
  },
  {
    num: '03',
    icon: '✨',
    tag: 'CREATOR PARTNERSHIPS',
    title: 'Influencer Marketing Services',
    desc: 'Businesses can utilize influencer marketing to reach targeted viewers via relevant creators. We help brands establish genuine partnerships and connect with their audience in a meaningful way by managing influencer discovery, outreach, campaign preparation, collaboration, content coordination, and monitoring performance.',
  },
  {
    num: '04',
    icon: '🤝',
    tag: 'AGENCY PARTNER SOLUTION',
    title: 'White Label Management',
    desc: 'We offer social media management services that agencies can use without hiring a full team of social media workers. We also provide content creation, account management, campaign execution, creative work, and reporting while enabling agencies to offer services under their own brand.',
  },
  {
    num: '05',
    icon: '📈',
    tag: 'FULL-SPECTRUM ENGAGEMENT',
    title: 'Online SMM Services',
    desc: 'Our expert SMM professionals include content creation, audience management, engagement, paid promotion, and performance-tracking activities. We build real-world solutions that help you stay top of mind and enhance your brand\'s online reputation across social platforms.',
  },
  {
    num: '06',
    icon: '🎯',
    tag: 'BEHAVIOR & LOCATION ADS',
    title: 'Social Media Advertising',
    desc: 'Businesses can target audiences via paid social media ads, according to their location, interests, behaviors, and more. We develop and manage campaigns on the right platforms and measure, test, and optimize campaigns to drive traffic, inquiries, leads, and conversions.',
  },
];

// 6 FAQs (Closed by default per user specification)
const socialFaqs = [
  {
    q: 'What social media platforms do you manage for businesses?',
    a: 'We manage social media on platforms like Instagram, Facebook, LinkedIn, and YouTube based on your audience, industry, objectives, and how much time your customers spend online.',
  },
  {
    q: 'Do you create the social media content for us?',
    a: 'Yes. We prepare content planning, captions, creatives, reels, hashtags, posting plans, and campaign ideas aligned with your brand, and we take care of the rest.',
  },
  {
    q: 'Is social media marketing allowed to bring business leads and sales?',
    a: 'Yes. We blend organised content, targeted, engaged, and paid traffic to ensure that we reach the right audience and bring them to enquiries, bookings, or sales.',
  },
  {
    q: 'Do you provide social media marketing in Odia and English?',
    a: 'Yes. Content can be developed in English, Odia, or a combination of both, based on the audience, business location, and communication style.',
  },
  {
    q: 'How often will you be publishing on our social media?',
    a: 'This depends on your strategy and goals, as well as how often you post. We develop a consistent content calendar based on Reels, posts, stories, campaigns, etc.',
  },
  {
    q: 'How long does it take to see social media marketing results?',
    a: 'The timeline will depend on the industry, audience, content quality, and budget. Consistent strategy and optimization can gradually improve reach, engagement, inquiries, and overall online visibility.',
  },
];

export default function SocialMediaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. CENTERED HERO (COMPACT & SEAMLESS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>Social Media Marketing Agency · Bhubaneswar &amp; Odisha</span>
              </div>

              <h1 className={styles.heroTitle}>
                Strategic Social Media Marketing for{' '}
                <span className="accent-gradient">Business Growth</span>
              </h1>

              <p className={styles.heroSub}>
                From planning and content creation to advertising and daily management, we handle your social media presence with a clear focus on growth and engagement.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Build Your Social Presence" size="lg" />
                <a href="tel:+918280788689" className={styles.heroSecondaryBtn}>
                  <span>Talk to Our Social Media Experts</span>
                  <span>→</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Skeuomorphic Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>1.4M+</span>
                <span className={styles.tLabel}>Monthly Video Views</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>42%+</span>
                <span className={styles.tLabel}>3-Sec Hook Rate</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>&lt; 15s</span>
                <span className={styles.tLabel}>DM Lead Dispatch</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>4K FX3</span>
                <span className={styles.tLabel}>Cinema Gear SLA</span>
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
          3. CORE SERVICES: STRATEGY, CONTENT, ADS & MANAGEMENT
         ══════════════════════════════════════════════════ */}
      <section className={styles.servicesSection} id="social-services">
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div className={styles.eyebrow}>
              <span>Build a Stronger Social Media Presence</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Strategy, Content, Advertising &amp;{' '}
              <span className="accent-gradient">Account Management</span>
            </h2>
            <p className={styles.sectionDesc}>
              Our social media services combine strategy, creative content, advertising, and performance tracking to support long-term business growth.
            </p>
          </ScrollReveal>

          {/* 2x2 Grid of Core Cards */}
          <div className={styles.servicesGrid}>
            {coreServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.08} className={styles.cardCol}>
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

          {/* Visual Showcase Card with Image */}
          <ScrollReveal>
            <div className={styles.visualShowcaseCard}>
              <div className={styles.visualImgWrapper}>
                <Image
                  src="/images/Social media marketing.png"
                  alt="Nova Spark Social Media Marketing Bhubaneswar Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className={styles.showcaseImg}
                />
              </div>

              <div className={styles.visualContentWrapper}>
                <div className={styles.visualBadge}>
                  <span>⚡ ODISHA VIRAL ENGINE</span>
                </div>
                <h3 className={styles.visualTitle}>
                  Full-Lifecycle Content Production &amp; Community Growth
                </h3>
                <p className={styles.visualDesc}>
                  From high-retention 9:16 vertical video shoots to daily audience conversations and hyper-targeted lead funnels across Bhubaneswar.
                </p>

                <div className={styles.visualFeatures}>
                  <div className={styles.visualFeatureRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>High-retention 3-second hook scripting &amp; pro storyboards</span>
                  </div>
                  <div className={styles.visualFeatureRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Dynamic kinetic subtitles &amp; trending audio licensing</span>
                  </div>
                  <div className={styles.visualFeatureRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Direct comment-to-WhatsApp DM automation in sub-15s</span>
                  </div>
                  <div className={styles.visualFeatureRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Bi-weekly content calendar with Odia &amp; English resonance</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. BRAND BUILDING WITH SOCIAL MEDIA IN BHUBANESWAR
         ══════════════════════════════════════════════════ */}
      <section className={styles.brandSection}>
        <div className="container">
          <div className={styles.brandGrid}>
            <ScrollReveal className={styles.brandTextCol}>
              <div className={styles.eyebrow}>
                <span>Local Authority &amp; Market Leadership</span>
              </div>
              <h2 className={styles.brandTitle}>
                Build a Stronger Brand With Social Media Marketing in{' '}
                <span className="accent-gradient">Bhubaneswar</span>
              </h2>

              <p className={styles.brandLead}>
                Your social media presence can become a valuable business asset when it is backed by the right strategy. Social media marketing in Bhubaneswar can assist businesses in generating content, engaging target users, and establishing meaningful connections with them. Each strategy we create is customized to your industry, audience, competitors, and business objectives.
              </p>

              <p className={styles.brandParagraph}>
                Services include content strategy, creative production, platform oversight, paid social, influencer integration, and monitoring. Each campaign is written with a clear and consistent brand voice to promote engagement with your audience.
              </p>

              <p className={styles.brandParagraph}>
                Whether you are launching a new business or growing an established brand, we help you use social media with purpose. The result is a stronger online presence built around visibility, engagement, and sustainable business growth.
              </p>

              <div style={{ marginTop: '8px' }}>
                <BeamButton href="/contact" label="Start Building Your Brand Today" size="md" />
              </div>
            </ScrollReveal>

            <ScrollReveal className={styles.brandVisualCol}>
              <div className={styles.brandImgCard}>
                <Image
                  src="/images/zue_fashion_shoot.jpg"
                  alt="Nova Spark Social Media Client Shoot in Bhubaneswar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className={styles.brandImg}
                />
                <div className={styles.brandImgOverlay}>
                  <div className={styles.brandOverlayBadge}>VERIFIED CLIENT CAMPAIGN</div>
                  <h4 className={styles.brandOverlayTitle}>Zue Studio &amp; Lifestyle</h4>
                  <span className={styles.brandOverlayLoc}>📍 Saheed Nagar &amp; Patia Corridor, Bhubaneswar</span>
                </div>
              </div>

              {/* Verified Metrics Under Card */}
              <div className={styles.brandMetricsGrid}>
                <div className={styles.brandMetricCard}>
                  <div className={styles.brandMetricNum}>+340%</div>
                  <div className={styles.brandMetricLabel}>Store Walk-Ins</div>
                </div>
                <div className={styles.brandMetricCard}>
                  <div className={styles.brandMetricNum}>4.8X</div>
                  <div className={styles.brandMetricLabel}>Follower Scale</div>
                </div>
                <div className={styles.brandMetricCard}>
                  <div className={styles.brandMetricNum}>180+</div>
                  <div className={styles.brandMetricLabel}>Monthly Leads</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. SMALL BUSINESS SOCIAL GROWTH (6 CARDS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.smallBizSection}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div className={styles.eyebrow}>
              <span>Small Business Social Growth</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Social Media Marketing That Works for{' '}
              <span className="accent-gradient">Small Businesses</span>
            </h2>
            <p className={styles.sectionDesc}>
              Practical and cost-effective social media strategies designed to help small businesses improve online visibility, connect with the right audience, generate enquiries, and build a stronger digital presence.
            </p>
          </ScrollReveal>

          <div className={styles.smallBizGrid}>
            {smallBizServices.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.06} className={styles.cardCol}>
                <div className={styles.smallBizCard}>
                  <div>
                    <div className={styles.smallBizHeader}>
                      <div className={styles.smallBizIconBowl}>{item.icon}</div>
                      <span className={styles.smallBizTag}>{item.tag}</span>
                    </div>
                    <h3 className={styles.smallBizTitle}>{item.title}</h3>
                    <p className={styles.smallBizDesc}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. INTERACTIVE REELS & CONTENT STUDIO SIMULATOR
         ══════════════════════════════════════════════════ */}
      <SocialReelsStudioSimulator />

      {/* ══════════════════════════════════════════════════
          7. COMMON SOCIAL MEDIA MARKETING QUESTIONS (CLOSED BY DEFAULT)
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div className={styles.eyebrow}>
              <span>Need To Know</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Common Social Media{' '}
              <span className="accent-gradient">Marketing Questions</span>
            </h2>
            <p className={styles.sectionDesc}>
              Get clear answers about our social media marketing services, content strategy, audience engagement, paid campaigns, and how we help Bhubaneswar businesses grow online.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {socialFaqs.map((faq, idx) => {
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
          8. PRE-FOOTER CTA CARD (EXACT HOMEPAGE-STYLE .innerBox)
         ══════════════════════════════════════════════════ */}
      <section className={styles.homeCtaSection}>
        <div className="container">
          <div className={styles.homeCtaInnerBox}>
            <ScrollReveal className="text-center">
              <div className={styles.homeCtaEyebrow}>
                <span className={styles.homeCtaDot} />
                <span>SCALE YOUR BRAND ON SOCIAL MEDIA</span>
              </div>

              <h2 className={styles.homeCtaHeadline}>
                YOUR SOCIAL MEDIA NEEDS MORE THAN JUST{' '}
                <span className="accent-gradient">REGULAR POSTS</span>
              </h2>

              <p className={styles.homeCtaSub}>
                Get a free 30-minute social media strategy audit. We’ll review your current content, identify what’s holding back engagement, and map out a clear 30-day strategy to improve reach, engagement, and brand visibility in Bhubaneswar.
              </p>

              <div className={styles.homeCtaActions}>
                <BeamButton
                  href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20audit%20my%20business%20social%20media"
                  label="Get Your Free Social Media Audit →"
                  size="lg"
                />
                <BeamButton
                  href="/contact"
                  label="Talk to Our Social Media Team"
                  size="lg"
                  variant="outline"
                />
              </div>

              {/* Direct Contact Chips */}
              <div className={styles.homeCtaContacts}>
                <a href="tel:+918280788689" className={styles.homeCtaChip}>
                  <span className={styles.homeCtaLiveDot} />
                  <span>📞 Call Directly: +91 8280788689</span>
                </a>
                <span className={styles.homeCtaChip}>
                  <span>📍 Office: Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar</span>
                </span>
                <span className={styles.homeCtaChip}>
                  <span>⚡ &lt; 15-Minute Response</span>
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
