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
    focus: 'Authority building, nationwide trust signals & verified client lead forms'
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
    query: 'seo agency in india',
    title: 'Top SEO Marketing Agency in India | Make Google Your Growth Channel',
    ctr: '38.4% CTR',
    intent: 'Transactional · High Inquiries',
  },
  {
    query: 'digital marketing company in india',
    title: 'Digital Marketing Company in India | Strategy. Search. Growth.',
    ctr: '34.8% CTR',
    intent: 'Commercial · Enterprise Inquiries',
  },
  {
    query: 'best web development company in india',
    title: 'High-Performance Web Development & Next.js Agency in India',
    ctr: '31.2% CTR',
    intent: 'Commercial · Direct Call Intent',
  },
];

// SEO Checklist Pills for Hero
const seoChecklist = [
  'Technical SEO',
  'Keyword Research',
  'Content Optimisation',
  'Link Building',
  'Local SEO',
];

// All-in-One SEO Solutions for Business Growth
const allInOneSolutions = [
  {
    num: '01',
    icon: '⚙️',
    title: 'Fix Technical Issues for Better Rankings',
    desc: 'We identify website errors, improve page speed, fix indexing problems, and optimize website structure to help search engines crawl and understand your pages.',
  },
  {
    num: '02',
    icon: '🔍',
    title: 'Find Keywords That Bring Customers',
    desc: 'Customers, competitors, and search intent are all analyzed when researching for valuable keywords to attract relevant visitors and create leads for your business.',
  },
  {
    num: '03',
    icon: '✍️',
    title: 'Create Content That Attracts and Converts',
    desc: 'We create helpful blogs, landing pages, product descriptions, and FAQs that solve customer queries, increase search ranking, and motivate them to act.',
  },
  {
    num: '04',
    icon: '🔗',
    title: 'Build Website Authority with Quality Links',
    desc: "We improve your website's credibility, build its backlinks' authority, and help rank it for long-term benefit by linking your site to relevant websites with credibility.",
  },
  {
    num: '05',
    icon: '📍',
    title: 'Be Discovered by Shoppers Close By',
    desc: 'We optimize your Google Business Profile, polish up your business listing and reviews, and develop localized pages to boost your visibility in local search results.',
  },
  {
    num: '06',
    icon: '🌐',
    title: 'Grow Your Website Across Markets',
    desc: 'Multilingual SEO, regional targeting, and enhanced website structures ensure that big sites and international platforms are optimized for visitors from other countries.',
  },
];

// Why Businesses Choose Marketing Copilot for SEO Growth
const whyChooseMarketingCopilot = [
  {
    num: '01',
    title: 'Experience That Supports Long-Term Growth',
    desc: 'We combine SEO knowledge with practical strategies to improve website performance, adapt to search engine changes, and help businesses build lasting organic visibility.',
  },
  {
    num: '02',
    title: 'Skilled Professionals and Personalized Strategies',
    desc: 'Our team creates SEO strategies based on your business objectives and targets, industry competition, and website needs to ensure that you get the desired and relevant outcomes.',
  },
  {
    num: '03',
    title: 'SEO Strategies Focused on Your Industry',
    desc: 'We study your market, competitors, and customer behavior to create tailored SEO strategies that improve search visibility and connect your business with potential customers.',
  },
  {
    num: '04',
    title: 'Transparent Reporting and Ethical SEO Practices',
    desc: 'We follow ethical SEO practices, track campaign performance, and share clear reports to help you understand progress, identify opportunities, and make informed marketing decisions.',
  },
];

