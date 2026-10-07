'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SERPSimulator.module.css';

interface CorridorPreset {
  id: string;
  name: string;
  pin: string;
  query: string;
  clientTitle: string;
  url: string;
  description: string;
  reviewsCount: number;
  rating: number;
  phone: string;
  address: string;
  tags: string[];
}

const presets: CorridorPreset[] = [
  {
    id: 'patia',
    name: 'Patia Corridor',
    pin: '751024',
    query: 'best luxury interior designer in patia bhubaneswar',
    clientTitle: 'Utkal Royal Living — Bespoke Interior Architecture Patia',
    url: 'https://utkalroyal.com/interior-design-patia',
    description: 'Award-winning luxury interior design & architectural styling in Patia, Bhubaneswar. 240+ completed villas, apartments & commercial penthouses. Book your private design consultation today.',
    reviewsCount: 148,
    rating: 4.9,
    phone: '+91 94371 68434',
    address: 'Near KIIT Square, Patia, Bhubaneswar, Odisha 751024',
    tags: ['Google 3-Pack Verified', 'Schema Validated', 'Local Intent Rank #1'],
  },
  {
    id: 'saheed-nagar',
    name: 'Saheed Nagar Hub',
    pin: '751007',
    query: 'top cosmetic dental clinic in saheed nagar',
    clientTitle: 'Elite Dental Aesthetics — Saheed Nagar Bhubaneswar',
    url: 'https://elitedentalbbsr.com/saheed-nagar',
    description: 'Advanced painless implants, invisible aligners & smile makeovers in Saheed Nagar. Led by senior MDS specialists with digital 3D scans. Instant appointment booking available.',
    reviewsCount: 212,
    rating: 5.0,
    phone: '+91 94371 68434',
    address: 'Janpath Road, Saheed Nagar, Bhubaneswar, Odisha 751007',
    tags: ['Medical Schema Active', 'Instant Appointment Booking', 'Top Ranked Clinic'],
  },
  {
    id: 'infocity',
    name: 'Infocity Tech Hub',
    pin: '751024',
    query: 'cloud enterprise software company in infocity bhubaneswar',
    clientTitle: 'Nexora Cloud Technologies — Enterprise Solutions Infocity',
    url: 'https://nexoracloud.com/enterprise-solutions',
    description: 'Scalable cloud infrastructure, AI automation & dedicated offshore engineering teams based in Infocity, Bhubaneswar. Serving global Fortune 500 enterprises.',
    reviewsCount: 86,
    rating: 4.8,
    phone: '+91 94371 68434',
    address: 'DLF Cybercity, Infocity, Chandrasekharpur, Bhubaneswar 751024',
    tags: ['B2B Intent Monopolized', 'Global Client Inquiries', 'Organic Domain Rating 64'],
  },
];

