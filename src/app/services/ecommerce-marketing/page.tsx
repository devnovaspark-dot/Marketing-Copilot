'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// Supporting Components
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';

import styles from './ecommerce-page.module.css';

// 5 Core Ecommerce Marketing Services
const ecommerceServices = [
  {
    icon: '🔍',
    badge: 'ORGANIC STORE SEARCH',
    title: 'Ecommerce SEO',
    desc: "Boost your e-commerce website's ranking on Google and get your products found by customers. Optimizing product pages, category pages, keywords, technical SEO, internal links, images, content, and schema to bring in relevant organic traffic and boost search performance for your store.",
  },
  {
    icon: '🎯',
    badge: 'SHOPPING & SEARCH ADS',
    title: 'Google Ads for Ecommerce',
    desc: 'Connect with customers actively looking for products such as yours. We develop and optimize Google Ads Search and Shopping campaigns, delivering relevant traffic with targeted campaigns, product feeds, ad copy, conversion tracking, and continuous optimization for better e-commerce outcomes.',
  },
  {
    icon: '📱',
    badge: 'META ACQUISITION & CAPI',
    title: 'Meta Ads for Ecommerce Brands',
    desc: 'Connect with potential customers on Facebook and Instagram by targeting them with a Facebook ad. We develop campaigns for product discovery, targeting, retargeting, and conversions. We create ads, write copy, track and optimize, and help e-commerce brands attract new customers and convert interested website visitors.',
  },
  {
    icon: '✨',
    badge: 'COMMUNITY & RETENTION',
    title: 'E-commerce Social Media Marketing',
    desc: 'Establish a uniform online social media presence aligned with your e-commerce objectives. Product posts, Instagram Reels, carousels, creative product promotion, educational content, or campaigns for Instagram & Facebook. Our strategy helps increase product awareness, engagement, and customer interest through useful and engaging content.',
  },
  {
    icon: '✍️',
    badge: 'PERSUASIVE BUYER COPY',
    title: 'E-commerce Content Marketing',
    desc: 'Provide valuable information to enable your customers to make informed purchases. We create product descriptions, SEO blogs, buying guides, and promotional copy. Each piece is planned around your products, audience, and search needs to support e-commerce growth.',
  },
];

// 6-Step Ecommerce Marketing Process
const ecommerceProcessSteps = [
  {
    step: '01',
    title: 'Business & Store Audit',
    desc: 'We start by understanding your e-commerce website, products, competitors, existing marketing activities, and current challenges.',
  },
  {
    step: '02',
    title: 'Audience & Keyword Research',
    desc: 'We identify your target customers, their search behavior, interests, and buying intent.',
  },
  {
    step: '03',
    title: 'Marketing Strategy',
    desc: 'Based on our findings, we develop a practical marketing roadmap covering the channels most relevant to your business.',
  },
  {
    step: '04',
    title: 'Campaign & Content Setup',
    desc: 'Our team works on SEO, ads, creatives, content, landing pages, and tracking according to the agreed strategy.',
  },
  {
    step: '05',
    title: 'Launch & Monitor',
    desc: 'Once campaigns are live, we monitor performance and identify opportunities for optimization.',
  },
  {
    step: '06',
    title: 'Optimize & Scale',
    desc: 'We use campaign data and customer behavior to refine targeting, creatives, landing pages, and marketing priorities.',
  },
];

// 6 Frequently Asked Questions
const ecommerceFaqs = [
  {
    q: 'What does an e-commerce marketing agency do?',
    a: 'An e-commerce marketing agency can assist online retailers in reaching potential customers, enhancing web visibility, driving website traffic, and boosting conversions via SEO, paid advertising, social media, content, and optimization.',
  },
  {
    q: 'How can e-commerce SEO help my online store?',
    a: 'Product and category pages can be optimized to rank higher in search engine results, ensuring that your e-commerce store draws in your target audience.',
  },
  {
    q: 'Should I invest in Google Ads or Meta Ads?',
    a: 'It will depend on your products, your audience, and your goals. Google Ads can tap into existing search intent, and Meta Ads can help with product discovery, targeting, and retargeting.',
  },
  {
    q: 'Can you manage both SEO and paid advertising?',
    a: 'Yes. A combined approach can help e-commerce businesses build long-term organic visibility while using paid campaigns to reach relevant audiences and generate immediate traffic.',
  },
  {
    q: 'Do you work with new e-commerce businesses?',
    a: 'Yes. New stores could greatly benefit from having their SEO, tracking, content, advertising, and conversion strategy established early.',
  },
  {
    q: 'Can you help e-commerce businesses outside Bhubaneswar?',
    a: 'Yes. As an e-commerce marketing agency in India, e-commerce campaigns can be designed for businesses with customers all over Odisha, India, and more.',
  },
];

