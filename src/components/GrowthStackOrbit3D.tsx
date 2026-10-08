'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './GrowthStackOrbit3D.module.css';

export interface GrowthService {
  id: string;
  icon: string;
  title: string;
  category: string;
  stage: string;
  shortDesc: string;
  metricNum: string;
  metricLabel: string;
}

export const CORE_GROWTH_SERVICES: GrowthService[] = [
  {
    id: 'seo',
    icon: '⚡',
    title: 'Search Engine Optimization',
    category: 'Demand Capture',
    stage: 'Top-Funnel Influx',
    shortDesc: 'Technical audits, semantic schema, and topic cluster fortress for #1 search rank.',
    metricNum: '+187% Organic Lift',
    metricLabel: 'Organic Search Growth',
  },
  {
    id: 'google-ads',
    icon: '🎯',
    title: 'Google Ads & P-Max',
    category: 'High-Intent Acquisition',
    stage: 'Immediate Intent',
    shortDesc: 'High-ROAS search & Performance Max with negative keyword shields and smart bidding.',
    metricNum: '4.2X Blended ROAS',
    metricLabel: 'ROAS Target',
  },
  {
    id: 'meta-ads',
    icon: '🚀',
    title: 'Meta Ads & Advantage+',
    category: 'Paid Social Scale',
    stage: 'Viral Revenue Scale',
    shortDesc: 'Advantage+ budgeting, native UGC video creative velocity, and first-party CAPI.',
    metricNum: '-42% Lower CPA',
    metricLabel: 'Acquisition Cost',
  },
  {
    id: 'local-seo',
    icon: '📍',
    title: 'Local SEO & Maps 3-Pack',
    category: 'Local Dominance',
    stage: 'Near-Me Influx',
    shortDesc: 'Google Business Profile dominance, geo-citations, and local search call influx.',
    metricNum: '3.8X Local Calls',
    metricLabel: 'Inbound Growth',
  },
  {
    id: 'web-dev',
    icon: '💻',
    title: 'Next.js Web Engineering',
    category: 'Conversion Tech',
    stage: 'Sub-0.8s Speed',
    shortDesc: 'Sub-second speed Next.js websites built with zero bloat and high conversion UX.',
    metricNum: '< 0.8s LCP Load',
    metricLabel: 'Page Speed',
  },
  {
    id: 'ecommerce',
    icon: '🛍️',
    title: 'E-Commerce & D2C Scaling',
    category: 'Revenue Acceleration',
    stage: 'LTV Multiplier',
    shortDesc: 'Shopify Plus & headless stores with 1-click checkout and automated WhatsApp recovery.',
    metricNum: '3.4X GMV Scale',
    metricLabel: 'Revenue Expansion',
  },
  {
    id: 'geo-aeo',
    icon: '🤖',
    title: 'GEO & AEO (AI Search SEO)',
    category: 'Next-Gen Discovery',
    stage: 'LLM Citations',
    shortDesc: 'Primary citation authority inside ChatGPT, Perplexity, Claude, and Google AI Overviews.',
    metricNum: 'Top 3 AI Rank',
    metricLabel: 'AI Citations',
  },
  {
    id: 'cro',
    icon: '🧪',
    title: 'Conversion Rate Optimization',
    category: 'Multiplier Pod',
    stage: 'Funnel Tuning',
    shortDesc: 'Multivariate split testing of headlines, checkout friction, and localized trust proof.',
    metricNum: '+54% CR Lift',
    metricLabel: 'Conversion Lift',
  },
];

