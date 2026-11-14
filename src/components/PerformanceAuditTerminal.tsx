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
            {/* Top Metallic Bevel Streamer */}
            <div className={styles.consoleTopBevel} />

            {/* Left Pane: Skeuomorphic Navy Blue Performance Lab */}
            <div className={styles.diagnosticsPane}>
              <div>
                <div className={styles.deskHardwareBar}>
                  <div className={styles.amberBadge}>
                    <span className={styles.amberFlameDot} />
                    <span>PERFORMANCE LAB &bull; ₹0 BENCHMARK</span>
                  </div>
                  <div className={styles.hardwareScrew} title="Hardware Terminal Accent" />
                </div>

                <div className={styles.diagnosticsHeader}>
                  <h3 className={styles.diagnosticsTitle}>
                    Find Where You&apos;re Bleeding Ad Spend
                  </h3>
                  <p className={styles.diagnosticsLead}>
                    We inspect your Google &amp; Meta ad accounts to pinpoint wasted budget, negative keywords, and leaks.
                  </p>
                </div>

                {/* Skeuomorphic 3D Glass Dashboard Card */}
                <div className={styles.visualImageCard}>
                  <Image
                    src="/images/dashboard_hero.jpg"
                    alt="Ad Account Performance & Growth Analytics"
                    fill
                    className={styles.panelImg}
                    priority={false}
                  />
                  {/* Diagonal Glass Sheen Reflection */}
                  <div className={styles.glassSheen} />

                  <div className={styles.imgOverlayPill}>
                    <div className={styles.dashboardMeta}>
                      <span className={styles.dashboardPillDot} />
                      <span className={styles.dashboardName}>Live Ad Account Diagnostics</span>
                    </div>
                    <span className={styles.verifiedPartner}>Premier Partner</span>
                  </div>
                </div>

                {/* Tactile Hardware Micro-Tiles */}
                <div className={styles.tactileTileList}>
                  <div className={styles.tactileTile}>
                    <span className={styles.tileIcon}>📉</span>
                    <span className={styles.tileText}>Negative Keyword &amp; Placement Waste</span>
                  </div>
                  <div className={styles.tactileTile}>
                    <span className={styles.tileIcon}>📊</span>
                    <span className={styles.tileText}>Actionable 5-Page Audit Deck</span>
                  </div>
                </div>
              </div>

              {/* 3D Tactile Proof Banner */}
              <div className={styles.proofMetricsBar}>
                <span className={styles.proofIcon}>🛡️</span>
                <span className={styles.proofText}>
                  Audited across <strong className={styles.proofHighlight}>₹15+ Cr</strong> client spend. Certified Partner.
                </span>
              </div>
            </div>

            {/* Right Pane: Compact Skeuomorphic Lead Intake Card */}
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

              <div className={styles.trustBadgeBar}>
                <span className={styles.lockIcon}>⚡</span>
                <span>No Password Required &bull; Delivered in 24 Hours &bull; 100% Free</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
