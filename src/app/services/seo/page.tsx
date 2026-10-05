'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import SERPSimulator from './_components/SERPSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import styles from './seo-page.module.css';

// 12 Target Industries with tailored strategies
const industriesList = [
  { 
    name: 'Healthcare & Clinics', 
    icon: '🏥', 
    example: 'Dental clinics, private hospitals & specialized treatments',
    focus: 'Google Maps 3-Pack, doctor schema & patient appointment intent queries'
  },
  { 
    name: 'Education & Coaching', 
    icon: '🎓', 
    example: 'Coaching centers, CBSE/ICSE schools & universities',
    focus: 'Admission keyword clusters, local school directories & parent review profiles'
  },
  { 
    name: 'Real Estate & Builders', 
    icon: '🏢', 
    example: 'Luxury apartments, commercial properties & plots',
    focus: 'High-intent buyer searches, project landing page SEO & location geo-grids'
  },
  { 
    name: 'Hospitality & Hotels', 
    icon: '🏨', 
    example: 'Direct room bookings, banquet halls & venue searches',
    focus: 'Commission-free direct booking SEO, wedding hall queries & tourist maps'
  },
  { 
    name: 'E-commerce Brands', 
    icon: '🛍️', 
    example: 'High-intent product queries & direct transactions',
    focus: 'Product schema markup, category page SEO & transaction intent keywords'
  },
  { 
    name: 'Technology & SaaS', 
    icon: '💻', 
    example: 'B2B search intent, software demos & product trials',
    focus: 'Comparison content, software feature clusters & high-ticket B2B keywords'
  },
  { 
    name: 'Professional Services', 
    icon: '⚖️', 
    example: 'Legal advocates, chartered accountants & consultants',
    focus: 'Authority building, local Bhubaneswar trust signals & verified client lead forms'
  },
  { 
    name: 'Startups & Scaleups', 
    icon: '🚀', 
    example: 'Category discovery & rapid search engine indexing',
    focus: 'Rapid technical indexing, founding team topical authority & investor keywords'
  },
  { 
    name: 'Financial Services', 
    icon: '💳', 
    example: 'Wealth management, home loans & tax advisory',
    focus: 'High-trust compliance content, local financial intent & commercial lead generation'
  },
  { 
    name: 'Beauty & Wellness', 
    icon: '🌿', 
    example: 'Salons, dermatology clinics & wellness spas',
    focus: 'Localized neighborhood searches, bridal package keywords & Google 3-Pack'
  },
  { 
    name: 'Food & Restaurants', 
    icon: '🍽️', 
    example: 'Local dining reservations, cafes & food catering',
    focus: 'Menu schema, food search intent, catering inquiries & map ratings'
  },
  { 
    name: 'Local Businesses', 
    icon: '📍', 
    example: 'Google Maps 3-Pack & high-converting nearby queries',
    focus: 'Near me geo-targeting, citation cleanup, and neighborhood review compounding'
  },
];

// Interactive Suggested Keywords for Opportunities section
const searchPresets = [
  {
    query: 'seo agency in bhubaneswar',
    title: 'Top SEO Marketing Agency in Bhubaneswar | Make Google Your Growth Channel',
    ctr: '38.4% CTR',
    intent: 'Transactional · High Inquiries',
  },
  {
    query: 'digital marketing company in bhubaneswar',
    title: 'Digital Marketing Company in Bhubaneswar | Strategy. Search. Growth.',
    ctr: '34.8% CTR',
    intent: 'Commercial · Enterprise Inquiries',
  },
  {
    query: 'best web development company in bhubaneswar',
    title: 'High-Performance Web Development & Next.js Agency in Bhubaneswar',
    ctr: '31.2% CTR',
    intent: 'Commercial · Direct Call Intent',
  },
];