export default function SERPSimulator() {
  const [activeTab, setActiveTab] = useState<'organic' | 'map'>('organic');
  const [activePreset, setActivePreset] = useState<CorridorPreset>(presets[0]);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.livePulse} />
            <span>Interactive Algorithmic Telemetry</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Live SERP &amp; Google 3-Pack <span className="accent-gradient">Simulation Console</span>
          </h2>
          <p className={styles.subhead}>
            Experience how our technical SEO and hyperlocal geo-schema propel your Bhubaneswar business to the absolute #1 position in real user searches.
          </p>
        </ScrollReveal>

        {/* Interactive Controls Bar */}
        <div className={styles.controlsRow}>
          {/* Corridor Preset Chips */}
          <div className={styles.corridorChips}>
            <span className={styles.controlLabel}>Select Corridor:</span>
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className={`${styles.presetBtn} ${activePreset.id === preset.id ? styles.presetBtnActive : ''}`}
                onClick={() => setActivePreset(preset)}
              >
                <span>{preset.name}</span>
                <span className={styles.pinBadge}>{preset.pin}</span>
              </button>
            ))}
          </div>

          {/* SERP View Switcher */}
          <div className={styles.viewSwitcher}>
            <button
              type="button"
              className={`${styles.viewBtn} ${activeTab === 'organic' ? styles.viewBtnActive : ''}`}
              onClick={() => setActiveTab('organic')}
            >
              <span className={styles.googleGLogo}>G</span>
              <span>Organic SERP #1</span>
            </button>
            <button
              type="button"
              className={`${styles.viewBtn} ${activeTab === 'map' ? styles.viewBtnActive : ''}`}
              onClick={() => setActiveTab('map')}
            >
              <span className={styles.mapPinIcon}>📍</span>
              <span>Google Maps 3-Pack</span>
            </button>
          </div>
        </div>

        {/* Simulated Browser / Search Interface Terminal */}
        <div className={styles.terminalWindow}>
          {/* Top Browser Bar */}
          <div className={styles.browserHeader}>
            <div className={styles.windowDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.searchBar}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className={styles.searchQueryText}>{activePreset.query}</span>
              <span className={styles.geoLocTag}>Bhubaneswar, Odisha · Exact</span>
            </div>
            <div className={styles.rankVerifiedPill}>
              <span className={styles.emeraldCheck}>✓</span>
              <span>Rank #1 Verified</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className={styles.terminalBody}>
            {activeTab === 'organic' ? (
              /* Organic SERP Result View */
              <div className={styles.serpResult}>
                {/* Result Meta & Breadcrumbs */}
                <div className={styles.resultBreadcrumb}>
                  <div className={styles.faviconCircle}>MC</div>
                  <div className={styles.urlCol}>
                    <span className={styles.siteDisplayName}>Marketing Copilot Client</span>
                    <span className={styles.fullUrl}>{activePreset.url}</span>
                  </div>
                  <span className={styles.rankTagPill}>#1 Position · 39.4% Click Share</span>
                </div>

                {/* Clickable Headline */}
                <h3 className={styles.serpTitle}>
                  {activePreset.clientTitle}
                </h3>

                {/* Star Rating Rich Snippet */}
                <div className={styles.ratingSnippet}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.ratingScore}>{activePreset.rating}</span>
                  <span className={styles.reviewsCount}>({activePreset.reviewsCount} verified Google reviews)</span>
                  <span className={styles.snippetDivider}>·</span>
                  <span className={styles.snippetBadge}>Google Verified Business Profile</span>
                </div>

                {/* Meta Description */}
                <p className={styles.serpDescription}>
                  {activePreset.description}
                </p>

                {/* Rich Sitelinks Grid */}
                <div className={styles.sitelinksGrid}>
                  <div className={styles.sitelinkItem}>
                    <span className={styles.sitelinkTitle}>View Signature Portfolio</span>
                    <span className={styles.sitelinkDesc}>Explore 200+ completed projects in India</span>
                  </div>
                  <div className={styles.sitelinkItem}>
                    <span className={styles.sitelinkTitle}>Free Consultation &amp; Estimate</span>
                    <span className={styles.sitelinkDesc}>Schedule a direct 1-on-1 strategy session</span>
                  </div>
                  <div className={styles.sitelinkItem}>
                    <span className={styles.sitelinkTitle}>Client Reviews &amp; Testimonials</span>
                    <span className={styles.sitelinkDesc}>Verified stories from Patia &amp; Saheed Nagar</span>
                  </div>
                  <div className={styles.sitelinkItem}>
                    <span className={styles.sitelinkTitle}>Pricing &amp; Project Timelines</span>
                    <span className={styles.sitelinkDesc}>Transparent budgets with zero surprise costs</span>
                  </div>
                </div>

                {/* Schema & Algorithmic Badges */}
                <div className={styles.algorithmicTags}>
                  {activePreset.tags.map((tag) => (
                    <span key={tag} className={styles.algoTag}>
                      ✓ {tag}
                    </span>
                  ))}
                  <span className={styles.algoSpeedTag}>⚡ Core Web Vitals LCP 0.7s (Pass)</span>
                </div>
              </div>
            ) : (
              /* Google Maps 3-Pack View */
              <div className={styles.mapPackView}>
                <div className={styles.mapPackHeader}>
                  <div className={styles.mapPackBadge}>
                    <span className={styles.mapPinEmerald}>📍</span>
                    <span>Google Maps Hyperlocal 3-Pack · Top Verified Pin</span>
                  </div>
                  <span className={styles.mapRadiusText}>Serving within 8km radius of {activePreset.name}</span>
                </div>

                <div className={styles.mapCardGrid}>
                  {/* Business Card Preview */}
                  <div className={styles.localBizCard}>
                    <div className={styles.bizRankBadge}>#1 TOP RECOMMENDATION</div>
                    <h3 className={styles.bizName}>{activePreset.clientTitle}</h3>
                    
                    <div className={styles.bizRatingRow}>
                      <span className={styles.ratingNumber}>{activePreset.rating}</span>
                      <span className={styles.stars}>★★★★★</span>
                      <span className={styles.bizReviewCount}>({activePreset.reviewsCount})</span>
                      <span className={styles.bizCategory}>· Professional Services</span>
                    </div>

                    <div className={styles.bizInfoRow}>
                      <span className={styles.statusOpen}>Open now</span>
                      <span className={styles.bizHours}>· Closes 8:00 PM</span>
                      <span className={styles.bizAddress}>{activePreset.address}</span>
                    </div>

                    <p className={styles.bizHighlight}>
                      &quot;Their team ranked our business on Google Maps in 60 days. Inbound phone calls increased by over 200%.&quot;
                    </p>

                    <div className={styles.bizActions}>
                      <a href={`tel:${activePreset.phone}`} className={styles.bizActionBtnPrimary}>
                        <span>📞</span>
                        <span>Call Business</span>
                      </a>
                      <a href="#map" className={styles.bizActionBtnSecondary}>
                        <span>📍</span>
                        <span>Directions</span>
                      </a>
                      <Link href="/contact" className={styles.bizActionBtnWebsite}>
                        <span>🌐</span>
                        <span>Website</span>
                      </Link>
                    </div>
                  </div>

                  {/* Simulated Telemetry Metrics Box */}
                  <div className={styles.localStatsBox}>
                    <div className={styles.statsBoxTitle}>Local Search Velocity (Past 30 Days)</div>
                    <div className={styles.localStatRow}>
                      <span className={styles.statLabel}>Direct Phone Inquiries</span>
                      <span className={styles.statValHighlight}>+184 Calls</span>
                    </div>
                    <div className={styles.localStatRow}>
                      <span className={styles.statLabel}>Google Maps Driving Requests</span>
                      <span className={styles.statVal}>312 Visits</span>
                    </div>
                    <div className={styles.localStatRow}>
                      <span className={styles.statLabel}>Website Clicks from GBP</span>
                      <span className={styles.statVal}>890 Clicks</span>
                    </div>
                    <div className={styles.localStatRow}>
                      <span className={styles.statLabel}>Local Search Discovery Share</span>
                      <span className={styles.statValGreen}>76.4% Domination</span>
                    </div>
                    <div className={styles.statNote}>
                      Telemetry tracked via Google Business Profile Insights &amp; CallRail DNI attribution.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar of Simulator */}
          <div className={styles.terminalFooter}>
            <div className={styles.footerNote}>
              <span className={styles.terminalGreenDot} />
              <span>Simulated algorithm: Google Helpful Content System &amp; Local Vicinity Neural Core</span>
            </div>
            <Link href="/contact" className={styles.footerCta}>
              <span>Audit Your Bhubaneswar Google Rankings Now</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
