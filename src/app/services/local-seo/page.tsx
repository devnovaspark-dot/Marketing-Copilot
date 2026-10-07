'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// 12-Section Custom Components
import LocalSeoGridSimulator from './_components/LocalSeoGridSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import LocalSeoWorkstation from './_components/LocalSeoWorkstation';
import LocalSeoRevenueCalculator from './_components/LocalSeoRevenueCalculator';
import LocalSeoComparisonMatrix from './_components/LocalSeoComparisonMatrix';
import LocalSeoSprintRoadmap from './_components/LocalSeoSprintRoadmap';

import styles from './local-seo-page.module.css';

const localSeoArsenal = [
  {
    name: 'Google Business Profile (GMB)',
    category: 'Map 3-Pack Core Entity',
    desc: 'Bespoke category taxonomy, verified service radius, and daily local engagement post scheduling.',
    status: 'VERIFIED 3-PACK',
    icon: '📍',
  },
  {
    name: 'Geo-Tagged EXIF Pipeline',
    category: 'Spatial GPS Metadata',
    desc: 'Injecting exact physical latitude and longitude coordinates into facility and product photography.',
    status: 'GPS EMBEDDED',
    icon: '📸',
  },
  {
    name: 'Schema.org LocalBusiness',
    category: 'Structured Data Webhooks',
    desc: 'Rich JSON-LD schema injected into website code communicating opening hours and physical coordinates.',
    status: 'VALIDATED JSON',
    icon: '⚡',
  },
  {
    name: 'Tier-1 Citation Synchronizer',
    category: 'NAP Consistency Lockdown',
    desc: 'Locking Name, Address, and Phone across 60+ directories including Apple Maps, Bing, and Justdial.',
    status: '60+ CITATIONS',
    icon: '🛡️',
  },
  {
    name: 'WhatsApp Review Funnel API',
    category: 'Automated 5-Star Acceleration',
    desc: 'Automated post-purchase review invitations prompting customers with localized Bhubaneswar keywords.',
    status: 'REVIEW ACCEL',
    icon: '⭐',
  },
  {
    name: '5x5 Geo-Grid Rank Tracker',
    category: 'Hyperlocal Spatial Auditing',
    desc: 'Tracking real Google Maps ranking pin-by-pin across every 500m coordinate in Bhubaneswar.',
    status: 'LIVE GEO-PINS',
    icon: '🗺️',
  },
];

const localSeoFaqs = [
  {
    q: 'How long does it take to rank in the Google Map 3-Pack in India?',
    a: 'With our category restructuring, geo-tagged photo uploads, and NAP citation lockdown, businesses typically enter the Google Map 3-Pack within 14 to 30 days. Full city-wide 5x5 geo-grid lockdown across all pin codes is usually accomplished by Day 60.',
    takeaway: 'Systematic GMB optimization and geo-tagged citations deliver rapid, lasting local map visibility.',
  },
  {
    q: 'Why does my business rank #1 near my shop, but disappear 2 km away in Patia or Saheed Nagar?',
    a: 'Google Maps uses proximity-based algorithmic weighting. If your profile lacks localized backlinks, geo-tagged media from other corridors, and multi-pin citation relevance, your visibility radius collapses outside 500 meters. We expand your ranking radius across the entire city.',
    takeaway: 'Geo-tagged media and citations expand your Google Maps authority radius across all Bhubaneswar pin codes.',
  },
  {
    q: 'How do you handle negative or fake Google Maps reviews from competitors?',
    a: 'We submit forensic policy violation reports directly to Google partner support to permanently remove malicious and spam reviews. Concurrently, our automated WhatsApp review funnels flood your profile with genuine 5-star customer ratings, keeping your aggregate score at 4.8★–4.9★.',
    takeaway: 'Proactive review generation and algorithmic spam dispute maintain an untouchable 5-star reputation.',
  },
  {
    q: 'Is Google Map 3-Pack SEO better than paying for Google Ads?',
    a: 'They serve different strategic goals. Google Ads provides immediate visibility at a per-click fee, whereas Map 3-Pack rankings capture over 64% of local mobile phone calls with zero advertising expense. The ideal approach uses PPC initially while building unstoppable organic Map 3-Pack dominance.',
    takeaway: 'Map 3-Pack rankings capture the majority of high-urgency local phone calls with zero ongoing ad spend.',
  },
  {
    q: 'Do you optimize Apple Maps and voice search (Siri, Google Assistant, Alexa)?',
    a: 'Yes! Over 22% of affluent consumers in Bhubaneswar use Apple Maps on iPhones or voice search for driving directions. We synchronize your citations across Apple Maps Connect, Bing Places, and voice graph directories.',
    takeaway: 'Omnipresent voice and mobile map citations capture premium, high-income local customers.',
  },
];