// What Can SEO Do for Your Business
const seoBenefits = [
  {
    icon: '🎯',
    badge: 'TARGETED VISIBILITY',
    title: 'Get Found by the Right People',
    desc: 'SEO helps your website appear when people search for products, services or solutions you offer. By targeting relevant keywords and search intent, you can attract visitors who are already interested in what your business provides.',
  },
  {
    icon: '📈',
    badge: 'QUALIFIED TRAFFIC',
    title: 'Bring More Relevant Traffic',
    desc: 'More website visitors are not always better. Our SEO approach focuses on bringing relevant, high-intent traffic to your website. This means reaching people who are more likely to explore your services, contact your team or make a purchase.',
  },
  {
    icon: '🛡️',
    badge: 'COMPOUNDING ASSET',
    title: 'Build Long-Term Online Visibility',
    desc: 'Unlike paid campaigns that stop when your budget ends, SEO can build lasting organic visibility. With consistent optimisation, useful content and technical improvements, your website can continue attracting search traffic and creating opportunities over the long term.',
  },
  {
    icon: '💼',
    badge: 'COMMERCIAL IMPACT',
    title: 'Turn Searches Into Business Growth',
    desc: 'SEO can support more than rankings. A well-optimised website can improve visibility, attract qualified visitors and increase enquiries. We connect SEO with your business goals to help turn organic search activity into meaningful growth and potential customers.',
  },
];

// What Makes Our SEO Marketing Different
const seoDifferentPillars = [
  {
    badge: 'PILLAR 01 · INTENT DISCOVERY',
    title: 'Business-Focused Keyword Research',
    desc: 'Not all of the most popular keywords attract customers. Our SEO marketing service in Bhubaneswar emphasizes keywords that align with your business, audience, and goals. We research search volume, intent, competition, location, and commercial value to discover terms that can bring in relevant traffic and real business possibilities.',
  },
  {
    badge: 'PILLAR 02 · ON-PAGE OPTIMIZATION',
    title: 'On-Page SEO That Makes Sense',
    desc: 'Our SEO marketing agency in Bhubaneswar optimizes content, internal links, images, URLs, headings, and meta descriptions. Each page is user-friendly, easy to understand, and easy to read, making your site relevant, useful, and search-friendly.',
  },
  {
    badge: 'PILLAR 03 · TECHNICAL ARCHITECTURE',
    title: 'Technical SEO',
    desc: 'Even a good web page can fail due to technical issues. The SEO Marketing Service in Bhubaneswar ensures crawlability, indexing, broken links, redirects, sitemaps, mobile experience, Core Web Vitals, duplicate content, and site structure, forming a solid technical foundation.',
  },
  {
    badge: 'PILLAR 04 · CONTENT AUTHORITY',
    title: 'Content SEO',
    desc: "Good SEO needs content that people actually want to read. Our SEO marketing company in Bhubaneswar develops and optimizes service pages, blogs, landing pages, FAQs, location pages, and guides based on real search intent. We're here to provide you with useful information, not keyword-stuffing or content just to hit word counts.",
  },
];

// What Makes Nova Spark Digital So Special
const specialCards = [
  {
    num: '01',
    title: 'Strategy Before Execution',
    desc: "We don't begin with a random blog published first. First, we know your business, audience, competition, and objectives. Then, we create an SEO strategy that focuses on the right keywords, pages, and improvements to build meaningful search visibility.",
  },
  {
    num: '02',
    title: 'Data With Context',
    desc: "There's more to the story than SEO numbers. We research rankings, traffic, impressions, clicks, and conversions in concert. This will give us a picture of what is working, what isn't, and where your website has the best opportunities for organic growth.",
  },
  {
    num: '03',
    title: 'Content That Sounds Human',
    desc: 'Your customers read your content, NOT Google. We produce valuable, easy-to-read, and natural content that addresses actual questions and aligns to search intent. Avoid the use of awkward keyword stuffing, overly complicated language, and content that sounds like a robot.',
  },
  {
    num: '04',
    title: 'Sustainable Growth',
    desc: 'SEO is a long-term process and requires a lot of work. We are not looking for quick hacks but rather building your website, content, authority, and search ranking over time. The aim is sustainable organic growth, which keeps adding value to your business.',
  },
];

