'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import HubSpotLeadForm from '@/components/HubSpotLeadForm';
import styles from './PerformanceAuditTerminal.module.css';

interface PerformanceAuditTerminalProps {
  id?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  formLocation?: string;
}

export default function PerformanceAuditTerminal({
  id = 'performance-audit-terminal',
  title = 'Claim Your Free Performance & Ad Audit',
  subtitle = 'Submit your website details below. Our performance team will analyze your ad accounts and search visibility to find where you are leaking revenue.',
  eyebrow = 'DATA-BACKED AUDIT • ₹0 BENCHMARK',
  formLocation = '/',
}: PerformanceAuditTerminalProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.ambientGlowCenter} />
      <div className="container">
        <ScrollReveal>
          <div className={styles.terminalFrame}>
            {/* Left Pane: Signature Navy Blue Performance Lab */}
            <div className={styles.diagnosticsPane}>
              <div>
                <div className={styles.amberBadge}>
                  <span className={styles.amberFlameDot} />
                  <span>PERFORMANCE AUDIT LAB &bull; ₹0 BENCHMARK</span>
                </div>

                <div className={styles.diagnosticsHeader}>
                  <h3 className={styles.diagnosticsTitle}>
                    Find Where You&apos;re Bleeding Ad Spend
                  </h3>
                  <p className={styles.diagnosticsLead}>
                    We inspect your Google &amp; Meta ad accounts to pinpoint wasted budget, negative keywords, and conversion leaks.
                  </p>
                </div>

                {/* Real Photography Asset Card: Growth Analytics Dashboard */}
                <div className={styles.visualImageCard}>
                  <Image
                    src="/images/dashboard_hero.jpg"
                    alt="Ad Account Performance & Growth Analytics"
                    fill
                    className={styles.panelImg}
                    priority={false}
                  />
                  <div className={styles.imgOverlayPill}>
                    <div className={styles.dashboardMeta}>
                      <span className={styles.dashboardPillDot} />
                      <span className={styles.dashboardName}>Live Ad Account Diagnostics</span>
                    </div>
                    <span className={styles.verifiedPartner}>Premier Partner</span>
                  </div>
                </div>

                {/* Minimalist 2-Bullet Highlights */}
                <div className={styles.quickBullets}>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletCheck}>✓</span>
                    <span>Wasted Ad Spend &amp; Keyword Teardown</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletCheck}>✓</span>
                    <span>Actionable 5-Page Audit Deck</span>
                  </div>
                </div>
              </div>

              {/* Proof Banner */}
              <div className={styles.proofMetricsBar}>
                <span className={styles.proofIcon}>🛡️</span>
                <span className={styles.proofText}>
                  Audited across <strong className={styles.proofHighlight}>₹15+ Cr</strong> client spend. Google &amp; Meta certified.
                </span>
              </div>
            </div>

            {/* Right Pane: Compact HubSpot Lead Form */}
            <div className={styles.auditIntakePane}>
              <div className={styles.intakeHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span>{eyebrow}</span>
                </div>
                <h2 className={styles.intakeTitle}>{title}</h2>
                <p className={styles.intakeSub}>{subtitle}</p>
              </div>

              <HubSpotLeadForm id="terminal-audit-form" formLocation={formLocation} />

              <div className={styles.trustMiniRow}>
                <span className={styles.amberFlameDot} style={{ width: 5, height: 5 }} />
                <span>⚡ No Password Required &bull; Delivered in 24 Hours &bull; 100% Free</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
