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
  title = 'Book a Free Performance & Growth Audit',
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

              {/* Secondary Visual Showcase: Strategy War-Room Deep Audit */}
              <div className={styles.secondaryVisualCard}>
                <Image
                  src="/images/SEO strategy_team.jpg"
                  alt="Senior Performance Marketing War-Room & Ad Account Audit Team"
                  fill
                  className={styles.panelImg}
                  priority={false}
                />
                <div className={styles.secondaryOverlayPill}>
                  <span className={styles.secondaryOverlayDot} />
                  <span>🎯 Senior War-Room &bull; Ad Account Deep Audit</span>
                </div>
              </div>

              {/* What We Inspect in 24 Hours: Indian Performance Audit Deliverables */}
              <div className={styles.deliverablesMatrix}>
                <div className={styles.deliverableRow}>
                  <span className={styles.deliverableIcon}>🎯</span>
                  <div className={styles.deliverableTextCol}>
                    <span className={styles.deliverableTitle}>Negative Keyword &amp; Waste Shield</span>
                    <span className={styles.deliverableDesc}>Eliminate irrelevant search clicks wasting your daily budget</span>
                  </div>
                </div>
                <div className={styles.deliverableRow}>
                  <span className={styles.deliverableIcon}>⚡</span>
                  <div className={styles.deliverableTextCol}>
                    <span className={styles.deliverableTitle}>ROAS &amp; Attribution Verification</span>
                    <span className={styles.deliverableDesc}>GA4, Meta CAPI &amp; Pixel leakage diagnostics</span>
                  </div>
                </div>
                <div className={styles.deliverableRow}>
                  <span className={styles.deliverableIcon}>📉</span>
                  <div className={styles.deliverableTextCol}>
                    <span className={styles.deliverableTitle}>Creative Fatigue &amp; Ad Rank Uplift</span>
                    <span className={styles.deliverableDesc}>Improve Quality Score to lower Indian CPC by 20-35%</span>
                  </div>
                </div>
                <div className={styles.deliverableRow}>
                  <span className={styles.deliverableIcon}>📋</span>
                  <div className={styles.deliverableTextCol}>
                    <span className={styles.deliverableTitle}>24-Hr Video Walkthrough + PDF</span>
                    <span className={styles.deliverableDesc}>Actionable Loom audit report delivered by senior leads</span>
                  </div>
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
              {/* Form Top Specular Gradient Bar */}
              <div className={styles.formTopAccentBar} />

              <div className={styles.intakeHeader}>
                <div className={styles.intakeTopRow}>
                  <div className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} />
                    <span>{eyebrow}</span>
                  </div>

                  {/* Senior Advisory Verification Badge with Avatars */}
                  <div className={styles.strategistAvatarsPill}>
                    <div className={styles.avatarCluster}>
                      <span className={styles.avatarMini} title="Senior Strategist NS">NS</span>
                      <span className={styles.avatarMini} title="Performance Lead MC">MC</span>
                      <span className={styles.avatarMini} title="Growth Architect UR">UR</span>
                    </div>
                    <span className={styles.advisorText}>Audit Desk</span>
                  </div>
                </div>

                <h2 className={styles.intakeTitle}>{title}</h2>
                <p className={styles.intakeSub}>{subtitle}</p>

                {/* Micro Indian Trust & Rating Bar */}
                <div className={styles.formTrustBar}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustFlag}>🇮🇳</span>
                    <span>Pan-India Audits</span>
                  </div>
                  <div className={styles.trustDivider}>•</div>
                  <div className={styles.trustItem}>
                    <span className={styles.stars}>★★★★★</span>
                    <span>100% Free Analysis</span>
                  </div>
                  <div className={styles.trustDivider}>•</div>
                  <div className={styles.trustItem}>
                    <span className={styles.clockIcon}>⚡</span>
                    <span>24-Hr Turnaround</span>
                  </div>
                </div>
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
