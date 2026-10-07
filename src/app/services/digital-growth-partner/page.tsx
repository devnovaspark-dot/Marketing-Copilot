'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
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

export default function DigitalGrowthPartnerPage() {
  // Form 1 (Hero Deck)
  const [heroForm, setHeroForm] = useState<LeadFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    services: ['SEO', 'Google Ads'],
    budget: '₹50K - ₹1L',
    requirement: '',
  });
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroError, setHeroError] = useState('');

  // Form 2 (Final Deck)
  const [finalForm, setFinalForm] = useState<LeadFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    services: ['SEO', 'Meta Ads'],
    budget: '₹1L - ₹3L',
    requirement: '',
  });
  const [finalSubmitting, setFinalSubmitting] = useState(false);
  const [finalSuccess, setFinalSuccess] = useState(false);
  const [finalError, setFinalError] = useState('');

  // Interactive timeframe switcher for Results Section
  const [timeframe, setTimeframe] = useState<'90d' | '1y' | 'all'>('90d');

  // Terminal active tab state
  const [activeTerminal, setActiveTerminal] = useState<'google' | 'meta' | 'seo'>('google');

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
          services: data.services,
          budget: data.budget,
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

            <div className={styles.heroProofStrip}>
              <div className={styles.heroProofTile}>
                <div className={styles.heroProofNum}>₹14.8Cr+</div>
                <div className={styles.heroProofLabel}>Verified Client Revenue</div>
              </div>
              <div className={styles.heroProofTile}>
                <div className={styles.heroProofNum}>&lt; 2 Hours</div>
                <div className={styles.heroProofLabel}>Audit Turnaround SLA</div>
              </div>
              <div className={styles.heroProofTile}>
                <div className={styles.heroProofNum}>100%</div>
                <div className={styles.heroProofLabel}>Direct Account Ownership</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Skeuomorphic Audit Console */}
          <div className={styles.auditConsole}>
            <div className={styles.consoleChromeBar}>
              <div className={styles.consoleStatusGroup}>
                <span className={styles.pulsingLed} />
                <span className={styles.consoleHeading}>Free Consultation Deck</span>
              </div>
              <span className={styles.consoleSpotsBadge}>2 Slots Left for Q2</span>
            </div>

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
                      placeholder="e.g. Rahul Sharma"
                      value={heroForm.name}
                      onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Company</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health"
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
                      placeholder="+91 98765 43210"
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
                      placeholder="name@company.com"
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
                    placeholder="https://yourbrand.com"
                    value={heroForm.website}
                    onChange={(e) => setHeroForm({ ...heroForm, website: e.target.value })}
                    className={styles.tactileField}
                  />
                </div>

                {/* Service Pills */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Services You Need</label>
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

                {/* Budget Pills */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Planned Monthly Budget</label>
                  <div className={styles.budgetPillGrid}>
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setHeroForm({ ...heroForm, budget: b })}
                        className={`${styles.budgetPillBtn} ${
                          heroForm.budget === b ? styles.budgetPillBtnActive : ''
                        }`}
                      >
                        {b}
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
                    placeholder="Describe your current bottleneck (e.g. high CPL on Meta, need to rank #1 on Google, scale to ₹50L/mo)"
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

                <button
                  type="submit"
                  disabled={heroSubmitting}
                  className={styles.extrudedCtaBtn}
                >
                  {heroSubmitting ? 'Evaluating Blueprint...' : 'GET MY FREE CONSULTATION →'}
                </button>

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
          SECTION 2: TRUSTED ACROSS INDIA — INFINITE MARQUEE & STAT BAR
      ═════════════════════════════════════════════ */}
      <section className={styles.marqueeSection}>
        <div className={styles.container}>
          <div className={styles.headerCenter} style={{ marginBottom: '40px' }}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>TRUSTED ACROSS INDIA</span>
            </div>
            <h2 className={styles.titlePrimary}>
              Trusted by Ambitious Brands from Seed to Scale
            </h2>
            <p className={styles.subtitle}>
              From high-growth D2C brands to enterprise healthcare and real estate developers across India.
            </p>
          </div>

          {/* 4 Stat Ribbons */}
          <div className={styles.statRibbonGrid}>
            <div className={styles.statRibbonCard}>
              <div className={styles.statRibbonNumber}>50+</div>
              <div className={styles.statRibbonLabel}>Enterprises Scaled</div>
              <div className={styles.statRibbonSub}>Across 12+ industry categories</div>
            </div>
            <div className={styles.statRibbonCard}>
              <div className={styles.statRibbonNumber}>₹14.8 Cr+</div>
              <div className={styles.statRibbonLabel}>Client Pipeline Delivered</div>
              <div className={styles.statRibbonSub}>Audited via CRM revenue metrics</div>
            </div>
            <div className={styles.statRibbonCard}>
              <div className={styles.statRibbonNumber}>94.2%</div>
              <div className={styles.statRibbonLabel}>MoM Client Retention</div>
              <div className={styles.statRibbonSub}>Zero mandatory lock-in clauses</div>
            </div>
            <div className={styles.statRibbonCard}>
              <div className={styles.statRibbonNumber}>4.9 / 5.0</div>
              <div className={styles.statRibbonLabel}>Verified Client Rating</div>
              <div className={styles.statRibbonSub}>Over 140+ verified client reviews</div>
            </div>
          </div>
        </div>

        {/* Seamless Infinite Marquee Track (Repeated for seamless loop) */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className={styles.marqueeLogoCard}>
                <Image
                  src={logo.src}
                  alt={`${logo.name} Partner`}
                  width={120}
                  height={38}
                  className={styles.marqueeLogoImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 3: RESULTS THAT MATTER — INTERACTIVE PERFORMANCE COCKPIT
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

        {/* 3 High-Impact Instrument Gauges */}
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
          SECTION 4: REAL CAMPAIGNS. REAL RESULTS — BENTO DOSSIER
      ═════════════════════════════════════════════ */}
      <section className={styles.caseStudiesBentoSection}>
        <div className={styles.container}>
          <div className={styles.headerCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>TACTICAL BLUEPRINTS</span>
            </div>
            <h2 className={styles.titlePrimary}>Real Campaigns. Real Results.</h2>
            <p className={styles.subtitle}>
              Take an inside look at how our synchronized growth stack solves real-world bottlenecks for ambitious businesses.
            </p>
          </div>

          <div className={styles.bentoGridWrapper}>
            {/* Left: Wide Flagship Dossier (E-Commerce & Fashion) */}
            <ScrollReveal delay={100}>
              <div className={styles.flagshipCaseDossier}>
                <div className={styles.flagshipHeroImageFrame}>
                  <Image
                    src="/images/work_fashion.jpg"
                    alt="Zue Studio D2C Apparel Scaling Case Study"
                    fill
                    sizes="(max-width: 980px) 100vw, 720px"
                    className={styles.flagshipImg}
                  />
                  <span className={styles.flagshipFloatingPill}>Flagship D2C Scale</span>
                </div>
                <div className={styles.flagshipBody}>
                  <h3 className={styles.caseClientH3}>
                    Zue Studio: Scaling From ₹15L to ₹1.2Cr GMV in 120 Days
                  </h3>
                  <p className={styles.caseParagraph}>
                    Overcame high iOS drop-offs and rising paid ad costs by deploying a high-velocity UGC video creative pipeline combined with a headless Next.js checkout yielding +28% completion.
                  </p>
                  <div className={styles.metricDoubleBox}>
                    <div className={styles.metricBoxCol}>
                      <div className={styles.metricBigStat}>4.1X</div>
                      <div className={styles.metricStatLabel}>Blended ROAS</div>
                    </div>
                    <div className={styles.metricBoxCol}>
                      <div className={styles.metricBigStat}>-42%</div>
                      <div className={styles.metricStatLabel}>Cost Per Purchase</div>
                    </div>
                  </div>
                  <Link href="/portfolio" className={styles.heroChiclet} style={{ alignSelf: 'flex-start' }}>
                    View Full Tactical Breakdown →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Stacked Case Studies (Real Estate & Healthcare) */}
            <div className={styles.sideCasesCol}>
              {/* Study 2: Real Estate */}
              <ScrollReveal delay={200}>
                <div className={styles.sideCaseCard}>
                  <div className={styles.sideCaseImgFrame}>
                    <Image
                      src="/images/work_realestate.jpg"
                      alt="Utkal Heights Luxury Real Estate"
                      fill
                      sizes="(max-width: 980px) 100vw, 480px"
                      className={styles.flagshipImg}
                    />
                    <span className={styles.flagshipFloatingPill} style={{ fontSize: '10px' }}>
                      Luxury Real Estate
                    </span>
                  </div>
                  <div className={styles.sideCaseBody}>
                    <h3 className={styles.caseClientH3} style={{ fontSize: '18px' }}>
                      Utkal Heights: 90+ High-Net-Worth Buyers / Mo
                    </h3>
                    <p className={styles.caseParagraph} style={{ fontSize: '13px', marginBottom: '14px' }}>
                      Eliminated third-party portal dependency via exact-match Google Search Ads and 35 localized micro-neighborhood landing pages.
                    </p>
                    <div className={styles.metricDoubleBox} style={{ padding: '10px', marginBottom: '14px' }}>
                      <div className={styles.metricBoxCol}>
                        <div className={styles.metricBigStat} style={{ fontSize: '18px' }}>90+</div>
                        <div className={styles.metricStatLabel}>Monthly Inquiries</div>
                      </div>
                      <div className={styles.metricBoxCol}>
                        <div className={styles.metricBigStat} style={{ fontSize: '18px' }}>-60%</div>
                        <div className={styles.metricStatLabel}>Cost Per Lead</div>
                      </div>
                    </div>
                    <Link href="/portfolio" className={styles.heroChiclet} style={{ alignSelf: 'flex-start' }}>
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Study 3: Healthcare */}
              <ScrollReveal delay={300}>
                <div className={styles.sideCaseCard}>
                  <div className={styles.sideCaseImgFrame}>
                    <Image
                      src="/images/work_healthcare.jpg"
                      alt="CareFirst Multi-Specialty Clinics"
                      fill
                      sizes="(max-width: 980px) 100vw, 480px"
                      className={styles.flagshipImg}
                    />
                    <span className={styles.flagshipFloatingPill} style={{ fontSize: '10px' }}>
                      Healthcare &amp; Clinics
                    </span>
                  </div>
                  <div className={styles.sideCaseBody}>
                    <h3 className={styles.caseClientH3} style={{ fontSize: '18px' }}>
                      CareFirst: Dominating Google Maps 3-Pack
                    </h3>
                    <p className={styles.caseParagraph} style={{ fontSize: '13px', marginBottom: '14px' }}>
                      Google Business Profile entity overhaul and automated post-visit SMS review acceleration driving 190% more direct calls.
                    </p>
                    <div className={styles.metricDoubleBox} style={{ padding: '10px', marginBottom: '14px' }}>
                      <div className={styles.metricBoxCol}>
                        <div className={styles.metricBigStat} style={{ fontSize: '18px' }}>+190%</div>
                        <div className={styles.metricStatLabel}>Direct Calls</div>
                      </div>
                      <div className={styles.metricBoxCol}>
                        <div className={styles.metricBigStat} style={{ fontSize: '18px' }}>#1 Rank</div>
                        <div className={styles.metricStatLabel}>14 Local Searches</div>
                      </div>
                    </div>
                    <Link href="/portfolio" className={styles.heroChiclet} style={{ alignSelf: 'flex-start' }}>
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 5: SEE WHAT WE MANAGE — DARK CYBER-COCKPIT
      ═════════════════════════════════════════════ */}
      <section className={styles.cockpitSection}>
        <div className={styles.cockpitNeonGrid} />
        <div className={styles.cockpitAmbientGlow} />

        <div className={styles.container}>
          <div className={styles.cockpitHeader}>
            <div className={styles.cockpitEyebrow}>
              <span className={styles.pulsingLed} />
              <span>TRANSPARENT COCKPIT</span>
            </div>
            <h2 className={styles.cockpitTitle}>See What We Manage</h2>
            <p className={styles.cockpitSubtitle}>
              Zero black boxes or vague agency reports. You receive direct access and telemetry into production campaigns, attribution pixels, and search visibility.
            </p>
          </div>

          <div className={styles.cockpitConsoleFrame}>
            <div className={styles.cockpitTitleBar}>
              <div className={styles.cockpitTabList}>
                <button
                  type="button"
                  onClick={() => setActiveTerminal('google')}
                  className={`${styles.cockpitTabBtn} ${
                    activeTerminal === 'google' ? styles.cockpitTabBtnActive : ''
                  }`}
                >
                  🎯 Google Ads Cockpit
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTerminal('meta')}
                  className={`${styles.cockpitTabBtn} ${
                    activeTerminal === 'meta' ? styles.cockpitTabBtnActive : ''
                  }`}
                >
                  🚀 Meta Ads Studio
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTerminal('seo')}
                  className={`${styles.cockpitTabBtn} ${
                    activeTerminal === 'seo' ? styles.cockpitTabBtnActive : ''
                  }`}
                >
                  ⚡ SEO Ranking Radar
                </button>
              </div>

              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className={styles.pulsingLed} />
                <span>LIVE PRODUCTION FEED</span>
              </div>
            </div>

            <div className={styles.cockpitGrid}>
              {/* Display Frame */}
              <div className={styles.cockpitDisplayViewport}>
                <Image
                  src={
                    activeTerminal === 'google'
                      ? '/images/Ad Framework.jpg'
                      : activeTerminal === 'meta'
                      ? '/images/Google ads & Meta ads.png'
                      : '/images/SEO framework.jpg'
                  }
                  alt="Production Campaign Telemetry"
                  fill
                  sizes="(max-width: 900px) 100vw, 680px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Metrics Readouts */}
              <div className={styles.cockpitMetricsCol}>
                {activeTerminal === 'google' && (
                  <>
                    <div className={styles.cyberTelemetryCard}>
                      <div className={styles.cyberMetricLabel}>Search Impression Share</div>
                      <div className={`${styles.cyberMetricStat} ${styles.cyberMetricGold}`}>
                        88.4%
                      </div>
                      <div className={styles.cyberMetricDetail}>
                        Dominating top-of-page ad placements on high-intent buyer terms with Quality Score 9.2/10.
                      </div>
                    </div>
                    <div className={styles.cyberTelemetryCard}>
                      <div className={styles.cyberMetricLabel}>Negative Keyword Fortress</div>
                      <div className={`${styles.cyberMetricStat} ${styles.cyberMetricEmerald}`}>
                        1,840+ Blocked Terms
                      </div>
                      <div className={styles.cyberMetricDetail}>
                        Eliminating wasted spend on accidental, job-seeker, or free searches.
                      </div>
                    </div>
                  </>
                )}

                {activeTerminal === 'meta' && (
                  <>
                    <div className={styles.cyberTelemetryCard}>
                      <div className={styles.cyberMetricLabel}>CAPI Event Match Quality</div>
                      <div className={`${styles.cyberMetricStat} ${styles.cyberMetricEmerald}`}>
                        9.8 / 10.0
                      </div>
                      <div className={styles.cyberMetricDetail}>
                        Direct server-side Conversions API feeding first-party buyer signals back to Meta's AI bidding.
                      </div>
                    </div>
                    <div className={styles.cyberTelemetryCard}>
                      <div className={styles.cyberMetricLabel}>Creative Velocity</div>
                      <div className={`${styles.cyberMetricStat} ${styles.cyberMetricGold}`}>
                        12 Variations / Sprint
                      </div>
                      <div className={styles.cyberMetricDetail}>
                        Continuous A/B testing of hooks, UGC video creators, and offer angles to prevent ad fatigue.
                      </div>
                    </div>
                  </>
                )}

                {activeTerminal === 'seo' && (
                  <>
                    <div className={styles.cyberTelemetryCard}>
                      <div className={styles.cyberMetricLabel}>Top 3 Google Positions</div>
                      <div className={`${styles.cyberMetricStat} ${styles.cyberMetricEmerald}`}>
                        1,280+ Keywords
                      </div>
                      <div className={styles.cyberMetricDetail}>
                        Securing featured snippets and top organic real estate for high-converting customer searches.
                      </div>
                    </div>
                    <div className={styles.cyberTelemetryCard}>
                      <div className={styles.cyberMetricLabel}>Core Web Vitals Speed</div>
                      <div className={`${styles.cyberMetricStat} ${styles.cyberMetricGold}`}>
                        99 / 100 Mobile Score
                      </div>
                      <div className={styles.cyberMetricDetail}>
                        Sub-second Largest Contentful Paint (LCP) ensuring zero drop-off on mobile connections.
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 6: MEET THE FOUNDERS — EDITORIAL LEADERSHIP
      ═════════════════════════════════════════════ */}
      <section className={styles.foundersSection}>
        <div className={styles.container}>
          <div className={styles.headerCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>LEADERSHIP &amp; ACCOUNTABILITY</span>
            </div>
            <h2 className={styles.titlePrimary}>Meet the Founders</h2>
            <p className={styles.subtitle}>
              No junior hand-offs or outsourced chaos. Your brand's growth blueprint is directly architected, managed, and reviewed by seasoned founders.
            </p>
          </div>

          <div className={styles.foundersDuoGrid}>
            {/* Shankar */}
            <ScrollReveal delay={100}>
              <div className={styles.founderChassis}>
                <div className={styles.founderPortraitHalo}>
                  <Image
                    src="/images/team/exec_1.png"
                    alt="Shankarsan Nayak — Founder & CEO"
                    fill
                    sizes="140px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className={styles.founderNameH3}>Shankarsan Nayak</h3>
                <span className={styles.founderRoleChip}>Founder &amp; CEO</span>
                <p className={styles.founderBioParagraph}>
                  10+ years architecting search systems, algorithmic paid advertising, and high-growth revenue funnels. Has personally scaled over 50+ businesses across India with engineering rigor and predictable CAC economics.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.founderLinkedinAction}
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </ScrollReveal>

            {/* Pranjal */}
            <ScrollReveal delay={200}>
              <div className={styles.founderChassis}>
                <div className={styles.founderPortraitHalo}>
                  <Image
                    src="/images/team/exec_2.png"
                    alt="Pranjal Sharma — Founding Team Member & COO"
                    fill
                    sizes="140px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className={styles.founderNameH3}>Pranjal Sharma</h3>
                <span className={styles.founderRoleChip}>Co-Founder &amp; COO</span>
                <p className={styles.founderBioParagraph}>
                  12+ years heading operational scale, enterprise media operations, and cross-channel execution rigor. Ensures that creative assets, technical audits, and performance milestones meet strict SLAs on time and on budget.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.founderLinkedinAction}
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 7: EVERYTHING YOU NEED TO GROW ONLINE — BENTO STACK
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
          SECTION 8: WHY WORK WITH US? — HEAD-TO-HEAD ADVANTAGE MATRIX
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

          <div className={styles.comparisonTableWrap}>
            <div className={styles.matrixRowHeader}>
              <div>Growth Dimension</div>
              <div className={styles.matrixColTraditional}>Traditional Agencies</div>
              <div style={{ color: '#0B2093' }}>Marketing Copilot</div>
            </div>

            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>1. Account Leadership</div>
                <div className={styles.matrixFeatureSub}>Who actually manages your growth</div>
              </div>
              <div className={styles.matrixBadPoint}>
                <span className={styles.crossIcon}>✕</span>
                <span>Junior account managers &amp; interns</span>
              </div>
              <div className={styles.matrixGoodPoint}>
                <span className={styles.checkIcon}>✓</span>
                <span>Founders &amp; Senior Strategists directly</span>
              </div>
            </div>

            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>2. Focus Metric</div>
                <div className={styles.matrixFeatureSub}>How success is judged and measured</div>
              </div>
              <div className={styles.matrixBadPoint}>
                <span className={styles.crossIcon}>✕</span>
                <span>Impressions, clicks, vanity reports</span>
              </div>
              <div className={styles.matrixGoodPoint}>
                <span className={styles.checkIcon}>✓</span>
                <span>Net Pipeline, ROAS &amp; Bankable GMV</span>
              </div>
            </div>

            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>3. Account Ownership</div>
                <div className={styles.matrixFeatureSub}>Pixels, ad accounts, and creative IP</div>
              </div>
              <div className={styles.matrixBadPoint}>
                <span className={styles.crossIcon}>✕</span>
                <span>Held hostage in agency ad manager</span>
              </div>
              <div className={styles.matrixGoodPoint}>
                <span className={styles.checkIcon}>✓</span>
                <span>100% Owned by you from Day 1</span>
              </div>
            </div>

            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>4. Execution Synergy</div>
                <div className={styles.matrixFeatureSub}>Integration of code, ads, and design</div>
              </div>
              <div className={styles.matrixBadPoint}>
                <span className={styles.crossIcon}>✕</span>
                <span>Fragmented across 3 different vendors</span>
              </div>
              <div className={styles.matrixGoodPoint}>
                <span className={styles.checkIcon}>✓</span>
                <span>One Unified Synchronized Growth Pod</span>
              </div>
            </div>

            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>5. Contract Flexibility</div>
                <div className={styles.matrixFeatureSub}>Commitment requirements</div>
              </div>
              <div className={styles.matrixBadPoint}>
                <span className={styles.crossIcon}>✕</span>
                <span>6 to 12 month rigid lock-in traps</span>
              </div>
              <div className={styles.matrixGoodPoint}>
                <span className={styles.checkIcon}>✓</span>
                <span>Zero Lock-In; month-to-month agility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 9: BASED IN INDIA. WORKING ACROSS INDIA.
      ═════════════════════════════════════════════ */}
      <section className={`${styles.container} ${styles.sectionPad}`}>
        <div className={styles.hqSectionGrid}>
          {/* Left: Contact Channels */}
          <div className={styles.hqCardChassis}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>HEADQUARTERS &amp; CHANNELS</span>
            </div>
            <h2 className={styles.titlePrimary} style={{ textAlign: 'left', marginBottom: '10px' }}>
              Based in India.<br />Working Across India.
            </h2>
            <p className={styles.subtitle} style={{ textAlign: 'left', margin: 0 }}>
              Whether you need in-person war-room sprints at our physical office or seamless digital collaboration across major metros, we are always accessible.
            </p>

            <div className={styles.contactChannelStrip}>
              <div className={styles.contactChannelItem}>
                <div className={styles.channelIconBubble}>📍</div>
                <div className={styles.channelTextMeta}>
                  <span className={styles.channelSmallLabel}>Registered Office</span>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                    Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001
                  </span>
                </div>
              </div>

              <div className={styles.contactChannelItem}>
                <div className={styles.channelIconBubble}>📞</div>
                <div className={styles.channelTextMeta}>
                  <span className={styles.channelSmallLabel}>Direct Phone</span>
                  <a href="tel:+919437168434" className={styles.channelValueLink}>
                    +91 94371 68434
                  </a>
                </div>
              </div>

              <div className={styles.contactChannelItem}>
                <div className={styles.channelIconBubble} style={{ background: '#DCFCE7', color: '#16A34A' }}>
                  💬
                </div>
                <div className={styles.channelTextMeta}>
                  <span className={styles.channelSmallLabel}>Instant WhatsApp</span>
                  <a
                    href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20discuss%20a%20digital%20growth%20partnership"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.channelValueLink}
                    style={{ color: '#16A34A' }}
                  >
                    Chat with a Strategist (+91 94371 68434) →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Metro Radar */}
          <div className={styles.metroRadarCard}>
            <div className={styles.eyebrowBadge}>
              <span>🇮🇳 Nationwide Footprint</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900, color: '#0B2093', marginBottom: '8px' }}>
              Active Commercial Hubs
            </h3>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, maxWidth: '340px' }}>
              Managing performance media and organic visibility across India's premier commercial corridors:
            </p>

            <div className={styles.metroTagCloud}>
              <span className={styles.metroPill}>Delhi NCR</span>
              <span className={styles.metroPill}>Mumbai</span>
              <span className={styles.metroPill}>Bengaluru</span>
              <span className={styles.metroPill}>Hyderabad</span>
              <span className={`${styles.metroPill} ${styles.metroPillHighlight}`}>Bhubaneswar HQ</span>
              <span className={styles.metroPill}>Kolkata</span>
              <span className={styles.metroPill}>Pune</span>
              <span className={styles.metroPill}>Chennai</span>
              <span className={styles.metroPill}>Ahmedabad</span>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '18px', borderTop: '1px dashed #CBD5E1', width: '100%' }}>
              <strong style={{ fontSize: '13px', color: '#0B2093' }}>
                ✓ Rapid Onboarding: 48-Hour Sprint Kickoff
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 10: READY TO GROW? — GRAND CLOSING CONVERSION SUITE
      ═════════════════════════════════════════════ */}
      <section className={styles.grandCtaSection} id="audit-form">
        <div className={styles.container}>
          <div className={styles.grandCardChassis}>
            <div className={styles.grandHeader}>
              <div className={styles.eyebrowBadge}>
                <span className={styles.pulsingLed} />
                <span>TAKE THE NEXT LEAP</span>
              </div>
              <h2 className={styles.grandTitleH2}>Ready to Grow?</h2>
              <p className={styles.grandSubtitle}>
                Get your complimentary 360° Digital Growth Audit. We will analyze your search ranking gaps, paid ad spend efficiency, and landing page drop-offs with an actionable 90-day blueprint.
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
                      placeholder="e.g. Priya Sen"
                      value={finalForm.name}
                      onChange={(e) => setFinalForm({ ...finalForm, name: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Nova Tech Logistics"
                      value={finalForm.company}
                      onChange={(e) => setFinalForm({ ...finalForm, company: e.target.value })}
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
                      placeholder="+91 98765 43210"
                      value={finalForm.phone}
                      onChange={(e) => setFinalForm({ ...finalForm, phone: e.target.value })}
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
                      placeholder="priya@novatech.com"
                      value={finalForm.email}
                      onChange={(e) => setFinalForm({ ...finalForm, email: e.target.value })}
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
                    placeholder="https://yourwebsite.com"
                    value={finalForm.website}
                    onChange={(e) => setFinalForm({ ...finalForm, website: e.target.value })}
                    className={styles.tactileField}
                  />
                </div>

                {/* Services multi-select */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Services</label>
                  <div className={styles.servicesChicletGrid}>
                    {availableServices.map((svc) => {
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

                {/* Budget */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Planned Budget</label>
                  <div className={styles.budgetPillGrid}>
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFinalForm({ ...finalForm, budget: b })}
                        className={`${styles.budgetPillBtn} ${
                          finalForm.budget === b ? styles.budgetPillBtnActive : ''
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Requirement */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Requirement / Questions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="What specific growth goal or channel would you like us to audit first?"
                    value={finalForm.requirement}
                    onChange={(e) => setFinalForm({ ...finalForm, requirement: e.target.value })}
                    className={styles.tactileTextarea}
                  />
                </div>

                {finalError && (
                  <p style={{ color: '#DC2626', fontSize: '12px', fontWeight: 700, margin: '8px 0' }}>
                    {finalError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={finalSubmitting}
                  className={styles.extrudedCtaBtn}
                  style={{ fontSize: '15px', padding: '16px 24px' }}
                >
                  {finalSubmitting ? 'Submitting Request...' : 'GET MY FREE CONSULTATION →'}
                </button>

                <div className={styles.consoleFooterGuarantees}>
                  <span>🔒 Strict NDA Guaranteed</span>
                  <span>⚡ 2-Hour Response Time</span>
                  <span>💬 No Sales Pressure</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
