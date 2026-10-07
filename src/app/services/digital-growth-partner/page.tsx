'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import ReviewBadgesStrip from './ReviewBadgesStrip';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import BrandSpotlightSection from '@/app/_components/BrandSpotlightSection';
import StrategySection from '@/app/_components/StrategySection';
import TeamPreview from '@/app/_components/TeamPreview';
import styles from './digital-growth-partner.module.css';

interface LeadFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  services: string[];
  budget: string;
  requirement: string;
}

const availableServices = [
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Social Media',
  'GEO / AEO',
  'Web Development',
  'CRO',
];

const budgetOptions = [
  '₹25K - ₹50K',
  '₹50K - ₹1L',
  '₹1L - ₹3L',
  '₹3L - ₹5L',
  '₹5L+',
];

const clientLogos = [
  { name: 'Sabour', src: '/images/clients/Sabour-logo.png' },
  { name: 'Ekatraa', src: '/images/clients/ekatraa.png' },
  { name: 'Heed Health', src: '/images/clients/heed.png' },
  { name: 'Medallion House', src: '/images/clients/medallion-house.png' },
  { name: 'Praveen Electronics', src: '/images/clients/praveen-electronics.png' },
  { name: 'Sri Pandurangan', src: '/images/clients/sri-pandurangan-divine-fresh.png' },
  { name: 'Travysys', src: '/images/clients/travysys.png' },
  { name: 'Weekend Bhraman', src: '/images/clients/weekend-bhraman.png' },
  { name: 'Zue Studio', src: '/images/clients/Zue-Studio-Logo-color (1).png' },
];

const metroHubDetails: Record<
  string,
  {
    name: string;
    tag: string;
    status: string;
    desc: string;
    category: string;
    speed: string;
  }
> = {
  bhubaneswar: {
    name: 'Bhubaneswar HQ (Mallick Complex)',
    tag: 'EXECUTIVE COMMAND CENTER',
    status: 'Live War Room Open',
    desc: 'Physical headquarters hosting our senior performance strategists, creative production lab, and on-site client sprints.',
    category: 'Central Engineering & Omnichannel Media',
    speed: 'Instant Local Dispatch',
  },
  delhi: {
    name: 'Delhi NCR (Gurugram & Noida)',
    tag: 'COMMERCIAL CORRIDOR',
    status: 'High Volume Active',
    desc: 'Powering multi-crore customer acquisition engines for high-growth D2C apparel, B2B manufacturing, and logistics brands.',
    category: 'High-Intent Google Ads & Search Scale',
    speed: '48-Hour Sprint Kickoff',
  },
  mumbai: {
    name: 'Mumbai & BKC Corridor',
    tag: 'FINANCE & LUXURY RETAIL',
    status: 'Active Pipeline',
    desc: 'Engineering high-converting Meta Advantage+ funnels and sub-second landing pages for premium fashion, hospitality, and fintech.',
    category: 'CAPI First-Party Pixel & Video Reels',
    speed: '48-Hour Sprint Kickoff',
  },
  bengaluru: {
    name: 'Bengaluru (Koramangala & Indiranagar)',
    tag: 'TECH & SAAS ECOSYSTEM',
    status: 'Continuous Scaling',
    desc: 'Scaling product-led growth, programmatic SEO architectures, and automated customer qualification funnels for modern startups.',
    category: 'Programmatic SEO & Conversion Engineering',
    speed: '48-Hour Sprint Kickoff',
  },
  hyderabad: {
    name: 'Hyderabad (HITEC City & Gachibowli)',
    tag: 'HEALTHCARE & REAL ESTATE',
    status: 'Active Campaigns',
    desc: 'Dominating Google Maps 3-pack and hyper-local search for multi-specialty clinical networks and luxury residential towers.',
    category: 'Local 3-Pack SEO & High-Ticket Leads',
    speed: '48-Hour Sprint Kickoff',
  },
  kolkata: {
    name: 'Kolkata & Eastern Hub',
    tag: 'RETAIL & COMMERCE',
    status: 'Active Campaigns',
    desc: 'Driving footfalls and omnichannel D2C revenue across Eastern India commercial districts with localized search graphs.',
    category: 'Omnichannel Performance Media',
    speed: '48-Hour Sprint Kickoff',
  },
  pune: {
    name: 'Pune IT & Auto Corridor',
    tag: 'B2B & EDUCATION',
    status: 'Active Campaigns',
    desc: 'Capturing high-ticket institutional and corporate inquiries via targeted LinkedIn Ads and exact-match Google PPC fortresses.',
    category: 'B2B Lead Generation & Technical SEO',
    speed: '48-Hour Sprint Kickoff',
  },
  chennai: {
    name: 'Chennai Commercial Belt',
    tag: 'SAAS & ENTERPRISE',
    status: 'Active Campaigns',
    desc: 'Delivering predictable customer acquisition pipelines for global B2B SaaS firms and regional healthcare institutions.',
    category: 'Google Performance Max & Entity Schema',
    speed: '48-Hour Sprint Kickoff',
  },
  ahmedabad: {
    name: 'Ahmedabad & Gujarat Industrial',
    tag: 'MANUFACTURING & D2C',
    status: 'Active Campaigns',
    desc: 'Scaling domestic and export B2B lead pipelines with comprehensive conversion rate optimization and WhatsApp CRM integration.',
    category: 'Export Inquiries & CRM Automations',
    speed: '48-Hour Sprint Kickoff',
  },
};

