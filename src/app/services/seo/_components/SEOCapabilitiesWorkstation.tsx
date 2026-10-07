'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SEOCapabilitiesWorkstation.module.css';

interface CapabilityTab {
  id: string;
  tabLabel: string;
  tabIcon: string;
  headline: string;
  subhead: string;
  deliverables: string[];
  metrics: { label: string; value: string; note: string }[];
}

const capabilities: CapabilityTab[] = [
  {
    id: 'vitals',
    tabLabel: 'Lightning-Fast Speed',
    tabIcon: '⚡',
    headline: 'Loads in Under 1 Second on Mobile Phones Across Bhubaneswar',
    subhead:
      'Google ranks fast websites higher. We make your website load instantly on any mobile phone or network across Odisha so visitors never leave and Google gives you top priority.',
    deliverables: [
      'Instant page loading under 0.8s on Jio 5G & Airtel 4G networks',
      'Zero screen jumping or layout shifts while customers are reading',
      'Instant button clicks and ultra-smooth mobile navigation',
      'Optimized lightweight images that load in a fraction of a second',
      'Guaranteed 95+ Google PageSpeed score on mobile phones',
    ],
    metrics: [
      { label: 'Mobile PageSpeed', value: '99/100', note: 'Google Lighthouse Score' },
      { label: 'Average Load Time', value: '0.74s', note: 'Tested in Bhubaneswar' },
      { label: 'Customer Retention', value: '98%', note: 'Zero Loading Drop-offs' },
    ],
  },
  {
    id: 'schema',
    tabLabel: 'Google Maps #1 Ranking',
    tabIcon: '📍',
    headline: 'Dominate Google Maps & the Top 3 Map Pack in Bhubaneswar',
    subhead:
      'When customers nearby search for your service on Google Maps, your business appears right at the very top with 5-star ratings, 1-tap calling, and instant directions.',
    deliverables: [
      'Top 3 ranking guarantee on Google Maps for local searches',
      'Complete Google Business Profile optimization & verification',
      'Local area targeting for Patia, Saheed Nagar, Nayapalli & Cuttack',
      'Automated 5-star customer review collection system',
      'Direct Click-to-Call and WhatsApp chat routing for immediate leads',
    ],
    metrics: [
      { label: 'Google Maps Position', value: '#1 Rank', note: 'Target Local Searches' },
      { label: 'Customer Rating', value: '★ 5.0', note: '184 Verified Reviews' },
      { label: 'Service Coverage', value: '15 km', note: 'Across Bhubaneswar' },
    ],
  },
  {
    id: 'clusters',
    tabLabel: 'Ready-to-Buy Keywords',
    tabIcon: '🎯',
    headline: 'Target High-Intent Searches From Customers Ready to Buy',
    subhead:
      'We focus exclusively on searches made by people who are ready to book, visit, or buy in Bhubaneswar. No useless clicks—only customers actively searching for your service.',
    deliverables: [
      'In-depth research of top customer buying searches in Bhubaneswar',
      'Target high-intent keywords that bring paying clients, not casual browsers',
      'Sales-focused landing pages designed to convert visits into calls',
      'Weekly ranking tracking reports showing your position climb',
      'Competitor displacement strategy to capture market share in Odisha',
    ],
    metrics: [
      { label: 'Monthly Search Volume', value: '45,000+', note: 'Local Buyers Targeted' },
      { label: 'Google Top 3 Share', value: '84%', note: 'Key Service Searches' },
      { label: 'Google Ads Saved', value: '₹1.8L/mo', note: 'Free Organic Leads' },
    ],
  },
  {
    id: 'backlinks',
    tabLabel: 'Trusted Press & Authority',
    tabIcon: '🛡️',
    headline: 'Build Strong Local Authority With Verified Regional Press',
    subhead:
      'Google favors businesses that are trusted by the community. We get your brand featured in reputable Odisha news portals and local directories, building authority that competitors cannot beat.',
    deliverables: [
      'Feature mentions on respected Odisha business and news websites',
      'Verified local directory citations across Bhubaneswar & Cuttack',
      'Complete safety from search engine penalties using 100% white-hat methods',
      'Competitor link analysis to capture top ranking authority',
      'Long-term sustainable rankings that compound month after month',
    ],
    metrics: [
      { label: 'Domain Authority', value: 'DR 65+', note: 'High Trust Websites' },
      { label: 'Safety Standard', value: '100%', note: 'Google Penalty-Proof' },
      { label: 'Inbound Growth', value: '+48%', note: 'Direct Referral Enquiries' },
    ],
  },
];

