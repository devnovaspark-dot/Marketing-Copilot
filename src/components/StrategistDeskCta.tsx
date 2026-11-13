'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import HubSpotLeadForm from '@/components/HubSpotLeadForm';
import styles from './StrategistDeskCta.module.css';

interface StrategistDeskCtaProps {
  id?: string;
  defaultTopic?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  formLocation?: string;
}

export default function StrategistDeskCta({
  id = 'ask-strategist',
  defaultTopic = '🎯 Google & Meta Ads',
  title = 'Ask Our Strategists Directly.',
  subtitle = 'Submit your question below for a free, confidential strategic breakdown.',
  eyebrow = 'CONFIDENTIAL STRATEGY DISPATCH • NO PRESSURE',
  formLocation,
}: StrategistDeskCtaProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.ambientGlowTop} />
      <div className="container">
        <ScrollReveal>
          <div className={styles.dispatchCockpit}>
            {/* Left Pane: Strategist Desk & Trust Deck */}
            <div className={styles.strategistDeskPane}>
              <div>
                <div className={styles.strategistDeskHeader}>
                  <span className={styles.liveStatusPill}>
                    <span className={styles.liveDot} />
                    STRATEGIST ON-DUTY &bull; INDIA DESK
                  </span>
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
                    <h3 className={styles.strategistName}>Aarav Sharma</h3>
                    <span className={styles.strategistRole}>Principal Revenue Architect</span>
                    <span className={styles.strategistCorridor}>
                      📍 Bhubaneswar HQ &bull; Serving Businesses Across India
                    </span>
                  </div>
                </div>

                {/* Tactical Value Badges */}
                <div className={styles.strategistPillarsList}>
                  <div className={styles.pillarItem}>
                    <span className={styles.pillarIcon}>⚡</span>
                    <span>4-Hour Direct Turnaround</span>
                  </div>
                  <div className={styles.pillarItem}>
                    <span className={styles.pillarIcon}>🔒</span>
                    <span>100% Confidential NDA</span>
                  </div>
                  <div className={styles.pillarItem}>
                    <span className={styles.pillarIcon}>📊</span>
                    <span>Free Pan-India Competitor Audit</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className={styles.deskWhatsappCallout}>
                <a
                  href={`https://wa.me/918763570630?text=${encodeURIComponent(
                    `Hi Aarav, I would like to get a strategic consultation regarding ${defaultTopic} for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.deskWhatsappBtn}
                >
                  <span className={styles.whatsappIcon}>💬</span>
                  <span>Chat on WhatsApp (Avg. 18m) ↗</span>
                </a>
              </div>
            </div>

            {/* Right Pane: HubSpot Lead Form */}
            <div className={styles.formIntakePane}>
              <div>
                <div className={styles.intakeHeader}>
                  <div className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} />
                    {eyebrow}
                  </div>
                  <h2 className={styles.intakeTitle}>
                    {title}
                  </h2>
                  <p className={styles.intakeSub}>
                    {subtitle}
                  </p>
                </div>
              </div>

              <HubSpotLeadForm formLocation={formLocation} />

              <div className={styles.trustMiniRow}>
                <span className={styles.liveDot} style={{ width: 6, height: 6 }} />
                <span>100% Confidential &bull; Response within 4 hrs &bull; No Spam</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
