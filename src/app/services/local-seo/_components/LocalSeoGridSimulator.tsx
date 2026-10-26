'use client';

import React, { useState } from 'react';
import BeamButton from '@/components/BeamButton';
import styles from './LocalSeoGridSimulator.module.css';

interface CityData {
  id: string;
  name: string;
  query: string;
  corridor: string;
  businessName: string;
  reviews: string;
  comp1: string;
  comp1Meta: string;
  comp1Distance: string;
  comp2: string;
  comp2Meta: string;
  comp2Distance: string;
}

const CITIES: CityData[] = [
  {
    id: 'delhi',
    name: 'Delhi NCR',
    query: 'Best Commercial & B2B Services Near Me',
    corridor: 'Connaught Place & Cyber City',
    businessName: 'Apex Growth & Commercial Practice',
    reviews: '480+',
    comp1: 'National Business Network',
    comp1Meta: '4.2 ★★★★☆ (64 reviews) · Open until 8 PM',
    comp1Distance: '2.1 km away',
    comp2: 'City Metro Services',
    comp2Meta: '3.9 ★★★☆☆ (38 reviews) · Closes soon',
    comp2Distance: '3.4 km away',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    query: 'Top Corporate Advisory & Retainers Near Me',
    corridor: 'Bandra Kurla Complex (BKC) & Lower Parel',
    businessName: 'Apex Corporate & Legal Advisory',
    reviews: '520+',
    comp1: 'South Mumbai Commercial Co.',
    comp1Meta: '4.1 ★★★★☆ (58 reviews) · Open until 7 PM',
    comp1Distance: '1.8 km away',
    comp2: 'Metro Associates Group',
    comp2Meta: '3.8 ★★★☆☆ (29 reviews) · Unverified',
    comp2Distance: '3.1 km away',
  },
  {
    id: 'bangalore',
    name: 'Bengaluru',
    query: 'Top Digital Growth Agency Near Me',
    corridor: 'Koramangala, Indiranagar & HSR Layout',
    businessName: 'Marketing Copilot Regional Tech Hub',
    reviews: '440+',
    comp1: 'Silicon Valley Digital Marketing',
    comp1Meta: '4.3 ★★★★☆ (72 reviews) · Open until 8 PM',
    comp1Distance: '1.6 km away',
    comp2: 'Tech Corridor Web Ads',
    comp2Meta: '4.0 ★★★★☆ (45 reviews) · Closed',
    comp2Distance: '2.8 km away',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    query: 'Best Multispeciality Practice Near Me',
    corridor: 'Hitec City, Gachibowli & Jubilee Hills',
    businessName: 'Apex Healthcare & Diagnostic Hospital',
    reviews: '460+',
    comp1: 'City Health Center',
    comp1Meta: '4.2 ★★★★☆ (60 reviews) · Open until 9 PM',
    comp1Distance: '2.4 km away',
    comp2: 'Regional Care Clinic',
    comp2Meta: '3.9 ★★★☆☆ (35 reviews) · Closes soon',
    comp2Distance: '3.6 km away',
  },
  {
    id: 'pune',
    name: 'Pune',
    query: 'Luxury Architecture & Interiors Near Me',
    corridor: 'Baner High Street & Koregaon Park',
    businessName: 'Luxe Living Design & Architecture Studio',
    reviews: '380+',
    comp1: 'Modern Space Décor Studio',
    comp1Meta: '4.1 ★★★★☆ (48 reviews) · Open until 8 PM',
    comp1Distance: '2.2 km away',
    comp2: 'Classic Home Interiors',
    comp2Meta: '3.7 ★★★☆☆ (28 reviews) · Closes 7 PM',
    comp2Distance: '3.5 km away',
  },
];

