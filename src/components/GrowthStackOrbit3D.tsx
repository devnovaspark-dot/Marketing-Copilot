'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './GrowthStackOrbit3D.module.css';

export interface GrowthService {
  id: string;
  icon: string;
  title: string;
  shortName: string;
  category: string;
  stage: string;
  shortDesc: string;
  metricNum: string;
  metricLabel: string;
  glowColor: string;
  deliverables: string[];
}

export const CORE_GROWTH_SERVICES: GrowthService[] = [
  {
    id: 'seo',
    icon: '⚡',
    title: 'Search Engine Optimization',
    shortName: 'SEO & Search',
    category: 'Demand Capture',
    stage: 'Top-Funnel Influx',
    shortDesc: 'Technical Core Web Vitals architecture, semantic topic clusters, and entity authority engineered for rank #1 dominance.',
    metricNum: '+187% Lift',
    metricLabel: 'Organic Search Growth',
    glowColor: '#3B82F6',
    deliverables: ['Sub-0.8s Technical Speed & Schema', 'Semantic Topic Clusters & Fortress', 'Pan-India & Local Keyword Defense'],
  },
  {
    id: 'google-ads',
    icon: '🎯',
    title: 'Google Ads & Performance Max',
    shortName: 'Google Ads',
    category: 'High-Intent Acquisition',
    stage: 'Immediate Intent',
    shortDesc: 'High-ROAS Search & P-Max campaigns with negative keyword bid shields, first-party audience signals, and smart bidding.',
    metricNum: '4.2X ROAS',
    metricLabel: 'Blended Ad Return',
    glowColor: '#F59E0B',
    deliverables: ['Performance Max & Search Intent Sprints', 'Negative Keyword Bid Shields', 'Automated Smart Bidding Optimization'],
  },
  {
    id: 'meta-ads',
    icon: '🚀',
    title: 'Meta Ads & Advantage+',
    shortName: 'Meta Advantage+',
    category: 'Paid Social Scale',
    stage: 'Viral Revenue Scale',
    shortDesc: 'Advantage+ budget optimization, high-converting UGC video creative sprints, and first-party Conversions API (CAPI).',
    metricNum: '-42% CPA',
    metricLabel: 'Customer Acquisition Cost',
    glowColor: '#EC4899',
    deliverables: ['Advantage+ Algorithmic Scaling', 'Native UGC Video Creative Velocity', 'First-Party Conversions API (CAPI)'],
  },
  {
    id: 'local-seo',
    icon: '📍',
    title: 'Local SEO & Maps 3-Pack',
    shortName: 'Local Maps 3-Pack',
    category: 'Local Dominance',
    stage: 'Near-Me Influx',
    shortDesc: 'Google Business Profile 3-Pack dominance, geo-grid proximity ranking, and automated 5-star review acquisition engines.',
    metricNum: '3.8X Calls',
    metricLabel: 'Inbound Local Calls',
    glowColor: '#10B981',
    deliverables: ['Google Business Profile Dominance', 'Geo-Grid 3-Pack Proximity Rank', 'High-Trust Review Acquisition Engines'],
  },
  {
    id: 'web-dev',
    icon: '💻',
    title: 'Next.js Web Engineering',
    shortName: 'Next.js Speed',
    category: 'Conversion Tech',
    stage: 'Sub-0.8s Speed',
    shortDesc: 'Sub-second LCP Next.js web applications built with zero bloat, flawless mobile UX, and high-converting funnel architecture.',
    metricNum: '< 0.8s LCP',
    metricLabel: 'Page Load Speed',
    glowColor: '#6366F1',
    deliverables: ['Sub-second LCP Load Speeds', 'High-Converting Responsive UX', 'Zero Bloat Headless Architecture'],
  },
  {
    id: 'ecommerce',
    icon: '🛍️',
    title: 'E-Commerce & D2C Scaling',
    shortName: 'E-Commerce & D2C',
    category: 'Revenue Acceleration',
    stage: 'LTV Multiplier',
    shortDesc: 'Shopify Plus & headless stores with 1-click checkout, automated WhatsApp cart recovery, and retention marketing flows.',
    metricNum: '3.4X GMV',
    metricLabel: 'Revenue Expansion',
    glowColor: '#8B5CF6',
    deliverables: ['Shopify Plus & Headless Checkouts', 'Automated WhatsApp Cart Recovery', 'LTV Expansion & Retention Flows'],
  },
  {
    id: 'geo-aeo',
    icon: '🤖',
    title: 'GEO & AEO (AI Search SEO)',
    shortName: 'GEO & AI Search',
    category: 'Next-Gen Discovery',
    stage: 'LLM Citations',
    shortDesc: 'Primary citation authority inside ChatGPT, Perplexity, Claude, and Google AI Overviews to capture AI-assisted buyer intent.',
    metricNum: 'Top 3 AI',
    metricLabel: 'AI Engine Rank',
    glowColor: '#06B6D4',
    deliverables: ['LLM Citations (ChatGPT & Claude)', 'Google AI Overviews Optimization', 'Knowledge Graph Entity Authority'],
  },
  {
    id: 'cro',
    icon: '🧪',
    title: 'Conversion Rate Optimization',
    shortName: 'CRO Optimization',
    category: 'Multiplier Pod',
    stage: 'Funnel Tuning',
    shortDesc: 'Multivariate split testing of landing page headlines, checkout friction elimination, and localized trust proof psychology.',
    metricNum: '+54% Lift',
    metricLabel: 'Conversion Rate Lift',
    glowColor: '#14B8A6',
    deliverables: ['Multivariate A/B Split Testing', 'Frictionless Funnel Architecture', 'Localized Trust & Proof Badges'],
  },
];

