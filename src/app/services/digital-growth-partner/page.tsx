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

export default function DigitalGrowthPartnerPage() {
  // Form 1 (Hero Deck) State
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

  // Form 2 (Final Section Deck) State
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

  // Terminal active tab state
  const [activeTerminal, setActiveTerminal] = useState<'google' | 'meta' | 'seo'>('google');

  // Service toggle helper
  const toggleService = (
    formType: 'hero' | 'final',
    service: string
  ) => {
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
  const handleFormSubmit = async (
    e: React.FormEvent,
    formType: 'hero' | 'final'
  ) => {
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
        setError(json?.message || 'Failed to submit. Please contact us directly via WhatsApp.');
      }
    } catch {
      setError('Network error. Please WhatsApp us directly at +91 94371 68434.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGridLines} />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 1: HERO & LEAD COMMAND TERMINAL
      ═════════════════════════════════════════════════════════════════ */}
      <section className={`${styles.sectionContainer} ${styles.heroSection}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Value Messaging */}
          <div className={styles.heroContent}>
            <div className={styles.heroBadgeRow}>
              <div className={styles.heroBadge}>
                <span className={styles.sectionEyebrowLed} />
                <span>DIGITAL GROWTH PARTNER</span>
              </div>
              <div className={styles.heroHqBadge}>
                <span>🇮🇳 Serving Pan-India Brands</span>
              </div>
            </div>

            <h1 className={styles.heroTitle}>
              READY TO GROW YOUR BUSINESS{' '}
              <span className={styles.heroTitleAccent}>
                WITH DIGITAL MARKETING?
              </span>
            </h1>

            {/* Tactile Service Chiclets */}
            <div className={styles.channelChiclets}>
              <span className={styles.chicletPill}>⚡ SEO</span>
              <span className={styles.chicletDot}>•</span>
              <span className={styles.chicletPill}>🎯 PPC</span>
              <span className={styles.chicletDot}>•</span>
              <span className={styles.chicletPill}>🚀 META ADS</span>
              <span className={styles.chicletDot}>•</span>
              <span className={styles.chicletPill}>📱 SOCIAL</span>
              <span className={styles.chicletDot}>•</span>
              <span className={styles.chicletPill}>🤖 GEO / AEO</span>
              <span className={styles.chicletDot}>•</span>
              <span className={styles.chicletPill}>💻 WEB</span>
            </div>

            <p className={styles.heroValueProp}>
              Stop burning marketing budget on disjointed agencies and vanity impressions. As your dedicated Digital Growth Partner, we engineer end-to-end customer acquisition systems that connect high-intent search, paid performance, and conversion architecture directly to revenue.
            </p>

            <div className={styles.heroHighlightsGrid}>
              <div className={styles.heroHighlightTile}>
                <div className={styles.highlightMetric}>₹14.8Cr+</div>
                <div className={styles.highlightLabel}>Tracked Client Pipeline &amp; GMV</div>
              </div>
              <div className={styles.heroHighlightTile}>
                <div className={styles.highlightMetric}>&lt; 2 Hours</div>
                <div className={styles.highlightLabel}>Audit Response SLA</div>
              </div>
              <div className={styles.heroHighlightTile}>
                <div className={styles.highlightMetric}>100%</div>
                <div className={styles.highlightLabel}>Direct Account &amp; Data Ownership</div>
              </div>
            </div>
          </div>

          {/* Right Column: Skeuomorphic Lead Terminal */}
          <div className={`${styles.skeuoCard} ${styles.leadDeck}`}>
            <span className={styles.cardRivetTL} />
            <span className={styles.cardRivetTR} />
            <span className={styles.cardRivetBL} />
            <span className={styles.cardRivetBR} />

            <div className={styles.deckHeader}>
              <div className={styles.deckTitleWrap}>
                <span className={styles.deckIndicator} />
                <span className={styles.deckTitle}>Consultation Deck</span>
              </div>
              <span className={styles.deckSlotsLeft}>Only 2 Client Slots for Q2</span>
            </div>

            {heroSuccess ? (
              <div className={styles.formSuccessCard}>
                <div className={styles.successIconBadge}>✓</div>
                <h3 className={styles.successTitle}>Blueprint In Motion!</h3>
                <p className={styles.successText}>
                  Thank you, <strong>{heroForm.name}</strong>. Our senior growth leads are reviewing your project requirements and will respond within <strong>2 hours</strong> with your bespoke roadmap.
                </p>
                <a
                  href={`https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20just%20submitted%20the%20growth%20consultation%20form%20for%20${encodeURIComponent(heroForm.company || 'my company')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.successWaBtn}
                >
                  <span>💬 Fast-Track on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, 'hero')}>
                <div className={styles.formRowDouble}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={heroForm.name}
                      onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                      className={styles.engravedInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health Labs"
                      value={heroForm.company}
                      onChange={(e) => setHeroForm({ ...heroForm, company: e.target.value })}
                      className={styles.engravedInput}
                    />
                  </div>
                </div>

                <div className={styles.formRowDouble}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone / WhatsApp <span>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={heroForm.phone}
                      onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                      className={styles.engravedInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Work Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={heroForm.email}
                      onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                      className={styles.engravedInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Website <span className={styles.formLabelOpt}>(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={heroForm.website}
                    onChange={(e) => setHeroForm({ ...heroForm, website: e.target.value })}
                    className={styles.engravedInput}
                  />
                </div>

                {/* Services Chiclets */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Services Needed</label>
                  <div className={styles.servicesPillWrap}>
                    {availableServices.map((svc) => {
                      const selected = heroForm.services.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService('hero', svc)}
                          className={`${styles.serviceSelectPill} ${
                            selected ? styles.serviceSelectPillActive : ''
                          }`}
                        >
                          {svc} {selected ? '✓' : '+'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Monthly Budget</label>
                  <div className={styles.budgetPillWrap}>
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setHeroForm({ ...heroForm, budget: b })}
                        className={`${styles.budgetPill} ${
                          heroForm.budget === b ? styles.budgetPillActive : ''
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Requirement */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Requirement / Growth Bottleneck
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe your current challenge (e.g. high CPL, dropping SEO traffic, need to scale to ₹50L/mo)"
                    value={heroForm.requirement}
                    onChange={(e) => setHeroForm({ ...heroForm, requirement: e.target.value })}
                    className={styles.engravedTextarea}
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
                  className={styles.tactileSubmitBtn}
                >
                  {heroSubmitting ? 'Evaluating Blueprint...' : 'GET MY FREE CONSULTATION →'}
                </button>

                <div className={styles.deckTrustStrip}>
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
          SECTION 2: TRUSTED ACROSS INDIA (LOGOS & STATS)
      ═════════════════════════════════════════════════════════════════ */}
      <section className={styles.trustedSection}>
        <div className={styles.sectionContainer} style={{ padding: 0 }}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <span className={styles.sectionEyebrowLed} />
              <span>TRUSTED ACROSS INDIA</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Proven Partners to India’s Most Ambitious Brands
            </h2>
            <p className={styles.sectionDesc}>
              From funded startups to multi-location enterprises, our clients count on us for reliable performance, continuous testing, and transparent attribution.
            </p>
          </div>

          {/* Stats Bar */}
          <div className={styles.statsBarGrid}>
            <div className={styles.statTile}>
              <div className={styles.statTileNumber}>50+</div>
              <div className={styles.statTileLabel}>Enterprises Scaled</div>
              <div className={styles.statTileSub}>Across 12+ industry sectors</div>
            </div>
            <div className={styles.statTile}>
              <div className={styles.statTileNumber}>₹14.8 Cr+</div>
              <div className={styles.statTileLabel}>Client Pipeline Delivered</div>
              <div className={styles.statTileSub}>Verified through bankable CRM metrics</div>
            </div>
            <div className={styles.statTile}>
              <div className={styles.statTileNumber}>94.2%</div>
              <div className={styles.statTileLabel}>Client Retention MoM</div>
              <div className={styles.statTileSub}>Zero long-term lock-in traps</div>
            </div>
            <div className={styles.statTile}>
              <div className={styles.statTileNumber}>4.9 / 5.0</div>
              <div className={styles.statTileLabel}>Verified Client Rating</div>
              <div className={styles.statTileSub}>Based on 140+ reviews</div>
            </div>
          </div>

          {/* Client Logos Skeuomorphic Display */}
          <div className={styles.clientLogosWrap}>
            <div className={styles.clientLogosGrid}>
              <div className={styles.logoItem}>
                <Image
                  src="/images/clients/Sabour-logo.png"
                  alt="Sabour Brand Partner"
                  width={120}
                  height={40}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/images/clients/ekatraa.png"
                  alt="Ekatraa Client"
                  width={120}
                  height={40}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/images/clients/heed.png"
                  alt="Heed Health Care"
                  width={120}
                  height={40}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/images/clients/medallion-house.png"
                  alt="Medallion House Partner"
                  width={120}
                  height={40}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/images/clients/praveen-electronics.png"
                  alt="Praveen Electronics Retailer"
                  width={120}
                  height={40}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/images/clients/sri-pandurangan-divine-fresh.png"
                  alt="Sri Pandurangan Divine Fresh"
                  width={120}
                  height={40}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/images/clients/travysys.png"
                  alt="Travysys Global Technology"
                  width={120}
                  height={40}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/images/clients/weekend-bhraman.png"
                  alt="Weekend Bhraman Travel"
                  width={120}
                  height={40}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/images/clients/Zue-Studio-Logo-color (1).png"
                  alt="Zue Studio Fashion D2C"
                  width={120}
                  height={40}
                  className={styles.logoImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 3: RESULTS THAT MATTER (SKEUOMORPHIC GAUGES)
      ═════════════════════════════════════════════════════════════════ */}
      <section className={`${styles.sectionContainer} ${styles.resultsSection}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            <span className={styles.sectionEyebrowLed} />
            <span>MEASURABLE BUSINESS IMPACT</span>
          </div>
          <h2 className={styles.sectionTitle}>Results That Matter</h2>
          <p className={styles.sectionDesc}>
            We measure success in net margin, verified leads, and compounded enterprise value—not clicks or vanity metrics.
          </p>
        </div>

        <div className={styles.resultsGrid}>
          {/* Gauge 1: Traffic */}
          <ScrollReveal delay={100}>
            <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.resultGaugeCard}`}>
              <span className={styles.cardRivetTL} />
              <span className={styles.cardRivetTR} />
              <span className={styles.cardRivetBL} />
              <span className={styles.cardRivetBR} />

              <div className={styles.gaugeInstrumentFrame}>
                <div className={styles.gaugeInnerDial}>
                  <div className={styles.gaugeDialValue}>+187%</div>
                  <div className={styles.gaugeDialUnit}>ORGANIC TRAFFIC</div>
                </div>
              </div>
              <h3 className={styles.resultTitle}>High-Intent Search Traffic</h3>
              <p className={styles.resultDesc}>
                Compounded growth in commercial &amp; transactional search volume via technical SEO, entity hubs, and AI search presence.
              </p>
              <div className={styles.resultBenchmarkPill}>
                <span>Industry Avg: +22%</span>
                <span>•</span>
                <strong style={{ color: '#0B2093' }}>8.5X Outperformance</strong>
              </div>
            </div>
          </ScrollReveal>

          {/* Gauge 2: ROAS */}
          <ScrollReveal delay={200}>
            <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.resultGaugeCard}`}>
              <span className={styles.cardRivetTL} />
              <span className={styles.cardRivetTR} />
              <span className={styles.cardRivetBL} />
              <span className={styles.cardRivetBR} />

              <div className={styles.gaugeInstrumentFrame}>
                <div className={styles.gaugeInnerDial}>
                  <div className={styles.gaugeDialValue}>3.4X</div>
                  <div className={styles.gaugeDialUnit}>BLENDED ROAS</div>
                </div>
              </div>
              <h3 className={styles.resultTitle}>Paid Ad Return on Spend</h3>
              <p className={styles.resultDesc}>
                Cross-channel paid media return across Google Search, Shopping, and Meta Advantage+ campaigns with verified CAPI attribution.
              </p>
              <div className={styles.resultBenchmarkPill}>
                <span>Target: 2.2X</span>
                <span>•</span>
                <strong style={{ color: '#059669' }}>+54% Margin Boost</strong>
              </div>
            </div>
          </ScrollReveal>

          {/* Gauge 3: CPL */}
          <ScrollReveal delay={300}>
            <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.resultGaugeCard}`}>
              <span className={styles.cardRivetTL} />
              <span className={styles.cardRivetTR} />
              <span className={styles.cardRivetBL} />
              <span className={styles.cardRivetBR} />

              <div className={styles.gaugeInstrumentFrame}>
                <div className={styles.gaugeInnerDial}>
                  <div className={styles.gaugeDialValue}>-34%</div>
                  <div className={styles.gaugeDialUnit}>LOWER CPL</div>
                </div>
              </div>
              <h3 className={styles.resultTitle}>Cost Per Qualified Lead</h3>
              <p className={styles.resultDesc}>
                Systematic reduction in acquisition costs through landing page conversion rate optimization, negative keyword fortresses, and CRM filtering.
              </p>
              <div className={styles.resultBenchmarkPill}>
                <span>Baseline: ₹1,450</span>
                <span>•</span>
                <strong style={{ color: '#0B2093' }}>Now: ₹957 Avg CPL</strong>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 4: REAL CAMPAIGNS. REAL RESULTS. (CASE STUDIES)
      ═════════════════════════════════════════════════════════════════ */}
      <section className={styles.caseStudiesSection}>
        <div className={styles.sectionContainer} style={{ padding: 0 }}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <span className={styles.sectionEyebrowLed} />
              <span>TACTICAL BLUEPRINTS</span>
            </div>
            <h2 className={styles.sectionTitle}>Real Campaigns. Real Results.</h2>
            <p className={styles.sectionDesc}>
              A deep look into real businesses we partnered with, the obstacles we overcame, and the exact growth mechanics we deployed.
            </p>
          </div>

          <div className={styles.caseStudiesGrid}>
            {/* Case Study 1 */}
            <ScrollReveal delay={100}>
              <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.caseStudyCard}`}>
                <div className={styles.caseImageFrame}>
                  <Image
                    src="/images/work_fashion.jpg"
                    alt="D2C Fashion & Apparel Case Study"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className={styles.caseStudyImg}
                  />
                  <span className={styles.caseImageBadge}>D2C Apparel &amp; Fashion</span>
                </div>
                <div className={styles.caseCardBody}>
                  <h3 className={styles.caseClientTitle}>
                    Zue Studio: Scaling From ₹15L to ₹1.2Cr GMV in 120 Days
                  </h3>
                  <p className={styles.caseSummary}>
                    Overcame high iOS drop-offs and rising ad costs by revamping the creative pipeline and building sub-second checkout speeds.
                  </p>
                  <div className={styles.caseStatsBox}>
                    <div className={styles.caseStatItem}>
                      <div className={styles.caseStatVal}>4.1X</div>
                      <div className={styles.caseStatLbl}>Blended ROAS</div>
                    </div>
                    <div className={styles.caseStatItem}>
                      <div className={styles.caseStatVal}>-42%</div>
                      <div className={styles.caseStatLbl}>Cost Per Sale</div>
                    </div>
                  </div>
                  <ul className={styles.casePlaybookList}>
                    <li><span className={styles.casePlaybookCheck}>✓</span> Meta Advantage+ Shopping with 15 UGC video creatives</li>
                    <li><span className={styles.casePlaybookCheck}>✓</span> Server-side Conversions API for 99.4% tracking accuracy</li>
                    <li><span className={styles.casePlaybookCheck}>✓</span> Headless Next.js checkout yielding +28% completion</li>
                  </ul>
                  <Link href="/portfolio" className={styles.chicletPill} style={{ alignSelf: 'flex-start' }}>
                    View Full Case Study →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Case Study 2 */}
            <ScrollReveal delay={200}>
              <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.caseStudyCard}`}>
                <div className={styles.caseImageFrame}>
                  <Image
                    src="/images/work_realestate.jpg"
                    alt="Luxury Real Estate Lead Generation"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className={styles.caseStudyImg}
                  />
                  <span className={styles.caseImageBadge}>Luxury Real Estate</span>
                </div>
                <div className={styles.caseCardBody}>
                  <h3 className={styles.caseClientTitle}>
                    Utkal Heights: Generating 90+ High-Net-Worth Buyers Monthly
                  </h3>
                  <p className={styles.caseSummary}>
                    Eliminated costly third-party portal reliance through targeted Google search radius ads and hyper-localized search clusters.
                  </p>
                  <div className={styles.caseStatsBox}>
                    <div className={styles.caseStatItem}>
                      <div className={styles.caseStatVal}>90+</div>
                      <div className={styles.caseStatLbl}>Verified Monthly Leads</div>
                    </div>
                    <div className={styles.caseStatItem}>
                      <div className={styles.caseStatVal}>-60%</div>
                      <div className={styles.caseStatLbl}>Cost Per Qualified Lead</div>
                    </div>
                  </div>
                  <ul className={styles.casePlaybookList}>
                    <li><span className={styles.casePlaybookCheck}>✓</span> Exact-match Google Search Ads with negative keyword shield</li>
                    <li><span className={styles.casePlaybookCheck}>✓</span> 35 localized micro-neighborhood amenity landing pages</li>
                    <li><span className={styles.casePlaybookCheck}>✓</span> 1-click WhatsApp interactive property brochure automation</li>
                  </ul>
                  <Link href="/portfolio" className={styles.chicletPill} style={{ alignSelf: 'flex-start' }}>
                    View Full Case Study →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Case Study 3 */}
            <ScrollReveal delay={300}>
              <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.caseStudyCard}`}>
                <div className={styles.caseImageFrame}>
                  <Image
                    src="/images/work_healthcare.jpg"
                    alt="Healthcare Local SEO Case Study"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className={styles.caseStudyImg}
                  />
                  <span className={styles.caseImageBadge}>Healthcare &amp; Clinics</span>
                </div>
                <div className={styles.caseCardBody}>
                  <h3 className={styles.caseClientTitle}>
                    CareFirst Clinics: Dominating Google Maps Across 14 Keywords
                  </h3>
                  <p className={styles.caseSummary}>
                    Transformed low local walk-ins into a consistent stream of booked appointments using Google Maps 3-Pack optimization.
                  </p>
                  <div className={styles.caseStatsBox}>
                    <div className={styles.caseStatItem}>
                      <div className={styles.caseStatVal}>+190%</div>
                      <div className={styles.caseStatLbl}>Direct Patient Calls</div>
                    </div>
                    <div className={styles.caseStatItem}>
                      <div className={styles.caseStatVal}>#1 Rank</div>
                      <div className={styles.caseStatLbl}>14 High-Intent Searches</div>
                    </div>
                  </div>
                  <ul className={styles.casePlaybookList}>
                    <li><span className={styles.casePlaybookCheck}>✓</span> Google Business Profile entity overhaul and geotagged updates</li>
                    <li><span className={styles.casePlaybookCheck}>✓</span> Automated post-treatment SMS review acceleration engine</li>
                    <li><span className={styles.casePlaybookCheck}>✓</span> Hyperlocal clinical schema markup and citation sync</li>
                  </ul>
                  <Link href="/portfolio" className={styles.chicletPill} style={{ alignSelf: 'flex-start' }}>
                    View Full Case Study →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 5: SEE WHAT WE MANAGE (TERMINAL VIEWPORTS)
      ═════════════════════════════════════════════ */}
      <section className={`${styles.sectionContainer} ${styles.manageSection}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            <span className={styles.sectionEyebrowLed} />
            <span>TRANSPARENT COCKPIT</span>
          </div>
          <h2 className={styles.sectionTitle}>See What We Manage</h2>
          <p className={styles.sectionDesc}>
            No black boxes or vague agency reports. You receive direct access and telemetry into production campaigns, attribution pixels, and search visibility.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.terminalSwitcher}>
          <button
            type="button"
            onClick={() => setActiveTerminal('google')}
            className={`${styles.terminalTabBtn} ${
              activeTerminal === 'google' ? styles.terminalTabBtnActive : ''
            }`}
          >
            🎯 Google Ads Cockpit
          </button>
          <button
            type="button"
            onClick={() => setActiveTerminal('meta')}
            className={`${styles.terminalTabBtn} ${
              activeTerminal === 'meta' ? styles.terminalTabBtnActive : ''
            }`}
          >
            🚀 Meta Ads Studio
          </button>
          <button
            type="button"
            onClick={() => setActiveTerminal('seo')}
            className={`${styles.terminalTabBtn} ${
              activeTerminal === 'seo' ? styles.terminalTabBtnActive : ''
            }`}
          >
            ⚡ SEO Ranking Radar
          </button>
        </div>

        {/* Console Window */}
        <div className={styles.terminalConsole}>
          <div className={styles.terminalTitleBar}>
            <div className={styles.windowControls}>
              <span className={styles.windowDotRed} />
              <span className={styles.windowDotYellow} />
              <span className={styles.windowDotGreen} />
            </div>
            <div className={styles.terminalTitleText}>
              PRODUCTION_CONSOLE // marketingcopilot.in/{activeTerminal}-stream
            </div>
            <div className={styles.terminalLiveBadge}>
              <span className={styles.sectionEyebrowLed} />
              <span>LIVE TELEMETRY</span>
            </div>
          </div>

          <div className={styles.terminalContentGrid}>
            {/* Visual Screenshot / Diagram */}
            <div className={styles.terminalVisualBox}>
              <Image
                src={
                  activeTerminal === 'google'
                    ? '/images/Ad Framework.jpg'
                    : activeTerminal === 'meta'
                    ? '/images/Google ads & Meta ads.png'
                    : '/images/SEO framework.jpg'
                }
                alt="Production Ad & SEO Management"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className={styles.terminalImg}
              />
            </div>

            {/* Readout Column */}
            <div className={styles.terminalStatsCol}>
              {activeTerminal === 'google' && (
                <>
                  <div className={styles.terminalStatBlock}>
                    <div className={styles.statBlockLabel}>Search Impression Share</div>
                    <div className={`${styles.statBlockNumber} ${styles.statBlockHighlight}`}>
                      88.4%
                    </div>
                    <div className={styles.statBlockDesc}>
                      Dominating top-of-page real estate on core buying keywords with high Quality Scores (9.2/10).
                    </div>
                  </div>
                  <div className={styles.terminalStatBlock}>
                    <div className={styles.statBlockLabel}>Negative Keyword Fortress</div>
                    <div className={`${styles.statBlockNumber} ${styles.statBlockGreen}`}>
                      1,840+ Blocked Terms
                    </div>
                    <div className={styles.statBlockDesc}>
                      Eliminating accidental ad spend on free, career, or irrelevant queries.
                    </div>
                  </div>
                </>
              )}

              {activeTerminal === 'meta' && (
                <>
                  <div className={styles.terminalStatBlock}>
                    <div className={styles.statBlockLabel}>CAPI Match Quality</div>
                    <div className={`${styles.statBlockNumber} ${styles.statBlockGreen}`}>
                      9.8 / 10 (Event Quality Score)
                    </div>
                    <div className={styles.statBlockDesc}>
                      Server-side Conversions API feeds first-party customer signals directly back to Meta's AI bidding.
                    </div>
                  </div>
                  <div className={styles.terminalStatBlock}>
                    <div className={styles.statBlockLabel}>Creative Testing Velocity</div>
                    <div className={`${styles.statBlockNumber} ${styles.statBlockHighlight}`}>
                      12 Variations / Sprint
                    </div>
                    <div className={styles.statBlockDesc}>
                      Continuous testing of UGC hooks, angles, and thumbnails to prevent ad fatigue.
                    </div>
                  </div>
                </>
              )}

              {activeTerminal === 'seo' && (
                <>
                  <div className={styles.terminalStatBlock}>
                    <div className={styles.statBlockLabel}>Top 3 Google Positions</div>
                    <div className={`${styles.statBlockNumber} ${styles.statBlockGreen}`}>
                      1,280+ High-Intent Keywords
                    </div>
                    <div className={styles.statBlockDesc}>
                      High-converting buyer queries indexed and ranking in top 3 organic spots and AI answers.
                    </div>
                  </div>
                  <div className={styles.terminalStatBlock}>
                    <div className={styles.statBlockLabel}>Core Web Vitals Score</div>
                    <div className={`${styles.statBlockNumber} ${styles.statBlockHighlight}`}>
                      99 / 100 (Mobile Speed)
                    </div>
                    <div className={styles.statBlockDesc}>
                      Sub-second Largest Contentful Paint (LCP) ensuring instant loads on 4G/5G mobile connections.
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 6: MEET THE FOUNDERS
      ═════════════════════════════════════════════════════════════════ */}
      <section className={styles.foundersSection}>
        <div className={styles.sectionContainer} style={{ padding: 0 }}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <span className={styles.sectionEyebrowLed} />
              <span>LEADERSHIP &amp; ACCOUNTABILITY</span>
            </div>
            <h2 className={styles.sectionTitle}>Meet the Founders</h2>
            <p className={styles.sectionDesc}>
              No junior hand-offs or outsourced chaos. Your brand's growth blueprint is directly architected, managed, and reviewed by seasoned founders.
            </p>
          </div>

          <div className={styles.foundersGrid}>
            {/* Shankar */}
            <ScrollReveal delay={100}>
              <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.founderCard}`}>
                <span className={styles.cardRivetTL} />
                <span className={styles.cardRivetTR} />
                <span className={styles.cardRivetBL} />
                <span className={styles.cardRivetBR} />

                <div className={styles.founderAvatarFrame}>
                  <Image
                    src="/images/team/exec_1.png"
                    alt="Shankarsan Nayak — Founder & CEO"
                    fill
                    sizes="130px"
                    className={styles.founderAvatarImg}
                  />
                </div>
                <h3 className={styles.founderName}>Shankarsan Nayak</h3>
                <span className={styles.founderRoleBadge}>Founder &amp; CEO</span>
                <p className={styles.founderExp}>
                  10+ years architecting search systems, algorithmic paid advertising, and high-growth revenue funnels. Has personally scaled over 50+ businesses across India with engineering rigor and predictable CAC economics.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.founderLinkedinBtn}
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </ScrollReveal>

            {/* Pranjal */}
            <ScrollReveal delay={200}>
              <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.founderCard}`}>
                <span className={styles.cardRivetTL} />
                <span className={styles.cardRivetTR} />
                <span className={styles.cardRivetBL} />
                <span className={styles.cardRivetBR} />

                <div className={styles.founderAvatarFrame}>
                  <Image
                    src="/images/team/exec_2.png"
                    alt="Pranjal Sharma — Founding Team Member & COO"
                    fill
                    sizes="130px"
                    className={styles.founderAvatarImg}
                  />
                </div>
                <h3 className={styles.founderName}>Pranjal Sharma</h3>
                <span className={styles.founderRoleBadge}>Co-Founder &amp; COO</span>
                <p className={styles.founderExp}>
                  12+ years heading operational scale, enterprise media operations, and cross-channel execution rigor. Ensures that creative assets, technical audits, and performance milestones meet strict SLAs on time and on budget.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.founderLinkedinBtn}
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 7: EVERYTHING YOU NEED TO GROW ONLINE
      ═════════════════════════════════════════════════════════════════ */}
      <section className={`${styles.sectionContainer} ${styles.capabilitiesSection}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            <span className={styles.sectionEyebrowLed} />
            <span>END-TO-END GROWTH STACK</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Everything You Need to Grow Online
          </h2>
          <p className={styles.sectionDesc}>
            A synchronized suite of performance services designed to work together without the overhead of managing multiple disconnected vendors.
          </p>
        </div>

        <div className={styles.capabilitiesGrid}>
          {/* 1. SEO */}
          <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.capCard}`}>
            <div className={styles.capIconPill}>⚡</div>
            <h3 className={styles.capTitle}>Search Engine Optimization</h3>
            <p className={styles.capDesc}>
              Technical SEO audits, semantic schema, and topic cluster architecture to secure #1 rankings for transactional keywords.
            </p>
            <span className={styles.capFeatureTag}>High Buyer Intent</span>
          </div>

          {/* 2. Google Ads */}
          <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.capCard}`}>
            <div className={styles.capIconPill}>🎯</div>
            <h3 className={styles.capTitle}>Google Ads &amp; PPC</h3>
            <p className={styles.capDesc}>
              High-ROAS search, Shopping, and Performance Max campaigns with precision negative keyword filters and smart bidding.
            </p>
            <span className={styles.capFeatureTag}>Immediate Pipeline</span>
          </div>

          {/* 3. Meta Ads */}
          <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.capCard}`}>
            <div className={styles.capIconPill}>🚀</div>
            <h3 className={styles.capTitle}>Meta Ads</h3>
            <p className={styles.capDesc}>
              Full-funnel Facebook &amp; Instagram advertising powered by Advantage+ budgeting, UGC creatives, and Conversions API (CAPI).
            </p>
            <span className={styles.capFeatureTag}>Viral Scale</span>
          </div>

          {/* 4. Social Media */}
          <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.capCard}`}>
            <div className={styles.capIconPill}>📱</div>
            <h3 className={styles.capTitle}>Social Media Growth</h3>
            <p className={styles.capDesc}>
              Thumb-stopping short-form Reels, community building, and brand authority that turns casual viewers into brand advocates.
            </p>
            <span className={styles.capFeatureTag}>Brand Resonance</span>
          </div>

          {/* 5. GEO / AEO */}
          <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.capCard}`}>
            <div className={styles.capIconPill}>🤖</div>
            <h3 className={styles.capTitle}>GEO / AEO Optimization</h3>
            <p className={styles.capDesc}>
              Be the cited authority inside ChatGPT, Perplexity, Claude, and Google AI Overviews using entity-rich content graphs.
            </p>
            <span className={styles.capFeatureTag}>AI Search Ready</span>
          </div>

          {/* 6. Websites */}
          <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.capCard}`}>
            <div className={styles.capIconPill}>💻</div>
            <h3 className={styles.capTitle}>High-Conversion Websites</h3>
            <p className={styles.capDesc}>
              Sub-second speed Next.js websites built with responsive skeuomorphic design, clean code, and zero page bloat.
            </p>
            <span className={styles.capFeatureTag}>Sub-Second Speed</span>
          </div>

          {/* 7. Content Marketing */}
          <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.capCard}`}>
            <div className={styles.capIconPill}>✍️</div>
            <h3 className={styles.capTitle}>Content Marketing</h3>
            <p className={styles.capDesc}>
              In-depth industry whitepapers, teardowns, buyer guides, and lead magnets that establish category leadership.
            </p>
            <span className={styles.capFeatureTag}>Authority Building</span>
          </div>

          {/* 8. CRO */}
          <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.capCard}`}>
            <div className={styles.capIconPill}>🧪</div>
            <h3 className={styles.capTitle}>Conversion Rate Optimization</h3>
            <p className={styles.capDesc}>
              Continuous multivariate testing of headlines, checkout friction, form fields, and trust proof to double your conversion rate.
            </p>
            <span className={styles.capFeatureTag}>Multiplier Effect</span>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 8: WHY WORK WITH US? (4 PILLARS)
      ═════════════════════════════════════════════ */}
      <section className={styles.whyUsSection}>
        <div className={styles.sectionContainer} style={{ padding: 0 }}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <span className={styles.sectionEyebrowLed} />
              <span>THE COPILOT ADVANTAGE</span>
            </div>
            <h2 className={styles.sectionTitle}>Why Work With Us?</h2>
            <p className={styles.sectionDesc}>
              The typical agency model is broken: junior account managers, slow turnaround, and inflated retainers. Here is how we do things differently.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.pillarCard}`}>
              <div className={styles.pillarNumber}>01</div>
              <h3 className={styles.pillarTitle}>Strategy First</h3>
              <p className={styles.pillarDesc}>
                We don’t run ads blindly. We analyze your customer acquisition economics, unit margins, and lifetime value to build a profitable roadmap before spending a single rupee.
              </p>
            </div>

            <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.pillarCard}`}>
              <div className={styles.pillarNumber}>02</div>
              <h3 className={styles.pillarTitle}>Senior Expertise</h3>
              <p className={styles.pillarDesc}>
                You work directly with founders and seasoned growth strategists with over a decade of track record. No junior interns learning on your ad budget.
              </p>
            </div>

            <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.pillarCard}`}>
              <div className={styles.pillarNumber}>03</div>
              <h3 className={styles.pillarTitle}>Performance Focus</h3>
              <p className={styles.pillarDesc}>
                Our compensation and pride are tied to real commercial outcomes: qualified inquiries, pipeline value, reduced CPL, and bankable bottom-line growth.
              </p>
            </div>

            <div className={`${styles.skeuoCard} ${styles.skeuoCardHover} ${styles.pillarCard}`}>
              <div className={styles.pillarNumber}>04</div>
              <h3 className={styles.pillarTitle}>One Growth Team</h3>
              <p className={styles.pillarDesc}>
                Eliminate friction between your developers, designers, and media buyers. We operate as your synchronized internal growth unit with rapid weekly sprints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 9: BASED IN INDIA. WORKING ACROSS INDIA.
      ═════════════════════════════════════════════ */}
      <section className={`${styles.sectionContainer} ${styles.locationSection}`}>
        <div className={styles.locationDeckGrid}>
          <div className={`${styles.skeuoCard} ${styles.locationContactDeck}`}>
            <span className={styles.cardRivetTL} />
            <span className={styles.cardRivetTR} />
            <span className={styles.cardRivetBL} />
            <span className={styles.cardRivetBR} />

            <div className={styles.sectionEyebrow}>
              <span className={styles.sectionEyebrowLed} />
              <span>HEADQUARTERS &amp; CHANNELS</span>
            </div>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '10px' }}>
              Based in India.<br />Working Across India.
            </h2>
            <p className={styles.sectionDesc} style={{ textAlign: 'left', margin: 0 }}>
              Whether you need in-person war-room sprints at our physical office or seamless digital collaboration across major metros, we are always accessible.
            </p>

            <div className={styles.locationItemsCol}>
              {/* Office */}
              <div className={styles.locationItemRow}>
                <div className={styles.locIconCircle}>📍</div>
                <div className={styles.locTextCol}>
                  <span className={styles.locLabel}>Registered Office</span>
                  <span className={styles.locVal}>
                    Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.locationItemRow}>
                <div className={styles.locIconCircle}>📞</div>
                <div className={styles.locTextCol}>
                  <span className={styles.locLabel}>Direct Line</span>
                  <a href="tel:+919437168434" className={`${styles.locVal} ${styles.locValLink}`}>
                    +91 94371 68434
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className={styles.locationItemRow}>
                <div className={styles.locIconCircle} style={{ background: '#DCFCE7', color: '#16A34A' }}>
                  💬
                </div>
                <div className={styles.locTextCol}>
                  <span className={styles.locLabel}>Instant WhatsApp</span>
                  <a
                    href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20discuss%20a%20digital%20growth%20partnership"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.locVal} ${styles.locValLink}`}
                    style={{ color: '#16A34A' }}
                  >
                    Chat with a Strategist (+91 94371 68434) →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* India Reach Display */}
          <div className={`${styles.skeuoCard} ${styles.coverageMapCard}`}>
            <span className={styles.cardRivetTL} />
            <span className={styles.cardRivetTR} />
            <span className={styles.cardRivetBL} />
            <span className={styles.cardRivetBR} />

            <div className={styles.coverageBadge}>
              <span>🇮🇳 Nationwide Footprint</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, color: '#0B2093', marginBottom: '8px' }}>
              Active Client Clusters
            </h3>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, maxWidth: '340px' }}>
              We manage enterprise growth and localized campaigns for clients in every major commercial corridor across India.
            </p>

            <div className={styles.coverageHubsGrid}>
              <span className={styles.hubTag}>Delhi NCR</span>
              <span className={styles.hubTag}>Mumbai</span>
              <span className={styles.hubTag}>Bengaluru</span>
              <span className={styles.hubTag}>Hyderabad</span>
              <span className={`${styles.hubTag} ${styles.hubTagHighlight}`}>Bhubaneswar HQ</span>
              <span className={styles.hubTag}>Kolkata</span>
              <span className={styles.hubTag}>Pune</span>
              <span className={styles.hubTag}>Chennai</span>
              <span className={styles.hubTag}>Ahmedabad</span>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px dashed #CBD5E1', width: '100%' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0B2093' }}>
                ✓ Rapid Onboarding: 48-Hour Sprint Kickoff
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 10: READY TO GROW? (FINAL LEAD DECK)
      ═════════════════════════════════════════════ */}
      <section className={styles.finalCtaSection} id="audit-form">
        <div className={styles.sectionContainer} style={{ padding: 0 }}>
          <div className={styles.finalDeckCard}>
            <div className={styles.finalCtaHeader}>
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLed} />
                <span>TAKE THE NEXT LEAP</span>
              </div>
              <h2 className={styles.finalCtaTitle}>Ready to Grow?</h2>
              <p className={styles.finalCtaSubtitle}>
                Get your complimentary 360° Digital Growth Audit. We will analyze your search ranking gaps, paid ad spend efficiency, and landing page drop-offs with an actionable 90-day blueprint.
              </p>
            </div>

            {finalSuccess ? (
              <div className={styles.formSuccessCard}>
                <div className={styles.successIconBadge}>✓</div>
                <h3 className={styles.successTitle}>Request Confirmed!</h3>
                <p className={styles.successText}>
                  Thank you, <strong>{finalForm.name}</strong>. Our senior growth team is analyzing your domain and will email you the full breakdown within <strong>2 hours</strong>.
                </p>
                <a
                  href={`https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20just%20submitted%20the%20growth%20audit%20request%20for%20${encodeURIComponent(finalForm.company || 'my company')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.successWaBtn}
                >
                  <span>Connect Instantly on WhatsApp →</span>
                </a>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, 'final')}>
                <div className={styles.formRowDouble}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sen"
                      value={finalForm.name}
                      onChange={(e) => setFinalForm({ ...finalForm, name: e.target.value })}
                      className={styles.engravedInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Nova Tech Logistics"
                      value={finalForm.company}
                      onChange={(e) => setFinalForm({ ...finalForm, company: e.target.value })}
                      className={styles.engravedInput}
                    />
                  </div>
                </div>

                <div className={styles.formRowDouble}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone / WhatsApp <span>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={finalForm.phone}
                      onChange={(e) => setFinalForm({ ...finalForm, phone: e.target.value })}
                      className={styles.engravedInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Work Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@novatech.com"
                      value={finalForm.email}
                      onChange={(e) => setFinalForm({ ...finalForm, email: e.target.value })}
                      className={styles.engravedInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Website URL <span className={styles.formLabelOpt}>(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={finalForm.website}
                    onChange={(e) => setFinalForm({ ...finalForm, website: e.target.value })}
                    className={styles.engravedInput}
                  />
                </div>

                {/* Services multi-select */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Services</label>
                  <div className={styles.servicesPillWrap}>
                    {availableServices.map((svc) => {
                      const selected = finalForm.services.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService('final', svc)}
                          className={`${styles.serviceSelectPill} ${
                            selected ? styles.serviceSelectPillActive : ''
                          }`}
                        >
                          {svc} {selected ? '✓' : '+'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Planned Budget</label>
                  <div className={styles.budgetPillWrap}>
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFinalForm({ ...finalForm, budget: b })}
                        className={`${styles.budgetPill} ${
                          finalForm.budget === b ? styles.budgetPillActive : ''
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Requirement */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Requirement / Questions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="What specific growth goal or channel would you like us to audit first?"
                    value={finalForm.requirement}
                    onChange={(e) => setFinalForm({ ...finalForm, requirement: e.target.value })}
                    className={styles.engravedTextarea}
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
                  className={styles.tactileSubmitBtn}
                  style={{ fontSize: '15px', padding: '16px 24px' }}
                >
                  {finalSubmitting ? 'Submitting Request...' : 'GET MY FREE CONSULTATION →'}
                </button>

                <div className={styles.deckTrustStrip} style={{ marginTop: '18px' }}>
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
