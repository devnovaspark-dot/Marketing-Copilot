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
}

export const CORE_GROWTH_SERVICES: GrowthService[] = [
  {
    id: 'seo',
    icon: '⚡',
    title: 'Search Engine Optimization',
    shortName: 'SEO & Search',
    category: 'Demand Capture',
    stage: 'Top-Funnel Influx',
    shortDesc: 'Technical architecture, semantic schema, and topic cluster fortress for #1 search rank.',
    metricNum: '+187% Organic Lift',
    metricLabel: 'Organic Search Growth',
    glowColor: '#3B82F6',
  },
  {
    id: 'google-ads',
    icon: '🎯',
    title: 'Google Ads & Performance Max',
    shortName: 'Google Ads',
    category: 'High-Intent Acquisition',
    stage: 'Immediate Intent',
    shortDesc: 'High-ROAS search & P-Max campaigns with negative keyword shields and automated bidding.',
    metricNum: '4.2X Blended ROAS',
    metricLabel: 'ROAS Target',
    glowColor: '#F59E0B',
  },
  {
    id: 'meta-ads',
    icon: '🚀',
    title: 'Meta Ads & Advantage+',
    shortName: 'Meta Advantage+',
    category: 'Paid Social Scale',
    stage: 'Viral Revenue Scale',
    shortDesc: 'Advantage+ budget optimization, native UGC video creative velocity, and first-party CAPI.',
    metricNum: '-42% Lower CPA',
    metricLabel: 'Acquisition Cost',
    glowColor: '#EC4899',
  },
  {
    id: 'local-seo',
    icon: '📍',
    title: 'Local SEO & Maps 3-Pack',
    shortName: 'Local Maps 3-Pack',
    category: 'Local Dominance',
    stage: 'Near-Me Influx',
    shortDesc: 'Google Business Profile dominance, geo-citations, and local search call influx.',
    metricNum: '3.8X Local Calls',
    metricLabel: 'Inbound Growth',
    glowColor: '#10B981',
  },
  {
    id: 'web-dev',
    icon: '💻',
    title: 'Next.js Web Engineering',
    shortName: 'Next.js Speed',
    category: 'Conversion Tech',
    stage: 'Sub-0.8s Speed',
    shortDesc: 'Sub-second speed Next.js websites built with zero bloat and high-converting UX architecture.',
    metricNum: '< 0.8s LCP Load',
    metricLabel: 'Page Speed',
    glowColor: '#6366F1',
  },
  {
    id: 'ecommerce',
    icon: '🛍️',
    title: 'E-Commerce & D2C Scaling',
    shortName: 'E-Commerce & D2C',
    category: 'Revenue Acceleration',
    stage: 'LTV Multiplier',
    shortDesc: 'Shopify Plus & headless stores with 1-click checkout and automated WhatsApp recovery.',
    metricNum: '3.4X GMV Scale',
    metricLabel: 'Revenue Expansion',
    glowColor: '#8B5CF6',
  },
  {
    id: 'geo-aeo',
    icon: '🤖',
    title: 'GEO & AEO (AI Search SEO)',
    shortName: 'GEO & AI Search',
    category: 'Next-Gen Discovery',
    stage: 'LLM Citations',
    shortDesc: 'Primary citation authority inside ChatGPT, Perplexity, Claude, and Google AI Overviews.',
    metricNum: 'Top 3 AI Rank',
    metricLabel: 'AI Citations',
    glowColor: '#06B6D4',
  },
  {
    id: 'cro',
    icon: '🧪',
    title: 'Conversion Rate Optimization',
    shortName: 'CRO Optimization',
    category: 'Multiplier Pod',
    stage: 'Funnel Tuning',
    shortDesc: 'Multivariate split testing of headlines, checkout friction, and localized trust proof.',
    metricNum: '+54% CR Lift',
    metricLabel: 'Conversion Lift',
    glowColor: '#14B8A6',
  },
];