// The 6 Exact FAQs
const seoFaqs = [
  {
    q: '1. What does your SEO service include?',
    a: 'The SEO services include keyword research, technical SEO, on-page optimization, content optimization, local SEO, competitor analysis, link building, and monitoring.',
  },
  {
    q: '2. How can SEO help my Bhubaneswar business?',
    a: 'SEO helps your business appear for relevant Google searches, attract qualified visitors, strengthen local visibility, and create consistent opportunities for inquiries without relying entirely on paid advertising.',
  },
  {
    q: '3. How do you create an SEO strategy for my business?',
    a: 'We analyze your website, competitors, audience, search intent, industry, and existing rankings before creating a customized strategy focused on realistic, measurable organic growth.',
  },
  {
    q: '4. Can you improve rankings for competitive keywords?',
    a: 'Yes. Identify keyword opportunities, content gaps, technical issues, and authority-building opportunities to create a focused strategy for competing with established websites.',
  },
  {
    q: '5. Do you provide local SEO in Bhubaneswar?',
    a: 'Yes. We specialise in location-based keywords, Google Business Profile optimisation, local landing pages, citations, reviews, and tactics to help your customers find you locally.',
  },
  {
    q: '6. How do you measure SEO performance?',
    a: 'We track rankings, organic traffic, impressions, clicks, conversions, keyword growth, and other metrics to gauge performance and optimize your SEO strategy.',
  },
];

