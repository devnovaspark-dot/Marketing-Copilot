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
  title = 'Book Your Free Performance & Ad Audit',
  subtitle = 'Submit your website details below. Our senior Indian performance team will analyze your ad accounts and search visibility to find where you are leaking revenue.',
  eyebrow = '🇮🇳 DATA-BACKED AUDIT • ₹0 BENCHMARK',
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
              {/* Hardware Bar */}
              <div className={styles.deskHardwareBar}>
                <div className={styles.amberBadge}>
                  <span className={styles.amberFlameDot} />
                  <span>🇮🇳 PERFORMANCE LAB &bull; ₹0 BENCHMARK</span>
                </div>
                <div className={styles.hardwareScrew} title="Hardware Terminal Accent" />
              </div>

              <div className={styles.diagnosticsHeader}>
                <h3 className={styles.diagnosticsTitle}>
                  Find Where You&apos;re Bleeding Ad Spend
                </h3>
                <p className={styles.diagnosticsLead}>
                  We inspect your Google &amp; Meta ad accounts to pinpoint wasted budget, negative keywords, and leaks across Indian markets.
                </p>
              </div>

              {/* Full Visible Dashboard Showcase with Location/Status Badge */}
              <div className={styles.visualImageCard}>
                <Image
                  src="/images/Dashboard Telemetry_.jpg"
                  alt="Multi-Channel Ad Telemetry & ROAS Analytics"
                  fill
                  className={styles.panelImg}
                  priority={false}
                />
                <div className={styles.imageOverlayPill}>
                  <span className={styles.imageOverlayDot} />
                  <span>📊 Multi-Channel Telemetry &bull; Pan-India Ads</span>
                </div>
              </div>

              {/* Indian Performance Metrics Tray */}
              <div className={styles.metricsTray}>
                <div className={styles.metricCell}>
                  <span className={styles.metricNum}>₹15+ Cr</span>
                  <span className={styles.metricLbl}>Audited Spend</span>
                </div>
                <div className={styles.metricCell}>
                  <span className={styles.metricNum}>6.8X</span>
                  <span className={styles.metricLbl}>Peak ROAS</span>
                </div>
                <div className={styles.metricCell}>
                  <span className={styles.metricNum}>24-Hour</span>
                  <span className={styles.metricLbl}>Fast Turnaround</span>
                </div>
              </div>

              {/* Tactile Hardware Micro-Tiles */}
              <div className={styles.tactileTileList}>
                <div className={styles.tactileTile}>
                  <span className={styles.tileIcon}>🇮🇳</span>
                  <span className={styles.tileText}>Google Ads &amp; Meta Ads Pan-India Audit</span>
                </div>
                <div className={styles.tactileTile}>
                  <span className={styles.tileIcon}>📉</span>
                  <span className={styles.tileText}>Negative Keyword &amp; Placement Waste Shield</span>
                </div>
                <div className={styles.tactileTile}>
                  <span className={styles.tileIcon}>⚡</span>
                  <span className={styles.tileText}>₹0 Cost &bull; Zero Password or Access Needed</span>
                </div>
              </div>

              {/* Direct Actions: Call + WhatsApp */}
              <div className={styles.deskActions}>
                <a href="tel:+918280788689" className={styles.hotlineLink} title="Direct call with performance lead">
                  <span>📞 Call Performance Desk: <strong>+91 82807 88689</strong> ↗</span>
                </a>

                <a
                  href={`https://wa.me/918280788689?text=${encodeURIComponent(
                    'Hi Marketing Copilot, I would like to claim a free Google & Meta ad performance audit for my brand.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.deskWhatsappBtn}
                >
                  <span className={styles.btnGlowIndicator} />
                  <span>💬 Chat on WhatsApp with Performance Team ↗</span>
                </a>
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
                <span>🇮🇳 Pan-India Certified &bull; Delivered in 24 Hours &bull; 100% Free</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
