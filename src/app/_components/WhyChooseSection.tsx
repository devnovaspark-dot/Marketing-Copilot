'use client';
import { useState } from 'react';
import Link from 'next/link';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './WhyChooseSection.module.css';

export default function WhyChooseSection() {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  return (
    <section className={`section ${styles.section}`}>
      {/* Ambient background glows */}
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 10px' }}>
              <span className={styles.sparkleIcon}>✨</span>
              <span>Why Choose Marketing Copilot</span>
            </div>
            <h3 className={`display-lg ${styles.headline}`}>
              Turning Ideas Into <span className="accent-gradient">Measurable Business Growth.</span>
            </h3>
            <div className={styles.subHeadlinePill}>
              <span className={styles.subHeadlineDot} />
              <span>Digital Growth Powered by Strategy, AI &amp; Creativity</span>
            </div>
            <p className={styles.subText}>
              Every business has different goals and challenges. That&apos;s why we create customized marketing strategies instead of using a one-size-fits-all approach—driving search visibility, generating qualified leads, and scaling real business growth.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid Architecture */}
        <div className={styles.bentoGrid}>
          {/* Row 1: Hero 2-Column AI Card + 1-Column Team Card */}
          <div className={styles.row1}>
            {/* Card 1: AI-First Approach (Deep Midnight Gradient - Spans 2 cols) */}
            <ScrollReveal delay={0} className={styles.colAi}>
              <div className={`${styles.bentoCard} ${styles.cardAi}`}>
                <div className={styles.cardAiMesh} />
                
                <div className={styles.cardHeader}>
                  <div className={styles.iconBoxAi}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="10" rx="3" />
                      <circle cx="8.5" cy="16" r="1.5" fill="currentColor" />
                      <circle cx="15.5" cy="16" r="1.5" fill="currentColor" />
                      <path d="M12 2v5" />
                      <circle cx="12" cy="2" r="1" />
                    </svg>
                  </div>
                  <span className={styles.badgeAiPulse}>
                    <span className={styles.pulseDot} />
                    <span>AI-Powered Growth Engine</span>
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitleWhite}>AI-First Approach</h4>
                  <p className={styles.cardTextWhite}>
                    We use AI-powered tools, automation and data insights to make marketing decisions and boost campaign efficiency.
                  </p>
                </div>

                <div className={styles.cardAiFooter}>
                  <div className={styles.aiTag}>
                    <span className={styles.aiTagDot} />
                    <span>Data Insights &amp; Analytics</span>
                  </div>
                  <div className={styles.aiTag}>
                    <span className={styles.aiTagDot} />
                    <span>Predictive Automation</span>
                  </div>
                  <div className={styles.aiTag}>
                    <span className={styles.aiTagDot} />
                    <span>Campaign Efficiency</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Dedicated Growth Team (1 Col) */}
            <ScrollReveal delay={80} className={styles.colTeam}>
              <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardTeam}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconTeam}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className={styles.tagExpert}>DEDICATED TEAM</span>
                </div>

                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>Dedicated Growth Team</h4>
                  <p className={styles.cardText}>
                    Our team includes marketers, designers, developers and strategists who work closely together to support your business goals.
                  </p>
                </div>

                <div className={styles.chipsRow}>
                  {['Marketers', 'Designers', 'Developers', 'Strategists'].map(chip => (
                    <button
                      key={chip}
                      type="button"
                      className={`${styles.chipPill} ${activeChip === chip ? styles.chipPillActive : ''}`}
                      onClick={() => setActiveChip(activeChip === chip ? null : chip)}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: 3 Equal Pillar Cards (Reporting, Performance Focus, Fast Execution) */}
          <div className={styles.row2}>
            {/* Card 3: Reporting */}
            <ScrollReveal delay={120}>
              <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardReporting}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconReporting}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <span className={styles.tagReporting}>TRANSPARENT DATA</span>
                </div>

                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>Reporting</h4>
                  <p className={styles.cardText}>
                    You get clear reports and campaign insights so you always know how your marketing is performing.
                  </p>
                </div>

                <div className={styles.cardFooterSimple}>
                  <span className={styles.footerNote}>Clear Dashboards · Actionable Insights</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Performance Focus (Sunset Coral Gradient) */}
            <ScrollReveal delay={160}>
              <div className={`${styles.bentoCard} ${styles.cardPerformance}`}>
                <div className={styles.cardPerfMesh} />
                <div className={styles.cardHeader}>
                  <div className={styles.iconBoxPerf}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <span className={styles.badgePerf}>RESULTS DRIVEN</span>
                </div>

                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitleWhite}>Performance Focus</h4>
                  <p className={styles.cardTextWhite}>
                    Our campaigns are built to deliver results—leads, sales, visibility and long-term business growth.
                  </p>
                </div>

                <div className={styles.cardPerfFooter}>
                  <span className={styles.statCallout}>Leads · Sales · Real Visibility</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 5: Fast Execution */}
            <ScrollReveal delay={200}>
              <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardExec}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconExec}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <span className={styles.tagExec}>RAPID MOMENTUM</span>
                </div>

                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>Fast Execution</h4>
                  <p className={styles.cardText}>
                    We focus on implementation, testing, optimization and continuous improvement to keep momentum.
                  </p>
                </div>

                <div className={styles.chipsRow}>
                  {['Implementation', 'Testing', 'Optimization', 'Improvement'].map(chip => (
                    <span key={chip} className={styles.chipPill}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 3: Long-Term Growth Strategy & Brochure Playbook Banner (Full Width) */}
          <ScrollReveal delay={240}>
            <div className={`${styles.bentoCard} ${styles.cardPlaybook}`}>
              <div className={styles.playbookGlow} />
              
              <div className={styles.playbookLeft}>
                <div className={styles.playbookBadge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  <span>Long-Term Growth Strategy</span>
                </div>
                <h4 className={styles.playbookTitle}>
                  Sustainable Growth Architecture &amp; Execution
                </h4>
                <p className={styles.playbookText}>
                  Our Online Marketing Services are designed to support compounding growth, not just short-term wins. Marketing Copilot brings together technology, creativity, strategy, and performance marketing to help your business scale.
                </p>
              </div>

              <div className={styles.playbookRight}>
                <BeamButton href="/contact" label="Grow Your Business With Us" size="md" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
