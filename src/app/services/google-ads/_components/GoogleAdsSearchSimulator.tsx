'use client';

import React, { useState } from 'react';
import styles from './GoogleAdsSearchSimulator.module.css';

interface QueryPreset {
  id: string;
  query: string;
  headline: string;
  displayUrl: string;
  description: string;
  ext1Title: string;
  ext1Desc: string;
  ext2Title: string;
  ext2Desc: string;
  qualityScore: number;
  cpcSaved: string;
  topImpressionShare: string;
  negativesBlocked: string[];
}

const PRESETS: QueryPreset[] = [
  {
    id: 'dental',
    query: 'best dental clinic saheed nagar bhubaneswar',
    headline: 'Award-Winning Dental Implants | Saheed Nagar Bhubaneswar',
    displayUrl: 'www.dentalcare-bhubaneswar.com/implants',
    description: 'Pain-free digital maxillofacial surgery & invisible aligners. 4.9★ rated by 2,400+ Odisha patients. Book same-day consultation.',
    ext1Title: '📞 Call 0674-254-XXXX',
    ext1Desc: 'Direct emergency doctor line',
    ext2Title: '🏥 Saheed Nagar Clinic',
    ext2Desc: 'Opposite RD Women’s College',
    qualityScore: 10,
    cpcSaved: '₹34 / click',
    topImpressionShare: '94.2%',
    negativesBlocked: ['free dental', 'government hospital', 'jobs saheed nagar', 'course syllabus'],
  },
  {
    id: 'realestate',
    query: 'luxury 3bhk flats for sale patia bhubaneswar',
    headline: 'Ultra-Luxury 3 & 4 BHK Apartments | Infocity Corridor Patia',
    displayUrl: 'www.patia-estates.com/residences',
    description: 'Sky villas with private infinity pools & clubhouse. RERA verified. 5 mins from KIIT & TCS. Download verified brochure & floor plans.',
    ext1Title: '📑 Instant Floor Plans',
    ext1Desc: 'PDF layout & pricing matrix',
    ext2Title: '📍 Site Visit Booking',
    ext2Desc: 'Complimentary chauffeur pickup',
    qualityScore: 9,
    cpcSaved: '₹82 / click',
    topImpressionShare: '91.8%',
    negativesBlocked: ['for rent', 'cheap rooms', 'pg for boys', 'hostel patia'],
  },
  {
    id: 'solar',
    query: 'commercial rooftop solar installation bhubaneswar',
    headline: 'Save 75% On Factory Power | Tier-1 Solar Bhubaneswar',
    displayUrl: 'www.kalinga-solar.in/commercial-rooftop',
    description: 'Government subsidy approved 25-year warranty solar EPC. Zero-capital OPEX models available for Odisha industrial parks.',
    ext1Title: '⚡ Free Solar Audit',
    ext1Desc: 'Get estimated payback period',
    ext2Title: '🏢 Industrial EPC Team',
    ext2Desc: 'Mancheswar & Chandaka hubs',
    qualityScore: 10,
    cpcSaved: '₹145 / click',
    topImpressionShare: '96.5%',
    negativesBlocked: ['diy solar toys', 'solar torch light', 'internship', 'wikipedia'],
  },
];

export default function GoogleAdsSearchSimulator() {
  const [activePreset, setActivePreset] = useState<QueryPreset>(PRESETS[0]);

  return (
    <section className={styles.simulatorSection} id="search-simulator">
      <div className="container">
        <div className={styles.simCard}>
          <div className={styles.simHeader}>
            <span className={styles.simEyebrow}>LIVE AUCTION TELEMETRY</span>
            <h2 className={styles.simTitle}>
              Google Search Ad Intelligence Simulator
            </h2>
            <p className={styles.simSub}>
              Experience how our 10/10 Quality Score landing page architecture and 400+ negative keyword firewalls capture #1 position at the lowest cost-per-click across India.
            </p>
          </div>

          <div className={styles.searchBarWrapper}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span style={{ fontSize: '14.5px', color: '#0F172A', fontWeight: 600 }}>
              {activePreset.query}
            </span>
          </div>

          <div className={styles.searchTagSelect}>
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePreset(p)}
                className={`${styles.queryChip} ${activePreset.id === p.id ? styles.queryChipActive : ''}`}
              >
                {p.query}
              </button>
            ))}
          </div>

          <div className={styles.serpGrid}>
            {/* SERP Desktop / Mobile Ad Card */}
            <div className={styles.serpPreview}>
              <div className={styles.adLabelRow}>
                <span className={styles.sponsoredBadge}>Sponsored</span>
                <span className={styles.adUrl}>{activePreset.displayUrl}</span>
              </div>

              <h3 className={styles.adTitle}>{activePreset.headline}</h3>
              <p className={styles.adDescription}>{activePreset.description}</p>

              <div className={styles.adExtensions}>
                <div className={styles.extItem}>
                  <div className={styles.extTitle}>{activePreset.ext1Title}</div>
                  <div className={styles.extDesc}>{activePreset.ext1Desc}</div>
                </div>
                <div className={styles.extItem}>
                  <div className={styles.extTitle}>{activePreset.ext2Title}</div>
                  <div className={styles.extDesc}>{activePreset.ext2Desc}</div>
                </div>
              </div>
            </div>

            {/* Auction Engine Telemetry */}
            <div className={styles.telemetryPanel}>
              <div className={styles.telemetryBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Auction Diagnostic Score
              </div>

              <div className={styles.qsMeter}>
                <div className={styles.qsScoreRow}>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                    Google Quality Score:
                  </span>
                  <span className={styles.qsScoreVal}>{activePreset.qualityScore}/10</span>
                </div>
                <div className={styles.meterBarBg}>
                  <div
                    className={styles.meterBarFill}
                    style={{ width: `${activePreset.qualityScore * 10}%` }}
                  />
                </div>
              </div>

              <div className={styles.specRow}>
                <span className={styles.specLabel}>Top Impression Share</span>
                <span className={styles.specVal}>{activePreset.topImpressionShare}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Estimated CPC Discount</span>
                <span className={styles.specVal} style={{ color: '#10B981' }}>-{activePreset.cpcSaved}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Targeting Radius</span>
                <span className={styles.specVal}>Strict 8 km Bhubaneswar Hub</span>
              </div>

              <div style={{ marginTop: '16px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: '0.04em' }}>
                  Active Negative Keyword Shield:
                </span>
                <div style={{ marginTop: '6px' }}>
                  {activePreset.negativesBlocked.map((neg, i) => (
                    <span key={i} className={styles.negPill}>✕ {neg}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
