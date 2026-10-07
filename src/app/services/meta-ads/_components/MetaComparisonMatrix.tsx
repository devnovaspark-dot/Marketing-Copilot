'use client';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './MetaComparisonMatrix.module.css';

interface ComparisonRow {
  feature: string;
  boosted: string;
  copilot: string;
  takeaway: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Creative Strategy',
    boosted: '1 static flyer used for months until audience ignores it',
    copilot: '6–8 weekly video reels tested with 3-sec psychological hooks',
    takeaway: 'Zero creative fatigue; CPA stays low',
  },
  {
    feature: 'Targeting Depth',
    boosted: 'Generic age & radius; shows ads to non-buyers & bot accounts',
    copilot: 'Advantage+ AI + lookalikes trained on top 1% Bhubaneswar buyers',
    takeaway: 'Reaches high-disposable-income cohorts',
  },
  {
    feature: 'Conversion Funnel',
    boosted: 'Slow Instagram DMs that sit unread for hours',
    copilot: '1-tap WhatsApp chat with automated qualification in < 30s',
    takeaway: '28%+ lead-to-conversation conversion',
  },
  {
    feature: 'Data Tracking',
    boosted: 'Browser pixel losing 35%+ conversions to iOS 18 blocks',
    copilot: 'Server-side Meta Conversions API (CAPI) with 9.2/10 match score',
    takeaway: '100% signal capture for AI scaling',
  },
  {
    feature: 'Attribution & ROAS',
    boosted: 'Vanity likes and comments; negative commercial return',
    copilot: 'Verified 4.8X average ROAS tied directly to bank deposits',
    takeaway: 'Predictable profit unit economics',
  },
];

export default function MetaComparisonMatrix() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header - Punchy & High-Signal */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className="eyebrow-dot" />
            <span>Commercial Economics</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Boosting Instagram Posts vs. <span className="accent-gradient">Full-Funnel Performance</span>
          </h2>
          <p className={styles.subhead}>
            Why hitting &quot;Boost Post&quot; burns budget in India, while an algorithmic conversion architecture scales predictable revenue.
          </p>
        </ScrollReveal>

        {/* Tabular Specification Matrix (NO CARDS) */}
        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th className={styles.colFeature}>Capabilities</th>
                <th className={styles.colBoosted}>
                  <div className={styles.headerLoss}>
                    <span className={styles.lossDot} />
                    <span>Hitting &quot;Boost Post&quot;</span>
                  </div>
                </th>
                <th className={styles.colCopilot}>
                  <div className={styles.headerWin}>
                    <span className={styles.winBadge}>RECOMMENDED</span>
                    <span className={styles.winTitle}>Marketing Copilot Engine</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className={styles.tableRow}>
                  <td className={styles.cellFeature}>
                    <span className={styles.featureName}>{row.feature}</span>
                    <span className={styles.featureTakeaway}>{row.takeaway}</span>
                  </td>
                  <td className={styles.cellBoosted}>
                    <div className={styles.statusRow}>
                      <span className={styles.crossIcon}>✕</span>
                      <span>{row.boosted}</span>
                    </div>
                  </td>
                  <td className={styles.cellCopilot}>
                    <div className={styles.statusRow}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{row.copilot}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Minimalist Bottom Ribbon */}
        <div className={styles.bottomRibbon}>
          <div className={styles.ribbonText}>
            <span className={styles.lockIcon}>🔒</span>
            <span>100% Ad Account Ownership: All pixels, data, and creatives remain your company&apos;s intellectual property.</span>
          </div>
          <Link href="/contact" className={styles.ribbonBtn}>
            <span>Deploy Performance Engine</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
