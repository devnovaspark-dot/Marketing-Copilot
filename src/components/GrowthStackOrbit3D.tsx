'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
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
  turnaround: string;
  techStack: string[];
  workflow: { step: string; title: string; desc: string }[];
}

export const CORE_GROWTH_SERVICES: GrowthService[] = [
  {
    id: 'seo',
    icon: '⚡',
    title: 'Search Engine Optimization (SEO)',
    category: 'Organic Demand Capture',
    stage: 'Top-Funnel Influx',
    shortDesc: 'Technical SEO audits, semantic schema, and programmatic topic cluster fortress to secure #1 rankings for high-intent search queries across India.',
    metricNum: '+187%',
    metricLabel: 'Organic Search Lift',
    turnaround: 'Continuous Sprints',
    techStack: ['Schema Entity Graph', 'Core Web Vitals < 0.8s', 'Programmatic Topic Hubs'],
    workflow: [
      { step: '01', title: 'Technical & Entity Audit', desc: 'Eliminate crawl bloat, fix canonicals, and build structured JSON-LD entity graph.' },
      { step: '02', title: 'Commercial Keyword Fortress', desc: 'Target bottom-funnel commercial searches with high conversion propensity.' },
      { step: '03', title: 'Authority & Link Graph', desc: 'Direct high-tier PageRank equity to conversion-focused landing assets.' },
    ],
  },
  {
    id: 'google-ads',
    icon: '🎯',
    title: 'Google Ads & Performance Max',
    category: 'High-Intent Acquisition',
    stage: 'Immediate Intent Capture',
    shortDesc: 'High-ROAS Search, Shopping, and Performance Max campaigns backed by surgical negative keyword shields, value bidding, and first-party CAPI attribution.',
    metricNum: '4.2X',
    metricLabel: 'Blended ROAS Target',
    turnaround: '48-Hour Live Kickoff',
    techStack: ['Exact Negative Shields', 'Enhanced Conversions API', 'Value-Based Smart Bidding'],
    workflow: [
      { step: '01', title: 'Negative Keyword Shield', desc: 'Block 35%+ of ad spend leakage on irrelevant, misaligned, and junk keywords.' },
      { step: '02', title: 'High-Intent SKAG Architecture', desc: 'Align creative ad copy directly with purchase-ready customer intent.' },
      { step: '03', title: 'Offline Conversion Sync', desc: 'Feed qualified sales and closed deal revenue back to Google AI algorithms.' },
    ],
  },
  {
    id: 'meta-ads',
    icon: '🚀',
    title: 'Meta Ads & Advantage+',
    category: 'Paid Social & Scale',
    stage: 'Viral Revenue Scale',
    shortDesc: 'Full-funnel Facebook & Instagram growth engine powered by Advantage+ shopping budgets, native UGC video creative velocity, and server-to-server Conversions API.',
    metricNum: '-42%',
    metricLabel: 'Cost Per Acquisition (CPA)',
    turnaround: '48-Hour Live Kickoff',
    techStack: ['Meta CAPI First-Party Pixel', '12 UGC Hook Variations / Mo', 'Advantage+ Shopping Engine'],
    workflow: [
      { step: '01', title: 'UGC Creative Velocity Lab', desc: 'Script, shoot, and test short-form video hooks that destroy banner blindness.' },
      { step: '02', title: 'Server-Side CAPI Sync', desc: 'Circumvent iOS ad blockers with direct cloud server telemetry.' },
      { step: '03', title: 'Dynamic Social Retargeting', desc: 'Re-engage cart abandoners and high-value visitors with social proof.' },
    ],
  },
  {
    id: 'local-seo',
    icon: '📍',
    title: 'Local SEO & Google Maps 3-Pack',
    category: 'Hyper-Local Domination',
    stage: 'Near-Me Influx',
    shortDesc: 'Google Business Profile audit, geo-tagged citation network, localized landing pages, and automated review generation to conquer local map packs.',
    metricNum: '3.8X',
    metricLabel: 'Direct Phone & Map Influx',
    turnaround: '14-Day Local Sprint',
    techStack: ['Geo-Tagged Media Sync', 'Local Citation Network', 'Review Generation Funnels'],
    workflow: [
      { step: '01', title: 'GBP Teardown & Verification', desc: 'Resolve suspension roadblocks, categories, and NAP consistency.' },
      { step: '02', title: 'Geo-Grid Rank Tracking', desc: 'Eliminate local proximity drops with targeted geo-signal content.' },
      { step: '03', title: 'Review Velocity Pipeline', desc: 'Turn happy customers into 5-star Google review champions via WhatsApp.' },
    ],
  },
  {
    id: 'web-dev',
    icon: '💻',
    title: 'High-Conversion Next.js Web Dev',
    category: 'Conversion Infrastructure',
    stage: 'Sub-0.8s Speed',
    shortDesc: 'Sub-second speed Next.js websites built with responsive tactile design, zero bloat, mobile-first UX, and automated lead capture hooks.',
    metricNum: '< 0.8s',
    metricLabel: 'Largest Contentful Paint',
    turnaround: '14-Day Rapid Deployment',
    techStack: ['Next.js 16 App Router', 'Turbopack Edge CDN', 'Zero-Bloat Vanilla CSS'],
    workflow: [
      { step: '01', title: 'Conversion Wireframe Blueprint', desc: 'Eliminate friction, reduce form fields, and inject high-trust proof elements.' },
      { step: '02', title: 'Edge-Rendered Speed Engineering', desc: 'Deploy on serverless edge nodes for instant nationwide browsing speed.' },
      { step: '03', title: 'Built-in Telemetry Hookup', desc: 'Wired with GA4, Tag Manager, and Meta CAPI webhooks from day one.' },
    ],
  },
  {
    id: 'ecommerce',
    icon: '🛍️',
    title: 'E-Commerce & D2C Scaling',
    category: 'Revenue Acceleration',
    stage: 'LTV Multiplier',
    shortDesc: 'Custom Shopify and headless e-commerce growth systems with sub-second checkout, AOV bundle builders, and WhatsApp automated abandoned cart recovery.',
    metricNum: '3.4X',
    metricLabel: 'Gross Merchandise Value (GMV)',
    turnaround: 'Weekly Sprint Rhythm',
    techStack: ['Shopify Plus & Headless', 'WhatsApp Cart Automation', 'Post-Purchase Upsell Matrix'],
    workflow: [
      { step: '01', title: 'Checkout Friction Elimination', desc: 'Streamline 1-click OTP checkout to slash checkout abandonment.' },
      { step: '02', title: 'AOV Bundle & Cross-Sell Matrix', desc: 'Incentivize higher average order values with smart dynamic tiers.' },
      { step: '03', title: 'WhatsApp Retention Flows', desc: 'Trigger automated order confirmations, delivery tracking, and repeat offers.' },
    ],
  },
  {
    id: 'geo-aeo',
    icon: '🤖',
    title: 'GEO & AEO (AI Engine Optimization)',
    category: 'Next-Gen Discovery',
    stage: 'LLM Citations',
    shortDesc: 'Be the primary cited authority inside ChatGPT, Perplexity, Claude, and Google AI Overviews through semantic entity graphs and authoritative data citations.',
    metricNum: 'Top 3',
    metricLabel: 'AI Engine Citations',
    turnaround: '30-Day Entity Sprint',
    techStack: ['Entity Vector Graphs', 'Knowledge Graph Schema', 'Citation Ingestion Architecture'],
    workflow: [
      { step: '01', title: 'Entity Disambiguation', desc: 'Structure your brand, leadership, and services in Wikidata and semantic schema.' },
      { step: '02', title: 'AI Answer Extraction Format', desc: 'Format core content with direct, factual Q&As optimized for LLM scrapers.' },
      { step: '03', title: 'Authoritative Co-Citation Network', desc: 'Earn citations in industry publications referenced by AI training datasets.' },
    ],
  },
  {
    id: 'cro',
    icon: '🧪',
    title: 'Conversion Rate Optimization (CRO)',
    category: 'Multiplier Engine',
    stage: 'Funnel Multiplier',
    shortDesc: 'Continuous multivariate split testing of headlines, checkout friction, form fields, and trust proof to double conversion rate on your existing ad traffic.',
    metricNum: '+54%',
    metricLabel: 'Conversion Rate Lift',
    turnaround: 'Continuous 14-Day Sprints',
    techStack: ['Hotjar Heatmaps', 'Multivariate Split Testing', 'Post-Click Funnel Tuning'],
    workflow: [
      { step: '01', title: 'Friction Diagnostics', desc: 'Analyze session recordings to identify where visitors hesitate and drop off.' },
      { step: '02', title: 'Hypothesis A/B Testing', desc: 'Deploy bold headline variants, streamlined forms, and localized trust proof.' },
      { step: '03', title: 'Compounded Implementation', desc: 'Permanently bake winning variants into core codebase for compounded gains.' },
    ],
  },
];

