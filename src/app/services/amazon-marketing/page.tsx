'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// Interactive Components & Regional Connect
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';

import styles from './amazon-marketing-page.module.css';

// 4 Pillars of Why Choose Nova Spark Digital
const whyChoosePillars = [
  {
    icon: '📊',
    badge: 'EMPIRICAL DECISIONS',
    title: 'Data-Focused Approach',
    desc: "Campaign performance, search terms, keyword data, and customer behavior are used to inform our Amazon marketing decisions. We don't make assumptions; we just study what is working and what needs improvement. This helps us determine wasted expenditure, better opportunities, and ways you can optimize your Amazon advertising strategy.",
  },
  {
    icon: '🎯',
    badge: 'TAILORED ROADMAPS',
    title: 'Clear & Practical Strategy',
    desc: "Each Amazonian business is unique, with unique products, customers, competition, and growth objectives. We develop strategies according to your individual needs and not for all accounts at the same time. Whether it's keyword targeting, PPC campaigns, or listing optimization, our strategy is all about building relevant visibility and supporting your business objectives.",
  },
  {
    icon: '⚡',
    badge: 'UNIFIED FLYWHEEL',
    title: 'SEO + PPC Approach',
    desc: 'Amazon PPC can help you gain visibility in the short term, and Amazon SEO can help you grow your business organically over the long term. We combine both approaches to make a stronger product presence. We can use keyword research, listing optimization, and advertising to get your products in front of customers who are searching for them.',
  },
  {
    icon: '⚙️',
    badge: 'CONTINUOUS REFINEMENT',
    title: 'Ongoing Optimization',
    desc: "It's important to keep an eye on campaigns regularly, as the search trends and competition may vary with time. Important data, search terms, targeting, and advertising performance are reviewed to look for areas for improvement. Our ongoing optimization helps control unnecessary spending, improve campaign efficiency, and find new opportunities for growth.",
  },
];

// 5-Step Amazon Marketing Process
const amazonProcessSteps = [
  {
    step: '1',
    title: 'Account & Competitor Analysis',
    desc: 'We analyze your Amazon account, products, existing campaigns, and competition to learn about your performance, market positioning, advertising activity, and any areas for improvement.',
  },
  {
    step: '2',
    title: 'Keyword & Listing Research',
    desc: 'We identify relevant customer search terms and optimize your product listings with suitable keywords, clear information, and customer-focused content to improve relevance and product visibility.',
  },
  {
    step: '3',
    title: 'PPC Campaign Setup',
    desc: 'We develop structured Amazon PPC campaigns based on your product, the right keywords, the right audience, and your goals, with the right targeting approach to reach the right shoppers and control your ad spend.',
  },
  {
    step: '4',
    title: 'Monitoring & Optimization',
    desc: 'We regularly review campaign performance, search terms, bids, targeting, and spending. We are constantly making improvements based on the information and looking for new opportunities for growth.',
  },
  {
    step: '5',
    title: 'Reporting & Growth Insights',
    desc: 'Clear performance reporting of key campaign metrics, spending, and opportunities is provided. These insights can help you interpret results, make informed decisions, and plan your next Amazon marketing moves.',
  },
];

// 6 Frequently Asked Questions
const amazonFaqs = [
  {
    q: 'What is the role of an Amazon marketing agency?',
    a: 'An Amazon marketing agency can help businesses optimize their products, conduct keyword research, enhance their Amazon SEO, manage Amazon PPC campaigns, and monitor competitors to boost sales opportunities and visibility.',
  },
  {
    q: 'How does Amazon PPC work?',
    a: 'Amazon PPC enables sellers to promote products to the relevant customers. Ad budgets typically depend on user engagement with ads, and targeting and bidding determine what products can show up.',
  },
  {
    q: 'Can Amazon SEO and PPC work together?',
    a: 'Yes. Amazon SEO and PPC can complement each other. PPC can provide visibility and valuable keyword data, while listing optimization can improve product relevance and the customer experience.',
  },
  {
    q: 'How long does Amazon marketing take to show results?',
    a: 'The timeline varies based on competition, product category, listing quality, pricing, advertising budget, and existing account performance. PPC can deliver immediate visibility, whereas organic growth is more likely to be a long-term process.',
  },
  {
    q: 'Do you manage Amazon PPC campaigns?',
    a: 'Yes. Nova Spark Digital can help with Amazon PPC campaign setup, keyword research, targeting, bid optimization, search-term analysis, negative keywords, monitoring, and reporting.',
  },
  {
    q: 'Can you help with a new Amazon product launch?',
    a: 'Yes. We can help with new product listings, keyword research, competitor analysis, PPC campaign creation, and performance monitoring.',
  },
];

