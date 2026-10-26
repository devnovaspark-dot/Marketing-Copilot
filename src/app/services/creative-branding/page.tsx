'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// 12-Section Custom Components
import BrandIdentityStudioSimulator from './_components/BrandIdentityStudioSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import BrandIdentityWorkstation from './_components/BrandIdentityWorkstation';
import BrandPricingPowerCalculator from './_components/BrandPricingPowerCalculator';
import BrandComparisonMatrix from './_components/BrandComparisonMatrix';
import BrandIdentityRoadmap from './_components/BrandIdentityRoadmap';

import styles from './creative-branding-page.module.css';

const brandingArsenal = [
  {
    name: 'Adobe Creative Master Suite',
    category: 'Vector & Typographic Drafting',
    desc: 'Mathematical bezier curve drafting, custom font design, and uncompressed production asset exports.',
    status: 'VECTOR 8K',
    icon: '🎨',
    footerTag: '✦ Scalable Vector Precision',
    deliverable: '✓ Infinite Resolution',
  },
  {
    name: 'Figma Design Token Engine',
    category: 'Systematic Digital Tokens',
    desc: 'Living component libraries with responsive typography scales and CSS variable synchronization.',
    status: 'FARM SYNCED',
    icon: '⚡',
    footerTag: '✦ Living Token Hierarchy',
    deliverable: '✓ Code Synced',
  },
  {
    name: 'Pantone Color Matching System',
    category: 'Offset Print Color Calibration',
    desc: 'Direct PMS spot color matching ensuring physical packaging and signboards match digital screens.',
    status: 'PANTONE PMS',
    icon: '🎯',
    footerTag: '✦ Precision Color Matching',
    deliverable: '✓ Print Calibrated',
  },
  {
    name: 'Cinema 4D & Octane Render',
    category: '3D Photorealistic Packaging',
    desc: '3D bottle, box, and spatial architectural signage renders for pre-manufacturing visualization.',
    status: 'OCTANE 4K',
    icon: '📦',
    footerTag: '✦ Pre-Production 3D Renders',
    deliverable: '✓ Packaging Ready',
  },
  {
    name: 'IP & Trademark Shield (India)',
    category: 'Class 35 & 42 Legal Readiness',
    desc: 'Phonetic and visual similarity screening against the Controller General of Patents & Trademarks.',
    status: 'IP COMPLIANT',
    icon: '🛡️',
    footerTag: '✦ Class 35 & 42 Search',
    deliverable: '✓ Trademark Cleared',
  },
  {
    name: 'Master Brand Guidelines Vault',
    category: 'Brand Bible Documentation',
    desc: '60+ page governance manual covering negative space rules, photography art direction, and tone of voice.',
    status: '60+ PGS PDF',
    icon: '📖',
    footerTag: '✦ 60+ Page Brand Bible',
    deliverable: '✓ Asset Handover',
  },
];

const brandingFaqs = [
  {
    q: 'How does a professional brand identity help our business increase pricing power in India?',
    a: 'When your visual presentation looks like an unorganized commodity, prospective clients default to aggressive discount haggling. A bespoke corporate identity communicates elite craft, institutional trust, and premium prestige — allowing our clients to command 30% to 50% higher project fees without losing deal volume.',
    takeaway: 'Premium visual design signals luxury authority, eliminating price resistance and discount haggling.',
  },
  {
    q: 'What is included in the Master Brand Guidelines Book?',
    a: 'You receive a comprehensive 60+ page Brand Bible detailing your primary logo, secondary marks, isolated monograms, minimum clearance zones, color palettes (Pantone, CMYK, RGB, HEX), typography licensing rules, photography art direction, showroom signage, and physical packaging specs.',
    takeaway: 'Brand Guidelines maintain consistent visual prestige across every employee and partner touchpoint.',
  },
  {
    q: 'Do we receive full copyright and trademark ownership of the logo designs?',
    a: '100% yes. Upon project sign-off, we execute a formal intellectual property transfer assigning full commercial rights to your company. All master vector files (AI, EPS, SVG, and high-res exports) belong exclusively to you.',
    takeaway: 'Complete legal vector IP ownership protects your brand equity and valuation for future scaling.',
  },
  {
    q: 'Can you handle physical packaging manufacturing and local printing in Odisha?',
    a: 'Yes. We don’t just design theoretical graphics; we build production-ready packaging dielines with exact creasing lines, bleed zones, and finishing specifications (foil stamping, UV spot gloss, embossing) and coordinate directly with offset print vendors.',
    takeaway: 'Production-ready vector dielines prevent expensive printer misalignments and wasted print runs.',
  },
  {
    q: 'How long does a complete corporate rebrand typically take from start to finish?',
    a: 'Our structured agile sprint delivers initial brand archetype concepts within 10 days, followed by visual refinement, token system creation, packaging design, and the final Brand Bible handover within 30 business days.',
    takeaway: 'Predictable 30-day agile sprint transforms your market presence without operational downtime.',
  },
];