export default function SEOCapabilitiesWorkstation() {
  const [activeTabId, setActiveTabId] = useState(capabilities[0].id);
  const currentCapability = capabilities.find((c) => c.id === activeTabId) || capabilities[0];

  return (
    <section className={styles.section} id="seo-capabilities">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className="eyebrow-dot" />
            <span>SEO GROWTH SUITE • BUILT FOR BHUBANESWAR</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            How We Rank Your Business #1 on <span className="accent-gradient">Google in India</span>
          </h2>
          <p className={styles.subhead}>
            We replace technical guesswork with a 4-pillar Google growth system. Fast loading speeds, Google Maps #1 rank, and high-buyer search traffic that converts into paying customers.
          </p>
        </ScrollReveal>

        {/* Workstation Console */}
        <div className={styles.workstationWrapper}>
          {/* Tab Selector Buttons */}
          <div className={styles.tabNav} role="tablist">
            {capabilities.map((c) => {
              const isActive = activeTabId === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTabId(c.id)}
                >
                  <span className={styles.tabIcon}>{c.tabIcon}</span>
                  <span className={styles.tabLabel}>{c.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Active Workstation Stage */}
          <div className={styles.stageGrid}>
            {/* Left: Clear Explanation & Deliverables */}
            <div className={styles.stageContent}>
              <div className={styles.badgeRow}>
                <span className={styles.categoryPill}>{currentCapability.tabLabel}</span>
                <span className={styles.slaBadge}>Guaranteed Business Results</span>
              </div>

              <h3 className={styles.capabilityHeadline}>
                {currentCapability.headline}
              </h3>

              <p className={styles.capabilitySubhead}>
                {currentCapability.subhead}
              </p>

              {/* Deliverable Checklist */}
              <div className={styles.checklist}>
                <span className={styles.checklistHeading}>What You Get:</span>
                {currentCapability.deliverables.map((item) => (
                  <div key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span className={styles.checkText}>{item}</span>
                  </div>
                ))}
              </div>

              {/* 3 Metric Pills */}
              <div className={styles.metricsRow}>
                {currentCapability.metrics.map((m) => (
                  <div key={m.label} className={styles.metricBlock}>
                    <div className={styles.metricValue}>{m.value}</div>
                    <div className={styles.metricLabel}>{m.label}</div>
                    <div className={styles.metricNote}>{m.note}</div>
                  </div>
                ))}
              </div>

              <div className={styles.actionRow}>
                <Link href="/contact" className={styles.actionBtn}>
                  <span>Get Free Bhubaneswar SEO Audit</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right: High-Converting Visual Results Display (Zero Raw Code) */}
            <div className={styles.stageVisualPanel}>
              {activeTabId === 'vitals' && (
                <div className={styles.vitalsCard}>
                  <div className={styles.panelTopBar}>
                    <div className={styles.panelTitleGroup}>
                      <span className={styles.liveStatusDot} />
                      <span className={styles.panelTitle}>Google PageSpeed Diagnostic · Live Audit</span>
                    </div>
                    <span className={styles.panelBadge}>PASSED</span>
                  </div>

                  <div className={styles.scoreRow}>
                    <div className={styles.scoreDial}>
                      <span className={styles.scoreNum}>99</span>
                      <span className={styles.scoreTotal}>/ 100</span>
                      <span className={styles.scoreSub}>Mobile Speed</span>
                    </div>

                    <div className={styles.speedPills}>
                      <div className={styles.speedPill}>
                        <span className={styles.speedPillLabel}>First Visual Paint</span>
                        <span className={styles.speedPillVal}>0.4s · Instant</span>
                      </div>
                      <div className={styles.speedPill}>
                        <span className={styles.speedPillLabel}>Page Ready Time</span>
                        <span className={styles.speedPillVal}>0.7s · Optimal</span>
                      </div>
                      <div className={styles.speedPill}>
                        <span className={styles.speedPillLabel}>Click Response</span>
                        <span className={styles.speedPillVal}>0ms · Zero Delay</span>
                      </div>
                    </div>
                  </div>

                  {/* Benchmark Bar */}
                  <div className={styles.benchmarkBox}>
                    <div className={styles.benchmarkRow}>
                      <span className={styles.benchLabel}>Your Website (Marketing Copilot Optimized)</span>
                      <span className={styles.benchValGreen}>0.7s</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFillGreen} style={{ width: '18%' }} />
                    </div>

                    <div className={styles.benchmarkRow} style={{ marginTop: 10 }}>
                      <span className={styles.benchLabel}>Average Competitor in Bhubaneswar</span>
                      <span className={styles.benchValRed}>4.8s (Slow)</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFillRed} style={{ width: '85%' }} />
                    </div>
                  </div>

                  <div className={styles.panelFooter}>
                    <span>✓ Verified on Jio 5G &amp; Airtel 4G networks across Bhubaneswar</span>
                  </div>
                </div>
              )}

              {activeTabId === 'schema' && (
                <div className={styles.mapsCard}>
                  <div className={styles.panelTopBar}>
                    <div className={styles.panelTitleGroup}>
                      <span className={styles.liveStatusDot} />
                      <span className={styles.panelTitle}>Google Maps Search Result Preview</span>
                    </div>
                    <span className={styles.panelBadge}>#1 RANK</span>
                  </div>

                  <div className={styles.searchBarSim}>
                    <span className={styles.searchIcon}>🔍</span>
                    <span className={styles.searchQuery}>top rated business in india</span>
                  </div>

                  <div className={styles.mapResultItem}>
                    <div className={styles.mapResultTop}>
                      <div className={styles.rankBadge}>#1 on Google Maps</div>
                      <div className={styles.ratingStars}>★★★★★ 5.0 (184 reviews)</div>
                    </div>

                    <h4 className={styles.businessName}>Your Business Name</h4>
                    <p className={styles.businessCategory}>Top Rated Service Provider · Infocity Road, Patia</p>
                    <p className={styles.businessTiming}>🟢 Open now · Closes 8:30 PM · Bhubaneswar, Odisha</p>

                    <div className={styles.mapActionButtons}>
                      <button type="button" className={styles.mapBtnCall}>
                        📞 Call Now
                      </button>
                      <button type="button" className={styles.mapBtnDirections}>
                        🗺️ Directions
                      </button>
                      <button type="button" className={styles.mapBtnWhatsapp}>
                        💬 WhatsApp
                      </button>
                    </div>

                    <div className={styles.geoCoverageTag}>
                      📍 #1 Proximity Rank across Patia, Saheed Nagar, Nayapalli, Cuttack
                    </div>
                  </div>

                  <div className={styles.panelFooter}>
                    <span>✓ Direct Google Business Profile 3-Pack Optimization</span>
                  </div>
                </div>
              )}

              {activeTabId === 'clusters' && (
                <div className={styles.keywordsCard}>
                  <div className={styles.panelTopBar}>
                    <div className={styles.panelTitleGroup}>
                      <span className={styles.liveStatusDot} />
                      <span className={styles.panelTitle}>Bhubaneswar Buyer Search Ranking Matrix</span>
                    </div>
                    <span className={styles.panelBadge}>HIGH BUYER INTENT</span>
                  </div>

                  <div className={styles.keywordList}>
                    <div className={styles.keywordRow}>
                      <div className={styles.kwColText}>
                        <span className={styles.kwPhrase}>&ldquo;best luxury service in patia bhubaneswar&rdquo;</span>
                        <span className={styles.kwSub}>2,400 monthly searches · 92% Buyer Intent</span>
                      </div>
                      <div className={styles.kwColRank}>
                        <span className={styles.rankPillGreen}>#1 Rank</span>
                        <span className={styles.cpcSaved}>Saved ₹185/click</span>
                      </div>
                    </div>

                    <div className={styles.keywordRow}>
                      <div className={styles.kwColText}>
                        <span className={styles.kwPhrase}>&ldquo;top rated service near me bhubaneswar&rdquo;</span>
                        <span className={styles.kwSub}>3,800 monthly searches · Urgent Call Intent</span>
                      </div>
                      <div className={styles.kwColRank}>
                        <span className={styles.rankPillGreen}>#1 Rank</span>
                        <span className={styles.cpcSaved}>Saved ₹160/click</span>
                      </div>
                    </div>

                    <div className={styles.keywordRow}>
                      <div className={styles.kwColText}>
                        <span className={styles.kwPhrase}>&ldquo;best service company in saheed nagar&rdquo;</span>
                        <span className={styles.kwSub}>1,900 monthly searches · Commercial Lead</span>
                      </div>
                      <div className={styles.kwColRank}>
                        <span className={styles.rankPillGreen}>#2 Rank</span>
                        <span className={styles.cpcSaved}>Saved ₹140/click</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.kwSummaryRow}>
                    <div className={styles.kwSumStat}>
                      <span className={styles.kwSumNum}>₹1,85,000 / mo</span>
                      <span className={styles.kwSumLbl}>Free Google Ad Value</span>
                    </div>
                    <div className={styles.kwSumStat}>
                      <span className={styles.kwSumNum}>+340%</span>
                      <span className={styles.kwSumLbl}>Monthly Phone Calls</span>
                    </div>
                  </div>

                  <div className={styles.panelFooter}>
                    <span>✓ Live ranking telemetry verified via Google Search Console</span>
                  </div>
                </div>
              )}

              {activeTabId === 'backlinks' && (
                <div className={styles.authorityCard}>
                  <div className={styles.panelTopBar}>
                    <div className={styles.panelTitleGroup}>
                      <span className={styles.liveStatusDot} />
                      <span className={styles.panelTitle}>Verified Press &amp; Regional Media Citations</span>
                    </div>
                    <span className={styles.panelBadge}>100% WHITE-HAT</span>
                  </div>

                  <div className={styles.mediaList}>
                    <div className={styles.mediaItem}>
                      <div className={styles.mediaIconWrap}>📰</div>
                      <div className={styles.mediaInfo}>
                        <div className={styles.mediaName}>Odisha Business Standard</div>
                        <div className={styles.mediaCoverage}>Featured Article: Top Growing Enterprises in Bhubaneswar</div>
                      </div>
                      <span className={styles.daBadge}>DR 74</span>
                    </div>

                    <div className={styles.mediaItem}>
                      <div className={styles.mediaIconWrap}>⭐</div>
                      <div className={styles.mediaInfo}>
                        <div className={styles.mediaName}>Sambad Regional Network</div>
                        <div className={styles.mediaCoverage}>Industry Spotlight: Leaders Transforming the Local Market</div>
                      </div>
                      <span className={styles.daBadge}>DR 68</span>
                    </div>

                    <div className={styles.mediaItem}>
                      <div className={styles.mediaIconWrap}>🏢</div>
                      <div className={styles.mediaInfo}>
                        <div className={styles.mediaName}>Bhubaneswar Chamber of Commerce</div>
                        <div className={styles.mediaCoverage}>Official Enterprise Directory Listing &amp; Authority Badge</div>
                      </div>
                      <span className={styles.daBadge}>DR 62</span>
                    </div>
                  </div>

                  <div className={styles.trustBanner}>
                    <span className={styles.shieldIcon}>🛡️</span>
                    <div>
                      <div className={styles.trustBannerTitle}>100% Google Penalty-Proof Guarantee</div>
                      <div className={styles.trustBannerSub}>
                        Zero automated link farms or spam. Only authentic, permanent editorial links that keep you ranking.
                      </div>
                    </div>
                  </div>

                  <div className={styles.panelFooter}>
                    <span>✓ +24 Domain Trust Points compounded over 90 days</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
