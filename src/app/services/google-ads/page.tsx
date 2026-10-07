'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// 12-Section Custom Components
import GoogleAdsSearchSimulator from './_components/GoogleAdsSearchSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import GoogleAdsWorkstation from './_components/GoogleAdsWorkstation';
import GoogleAdsPpcCalculator from './_components/GoogleAdsPpcCalculator';
import GoogleAdsComparisonMatrix from './_components/GoogleAdsComparisonMatrix';
import GoogleAdsSprintRoadmap from './_components/GoogleAdsSprintRoadmap';

import styles from './google-ads-page.module.css';

const googleAdsArsenal = [
  {
    name: 'Google Search Ads',
    category: 'High-Intent Inbound Capture',
    desc: 'Exact match single-theme ad groups capturing buyers at the exact moment of search intent across target Indian markets.',
    status: 'EXACT INTENT',
    icon: '🔍',
  },
  {
    name: 'Google Performance Max',
    category: 'Cross-Network Machine Learning',
    desc: 'Automated omnichannel distribution across YouTube, Gmail, Maps, Search, and Discover from a single campaign.',
    status: 'AI TARGETED',
    icon: '⚡',
  },
  {
    name: 'Google Merchant Center',
    category: 'E-Commerce SKU Feeds',
    desc: 'Approved product feeds with rich live pricing and inventory status displayed directly in Google Shopping tabs.',
    status: 'FEED SYNCED',
    icon: '🛍️',
  },
  {
    name: 'CallRail & DNI Audio Tracking',
    category: 'Dynamic Phone Call Attribution',
    desc: 'Assigning dynamic phone numbers to track which exact Google search keywords trigger inbound phone inquiries.',
    status: 'AUDIO LOGGED',
    icon: '📞',
  },
  {
    name: 'Server-Side Tag Manager',
    category: 'Zero-Drop Attribution',
    desc: 'First-party cloud server tracking bypassing iOS ad-blockers and capturing 98%+ conversion event signals.',
    status: 'sGTM CLOUD',
    icon: '🛡️',
  },
  {
    name: 'Looker Studio Executive Telemetry',
    category: 'Live Inbound CPL Tracking',
    desc: 'Real-time dashboard reporting qualified patient/client inquiries, cost per phone lead, and verified revenue.',
    status: 'LIVE ROAS',
    icon: '📊',
  },
];

const googleAdsFaqs = [
  {
    q: 'What starting monthly Google Ads budget is recommended for businesses in India?',
    a: 'We recommend starting with an ad budget between ₹25,000 and ₹75,000 for service and retail businesses. This provides enough daily click volume to test high-intent keywords, establish baseline Cost-Per-Lead (CPL), and calibrate Google’s Smart Bidding algorithms.',
    takeaway: 'Adequate daily click volume enables Smart Bidding algorithms to identify genuine paying buyers quickly.',
  },
  {
    q: 'How fast do Google Ads start generating qualified phone calls and leads?',
    a: 'Because Google Ads captures active search intent rather than passive social browsing, campaigns typically start delivering qualified phone inquiries and WhatsApp chats within 24 to 48 hours of activation.',
    takeaway: 'Zero waiting period — search intent captures active buyers ready to purchase right now.',
  },
  {
    q: 'How do you prevent our budget from being wasted on accidental clicks or job seekers?',
    a: 'We implement 400+ pre-compiled negative keywords on Day 1 (blocking terms like "jobs", "syllabus", "free", "internship", "vacancy"). We also geo-fence campaigns strictly to your target service locations and run daily search term scrubbing.',
    takeaway: 'Proactive negative keyword shields protect up to 40% of advertising budget from wasteful clicks.',
  },
  {
    q: 'How do your landing pages achieve lower cost-per-click (CPC) than local competitors?',
    a: 'Google awards a Quality Score from 1 to 10 based on ad relevance and page load speed. By pairing our ads with custom Next.js landing pages that load under 800ms, we achieve 9/10 to 10/10 Quality Scores — earning up to 40% discounts on CPC compared to slow WordPress sites.',
    takeaway: 'High Quality Scores give your business structural cost advantages over competitors in ad auctions.',
  },
  {
    q: 'Do we own the Google Ads account and campaign data?',
    a: '100% yes. You retain administrative ownership of your Google Ads account, billing cards, and historical search data. Marketing Copilot manages your campaigns with full transparency through authorized partner access.',
    takeaway: 'Zero account lock-in — your business retains complete ownership of ad assets and keyword history.',
  },
];