export default function EcommerceMarketingPage() {
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
                <span>Ecommerce Marketing That Drives Traffic, Sales &amp; Brand Growth</span>
              </div>

              <h1 className={styles.heroTitle}>
                Scale Your <span className="accent-gradient">Online Store</span>
              </h1>

              <p className={styles.heroSub}>
                We combine e-commerce SEO, Google Shopping, Meta Ads, content, and conversion optimisation to help Bhubaneswar businesses reach high-intent customers and build a stronger online presence.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Start Your Ecommerce Growth Plan" size="lg" arrow={true} />
                <BeamButton
                  href="#store-audit"
                  label="Request a Free Store Audit"
                  size="lg"
                  variant="outline"
                  arrow={false}
                  icon={<span style={{ marginRight: '6px' }}>↓</span>}
                />
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>EK</span>
                  <span className={styles.trustAvatar}>ZS</span>
                  <span className={styles.trustAvatar}>SP</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+45</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Trusted by 45+ D2C Brands Across India &amp; Odisha
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Skeuomorphic Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>₹4.2 Cr+</span>
                <span className={styles.tLabel}>Monthly D2C GMV</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>4.8x</span>
                <span className={styles.tLabel}>Avg Blended ROAS</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>-55%</span>
                <span className={styles.tLabel}>COD RTO Reduction</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>98%</span>
                <span className={styles.tLabel}>CAPI Match Quality</span>
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
          3. WHAT MAKES ECOMMERCE MARKETING DIFFERENT?
         ══════════════════════════════════════════════════ */}
      <section className={styles.diffSection}>
        <div className="container">
          <div className={styles.diffGrid}>
            <ScrollReveal>
              <div className={styles.sectionHeaderBadge}>
                <span className={styles.badgeDot} />
                <span>THE ECOMMERCE PARADIGM SHIFT</span>
              </div>
              <h2 className={styles.sectionHeading}>
                What Makes Ecommerce Marketing Different?
              </h2>
              <p className={styles.narrativeParagraph}>
                With traditional marketing, it&apos;s all about creating awareness, whereas with e-commerce marketing, it&apos;s about taking the customer from discovery to purchase. A customer can see your product for the first time on Instagram, then find your brand on Google, then click a paid advertisement, visit your website, compare products, and then come back later to buy.
              </p>
              <p className={styles.narrativeParagraph}>
                It is important to build a consistent experience around all digital interactions. SEO, paid ads, social media, content, and the website should all be aligned to support the customer journey.
              </p>
              <p className={styles.narrativeParagraph}>
                We approach ecommerce marketing in a holistic way, linking all the pieces together to reach the right people, foster trust, enhance engagement, and generate additional conversions at Nova Spark Digital.
              </p>
              <div className={styles.highlightPillBox}>
                <span className={styles.highlightIcon}>💡</span>
                <span className={styles.highlightPillText}>
                  Holistic omnichannel synchronization transforms casual browsers into high-LTV repeat buyers.
                </span>
              </div>
            </ScrollReveal>

            {/* Skeuomorphic Connected Journey Card */}
            <ScrollReveal delay={0.15}>
              <div className={styles.journeyCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.journeyHeader}>
                  <div className={styles.journeyTitleWrap}>
                    <span className={styles.journeyHeaderIcon}>🔄</span>
                    <span className={styles.journeyTitle}>Connected Customer Journey</span>
                  </div>
                  <span className={styles.journeyBadge}>FULL FUNNEL</span>
                </div>

                <div className={styles.journeyFlow}>
                  <div className={styles.journeyStep}>
                    <div className={styles.stepIconBadge}>📱</div>
                    <div className={styles.stepInfo}>
                      <span className={styles.stepTitle}>1. Discovery on Instagram</span>
                      <span className={styles.stepSub}>Engaging reels, carousels &amp; Meta product discovery ads</span>
                    </div>
                  </div>

                  <div className={styles.journeyStep}>
                    <div className={styles.stepIconBadge}>🔍</div>
                    <div className={styles.stepInfo}>
                      <span className={styles.stepTitle}>2. High-Intent Google Search</span>
                      <span className={styles.stepSub}>Product &amp; category SEO plus Google Shopping placement</span>
                    </div>
                  </div>

                  <div className={styles.journeyStep}>
                    <div className={styles.stepIconBadge}>🎯</div>
                    <div className={styles.stepInfo}>
                      <span className={styles.stepTitle}>3. Retargeting &amp; Social Proof</span>
                      <span className={styles.stepSub}>Dynamic catalog ads re-engaging interested shoppers</span>
                    </div>
                  </div>

                  <div className={styles.journeyStep}>
                    <div className={styles.stepIconBadge}>🛍️</div>
                    <div className={styles.stepInfo}>
                      <span className={styles.stepTitle}>4. Storefront Comparison</span>
                      <span className={styles.stepSub}>High-converting product pages, reviews &amp; instant trust cues</span>
                    </div>
                  </div>

                  <div className={styles.journeyStep}>
                    <div className={styles.stepIconBadge}>⚡</div>
                    <div className={styles.stepInfo}>
                      <span className={styles.stepTitle}>5. Seamless Purchase &amp; Loyalty</span>
                      <span className={styles.stepSub}>Frictionless checkout, COD verification &amp; retention flows</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. GROW YOUR ONLINE STORE WITH RESULT-DRIVEN MARKETING
         ══════════════════════════════════════════════════ */}
      <section className={styles.growStoreSection}>
        <div className="container">
          <div className={styles.growGrid}>
            <ScrollReveal className={styles.growNarrativeBox}>
              <div className={styles.sectionHeaderBadge}>
                <span className={styles.badgeDot} />
                <span>PROVEN COMMERCE SCALING</span>
              </div>
              <h2 className={styles.sectionHeading}>
                Grow Your Online Store With Result-Driven Ecommerce Marketing
              </h2>
              <p className={styles.narrativeParagraph}>
                Your e-commerce website is more than a digital storefront. It&apos;s the place where your customers find your products, make comparisons, trust you, and make their purchase.
              </p>
              <p className={styles.narrativeParagraph}>
                With Nova Spark Digital, e-commerce and D2C brands in India can attain more website visibility, draw in the right visitors, and convert traffic into sales. Our ecommerce marketing services include ecommerce SEO, Google Ads, Meta Ads, socials, content, conversion optimization, and performance tracking to give you a full growth plan.
              </p>
              <p className={styles.narrativeParagraph}>
                From starting a new online business to managing low sales to scaling up your e-commerce business, we develop marketing strategies around your products, audience, and business objectives.
              </p>
            </ScrollReveal>

            {/* 3 Skeuomorphic Pillars of E-Commerce Growth */}
            <div className={styles.growPillarsRow}>
              <ScrollReveal delay={0.05} className={styles.pillarCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.pillarIconBox}>🛍️</div>
                <h3 className={styles.pillarTitle}>Beyond A Storefront</h3>
                <p className={styles.pillarDesc}>
                  We create immersive product experiences where customers evaluate options, build genuine brand confidence, and convert with certainty.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.12} className={styles.pillarCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.pillarIconBox}>📈</div>
                <h3 className={styles.pillarTitle}>Qualified Store Visibility</h3>
                <p className={styles.pillarDesc}>
                  Connect with buyers throughout Bhubaneswar and across India who possess genuine purchase intent for your specific catalogue.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.19} className={styles.pillarCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.pillarIconBox}>🎯</div>
                <h3 className={styles.pillarTitle}>Tailored Full Growth Plan</h3>
                <p className={styles.pillarDesc}>
                  Whether you are launching, fixing sluggish sales, or scaling past revenue milestones, your strategy is custom-built around your unit economics.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. ECOMMERCE MARKETING SERVICES IN INDIA
         ══════════════════════════════════════════════════ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <ScrollReveal className={styles.servicesHeader}>
            <div className={styles.sectionHeaderBadge}>
              <span className={styles.badgeDot} />
              <span>COMPREHENSIVE CAPABILITIES</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Ecommerce Marketing Services in India
            </h2>
            <p className={styles.narrativeParagraph}>
              A successful ecommerce business needs more than traffic. You need the right people visiting your store, a smooth buying experience, and marketing campaigns that encourage customers to return.
            </p>
          </ScrollReveal>

          {/* Row 1: 3 Skeuomorphic Service Cards */}
          <div className={styles.servicesGrid}>
            {ecommerceServices.slice(0, 3).map((srv, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} className={styles.serviceCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.serviceCardTop}>
                  <div className={styles.serviceIconBox}>{srv.icon}</div>
                  <span className={styles.serviceBadge}>{srv.badge}</span>
                </div>
                <h3 className={styles.serviceCardTitle}>{srv.title}</h3>
                <p className={styles.serviceCardDesc}>{srv.desc}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2: 2 Skeuomorphic Service Cards Centered */}
          <div className={styles.servicesGridRow2}>
            {ecommerceServices.slice(3, 5).map((srv, idx) => (
              <ScrollReveal key={idx} delay={0.24 + idx * 0.08} className={styles.serviceCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.serviceCardTop}>
                  <div className={styles.serviceIconBox}>{srv.icon}</div>
                  <span className={styles.serviceBadge}>{srv.badge}</span>
                </div>
                <h3 className={styles.serviceCardTitle}>{srv.title}</h3>
                <p className={styles.serviceCardDesc}>{srv.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. PERFORMANCE-DRIVEN ECOMMERCE MARKETING NARRATIVE
         ══════════════════════════════════════════════════ */}
      <section className={styles.growthNarrativeSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.narrativeCard}>
              <div className={styles.cardGlassGloss} />
              <div className={styles.narrativeLeft}>
                <div className={styles.sectionHeaderBadge}>
                  <span className={styles.badgeDot} />
                  <span>PERFORMANCE-DRIVEN ECOMMERCE MARKETING</span>
                </div>
                <h2 className={styles.sectionHeading}>
                  Start Growing Your Ecommerce Brand With Nova Spark Digital
                </h2>
                <p className={styles.narrativeParagraph}>
                  Your e-commerce store can have the potential to connect with customers beyond your reach. However, sustainable growth is dependent on the right mix of visibility, traffic, creativity, conversion, and ongoing optimization.
                </p>
                <p className={styles.narrativeParagraph}>
                  At Nova Spark Digital, we help e-commerce businesses in India integrate these elements into actionable, data-driven digital marketing campaigns.
                </p>
                <p className={styles.narrativeParagraph}>
                  Whether you need help with e-commerce SEO, Meta Ads, social media, content marketing, or conversion optimization, we can help you strengthen your online presence and maximize your sales opportunities.
                </p>
                <p className={styles.narrativeParagraph} style={{ fontWeight: 650, color: '#0F172A' }}>
                  Let&apos;s talk about what you want to achieve and create your next digital marketing plan.
                </p>

                <div style={{ marginTop: '20px' }}>
                  <BeamButton href="/contact" label="Start Your Ecommerce Growth Journey" size="md" arrow={true} />
                </div>
              </div>

              <div className={styles.narrativeRight}>
                <div className={styles.narrativeMiniCard}>
                  <div className={styles.miniIconBox}>🔍</div>
                  <div>
                    <div className={styles.narrativeMiniTextTitle}>E-Commerce SEO &amp; Organic Reach</div>
                    <div className={styles.narrativeMiniTextSub}>Category architecture &amp; high-intent keyword authority</div>
                  </div>
                </div>

                <div className={styles.narrativeMiniCard}>
                  <div className={styles.miniIconBox}>🎯</div>
                  <div>
                    <div className={styles.narrativeMiniTextTitle}>Google Shopping &amp; PMax Funnels</div>
                    <div className={styles.narrativeMiniTextSub}>Automated SKU feed syndication &amp; negative match lists</div>
                  </div>
                </div>

                <div className={styles.narrativeMiniCard}>
                  <div className={styles.miniIconBox}>📱</div>
                  <div>
                    <div className={styles.narrativeMiniTextTitle}>Meta Ads Advantage+ (ASC)</div>
                    <div className={styles.narrativeMiniTextSub}>Server-side CAPI telemetry &amp; high-ROAS creative angles</div>
                  </div>
                </div>

                <div className={styles.narrativeMiniCard}>
                  <div className={styles.miniIconBox}>⚡</div>
                  <div>
                    <div className={styles.narrativeMiniTextTitle}>Conversion Rate Optimization</div>
                    <div className={styles.narrativeMiniTextSub}>1-click mobile checkout, bundle boosts &amp; COD verification</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. SKEUOMORPHIC SHOWCASE & PROFIT ARCHITECTURE
         ══════════════════════════════════════════════════ */}
      <section className={styles.showcaseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.showcaseCard}>
              <div className={styles.cardGlassGloss} />

              {/* Left Column: Text & Strategic Proof Points */}
              <div className={styles.showcaseLeft}>
                <div className={styles.sectionHeaderBadge}>
                  <span className={styles.badgeDot} />
                  <span>OMNICHANNEL SCALE &amp; REVENUE ARCHITECTURE</span>
                </div>
                <h2 className={styles.sectionHeading}>
                  Turning Digital Traffic Into Sustainable Store Profitability
                </h2>
                <p className={styles.narrativeParagraph}>
                  High-performing e-commerce brands aren&apos;t built on random traffic spikes. They thrive on synchronized multi-touch journeys — uniting high-intent Google Shopping queries, high-converting Meta reels, precision retargeting, and frictionless checkout flows.
                </p>
                <p className={styles.narrativeParagraph}>
                  At Nova Spark Digital, our growth architects engineer every customer touchpoint to maximize net contribution margin and systematically reduce customer acquisition costs (CAC) for businesses in India and beyond.
                </p>

                <div className={styles.showcasePoints}>
                  <div className={styles.showcasePointItem}>
                    <div className={styles.showcasePointIcon}>📈</div>
                    <div className={styles.showcasePointText}>
                      <span className={styles.showcasePointTitle}>Omnichannel Funnel Integration</span>
                      <span className={styles.showcasePointDesc}>
                        Seamless server-side tracking connecting Instagram discovery, Google Shopping intent, catalog ads, and retention sequences.
                      </span>
                    </div>
                  </div>

                  <div className={styles.showcasePointItem}>
                    <div className={styles.showcasePointIcon}>🛡️</div>
                    <div className={styles.showcasePointText}>
                      <span className={styles.showcasePointTitle}>RTO &amp; Return Mitigation Firewalls</span>
                      <span className={styles.showcasePointDesc}>
                        Automated WhatsApp address verification and COD-to-prepaid conversion prompts that protect your bottom-line delivery margins.
                      </span>
                    </div>
                  </div>

                  <div className={styles.showcasePointItem}>
                    <div className={styles.showcasePointIcon}>⚡</div>
                    <div className={styles.showcasePointText}>
                      <span className={styles.showcasePointTitle}>High-Velocity Creative Testing</span>
                      <span className={styles.showcasePointDesc}>
                        Rapid weekly creative iterations across product hooks, UGC testimonials, and dynamic bundles to discover scalable winners.
                      </span>
                    </div>
                  </div>
                </div>

                <BeamButton
                  href="/contact"
                  label="Claim Your Free Store Profitability Audit"
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
                      src="/images/work_ecommerce.jpg"
                      alt="E-commerce store performance analytics dashboard showing 4.8X ROAS and revenue growth"
                      width={800}
                      height={600}
                      className={styles.showcaseImg}
                      priority
                    />
                  </div>

                  {/* Tactile Floating Badges */}
                  <div className={styles.floatingBadgeTop}>
                    <span className={styles.badgeIcon}>🔥</span>
                    <span>
                      <strong className={styles.badgeMetric}>4.8x Blended ROAS</strong> • Scaled Funnels
                    </span>
                  </div>

                  <div className={styles.floatingBadgeBottom}>
                    <span className={styles.badgeIcon}>⚡</span>
                    <span>
                      <strong className={styles.badgeMetric}>+142% Revenue</strong> • Verified Lift
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. OUR E-COMMERCE MARKETING PROCESS (6 STEPS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.processSection} id="store-audit">
        <div className="container">
          <ScrollReveal className={styles.processHeader}>
            <div className={styles.sectionHeaderBadge}>
              <span className={styles.badgeDot} />
              <span>Start Your Ecommerce Growth Journey</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Our E-commerce Marketing Process
            </h2>
            <p className={styles.narrativeParagraph}>
              Our e-commerce marketing process combines strategy, data, creativity, and optimisation to attract the right audience, improve conversions, and support sustainable online growth.
            </p>
          </ScrollReveal>

          <div className={styles.processGrid}>
            {ecommerceProcessSteps.map((stepItem, idx) => (
              <ScrollReveal key={stepItem.step} delay={idx * 0.07} className={styles.processCard}>
                <div className={styles.cardGlassGloss} />
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>{stepItem.step}</span>
                </div>
                <h3 className={styles.processCardTitle}>{stepItem.title}</h3>
                <p className={styles.processCardDesc}>{stepItem.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. EDITORIAL CASE STUDY SHOWCASE
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.editorialContainer}>
              <div className={styles.cardGlassGloss} />
              <div className={styles.editorialContent}>
                <div className={styles.editorialBadge}>
                  <span className={styles.badgeDot} />
                  <span>Verified D2C Case Study · Artisanal Handloom</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Ektraa Handloom &amp; Ethnic Wear
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Janpath Road Corridor &amp; Bhubaneswar Hub
                </div>

                <p className={styles.editorialDesc}>
                  Ektraa possessed exquisite authentic Sambalpuri handloom collections but was held back by a 31% COD return rate and unpredictable ad performance. Nova Spark Digital implemented server-side CAPI tracking, automated WhatsApp order confirmations, and UGC unboxing videos that scaled orders nationwide.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Nova Spark Digital restructured our entire unit economics. From server-side tracking to automated WhatsApp order verification, our Sambalpuri handloom collections are now selling across Mumbai, Bangalore, and Delhi at peak profitability.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Founder, Ektraa Handloom Bhubaneswar
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" arrow={true} />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="/images/Ekatraa.jpg"
                    alt="Ektraa Handloom Brand Bhubaneswar"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>₹38.5L Monthly GMV · Pan-India Reach</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>4.6x</div>
                    <div className={styles.kpiSub}>Blended ROAS</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>11.8%</div>
                    <div className={styles.kpiSub}>COD RTO (Down from 31%)</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>+240%</div>
                    <div className={styles.kpiSub}>Repeat Customer Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. FREQUENTLY ASKED QUESTIONS (FAQ)
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className={styles.sectionHeaderBadge}>
              <span className={styles.badgeDot} />
              <span>CLEAR ANSWERS</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Frequently Asked Questions
            </h2>
            <p className={styles.narrativeParagraph}>
              Everything you need to know about working with an e-commerce marketing agency in India.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {ecommerceFaqs.map((faq, index) => {
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
          11. PERFORMANCE-DRIVEN BOTTOM CONVERSION BANNER
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.executiveTerminal}>
              <div className={styles.termGlow} />
              <div className={styles.cardGlassGlossDark} />
              <div className={styles.termContent}>
                <span className={styles.termPill}>PERFORMANCE-DRIVEN ECOMMERCE MARKETING</span>
                <h2 className={styles.termTitle}>
                  Want More Traffic, Leads &amp; Online Sales?
                </h2>
                <p className={styles.termSub}>
                  Bring your products in front of the right audience with a connected strategy across ecommerce SEO, Google Ads, Meta Ads, social media, and conversion optimisation.
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
                <BeamButton href="/contact" label="Get Your Ecommerce Strategy" size="lg" arrow={true} />
                <BeamButton
                  href="https://wa.me/919876543210?text=Hi%20Nova%20Spark,%20I%20would%20like%20to%20talk%20to%20your%20growth%20team%20about%20ecommerce%20marketing."
                  label="Talk to Our Growth Team"
                  size="lg"
                  variant="outline"
                  arrow={false}
                  icon={<span style={{ marginRight: '6px' }}>💬</span>}
                  target="_blank"
                  rel="noopener noreferrer"
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