export default function GrowthStackOrbit3D() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Smooth continuous rotation loop
  const animateOrbit = useCallback((time: number) => {
    if (lastTimeRef.current !== null) {
      const delta = time - lastTimeRef.current;
      if (isPlaying && !isHovered) {
        setRotationAngle((prev) => (prev + delta * 0.01) % 360);
      }
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateOrbit);
  }, [isPlaying, isHovered]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOrbit);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animateOrbit]);

  const rotateStep = (direction: 'left' | 'right') => {
    const step = 360 / CORE_GROWTH_SERVICES.length;
    setRotationAngle((prev) => (direction === 'left' ? prev - step : prev + step));
  };

  return (
    <section className={styles.orbitSection} id="growth-stack">
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
              A synchronized 360° suite of performance capabilities orbiting a single central growth partner. No siloed vendors. No dropped handoffs.
            </p>
          </div>
        </ScrollReveal>

        {/* Orbit Interactive Controls */}
        <div className={styles.orbitControlsBar}>
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className={`${styles.orbitControlBtn} ${isPlaying ? styles.orbitControlBtnActive : ''}`}
            title="Toggle orbit animation"
          >
            <span>{isPlaying ? '⏸ Pause Orbit' : '▶ Resume Orbit'}</span>
          </button>

          <button
            type="button"
            onClick={() => rotateStep('left')}
            className={styles.orbitControlBtn}
            title="Rotate counter-clockwise"
          >
            <span>◀ Prev</span>
          </button>

          <button
            type="button"
            onClick={() => rotateStep('right')}
            className={styles.orbitControlBtn}
            title="Rotate clockwise"
          >
            <span>Next ▶</span>
          </button>

          <span className={styles.orbitStatusHint}>
            💡 Hover any card to pause rotation
          </span>
        </div>

        {/* Quick Chiclets Jump Bar */}
        <div className={styles.dockChicletsBar}>
          {CORE_GROWTH_SERVICES.map((service, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  setActiveIdx(idx);
                  // Rotate selected card to front (angle 90deg / front-facing)
                  const targetAngle = 90 - idx * (360 / CORE_GROWTH_SERVICES.length);
                  setRotationAngle((targetAngle + 360) % 360);
                }}
                className={`${styles.dockChicletBtn} ${
                  isSelected ? styles.dockChicletBtnActive : ''
                }`}
              >
                <span>{service.icon}</span>
                <span>{service.title.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Orbit Stage (No Giant Card Underneath!) */}
        <div
          className={styles.orbitArena}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.orbitStage3D}>
            {/* SVG Elliptical Guide Tracks */}
            <svg className={styles.orbitTrackSvg} viewBox="0 0 940 480">
              <defs>
                <linearGradient id="trackGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0B2093" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              <ellipse
                cx="470"
                cy="240"
                rx="380"
                ry="180"
                className={styles.orbitEllipseTrack}
              />

              <ellipse
                cx="470"
                cy="240"
                rx="260"
                ry="120"
                className={styles.orbitInnerGuide}
              />
            </svg>

            {/* Central Marketing Copilot Growth Core */}
            <div
              className={styles.centralCoreChassis}
              onClick={() => setActiveIdx(0)}
              title="Marketing Copilot Central Growth Engine"
            >
              <div className={styles.coreRingsAura} />
              <div className={styles.coreIconFrame}>🚀</div>
              <div className={styles.coreBrandTitle}>Marketing Copilot</div>
              <div className={styles.coreEngineTag}>GROWTH CORE</div>
            </div>

            {/* Orbiting 3D Service Cards */}
            {CORE_GROWTH_SERVICES.map((service, idx) => {
              const total = CORE_GROWTH_SERVICES.length;
              const angleDeg = (idx * (360 / total) + rotationAngle) % 360;
              const angleRad = (angleDeg * Math.PI) / 180;

              const radiusX = 380;
              const radiusY = 180;
              const depthZ = 50;

              const x = Math.cos(angleRad) * radiusX;
              const y = Math.sin(angleRad) * radiusY;
              const z = Math.sin(angleRad) * depthZ;

              // Front nodes are larger, more prominent and higher z-index
              const scale = 0.88 + ((y + radiusY) / (radiusY * 2)) * 0.22;
              const opacity = 0.8 + ((y + radiusY) / (radiusY * 2)) * 0.2;
              const zIndex = Math.round(y + radiusY) + 10;
              const isSelected = activeIdx === idx;

              return (
                <div
                  key={service.id}
                  className={styles.orbitNodeWrapper}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div
                    className={`${styles.orbitCardChassis} ${
                      isSelected ? styles.orbitCardChassisActive : ''
                    }`}
                  >
                    <div className={styles.cardTopRow}>
                      <div className={styles.cardIconFrame}>{service.icon}</div>
                      <span className={styles.cardStageBadge}>{service.stage}</span>
                    </div>

                    <h4 className={styles.cardTitle}>{service.title}</h4>
                    <p className={styles.cardShortDesc}>{service.shortDesc}</p>

                    <div className={styles.cardBottomStrip}>
                      <span className={styles.cardMetricBadge}>{service.metricNum}</span>
                      <a
                        href={`https://wa.me/919437168434?text=${encodeURIComponent(
                          `Hi Marketing Copilot, I would like to discuss deploying your ${service.title} capability.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardActionLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Deploy ↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
