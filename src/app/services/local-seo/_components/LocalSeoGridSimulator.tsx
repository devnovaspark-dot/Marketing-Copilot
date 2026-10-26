'use client';

import React, { useState } from 'react';
import BeamButton from '@/components/BeamButton';
import styles from './LocalSeoGridSimulator.module.css';

interface IndustryProfile {
  id: string;
  name: string;
  icon: string;
  query: string;
  targetCity: string;
  corridor: string;
  // Before State
  beforeName: string;
  beforeRating: number;
  beforeReviews: number;
  beforeRank: string;
  beforeCalls: string;
  beforeDirections: string;
  beforeRevenue: string;
  beforeAlerts: string[];
  // After State
  afterName: string;
  afterRating: number;
  afterReviews: number;
  afterRank: string;
  afterCalls: string;
  afterDirections: string;
  afterRevenue: string;
  afterWins: string[];
  // Competitors
  comp1Name: string;
  comp1Meta: string;
  comp2Name: string;
  comp2Meta: string;
}

const INDUSTRIES: IndustryProfile[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Dental',
    icon: '🩺',
    query: 'Best Dental & Multispeciality Clinic Near Me',
    targetCity: 'Delhi NCR',
    corridor: 'Connaught Place & South Extension',
    // Before
    beforeName: 'Central Care Dental Studio',
    beforeRating: 3.8,
    beforeReviews: 24,
    beforeRank: 'Rank #7 (Page 2 - Below Fold)',
    beforeCalls: '18 calls / mo',
    beforeDirections: '34 clicks / mo',
    beforeRevenue: '₹1.8 Lakhs / mo',
    beforeAlerts: [
      'Inconsistent clinic address across Justdial, Practo & Google',
      'Zero localized schema or geotagged dental surgery photos',
      'Negative reviews unaddressed; 3.8★ rating repels high-value patients',
    ],
    // After
    afterName: 'Apex Multispeciality & Dental Hospital',
    afterRating: 4.9,
    afterReviews: 486,
    afterRank: 'Rank #1 Featured in 3-Pack',
    afterCalls: '460+ calls / mo',
    afterDirections: '820+ clicks / mo',
    afterRevenue: '₹24.5 Lakhs / mo',
    afterWins: [
      '60+ Tier-1 healthcare directories synced with 100% NAP lock',
      'Automated WhatsApp post-appointment 5★ review acceleration',
      '500m proximity expansion capturing searches up to 8km away',
    ],
    // Competitors
    comp1Name: 'City Central Dental Care',
    comp1Meta: '4.2 ★★★★☆ (64 reviews) · 2.1 km away · Open until 8 PM',
    comp2Name: 'Care Dental & Smile Studio',
    comp2Meta: '3.9 ★★★☆☆ (38 reviews) · 3.4 km away · Closes soon',
  },
  {
    id: 'legal',
    name: 'Corporate & Legal',
    icon: '⚖️',
    query: 'Top Corporate Lawyer & Legal Firm Near Me',
    targetCity: 'Mumbai',
    corridor: 'Bandra Kurla Complex (BKC) & Nariman Point',
    // Before
    beforeName: 'National Legal Chambers',
    beforeRating: 3.9,
    beforeReviews: 19,
    beforeRank: 'Rank #9 (Page 2 - Zero Phone Calls)',
    beforeCalls: '12 inquiries / mo',
    beforeDirections: '22 clicks / mo',
    beforeRevenue: '₹3.2 Lakhs / mo',
    beforeAlerts: [
      'Duplicate listings created by former associates diluting authority',
      'Missing corporate practice service area citations and legal schema',
      'Outranked by single-practitioner competitors with better review velocity',
    ],
    // After
    afterName: 'Apex Corporate Law & Advisory Chambers',
    afterRating: 5.0,
    afterReviews: 320,
    afterRank: 'Rank #1 Map 3-Pack Leader',
    afterCalls: '310+ retainers / mo',
    afterDirections: '540+ clicks / mo',
    afterRevenue: '₹38.0 Lakhs / mo',
    afterWins: [
      'Google Verified Knowledge Graph & verified corporate attorney badges',
      'Complete consolidation and elimination of duplicate local listings',
      'Hyperlocal M&A and corporate advisory landing pages indexed #1',
    ],
    // Competitors
    comp1Name: 'Metro Legal Associates',
    comp1Meta: '4.1 ★★★★☆ (48 reviews) · 1.8 km away · Closes 7 PM',
    comp2Name: 'South Mumbai Advocates Group',
    comp2Meta: '3.7 ★★★☆☆ (22 reviews) · 2.9 km away · Unverified',
  },
  {
    id: 'b2b',
    name: 'B2B & Digital',
    icon: '🏢',
    query: 'Performance Marketing & SEO Agency Near Me',
    targetCity: 'Bengaluru',
    corridor: 'Koramangala, Indiranagar & HSR Layout',
    // Before
    beforeName: 'Creative Media Ads Co.',
    beforeRating: 4.0,
    beforeReviews: 31,
    beforeRank: 'Rank #8 (Lost in Tech Corridor)',
    beforeCalls: '14 calls / mo',
    beforeDirections: '28 clicks / mo',
    beforeRevenue: '₹2.4 Lakhs / mo',
    beforeAlerts: [
      'Buried behind 7 aggressive competitors in high-density tech corridor',
      'No geotagged office photos or verified business category hierarchy',
      'Slow response time on Google Business chat losing warm enterprise leads',
    ],
    // After
    afterName: 'Marketing Copilot Regional Growth Hub',
    afterRating: 4.9,
    afterReviews: 410,
    afterRank: 'Rank #1 3-Pack Lockdown',
    afterCalls: '390+ qualified leads / mo',
    afterDirections: '680+ visits / mo',
    afterRevenue: '₹32.0 Lakhs / mo',
    afterWins: [
      '100% Google 3-Pack Share of Voice across 5 metro corridors',
      'Automated client case study updates directly in Google Posts feed',
      '0.8-second average click-to-call response rate signaling dominance',
    ],
    // Competitors
    comp1Name: 'Generic Digital Growth Co',
    comp1Meta: '4.3 ★★★★☆ (72 reviews) · 1.6 km away · Open until 8 PM',
    comp2Name: 'Tech Hub Web Ads',
    comp2Meta: '4.0 ★★★★☆ (45 reviews) · 2.7 km away · Closed',
  },
  {
    id: 'retail',
    name: 'Luxury Retail & Interiors',
    icon: '🛍️',
    query: 'Luxury Architecture & Interior Design Studio Near Me',
    targetCity: 'Hyderabad & Pune',
    corridor: 'Jubilee Hills & Baner High Street',
    // Before
    beforeName: 'Classic Home Décor & Interiors',
    beforeRating: 3.7,
    beforeReviews: 16,
    beforeRank: 'Rank #11 (Page 2 - Zero Walk-ins)',
    beforeCalls: '9 visits / mo',
    beforeDirections: '18 clicks / mo',
    beforeRevenue: '₹4.5 Lakhs / mo',
    beforeAlerts: [
      'High-ticket luxury clients never search past the Google Map 3-Pack',
      'Unoptimized low-res gallery photos failing to showcase premium finishes',
      'Missing Google Map product catalog and 3D virtual tour integration',
    ],
    // After
    afterName: 'Luxe Living Architecture & Interior Studio',
    afterRating: 4.9,
    afterReviews: 360,
    afterRank: 'Rank #1 Luxury Map 3-Pack Leader',
    afterCalls: '280+ consultations / mo',
    afterDirections: '740+ showroom walk-ins / mo',
    afterRevenue: '₹54.0 Lakhs / mo',
    afterWins: [
      'Integrated Google 3D virtual showroom tour generating 14,000+ views',
      'Automated luxury homeowner review capture with photo upload prompts',
      'High-intent "luxury interior designer" queries locked at #1 across metro radius',
    ],
    // Competitors
    comp1Name: 'Modern Space Décor Studio',
    comp1Meta: '4.2 ★★★★☆ (52 reviews) · 2.4 km away · Open until 9 PM',
    comp2Name: 'Urban Home Furnishings',
    comp2Meta: '3.8 ★★★☆☆ (30 reviews) · 3.5 km away · Closes 8 PM',
  },
];