export default function CreativeBrandingPage() {
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
              <h1 className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>Creative Branding Service in India</span>
              </h1>

              <h2 className={styles.heroTitle}>
                Build an Unforgettable Brand That{' '}
                <span className="accent-gradient">Commands Market Prestige</span>
              </h2>

              <p className={styles.heroSub}>
                Stop competing in race-to-the-bottom price wars. We craft golden-ratio vector brandmarks, tokenized design systems, physical packaging, and brand bibles that help Indian businesses build distinctive brand identities, stronger market positioning, and greater perceived value.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Book a Brand Discovery Session" size="lg" />
                <a href="#identity-studio" className={styles.heroSecondaryBtn}>
                  <span>Explore Brand Identity Studio</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>MH</span>
                  <span className={styles.trustAvatar}>NS</span>
                  <span className={styles.trustAvatar}>SP</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+80</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Crafted 80+ Luxury &amp; Corporate Brand Systems
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>2.5X</span>
                <span className={styles.tLabel}>Pricing Power Lift</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>100%</span>
                <span className={styles.tLabel}>Trademark Ownership</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>60+ Pgs</span>
                <span className={styles.tLabel}>Brand Bible Standard</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>30 Days</span>
                <span className={styles.tLabel}>Sprint Delivery SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. INTERACTIVE BRAND IDENTITY VISUALIZER
         ══════════════════════════════════════════════════ */}
      <BrandIdentityStudioSimulator />

      {/* ══════════════════════════════════════════════════
          3. REGIONAL BHUBANESWAR GEO-REACH FOOTPRINT
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          4. ARCHITECTURE WORKSTATION
         ══════════════════════════════════════════════════ */}
      <BrandIdentityWorkstation />

      {/* ══════════════════════════════════════════════════
          5. INTERACTIVE PRICING POWER CALCULATOR
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              PRICING POWER &amp; MARGIN EXPANSION
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Calculate Your Brand Equity Valuation
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Simulate how a luxury visual presentation elevates your average contract price, unlocks gross profit margin, and completely stops client discount haggling.
            </p>
          </div>
          <BrandPricingPowerCalculator />
          <div className={styles.sectionCtaRow}>
            <BeamButton href="/contact" label="Model Your Brand Pricing Power →" size="md" arrow={true} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. THE BRANDING STANDARD (COMPARISON MATRIX)
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              THE MARKETING COPILOT DIFFERENCE
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Cheap Freelancers vs. Our Brand Architecture
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Why visionary founders in India avoid generic online logo mills and invest in durable trademark-ready corporate identity systems.
            </p>
          </div>
          <BrandComparisonMatrix />
          <div className={styles.sectionCtaRow}>
            <BeamButton href="/contact" label="Partner with Brand Architects →" size="md" arrow={true} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. 30-DAY BRAND TRANSFORMATION ROADMAP
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              TRANSFORMATION BLUEPRINT
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              The 30-Day Brand Identity Sprint
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              A phased creative journey from deep positioning discovery to master logo drafting, packaging dielines, and brand guideline handover.
            </p>
          </div>
          <BrandIdentityRoadmap />
          <div className={styles.sectionCtaRow}>
            <BeamButton href="/contact" label="Launch Your 30-Day Brand Identity Sprint →" size="md" arrow={true} />
          </div>
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
                  <span>Verified Brand Identity Case Study · Heritage Jewellery &amp; D2C Luxe</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Medallion House Fine Jewellery
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Jaipur Artisan Hub · Pan-India D2C Luxury
                </div>

                <p className={styles.editorialDesc}>
                  Medallion House handcrafted magnificent 22kt-plated Kundan, Polki, and Meenakari jewellery in Jaipur but was hindered by generic digital branding and low perceived value. Marketing Copilot engineered a royal heritage visual identity, regal typography system, luxury unboxing suites, and high-converting bridal campaign assets that elevated their average order value by 54% across India.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Marketing Copilot transformed our Jaipur artisan craft into an iconic national luxury brand. From our regal monogram to the gold-embossed unboxing experience, customers across Mumbai, Delhi, and Bangalore now view us as their premier festive jewellery house.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Founder &amp; Creative Director, Medallion House Jewellery
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="/images/Medallion house.jpg"
                    alt="Medallion House Fine Jewellery"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>+54% AOV Growth · Pan-India D2C Reach</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>+54%</div>
                    <div className={styles.kpiSub}>Average Order Value (AOV)</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>4.6X</div>
                    <div className={styles.kpiSub}>Blended ROAS</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>100%</div>
                    <div className={styles.kpiSub}>Brand Trademark Registered</div>
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
              OUR DESIGN STACK
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Industry-Standard Creative Infrastructure
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              We design with world-class typography, vector precision, and physical print tools to build durable corporate assets.
            </p>
          </div>

          <div className={styles.arsenalGrid}>
            {brandingArsenal.map((spec, idx) => (
              <div key={idx} className={styles.cardCol}>
                <div className={styles.specCard}>
                  <div className={styles.specTopBody}>
                    <div className={styles.specCardHeader}>
                      <div className={styles.specIconBox}>{spec.icon}</div>
                      <span className={styles.specStatus}>{spec.status}</span>
                    </div>
                    <h4 className={styles.specTitle}>{spec.name}</h4>
                    <div className={styles.specCategory}>{spec.category}</div>
                    <p className={styles.specDesc}>{spec.desc}</p>
                  </div>
                  <div className={styles.specCardFooter}>
                    <span className={styles.specFooterTag}>{spec.footerTag}</span>
                    <span className={styles.specDeliverable}>{spec.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sectionCtaRow}>
            <BeamButton href="/contact" label="Deploy Industry-Standard Creative Tech →" size="md" arrow={true} />
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
              Everything You Need to Know About Branding
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Clear answers on trademark safety, brand guidelines, and pricing power lift.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {brandingFaqs.map((faq, index) => {
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

          <div className={styles.faqCtaBox}>
            <p className={styles.faqCtaNote}>Have a specific question about your trademark, rebrand timeline, or design deliverables?</p>
            <BeamButton href="/contact" label="Ask Our Brand Architects →" size="md" arrow={true} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          11. PRE-FOOTER CONVERSION CARD (SIGNATURE LIGHT SKEUOMORPHIC)
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection} id="executive-terminal">
        <div className="container">
          <ScrollReveal>
            <div className={styles.homeCtaInnerBox}>
              <div className={styles.homeCtaEyebrow}>
                <span className={styles.homeCtaDot} />
                <span>CONFIDENTIAL BRAND DISCOVERY SESSION</span>
              </div>

              <h2 className={styles.homeCtaHeadline}>
                Ready to Build an Unforgettable Brand?
              </h2>

              <p className={styles.homeCtaSub}>
                Schedule a confidential 45-minute brand architecture session. We will analyze your competitors, audit your current visual perception gaps, and outline your 30-day brand elevation roadmap.
              </p>

              <div className={styles.homeCtaContact}>
                <span>Direct Studio Desk:</span>
                <a href="tel:+918280788689" className={styles.homeCtaPhone}>
                  +91 82807 88689
                </a>
                <span>·</span>
                <span>Pan-India Brand Architecture &amp; Identity</span>
              </div>

              <div className={styles.homeCtaActions}>
                <BeamButton href="/contact" label="Book Brand Discovery →" size="lg" arrow={true} />
                <div className={styles.homeCtaSecondaryWrapper}>
                  <a
                    href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot,%20I%20would%20like%20to%20schedule%20a%20brand%20identity%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.homeCtaSecondaryInner}
                  >
                    <span>💬 WhatsApp Creative Director</span>
                  </a>
                </div>
              </div>

              <div className={styles.homeCtaTrustBadges}>
                <div className={styles.homeCtaTrustItem}>
                  <span>🛡️</span>
                  <span>100% Trademark Ownership</span>
                </div>
                <div className={styles.homeCtaTrustItem}>
                  <span>⚡</span>
                  <span>60+ Page Master Brand Bible</span>
                </div>
                <div className={styles.homeCtaTrustItem}>
                  <span>🔒</span>
                  <span>Production-Ready Packaging Specs</span>
                </div>
                <div className={styles.homeCtaTrustItem}>
                  <span>🚀</span>
                  <span>Dedicated Creative Director</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
