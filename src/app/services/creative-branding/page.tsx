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
  },
  {
    name: 'Figma Design Token Engine',
    category: 'Systematic Digital Tokens',
    desc: 'Living component libraries with responsive typography scales and CSS variable synchronization.',
    status: 'FARM SYNCED',
    icon: '⚡',
  },
  {
    name: 'Pantone Color Matching System',
    category: 'Offset Print Color Calibration',
    desc: 'Direct PMS spot color matching ensuring physical packaging and signboards match digital screens.',
    status: 'PANTONE PMS',
    icon: '🎯',
  },
  {
    name: 'Cinema 4D & Octane Render',
    category: '3D Photorealistic Packaging',
    desc: '3D bottle, box, and spatial architectural signage renders for pre-manufacturing visualization.',
    status: 'OCTANE 4K',
    icon: '📦',
  },
  {
    name: 'IP & Trademark Shield (India)',
    category: 'Class 35 & 42 Legal Readiness',
    desc: 'Phonetic and visual similarity screening against the Controller General of Patents & Trademarks.',
    status: 'IP COMPLIANT',
    icon: '🛡️',
  },
  {
    name: 'Master Brand Guidelines Vault',
    category: 'Brand Bible Documentation',
    desc: '60+ page governance manual covering negative space rules, photography art direction, and tone of voice.',
    status: '60+ PGS PDF',
    icon: '📖',
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
                <span>#1 Brand Identity &amp; Corporate Design Studio in India</span>
              </div>

              <h1 className={styles.heroTitle}>
                Build an Unforgettable Brand That{' '}
                <span className="accent-gradient">Commands Market Prestige</span>
              </h1>

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
                  <span>Verified Brand Identity Case Study · Architecture &amp; Interiors</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Medallion House &amp; Interior Studio
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Patia Infocity Hub &amp; Saheed Nagar, Bhubaneswar
                </div>

                <p className={styles.editorialDesc}>
                  Medallion House was executing ultra-luxury interior projects for luxury villas in Bhubaneswar but was hindered by a fragmented, generic visual identity. Marketing Copilot engineered a bespoke architectural monogram, gold-foil corporate stationery, and a complete showroom signage system that elevated their average project ticket size by 54%.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Our brand now commands immediate respect from HNIs and commercial developers. Prospective clients walk into our studio already viewing us as the undisputed luxury leader in Odisha.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Principal Architect &amp; Founder, Medallion House Bhubaneswar
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
                    alt="Medallion House Luxury Interior Studio"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>+54% Average Project Ticket · Patia Hub</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>+54%</div>
                    <div className={styles.kpiSub}>Average Contract Value</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>0%</div>
                    <div className={styles.kpiSub}>Discount Concessions</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>100%</div>
                    <div className={styles.kpiSub}>Trademark Registered</div>
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
              <span className={styles.termPill}>CONFIDENTIAL BRAND DISCOVERY SESSION</span>
              <h2 className={styles.termTitle}>
                Ready to Build an Unforgettable Brand?
              </h2>
              <p className={styles.termSub}>
                Schedule a confidential 45-minute brand architecture session. We will analyze your competitors, audit your current visual perception gaps, and outline your 30-day brand elevation roadmap.
              </p>
              <div className={styles.termContact}>
                <span>Direct Line:</span>
                <a href="tel:+919876543210" className={styles.termPhone}>
                  +91 98765 43210
                </a>
                <span>·</span>
                <span>Bhubaneswar HQ · Serving Businesses Across India</span>
              </div>
            </div>

            <div className={styles.termActions}>
              <a href="/contact" className={styles.termAuditBtn}>
                <span>Book Brand Discovery</span>
                <span>→</span>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Marketing%20Copilot,%20I%20would%20like%20to%20schedule%20a%20brand%20identity%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.termWhatsAppBtn}
              >
                <span>💬 WhatsApp Creative Director</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
