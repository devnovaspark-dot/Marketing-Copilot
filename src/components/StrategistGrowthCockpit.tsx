'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import HubSpotLeadForm from '@/components/HubSpotLeadForm';
import styles from './StrategistGrowthCockpit.module.css';

interface StrategistGrowthCockpitProps {
  id?: string;
  defaultTopic?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  formLocation?: string;
}

export default function StrategistGrowthCockpit({
  id = 'growth-strategy-cockpit',
  defaultTopic = '🎯 Growth Strategy & Performance Marketing',
  title = 'Book Your Free Growth Strategy Session',
  subtitle = 'Submit your details below for a free, confidential growth audit and 90-day execution blueprint.',
  eyebrow = 'CONFIDENTIAL STRATEGY DISPATCH • ZERO PRESSURE',
  formLocation = '/',
}: StrategistGrowthCockpitProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.ambientGlowTop} />
      <div className="container">
        <ScrollReveal>
          <div className={styles.dispatchCockpit}>
            {/* Left Pane: Charcoal & Emerald Strategy Desk (No Blue) */}
            <div className={styles.strategistDeskPane}>
              <div>
                <div className={styles.liveStatusPill}>
                  <span className={styles.liveDot} />
                  <span>STRATEGY DESK &bull; INDIA HQ</span>
                </div>

                <div className={styles.deskHeader}>
                  <h3 className={styles.deskTitle}>
                    1-on-1 Growth <span className={styles.titleAccentEmerald}>Strategy Diagnosis</span>
                  </h3>
                  <p className={styles.deskSub}>
                    Direct breakdown of your current acquisition channels, unit economics, and 90-day scale opportunities.
                  </p>
                </div>

                {/* VISUAL GRAPHIC: Minimalist Growth Velocity SVG Funnel */}
                <div className={styles.growthGraphicWrap}>
                  <div className={styles.graphicHeader}>
                    <span className={styles.graphicLabel}>Acquisition Velocity</span>
                    <span className={styles.graphicMetric}>Target: +3.8x ROAS</span>
                  </div>
                  <svg className={styles.funnelSvg} viewBox="0 0 320 60" fill="none" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="emeraldPathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="emeraldAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10 48 Q 75 42, 130 32 T 240 16 T 310 6 L 310 56 L 10 56 Z"
                      fill="url(#emeraldAreaGrad)"
                    />
                    <path
                      d="M10 48 Q 75 42, 130 32 T 240 16 T 310 6"
                      stroke="url(#emeraldPathGrad)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="48" r="3" fill="#10B981" />
                    <circle cx="130" cy="32" r="3" fill="#10B981" />
                    <circle cx="240" cy="16" r="3" fill="#34D399" />
                    <circle cx="310" cy="6" r="4" fill="#6EE7B7" stroke="#13171F" strokeWidth="1.5" />
                    <text x="12" y="42" fill="#94A3B8" fontSize="7.5" fontWeight="600">Audit</text>
                    <text x="125" y="25" fill="#94A3B8" fontSize="7.5" fontWeight="600">CAC Fix</text>
                    <text x="225" y="11" fill="#94A3B8" fontSize="7.5" fontWeight="600">Omnichannel</text>
                    <text x="275" y="20" fill="#34D399" fontSize="8" fontWeight="800">Scale ↗</text>
                  </svg>
                </div>

                {/* Strategist Profile Card */}
                <div className={styles.strategistProfileCard}>
                  <div className={styles.strategistAvatarWrap}>
                    <Image
                      src="/images/ceo_aarav.jpg"
                      alt="Aarav Sharma - Principal Revenue Architect"
                      fill
                      className={styles.strategistAvatarImg}
                    />
                    <span className={styles.verifiedCheckBadge}>✓</span>
                  </div>
                  <div className={styles.strategistMeta}>
                    <span className={styles.strategistName}>Aarav Sharma</span>
                    <span className={styles.strategistRole}>Principal Revenue Architect</span>
                    <span className={styles.strategistCorridor}>
                      📍 Bhubaneswar HQ &bull; Serving Across India
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat */}
              <div className={styles.deskWhatsappCallout}>
                <a
                  href={`https://wa.me/918763570630?text=${encodeURIComponent(
                    `Hi Aarav, I would like to book a free growth strategy consultation regarding ${defaultTopic} for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.deskWhatsappBtn}
                >
                  <span>💬 Chat on WhatsApp (Avg. 18m) ↗</span>
                </a>
              </div>
            </div>

            {/* Right Pane: Compact HubSpot Lead Form */}
            <div className={styles.formIntakePane}>
              <div className={styles.intakeHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span>{eyebrow}</span>
                </div>
                <h2 className={styles.intakeTitle}>{title}</h2>
                <p className={styles.intakeSub}>{subtitle}</p>
              </div>

              <HubSpotLeadForm id="growth-cockpit-form" formLocation={formLocation} />

              <div className={styles.trustMiniRow}>
                <span className={styles.liveDot} style={{ width: 5, height: 5 }} />
                <span>100% Confidential NDA &bull; 4-Hour Turnaround &bull; No Spam</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