export default function LocalSeoPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
                <span>#1 Google Map 3-Pack &amp; Local SEO Agency in India</span>
              </div>

              <h1 className={styles.heroTitle}>
                Dominate the Google Map 3-Pack Across{' '}
                <span className="accent-gradient">Every Bhubaneswar Pin Code</span>
              </h1>

              <p className={styles.heroSub}>
                Over 72% of local customers choose businesses from the top 3 Google Maps results. We deploy geo-tagged EXIF media, 60+ citation lockdowns, and automated 5-star review funnels to make your business the undisputed #1 choice.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Audit Your Map 3-Pack Ranking" size="lg" />
                <a href="#grid-simulator" className={styles.heroSecondaryBtn}>
                  <span>Explore 5x5 Geo-Grid Simulator</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>SP</span>
                  <span className={styles.trustAvatar}>ED</span>
                  <span className={styles.trustAvatar}>KB</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+75</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Ranking #1 for 75+ Clinics, Retail Stores &amp; Showrooms in Odisha
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>#1 Rank</span>
                <span className={styles.tLabel}>Map 3-Pack Guarantee</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>+410%</span>
                <span className={styles.tLabel}>In-Store Walk-in Growth</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>60+</span>
                <span className={styles.tLabel}>Tier-1 Local Citations</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>4.9★</span>
                <span className={styles.tLabel}>Avg Client Reputation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. INTERACTIVE 5X5 GEO-GRID MAP TRACKER
         ══════════════════════════════════════════════════ */}
      <LocalSeoGridSimulator />

      {/* ══════════════════════════════════════════════════
          2.5. HYPERLOCAL COVERAGE & GEO-GRID DOMINANCE SHOWCASE
         ══════════════════════════════════════════════════ */}
      <section className={styles.coverageSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.coverageCard}>
              <div className={styles.coverageImgWrap}>
                <Image
                  src="/images/Local Coverage.jpg"
                  alt="Hyperlocal Google Maps Geo-Grid Coverage Across Bhubaneswar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className={styles.editorialImg}
                />
              </div>

              <div className={styles.coverageContent}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '4px 12px', borderRadius: 999, alignSelf: 'flex-start', color: '#0B2093', fontSize: 11.5, fontWeight: 800 }}>
                  <span>⚡ 100% REGIONAL GEO-GRID PENETRATION</span>
                </div>
                <h2 style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 800, color: '#0F172A', margin: 0, lineHeight: 1.25 }}>
                  Hyperlocal Map Dominance Across Bhubaneswar &amp; Cuttack
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  From Saheed Nagar and Patia to Nayapalli, Jaydev Vihar, and Chandrasekharpur, our geotagged citation architecture and review acceleration funnels ensure your business ranks in the Google Map 3-Pack wherever high-intent local customers search.
                </p>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', paddingTop: 10, borderTop: '1px solid #E2E8F0' }}>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#0B2093' }}>100%</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Geo-Grid Lock</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#0B2093' }}>#1 Rank</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>3-Pack Placement</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#0B2093' }}>+410%</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Walk-in Calls</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. REGIONAL BHUBANESWAR GEO-REACH FOOTPRINT
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          4. ARCHITECTURE WORKSTATION
         ══════════════════════════════════════════════════ */}
      <LocalSeoWorkstation />

      {/* ══════════════════════════════════════════════════
          5. INTERACTIVE LOCAL REVENUE CALCULATOR
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              LOCAL COMMERCE ECONOMICS
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Calculate Your Map 3-Pack Revenue Potential
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Adjust monthly search volume, current map position, and average transaction value to model the revenue unlocked by achieving #1 Map 3-Pack status.
            </p>
          </div>
          <LocalSeoRevenueCalculator />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. THE LOCAL SEO STANDARD (COMPARISON MATRIX)
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              THE MARKETING COPILOT DIFFERENCE
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Traditional SEO Agencies vs. Map 3-Pack Domination
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Why brick-and-mortar businesses in India fire generic national SEO agencies and switch to hyperlocal geo-grid dominance.
            </p>
          </div>
          <LocalSeoComparisonMatrix />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. 30-DAY LOCAL SEO SPRINT ROADMAP
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              EXECUTION ROADMAP
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              The 30-Day Map 3-Pack Lockdown
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              A proven four-stage engineering sprint to capture top Google Map rankings and flood your local business with inbound phone calls.
            </p>
          </div>
          <LocalSeoSprintRoadmap />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. EDITORIAL CASE STUDY SHOWCASE
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.editorialContainer}>
              <div className={styles.editorialContent}>
                <div className={styles.editorialBadge}>
                  <span className={styles.badgeDot} />
                  <span>Verified Local SEO Case Study · Retail &amp; Organic Food</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Sri Panduranga Divine Fresh
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Nayapalli &amp; Patia Hubs, Bhubaneswar
                </div>

                <p className={styles.editorialDesc}>
                  Sri Panduranga Divine Fresh was struggling with invisible Google Maps visibility outside a 300-meter radius around their Nayapalli grocery market. Marketing Copilot restructured their GMB categories, embedded verified GPS coordinates into 45+ store photos, and launched automated WhatsApp review funnels that locked #1 Map 3-Pack rankings across Bhubaneswar.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Our in-store footfall increased by over 400% within a month. Customers from IRC Village, Jaydev Vihar, and Chandrasekharpur now drive past other markets to shop with us because we show up first with glowing 5-star reviews on Google Maps.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Managing Partner, Sri Panduranga Divine Fresh Bhubaneswar
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="/images/sri_pandurangan_divine_fresh.webp"
                    alt="Sri Panduranga Divine Fresh Bhubaneswar Store"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>#1 Map 3-Pack · Nayapalli &amp; Patia</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>#1 Rank</div>
                    <div className={styles.kpiSub}>Map 3-Pack Dominance</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>+410%</div>
                    <div className={styles.kpiSub}>Store Walk-in Growth</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>420+</div>
                    <div className={styles.kpiSub}>Verified 5★ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. ENTERPRISE PLATFORMS & STACK ARSENAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.arsenalSection}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              OUR LOCAL SEO STACK
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Battle-Tested Local Search Infrastructure
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              We partner with industry-leading local citation and reputation engines to guarantee dominant local search rankings.
            </p>
          </div>

          <div className={styles.arsenalGrid}>
            {localSeoArsenal.map((spec, idx) => (
              <div key={idx} className={styles.specCard}>
                <div className={styles.specCardHeader}>
                  <div className={styles.specIconBox}>{spec.icon}</div>
                  <span className={styles.specStatus}>{spec.status}</span>
                </div>
                <h4 className={styles.specTitle}>{spec.name}</h4>
                <div className={styles.specCategory}>{spec.category}</div>
                <p className={styles.specDesc}>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. MINIMALIST HAIRLINE FAQ LIST
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Everything You Need to Know About Local SEO
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Clear answers on Google Map 3-Pack rankings, citation consistency, and review acceleration.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {localSeoFaqs.map((faq, index) => {
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
                      <div className={styles.faqTakeaway}>
                        <span>💡</span>
                        <span>{faq.takeaway}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          11. EXECUTIVE BOTTOM CONVERSION TERMINAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection} id="executive-terminal">
        <div className="container">
          <div className={styles.executiveTerminal}>
            <div className={styles.termGlow} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span className={styles.termPill}>FREE 5X5 GEO-GRID LOCAL AUDIT</span>
              <h2 className={styles.termTitle}>
                Ready to Lock Down the Google Map 3-Pack?
              </h2>
              <p className={styles.termSub}>
                Get a free 5x5 Geo-Grid diagnostic scanning your real Google Maps rankings across Patia, Saheed Nagar, Nayapalli, and Khandagiri. We will show you exactly why competitors are outranking you and how to take #1.
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
              <a href="/contact" className={styles.termAuditBtn}>
                <span>Claim Your Free Geo-Grid Audit</span>
                <span>→</span>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Marketing%20Copilot,%20I%20want%20to%20audit%20our%20Google%20Map%203-Pack%20ranking."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.termWhatsAppBtn}
              >
                <span>💬 WhatsApp Local SEO Director</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
