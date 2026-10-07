'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SEOCorridorExplorer.module.css';

interface CorridorData {
  id: string;
  name: string;
  pincode: string;
  category: string;
  tagline: string;
  searchVolume: string;
  competition: string;
  topSectors: string[];
  strategicPlaybook: string;
  clientExample: string;
}

const corridors: CorridorData[] = [
  {
    id: 'patia',
    name: 'Patia & Infocity Corridor',
    pincode: '751024',
    category: 'TECH & HIGH-DISPOSABLE INCOME',
    tagline: 'The Silicon & Academic Epicenter of Bhubaneswar',
    searchVolume: '85,000+ monthly searches',
    competition: 'High Commercial Density',
    topSectors: ['Luxury Real Estate & Villas', 'Bespoke Interior Studios', 'Fine Dining & Lounges', 'Tech SaaS Consultancies'],
    strategicPlaybook: 'Hyper-localized Google 3-Pack optimization targeting IT professionals, tech founders, and KIIT/Infocity residents with high transaction propensity.',
    clientExample: 'Utkal Royal Living generated 140+ luxury villa inquiries in 90 days from Patia micro-clusters.',
  },
  {
    id: 'saheed-nagar',
    name: 'Saheed Nagar & Janpath',
    pincode: '751007',
    category: 'COMMERCIAL & HIGH-STREET RETAIL',
    tagline: 'Bhubaneswar’s Premier Luxury Shopping & Business Belt',
    searchVolume: '62,000+ monthly searches',
    competition: 'Very High Retail Rivalry',
    topSectors: ['Jewelry Showrooms', 'Cosmetic Clinics & Dental Care', 'Corporate Law & Accounting', 'Designer Boutiques'],
    strategicPlaybook: 'Near-Me geo-fenced SEO and schema markup that captures footfall shoppers searching for high-ticket retail and medical consultations.',
    clientExample: 'Elite Dental Clinic dominates rankings for 18 cosmetic dentistry search terms along Janpath.',
  },
  {
    id: 'jaydev-vihar',
    name: 'Jaydev Vihar & Nayapalli',
    pincode: '751013 / 751012',
    category: 'PREMIUM HOSPITALITY & HEALTHCARE',
    tagline: 'Strategic Gateway Connecting Central Bhubaneswar',
    searchVolume: '54,000+ monthly searches',
    competition: 'High Authority Cluster',
    topSectors: ['Multi-specialty Hospitals', 'Luxury Business Hotels', 'Corporate Event Venues', 'Automobile Showrooms'],
    strategicPlaybook: 'Multi-location schema and entity optimization targeting regional patients, business travelers, and premium car buyers arriving from NH-16.',
    clientExample: 'Regional diagnostic center captured 240+ monthly diagnostic bookings via local 3-pack dominance.',
  },
  {
    id: 'c-pur',
    name: 'Chandrasekharpur & Damana',
    pincode: '751016 / 751023',
    category: 'DENSE RESIDENTIAL & FAMILY HUBS',
    tagline: 'Affluent Residential Belts with Steady Demand',
    searchVolume: '48,000+ monthly searches',
    competition: 'Moderate to High',
    topSectors: ['Home Improvement & Renovation', 'Pediatric & Family Clinics', 'Premium Coaching Academies', 'Fitness & Wellness Gyms'],
    strategicPlaybook: 'Long-tail keyword targeting and neighborhood-specific Google review campaigns driving dependable recurring local inquiries.',
    clientExample: 'Fitness center achieved 80+ monthly membership signups via organic local Google Maps rankings.',
  },
  {
    id: 'cuttack-twin',
    name: 'Khandagiri & Cuttack Twin-City',
    pincode: '751030 / 753001',
    category: 'INDUSTRIAL & WHOLESALE TRADE',
    tagline: 'The Commercial Freight & Industrial Axis of Odisha',
    searchVolume: '40,000+ monthly searches',
    competition: 'Low to Moderate SEO Sophistication',
    topSectors: ['B2B Manufacturing & Fabrication', 'Building Materials & Hardware', 'Logistics & Warehousing', 'Commercial Fleet Dealers'],
    strategicPlaybook: 'High-ticket B2B search intent optimization that captures industrial procurement managers and wholesale distributors across Odisha.',
    clientExample: 'Steel fabrication firm secured 3 large commercial tenders within 4 months through B2B search visibility.',
  },
];

export default function SEOCorridorExplorer() {
  const [activeCorridorId, setActiveCorridorId] = useState(corridors[0].id);
  const activeCorridor = corridors.find((c) => c.id === activeCorridorId) || corridors[0];

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className="eyebrow-dot" />
            <span>Hyperlocal Geo-Intelligence</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Dominating Bhubaneswar’s Key <span className="accent-gradient">Commercial Corridors</span>
          </h2>
          <p className={styles.subhead}>
            Search behavior and buyer psychology change dramatically from Patia to Saheed Nagar. We engineer pinpoint local SEO tailored to each commercial corridor.
          </p>
        </ScrollReveal>

        {/* Interactive Explorer Console */}
        <div className={styles.explorerWrapper}>
          {/* Corridor Selection Column */}
          <div className={styles.corridorList}>
            <div className={styles.listHeader}>Commercial Micro-Markets</div>
            {corridors.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`${styles.corridorItemBtn} ${activeCorridorId === c.id ? styles.corridorItemActive : ''}`}
                onClick={() => setActiveCorridorId(c.id)}
              >
                <div className={styles.itemTopRow}>
                  <span className={styles.itemName}>{c.name}</span>
                  <span className={styles.itemPin}>PIN {c.pincode}</span>
                </div>
                <span className={styles.itemCategory}>{c.category}</span>
              </button>
            ))}
          </div>

          {/* Active Corridor Detail Screen */}
          <div className={styles.corridorDetailPane}>
            <div className={styles.detailHeader}>
              <div>
                <span className={styles.detailPill}>{activeCorridor.category}</span>
                <h3 className={styles.detailTitle}>{activeCorridor.name}</h3>
                <p className={styles.detailTagline}>{activeCorridor.tagline}</p>
              </div>
              <div className={styles.telemetryTile}>
                <span className={styles.telemetryLabel}>Search Volume</span>
                <span className={styles.telemetryVal}>{activeCorridor.searchVolume}</span>
                <span className={styles.telemetryComp}>{activeCorridor.competition}</span>
              </div>
            </div>

            <div className={styles.detailDivider} />

            <div className={styles.sectorsBox}>
              <span className={styles.sectorsLabel}>High-Yield Commercial Sectors in this Hub:</span>
              <div className={styles.sectorsGrid}>
                {activeCorridor.topSectors.map((sector) => (
                  <span key={sector} className={styles.sectorChip}>
                    ✓ {sector}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.playbookBox}>
              <div className={styles.playbookTitle}>
                <span>🎯 Strategic Search Playbook:</span>
              </div>
              <p className={styles.playbookText}>{activeCorridor.strategicPlaybook}</p>
            </div>

            <div className={styles.caseSnippet}>
              <span className={styles.caseBadge}>VERIFIED IMPACT</span>
              <p className={styles.caseText}>{activeCorridor.clientExample}</p>
            </div>

            <div className={styles.paneFooter}>
              <Link href="/contact" className={styles.paneCtaBtn}>
                <span>Target {activeCorridor.name} with Marketing Copilot</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
