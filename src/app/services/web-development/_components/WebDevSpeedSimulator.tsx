'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './WebDevSpeedSimulator.module.css';

type StackType = 'nextjs' | 'wordpress' | 'ecommerce';

export default function WebDevSpeedSimulator() {
  const [activeStack, setActiveStack] = useState<StackType>('nextjs');
  const [tested, setTested] = useState(false);

  const handleTest = () => {
    setTested(true);
    setTimeout(() => setTested(false), 2000);
  };

  const stackDetails = {
    nextjs: {
      score: 99,
      lcp: '0.6s',
      fcp: '0.4s',
      inp: '18ms',
      cls: '0.00',
      bounceRate: '14%',
      conversionLift: '+280%',
      architecture: 'Next.js 15 · React 19 · Server Components · Vercel Edge',
      summary: 'Instantaneous sub-second rendering. Zero client hydration delays, zero layout shifts, and native edge caching in Mumbai & Hyderabad nodes.',
    },
    wordpress: {
      score: 34,
      lcp: '4.8s',
      fcp: '3.1s',
      inp: '340ms',
      cls: '0.24',
      bounceRate: '68%',
      conversionLift: '-45%',
      architecture: 'Legacy PHP 8 · 28 Bloated Plugins · Shared Server Hosting',
      summary: 'Heavy render-blocking CSS, slow database SQL queries, and bloated JavaScript causing 68% of mobile visitors to bounce before the page loads.',
    },
    ecommerce: {
      score: 98,
      lcp: '0.7s',
      fcp: '0.5s',
      inp: '22ms',
      cls: '0.01',
      bounceRate: '18%',
      conversionLift: '+340%',
      architecture: 'Headless Next.js Shopify / Custom · Instant UPI Checkout · Redis Caching',
      summary: 'Sub-second product catalog browsing, instant Razorpay / Cashfree UPI 1-click checkout, and automated abandoned cart recovery directly on WhatsApp.',
    },
  };

  const current = stackDetails[activeStack];

  return (
    <section className={styles.section} id="speed-lab">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.pulseDot} />
            <span>Interactive Speed &amp; Architecture Lab</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Sub-Second Speed That <span className="accent-gradient">Captures High-Intent Buyers</span>
          </h2>
          <p className={styles.subhead}>
            Every 100ms of latency costs 7% in sales. Compare how Marketing Copilot Next.js architecture outperforms traditional bloated WordPress agency templates.
          </p>
        </ScrollReveal>

        {/* Stack Switcher Tabs */}
        <div className={styles.stackSwitcher}>
          <button
            type="button"
            className={`${styles.stackBtn} ${activeStack === 'nextjs' ? styles.stackBtnActive : ''}`}
            onClick={() => setActiveStack('nextjs')}
          >
            <span>⚡ Marketing Copilot Next.js 15</span>
            <span className={styles.scoreBadge}>99/100 Score</span>
          </button>

          <button
            type="button"
            className={`${styles.stackBtn} ${activeStack === 'ecommerce' ? styles.stackBtnActive : ''}`}
            onClick={() => setActiveStack('ecommerce')}
          >
            <span>🛍️ High-Speed D2C E-Commerce</span>
            <span className={styles.scoreBadge}>Instant Checkout</span>
          </button>

          <button
            type="button"
            className={`${styles.stackBtn} ${activeStack === 'wordpress' ? styles.stackBtnActive : ''}`}
            onClick={() => setActiveStack('wordpress')}
          >
            <span>🐌 Traditional Agency WordPress</span>
            <span className={styles.scoreBadgeRed}>34/100 Slow</span>
          </button>
        </div>

        {/* Simulator Console Stage */}
        <div className={styles.stageConsole}>
          {/* Left Column: Device Viewport Simulation */}
          <div className={styles.deviceCol}>
            <div className={styles.browserFrame}>
              <div className={styles.browserHeader}>
                <div className={styles.browserDots}>
                  <span className={styles.bDotRed} />
                  <span className={styles.bDotYellow} />
                  <span className={styles.bDotGreen} />
                </div>
                <div className={styles.browserUrlBar}>
                  <span className={styles.lockIcon}>🔒</span>
                  <span>https://yourbusiness.in/bhubaneswar</span>
                  <span className={styles.speedPill} style={{ background: activeStack === 'wordpress' ? '#EF4444' : '#10B981' }}>
                    {activeStack === 'wordpress' ? 'SLOW: 4.8s' : 'FAST: 0.6s'}
                  </span>
                </div>
              </div>

              {/* Viewport Content */}
              <div className={styles.viewportBody}>
                <div className={styles.siteHeaderMock}>
                  <div className={styles.siteLogoMock}>BRAND·BBSR</div>
                  <div className={styles.siteNavMock}>
                    <span>Services</span>
                    <span>Projects</span>
                    <span className={styles.siteCtaMock}>Contact Us</span>
                  </div>
                </div>

                <div className={styles.heroMock}>
                  <span className={styles.heroPillMock}>NATIONAL EXPANSION</span>
                  <div className={styles.heroTitleMock}>
                    {activeStack === 'wordpress' ? (
                      'Loading assets... please wait (4.8s)'
                    ) : (
                      'Capture High-Value Clients Across India with Instant Speed'
                    )}
                  </div>
                  <div className={styles.heroSubMock}>
                    {activeStack === 'wordpress'
                      ? 'Waiting for 28 external plugin scripts, uncompressed images, and render-blocking CSS.'
                      : 'Zero layout shift. Server-side pre-rendered HTML delivered from nearest Edge CDN node in under 600ms.'}
                  </div>

                  <div className={styles.heroBtnsMock}>
                    <div className={styles.btnPrimaryMock}>Book Consultation →</div>
                    <div className={styles.btnSecMock}>WhatsApp Us</div>
                  </div>
                </div>

                {/* Telemetry Bar inside viewport */}
                <div className={styles.viewportTelemetry}>
                  <div className={styles.telemetryItem}>
                    <span className={styles.telKey}>Network</span>
                    <span className={styles.telVal}>Jio 5G Bhubaneswar</span>
                  </div>
                  <div className={styles.telemetryItem}>
                    <span className={styles.telKey}>TTFB</span>
                    <span className={styles.telVal}>{activeStack === 'wordpress' ? '920ms' : '32ms'}</span>
                  </div>
                  <div className={styles.telemetryItem}>
                    <span className={styles.telKey}>Core Web Vitals</span>
                    <span className={styles.telVal} style={{ color: activeStack === 'wordpress' ? '#EF4444' : '#10B981' }}>
                      {activeStack === 'wordpress' ? 'FAILING' : 'ALL PASSING'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Forensic Metrics & Commercial Impact */}
          <div className={styles.telemetryCol}>
            <div className={styles.scoreRow}>
              <div className={styles.scoreRingBox}>
                <div
                  className={styles.scoreCircle}
                  style={{
                    borderColor: activeStack === 'wordpress' ? '#EF4444' : '#10B981',
                    boxShadow: activeStack === 'wordpress' ? '0 0 20px rgba(239, 68, 68, 0.3)' : '0 0 20px rgba(16, 185, 129, 0.35)',
                  }}
                >
                  <span className={styles.scoreNum} style={{ color: activeStack === 'wordpress' ? '#EF4444' : '#10B981' }}>
                    {current.score}
                  </span>
                  <span className={styles.scoreMax}>/100</span>
                </div>
                <div className={styles.scoreMeta}>
                  <span className={styles.scoreGrade}>
                    {activeStack === 'wordpress' ? 'Poor Speed Grade' : 'Flawless 99+ Core Web Vitals'}
                  </span>
                  <span className={styles.scoreAuditor}>Google PageSpeed Insights Verified</span>
                </div>
              </div>

              <button
                type="button"
                className={styles.runTestBtn}
                onClick={handleTest}
                disabled={tested}
              >
                <span>{tested ? 'Benchmarking 5G...' : '⚡ Re-Run Benchmark'}</span>
              </button>
            </div>

            {/* Metrics Matrix */}
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <span className={styles.mKey}>Largest Contentful Paint</span>
                <span className={styles.mVal} style={{ color: activeStack === 'wordpress' ? '#EF4444' : '#10B981' }}>
                  {current.lcp}
                </span>
                <span className={styles.mStatus}>{activeStack === 'wordpress' ? 'Very Slow' : 'Instant (< 0.8s)'}</span>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.mKey}>Interaction to Next Paint</span>
                <span className={styles.mVal} style={{ color: activeStack === 'wordpress' ? '#EF4444' : '#10B981' }}>
                  {current.inp}
                </span>
                <span className={styles.mStatus}>{activeStack === 'wordpress' ? 'Laggy Clicks' : 'Sub-50ms Reactivity'}</span>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.mKey}>Cumulative Layout Shift</span>
                <span className={styles.mVal} style={{ color: activeStack === 'wordpress' ? '#EF4444' : '#10B981' }}>
                  {current.cls}
                </span>
                <span className={styles.mStatus}>{activeStack === 'wordpress' ? 'Jarring Jumps' : 'Zero Shift'}</span>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.mKey}>Visitor Bounce Rate</span>
                <span className={styles.mVal} style={{ color: activeStack === 'wordpress' ? '#EF4444' : '#10B981' }}>
                  {current.bounceRate}
                </span>
                <span className={styles.mStatus}>{activeStack === 'wordpress' ? 'Losing Customers' : 'High Retention'}</span>
              </div>
            </div>

            {/* Tech Architecture Description */}
            <div className={styles.archBox}>
              <div className={styles.archTitleRow}>
                <span className={styles.archBadge}>DEPLOYED STACK</span>
                <span className={styles.archStackName}>{current.architecture}</span>
              </div>
              <p className={styles.archSummary}>{current.summary}</p>
            </div>

            {/* Action CTA */}
            <div className={styles.actionRow}>
              <Link href="/contact" className={styles.auditBtn}>
                <span>Claim Free Speed &amp; Code Audit</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