export default function DigitalGrowthPartnerPage() {
  // Form 1 (Hero Deck) — Nothing pre-checked per user instruction
  const [heroForm, setHeroForm] = useState<LeadFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    services: [],
    budget: '',
    requirement: '',
  });
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroError, setHeroError] = useState('');

  // Form 2 (Final Deck) — Nothing pre-checked per user instruction
  const [finalForm, setFinalForm] = useState<LeadFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    services: [],
    budget: '',
    requirement: '',
  });
  const [finalSubmitting, setFinalSubmitting] = useState(false);
  const [finalSuccess, setFinalSuccess] = useState(false);
  const [finalError, setFinalError] = useState('');

  // Interactive timeframe switcher for Results Section
  const [timeframe, setTimeframe] = useState<'90d' | '1y' | 'all'>('90d');

  // Interactive Active Metro Hub State for Operations Command Center
  const [activeHub, setActiveHub] = useState<string>('bhubaneswar');

  // Service toggle helper
  const toggleService = (formType: 'hero' | 'final', service: string) => {
    if (formType === 'hero') {
      setHeroForm((prev) => {
        const exists = prev.services.includes(service);
        return {
          ...prev,
          services: exists
            ? prev.services.filter((s) => s !== service)
            : [...prev.services, service],
        };
      });
    } else {
      setFinalForm((prev) => {
        const exists = prev.services.includes(service);
        return {
          ...prev,
          services: exists
            ? prev.services.filter((s) => s !== service)
            : [...prev.services, service],
        };
      });
    }
  };

  // Submit handler
  const handleFormSubmit = async (e: React.FormEvent, formType: 'hero' | 'final') => {
    e.preventDefault();
    const data = formType === 'hero' ? heroForm : finalForm;
    const setSubmitting = formType === 'hero' ? setHeroSubmitting : setFinalSubmitting;
    const setSuccess = formType === 'hero' ? setHeroSuccess : setFinalSuccess;
    const setError = formType === 'hero' ? setHeroError : setFinalError;

    if (!data.name || !data.email || !data.phone) {
      setError('Please provide your name, phone/WhatsApp, and work email.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email,
          website: data.website,
          services: data.services.length > 0 ? data.services : ['Digital Growth Partner Audit'],
          budget: data.budget || 'Custom Growth Budget',
          message: data.requirement || 'Requested 360° Digital Growth Consultation',
        }),
      });

      const json = await res.json().catch(() => null);

      if (res.ok && (json?.success || json?.message)) {
        setSuccess(true);
      } else {
        setError(json?.message || 'Failed to submit. Please WhatsApp us directly.');
      }
    } catch {
      setError('Network error. Please WhatsApp us directly at +91 94371 68434.');
    } finally {
      setSubmitting(false);
    }
  };

  const selectedHubData = metroHubDetails[activeHub] || metroHubDetails.bhubaneswar;

  return (
    <div className={styles.page}>
      {/* Dynamic Ambient Background Elements */}
      <div className={styles.ambientOrb1} />
      <div className={styles.ambientOrb2} />
      <div className={styles.ambientGridBg} />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 1: HERO & INTERACTIVE AUDIT CONSOLE
      ═════════════════════════════════════════════════════════════════ */}
      <section className={`${styles.container} ${styles.heroSection}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Vision & Proposition */}
          <div className={styles.heroColLeft}>
            <div className={styles.heroBadgeCluster}>
              <div className={styles.heroBadgeFlagship}>
                <span className={styles.pulsingLed} />
                <span>DIGITAL GROWTH PARTNER</span>
              </div>
              <div className={styles.heroBadgeNation}>
                <span>🇮🇳 Scaling Brands Across India</span>
              </div>
            </div>

            <h1 className={styles.heroDisplayH1}>
              READY TO GROW YOUR BUSINESS{' '}
              <span className={styles.heroShimmerAccent}>
                WITH DIGITAL MARKETING?
              </span>
            </h1>

            {/* Tactile Channel Chiclets */}
            <div className={styles.heroChicletsRow}>
              <span className={styles.heroChiclet}>⚡ SEO</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>🎯 PPC</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>🚀 META ADS</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>📱 SOCIAL</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>🤖 GEO / AEO</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>💻 WEB</span>
            </div>

            <p className={styles.heroLeadParagraph}>
              Stop burning your growth capital on isolated campaigns and vanity impressions. As your dedicated Digital Growth Partner, we engineer end-to-end customer acquisition systems that connect high-intent search, paid performance, and conversion architecture directly to revenue.
            </p>

            {/* 3 Hero Metrics Requested By User */}
            <div className={styles.heroProofStrip}>
              <div className={styles.heroProofTile}>
                <div className={styles.heroProofNum}>₹14.8Cr+</div>
                <div className={styles.heroProofLabel}>Tracked Client Pipeline &amp; GMV</div>
              </div>
              <div className={styles.heroProofTile}>
                <div className={styles.heroProofNum}>&lt; 2 Hours</div>
                <div className={styles.heroProofLabel}>Audit Response SLA</div>
              </div>
              <div className={styles.heroProofTile}>
                <div className={styles.heroProofNum}>100%</div>
                <div className={styles.heroProofLabel}>Direct Account &amp; Data Ownership</div>
              </div>
            </div>

            {/* Review Badges Strip: Capterra (5.0), GoodFirms (4.9), Google (4.9), DesignRush (4.7), UpCity (5.0) - GetApp Omitted */}
            <ReviewBadgesStrip />
          </div>

          {/* Right Column: Interactive Skeuomorphic Audit Console */}
          <div className={styles.auditConsole}>
            {heroSuccess ? (
              <div className={styles.successBannerBox}>
                <div className={styles.successCheckIcon}>✓</div>
                <h3 className={styles.successHeadline}>Blueprint Initiated!</h3>
                <p className={styles.successCopy}>
                  Thank you, <strong>{heroForm.name}</strong>! Our senior growth team is reviewing your project details. We will email your preliminary 90-day growth blueprint within <strong>2 hours</strong>.
                </p>
                <a
                  href={`https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20just%20submitted%20the%20growth%20consultation%20form%20for%20${encodeURIComponent(heroForm.company || 'my company')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.successWhatsAppBtn}
                >
                  <span>💬 Fast-Track on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, 'hero')}>
                <div className={styles.inputGridDouble}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={heroForm.name}
                      onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Company</label>
                    <input
                      type="text"
                      value={heroForm.company}
                      onChange={(e) => setHeroForm({ ...heroForm, company: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                </div>

                <div className={styles.inputGridDouble}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Phone / WhatsApp <span>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={heroForm.phone}
                      onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Work Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={heroForm.email}
                      onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Website URL <span className={styles.fieldLabelOpt}>(Optional)</span>
                  </label>
                  <input
                    type="url"
                    value={heroForm.website}
                    onChange={(e) => setHeroForm({ ...heroForm, website: e.target.value })}
                    className={styles.tactileField}
                  />
                </div>

                {/* Service Pills — Initially unselected */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Services You Need <span className={styles.fieldLabelOpt}>(Select any)</span>
                  </label>
                  <div className={styles.servicesChicletGrid}>
                    {availableServices.map((svc) => {
                      const selected = heroForm.services.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService('hero', svc)}
                          className={`${styles.servicePillBtn} ${
                            selected ? styles.servicePillBtnActive : ''
                          }`}
                        >
                          {svc} {selected ? '✓' : '+'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Pills — Initially unselected */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Planned Monthly Budget <span className={styles.fieldLabelOpt}>(Optional)</span>
                  </label>
                  <div className={styles.budgetPillGrid}>
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() =>
                          setHeroForm({
                            ...heroForm,
                            budget: heroForm.budget === b ? '' : b,
                          })
                        }
                        className={`${styles.budgetPillBtn} ${
                          heroForm.budget === b ? styles.budgetPillBtnActive : ''
                        }`}
                      >
                        {b} {heroForm.budget === b ? '✓' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Requirement */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Requirement / Growth Bottleneck
                  </label>
                  <textarea
                    rows={2}
                    value={heroForm.requirement}
                    onChange={(e) => setHeroForm({ ...heroForm, requirement: e.target.value })}
                    className={styles.tactileTextarea}
                  />
                </div>

                {heroError && (
                  <p style={{ color: '#DC2626', fontSize: '12px', fontWeight: 700, margin: '8px 0' }}>
                    {heroError}
                  </p>
                )}

                {/* BeamButton matching the navbar button style animation */}
                <div style={{ marginTop: 14 }}>
                  <BeamButton
                    type="submit"
                    disabled={heroSubmitting}
                    fullWidth
                    size="lg"
                    label={heroSubmitting ? 'Evaluating Blueprint...' : 'Get My Free Consultation →'}
                  />
                </div>

                <div className={styles.consoleFooterGuarantees}>
                  <span>🔒 100% Confidential</span>
                  <span>⚡ 2-Hour Response</span>
                  <span>🎯 Custom Roadmap</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SLIDING BRAND ICONS MARQUEE (COLORFUL & VIBRANT AS LIKE HOME PAGE)
      ═════════════════════════════════════════════ */}
      <section className={styles.slidingBrandSection}>
        <div className={styles.container}>
          <div className={styles.marqueeHeader}>
            <div className={styles.marqueeHeaderLabel}>
              <span className={styles.pulsingLed} />
              <span>Trusted by Ambitious Brands &amp; Growing Enterprises Across India</span>
            </div>
          </div>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeFadeLeft} />
          <div className={styles.marqueeTrack}>
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className={styles.marqueeLogoCard} title={logo.name}>
                <Image
                  src={logo.src}
                  alt={`${logo.name} Partner`}
                  width={150}
                  height={48}
                  className={styles.marqueeLogoImg}
                />
              </div>
            ))}
          </div>
          <div className={styles.marqueeFadeRight} />
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          INTERACTIVE MAP SECTION (JUST BELOW HERO & BRAND ICONS)
      ═════════════════════════════════════════════ */}
      <QuickConnectMapSection
        id="direct-connect"
        eyebrow="Driving Business Growth With Digital Marketing in India"
        title={
          <>
            Smart Digital Marketing for<br />
            <span style={{
              background: 'linear-gradient(135deg, #FFB800 0%, #EA580C 50%, #B45309 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>Growing Businesses</span>
          </>
        }
        subtitle="As a leading digital marketing partner in India, we combine SEO, paid ads, content, and conversion engineering to help brands scale predictably."
      />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 3: RESULTS THAT MATTER — 3 PERFECTLY ALIGNED GAUGES
      ═════════════════════════════════════════════ */}
      <section className={`${styles.container} ${styles.performanceCockpit}`}>
        <div className={styles.headerCenter}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.pulsingLed} />
            <span>MEASURABLE BUSINESS IMPACT</span>
          </div>
          <h2 className={styles.titlePrimary}>Results That Matter</h2>
          <p className={styles.subtitle}>
            We measure success in net margin, verified leads, and compounded enterprise value—not clicks or vanity metrics.
          </p>
        </div>

        {/* Timeframe Switcher */}
        <div className={styles.timeframeSwitchBar}>
          <button
            type="button"
            onClick={() => setTimeframe('90d')}
            className={`${styles.timeframeBtn} ${
              timeframe === '90d' ? styles.timeframeBtnActive : ''
            }`}
          >
            Last 90 Days
          </button>
          <button
            type="button"
            onClick={() => setTimeframe('1y')}
            className={`${styles.timeframeBtn} ${
              timeframe === '1y' ? styles.timeframeBtnActive : ''
            }`}
          >
            1 Year Scale
          </button>
          <button
            type="button"
            onClick={() => setTimeframe('all')}
            className={`${styles.timeframeBtn} ${
              timeframe === 'all' ? styles.timeframeBtnActive : ''
            }`}
          >
            Lifetime Compounding
          </button>
        </div>

        {/* 3 High-Impact Equal-Height Aligned Instrument Gauges */}
        <div className={styles.gaugesTriadGrid}>
          {/* Gauge 1: Traffic */}
          <ScrollReveal delay={100}>
            <div className={styles.gaugeChassis}>
              <div className={styles.instrumentBezel}>
                <div className={styles.instrumentDialFace}>
                  <div className={styles.instrumentValueBig}>
                    {timeframe === '90d' ? '+187%' : timeframe === '1y' ? '+340%' : '+612%'}
                  </div>
                  <div className={styles.instrumentMetricSub}>ORGANIC TRAFFIC</div>
                </div>
              </div>
              <h3 className={styles.gaugeHeading}>High-Intent Search Traffic</h3>
              <p className={styles.gaugeDescription}>
                Compounded growth in commercial &amp; transactional search volume via technical SEO, entity hubs, and AI search presence.
              </p>
              <div className={styles.gaugeProofBadge}>
                <span>Industry Avg: +22%</span>
                <span>•</span>
                <strong style={{ color: '#0B2093' }}>8.5X Outperformance</strong>
              </div>
            </div>
          </ScrollReveal>

          {/* Gauge 2: ROAS */}
          <ScrollReveal delay={200}>
            <div className={styles.gaugeChassis}>
              <div className={styles.instrumentBezel}>
                <div className={styles.instrumentDialFace}>
                  <div className={styles.instrumentValueBig}>
                    {timeframe === '90d' ? '3.4X' : timeframe === '1y' ? '3.8X' : '4.2X'}
                  </div>
                  <div className={styles.instrumentMetricSub}>BLENDED ROAS</div>
                </div>
              </div>
              <h3 className={styles.gaugeHeading}>Paid Ad Return on Spend</h3>
              <p className={styles.gaugeDescription}>
                Cross-channel paid media return across Google Search, Shopping, and Meta Advantage+ campaigns with verified CAPI attribution.
              </p>
              <div className={styles.gaugeProofBadge}>
                <span>Target: 2.2X</span>
                <span>•</span>
                <strong style={{ color: '#059669' }}>+54% Margin Boost</strong>
              </div>
            </div>
          </ScrollReveal>

          {/* Gauge 3: CPL */}
          <ScrollReveal delay={300}>
            <div className={styles.gaugeChassis}>
              <div className={styles.instrumentBezel}>
                <div className={styles.instrumentDialFace}>
                  <div className={styles.instrumentValueBig}>
                    {timeframe === '90d' ? '-34%' : timeframe === '1y' ? '-46%' : '-58%'}
                  </div>
                  <div className={styles.instrumentMetricSub}>LOWER CPL</div>
                </div>
              </div>
              <h3 className={styles.gaugeHeading}>Cost Per Qualified Lead</h3>
              <p className={styles.gaugeDescription}>
                Systematic reduction in acquisition costs through landing page conversion rate optimization, negative keyword fortresses, and CRM filtering.
              </p>
              <div className={styles.gaugeProofBadge}>
                <span>Baseline: ₹1,450</span>
                <span>•</span>
                <strong style={{ color: '#0B2093' }}>Now: ₹957 Avg CPL</strong>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 4: REAL CAMPAIGNS. REAL RESULTS — 3 PERFECTLY ALIGNED CASE STUDIES
      ═════════════════════════════════════════════ */}
      <section className={styles.caseStudiesAlignedSection}>
        <div className={styles.container}>
          <div className={styles.headerCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>TACTICAL BLUEPRINTS</span>
            </div>
            <h2 className={styles.titlePrimary}>Real Campaigns. Real Results.</h2>
            <p className={styles.subtitle}>
              Take an inside look at how our synchronized growth pods solve real bottlenecks and drive audited revenue for ambitious businesses.
            </p>
          </div>

          <div className={styles.caseStudiesTriadGrid}>
            {/* Card 1: D2C Apparel & Fashion */}
            <ScrollReveal delay={100}>
              <div className={styles.caseCardAligned}>
                <div className={styles.caseImgFrameAligned}>
                  <Image
                    src="/images/work_fashion.jpg"
                    alt="Zue Studio D2C Apparel Scaling Case Study"
                    fill
                    sizes="(max-width: 980px) 100vw, 400px"
                    className={styles.caseImgAligned}
                  />
                  <span className={styles.casePillBadge}>Flagship D2C Scale</span>
                </div>
                <div className={styles.caseBodyAligned}>
                  <h3 className={styles.caseTitleH3}>
                    Zue Studio: Scaling From ₹15L to ₹1.2Cr GMV
                  </h3>
                  <p className={styles.caseSummaryText}>
                    Eliminated high iOS drop-offs and rising ad costs by deploying a UGC video creator pipeline paired with a headless sub-second checkout.
                  </p>
                  <div className={styles.caseMetricDouble}>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>4.1X</div>
                      <div className={styles.metricLbl}>Blended ROAS</div>
                    </div>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>-42%</div>
                      <div className={styles.metricLbl}>Cost Per Order</div>
                    </div>
                  </div>
                  <ul className={styles.casePlaybookChecklist}>
                    <li><span className={styles.greenCheck}>✓</span> UGC Creator Engine (12 Variations/Mo)</li>
                    <li><span className={styles.greenCheck}>✓</span> Headless Next.js Checkout (+28% Conversion)</li>
                    <li><span className={styles.greenCheck}>✓</span> Meta CAPI First-Party Pixel Attribution</li>
                  </ul>
                  <Link href="/portfolio" className={styles.heroChiclet} style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
                    Read Full Blueprint →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Luxury Real Estate */}
            <ScrollReveal delay={200}>
              <div className={styles.caseCardAligned}>
                <div className={styles.caseImgFrameAligned}>
                  <Image
                    src="/images/work_realestate.jpg"
                    alt="Utkal Heights Luxury Real Estate"
                    fill
                    sizes="(max-width: 980px) 100vw, 400px"
                    className={styles.caseImgAligned}
                  />
                  <span className={styles.casePillBadge}>High-Ticket Real Estate</span>
                </div>
                <div className={styles.caseBodyAligned}>
                  <h3 className={styles.caseTitleH3}>
                    Utkal Heights: 90+ Qualified HNW Buyers / Mo
                  </h3>
                  <p className={styles.caseSummaryText}>
                    Eliminated third-party portal dependency via exact-match Google Search Ads and 35 localized micro-neighborhood landing pages.
                  </p>
                  <div className={styles.caseMetricDouble}>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>90+</div>
                      <div className={styles.metricLbl}>Monthly Inquiries</div>
                    </div>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>-60%</div>
                      <div className={styles.metricLbl}>Cost Per Lead</div>
                    </div>
                  </div>
                  <ul className={styles.casePlaybookChecklist}>
                    <li><span className={styles.greenCheck}>✓</span> Exact-Match Negative Keyword Fortress</li>
                    <li><span className={styles.greenCheck}>✓</span> 35 Hyper-Local Micro Landing Pages</li>
                    <li><span className={styles.greenCheck}>✓</span> Real-Time WhatsApp CRM Lead Routing</li>
                  </ul>
                  <Link href="/portfolio" className={styles.heroChiclet} style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
                    Read Full Blueprint →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Healthcare & Clinics */}
            <ScrollReveal delay={300}>
              <div className={styles.caseCardAligned}>
                <div className={styles.caseImgFrameAligned}>
                  <Image
                    src="/images/work_healthcare.jpg"
                    alt="CareFirst Multi-Specialty Clinics"
                    fill
                    sizes="(max-width: 980px) 100vw, 400px"
                    className={styles.caseImgAligned}
                  />
                  <span className={styles.casePillBadge}>Healthcare &amp; Clinics</span>
                </div>
                <div className={styles.caseBodyAligned}>
                  <h3 className={styles.caseTitleH3}>
                    CareFirst: Dominating Google Maps 3-Pack
                  </h3>
                  <p className={styles.caseSummaryText}>
                    Google Business Profile entity overhaul and automated post-visit SMS review acceleration driving a sustained surge in patient calls.
                  </p>
                  <div className={styles.caseMetricDouble}>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>+190%</div>
                      <div className={styles.metricLbl}>Direct Patient Calls</div>
                    </div>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>#1 Rank</div>
                      <div className={styles.metricLbl}>14 High-Intent Searches</div>
                    </div>
                  </div>
                  <ul className={styles.casePlaybookChecklist}>
                    <li><span className={styles.greenCheck}>✓</span> Local Entity Graph &amp; Schema Architecture</li>
                    <li><span className={styles.greenCheck}>✓</span> Automated Post-Visit Review System</li>
                    <li><span className={styles.greenCheck}>✓</span> Geo-Targeted High-Intent Search Ads</li>
                  </ul>
                  <Link href="/portfolio" className={styles.heroChiclet} style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
                    Read Full Blueprint →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 5: CLIENT SPOTLIGHT • CASE STUDY IN ACTION
      ═════════════════════════════════════════════ */}
      <BrandSpotlightSection />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 6: OUR GROWTH FRAMEWORK · EXECUTION BLUEPRINT
          (Positioned directly bridging client spotlight proof to systematic execution)
      ═════════════════════════════════════════════ */}
      <StrategySection />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 7: LEADERSHIP & ACCOUNTABILITY
          "Meet the minds powering your growth."
      ═════════════════════════════════════════════ */}
      <TeamPreview eyebrow="LEADERSHIP & ACCOUNTABILITY" />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 8: EVERYTHING YOU NEED TO GROW ONLINE — 8 ALIGNED CARDS
      ═════════════════════════════════════════════ */}
      <section className={`${styles.container} ${styles.sectionPad}`}>
        <div className={styles.headerCenter}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.pulsingLed} />
            <span>END-TO-END GROWTH STACK</span>
          </div>
          <h2 className={styles.titlePrimary}>Everything You Need to Grow Online</h2>
          <p className={styles.subtitle}>
            A synchronized suite of performance services designed to work together without the overhead of managing multiple disconnected vendors.
          </p>
        </div>

        <div className={styles.capabilitiesBentoGrid}>
          {/* 1. SEO */}
          <div className={styles.capabilityCard}>
            <div className={styles.capabilityIconFrame}>⚡</div>
            <h3 className={styles.capabilityH3}>Search Engine Optimization</h3>
            <p className={styles.capabilityText}>
              Technical SEO audits, semantic schema, and topic cluster architecture to secure #1 rankings for high-intent queries.
            </p>
            <span className={styles.capabilityTag}>Organic Pipeline</span>
          </div>

          {/* 2. Google Ads */}
          <div className={styles.capabilityCard}>
            <div className={styles.capabilityIconFrame}>🎯</div>
            <h3 className={styles.capabilityH3}>Google Ads &amp; PPC</h3>
            <p className={styles.capabilityText}>
              High-ROAS search, Shopping, and Performance Max campaigns with precision negative keyword shields and smart bidding.
            </p>
            <span className={styles.capabilityTag}>Immediate Demand</span>
          </div>

          {/* 3. Meta Ads */}
          <div className={styles.capabilityCard}>
            <div className={styles.capabilityIconFrame}>🚀</div>
            <h3 className={styles.capabilityH3}>Meta Ads</h3>
            <p className={styles.capabilityText}>
              Full-funnel Facebook &amp; Instagram advertising powered by Advantage+ budgeting, UGC creatives, and Conversions API.
            </p>
            <span className={styles.capabilityTag}>Viral Scale</span>
          </div>

          {/* 4. Social Media */}
          <div className={styles.capabilityCard}>
            <div className={styles.capabilityIconFrame}>📱</div>
            <h3 className={styles.capabilityH3}>Social Media Growth</h3>
            <p className={styles.capabilityText}>
              Thumb-stopping short-form Reels, community building, and brand authority that turns casual viewers into brand advocates.
            </p>
            <span className={styles.capabilityTag}>Brand Resonance</span>
          </div>

          {/* 5. GEO / AEO */}
          <div className={styles.capabilityCard}>
            <div className={styles.capabilityIconFrame}>🤖</div>
            <h3 className={styles.capabilityH3}>GEO / AEO Optimization</h3>
            <p className={styles.capabilityText}>
              Be the cited authority inside ChatGPT, Perplexity, Claude, and Google AI Overviews using entity-rich content graphs.
            </p>
            <span className={styles.capabilityTag}>AI Search Ready</span>
          </div>

          {/* 6. Websites */}
          <div className={styles.capabilityCard}>
            <div className={styles.capabilityIconFrame}>💻</div>
            <h3 className={styles.capabilityH3}>High-Conversion Websites</h3>
            <p className={styles.capabilityText}>
              Sub-second speed Next.js websites built with responsive skeuomorphic design, clean code, and zero page bloat.
            </p>
            <span className={styles.capabilityTag}>Sub-Second Speed</span>
          </div>

          {/* 7. Content Marketing */}
          <div className={styles.capabilityCard}>
            <div className={styles.capabilityIconFrame}>✍️</div>
            <h3 className={styles.capabilityH3}>Content Marketing</h3>
            <p className={styles.capabilityText}>
              In-depth industry whitepapers, teardowns, buyer guides, and lead magnets that establish category leadership.
            </p>
            <span className={styles.capabilityTag}>Authority Building</span>
          </div>

          {/* 8. CRO */}
          <div className={styles.capabilityCard}>
            <div className={styles.capabilityIconFrame}>🧪</div>
            <h3 className={styles.capabilityH3}>Conversion Rate Optimization</h3>
            <p className={styles.capabilityText}>
              Continuous multivariate testing of headlines, checkout friction, form fields, and trust proof to double your conversion rate.
            </p>
            <span className={styles.capabilityTag}>Multiplier Effect</span>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 9: THE COPILOT ADVANTAGE — 4 ALIGNED PILLARS + INTERACTIVE MATRIX
      ═════════════════════════════════════════════ */}
      <section className={styles.comparisonMatrixSection}>
        <div className={styles.container}>
          <div className={styles.headerCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>THE COPILOT ADVANTAGE</span>
            </div>
            <h2 className={styles.titlePrimary}>Why Work With Us?</h2>
            <p className={styles.subtitle}>
              See how partnering with a dedicated growth partner differs fundamentally from traditional agency retainer models.
            </p>
          </div>

          {/* 4 Aligned Strategic Pillars */}
          <div className={styles.pillarsQuadGrid}>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>01</div>
              <h3 className={styles.pillarTitleH3}>Direct Account Ownership</h3>
              <p className={styles.pillarBody}>
                You own 100% of your Google Ads accounts, Meta pixels, and creative IP from Day 1. Never held hostage by agency logins.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>02</div>
              <h3 className={styles.pillarTitleH3}>Founder-Led Execution</h3>
              <p className={styles.pillarBody}>
                Direct strategy and sprint oversight by our senior founders. No junior interns managing your ad spend.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>03</div>
              <h3 className={styles.pillarTitleH3}>Integrated Tech Stack</h3>
              <p className={styles.pillarBody}>
                We align high-converting engineering, creative velocity, and algorithmic media buying into one synchronized pod.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>04</div>
              <h3 className={styles.pillarTitleH3}>Sub-2-Hour Response SLA</h3>
              <p className={styles.pillarBody}>
                Dedicated WhatsApp war room with real-time sprint updates, transparent metrics, and 0 lock-in contracts.
              </p>
            </div>
          </div>

          {/* Head-to-Head Comparison Matrix With Interactive Tactile Badges */}
          <div className={styles.comparisonTableWrap}>
            <div className={styles.matrixRowHeader}>
              <div>Growth Dimension</div>
              <div className={styles.matrixColTraditional}>Traditional Agencies</div>
              <div style={{ color: '#0B2093' }}>Marketing Copilot</div>
            </div>

            {/* Row 1 */}
            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>1. Account Leadership</div>
                <div className={styles.matrixFeatureSub}>Who actually manages your growth</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>Junior account managers &amp; interns</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>Founders &amp; Senior Strategists directly</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>2. Focus Metric</div>
                <div className={styles.matrixFeatureSub}>How success is judged and measured</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>Impressions, clicks &amp; vanity reports</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>Net Pipeline, ROAS &amp; Bankable GMV</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>3. Account Ownership</div>
                <div className={styles.matrixFeatureSub}>Pixels, ad accounts, and creative IP</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>Held hostage in agency ad manager</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>100% Owned by you from Day 1</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>4. Execution Synergy</div>
                <div className={styles.matrixFeatureSub}>Integration of code, ads, and design</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>Fragmented across 3 different vendors</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>One Unified Synchronized Growth Pod</span>
              </div>
            </div>

            {/* Row 5 */}
            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>5. Contract Flexibility</div>
                <div className={styles.matrixFeatureSub}>Commitment requirements</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>6 to 12 month rigid lock-in traps</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>Zero Lock-In; month-to-month agility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 10: OPERATIONS COMMAND CENTER (HEADQUARTERS & NATIONWIDE RADAR)
      ═════════════════════════════════════════════ */}
      <section className={styles.commandCenterSection}>
        <div className={styles.container}>
          <div className={styles.hqSectionGrid}>
            {/* Left Card: Headquarters & Strategic Channels */}
            <div className={styles.hqCardChassis}>
              <div>
                <div className={styles.hqLiveStatusTag}>
                  <span className={styles.statusLedNeutral} />
                  <span>STRATEGY WAR ROOM · IMMEDIATE DISPATCH</span>
                </div>
                <h2 className={styles.titlePrimary} style={{ textAlign: 'left', marginBottom: '10px' }}>
                  Physical Presence in Bhubaneswar.<br />
                  <span className={styles.titleAccent}>Nationwide Execution Across India.</span>
                </h2>
                <p className={styles.subtitle} style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
                  Whether you need in-person war-room sprints at our physical office or seamless digital collaboration across major metros, our senior growth architects are directly accessible.
                </p>
              </div>

              <div className={styles.contactChannelStrip}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mallick+Complex,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactChannelItem}
                >
                  <div className={styles.channelIconBubble}>📍</div>
                  <div className={styles.channelTextMeta}>
                    <span className={styles.channelSmallLabel}>Registered Corporate Office</span>
                    <span className={styles.channelValueText}>
                      Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001
                    </span>
                  </div>
                  <span className={styles.channelActionBadge}>Maps ↗</span>
                </a>

                <a href="tel:+919437168434" className={styles.contactChannelItem}>
                  <div className={styles.channelIconBubble}>📞</div>
                  <div className={styles.channelTextMeta}>
                    <span className={styles.channelSmallLabel}>Executive Direct Hotline</span>
                    <span className={styles.channelValueText}>+91 94371 68434</span>
                  </div>
                  <span className={styles.channelActionBadge}>Call Now ↗</span>
                </a>

                <a
                  href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20would%20like%20to%20discuss%20a%20digital%20growth%20partnership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactChannelItem}
                  style={{ borderLeft: '4px solid #10B981' }}
                >
                  <div className={styles.channelIconBubble} style={{ background: '#DCFCE7', color: '#16A34A' }}>
                    💬
                  </div>
                  <div className={styles.channelTextMeta}>
                    <span className={styles.channelSmallLabel}>Instant WhatsApp War Room</span>
                    <span className={styles.channelValueText} style={{ color: '#16A34A' }}>
                      Chat with Senior Strategist (+91 94371 68434)
                    </span>
                  </div>
                  <span className={styles.channelActionBadge} style={{ background: '#DCFCE7', color: '#16A34A', borderColor: '#86EFAC' }}>
                    Chat ↗
                  </span>
                </a>
              </div>

              <div className={styles.hqFooterSla}>
                <span>⚡ 2-Hour Audit Response Turnaround</span>
                <span>•</span>
                <span>48-Hour Sprint Kickoff Guaranteed</span>
              </div>
            </div>

            {/* Right Card: Interactive Metro Radar & Commercial Hubs Console */}
            <div className={styles.metroRadarCard}>
              <div>
                <div className={styles.radarNeutralTag}>
                  <span className={styles.statusLedNeutral} />
                  <span>🇮🇳 NATIONWIDE CAMPAIGN RADAR</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900, color: '#0B2093', marginBottom: '8px' }}>
                  Active Commercial Hubs &amp; Metro Corridors
                </h3>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Click any commercial hub to review live campaign focus and deployment capacity:
                </p>

                {/* Interactive Metro Selector Pills */}
                <div className={styles.metroTagCloud}>
                  {Object.entries(metroHubDetails).map(([key, data]) => {
                    const isActive = activeHub === key;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setActiveHub(key)}
                        className={`${styles.metroPillBtn} ${isActive ? styles.metroPillBtnActive : ''}`}
                      >
                        {key === 'bhubaneswar' ? '📍' : '⚡'} {data.name.split(' (')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Live Telemetry Dossier Box */}
              <div className={styles.activeHubDossier}>
                <div className={styles.hubDossierHeader}>
                  <span className={styles.hubDossierName}>{selectedHubData.name}</span>
                  <span className={styles.hubDossierStatus}>● {selectedHubData.status}</span>
                </div>
                <p className={styles.hubDossierDesc}>{selectedHubData.desc}</p>
                <div className={styles.hubDossierStats}>
                  <div className={styles.hubStatTile}>
                    <span>🎯</span>
                    <span>{selectedHubData.category}</span>
                  </div>
                  <div className={styles.hubStatTile}>
                    <span>⚡</span>
                    <span>{selectedHubData.speed}</span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: 14, borderTop: '1.5px dashed #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#0B2093', fontWeight: 800 }}>
                <span>✓ Direct First-Party CAPI Attribution</span>
                <span>•</span>
                <span>Zero Account Black-Boxes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 11: TAKE THE NEXT LEAP — CLEAN, LIGHT & COMPACT SKEUOMORPHIC CARD
      ═════════════════════════════════════════════ */}
      <section className={styles.grandCtaSection} id="audit-form">
        <div className={styles.container}>
          <div className={styles.grandCardChassis}>
            <div className={styles.grandHeader}>
              <div className={styles.grandEyebrow}>
                <span>360° GROWTH AUDIT</span>
              </div>
              <h2 className={styles.grandTitleH2}>
                Ready to Accelerate Your Growth?
              </h2>
              <p className={styles.grandSubtitle}>
                Get your custom 90-day growth blueprint within 2 hours.
              </p>
            </div>

            {finalSuccess ? (
              <div className={styles.successBannerBox}>
                <div className={styles.successCheckIcon}>✓</div>
                <h3 className={styles.successHeadline}>Request Confirmed!</h3>
                <p className={styles.successCopy}>
                  Thank you, <strong>{finalForm.name}</strong>! Our senior growth team is analyzing your domain and will email you the full breakdown within <strong>2 hours</strong>.
                </p>
                <a
                  href={`https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20just%20submitted%20the%20growth%20audit%20request%20for%20${encodeURIComponent(finalForm.company || 'my company')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.successWhatsAppBtn}
                >
                  <span>Connect Instantly on WhatsApp →</span>
                </a>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, 'final')}>
                <div className={styles.inputGridDouble}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Full Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={finalForm.name}
                      onChange={(e) => setFinalForm({ ...finalForm, name: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Work Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={finalForm.email}
                      onChange={(e) => setFinalForm({ ...finalForm, email: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                </div>

                <div className={styles.inputGridDouble}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Phone / WhatsApp <span>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={finalForm.phone}
                      onChange={(e) => setFinalForm({ ...finalForm, phone: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Website or Company
                    </label>
                    <input
                      type="text"
                      value={finalForm.website}
                      onChange={(e) => setFinalForm({ ...finalForm, website: e.target.value, company: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                </div>

                {/* Primary Focus Areas (Compact Chiclets) */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Primary Focus <span className={styles.fieldLabelOpt}>(Select any)</span>
                  </label>
                  <div className={styles.servicesChicletGrid}>
                    {['⚡ SEO & Content', '🎯 Google Ads', '🚀 Meta Ads', '💻 Full-Funnel Growth'].map((svc) => {
                      const selected = finalForm.services.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService('final', svc)}
                          className={`${styles.servicePillBtn} ${
                            selected ? styles.servicePillBtnActive : ''
                          }`}
                        >
                          {svc} {selected ? '✓' : '+'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {finalError && (
                  <p style={{ color: '#DC2626', fontSize: '12px', fontWeight: 700, margin: '8px 0' }}>
                    {finalError}
                  </p>
                )}

                {/* Submit Button */}
                <div style={{ marginTop: 14 }}>
                  <BeamButton
                    type="submit"
                    disabled={finalSubmitting}
                    fullWidth
                    size="lg"
                    label={finalSubmitting ? 'Evaluating Blueprint...' : 'Get Free Consultation →'}
                  />
                </div>

                <div className={styles.grandCompactTrust}>
                  <span>🔒 Strict NDA</span>
                  <span>•</span>
                  <span>⚡ 2-Hour Response SLA</span>
                  <span>•</span>
                  <span>💬 Direct Founder Call</span>
                </div>

                <div className={styles.grandFooterBypass}>
                  <span>Need an immediate audit?</span>
                  <a
                    href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20need%20an%20urgent%20growth%20audit%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.grandFooterBypassLink}
                  >
                    WhatsApp Shankarsan directly at +91 94371 68434 →
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