export default function LocalSeoGridSimulator() {
  const [activeMode, setActiveMode] = useState<'transform' | 'serp'>('transform');
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('healthcare');

  const currentProfile = INDUSTRIES.find(ind => ind.id === selectedIndustryId) || INDUSTRIES[0];

  return (
    <section className={styles.dominanceSection} id="grid-simulator">
      <div className="container">
        <div className={styles.engineCard}>
          {/* Header */}
          <div className={styles.engineHeader}>
            <div className={styles.eyebrowPill}>
              <span className={styles.pulseDot} />
              <span>THE LOCAL SEO ACCELERATOR</span>
            </div>
            <h2 className={styles.engineTitle}>
              Google Map 3-Pack Dominance Engine
            </h2>
            <p className={styles.engineSub}>
              Over 84% of all local phone calls, directions, and walk-ins go exclusively to the top 3 Google Map listings. See how we turn invisible businesses into dominant #1 market leaders across India.
            </p>
          </div>

          {/* Interactive Navigation Row: Mode Switcher + Industry Selector */}
          <div className={styles.navRow}>
            {/* View Mode Toggle */}
            <div className={styles.modeToggleGroup}>
              <button
                type="button"
                onClick={() => setActiveMode('transform')}
                className={`${styles.modeBtn} ${activeMode === 'transform' ? styles.modeBtnActive : ''}`}
              >
                <span>🔄</span>
                <span>Before vs. After 3-Pack</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('serp')}
                className={`${styles.modeBtn} ${activeMode === 'serp' ? styles.modeBtnActive : ''}`}
              >
                <span>🗺️</span>
                <span>Live Google 3-Pack SERP</span>
              </button>
            </div>

            {/* Industry Selector Chips */}
            <div className={styles.industryChips}>
              {INDUSTRIES.map((ind) => {
                const isActive = selectedIndustryId === ind.id;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setSelectedIndustryId(ind.id)}
                    className={`${styles.chipBtn} ${isActive ? styles.chipBtnActive : ''}`}
                  >
                    <span>{ind.icon}</span>
                    <span>{ind.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════
              VIEW 1: BEFORE VS. AFTER TRANSFORMATION (DEFAULT)
             ══════════════════════════════════════════════════ */}
          {activeMode === 'transform' && (
            <div>
              <div className={styles.transformGrid}>
                {/* 🔴 Left: Before (Page 2 & Below) */}
                <div className={styles.beforeCard}>
                  <div>
                    <div className={styles.cardHeaderRow}>
                      <span className={styles.badgeBefore}>
                        ⚠️ Invisible to 84% of Customers
                      </span>
                      <span className={styles.badgeRankLost}>
                        Page 2 Result
                      </span>
                    </div>

                    <div className={styles.listingBoxBefore}>
                      <h4 className={styles.listingTitleBefore}>
                        {currentProfile.beforeName}
                      </h4>
                      <div className={styles.starsBefore}>
                        <span>★ {currentProfile.beforeRating}</span>
                        <span>({currentProfile.beforeReviews} Reviews)</span>
                        <span>· {currentProfile.beforeRank}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>
                        {currentProfile.corridor}, {currentProfile.targetCity}
                      </div>

                      <div className={styles.alertList}>
                        {currentProfile.beforeAlerts.map((alert, idx) => (
                          <div key={idx} className={styles.alertItem}>
                            <span>✕</span>
                            <span>{alert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.metricStripBefore}>
                    <div className={styles.metricCellBefore}>
                      <div className={styles.cellValBefore}>{currentProfile.beforeCalls}</div>
                      <div className={styles.cellLabelBefore}>Inbound Calls</div>
                    </div>
                    <div className={styles.metricCellBefore}>
                      <div className={styles.cellValBefore}>{currentProfile.beforeDirections}</div>
                      <div className={styles.cellLabelBefore}>Direction Clicks</div>
                    </div>
                    <div className={styles.metricCellBefore}>
                      <div className={styles.cellValBefore}>{currentProfile.beforeRevenue}</div>
                      <div className={styles.cellLabelBefore}>Est. Revenue</div>
                    </div>
                  </div>
                </div>

                {/* 🟢 Right: After (Copilot #1 Map 3-Pack Leader) */}
                <div className={styles.afterCard}>
                  <div>
                    <div className={styles.cardHeaderRow}>
                      <span className={styles.badgeAfter}>
                        ✓ 3-Pack Lockdown Active
                      </span>
                      <span className={styles.badgeRankWon}>
                        Rank #1 Leader
                      </span>
                    </div>

                    <div className={styles.listingBoxAfter}>
                      <h4 className={styles.listingTitleAfter}>
                        {currentProfile.afterName}
                      </h4>
                      <div className={styles.starsAfter}>
                        <span style={{ color: '#F59E0B' }}>★★★★★ {currentProfile.afterRating}</span>
                        <span style={{ color: '#64748B', fontWeight: 600 }}>({currentProfile.afterReviews}+ Verified Reviews)</span>
                        <span style={{ color: '#059669', fontWeight: 800 }}>· Open 24 Hours</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#475569', marginBottom: 6 }}>
                        {currentProfile.corridor}, {currentProfile.targetCity}
                      </div>

                      <div className={styles.actionsAfter}>
                        <span className={styles.callPill}>
                          📞 Call (96% Capture)
                        </span>
                        <span className={styles.dirPill}>
                          🧭 Directions (+340%)
                        </span>
                        <span className={styles.dirPill}>
                          🌐 Website
                        </span>
                      </div>

                      <div className={styles.winList}>
                        {currentProfile.afterWins.map((win, idx) => (
                          <div key={idx} className={styles.winItem}>
                            <span>✓</span>
                            <span>{win}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.metricStripAfter}>
                    <div className={styles.metricCellAfter}>
                      <div className={styles.cellValAfter}>{currentProfile.afterCalls}</div>
                      <div className={styles.cellLabelAfter}>Inbound Calls</div>
                    </div>
                    <div className={styles.metricCellAfter}>
                      <div className={styles.cellValAfter}>{currentProfile.afterDirections}</div>
                      <div className={styles.cellLabelAfter}>Direction Clicks</div>
                    </div>
                    <div className={styles.metricCellAfter}>
                      <div className={styles.cellValAfter}>{currentProfile.afterRevenue}</div>
                      <div className={styles.cellLabelAfter}>Monthly Revenue</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transformation Lift Summary Ribbon */}
              <div className={styles.transformSummaryBar}>
                <div className={styles.summaryCol}>
                  <div className={styles.summaryNum}>+2,450%</div>
                  <div className={styles.summaryLabel}>Inbound Call Velocity</div>
                </div>
                <div className={styles.summaryCol}>
                  <div className={styles.summaryNum}>+2,310%</div>
                  <div className={styles.summaryLabel}>Driving Directions</div>
                </div>
                <div className={styles.summaryCol}>
                  <div className={styles.summaryNum} style={{ color: '#059669' }}>
                    3.8★ → 4.9★
                  </div>
                  <div className={styles.summaryLabel}>Reputation Score</div>
                </div>
                <div className={styles.summaryCol}>
                  <div className={styles.summaryNum} style={{ color: '#F59E0B' }}>
                    13.6x
                  </div>
                  <div className={styles.summaryLabel}>Average ROI Multiple</div>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════
              VIEW 2: REAL GOOGLE MAPS 3-PACK SERP & ANATOMY
             ══════════════════════════════════════════════════ */}
          {activeMode === 'serp' && (
            <div className={styles.serpGrid}>
              {/* Left: Authentic Google Maps 3-Pack SERP Mock */}
              <div className={styles.serpBox}>
                <div>
                  <div className={styles.googleSearchInput}>
                    <span className={styles.googleIconG}>G</span>
                    <span className={styles.googleQueryText}>
                      🔍 {currentProfile.query} in {currentProfile.corridor}
                    </span>
                  </div>

                  <div className={styles.google3PackItems}>
                    {/* Rank #1 Winner */}
                    <div className={styles.serpItemRank1}>
                      <span className={styles.rank1Badge}>
                        ★ #1 Google Map 3-Pack Leader
                      </span>
                      <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', margin: '0 0 3px' }}>
                        {currentProfile.afterName}
                      </h4>
                      <div style={{ fontSize: '12px', color: '#F59E0B', fontWeight: 700, marginBottom: 4 }}>
                        ★★★★★ 4.9 ({currentProfile.afterReviews}+ reviews) · Open 24h
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#475569', marginBottom: 10 }}>
                        {currentProfile.corridor}, {currentProfile.targetCity}
                      </div>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <span className={styles.callPill}>📞 Call Now</span>
                        <span className={styles.dirPill}>🧭 Directions</span>
                        <span className={styles.dirPill}>🌐 Website</span>
                      </div>
                    </div>

                    {/* Rank #2 Competitor */}
                    <div className={styles.serpItemCompetitor}>
                      <span className={styles.competitorBadge}>#2 Competitor</span>
                      <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#334155', margin: '0 0 2px' }}>
                        {currentProfile.comp1Name}
                      </h5>
                      <div style={{ fontSize: '11px', color: '#64748B' }}>
                        {currentProfile.comp1Meta}
                      </div>
                    </div>

                    {/* Rank #3 Competitor */}
                    <div className={styles.serpItemCompetitor}>
                      <span className={styles.competitorBadge}>#3 Competitor</span>
                      <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#334155', margin: '0 0 2px' }}>
                        {currentProfile.comp2Name}
                      </h5>
                      <div style={{ fontSize: '11px', color: '#64748B' }}>
                        {currentProfile.comp2Meta}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: The 4 Algorithm Levers Driving #1 Rank */}
              <div className={styles.leversBox}>
                <div>
                  <h3 className={styles.leversTitle}>
                    The 4 Levers Behind #1 Rank Dominance
                  </h3>
                  <p className={styles.leversSub}>
                    How Marketing Copilot outranks competitors who have been in business for decades:
                  </p>

                  <div className={styles.leverList}>
                    <div className={styles.leverCard}>
                      <div className={styles.leverIconBox}>📍</div>
                      <div>
                        <h4 className={styles.leverName}>1. Proximity Expansion</h4>
                        <p className={styles.leverDesc}>
                          Overrides Google&apos;s 500m distance bias using localized geo-schema and neighborhood landing pages.
                        </p>
                      </div>
                    </div>

                    <div className={styles.leverCard}>
                      <div className={styles.leverIconBox}>⚡</div>
                      <div>
                        <h4 className={styles.leverName}>2. Automated Review Funnels</h4>
                        <p className={styles.leverDesc}>
                          WhatsApp/SMS review velocity engine captures 8x more verified 5★ reviews with photo uploads.
                        </p>
                      </div>
                    </div>

                    <div className={styles.leverCard}>
                      <div className={styles.leverIconBox}>🔒</div>
                      <div>
                        <h4 className={styles.leverName}>3. Tier-1 Citation Lock</h4>
                        <p className={styles.leverDesc}>
                          100% NAP consistency synced across 60+ Indian directories, eliminating duplicate ranking penalties.
                        </p>
                      </div>
                    </div>

                    <div className={styles.leverCard}>
                      <div className={styles.leverIconBox}>📈</div>
                      <div>
                        <h4 className={styles.leverName}>4. Behavioral CTR Signals</h4>
                        <p className={styles.leverDesc}>
                          High click-to-call and direction velocity signals Google&apos;s AI to maintain your #1 3-Pack spot.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regional Pan-India Coverage Tag Bar */}
          <div className={styles.metroBar}>
            <span>Pan-India Metro Coverage:</span>
            <span className={styles.metroTag}>📍 Delhi NCR</span>
            <span className={styles.metroTag}>📍 Mumbai</span>
            <span className={styles.metroTag}>📍 Bengaluru</span>
            <span className={styles.metroTag}>📍 Hyderabad</span>
            <span className={styles.metroTag}>📍 Pune</span>
            <span className={styles.metroTag}>📍 Pan-India Growth Hubs</span>
          </div>

          {/* Bottom Call to Action */}
          <div className={styles.engineBottomCta}>
            <span className={styles.bottomNote}>
              Curious where your business ranks across your target commercial corridors?
            </span>
            <BeamButton
              href="/contact"
              label="Claim Your Free Google Map 3-Pack Gap Analysis"
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