// The Marketing Copilot SEO Growth Process (6 Steps)
const growthProcessSteps = [
  {
    step: '01',
    icon: '📊',
    title: 'Website Analysis & Research',
    desc: 'Research your website, rival sites, keywords, and current search rankings, and recommend fixes to technical problems, content deficiencies, and organic potential.',
  },
  {
    step: '02',
    icon: '🗺️',
    title: 'Strategic SEO Planning',
    desc: 'We create a customized SEO roadmap based on your business goals, target audience, competition, and keyword opportunities, with clear priorities and measurable objectives.',
  },
  {
    step: '03',
    icon: '⚡',
    title: 'Website Optimization',
    desc: 'We improve website structure, page speed, mobile usability, indexing, and on-page elements to help search engines understand your website and deliver better user experiences.',
  },
  {
    step: '04',
    icon: '📝',
    title: 'Content Planning and Creation',
    desc: 'We create keyword-focused website pages, blogs, and useful resources that match search intent, answer customer questions, strengthen topical relevance, and attract organic traffic.',
  },
  {
    step: '05',
    icon: '🛡️',
    title: 'Building Online Authority',
    desc: 'You build website authority through link-building prospects, content quality, digital marketing outreach, and industry credibility strategies.',
  },
  {
    step: '06',
    icon: '📈',
    title: 'Performance Tracking and Improvement',
    desc: 'Track progress on keyword rankings, organic traffic, engagement, and conversions to optimize your SEO strategy for ongoing growth and identify new opportunities.',
  },
];

