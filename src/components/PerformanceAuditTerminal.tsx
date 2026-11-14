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

                {/* VISUAL GRAPHIC: Ad Spend Waste Telemetry SVG */}
                <div className={styles.wasteGraphicWrap}>
                  <div className={styles.wasteHeader}>
                    <span className={styles.wasteLabel}>Ad Account Diagnostic Meter</span>
                    <span className={styles.wasteMetric}>38% Avg Wasted Spend Found</span>
                  </div>
                  <svg className={styles.wasteSvg} viewBox="0 0 340 60" fill="none" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="amberBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="45%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                    {/* Background Track */}
                    <rect x="10" y="24" width="320" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
                    {/* Active Gradient Range */}
                    <rect x="10" y="24" width="220" height="12" rx="6" fill="url(#amberBarGrad)" />
                    {/* Benchmark Pins */}
                    <circle cx="95" cy="30" r="5" fill="#EF4444" stroke="#1A1B22" strokeWidth="2" />
                    <circle cx="230" cy="30" r="5" fill="#10B981" stroke="#1A1B22" strokeWidth="2" />
                    <text x="12" y="15" fill="#EF4444" fontSize="8.5" fontWeight="700">Wasted Negative Spend</text>
                    <text x="195" y="15" fill="#10B981" fontSize="8.5" fontWeight="700">Optimized Target ROAS</text>
                    <text x="75" y="52" fill="#94A3B8" fontSize="8" fontWeight="600">Current Leak</text>
                    <text x="210" y="52" fill="#34D399" fontSize="8" fontWeight="600">+180% Lift Target</text>
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