export default function AmazonMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. CENTERED CINEMATIC HERO
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>Amazon Growth &amp; PPC · Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                Turn Amazon Searches Into{' '}
                <span className="accent-gradient">More Sales</span>
              </h1>

              <p className={styles.heroSub}>
                We combine Amazon SEO, keyword targeting, product listing optimisation, and performance-focused PPC campaigns to put your products in front of relevant shoppers and create more opportunities for profitable growth.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Start Growing on Amazon" size="lg" arrow={true} />
                <BeamButton
                  href="#ppc-services"
                  label="Explore Our PPC Services"
                  size="lg"
                  variant="outline"
                  arrow={true}
                />
              </div>

              {/* 3 Core Skeuomorphic Value Pills in Hero */}
              <div className={styles.heroPillarsStrip}>
                <div className={styles.heroPillarBadge}>
                  <span className={styles.heroPillarIcon}>✓</span>
                  <span>Amazon PPC Campaign Management</span>
                </div>
                <div className={styles.heroPillarBadge}>
                  <span className={styles.heroPillarIcon}>✓</span>
                  <span>Keyword &amp; Listing Optimisation</span>
                </div>
                <div className={styles.heroPillarBadge}>
                  <span className={styles.heroPillarIcon}>✓</span>
                  <span>Performance-Focused Growth</span>
                </div>
              </div>

              <div className={styles.heroTrustBadges}>
                <div className={styles.trustItem}>
                  <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Amazon Ads Verified Partner
                </div>
                <div className={styles.trustItem}>
                  <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Sub-20% ACoS Guardrail
                </div>
                <div className={styles.trustItem}>
                  <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  99%+ Buy Box Win Rate
                </div>
              </div>
            </ScrollReveal>

            {/* Horizontal Skeuomorphic Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>18.4%</span>
                <span className={styles.tLabel}>Average Portfolio ACoS</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>99.4%</span>
                <span className={styles.tLabel}>Buy Box Ownership</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>+28%</span>
                <span className={styles.tLabel}>A+ Content Conversion Lift</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>₹14 Cr+</span>
                <span className={styles.tLabel}>Amazon GMV Generated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. REGIONAL MAP SECTION (PLACED JUST BELOW HERO)
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          3. HOW AMAZON PPC SUPPORTS ECOMMERCE GROWTH
         ══════════════════════════════════════════════════ */}
      <section className={styles.ppcSupportSection}>
        <div className="container">
          <div className={styles.ppcSupportGrid}>
            <ScrollReveal>
              <div className={styles.sectionHeaderBadge}>
                <span className={styles.badgeDot} />
                <span>MARKETPLACE INTELLIGENCE &amp; SYNERGY</span>
              </div>
              <h2 className={styles.sectionHeading}>
                How Amazon PPC Supports Ecommerce Growth
              </h2>
              <p className={styles.narrativeParagraph}>
                Amazon PPC doesn&apos;t need to create clicks and sales. It can give you a good idea of what customers are searching for, what keywords they click on, and what products are more likely to be sold with paid advertising.
              </p>
              <p className={styles.narrativeParagraph}>
                The information gleaned from PPC campaigns can help companies make better marketing choices. Good search phrases can be used in product titles and descriptions, content, and Amazon SEO. Likewise, campaign performance can reveal products, audiences, and categories with greater sales potential.
              </p>
              <p className={styles.narrativeParagraph}>
                Integrating Amazon PPC with other marketing channels can lead to a more holistic marketing strategy for e-commerce businesses. A complete digital marketing agency in Bhubaneswar can integrate Amazon ads, SEO, content marketing, and paid marketing to boost visibility in various digital channels.
              </p>
              <div className={styles.highlightPillBox}>
                <span className={styles.highlightIcon}>💡</span>
                <span className={styles.highlightPillText}>
                  Amazon search term telemetry directly enriches organic listings, Google Ads keyword sets, and cross-channel merchandising.
                </span>
              </div>
            </ScrollReveal>

            {/* Skeuomorphic Intelligence Card */}
            <ScrollReveal delay={0.15}>
              <div className={styles.intelCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.intelHeader}>
                  <div className={styles.intelTitleWrap}>
                    <span className={styles.intelHeaderIcon}>🔄</span>
                    <span className={styles.intelTitle}>Cross-Channel Synergy Loop</span>
                  </div>
                  <span className={styles.intelBadge}>DATA-DRIVEN</span>
                </div>

                <div className={styles.intelList}>
                  <div className={styles.intelItem}>
                    <div className={styles.intelIconBox}>🔍</div>
                    <div className={styles.intelItemContent}>
                      <span className={styles.intelItemTitle}>Customer Search Query Intelligence</span>
                      <span className={styles.intelItemDesc}>Uncovering high-converting purchase queries and buying intent patterns.</span>
                    </div>
                  </div>

                  <div className={styles.intelItem}>
                    <div className={styles.intelIconBox}>📝</div>
                    <div className={styles.intelItemContent}>
                      <span className={styles.intelItemTitle}>Listing SEO &amp; Title Reinforcement</span>
                      <span className={styles.intelItemDesc}>Deploying verified search terms into titles, bullet points, and backend search terms.</span>
                    </div>
                  </div>

                  <div className={styles.intelItem}>
                    <div className={styles.intelIconBox}>🎯</div>
                    <div className={styles.intelItemContent}>
                      <span className={styles.intelItemTitle}>Cross-Channel Digital Marketing</span>
                      <span className={styles.intelItemDesc}>Connecting Amazon ad data with Google Search, Meta ads, and content marketing.</span>
                    </div>
                  </div>

                  <div className={styles.intelItem}>
                    <div className={styles.intelIconBox}>📈</div>
                    <div className={styles.intelItemContent}>
                      <span className={styles.intelItemTitle}>Organic Rank Flywheel Acceleration</span>
                      <span className={styles.intelItemDesc}>Higher sales velocity naturally pushes your products up organic search rankings.</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. WHY CHOOSE NOVA SPARK DIGITAL FOR AMAZON MARKETING?
         ══════════════════════════════════════════════════ */}
      <section className={styles.whyChooseSection}>
        <div className="container">
          <ScrollReveal className={styles.whyChooseHeader}>
            <div className={styles.sectionHeaderBadge}>
              <span className={styles.badgeDot} />
              <span>THE NOVA SPARK ADVANTAGE</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Why Choose Nova Spark Digital for Amazon Marketing?
            </h2>
            <p className={styles.narrativeParagraph}>
              Choosing the right marketing partner can make a difference when managing a competitive ecommerce marketplace.
            </p>
          </ScrollReveal>

          {/* 4 Skeuomorphic Pillar Cards */}
          <div className={styles.whyPillarsGrid}>
            {whyChoosePillars.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} className={styles.whyCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.whyCardTop}>
                  <div className={styles.whyIconBox}>{pillar.icon}</div>
                  <span className={styles.whyCardBadge}>{pillar.badge}</span>
                </div>
                <h3 className={styles.whyCardTitle}>{pillar.title}</h3>
                <p className={styles.whyCardDesc}>{pillar.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. AMAZON MARKETING AGENCY IN BHUBANESWAR
         ══════════════════════════════════════════════════ */}
      <section className={styles.agencySection} id="ppc-services">
        <div className="container">
          <ScrollReveal>
            <div className={styles.agencyCard}>
              <div className={styles.cardGlassGloss} />
              <div className={styles.agencyLeft}>
                <div className={styles.sectionHeaderBadge}>
                  <span className={styles.badgeDot} />
                  <span>LOCAL ROOTS · PAN-INDIA SCALE</span>
                </div>
                <h2 className={styles.sectionHeading}>
                  Amazon Marketing Agency in Bhubaneswar
                </h2>
                <p className={styles.narrativeParagraph}>
                  Nova Spark Digital is an Amazon marketing agency in Bhubaneswar that can help you make a stronger presence on Amazon.
                </p>
                <p className={styles.narrativeParagraph}>
                  We handle businesses looking to boost product visibility, optimize their Amazon listing, and leverage Amazon advertising more effectively.
                </p>
                <p className={styles.narrativeParagraph}>
                  Being based in Bhubaneswar, we know the needs of local businesses, and our digital marketing strategy can work well for brands that target customers from all over India and the world.
                </p>
                <p className={styles.narrativeParagraph}>
                  Our Amazon marketing strategies are designed for startups, expanding e-commerce businesses, and established brands alike, depending on your current stage and growth objectives.
                </p>

                <div style={{ marginTop: '20px' }}>
                  <BeamButton href="/contact" label="Start Growing on Amazon" size="md" arrow={true} />
                </div>
              </div>

              <div className={styles.agencyRight}>
                <div className={styles.agencyMiniCard}>
                  <div className={styles.miniIconBox}>🏙️</div>
                  <div>
                    <div className={styles.agencyMiniTitle}>Bhubaneswar Local Insight</div>
                    <div className={styles.agencyMiniSub}>Hands-on regional support tailored to regional manufacturers &amp; founders.</div>
                  </div>
                </div>

                <div className={styles.agencyMiniCard}>
                  <div className={styles.miniIconBox}>🌐</div>
                  <div>
                    <div className={styles.agencyMiniTitle}>Pan-India &amp; Global Reach</div>
                    <div className={styles.agencyMiniSub}>Proven playbooks scaling listings across Amazon India, USA, and GCC markets.</div>
                  </div>
                </div>

                <div className={styles.agencyMiniCard}>
                  <div className={styles.miniIconBox}>🚀</div>
                  <div>
                    <div className={styles.agencyMiniTitle}>Startups &amp; Enterprise Brands</div>
                    <div className={styles.agencyMiniSub}>Custom execution whether launching your first SKU or scaling 500+ ASINs.</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SKEUOMORPHIC SHOWCASE & PPC COMMAND CENTER
         ══════════════════════════════════════════════════ */}
      <section className={styles.showcaseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.showcaseCard}>
              <div className={styles.cardGlassGloss} />

              {/* Left Column: Strategic PPC Capabilities */}
              <div className={styles.showcaseLeft}>
                <div className={styles.sectionHeaderBadge}>
                  <span className={styles.badgeDot} />
                  <span>SELLER CENTRAL ANALYTICS &amp; PPC COMMAND</span>
                </div>
                <h2 className={styles.sectionHeading}>
                  Engineered Amazon PPC That Protects Margins &amp; Powers Organic Rank
                </h2>
                <p className={styles.narrativeParagraph}>
                  Amazon PPC is far more than automated bidding. It is your most powerful intelligence engine. When managed with surgical accuracy, paid campaigns reveal exact shopper intent, harvest high-converting search queries, and drive the sales velocity needed to dominate Page 1 organic placements.
                </p>
                <p className={styles.narrativeParagraph}>
                  At Nova Spark Digital, our Amazon specialists structure strict keyword silos, continuous negative match pruning, and automated dayparting schedules to maintain aggressive Top-of-Search visibility at the lowest possible ACoS.
                </p>

                <div className={styles.showcasePoints}>
                  <div className={styles.showcasePointItem}>
                    <div className={styles.showcasePointIcon}>🎯</div>
                    <div className={styles.showcasePointText}>
                      <span className={styles.showcasePointTitle}>Surgical Campaign Architecture</span>
                      <span className={styles.showcasePointDesc}>
                        Isolated Exact, Phrase, and Broad discovery campaigns with negative cross-pollination to eliminate wasted click spend.
                      </span>
                    </div>
                  </div>

                  <div className={styles.showcasePointItem}>
                    <div className={styles.showcasePointIcon}>📈</div>
                    <div className={styles.showcasePointText}>
                      <span className={styles.showcasePointTitle}>Organic Rank Velocity Multiplier</span>
                      <span className={styles.showcasePointDesc}>
                        Targeted Top-of-Search placement elevates core keyword ranking naturally, compounding sales volume without endless ad inflation.
                      </span>
                    </div>
                  </div>

                  <div className={styles.showcasePointItem}>
                    <div className={styles.showcasePointIcon}>🛡️</div>
                    <div className={styles.showcasePointText}>
                      <span className={styles.showcasePointTitle}>ASIN &amp; Competitor Defense</span>
                      <span className={styles.showcasePointDesc}>
                        Defend your product detail pages against rival ad conquests while strategically capturing competitor market share.
                      </span>
                    </div>
                  </div>
                </div>

                <BeamButton
                  href="/contact"
                  label="Request a Free Amazon Account Audit"
                  size="md"
                  arrow={true}
                />
              </div>

              {/* Right Column: Skeuomorphic Image Frame with Floating Telemetry */}
              <div className={styles.showcaseRight}>
                <div className={styles.showcaseImageContainer}>
                  <div className={styles.showcaseImageFrame}>
                    <div className={styles.cardGlassGloss} />
                    <Image
                      src="/images/amazon_ppc_showcase.jpg"
                      alt="Amazon Seller Central advertising dashboard workstation showing PPC campaign analytics, sales, spend, and ACoS trends"
                      width={800}
                      height={500}
                      className={styles.showcaseImg}
                      priority
                    />
                  </div>

                  {/* Tactile Floating Badges */}
                  <div className={styles.floatingBadgeTop}>
                    <span className={styles.badgeIcon}>📊</span>
                    <span>
                      <strong className={styles.badgeMetric}>20.57% Target ACoS</strong> • Profitable Scale
                    </span>
                  </div>

                  <div className={styles.floatingBadgeBottom}>
                    <span className={styles.badgeIcon}>🏆</span>
                    <span>
                      <strong className={styles.badgeMetric}>415+ Daily Orders</strong> • High Margin
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. OUR AMAZON MARKETING PROCESS (5 STEPS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.processSection}>
        <div className="container">
          <ScrollReveal className={styles.processHeader}>
            <div className={styles.sectionHeaderBadge}>
              <span className={styles.badgeDot} />
              <span>STRUCTURED EXECUTION BLUEPRINT</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Our Amazon Marketing Process
            </h2>
            <p className={styles.narrativeParagraph}>
              We follow a structured process to understand your products and create a strategy that fits your business.
            </p>
          </ScrollReveal>

          {/* Row 1: Steps 1, 2, 3 */}
          <div className={styles.processGrid}>
            {amazonProcessSteps.slice(0, 3).map((stepItem, idx) => (
              <ScrollReveal key={stepItem.step} delay={idx * 0.08} className={styles.processCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>Step {stepItem.step}</span>
                </div>
                <h3 className={styles.processCardTitle}>{stepItem.title}</h3>
                <p className={styles.processCardDesc}>{stepItem.desc}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2: Steps 4, 5 centered */}
          <div className={styles.processGridRow2}>
            {amazonProcessSteps.slice(3, 5).map((stepItem, idx) => (
              <ScrollReveal key={stepItem.step} delay={0.24 + idx * 0.08} className={styles.processCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>Step {stepItem.step}</span>
                </div>
                <h3 className={styles.processCardTitle}>{stepItem.title}</h3>
                <p className={styles.processCardDesc}>{stepItem.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EDITORIAL CLIENT CASE STUDY
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseStudySection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.caseStudyCard}>
              <div className={styles.cardGlassGloss} />
              <div className={styles.caseStudyMedia}>
                <Image
                  src="/images/heed_1.png"
                  alt="Heed Organics Ayurvedic product on Amazon India"
                  width={800}
                  height={600}
                />
                <div className={styles.clientBadgeOverlay}>
                  Client Spotlight · Ayurvedic Wellness
                </div>
              </div>

              <div className={styles.caseStudyContent}>
                <div className={styles.caseKicker}>D2C Brand Acceleration · Amazon India</div>
                <h3 className={styles.caseTitle}>
                  How Heed Organics Reached #1 Category Best Seller While Cutting ACoS by 44%
                </h3>
                <p className={styles.caseSummary}>
                  Heed Organics had high-quality organic formulations but suffered from 42% ACoS bleed under an
                  unsegmented auto-campaign agency. Nova Spark Digital restructured their catalog into single-ASIN exact match silos,
                  optimized listing keywords, and unlocked #1 Best Seller status.
                </p>

                <div className={styles.metricPillsRow}>
                  <div className={styles.metricPill}>
                    <span className={styles.metricPillNumber}>16.2%</span>
                    <span className={styles.metricPillDesc}>Optimized ACoS</span>
                  </div>
                  <div className={styles.metricPill}>
                    <span className={styles.metricPillNumber}>#1 Rank</span>
                    <span className={styles.metricPillDesc}>Best Seller Badge</span>
                  </div>
                  <div className={styles.metricPill}>
                    <span className={styles.metricPillNumber}>+215%</span>
                    <span className={styles.metricPillDesc}>Monthly GMV Lift</span>
                  </div>
                </div>

                <div className={styles.caseQuote}>
                  &ldquo;Nova Spark Digital completely transformed our Amazon presence. The new listing optimization and negative keyword targeting slashed our ad spend in half while tripling our monthly sales.&rdquo;
                  <span className={styles.quoteAuthor}>— Pratik S., Founder, Heed Organics</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. FREQUENTLY ASKED QUESTIONS (FAQ)
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className={styles.sectionHeaderBadge}>
              <span className={styles.badgeDot} />
              <span>CLEAR EXPLANATIONS</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Frequently Asked Questions About Amazon Growth
            </h2>
            <p className={styles.narrativeParagraph}>
              Clear answers to help you navigate Amazon PPC management, SEO synergy, and marketplace scaling.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {amazonFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={styles.faqRow}>
                  <button
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
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
          8. BOTTOM CONVERSION TERMINAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.executiveTerminal}>
              <div className={styles.termGlow} />
              <div className={styles.cardGlassGlossDark} />
              <div className={styles.termContent}>
                <span className={styles.termPill}>Make Every Amazon Ad Rupee Count</span>
                <h2 className={styles.termTitle}>
                  Ready to Scale Your Amazon Sales With Smarter PPC?
                </h2>
                <p className={styles.termSub}>
                  Request an Amazon PPC audit to uncover inefficient campaigns, irrelevant search terms, missed keyword opportunities, and areas where your advertising strategy can perform better.
                </p>
                <div className={styles.termContact}>
                  <span>Direct Line:</span>
                  <a href="tel:+919876543210" className={styles.termPhone}>
                    +91 98765 43210
                  </a>
                  <span>·</span>
                  <span>Bhubaneswar HQ (Patia Corridor)</span>
                </div>
              </div>

              <div className={styles.termActions}>
                <BeamButton href="/contact" label="Request Your PPC Audit" size="lg" arrow={true} />
                <BeamButton
                  href="/services"
                  label="View All Digital Marketing Services"
                  size="lg"
                  variant="outline"
                  arrow={true}
                  className={styles.termSecondaryInner}
                  wrapperClassName={styles.termSecondaryWrapper}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
