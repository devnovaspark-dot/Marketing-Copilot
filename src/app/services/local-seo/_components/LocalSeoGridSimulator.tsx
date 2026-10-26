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
    businessName: 'Apex Corporate & Legal Advisory',
    query: 'top corporate retainers near me',
  },
  {
    id: 'bangalore',
    name: 'Bengaluru',
    corridor: 'Koramangala & Indiranagar',
    businessName: 'Marketing Copilot Regional Tech Hub',
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
        {/* Minimalist Header with Integrated City Tabs */}
        <div className={styles.header}>
          <div className={styles.eyebrowRow}>
            <span className={styles.liveBeacon} />
            <span className={styles.eyebrowText}>LIVE MAP 3-PACK SIGNAL TELEMETRY</span>
          </div>

          <div className={styles.headlineRow}>
            <h2 className={styles.headline}>
              How We Lock Your Business into the Google Map 3-Pack
            </h2>

            {/* In-Line City Switcher (Compact, No Mess) */}
            <div className={styles.cityTabs}>
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

            <div className={styles.winnerBlock}>
              <div className={styles.winnerHeader}>
                <span className={styles.rankBadge}>★ #1 Map 3-Pack Leader</span>
                <span className={styles.verifiedBadge}>✓ Google Verified</span>
              </div>
              <h3 className={styles.winnerName}>{city.businessName}</h3>
              <div className={styles.winnerMeta}>
                <span className={styles.ratingStars}>★★★★★ 4.9</span>
                <span className={styles.reviewCount}>(480+ Reviews)</span>
                <span className={styles.openNow}>· Open 24 Hours</span>
              </div>
              <div className={styles.quickButtons}>
                <span className={styles.callButton}>📞 Call Now (96% Capture)</span>
                <span className={styles.dirButton}>🧭 Directions (+340%)</span>
              </div>
            </div>

            {/* Visual Local Traffic Share Bar */}
            <div className={styles.trafficBarWrap}>
              <div className={styles.trafficBarLabel}>
                <span>Local Click &amp; Call Distribution:</span>
                <span className={styles.highlightPct}>84% Captured by #1 Spot</span>
              </div>
              <div className={styles.trafficTrack}>
                <div className={styles.trafficFill1} style={{ width: '84%' }} title="#1 Leader: 84%" />
                <div className={styles.trafficFill2} style={{ width: '11%' }} title="#2 Competitor: 11%" />
                <div className={styles.trafficFill3} style={{ width: '5%' }} title="#3 Competitor: 5%" />
              </div>
              <div className={styles.compLabels}>
                <span>🥇 #1 Leader: 84%</span>
                <span>🥈 #2 Competitor: 11%</span>
                <span>🥉 #3 Competitor: 5%</span>
              </div>
            </div>
          </div>

          {/* Right: 3 Hyperlocal Growth Engines (Compact, Sleek List) */}
          <div className={styles.leversSide}>
            <div className={styles.leverItem}>
              <span className={styles.leverNum}>01</span>
              <div>
                <h4 className={styles.leverTitle}>500m Proximity Override</h4>
                <p className={styles.leverText}>
                  Overrides Google&apos;s distance drop-off with localized geo-coordinates and neighborhood schema, capturing buyers across a 10km radius.
                </p>
              </div>
            </div>

            <div className={styles.leverItem}>
              <span className={styles.leverNum}>02</span>
              <div>
                <h4 className={styles.leverTitle}>Automated 5★ Review Velocity</h4>
                <p className={styles.leverText}>
                  Automated WhatsApp review capture outpaces older competitors by 8x volume, maintaining an unshakeable 4.9★ rating.
                </p>
              </div>
            </div>

            <div className={styles.leverItem}>
              <span className={styles.leverNum}>03</span>
              <div>
                <h4 className={styles.leverTitle}>Tier-1 Citation Lockdown</h4>
                <p className={styles.leverText}>
                  Syncs 100% NAP consistency across 60+ platforms, completely eliminating duplicate listings and algorithmic rank penalties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Telemetry Stats & Action (Integrated Ribbon) */}
        <div className={styles.bottomBar}>
          <div className={styles.statGroup}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>84%</span>
              <span className={styles.statText}>Calls to Top 3</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statVal} style={{ color: '#10B981' }}>+410%</span>
              <span className={styles.statText}>Inbound Velocity</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statVal} style={{ color: '#F59E0B' }}>4.9★</span>
              <span className={styles.statText}>Client Reputation</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statVal}>21 Days</span>
              <span className={styles.statText}>Avg Time to #1</span>
            </div>
          </div>

          <div className={styles.actionWrap}>
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