// The 6 Exact FAQs
const seoFaqs = [
  {
    q: '1. What does your SEO service include?',
    a: 'The SEO services include keyword research, technical SEO, on-page optimization, content optimization, local SEO, competitor analysis, link building, and monitoring.',
  },
  {
    q: '2. How can SEO help my business in India?',
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
    q: '5. Do you provide local SEO in India?',
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

  // Opportunities section visual tab (live SERP simulator vs framework blueprint)
  const [oppVisualTab, setOppVisualTab] = useState<'serp' | 'framework'>('serp');

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
              <h1 className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>Best SEO Services in India</span>
              </h1>

              <h2 className={styles.heroTitle}>
                SEO That Drives Traffic, Leads, and <span className="accent-gradient">Business Growth</span>
              </h2>

              <p className={styles.heroSub} style={{ marginBottom: 14 }}>
                Search engine optimisation helps your website appear in relevant search results and connect with potential customers. At Marketing Copilot, we focus on improving online visibility, attracting quality traffic, and supporting long-term business growth.
              </p>

              <p className={styles.heroSub} style={{ marginTop: 0, marginBottom: 28 }}>
                Our SEO approach combines technical optimisation, keyword research, content creation, and link building to help businesses strengthen their search presence. We create strategies based on your goals, audience, and industry competition to improve website performance and generate meaningful results.
              </p>

              {/* Feature Checklist Strip */}
              <div className={styles.heroChecklist}>
                {seoChecklist.map((item) => (
                  <span key={item} className={styles.heroCheckPill}>
                    <span className={styles.heroCheckIcon}>✓</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              <div className={styles.heroActions}>
                <BeamButton
                  href="/contact"
                  label="Start My SEO Audit"
                  size="lg"
                />
                <BeamButton
                  href="#solutions"
                  label="Explore SEO Solutions"
                  variant="outline"
                  size="lg"
                  arrow={false}
                  icon={<span style={{ display: 'inline-block', transform: 'rotate(90deg)', fontSize: 15 }}>→</span>}
                />
              </div>

              {/* Ready to Improve Your Google Rankings Card */}
              <div className={styles.heroReadyCard}>
                <div className={styles.heroReadyBadge}>
                  <span>Actionable SEO Strategy</span>
                </div>
                <h3 className={styles.heroReadyTitle}>
                  Ready to Improve Your Google Rankings?
                </h3>
                <p className={styles.heroReadyText}>
                  Partner with Marketing Copilot for SEO strategies tailored to your business goals. Contact our team today to discuss your website&apos;s SEO needs and discover opportunities to grow organic traffic, generate leads, and reach more customers.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <BeamButton
                    href="/contact"
                    label="Contact Our SEO Team"
                    size="md"
                  />
                </div>
              </div>

              <div className={styles.trustStrip} style={{ marginTop: 34 }}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>NS</span>
                  <span className={styles.trustAvatar}>MC</span>
                  <span className={styles.trustAvatar}>UR</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+50</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Trusted by 50+ Businesses Across India
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
          IN-SECTION STICKY NAVBAR STRIP WITH BEAM CTA
         ══════════════════════════════════════════════════ */}
      <nav className={styles.sectionNavRibbon} aria-label="SEO Service Navigation">
        <div className="container">
          <div className={styles.sectionNavInner}>
            <div className={styles.sectionNavBrand}>
              <span className={styles.navPulseDot} />
              <span className={styles.navBrandText}>SEO Playbook</span>
            </div>

            <div className={styles.sectionNavLinks}>
              <a href="#industries" className={styles.navLink}>Industries</a>
              <a href="#opportunities" className={styles.navLink}>Revenue Model</a>
              <a href="#solutions" className={styles.navLink}>Solutions</a>
              <a href="#process" className={styles.navLink}>6-Step Process</a>
              <a href="#why-us" className={styles.navLink}>Why Us</a>
              <a href="#audit" className={styles.navLink}>SERP Console</a>
              <a href="#faq" className={styles.navLink}>FAQs</a>
            </div>

            <div className={styles.sectionNavCta}>
              <BeamButton
                href="/contact"
                label="Free SEO Audit"
                size="sm"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          2. DRIVING BUSINESS GROWTH WITH DIGITAL MARKETING IN INDIA
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
                SEO Marketing Agency in India for <span className="accent-gradient">Different Industries</span>
              </h2>
              <p className={styles.sectionSub}>
                Every business has a different audience, competition and customer journey. That is why our SEO Marketing agency in India does not use the same strategy for every client.
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
              <div className={styles.industryDrawerCta}>
                <BeamButton
                  href="/contact"
                  label={`Request ${activeInd.name.split('&')[0].trim()} Plan`}
                  size="sm"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. OPPORTUNITIES SECTION (DARK SKEUOMORPHIC CONTRAST)
         ══════════════════════════════════════════════════ */}
      <section id="opportunities" className={styles.opportunitiesSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.oppContainer}>
              <div className={styles.oppContent}>
                <div className={styles.sectionEyebrowDark}>
                  <span>Search Intent to Revenue</span>
                </div>
                <h2 className={styles.sectionTitleDark}>
                  Turn Google Searches Into <span className="accent-gradient">Business Opportunities</span>
                </h2>
                <p className={styles.oppText}>
                  Users are already actively searching on Google for products, services, and solutions that you provide. An effective SEO approach ensures your business stands out when high-intent prospects are researching, comparing, and ready to act.
                </p>
                <p className={styles.oppText}>
                  We optimize your technical architecture, keyword clusters, and Google 3-Pack authority—turning search traffic into qualified inquiries, paying customers, and long-term business growth.
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

                <div className={styles.oppCtaRow}>
                  <BeamButton
                    href="/contact"
                    label="Audit Your Google Rankings Now"
                    size="md"
                  />
                  <span className={styles.oppCtaTrust}>
                    ✓ 100% Confidential • Zero Spam Guaranteed
                  </span>
                </div>
              </div>

              {/* Opportunities Visual Unified Terminal Card */}
              <div className={styles.serpMockupCard}>
                {/* Visual Tab Switcher: Live Simulation vs Framework */}
                <div className={styles.oppVisualTabRow}>
                  <button
                    type="button"
                    onClick={() => setOppVisualTab('serp')}
                    className={`${styles.oppVisualTabBtn} ${oppVisualTab === 'serp' ? styles.oppVisualTabBtnActive : ''}`}
                  >
                    <span>🔍 Live SERP Preview</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOppVisualTab('framework')}
                    className={`${styles.oppVisualTabBtn} ${oppVisualTab === 'framework' ? styles.oppVisualTabBtnActive : ''}`}
                  >
                    <span>📐 6-Step Framework</span>
                  </button>
                </div>

                {oppVisualTab === 'serp' ? (
                  <>
                    {/* Preset Query Switcher Pills */}
                    <div className={styles.presetPillsRow}>
                      {searchPresets.map((preset, pIdx) => (
                        <button
                          key={preset.query}
                          type="button"
                          onClick={() => setActivePresetIndex(pIdx)}
                          className={`${styles.presetPill} ${activePresetIndex === pIdx ? styles.presetPillActive : ''}`}
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
                        Top-ranked SEO marketing agency in India. Technical SEO, Google Maps 3-Pack optimization, and high-intent organic traffic that converts visitors into paying customers.
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
                  </>
                ) : (
                  <div className={styles.oppFrameworkPane}>
                    <div className={styles.oppFrameworkImgWrapper}>
                      <Image
                        src="/images/SEO framework.jpg"
                        alt="SEO & Local Search Optimization Framework in India"
                        fill
                        sizes="(max-width: 900px) 100vw, 480px"
                        className={styles.oppFeaturedImg}
                      />
                    </div>
                    <div className={styles.oppFrameworkNote}>
                      <strong>Proprietary Architecture:</strong> Combines technical indexing, topic clusters, high-authority backlink signals, and Google Maps geo-grid domination.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. ALL-IN-ONE SEO SOLUTIONS FOR BUSINESS GROWTH
         ══════════════════════════════════════════════════ */}
      <section id="solutions" className={styles.solutionsSection}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: 880, margin: '0 auto' }}>
              <div className={styles.sectionEyebrow}>
                <span>Complete Search Engine Optimization</span>
              </div>
              <h2 className={styles.sectionTitle}>
                All-in-One SEO Solutions for <span className="accent-gradient">Business Growth</span>
              </h2>
              <p className={styles.sectionSub}>
                From technical SEO to content optimisation and topical authority, we cover every essential factor to improve visibility and drive organic growth.
              </p>
            </div>

            <div className={styles.solutionsGrid}>
              {allInOneSolutions.map((sol) => (
                <div key={sol.title} className={styles.solutionCard}>
                  <div className={styles.solutionCardTop}>
                    <div className={styles.solutionIconBox}>
                      <span>{sol.icon}</span>
                    </div>
                    <span className={styles.solutionNumBadge}>{sol.num}</span>
                  </div>
                  <h3 className={styles.solutionTitle}>{sol.title}</h3>
                  <p className={styles.solutionDesc}>{sol.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.sectionCtaStrip}>
              <div className={styles.sectionCtaStripCard}>
                <div className={styles.stripText}>
                  <h4>Need a customized multi-channel search roadmap?</h4>
                  <p>We craft bespoke SEO, local 3-pack, and technical architectures for high-growth enterprises.</p>
                </div>
                <BeamButton
                  href="/contact"
                  label="Request Custom SEO Package"
                  size="md"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. OUR PROCESS — THE MARKETING COPILOT SEO GROWTH PROCESS
         ══════════════════════════════════════════════════ */}
      <section id="process" className={styles.processSection}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: 880, margin: '0 auto' }}>
              <div className={styles.sectionEyebrow}>
                <span>Our Process</span>
              </div>
              <h2 className={styles.sectionTitle}>
                The Marketing Copilot SEO <span className="accent-gradient">Growth Process</span>
              </h2>
              <p className={styles.sectionSub}>
                We take a holistic approach to SEO that includes six key steps for sustainable organic growth: website analysis, strategic planning, technical optimization, content creation, authority building, and performance tracking.
              </p>
            </div>

            <div className={styles.processGrid}>
              {growthProcessSteps.map((step) => (
                <div key={step.title} className={styles.processCard}>
                  <div className={styles.processCardTop}>
                    <span className={styles.processStepPill}>Step {step.step}</span>
                    <span className={styles.processIconBox}>{step.icon}</span>
                  </div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.sectionCtaStrip}>
              <div className={styles.sectionCtaStripCard}>
                <div className={styles.stripText}>
                  <h4>Ready to implement this 6-step growth framework?</h4>
                  <p>Get a comprehensive technical baseline audit and keyword roadmap within 48 hours.</p>
                </div>
                <BeamButton
                  href="/contact"
                  label="Deploy 6-Step SEO Engine"
                  size="md"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. WHY BUSINESSES CHOOSE MARKETING COPILOT FOR SEO GROWTH (DARK CONTRAST)
         ══════════════════════════════════════════════════ */}
      <section id="why-us" className={styles.specialSection}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: 880, margin: '0 auto' }}>
              <div className={styles.sectionEyebrowDark}>
                <span>The Marketing Copilot Advantage</span>
              </div>
              <h2 className={styles.sectionTitleDark}>
                Why Businesses Choose Marketing Copilot for <span className="accent-gradient">SEO Growth</span>
              </h2>
              <p className={styles.sectionSubDark}>
                At Marketing Copilot, we focus on practical SEO strategies, quality content, and measurable improvements to help businesses strengthen online visibility and attract relevant customers.
              </p>
            </div>

            <div className={styles.specialContainer}>
              {/* Agency Strategy Image */}
              <div className={styles.specialImgWrapper}>
                <Image
                  src="/images/SEO strategy_team.jpg"
                  alt="Marketing Copilot SEO Strategy Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className={styles.specialImg}
                />
                <div className={styles.specialImgOverlay}>
                  <p className={styles.specialImgQuote}>
                    &quot;Practical SEO strategies, quality content, and measurable improvements for sustainable business growth.&quot;
                  </p>
                  <span className={styles.specialImgSub}>
                    Marketing Copilot Digital Strategy Lab · Bhubaneswar HQ
                  </span>
                </div>
              </div>

              {/* 4 Skeuomorphic Core Philosophy Cards */}
              <div className={styles.specialGrid}>
                {whyChooseMarketingCopilot.map((c) => (
                  <div key={c.title} className={styles.specialCard}>
                    <span className={styles.specialNumber}>{c.num}</span>
                    <h3 className={styles.specialTitle}>{c.title}</h3>
                    <p className={styles.specialText}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.specialCtaRow}>
              <div className={styles.specialCtaText}>
                <h4>Partner with SEO specialists focused on revenue, not vanity traffic.</h4>
                <p>Direct communication with senior search architects and transparent live weekly telemetry.</p>
              </div>
              <BeamButton
                href="/contact"
                label="Partner With Our SEO Specialists"
                size="md"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. INTERACTIVE SERP SIMULATOR
         ══════════════════════════════════════════════════ */}
      <div id="audit" style={{ scrollMarginTop: 80 }}>
        <SERPSimulator />
      </div>

      {/* ══════════════════════════════════════════════════
          9. FAQ SECTION (THE 6 EXACT QUESTIONS - CLOSED BY DEFAULT)
         ══════════════════════════════════════════════════ */}
      <section id="faq" className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className={styles.sectionEyebrow} style={{ margin: '0 auto 12px' }}>
              <span>Direct Answers</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Frequently Asked <span className="accent-gradient">Questions</span>
            </h2>
            <p className={styles.sectionSub} style={{ maxWidth: 640, margin: '0 auto' }}>
              Clear, transparent answers on timeline, local SEO in India, strategy creation, and measurable results.
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
                <span className="accent-gradient">Marketing Copilot SEO Services</span>
              </h2>

              <p className={styles.ctaDescription}>
                Get in touch with Marketing Copilot and start building a stronger organic presence that drives traffic, leads, and business growth.
              </p>

              <div className={styles.ctaBrandPunchline}>
                Marketing Copilot — SEO That Drives Traffic, Leads, and Business Growth
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