export default function LocalSeoGridSimulator() {
  const [selectedCityId, setSelectedCityId] = useState<string>('delhi');
  const currentCity = CITIES.find((c) => c.id === selectedCityId) || CITIES[0];

  return (
    <section className={styles.cleanSection} id="grid-simulator">
      <div className="container">
        <div className={styles.cleanCard}>
          {/* Header */}
          <div className={styles.headerWrap}>
            <div className={styles.eyebrow}>
              <span className={styles.liveDot} />
              <span>MAP 3-PACK DOMINANCE</span>
            </div>
            <h2 className={styles.title}>
              Rank in the Top 3 on Google Maps
            </h2>
            <p className={styles.sub}>
              Over 84% of high-intent local phone calls and direction requests go exclusively to the top 3 Google Map listings. Here is how we engineer your profile to claim and hold the #1 spot.
            </p>
          </div>

          {/* Single Clean City Selector Row */}
          <div className={styles.citySelectorBar}>
            {CITIES.map((city) => {
              const isActive = selectedCityId === city.id;
              return (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => setSelectedCityId(city.id)}
                  className={`${styles.cityBtn} ${isActive ? styles.cityBtnActive : ''}`}
                >
                  📍 {city.name}
                </button>
              );
            })}
          </div>

          {/* Main 2-Column Grid: Left Map SERP Card + Right 3 Value Pillars */}
          <div className={styles.mainGrid}>
            {/* Left: Authentic, Clean Google Maps 3-Pack Listing */}
            <div className={styles.mapCard}>
              <div>
                <div className={styles.mapSearchHeader}>
                  <span className={styles.mapSearchIcon}>📍</span>
                  <span className={styles.mapSearchText}>
                    🔍 {currentCity.query} in {currentCity.corridor}
                  </span>
                  <span className={styles.mapSearchBadge}>● 450m Proximity</span>
                </div>

                <div className={styles.packList}>
                  {/* #1 Winner (Your Business / Copilot Partner) */}
                  <div className={styles.packWinner}>
                    <div className={styles.winnerTopRow}>
                      <span className={styles.rank1Badge}>
                        ★ #1 Google Map 3-Pack Leader
                      </span>
                      <span className={styles.verifiedText}>
                        ✓ Google Verified
                      </span>
                    </div>

                    <h3 className={styles.winnerTitle}>
                      {currentCity.businessName}
                    </h3>

                    <div className={styles.winnerStars}>
                      <span className={styles.starGold}>★★★★★ 4.9</span>
                      <span className={styles.reviewCount}>
                        ({currentCity.reviews} Google Reviews)
                      </span>
                      <span style={{ color: '#059669', fontWeight: 700 }}>
                        · Open 24 Hours
                      </span>
                    </div>

                    <div className={styles.winnerCorridor}>
                      {currentCity.corridor}, {currentCity.name}
                    </div>

                    <div className={styles.winnerActions}>
                      <span className={styles.callBtn}>
                        📞 Call Now (96% Capture)
                      </span>
                      <span className={styles.dirBtn}>
                        🧭 Directions (+340%)
                      </span>
                      <span className={styles.dirBtn}>
                        🌐 Website
                      </span>
                    </div>
                  </div>

                  {/* #2 Competitor */}
                  <div className={styles.packCompetitor}>
                    <div className={styles.compLeft}>
                      <span className={styles.compBadge}>#2 Competitor</span>
                      <h4 className={styles.compName}>{currentCity.comp1}</h4>
                      <div className={styles.compMeta}>{currentCity.comp1Meta}</div>
                    </div>
                    <span className={styles.compDistance}>
                      {currentCity.comp1Distance}
                    </span>
                  </div>

                  {/* #3 Competitor */}
                  <div className={styles.packCompetitor}>
                    <div className={styles.compLeft}>
                      <span className={styles.compBadge}>#3 Competitor</span>
                      <h4 className={styles.compName}>{currentCity.comp2}</h4>
                      <div className={styles.compMeta}>{currentCity.comp2Meta}</div>
                    </div>
                    <span className={styles.compDistance}>
                      {currentCity.comp2Distance}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 3 Clean Pillars of Dominance */}
            <div className={styles.pillarsCol}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>01</div>
                <div className={styles.pillarContent}>
                  <h4 className={styles.pillarTitle}>500m Proximity Override</h4>
                  <p className={styles.pillarDesc}>
                    Google defaults to the searcher&apos;s physical distance. We deploy localized geo-schema and neighborhood landing pages to capture searches across a 10km radius.
                  </p>
                </div>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>02</div>
                <div className={styles.pillarContent}>
                  <h4 className={styles.pillarTitle}>Automated 5★ Review Acceleration</h4>
                  <p className={styles.pillarDesc}>
                    Automated post-service WhatsApp and SMS review funnels turn happy customers into authentic Google reviews with customer photos, keeping your rating at 4.9★.
                  </p>
                </div>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>03</div>
                <div className={styles.pillarContent}>
                  <h4 className={styles.pillarTitle}>Tier-1 Citation Lockdown</h4>
                  <p className={styles.pillarDesc}>
                    We sync and lock your Name, Address, and Phone (NAP) across 60+ Indian directories, eliminating duplicate listings and algorithmic rank penalties.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Clean Stats Ribbon */}
          <div className={styles.statsRibbon}>
            <div className={styles.statCell}>
              <div className={styles.statNum}>84%</div>
              <div className={styles.statLabel}>Calls Captured by 3-Pack</div>
            </div>
            <div className={styles.statCell}>
              <div className={styles.statNum} style={{ color: '#059669' }}>
                +410%
              </div>
              <div className={styles.statLabel}>Inbound Call Velocity</div>
            </div>
            <div className={styles.statCell}>
              <div className={styles.statNum} style={{ color: '#F59E0B' }}>
                4.9★
              </div>
              <div className={styles.statLabel}>Average Client Rating</div>
            </div>
            <div className={styles.statCell}>
              <div className={styles.statNum}>21 Days</div>
              <div className={styles.statLabel}>Average Time to Rank #1</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={styles.ctaRow}>
            <span className={styles.ctaText}>
              Curious where your business currently ranks across your target corridors?
            </span>
            <BeamButton
              href="/contact"
              label="Claim Your Free Google Map 3-Pack Audit"
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
