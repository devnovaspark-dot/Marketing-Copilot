'use client';

import React, { useState } from 'react';
import BeamButton from '@/components/BeamButton';
import styles from './LocalSeoGridSimulator.module.css';

interface CityTarget {
  id: string;
  name: string;
  corridor: string;
  businessName: string;
  query: string;
}

const CITIES: CityTarget[] = [
  {
    id: 'delhi',
    name: 'Delhi NCR',
    corridor: 'Connaught Place & Cyber City',
    businessName: 'Apex Commercial Practice',
    query: 'best corporate services near me',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    corridor: 'BKC & Nariman Point',
    businessName: 'Apex Corporate Advisory',
    query: 'top corporate retainers near me',
  },
  {
    id: 'bangalore',
    name: 'Bengaluru',
    corridor: 'Koramangala & Indiranagar',
    businessName: 'Marketing Copilot Tech Hub',
    query: 'performance marketing agency near me',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    corridor: 'Hitec City & Jubilee Hills',
    businessName: 'Apex Multispeciality Center',
    query: 'best multispeciality clinic near me',
  },
  {
    id: 'pune',
    name: 'Pune',
    corridor: 'Baner & Koregaon Park',
    businessName: 'Luxe Living Design Studio',
    query: 'luxury architecture studio near me',
  },
];

export default function LocalSeoGridSimulator() {
  const [activeCityId, setActiveCityId] = useState<string>('delhi');
  const city = CITIES.find((c) => c.id === activeCityId) || CITIES[0];

  return (
    <section className={styles.section} id="grid-simulator">
      <div className="container">
        {/* Centered, Balanced Cinematic Header */}
        <div className={styles.headerWrap}>
          <div className={styles.eyebrowPill}>
            <span className={styles.liveBeacon} />
            <span>LIVE MAP 3-PACK SIGNAL TELEMETRY</span>
          </div>

          <h2 className={styles.title}>
            How We Lock Your Business into the{' '}
            <span className={styles.titleGradient}>Google Map 3-Pack</span>
          </h2>

          <p className={styles.sub}>
            Over 84% of high-intent local calls, directions, and walk-ins go exclusively to the top 3 spots. Here is the verified difference between ranking #1 vs. being invisible.
          </p>

          {/* Centered Minimalist City Selector */}
          <div className={styles.cityTabsRow}>
            {CITIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCityId(c.id)}
                className={`${styles.cityTab} ${activeCityId === c.id ? styles.cityTabActive : ''}`}
              >
                📍 {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Unified Frameless Console (Cool, Compact, Dual Split) */}
        <div className={styles.consoleWrapper}>
          {/* Left: Live SERP Simulation & Traffic Share */}
          <div className={styles.serpSide}>
            <div className={styles.searchBar}>
              <span className={styles.searchIcon}>📍</span>
              <span className={styles.searchText}>
                &ldquo;{city.query}&rdquo; in {city.corridor}, {city.name}
              </span>
              <span className={styles.proximityTag}>500m Proximity</span>
            </div>

            <div className={styles.winnerCard}>
              <div className={styles.winnerTopRow}>
                <span className={styles.rankBadge}>★ #1 Map 3-Pack Leader</span>
                <span className={styles.verifiedBadge}>✓ Google Verified</span>
              </div>
              <h3 className={styles.winnerTitle}>{city.businessName}</h3>
              <div className={styles.winnerMetaRow}>
                <span className={styles.ratingStars}>★★★★★ 4.9</span>
                <span className={styles.reviewCount}>(480+ Reviews)</span>
                <span className={styles.openBadge}>· Open 24 Hours</span>
              </div>
              <div className={styles.actionRow}>
                <span className={styles.callBtn}>📞 Call Now (96% Capture)</span>
                <span className={styles.dirBtn}>🧭 Directions (+340%)</span>
                <span className={styles.dirBtn}>🌐 Website</span>
              </div>
            </div>

            {/* Visual Local Traffic Share Bar */}
            <div className={styles.trafficWrap}>
              <div className={styles.trafficHeader}>
                <span>Local Click &amp; Call Distribution:</span>
                <span className={styles.trafficHighlight}>84% Captured by #1 Spot</span>
              </div>
              <div className={styles.trafficTrack}>
                <div className={styles.trafficFill1} style={{ width: '84%' }} title="#1 Leader: 84%" />
                <div className={styles.trafficFill2} style={{ width: '11%' }} title="#2 Competitor: 11%" />
                <div className={styles.trafficFill3} style={{ width: '5%' }} title="#3 Competitor: 5%" />
              </div>
              <div className={styles.trafficLegend}>
                <span>🥇 #1 Leader: 84%</span>
                <span>🥈 #2 Competitor: 11%</span>
                <span>🥉 #3 Competitor: 5%</span>
              </div>
            </div>
          </div>

          {/* Right: 3 Hyperlocal Growth Pillars (Micro-Cards with Badges) */}
          <div className={styles.leversSide}>
            <div className={styles.leverCard}>
              <div className={styles.leverTop}>
                <div className={styles.leverLeft}>
                  <span className={styles.leverIcon}>🎯</span>
                  <h4 className={styles.leverTitle}>500m Proximity Override</h4>
                </div>
                <span className={styles.leverTag}>10km Reach</span>
              </div>
              <p className={styles.leverDesc}>
                Overrides Google&apos;s distance drop-off with localized geo-coordinates and neighborhood schema, capturing buyers across a 10km radius.
              </p>
            </div>

            <div className={styles.leverCard}>
              <div className={styles.leverTop}>
                <div className={styles.leverLeft}>
                  <span className={styles.leverIcon}>⭐</span>
                  <h4 className={styles.leverTitle}>Automated 5★ Review Velocity</h4>
                </div>
                <span className={styles.leverTag}>8x Speed</span>
              </div>
              <p className={styles.leverDesc}>
                Automated WhatsApp review capture outpaces older competitors by 8x volume, maintaining an unshakeable 4.9★ rating.
              </p>
            </div>

            <div className={styles.leverCard}>
              <div className={styles.leverTop}>
                <div className={styles.leverLeft}>
                  <span className={styles.leverIcon}>🛡️</span>
                  <h4 className={styles.leverTitle}>Tier-1 Citation Lockdown</h4>
                </div>
                <span className={styles.leverTag}>100% NAP Lock</span>
              </div>
              <p className={styles.leverDesc}>
                Syncs 100% NAP consistency across 60+ platforms, completely eliminating duplicate listings and algorithmic rank penalties.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Telemetry Stats & Action (Integrated Ribbon) */}
        <div className={styles.bottomRibbon}>
          <div className={styles.statGroup}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>84%</span>
              <span className={styles.statLabel}>Calls to Top 3</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.statItem}>
              <span className={styles.statNum} style={{ color: '#10B981' }}>+410%</span>
              <span className={styles.statLabel}>Inbound Velocity</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.statItem}>
              <span className={styles.statNum} style={{ color: '#F59E0B' }}>4.9★</span>
              <span className={styles.statLabel}>Client Reputation</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>21 Days</span>
              <span className={styles.statLabel}>Avg Time to #1</span>
            </div>
          </div>

          <div className={styles.actionSide}>
            <BeamButton
              href="/contact"
              label="Audit Your Map 3-Pack Rank"
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