export default function GrowthStackOrbit3D() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1); // 1 = normal, 0.5 = slow

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Smooth continuous rotation loop
  const animateOrbit = useCallback((time: number) => {
    if (lastTimeRef.current !== null) {
      const delta = time - lastTimeRef.current;
      if (isPlaying && !isHovered) {
        // Rotate ~10 degrees per second at speed 1
        setRotationAngle((prev) => (prev + (delta * 0.012 * speed)) % 360);
      }
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateOrbit);
  }, [isPlaying, isHovered, speed]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOrbit);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animateOrbit]);

  const activeService = CORE_GROWTH_SERVICES[activeIdx] || CORE_GROWTH_SERVICES[0];

  const rotateStep = (direction: 'left' | 'right') => {
    const step = 360 / CORE_GROWTH_SERVICES.length;
    setRotationAngle((prev) => (direction === 'left' ? prev - step : prev + step));
  };

  return (
    <section className={styles.orbitSection} id="growth-stack">
      <div className={styles.ambientOrbLeft} />
      <div className={styles.ambientOrbRight} />

      <div className="container">
        {/* Header */}
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
              A synchronized 360° suite of performance capabilities orbiting a single central growth partner. No siloed agencies. No dropped handoffs.
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
            <span>◀ Prev Service</span>
          </button>

          <button
            type="button"
            onClick={() => rotateStep('right')}
            className={styles.orbitControlBtn}
            title="Rotate clockwise"
          >
            <span>Next Service ▶</span>
          </button>

          <button
            type="button"
            onClick={() => setSpeed(speed === 1 ? 0.5 : 1)}
            className={styles.orbitControlBtn}
            title="Toggle rotation speed"
          >
            <span>Speed: {speed === 1 ? '1.0x Normal' : '0.5x Gentle'}</span>
          </button>

          <span className={styles.orbitStatusText}>
            💡 Hover any card to pause rotation and inspect capability
          </span>
        </div>

        {/* 3D Orbit Stage */}
        <div
          className={styles.orbitArena}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.orbitStage3D}>
            {/* SVG Elliptical Guide Tracks */}
            <svg className={styles.orbitTrackSvg} viewBox="0 0 860 440">
              <defs>
                <linearGradient id="orbitTrackGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#0B2093" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Outer Orbit Path */}
              <ellipse
                cx="430"
                cy="220"
                rx="350"
                ry="170"
                className={styles.orbitEllipseTrack}
              />

              {/* Inner Guide Ring */}
              <ellipse
                cx="430"
                cy="220"
                rx="240"
                ry="110"
                className={styles.orbitInnerGuide}
              />
            </svg>

            {/* Central Core: Marketing Copilot Engine */}
            <div
              className={styles.centralCoreChassis}
              onClick={() => setActiveIdx(0)}
              title="Marketing Copilot Central Core"
            >
              <div className={styles.coreRingsAura} />
              <div className={styles.coreIconFrame}>🚀</div>
              <div className={styles.coreBrandTitle}>Marketing Copilot</div>
              <div className={styles.coreEngineTag}>GROWTH CORE</div>
            </div>

            {/* Orbiting Service Satellite Nodes (8 Core Services) */}
            {CORE_GROWTH_SERVICES.map((service, idx) => {
              const total = CORE_GROWTH_SERVICES.length;
              const angleDeg = (idx * (360 / total) + rotationAngle) % 360;
              const angleRad = (angleDeg * Math.PI) / 180;

              // Elliptical coordinates with perspective depth
              const radiusX = 350;
              const radiusY = 170;
              const depthZ = 50;

              const x = Math.cos(angleRad) * radiusX;
              const y = Math.sin(angleRad) * radiusY;
              const z = Math.sin(angleRad) * depthZ;

              // Perspective scale: nodes in front (y > 0) are larger and brighter
              const scale = 0.88 + ((y + radiusY) / (radiusY * 2)) * 0.24;
              const opacity = 0.78 + ((y + radiusY) / (radiusY * 2)) * 0.22;
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
                    className={`${styles.orbitNodeCard} ${
                      isSelected ? styles.orbitNodeCardActive : ''
                    }`}
                  >
                    <div className={styles.nodeIconFrame}>{service.icon}</div>
                    <div className={styles.nodeTextMeta}>
                      <span className={styles.nodeStageLabel}>{service.stage}</span>
                      <h4 className={styles.nodeTitleH4}>{service.title}</h4>
                      <span className={styles.nodeMetricPill}>{service.metricNum}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Chiclets Selector Bar (For Instant Direct Selection) */}
        <div className={styles.dockChicletsBar}>
          {CORE_GROWTH_SERVICES.map((service, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
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

        {/* Live Active Capability Cockpit Chassis */}
        <ScrollReveal>
          <div className={styles.telemetryCockpitChassis}>
            {/* Top Bar with Icon, Stage and High-Impact Metric Gauge */}
            <div className={styles.cockpitTopBar}>
              <div className={styles.cockpitIdentity}>
                <div className={styles.cockpitIconFrame}>{activeService.icon}</div>
                <div>
                  <div className={styles.cockpitMetaRow}>
                    <span className={styles.cockpitCategoryTag}>{activeService.category}</span>
                    <span className={styles.cockpitStageTag}>&bull; {activeService.stage}</span>
                  </div>
                  <h3 className={styles.cockpitTitleH3}>{activeService.title}</h3>
                </div>
              </div>

              <div className={styles.cockpitMetricGauge}>
                <div className={styles.metricCol}>
                  <div className={styles.metricNumBig}>{activeService.metricNum}</div>
                  <div className={styles.metricLabelSub}>{activeService.metricLabel}</div>
                </div>

                <div className={styles.metricCol}>
                  <div className={styles.metricNumBig} style={{ color: '#0B2093', fontSize: '18px' }}>
                    {activeService.turnaround}
                  </div>
                  <div className={styles.metricLabelSub}>Sprint Cadence</div>
                </div>
              </div>
            </div>

            {/* Capability Description */}
            <p className={styles.cockpitBodyDesc}>{activeService.shortDesc}</p>

            {/* 3-Step Execution Workflow Grid */}
            <div className={styles.workflowSection}>
              <div className={styles.workflowHeaderLabel}>
                <span>⚙️ Execution Sprints &amp; Deliverables</span>
              </div>
              <div className={styles.workflowGrid}>
                {activeService.workflow.map((wf) => (
                  <div key={wf.step} className={styles.workflowCard}>
                    <span className={styles.stepNumBadge}>STEP {wf.step}</span>
                    <h5 className={styles.stepTitle}>{wf.title}</h5>
                    <p className={styles.stepDesc}>{wf.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips & Action Button */}
            <div className={styles.cockpitFooterStrip}>
              <div className={styles.techStackChipsWrap}>
                <span className={styles.techStackTitle}>Integrated Stack:</span>
                {activeService.techStack.map((tech) => (
                  <span key={tech} className={styles.techChip}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/919437168434?text=${encodeURIComponent(
                  `Hi Marketing Copilot, I would like to discuss deploying your ${activeService.title} capability for my business.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cockpitActionBtn}
              >
                <span>Deploy This Capability →</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
