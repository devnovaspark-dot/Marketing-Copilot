'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/app/_components/FAQSection';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import SmoothCounter from '@/components/SmoothCounter';
import {
  spotlightProject,
  caseStudiesList,
  transformationData,
  revenueProcessSteps,
  geoImpactLocations,
  industryVerticals,
  clientTestimonials,
  roiTiers,
  engagementModels,
  CaseStudyItem,
} from './data';
import styles from './page.module.css';

const filterCategories = ['All', 'SEO', 'Paid Ads', 'Web Development', 'E-commerce', 'Social Media'];

const heroPortfolioSlides = [
  {
    id: 'portfolio-hero-1',
    src: '/images/portfolio image 1.png',
    alt: 'Marketing Copilot Verified Client Campaign Showcase - Slide 1',
    metric: '+320% Inbound Leads',
    sub: 'Verified Commercial Return • 6.2X ROAS',
  },
  {
    id: 'portfolio-hero-2',
    src: '/images/portfolio image 2.png',
    alt: 'Marketing Copilot Verified Client Campaign Showcase - Slide 2',
    metric: '₹65Cr+ Attributed Revenue',
    sub: 'Full-Funnel Paid & Organic Scaling',
  },
  {
    id: 'portfolio-hero-3',
    src: '/images/portfolio image 3.png',
    alt: 'Marketing Copilot Verified Client Campaign Showcase - Slide 3',
    metric: '85+ #1 Google Rankings',
    sub: 'Dominant High-Intent Search Visibility',
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isHeroSlidePaused, setIsHeroSlidePaused] = useState(false);
  const [activeHudIndex, setActiveHudIndex] = useState(0);
  const [isHudPaused, setIsHudPaused] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(industryVerticals[0].id);
  const [activeRoiIndex, setActiveRoiIndex] = useState(1); // Default to Growth tier
  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Pause auto-sliding on touch or scroll so manual 2-card swipe is never interrupted
  const handleUserInteraction = () => {
    setIsPaused(true);
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    touchTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  // Auto-cycling portfolio hero slides (every 3.8s, pauses on hover)
  useEffect(() => {
    if (isHeroSlidePaused) return;
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroPortfolioSlides.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isHeroSlidePaused]);

  // Filtered case studies
  const filteredCases = caseStudiesList.filter((item) => {
    return activeFilter === 'All' || item.category === activeFilter;
  });

  // Auto-sliding cards mechanism with dynamic card width and gentle 5.5s interval
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!isPaused && el) {
        const firstCard = el.querySelector<HTMLElement>(`.${styles.slidingCard}`);
        const step = firstCard ? firstCard.offsetWidth + 24 : 320;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 15) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: step, behavior: 'smooth' });
        }
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-cycling Audited Commercial Deltas (every 3.5s)
  useEffect(() => {
    if (isHudPaused) return;
    const interval = setInterval(() => {
      setActiveHudIndex((prev) => (prev + 1) % transformationData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHudPaused]);

  const slideManual = (direction: 'left' | 'right') => {
    const el = sliderRef.current;
    if (!el) return;
    handleUserInteraction();
    const firstCard = el.querySelector<HTMLElement>(`.${styles.slidingCard}`);
    const step = firstCard ? firstCard.offsetWidth + 24 : 320;
    const offset = direction === 'left' ? -step : step;
    el.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const currentHud = transformationData[activeHudIndex] || transformationData[0];
  const currentIndustryData = industryVerticals.find((v) => v.id === activeIndustry) || industryVerticals[0];
  const currentRoi = roiTiers[activeRoiIndex] || roiTiers[1];

  return (
    <div className={styles.page}>
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: DUAL-PANE HERO WITH GUARANTEED IMAGE
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Pane: High-Converting Text */}
            <div className={styles.heroTextPane}>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Verified Client Outcomes • 12 Proof Pillars</span>
              </div>

              <h1 className={styles.heroTitle}>
                Engineering Compounding{' '}
                <span className="accent-gradient">Revenue &amp; Growth</span>{' '}
                for Ambitious Brands.
              </h1>

              <p className={styles.heroDesc}>
                We don&apos;t sell vanity metrics or vague promises. Browse our portfolio of audited client campaigns with verified commercial outcomes across Bhubaneswar, Odisha, and nationwide markets.
              </p>

              {/* Quick Trust Strip with Smooth Counter */}
              <div className={styles.heroTrustStrip}>
                <div className={styles.heroTrustItem}>
                  <span className={styles.heroTrustVal}>
                    <SmoothCounter value="₹65Cr+" />
                  </span>
                  <span className={styles.heroTrustLabel}>Client Revenue</span>
                </div>
                <div className={styles.heroTrustDivider} />
                <div className={styles.heroTrustItem}>
                  <span className={styles.heroTrustVal}>
                    <SmoothCounter value="5.8X" />
                  </span>
                  <span className={styles.heroTrustLabel}>Average ROAS</span>
                </div>
                <div className={styles.heroTrustDivider} />
                <div className={styles.heroTrustItem}>
                  <span className={styles.heroTrustVal}>
                    <SmoothCounter value="85+" />
                  </span>
                  <span className={styles.heroTrustLabel}>#1 Google Rankings</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.heroActions}>
                <BeamButton href="#showcase" label="Explore Case Studies ↓" size="md" fullWidth={true} />
                <Link href="/contact" className={styles.secondaryBtn}>
                  <span>Request Custom Audit</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Pane: High-Impact Visual Showcase (Zero Text Overlaid on Images) */}
            <div className={styles.heroVisualPane}>
              <div
                className={styles.heroVisualFrame}
                onMouseEnter={() => setIsHeroSlidePaused(true)}
                onMouseLeave={() => setIsHeroSlidePaused(false)}
              >
                {heroPortfolioSlides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className={`${styles.heroSlideItem} ${idx === heroSlideIndex ? styles.heroSlideActive : ''}`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={idx === 0}
                      unoptimized={true}
                      sizes="(max-width: 900px) 100vw, 680px"
                      className={styles.heroVisualImg}
                    />
                  </div>
                ))}

                {/* Minimalist Slide Indicator Dots */}
                <div className={styles.heroSlideDots}>
                  {heroPortfolioSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`${styles.heroSlideDot} ${idx === heroSlideIndex ? styles.heroSlideDotActive : ''}`}
                      onClick={() => setHeroSlideIndex(idx)}
                      aria-label={`Go to portfolio slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: FEATURED COMMERCIAL MILESTONE (COMPACT SKEUOMORPHIC CARD)
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.spotlightSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Featured Commercial Milestone</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Luxury Real Estate: <span className="accent-gradient">3X Lead Volume in 90 Days</span>
              </h2>
              <div className={styles.sectionHeaderBar} />
              <p className={styles.sectionSub}>
                How we helped a premier builder dominate organic Google search in Bhubaneswar and generate 90+ verified buyer leads monthly without portal dependency.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={100}>
            <div className={styles.spotlightCard}>
              {/* Full-Bleed Image Frame - Completely filled up edge-to-edge */}
              <div className={styles.spotlightVisualFrame}>
                <Image
                  src={spotlightProject.image}
                  alt={spotlightProject.client}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 550px"
                  className={styles.spotlightVisualImg}
                />
                <div className={styles.spotlightVisualOverlay} />

                {/* High-Tech HUD Corner Accents */}
                <div className={styles.hudCornerTL} />
                <div className={styles.hudCornerBR} />

                <div className={styles.spotlightLocationBadge}>
                  <span className={styles.locationPinIcon}>📍</span>
                  <span>{spotlightProject.service} • {spotlightProject.location}</span>
                </div>
                <div className={styles.spotlightVisualBottomPill}>
                  <span className={styles.liveDeploymentDot} />
                  <span>Audited Strategic Deployment • 90 Days</span>
                </div>
              </div>

              {/* Content Side with Tactile Skeuomorphic Metrics & Gradient Headline */}
              <div className={styles.spotlightContent}>
                <div className={styles.spotlightEyebrowBadge}>
                  <span className={styles.spotlightEyebrowDot} />
                  <span>{spotlightProject.client}</span>
                </div>
                <h3 className={styles.spotlightHeadline}>
                  Dominating Luxury Property Search in Bhubaneswar —{' '}
                  <span className="accent-gradient">3X Qualified Leads in 90 Days</span>
                </h3>
                <p className={styles.spotlightDesc}>{spotlightProject.desc}</p>

                {/* Tactile Skeuomorphic Micro-Stat Dials with Individual Color Accents */}
                <div className={styles.spotlightStatsRowClean}>
                  {spotlightProject.stats.map((s, idx) => (
                    <div key={s.label} className={styles.spotlightStatPillClean} data-stat-idx={idx}>
                      <div className={styles.spotlightStatAccentBar} />
                      <div className={styles.spotlightStatValClean}>
                        <SmoothCounter value={s.val} />
                      </div>
                      <div className={styles.spotlightStatLabelClean}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.spotlightDeliverables}>
                  {spotlightProject.deliverables.slice(0, 2).map((item) => (
                    <div key={item} className={styles.deliverableItem}>
                      <span className={styles.checkDot}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Centered CTA Button */}
                <div className={styles.centerCtaWrap}>
                  <BeamButton
                    onClick={() => setSelectedCase(spotlightProject)}
                    label="View Full Strategic Breakdown →"
                    size="md"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          DRIVING BUSINESS GROWTH WITH DIGITAL MARKETING IN BHUBANESWAR
          ───────────────────────────────────────────────────────────── */}
      <QuickConnectMapSection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: AUTO-SLIDING CASE STUDIES SHOWCASE
          ───────────────────────────────────────────────────────────── */}
      <section id="showcase" className={styles.showcaseSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Verified Client Portfolio</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Curated Results Across <span className="accent-gradient">Key Channels</span>
              </h2>
              <div className={styles.sectionHeaderBar} />
              <p className={styles.sectionSub}>
                Auto-sliding showcase of client campaigns across Odisha. Hover to pause, click arrows to browse, or click any card to inspect the full case study.
              </p>
            </ScrollReveal>
          </div>

          {/* Filter Bar & Carousel Controls */}
          <div className={styles.filterBar}>
            <div className={styles.filters}>
              {filterCategories.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ''}`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className={styles.carouselControls}>
              <button
                className={styles.carouselArrowBtn}
                onClick={() => slideManual('left')}
                aria-label="Previous case studies"
              >
                ←
              </button>
              <button
                className={styles.carouselArrowBtn}
                onClick={() => slideManual('right')}
                aria-label="Next case studies"
              >
                →
              </button>
            </div>
          </div>

          {/* Auto-Sliding Track Container with Touch Interaction Guard */}
          <div
            className={styles.sliderTrackContainer}
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleUserInteraction}
            onTouchMove={handleUserInteraction}
            onScroll={handleUserInteraction}
          >
            <div className={styles.sliderTrack}>
              {filteredCases.map((c) => (
                <div
                  key={c.id}
                  className={styles.slidingCard}
                  onClick={() => setSelectedCase(c)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setSelectedCase(c);
                  }}
                >
                  <div className={styles.cardImgWrap}>
                    <Image
                      src={c.image}
                      alt={c.headline}
                      fill
                      sizes="(max-width: 640px) 100vw, 380px"
                      className={styles.cardImg}
                    />
                    <div className={styles.cardImgOverlay} />
                    <span className={styles.cardTopPill} style={{ color: c.color }}>
                      {c.industry}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardTag} style={{ background: `${c.tagColor}15`, color: c.tagColor }}>
                        {c.service}
                      </span>
                      <span className={styles.cardLocation}>{c.location}</span>
                    </div>

                    <h3 className={styles.cardTitle}>{c.headline}</h3>
                    <p className={styles.cardDesc}>{c.desc}</p>

                    <div className={styles.cardStatsRow}>
                      {c.stats.map((s) => (
                        <div key={s.label} className={styles.cardStat}>
                          <span className={styles.cardStatVal} style={{ color: c.color }}>
                            <SmoothCounter value={s.val} />
                          </span>
                          <span className={styles.cardStatLabel}>{s.label}</span>
                        </div>
                      ))}
                      <div className={styles.cardActionBtn}>
                        <span>Inspect</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slide-over Quick Detail Drawer / Native Mobile Bottom Sheet */}
      {selectedCase && (
        <div className={styles.drawerBackdrop} onClick={() => setSelectedCase(null)}>
          <div className={styles.drawerModal} onClick={(e) => e.stopPropagation()}>
            {/* Mobile Touch Drag Handle */}
            <div className={styles.drawerDragHandle} />

            {/* Visual Cover Banner with Overlay & Integrated Badges */}
            <div className={styles.drawerHeroBanner}>
              <Image
                src={selectedCase.image}
                alt={selectedCase.client}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 580px"
                className={styles.drawerBannerImg}
              />
              <div className={styles.drawerBannerOverlay} />

              {/* Floating Header Actions */}
              <div className={styles.drawerBannerTopRow}>
                <span className={styles.drawerCategoryPill}>
                  {selectedCase.service}
                </span>
                <button
                  className={styles.drawerCloseBtn}
                  onClick={() => setSelectedCase(null)}
                  aria-label="Close case study details"
                  type="button"
                >
                  ✕
                </button>
              </div>

              {/* Banner Bottom Details */}
              <div className={styles.drawerBannerBottom}>
                <span className={styles.drawerClientName}>{selectedCase.client}</span>
                <div className={styles.drawerLocationRow}>
                  <span>📍 {selectedCase.location} • {selectedCase.industry}</span>
                  <span className={styles.drawerVerifiedBadge}>✓ 100% Attribution Verified</span>
                </div>
              </div>
            </div>

            {/* Drawer Body Content */}
            <div className={styles.drawerBodyContent}>
              {/* Campaign Outcome Headline */}
              <div className={styles.drawerHeadlineBox}>
                <h3 className={styles.drawerHeadlineText}>{selectedCase.headline}</h3>
                <p className={styles.drawerHeadlineDesc}>{selectedCase.desc}</p>
              </div>

              {/* 2 Audited Commercial Stat Wells */}
              <div className={styles.drawerStatsGrid}>
                {selectedCase.stats.map((s) => (
                  <div key={s.label} className={styles.drawerStatCard}>
                    <div className={styles.drawerStatNum} style={{ color: selectedCase.color }}>
                      <SmoothCounter value={s.val} />
                    </div>
                    <div className={styles.drawerStatLabel}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* The Challenge Card (Before) */}
              <div className={styles.drawerChallengeCard}>
                <div className={styles.drawerSectionHeaderRow}>
                  <span className={styles.challengeBadge}>⚠️ THE GROWTH BOTTLENECK</span>
                  <span className={styles.phaseTag}>Before Marketing Copilot</span>
                </div>
                <p className={styles.drawerSectionText}>{selectedCase.challenge}</p>
              </div>

              {/* Marketing Copilot Solution Card (After) */}
              <div className={styles.drawerSolutionCard}>
                <div className={styles.drawerSectionHeaderRow}>
                  <span className={styles.solutionBadge}>⚡ STRATEGIC EXECUTION</span>
                  <span className={styles.phaseTag}>Revenue Architecture</span>
                </div>
                <p className={styles.drawerSectionText}>{selectedCase.solution}</p>
              </div>

              {/* Deliverables Executed Strip */}
              <div className={styles.drawerDeliverablesSection}>
                <h4 className={styles.deliverablesTitle}>Deliverables &amp; Assets Engineered</h4>
                <div className={styles.drawerDeliverablesGrid}>
                  {selectedCase.deliverables.map((d) => (
                    <div key={d} className={styles.drawerDeliverablePill}>
                      <span className={styles.drawerCheckDot}>✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Bottom Action Bar with Reassurance */}
            <div className={styles.drawerStickyFooter}>
              <BeamButton
                href="/contact"
                label="Claim Similar Results for Your Business →"
                size="md"
                fullWidth
              />
              <span className={styles.drawerReassurance}>
                Zero obligation • Direct senior strategy session • 100% confidential
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: AUDITED COMMERCIAL DELTAS (EXECUTIVE SEGMENTED CONTROLLER)
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.transformSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Audited Commercial Deltas</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Before vs. After <span className="accent-gradient">Marketing Copilot</span>
              </h2>
              <div className={styles.sectionHeaderBar} />
              <p className={styles.sectionSub}>
                Select any benchmark to inspect the tangible shift from legacy agency retainers to revenue engineering. Auto-advances every 3.5 seconds.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div
              className={styles.velocityCockpit}
              onMouseEnter={() => setIsHudPaused(true)}
              onMouseLeave={() => setIsHudPaused(false)}
            >
              {/* Executive Segmented Controller Tray */}
              <div className={styles.velocityTabsRow}>
                {transformationData.map((t, idx) => (
                  <button
                    key={t.metric}
                    className={`${styles.velocityTabBtn} ${activeHudIndex === idx ? styles.velocityTabBtnActive : ''}`}
                    onClick={() => setActiveHudIndex(idx)}
                  >
                    <span className={styles.tabBadge}>0{idx + 1}</span>
                    <span>{t.shortLabel}</span>
                    {activeHudIndex === idx && <span className={styles.tabActivePulse} />}
                  </button>
                ))}
              </div>

              {/* Rock-solid display area - NO remounting key to eliminate layout vibration */}
              <div className={styles.velocityDisplayArea}>
                <div className={styles.velocityComparisonGrid}>
                  {/* Left: Before Card */}
                  <div className={styles.velocityCardBefore}>
                    <span className={styles.velocityTagBefore}>Legacy Agency Retainer (Before)</span>
                    <div className={styles.velocityBigNum}>
                      <SmoothCounter value={currentHud.before} />
                    </div>
                    <p className={styles.velocityStateDesc}>Low intent traffic, high bounce rates, and broad untargeted ad spend.</p>
                  </div>

                  {/* Center: Growth Vector Badge */}
                  <div className={styles.velocityCenterBadge}>
                    <span className={styles.velocityGainText}>
                      <SmoothCounter value={currentHud.gain} />
                    </span>
                    <span className={styles.velocityTimeText}>{currentHud.timeframe}</span>
                  </div>

                  {/* Right: After Card */}
                  <div className={styles.velocityCardAfter}>
                    <span className={styles.velocityTagAfter}>Marketing Copilot Revenue Engine (After)</span>
                    <div className={styles.velocityBigNum}>
                      <SmoothCounter value={currentHud.after} />
                    </div>
                    <p className={styles.velocityStateDesc}>{currentHud.desc}</p>
                  </div>
                </div>

                {/* Tactical Lever Banner */}
                <div className={styles.velocityLeverStrip}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Strategic Growth Lever Applied:
                    </span>
                    <p className={styles.velocityLeverText}>{currentHud.lever}</p>
                  </div>
                </div>

                {/* Centered CTA Button */}
                <div className={styles.centerCtaWrap}>
                  <BeamButton href="/contact" label="Audit Your Business Benchmarks →" size="md" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: OUR SCIENTIFIC METHODOLOGY (CONNECTED ROADMAP)
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Our Scientific Methodology</span>
              </div>
              <h2 className={styles.sectionTitle}>
                How We Engineer <span className="accent-gradient">Predictable Growth</span>
              </h2>
              <div className={styles.sectionHeaderBar} />
              <p className={styles.sectionSub}>
                A connected, audit-backed execution pipeline designed to eliminate ad spend waste and scale conversion speed systematically.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className={styles.pipelineRoadmap}>
              {revenueProcessSteps.map((step) => (
                <div key={step.num} className={styles.pipelineStep}>
                  <div className={styles.pipelineStepHeader}>
                    <span className={styles.pipelineNumBadge}>{step.num}</span>
                    <span className={styles.pipelineDuration}>{step.badge}</span>
                  </div>
                  <h3 className={styles.pipelineTitle}>{step.title}</h3>
                  <p className={styles.pipelineDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: REGIONAL FOOTPRINT — HIGH-TECH TERRITORY BLUEPRINT
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.geoSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Regional Footprint • Hyperlocal SERP Authority</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Dominating Commercial Search Across <span className="accent-gradient">Bhubaneswar &amp; Odisha</span>
              </h2>
              <div className={styles.sectionHeaderBar} />
              <p className={styles.sectionSub}>
                Verified search volumes, qualified acquisition benchmarks, and keyword rankings across 6 key transit corridors.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            {/* 6-Card Territory Matrix Grid (All 6 Corridors Visible Simultaneously - Zero Shaking) */}
            <div className={styles.territoryMatrixGrid}>
              {geoImpactLocations.map((geo) => (
                <div key={geo.code} className={styles.territoryCard}>
                  {/* Top Bar: Zone Badge & Live Verified Status */}
                  <div className={styles.territoryCardTop}>
                    <div className={styles.territoryZonePill}>
                      <span className={styles.territoryZoneTag}>ZONE</span>
                      <span className={styles.territoryZoneNum}>{geo.code}</span>
                    </div>
                    <span className={styles.territoryStatusPill}>
                      <span className={styles.territoryStatusDot} />
                      <span>{geo.tag}</span>
                    </span>
                  </div>

                  {/* Corridor Area & Sub-vertical */}
                  <div className={styles.territoryIdentity}>
                    <h3 className={styles.territoryAreaName}>
                      <span className={styles.territoryPinIcon}>📍</span>
                      <span>{geo.area}</span>
                    </h3>
                    <p className={styles.territoryVerticalName}>{geo.vertical}</p>
                  </div>

                  {/* Dual Core Metrics Box */}
                  <div className={styles.territoryMetricsRow}>
                    <div className={styles.territoryMetricBox}>
                      <span className={styles.territoryMetricVal}>{geo.searchesVal}</span>
                      <span className={styles.territoryMetricLabel}>{geo.searchesLabel}</span>
                    </div>
                    <div className={styles.territoryMetricBox}>
                      <span className={styles.territoryMetricVal} style={{ color: '#059669' }}>
                        {geo.cplVal}
                      </span>
                      <span className={styles.territoryMetricLabel}>{geo.cplLabel}</span>
                    </div>
                  </div>

                  {/* Commercial Hubs Anchor Strip */}
                  <div className={styles.territoryHubsRow}>
                    <span className={styles.territoryHubsLabel}>Commercial Hubs:</span>
                    <div className={styles.territoryHubsWrap}>
                      {geo.landmarks.slice(0, 3).map((lm) => (
                        <span key={lm} className={styles.territoryHubChip}>
                          {lm}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* High-Intent Search Queries Strip */}
                  <div className={styles.territoryQueriesRow}>
                    {geo.dominantKeywords.slice(0, 3).map((kw) => (
                      <span key={kw} className={styles.territoryQueryChip}>
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer: Active Client Anchor */}
                  <div className={styles.territoryCardFooter}>
                    <span className={styles.territoryClientLabel}>Client Anchor:</span>
                    <strong className={styles.territoryClientName}>{geo.clientSnippet}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Aggregate Territory Dominance Banner */}
            <div className={styles.territoryAggregateBanner}>
              <div className={styles.aggregateStatItem}>
                <span className={styles.aggregateStatVal}>2,50,000+</span>
                <span className={styles.aggregateStatLabel}>Monthly In-Market Searches Dominated</span>
              </div>
              <div className={styles.aggregateDivider} />
              <div className={styles.aggregateStatItem}>
                <span className={styles.aggregateStatVal} style={{ color: '#10B981' }}>-62%</span>
                <span className={styles.aggregateStatLabel}>Average CPL vs. Regional Benchmarks</span>
              </div>
              <div className={styles.aggregateDivider} />
              <div className={styles.aggregateStatItem}>
                <span className={styles.aggregateStatVal} style={{ color: 'var(--accent-blue)' }}>100%</span>
                <span className={styles.aggregateStatLabel}>Attribution Verified Lead Pipelines</span>
              </div>
            </div>

            {/* Centered CTA Button */}
            <div className={styles.centerCtaWrap} style={{ paddingTop: 28 }}>
              <BeamButton
                href="/contact"
                label="Schedule Territory Strategy Session in Bhubaneswar →"
                size="md"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: TAILORED VERTICAL PLAYBOOKS (ENHANCED SKEUOMORPHIC BENTO)
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.industrySection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Tailored Vertical Playbooks</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Strategies Built for <span className="accent-gradient">Your Industry</span>
              </h2>
              <div className={styles.sectionHeaderBar} />
              <p className={styles.sectionSub}>
                Digital marketing isn&apos;t one-size-fits-all. Select your sector to explore our dedicated playbook, commercial benchmarks, and verified client outcomes.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.industryTabs}>
            {industryVerticals.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveIndustry(v.id)}
                className={`${styles.industryTabBtn} ${activeIndustry === v.id ? styles.industryTabBtnActive : ''}`}
              >
                <span>{v.name}</span>
              </button>
            ))}
          </div>

          <ScrollReveal>
            <div className={styles.industryBentoGrid}>
              {/* Card 1: Core Strategy & Channels */}
              <div className={styles.bentoCard}>
                <div className={styles.bentoCardHeader}>
                  <span>Strategic Playbook</span>
                </div>
                <h3 className={styles.bentoTitle}>{currentIndustryData.headline}</h3>
                <p className={styles.bentoText}>{currentIndustryData.focus}</p>
                <div className={styles.bentoChannelsList}>
                  {currentIndustryData.channels.map((ch) => (
                    <div key={ch} className={styles.bentoChannelItem}>
                      <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Commercial Performance Benchmarks */}
              <div className={styles.bentoCard}>
                <div className={styles.bentoCardHeader}>
                  <span>Industry Benchmarks</span>
                </div>
                <div className={styles.bentoBenchmarkList}>
                  {currentIndustryData.benchmarks.map((b) => (
                    <div key={b.label} className={styles.bentoBenchmarkRow}>
                      <span className={styles.bentoBenchLabel}>{b.label}</span>
                      <span className={styles.bentoBenchVal}>
                        <SmoothCounter value={b.val} />
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>* Audited across Bhubaneswar client accounts</span>
                </div>
              </div>

              {/* Card 3: Verified Client Case in This Vertical */}
              <div className={styles.bentoCard}>
                <div className={styles.bentoCardHeader}>
                  <span>Verified Client Case</span>
                </div>
                <div className={styles.bentoProofBox}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                    {currentIndustryData.clientProof.client}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{currentIndustryData.clientProof.location}</span>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#000000', marginTop: 4 }}>
                    {currentIndustryData.clientProof.outcome}
                  </div>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 11, color: '#10B981', fontWeight: 700 }}>✓ 100% Attribution Verified</span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Sprint Model: Continuous Scale</span>
                </div>
              </div>
            </div>

            {/* Centered CTA Button */}
            <div className={styles.centerCtaWrap}>
              <BeamButton
                href="/contact"
                label={`Schedule ${currentIndustryData.name} Growth Session →`}
                size="md"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: FOUNDER TESTIMONIALS (REAL IMAGES & SKEUOMORPHISM)
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Verified Client Endorsements</span>
              </div>
              <h2 className={styles.sectionTitle}>
                What Odisha Founders <span className="accent-gradient">Say About Us</span>
              </h2>
              <div className={styles.sectionHeaderBar} />
              <p className={styles.sectionSub}>
                Unfiltered feedback from business owners who trusted us with their core growth and revenue infrastructure.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.testimonialGrid}>
            {clientTestimonials.map((t, idx) => (
              <ScrollReveal key={t.author} delay={idx * 70}>
                <div className={styles.testimonialCard}>
                  <div>
                    <div className={styles.starsRow}>
                      <span className={styles.starsText}>★★★★★</span>
                      <span className={styles.verifiedReviewBadge}>★ 5.0 Google Review</span>
                    </div>
                    <p className={styles.quoteText} style={{ marginTop: 14 }}>&ldquo;{t.quote}&rdquo;</p>
                  </div>

                  {/* Bottom-Aligned Author Row with Real Founder Avatar */}
                  <div className={styles.authorRow}>
                    <div className={styles.avatarImgWrap}>
                      <Image
                        src={t.image}
                        alt={t.author}
                        fill
                        sizes="48px"
                        className={styles.authorAvatarImg}
                      />
                    </div>
                    <div className={styles.authorMeta}>
                      <span className={styles.authorName}>{t.author}</span>
                      <span className={styles.authorRole}>{t.role} • {t.company}</span>
                      <span style={{ fontSize: 11, color: '#10B981', fontWeight: 700, marginTop: 2 }}>
                        <SmoothCounter value={t.stat} />
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.centerCtaWrap} style={{ paddingTop: 32 }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
              Trusted by 50+ ambitious businesses across Bhubaneswar, Cuttack, and Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: INTERACTIVE ROI GROWTH CALCULATOR (3D SKEUOMORPHIC DIALS)
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.calculatorSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Growth Projection Calculator</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Estimate Your <span className="accent-gradient">Revenue &amp; Lead Growth</span>
              </h2>
              <div className={styles.sectionHeaderBar} />
              <p className={styles.sectionSub}>
                Select your targeted monthly marketing budget to view verified lead volumes, revenue projections, and channel allocations based on our audited benchmarks.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className={styles.roiCalculatorBox}>
              {/* Spend Selector Pills */}
              <div className={styles.roiSpendSelector}>
                {roiTiers.map((tier, idx) => (
                  <button
                    key={tier.id}
                    className={`${styles.roiSpendBtn} ${activeRoiIndex === idx ? styles.roiSpendBtnActive : ''}`}
                    onClick={() => setActiveRoiIndex(idx)}
                  >
                    <span>{tier.spendLabel}</span>
                  </button>
                ))}
              </div>

              {/* Results Grid - 3D Tactile Skeuomorphic Dials with SmoothCounter */}
              <div className={styles.roiResultsGrid}>
                <div className={styles.roiResultDial}>
                  <span className={styles.roiCardLabel}>Estimated Qualified Leads</span>
                  <span className={styles.roiBigNumber}>
                    <SmoothCounter value={currentRoi.projectedLeads} />
                  </span>
                  <div className={styles.roiDialMeter}>
                    <div
                      className={styles.roiDialFill}
                      style={{ width: `${Math.min(100, 32 + (activeRoiIndex + 1) * 17)}%` }}
                    />
                  </div>
                  <span className={styles.roiCardSub}>Verified buyer inquiries</span>
                </div>

                <div className={styles.roiResultDial}>
                  <span className={styles.roiCardLabel}>Projected Revenue Output</span>
                  <span className={styles.roiBigNumber} style={{ color: '#10B981' }}>
                    <SmoothCounter value={currentRoi.projectedRevenue} />
                  </span>
                  <div className={styles.roiDialMeter}>
                    <div
                      className={styles.roiDialFill}
                      style={{
                        width: `${Math.min(100, 36 + (activeRoiIndex + 1) * 16)}%`,
                        background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)',
                      }}
                    />
                  </div>
                  <span className={styles.roiCardSub}>Compounding return estimate</span>
                </div>

                <div className={styles.roiResultDial}>
                  <span className={styles.roiCardLabel}>Expected Return on Ad Spend</span>
                  <span className={styles.roiBigNumber} style={{ color: '#D97706' }}>
                    <SmoothCounter value={currentRoi.roas} />
                  </span>
                  <div className={styles.roiDialMeter}>
                    <div
                      className={styles.roiDialFill}
                      style={{
                        width: `${Math.min(100, 42 + (activeRoiIndex + 1) * 14)}%`,
                        background: 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)',
                      }}
                    />
                  </div>
                  <span className={styles.roiCardSub}>Blended search + social</span>
                </div>
              </div>

              {/* Blueprint & Turnaround Strip */}
              <div className={styles.roiBlueprintStrip}>
                <div>
                  <span style={{ fontWeight: 700, color: '#0F172A', marginRight: 6 }}>Channel Blueprint:</span>
                  <span>{currentRoi.channels}</span>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--accent-blue)' }}>
                  ⚡ {currentRoi.turnaround}
                </div>
              </div>

              {/* Centered CTA Button */}
              <div className={styles.centerCtaWrap}>
                <BeamButton
                  href="/contact"
                  label={`Unlock Custom Growth Plan for ${currentRoi.spendLabel} →`}
                  size="md"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: ELEVATED PARTNERSHIP STRUCTURE
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.engagementSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.sparkleDot} />
                <span>Partnership Structure</span>
              </div>
              <h2 className={styles.sectionTitle}>
                How We Partner with <span className="accent-gradient">Growing Brands</span>
              </h2>
              <div className={styles.sectionHeaderBar} />
              <p className={styles.sectionSub}>
                Simple, transparent, performance-focused agreements without restrictive annual contracts.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.engagementGrid}>
            {engagementModels.map((m, idx) => (
              <ScrollReveal key={m.title} delay={idx * 80}>
                <div className={`${styles.engagementCard} ${idx === 0 ? styles.engagementCardHighlight : ''}`}>
                  <span className={`${styles.engagementBadge} ${idx === 0 ? styles.engagementBadgeGold : ''}`}>
                    {m.badge}
                  </span>
                  <h3 className={styles.engagementTitle}>{m.title}</h3>
                  <p className={styles.engagementDesc}>{m.desc}</p>
                  <div className={styles.engagementFeatures}>
                    {m.features.map((f) => (
                      <div key={f} className={styles.featureItem}>
                        <span style={{ color: idx === 0 ? '#B45309' : '#0B2093', fontWeight: 800 }}>✓</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.centerCtaWrap}>
                    <BeamButton href="/contact" label="Discuss This Model →" size="sm" fullWidth />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Trust Guarantees Strip */}
          <div className={styles.partnershipTrustStrip}>
            <div className={styles.trustItemPill}>
              <span style={{ color: '#10B981' }}>✓</span>
              <span>100% Attribution Transparency</span>
            </div>
            <div className={styles.trustItemPill}>
              <span style={{ color: '#10B981' }}>✓</span>
              <span>Zero 12-Month Lock-in Contracts</span>
            </div>
            <div className={styles.trustItemPill}>
              <span style={{ color: '#10B981' }}>✓</span>
              <span>Direct Senior Strategist Access</span>
            </div>
            <div className={styles.trustItemPill}>
              <span style={{ color: '#10B981' }}>✓</span>
              <span>Weekly Sprint Deliverables</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FAQ SECTION (PLACED JUST ABOVE BOTTOM FOOTER CTA CARD)
          ───────────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 12: BESPOKE BOTTOM CTA CARD (PUNCHY TEXT & GLOBAL BLUE)
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.bespokeCtaSection}>
        <div className="container">
          <div className={styles.bespokeCtaCardCentered}>
            <div className={styles.ctaGlowCircle} />

            <div className={styles.eyebrowBadge} style={{ background: 'rgba(255,255,255,0.12)', color: '#FFB800', borderColor: 'rgba(255,255,255,0.25)' }}>
              <span>NEXT SUCCESS STORY</span>
            </div>

            <h2 className={styles.bespokeCtaTitleCentered}>
              Ready to Scale Your <span style={{ color: '#FFB800' }}>Revenue?</span>
            </h2>

            <p className={styles.bespokeCtaDescCentered}>
              Claim a free 30-minute growth audit. We will analyze your search rankings, ad funnels, and conversion bottlenecks.
            </p>

            <div className={styles.ctaPerksRow}>
              <div className={styles.ctaPerkItem}>
                <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                <span>SEO &amp; Local Maps Audit</span>
              </div>
              <div className={styles.ctaPerkItem}>
                <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                <span>Ads &amp; Funnel Diagnostic</span>
              </div>
              <div className={styles.ctaPerkItem}>
                <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                <span>90-Day Execution Roadmap</span>
              </div>
            </div>

            {/* Centered Action Buttons */}
            <div className={styles.ctaCenteredActions}>
              <BeamButton href="/contact" label="Claim Free 30-Min Audit" size="lg" />
              <a
                href="https://wa.me/918260709689?text=Hi%20Marketing%20Copilot,%20I%20would%20like%20to%20audit%20my%20business%20growth."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
                style={{ background: 'rgba(255,255,255,0.12)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.25)' }}
              >
                <span>WhatsApp Direct →</span>
              </a>
            </div>

            <div style={{ fontSize: 12, color: '#CBD5E1', marginTop: 2 }}>
              Zero cost • Direct senior strategy session • 100% confidential
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
