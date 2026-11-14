'use client';

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
            {/* Left Pane: Carbon & Amber Performance Lab (No Blue) */}
            <div className={styles.diagnosticsPane}>
              <div>
                <div className={styles.amberBadge}>
                  <span className={styles.amberFlameDot} />
                  <span>PERFORMANCE AUDIT LAB &bull; ₹0 COST</span>
                </div>

                <div className={styles.diagnosticsHeader}>
                  <h3 className={styles.diagnosticsTitle}>
                    Find Where You&apos;re Bleeding <span className={styles.titleAccentAmber}>Ad Spend</span>
                  </h3>
                  <p className={styles.diagnosticsLead}>
                    Most growing brands lose 30–50% of their paid budget to wrong search keywords, creative decay, and poor landing page conversions. We find the leaks for free.
                  </p>
                </div>

                {/* VISUAL GRAPHIC: Minimalist Ad Spend Waste Telemetry SVG */}
                <div className={styles.wasteGraphicWrap}>
                  <div className={styles.wasteHeader}>
                    <span className={styles.wasteLabel}>Ad Account Diagnostic Meter</span>
                    <span className={styles.wasteMetric}>38% Avg Wasted Spend Found</span>
                  </div>
                  <svg className={styles.wasteSvg} viewBox="0 0 320 52" fill="none" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="amberBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="45%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                    <rect x="8" y="20" width="304" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
                    <rect x="8" y="20" width="200" height="10" rx="5" fill="url(#amberBarGrad)" />
                    <circle cx="85" cy="25" r="4.5" fill="#EF4444" stroke="#191A20" strokeWidth="1.5" />
                    <circle cx="208" cy="25" r="4.5" fill="#10B981" stroke="#191A20" strokeWidth="1.5" />
                    <text x="10" y="13" fill="#EF4444" fontSize="7.5" fontWeight="700">Wasted Negative Spend</text>
                    <text x="175" y="13" fill="#10B981" fontSize="7.5" fontWeight="700">Optimized Target ROAS</text>
                    <text x="65" y="44" fill="#94A3B8" fontSize="7" fontWeight="600">Current Leak</text>
                    <text x="190" y="44" fill="#34D399" fontSize="7" fontWeight="600">+180% Lift Target</text>
                  </svg>
                </div>

                {/* Audit Checklist */}
                <div className={styles.auditChecklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>📉</span>
                    <span className={styles.checkTitle}>Negative Keywords &amp; Placement Waste Teardown</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>🎯</span>
                    <span className={styles.checkTitle}>Creative Fatigue &amp; Rising CAC Root-Cause Diagnosis</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>⚡</span>
                    <span className={styles.checkTitle}>Mobile Funnel Bounces &amp; Organic Search Competitor Gap Map</span>
                  </div>
                </div>
              </div>

              {/* Proof Banner */}
              <div className={styles.proofMetricsBar}>
                <span className={styles.proofIcon}>🛡️</span>
                <span className={styles.proofText}>
                  Auditing across <span className={styles.proofHighlight}>₹15+ Cr</span> in client ad spend. Certified Google Premier &amp; Meta Partner methodologies.
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

              <HubSpotLeadForm id="performance-audit-form" formLocation={formLocation} />

              <div className={styles.trustMiniRow}>
                <span className={styles.amberFlameDot} style={{ width: 5, height: 5 }} />
                <span>Actionable 5-Page Audit &bull; 100% Free &bull; Zero Spam</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