export default function GoogleAdsPage() {
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
                <span>#1 Google Ads &amp; Search PPC Agency in India</span>
              </div>

              <h1 className={styles.heroTitle}>
                Capture High-Intent Customers When They{' '}
                <span className="accent-gradient">Search in India</span>
              </h1>

              <p className={styles.heroSub}>
                No wasted budget on generic clicks. We engineer exact-match Google Search funnels, 400+ negative keyword firewalls, and 10/10 Quality Score landing pages that convert searches into confirmed phone calls and walk-in consultations.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Claim Your Free PPC Audit" size="lg" />
                <a href="#search-simulator" className={styles.heroSecondaryBtn}>
                  <span>Explore Search Simulator &amp; CPC</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>ED</span>
                  <span className={styles.trustAvatar}>KS</span>
                  <span className={styles.trustAvatar}>PE</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+60</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Rated 4.9/5 by 60+ Businesses
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>6.4X</span>
                <span className={styles.tLabel}>Average ROAS</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>-42%</span>
                <span className={styles.tLabel}>Cost Per Inbound Lead</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>&lt; 48 hrs</span>
                <span className={styles.tLabel}>Launch to Inbound Calls</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>10/10</span>
                <span className={styles.tLabel}>Quality Score SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. INTERACTIVE GOOGLE SEARCH SIMULATOR
         ══════════════════════════════════════════════════ */}
      <GoogleAdsSearchSimulator />

      {/* ══════════════════════════════════════════════════
          3. REGIONAL BHUBANESWAR GEO-REACH FOOTPRINT
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          4. ARCHITECTURE WORKSTATION
         ══════════════════════════════════════════════════ */}
      <GoogleAdsWorkstation />

      {/* ══════════════════════════════════════════════════
          5. INTERACTIVE PPC ROI CALCULATOR
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              INBOUND SEARCH UNIT ECONOMICS
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Calculate Your Inbound Lead Pipeline &amp; ROAS
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Model your monthly search budget, local CPC rates, and consultation close rates to project qualified phone inquiries and net return on ad spend.
            </p>
          </div>
          <GoogleAdsPpcCalculator />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. THE GOOGLE ADS STANDARD (COMPARISON MATRIX)
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              THE MARKETING COPILOT DIFFERENCE
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Traditional PPC Agencies vs. Our Search Engine
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Why leading healthcare practices, real estate developers, and high-growth brands partner with Marketing Copilot for transparent search outcomes.
            </p>
          </div>
          <GoogleAdsComparisonMatrix />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. 30-DAY GOOGLE ADS SPRINT ROADMAP
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              EXECUTION ROADMAP
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              The 30-Day Inbound Search Sprint
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              A phased roadmap to eliminate non-converting ad waste, launch high-speed landing pages, and scale verified customer leads across India.
            </p>
          </div>
          <GoogleAdsSprintRoadmap />
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
                  <span>Verified Google Ads Case Study · Healthcare &amp; Super-Speciality</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Elite Dental &amp; Maxillofacial Clinic
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Saheed Nagar Corridor, Bhubaneswar
                </div>

                <p className={styles.editorialDesc}>
                  Elite Dental was burning over ₹680 per patient inquiry using generic agency broad-match ads that attracted non-paying student queries. Marketing Copilot deployed 400+ negative keywords, built sub-800ms mobile click-to-call landers, and captured high-ticket dental implant searchers across Bhubaneswar.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Our front desk now receives 4 to 6 verified appointment calls every single day. Marketing Copilot cut our cost per patient inquiry almost in half while doubling our surgical consultation bookings.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Managing Director, Elite Dental Super-Speciality Clinic Bhubaneswar
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="/images/work_healthcare.jpg"
                    alt="Elite Dental Clinic Bhubaneswar"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>130+ Monthly Consultations · Saheed Nagar</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>-48%</div>
                    <div className={styles.kpiSub}>Cost Per Inbound Lead</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>₹353</div>
                    <div className={styles.kpiSub}>CPL (Down from ₹680)</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>10/10</div>
                    <div className={styles.kpiSub}>Google Quality Score</div>
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
              OUR SEARCH STACK
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Enterprise Google Growth Infrastructure
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              We partner with Google enterprise toolchains to track every rupee invested and maximize auction efficiency.
            </p>
          </div>

          <div className={styles.arsenalGrid}>
            {googleAdsArsenal.map((spec, idx) => (
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
              Everything You Need to Know About Google Ads
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Clear answers on auction economics, lead generation speeds, and tracking transparency.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {googleAdsFaqs.map((faq, index) => {
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
              <span className={styles.termPill}>CONFIDENTIAL PPC AUDIT &amp; KEYWORD RECON</span>
              <h2 className={styles.termTitle}>
                Ready to Stop Wasting Budget on Unqualified Clicks?
              </h2>
              <p className={styles.termSub}>
                Get a forensic audit of your search keywords, competitor impression shares, and negative keyword leaks. Our certified Google Ads specialists will map an exact-match acquisition plan for your target market.
              </p>
              <div className={styles.termContact}>
                <span>Direct Line:</span>
                <a href="tel:+918280788689" className={styles.termPhone}>
                  +91 82807 88689
                </a>
                <span>·</span>
                <span>Bhubaneswar HQ · Serving Businesses Across India</span>
              </div>
            </div>

            <div className={styles.termActions}>
              <a href="/contact" className={styles.termAuditBtn}>
                <span>Claim Your Free Google Ads Audit</span>
                <span>→</span>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Marketing%20Copilot,%20I%20want%20to%20audit%20our%20Google%20Ads%20account."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.termWhatsAppBtn}
              >
                <span>💬 WhatsApp Lead Strategist</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