export default function GrowthStackOrbit3D() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [stageWidth, setStageWidth] = useState<number>(900);

  const arenaRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Measure container for flawless responsive 3D radius calculation
  useEffect(() => {
    const handleResize = () => {
      if (arenaRef.current) {
        setStageWidth(arenaRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth continuous rotation loop with clamped delta time for zero-stutter revolution
  const animateOrbit = useCallback(
    (time: number) => {
      if (lastTimeRef.current !== null) {
        // Clamp delta to prevent abrupt skipping when tab resumes or during micro-jank
        const rawDelta = time - lastTimeRef.current;
        const delta = Math.min(Math.max(rawDelta, 0), 32);
        if (isPlaying) {
          // Constant silky-smooth rotational velocity (~18 seconds per majestic 360° revolution)
          setRotationAngle((prev) => (prev + delta * 0.020) % 360);
        }
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOrbit);
    },
    [isPlaying]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOrbit);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animateOrbit]);

  const focusService = (idx: number) => {
    setActiveIdx(idx);
    const total = CORE_GROWTH_SERVICES.length;
    // Smoothly calculate target angle to bring selected pod to the foreground (90 deg)
    const target = 90 - idx * (360 / total);
    setRotationAngle((target + 360) % 360);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % CORE_GROWTH_SERVICES.length;
    focusService(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx =
      (activeIdx - 1 + CORE_GROWTH_SERVICES.length) % CORE_GROWTH_SERVICES.length;
    focusService(prevIdx);
  };

  // Dynamically calculate responsive orbit radii with guaranteed side proportion margins
  const availableWidth = Math.max(320, stageWidth);
  const isMobile = stageWidth < 640;
  const isSmallMobile = stageWidth < 430;

  const radiusX = isMobile
    ? Math.min(145, Math.max(110, (availableWidth - 36) * 0.44))
    : Math.min(345, Math.max(130, (availableWidth - 260) * 0.44));

  const radiusY = isMobile
    ? (isSmallMobile ? 96 : 108)
    : Math.min(130, Math.max(65, radiusX * 0.36));

  const depthZ = isMobile ? 32 : 55;

  return (
    <section className={styles.orbitSection} id="growth-stack">
      {/* Ambient Celestial Glow Gradients */}
      <div className={styles.ambientGlowCenter} />
      <div className={styles.ambientOrbLeft} />
      <div className={styles.ambientOrbRight} />

      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className={styles.headerCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>END-TO-END GROWTH STACK &bull; 3D ORBIT ENGINE</span>
            </div>
            <h2 className={styles.titlePrimary}>
              Everything You Need to Grow Online.
            </h2>
            <p className={styles.subtitle}>
              A synchronized 360° suite of performance capabilities orbiting a single accountable partner. No siloed vendors. No dropped handoffs.
            </p>
          </div>
        </ScrollReveal>

        {/* 3D Orbit Arena (Open, Spacious Skeuomorphic 3D Stage) */}
        <div
          ref={arenaRef}
          className={styles.orbitArena}
        >
          {/* 3D Orbital Plane Rings (True Stereoscopic Gravitational Planes) */}
          <div className={styles.orbitalDiscPlane} />
          <div className={styles.orbitalDiscInner} />
          <div className={styles.gravitationalHalo} />

          <div className={styles.orbitStage3D}>
            {/* Central Marketing Copilot Growth Engine Core */}
            <div
              className={styles.centralCoreChassis}
              onClick={() => focusService(0)}
              title="Marketing Copilot Central Growth Engine Core"
            >
              <div className={styles.coreVolumetricAura} />
              <div className={styles.coreOuterPulseRing} />
              <div className={styles.coreSpecularSheen} />
              <div className={styles.coreIconFrame}>🚀</div>
              <div className={styles.coreBrandTitle}>Marketing Copilot</div>
              <div className={styles.coreEngineTag}>
                <span className={styles.coreLivePing} />
                <span>GROWTH CORE</span>
              </div>
            </div>

            {/* Orbiting Luminous Satellite Pods (Sleek Frosted Glass Capsules Floating in 3D Space) */}
            {CORE_GROWTH_SERVICES.map((service, idx) => {
              const total = CORE_GROWTH_SERVICES.length;
              const angleDeg = (idx * (360 / total) + rotationAngle) % 360;
              const angleRad = (angleDeg * Math.PI) / 180;

              const x = Math.cos(angleRad) * radiusX;
              const y = Math.sin(angleRad) * radiusY;
              const z = Math.sin(angleRad) * depthZ;

              // Genuine Stereoscopic Depth Calculation
              // Foreground pods (sin > 0) are larger, crisp, and vivid;
              // Background pods (sin < 0) are softly scaled and muted.
              const normalizedY = (y + radiusY) / (radiusY * 2); // 0 (back) to 1 (front)
              const scale = isMobile
                ? (activeIdx === idx ? 1.12 : 0.78 + normalizedY * 0.26)
                : (0.82 + normalizedY * 0.32);
              const opacity = isMobile
                ? (activeIdx === idx ? 1 : 0.65 + normalizedY * 0.35)
                : (0.65 + normalizedY * 0.35);
              const zIndex = Math.round(normalizedY * 40) + 10;
              const isSelected = activeIdx === idx;

              return (
                <div
                  key={service.id}
                  className={styles.satelliteNode}
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => focusService(idx)}
                >
                  <div
                    className={`${styles.satelliteCapsule} ${
                      isSelected ? styles.satelliteCapsuleActive : ''
                    }`}
                    style={
                      isSelected
                        ? {
                            borderColor: service.glowColor,
                            boxShadow: `0 14px 34px -4px rgba(11, 32, 147, 0.22), 0 0 22px ${service.glowColor}40`,
                          }
                        : undefined
                    }
                  >
                    <div
                      className={styles.satelliteIconBubble}
                      style={{
                        background: isSelected
                          ? `${service.glowColor}18`
                          : undefined,
                        borderColor: isSelected
                          ? service.glowColor
                          : 'rgba(59, 130, 246, 0.25)',
                        boxShadow: isSelected
                          ? `0 0 14px ${service.glowColor}60`
                          : '0 2px 8px rgba(0,0,0,0.06)',
                      }}
                    >
                      {service.icon}
                    </div>
                    <div className={styles.satelliteMeta}>
                      <span className={styles.satelliteTitle}>
                        {service.shortName}
                      </span>
                      <span
                        className={styles.satelliteMetricBadge}
                        style={{ color: isSelected ? service.glowColor : '#059669' }}
                      >
                        {service.metricNum}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Focused Pod Intelligence Banner on Mobile/Desktop */}
          <div
            className={styles.activeServiceBanner}
            style={{
              borderColor: `${CORE_GROWTH_SERVICES[activeIdx].glowColor}50`,
            }}
          >
            <span className={styles.activeServiceIcon}>{CORE_GROWTH_SERVICES[activeIdx].icon}</span>
            <div className={styles.activeServiceMeta}>
              <span className={styles.activeServiceTitle}>{CORE_GROWTH_SERVICES[activeIdx].title}</span>
              <span
                className={styles.activeServiceMetric}
                style={{ color: CORE_GROWTH_SERVICES[activeIdx].glowColor }}
              >
                {CORE_GROWTH_SERVICES[activeIdx].metricNum} &bull; {CORE_GROWTH_SERVICES[activeIdx].metricLabel}
              </span>
            </div>
          </div>

          {/* Tactile Orbit Control Bar (Step Prev / Play-Pause / Step Next) */}
          <div className={styles.orbitControlsRow}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.controlBtnIcon}
              title="Previous Service Pod"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className={styles.controlBtnToggle}
              title={isPlaying ? 'Pause auto-rotation' : 'Resume auto-rotation'}
            >
              <span className={styles.controlLed} style={{ background: isPlaying ? '#10B981' : '#F59E0B' }} />
              <span>{isPlaying ? 'ORBIT ACTIVE' : 'PAUSED'}</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className={styles.controlBtnIcon}
              title="Next Service Pod"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