export default function SEOPage() {
  // FAQs CLOSED by default so users can open whichever they want
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Active industry selection
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);

  // Active SERP query preview
  const [activePresetIndex, setActivePresetIndex] = useState<number>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const currentPreset = searchPresets[activePresetIndex];
  const activeInd = industriesList[selectedIndustry];

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. HERO SECTION
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>SEO Marketing Agency in Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                Make Google Your <span className="accent-gradient">Growth Channel</span>
              </h1>

              <p className={styles.heroSub}>
                Build stronger search visibility with SEO strategies designed to attract relevant customers, improve rankings and generate sustainable organic traffic for your business.
              </p>

              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.heroPrimaryBtn}>
                  <span>Start My SEO Audit</span>
                  <span>→</span>
                </Link>
                <a href="#industries" className={styles.heroSecondaryBtn}>
                  <span>Grow on Google</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>NS</span>
                  <span className={styles.trustAvatar}>MC</span>
                  <span className={styles.trustAvatar}>UR</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+50</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Trusted by 50+ Bhubaneswar &amp; Odisha Businesses
                </span>
              </div>
            </ScrollReveal>

            {/* Skeuomorphic Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>#1 Rank</span>
                <span className={styles.tLabel}>Google Search Top 3</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>High Intent</span>
                <span className={styles.tLabel}>Commercial Inquiries</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>&lt; 1s</span>
                <span className={styles.tLabel}>Core Web Vitals Speed</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>Sustainable</span>
                <span className={styles.tLabel}>Compounding Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. DRIVING BUSINESS GROWTH WITH DIGITAL MARKETING IN BHUBANESWAR
          (Replaces the image down the hero as requested)
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          3. INDUSTRIES SECTION (SKEUOMORPHIC CARDS)
         ══════════════════════════════════════════════════ */}
      <section id="industries" className={styles.industrySection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.industryHeader}>
              <div className={styles.sectionEyebrow}>
                <span>Custom Industry Frameworks</span>
              </div>
              <h2 className={styles.sectionTitle}>
                SEO Marketing Agency in Bhubaneswar for <span className="accent-gradient">Different Industries</span>
              </h2>
              <p className={styles.sectionSub}>
                Every business has a different audience, competition and customer journey. That is why our SEO Marketing agency in Bhubaneswar does not use the same strategy for every client.
              </p>
              <p className={styles.sectionSub}>
                We create SEO strategies for industries including healthcare, education, real estate, hospitality, e-commerce, technology, SaaS, professional services, startups, financial services, beauty and wellness, food and restaurants, and local businesses.
              </p>
              <p className={styles.sectionSub}>
                For each industry, we study how customers search, what competitors are ranking for and which keywords can bring valuable traffic. We then build a strategy around your specific goals, whether that means increasing local visibility, generating leads, improving rankings or attracting more relevant website visitors.
              </p>
              <p style={{ fontWeight: 800, color: '#0B2093', marginTop: 14, fontSize: '16.5px' }}>
                Different businesses need different SEO strategies. We build yours accordingly.
              </p>
            </div>

            {/* Skeuomorphic 12-Industry Grid */}
            <div className={styles.industryGrid}>
              {industriesList.map((ind, idx) => {
                const isSelected = selectedIndustry === idx;
                return (
                  <div
                    key={ind.name}
                    className={styles.industryCard}
                    onClick={() => setSelectedIndustry(idx)}
                    style={{
                      borderColor: isSelected ? '#0B2093' : undefined,
                      background: isSelected ? 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)' : undefined,
                    }}
                  >
                    <div className={styles.industryIconBox}>
                      <span>{ind.icon}</span>
                    </div>
                    <h3 className={styles.industryName}>{ind.name}</h3>
                    <span className={styles.industryExample}>{ind.example}</span>
                  </div>
                );
              })}
            </div>

            {/* Interactive Strategy Takeaway Display */}
            <div
              style={{
                marginTop: 24,
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                border: '1.5px solid #CBD5E1',
                borderRadius: 14,
                padding: '16px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 12,
                boxShadow: 'inset 0 1.5px 0 #FFFFFF, 0 4px 12px rgba(11, 32, 147, 0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 24 }}>{activeInd.icon}</span>
                <div>
                  <span style={{ fontSize: 11.5, fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Active Blueprint: {activeInd.name}
                  </span>
                  <div style={{ fontSize: 13.5, color: '#334155', fontWeight: 600 }}>
                    {activeInd.focus}
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  color: '#0B2093',
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  padding: '8px 16px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  boxShadow: 'inset 0 1px 0 #FFFFFF',
                }}
              >
                Request {activeInd.name.split('&')[0]} SEO Plan →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. OPPORTUNITIES SECTION
         ══════════════════════════════════════════════════ */}
      <section className={styles.opportunitiesSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.oppContainer}>
              <div className={styles.oppContent}>
                <div className={styles.sectionEyebrow}>
                  <span>Search Intent to Revenue</span>
                </div>
                <h2 className={styles.sectionTitle}>
                  Turn Google Searches Into <span className="accent-gradient">Business Opportunities</span>
                </h2>
                <p className={styles.oppText}>
                  Users are already looking for products, services, and solutions that you provide; they&apos;re looking at Google. But the question is, are they really finding your website or your competitors?
                </p>
                <p className={styles.oppText}>
                  An effective SEO approach enables your company to stand out when viewers are searching for the services you offer. In fact, when a user is searching for an SEO agency in Bhubaneswar, a coaching institution, a healthcare service, or even a digital marketing firm or a web development company, they are likely to be serious about it.
                </p>
                <p className={styles.oppText}>
                  Organic search allows you to connect with people at the right time, when they are researching, comparing, or ready to act.
                </p>
                <p className={styles.oppText}>
                  We’ll ensure your website is optimized for relevant searches, improved visibility, and quality traffic, which will all lead to more of your customers becoming inquiries, customers, and long-term clients.
                </p>

                <div className={styles.oppHighlights}>
                  <div className={styles.oppHighlightItem}>
                    <span className={styles.oppHighlightCheck}>✓</span>
                    <span>High Commercial Intent Visitors</span>
                  </div>
                  <div className={styles.oppHighlightItem}>
                    <span className={styles.oppHighlightCheck}>✓</span>
                    <span>Google 3-Pack Map Dominance</span>
                  </div>
                  <div className={styles.oppHighlightItem}>
                    <span className={styles.oppHighlightCheck}>✓</span>
                    <span>Zero Reliance on Ad Spend</span>
                  </div>
                  <div className={styles.oppHighlightItem}>
                    <span className={styles.oppHighlightCheck}>✓</span>
                    <span>Direct WhatsApp &amp; Call Inquiries</span>
                  </div>
                </div>
              </div>

              {/* Opportunities Visual Stack with Graphic & Interactive SERP Mockup */}
              <div className={styles.oppVisualStack}>
                <div className={styles.oppImageFrame}>
                  <Image
                    src="/images/Seo & local search.png"
                    alt="SEO & Local Search Optimization Framework in Bhubaneswar"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.oppFeaturedImg}
                  />
                </div>

                {/* Interactive Simulated SERP Card */}
                <div className={styles.serpMockupCard}>
                  {/* Preset Pills */}
                  <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
                    {searchPresets.map((preset, pIdx) => (
                      <button
                        key={preset.query}
                        type="button"
                        onClick={() => setActivePresetIndex(pIdx)}
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: 6,
                          border: activePresetIndex === pIdx ? '1px solid #0B2093' : '1px solid #CBD5E1',
                          background: activePresetIndex === pIdx ? '#0B2093' : '#FFFFFF',
                          color: activePresetIndex === pIdx ? '#FFFFFF' : '#475569',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        {preset.query}
                      </button>
                    ))}
                  </div>

                  <div className={styles.serpSearchInput}>
                    <span>🔍</span>
                    <span>{currentPreset.query}</span>
                  </div>

                  <div className={styles.serpSnippet}>
                    <div className={styles.serpUrl}>
                      <span>🌐</span>
                      <span>https://marketingcopilot.in &gt; services &gt; seo</span>
                    </div>
                    <h4 className={styles.serpResultTitle}>
                      {currentPreset.title}
                    </h4>
                    <p className={styles.serpResultDesc}>
                      Top-ranked SEO marketing agency in Bhubaneswar. Technical SEO, Google Maps 3-Pack optimization, and high-intent organic traffic that converts visitors into paying customers.
                    </p>
                  </div>

                  <div className={styles.serpStatsPills}>
                    <div className={styles.serpPillItem}>
                      <span className={styles.serpPillVal}>#1 Position</span>
                      <span className={styles.serpPillLbl}>{currentPreset.intent}</span>
                    </div>
                    <div className={styles.serpPillItem}>
                      <span className={styles.serpPillVal}>{currentPreset.ctr}</span>
                      <span className={styles.serpPillLbl}>Organic Search Velocity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. BENEFITS SECTION (WHAT CAN SEO DO)
         ══════════════════════════════════════════════════ */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: 840, margin: '0 auto' }}>
              <div className={styles.sectionEyebrow}>
                <span>Real Business Impact</span>
              </div>
              <h2 className={styles.sectionTitle}>
                What Can SEO Do for <span className="accent-gradient">Your Business?</span>
              </h2>
              <p className={styles.sectionSub}>
                A well-planned SEO strategy can help your business
              </p>
            </div>

            <div className={styles.benefitsGrid}>
              {seoBenefits.map((b) => (
                <div key={b.title} className={styles.benefitCard}>
                  <div className={styles.benefitTopRow}>
                    <div className={styles.benefitIconBox}>
                      <span>{b.icon}</span>
                    </div>
                    <span className={styles.benefitBadge}>{b.badge}</span>
                  </div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitText}>{b.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. DIFFERENT SECTION (WHAT MAKES SEO DIFFERENT)
         ══════════════════════════════════════════════════ */}
      <section className={styles.differentSection}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: 880, margin: '0 auto' }}>
              <div className={styles.sectionEyebrow}>
                <span>Practical Execution</span>
              </div>
              <h2 className={styles.sectionTitle}>
                What Makes Our <span className="accent-gradient">SEO Marketing Different?</span>
              </h2>
              <p className={styles.sectionSub}>
                SEO shouldn&apos;t be a black art that leaves people with a monthly report that is hard to read and difficult to understand. At Nova Spark Digital, we don&apos;t get caught up in theory. Our SEO marketing agency in Bhubaneswar combines technical SEO, content strategy, keyword research, local optimization, and ongoing performance analysis.
              </p>
            </div>

            <div className={styles.differentGrid}>
              {seoDifferentPillars.map((p) => (
                <div key={p.title} className={styles.differentCard}>
                  <span className={styles.differentBadge}>{p.badge}</span>
                  <h3 className={styles.differentTitle}>{p.title}</h3>
                  <p className={styles.differentText}>{p.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. SPECIAL SECTION (WHAT MAKES NOVA SPARK SPECIAL)
         ══════════════════════════════════════════════════ */}
      <section className={styles.specialSection}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: 860, margin: '0 auto' }}>
              <div className={styles.sectionEyebrow}>
                <span>The Nova Spark Advantage</span>
              </div>
              <h2 className={styles.sectionTitle}>
                What makes Nova Spark Digital <span className="accent-gradient">so special?</span>
              </h2>
              <p className={styles.sectionSub}>
                It&apos;s not enough of an SEO partner merely to know keywords. You need a team that understands business, customers, and digital marketing as a whole. Our Nova Spark Digital SEO strategy emphasizes:
              </p>
            </div>

            <div className={styles.specialContainer}>
              {/* Agency Strategy Image */}
              <div className={styles.specialImgWrapper}>
                <Image
                  src="/images/team_office.jpg"
                  alt="Nova Spark Digital Marketing and SEO Strategy Team in Bhubaneswar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className={styles.specialImg}
                />
                <div className={styles.specialImgOverlay}>
                  <p className={styles.specialImgQuote}>
                    &quot;Strategy first. Data with context. Human content. Compounding growth for Bhubaneswar brands.&quot;
                  </p>
                  <span className={styles.specialImgSub}>
                    Nova Spark Digital Strategy Lab · Bhubaneswar
                  </span>
                </div>
              </div>

              {/* 4 Skeuomorphic Core Philosophy Cards */}
              <div className={styles.specialGrid}>
                {specialCards.map((c) => (
                  <div key={c.title} className={styles.specialCard}>
                    <span className={styles.specialNumber}>{c.num}</span>
                    <h3 className={styles.specialTitle}>{c.title}</h3>
                    <p className={styles.specialText}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. INTERACTIVE SERP SIMULATOR
         ══════════════════════════════════════════════════ */}
      <div id="audit">
        <SERPSimulator />
      </div>

      {/* ══════════════════════════════════════════════════
          9. FAQ SECTION (THE 6 EXACT QUESTIONS - CLOSED BY DEFAULT)
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className={styles.sectionEyebrow} style={{ margin: '0 auto 12px' }}>
              <span>Direct Answers</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Frequently Asked <span className="accent-gradient">Questions</span>
            </h2>
            <p className={styles.sectionSub} style={{ maxWidth: 640, margin: '0 auto' }}>
              Clear, transparent answers on timeline, local SEO in Bhubaneswar, strategy creation, and measurable results.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {seoFaqs.map((faq, idx) => {
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
          10. CONVERSION SECTION (MAIN HOME PAGE STYLE)
         ══════════════════════════════════════════════════ */}
      <section className={styles.homeStyleCtaSection}>
        <div className="container">
          <div className={styles.homeStyleCtaBox}>
            <ScrollReveal className="text-center">
              <div className={styles.ctaEyebrowBadge}>
                <span className={styles.ctaPulseDot} />
                <span>Make Google Work for You</span>
              </div>

              <div className={styles.ctaSubtitlePill}>
                Ready to Rank Higher?
              </div>

              <h2 className={styles.ctaHeadline}>
                Get Found Faster with{' '}
                <span className="accent-gradient">SEO Marketing Service in Bhubaneswar</span>
              </h2>

              <p className={styles.ctaDescription}>
                Get in touch with Nova Spark Digital and start building a stronger organic presence in Bhubaneswar and beyond.
              </p>

              <div className={styles.ctaBrandPunchline}>
                Nova Spark Digital — Strategy. Search. Growth.
              </div>

              <div className={styles.ctaActions}>
                <BeamButton href="/contact" label="Book Your Free SEO Audit" size="lg" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
