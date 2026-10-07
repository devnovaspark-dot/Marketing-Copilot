'use client';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './WebDevComparisonMatrix.module.css';

interface ComparisonRow {
  feature: string;
  traditional: string;
  copilot: string;
  advantage: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Core Technology Stack',
    traditional: 'Bloated WordPress / PHP template with 25+ unmaintained third-party plugins',
    copilot: 'Modern Next.js 15, TypeScript, React Server Components & zero legacy bloat',
    advantage: 'Sub-800ms load time on 4G/5G mobile networks',
  },
  {
    feature: 'Google PageSpeed SLA',
    traditional: 'Fails Google Core Web Vitals (30–45 PageSpeed score on mobile devices)',
    copilot: 'Guaranteed 98–100 PageSpeed score with zero layout shifts (CLS 0.00)',
    advantage: 'Direct Google SEO ranking boost & lower ad CPCs',
  },
  {
    feature: 'Conversion Funnel Flow',
    traditional: 'Clunky 8-field contact forms that mobile visitors immediately abandon',
    copilot: '1-click WhatsApp routing, dynamic Razorpay UPI checkout & instant phone dials',
    advantage: '+280% form completion and consultation lift',
  },
  {
    feature: 'Security & Uptime',
    traditional: 'Vulnerable to PHP vulnerabilities, plugin exploits, and malware attacks',
    copilot: 'Cloudflare enterprise edge WAF, immutable builds & zero SQL injection surface',
    advantage: '99.99% uptime guarantee with automated backups',
  },
  {
    feature: 'Native Local SEO Schema',
    traditional: 'Generic title tags added via bloated third-party SEO plugins',
    copilot: 'Hardcoded JSON-LD LocalBusiness schema, geo-coordinates & OpenGraph tags',
    advantage: 'Automatic Google 3-Pack local map eligibility',
  },
];

export default function WebDevComparisonMatrix() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.compDot} />
            <span>The Engineering Standard</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Traditional Agency Websites vs.{' '}
            <span className="accent-gradient">Marketing Copilot</span>
          </h2>
          <p className={styles.subhead}>
            Why ambitious Indian enterprises replace legacy WordPress sites with our custom Next.js web applications.
          </p>
        </ScrollReveal>

        {/* Matrix Container */}
        <div className={styles.matrixContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.colFeature}>Architectural Feature</div>
            <div className={styles.colTraditional}>Traditional Local Agencies</div>
            <div className={styles.colCopilot}>Marketing Copilot Next.js</div>
            <div className={styles.colAdvantage}>Commercial Business Impact</div>
          </div>

          <div className={styles.tableBody}>
            {comparisonRows.map((row, idx) => (
              <div key={idx} className={styles.tableRow}>
                <div className={styles.colFeature}>
                  <span className={styles.featureTitle}>{row.feature}</span>
                </div>
                <div className={styles.colTraditional}>
                  <span className={styles.crossIcon}>✕</span>
                  <span>{row.traditional}</span>
                </div>
                <div className={styles.colCopilot}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{row.copilot}</span>
                </div>
                <div className={styles.colAdvantage}>
                  <span className={styles.advantagePill}>{row.advantage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
