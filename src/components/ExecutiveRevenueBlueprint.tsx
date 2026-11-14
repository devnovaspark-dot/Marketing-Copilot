'use client';

import ScrollReveal from '@/components/ScrollReveal';
import HubSpotLeadForm from '@/components/HubSpotLeadForm';
import styles from './ExecutiveRevenueBlueprint.module.css';

interface ExecutiveRevenueBlueprintProps {
  id?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  formLocation?: string;
}

export default function ExecutiveRevenueBlueprint({
  id = 'executive-revenue-blueprint',
  title = 'Request Your Free 90-Day Revenue Blueprint',
  subtitle = 'Submit your company details below. Our senior revenue architects will formulate an actionable 90-day scaling roadmap for your market.',
  eyebrow = 'FOUNDER & CXO ADVISORY • 90-DAY SCALE',
  formLocation = '/',
}: ExecutiveRevenueBlueprintProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.ambientGlowTop} />
      <div className="container">
        <ScrollReveal>
          <div className={styles.executiveFrame}>
            {/* Left Pane: Slate & Warm Copper Executive Brief (No Blue) */}
            <div className={styles.advisoryPane}>
              <div>
                <div className={styles.executiveBadge}>
                  <span className={styles.copperDot} />
                  <span>EXECUTIVE DESK &bull; INDIA ADVISORY</span>
                </div>

                <div className={styles.advisoryHeader}>
                  <h3 className={styles.advisoryTitle}>
                    Scale to a Predictable <span className={styles.titleAccentCopper}>Revenue Engine</span>
                  </h3>
                  <p className={styles.advisoryLead}>
                    Tailored for ambitious founders, CMOs, and growth leaders who want systematic CAC reduction, omnichannel visibility, and compounding enterprise value.
                  </p>
                </div>

                {/* VISUAL GRAPHIC: Minimalist 90-Day Milestone Scale Roadmap (SVG) */}
                <div className={styles.roadmapGraphicWrap}>
                  <div className={styles.roadmapHeader}>
                    <span className={styles.roadmapLabel}>90-Day Execution Roadmap</span>
                    <span className={styles.roadmapMetric}>Quarterly Scale Plan</span>
                  </div>
                  <svg className={styles.roadmapSvg} viewBox="0 0 320 52" fill="none" preserveAspectRatio="none">
                    <line x1="28" y1="20" x2="292" y2="20" stroke="rgba(255,255,255,0.12)" strokeWidth="1.8" strokeDasharray="3 3" />
                    <line x1="28" y1="20" x2="150" y2="20" stroke="#EA580C" strokeWidth="2.2" />

                    <circle cx="28" cy="20" r="6.5" fill="#EA580C" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="28" y="23" fill="#FFFFFF" fontSize="7" fontWeight="800" textAnchor="middle">1</text>
                    <text x="28" y="38" fill="#FDBA74" fontSize="7" fontWeight="700" textAnchor="middle">Days 1–30</text>
                    <text x="28" y="47" fill="#94A3B8" fontSize="6.5" textAnchor="middle">CAC Audit</text>

                    <circle cx="150" cy="20" r="6.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="150" y="23" fill="#FFFFFF" fontSize="7" fontWeight="800" textAnchor="middle">2</text>
                    <text x="150" y="38" fill="#FDBA74" fontSize="7" fontWeight="700" textAnchor="middle">Days 31–60</text>
                    <text x="150" y="47" fill="#94A3B8" fontSize="6.5" textAnchor="middle">Funnel Launch</text>

                    <circle cx="292" cy="20" r="6.5" fill="#1F2937" stroke="#EA580C" strokeWidth="1.5" />
                    <text x="292" y="23" fill="#EA580C" fontSize="7" fontWeight="800" textAnchor="middle">3</text>
                    <text x="292" y="38" fill="#FDBA74" fontSize="7" fontWeight="700" textAnchor="middle">Days 61–90</text>
                    <text x="292" y="47" fill="#94A3B8" fontSize="6.5" textAnchor="middle">Scale Engine</text>
                  </svg>
                </div>

                {/* 3 Strategic Pillars */}
                <div className={styles.blueprintPillarsList}>
                  <div className={styles.blueprintItem}>
                    <span className={styles.blueprintIcon}>🏛️</span>
                    <span className={styles.blueprintTitle}>Unit Economics &amp; Margin Architecture</span>
                  </div>
                  <div className={styles.blueprintItem}>
                    <span className={styles.blueprintIcon}>🔄</span>
                    <span className={styles.blueprintTitle}>Omnichannel Conversion Engineering</span>
                  </div>
                  <div className={styles.blueprintItem}>
                    <span className={styles.blueprintIcon}>🤝</span>
                    <span className={styles.blueprintTitle}>Direct Senior Partner Alignment (No Junior Reps)</span>
                  </div>
                </div>
              </div>

              {/* Direct Partner Hotline */}
              <div className={styles.hotlineCallout}>
                <a href="tel:+918280788689" className={styles.hotlineLink}>
                  <span>📞 Senior Partner Line: +91 82807 88689 ↗</span>
                </a>
              </div>
            </div>

            {/* Right Pane: Compact HubSpot Lead Form */}
            <div className={styles.blueprintIntakePane}>
              <div className={styles.intakeHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span>{eyebrow}</span>
                </div>
                <h2 className={styles.intakeTitle}>{title}</h2>
                <p className={styles.intakeSub}>{subtitle}</p>
              </div>

              <HubSpotLeadForm id="blueprint-exec-form" formLocation={formLocation} />

              <div className={styles.trustMiniRow}>
                <span className={styles.copperDot} style={{ width: 5, height: 5 }} />
                <span>Enterprise NDA Guaranteed &bull; 1-on-1 Strategy Review</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