export default function GrowthStackOrbit3D() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Smooth continuous rotation loop with fluid delta time
  const animateOrbit = useCallback((time: number) => {
    if (lastTimeRef.current !== null) {
      const delta = time - lastTimeRef.current;
      if (isPlaying && !isHovered) {
        // Silky smooth constant rotational velocity
        setRotationAngle((prev) => (prev + delta * 0.012) % 360);
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

  const activeService = CORE_GROWTH_SERVICES[activeIdx] || CORE_GROWTH_SERVICES[0];

  const focusService = (idx: number) => {
    setActiveIdx(idx);
    // Smoothly calculate target angle to bring selected pod to the front (90 deg)
    const total = CORE_GROWTH_SERVICES.length;
    const target = 90 - idx * (360 / total);
    setRotationAngle((target + 360) % 360);
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

        {/* Orbit Filter Quick Jump Chips */}
        <div className={styles.orbitChicletsBar}>
          {CORE_GROWTH_SERVICES.map((service, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => focusService(idx)}
                className={`${styles.orbitChicletBtn} ${
                  isSelected ? styles.orbitChicletBtnActive : ''
                }`}
              >
                <span>{service.icon}</span>
                <span>{service.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Orbit Stage (Satellite Pods — ZERO Clunky Cards!) */}
        <div
          className={styles.orbitArena}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.orbitStage3D}>
            {/* SVG Elliptical Orbital Path Guides */}
            <svg className={styles.orbitTrackSvg} viewBox="0 0 1000 500">
              <ellipse
                cx="500"
                cy="250"
                rx="420"
                ry="165"
                className={styles.orbitEllipseTrack}
              />
              <ellipse
                cx="500"
                cy="250"
                rx="300"
                ry="110"
                className={styles.orbitInnerGuide}
              />
            </svg>

            {/* Central Marketing Copilot Growth Core */}
            <div
              className={styles.centralCoreChassis}
              onClick={() => focusService(0)}
              title="Marketing Copilot Central Growth Engine"
            >
              <div className={styles.coreRingsAura} />
              <div className={styles.coreIconFrame}>🚀</div>
              <div className={styles.coreBrandTitle}>Marketing Copilot</div>
              <div className={styles.coreEngineTag}>GROWTH CORE</div>
            </div>

            {/* Orbiting Luminous Satellite Pods (Sleek Frosted Glass Capsules) */}
            {CORE_GROWTH_SERVICES.map((service, idx) => {
              const total = CORE_GROWTH_SERVICES.length;
              const angleDeg = (idx * (360 / total) + rotationAngle) % 360;
              const angleRad = (angleDeg * Math.PI) / 180;

              const radiusX = 420;
              const radiusY = 165;
              const depthZ = 60;

              const x = Math.cos(angleRad) * radiusX;
              const y = Math.sin(angleRad) * radiusY;
              const z = Math.sin(angleRad) * depthZ;

              // Depth perspective physics
              const normalizedY = (y + radiusY) / (radiusY * 2); // 0 (back) to 1 (front)
              const scale = 0.84 + normalizedY * 0.28;
              const opacity = 0.65 + normalizedY * 0.35;
              const zIndex = Math.round(normalizedY * 35) + 10;
              const isSelected = activeIdx === idx;

              return (
                <div
                  key={service.id}
                  className={styles.satelliteNode}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => focusService(idx)}
                >
                  <div
                    className={`${styles.satelliteCapsule} ${
                      isSelected ? styles.satelliteCapsuleActive : ''
                    }`}
                  >
                    <div
                      className={styles.satelliteIconBubble}
                      style={{
                        boxShadow: isSelected
                          ? `0 0 16px ${service.glowColor}`
                          : `0 2px 8px rgba(0,0,0,0.06)`,
                      }}
                    >
                      {service.icon}
                    </div>
                    <div className={styles.satelliteMeta}>
                      <span className={styles.satelliteTitle}>{service.shortName}</span>
                      <span className={styles.satelliteMetricBadge}>
                        {service.metricNum}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sleek Focal Spotlight Stream Bar (Clean, Minimal Single-Line Display) */}
        <div className={styles.focalSpotlightChassis}>
          <div className={styles.focalLeft}>
            <span className={styles.focalIcon}>{activeService.icon}</span>
            <div className={styles.focalCopyBlock}>
              <span className={styles.focalTitle}>
                {activeService.title} <span className={styles.focalStageTag}>&bull; {activeService.stage}</span>
              </span>
              <p className={styles.focalDesc}>{activeService.shortDesc}</p>
            </div>
          </div>

          <div className={styles.focalRight}>
            <div className={styles.focalMetricBox}>
              <span className={styles.focalMetricVal}>{activeService.metricNum}</span>
              <span className={styles.focalMetricLbl}>{activeService.metricLabel}</span>
            </div>

            <a
              href={`https://wa.me/919437168434?text=${encodeURIComponent(
                `Hi Marketing Copilot, I would like to discuss deploying your ${activeService.title} capability.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.focalDeployBtn}
            >
              <span>Deploy Pod ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
