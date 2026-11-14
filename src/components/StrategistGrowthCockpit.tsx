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
  title = 'Book Your Free Strategy Consultation',
  subtitle = 'Submit your details below for a confidential growth blueprint tailored to your brand.',
  eyebrow = 'CONFIDENTIAL STRATEGY DISPATCH • NO OBLIGATION',
  formLocation = '/',
}: StrategistGrowthCockpitProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.ambientGlowTop} />
      <div className="container">
        <ScrollReveal>
          <div className={styles.dispatchCockpit}>
            {/* Left Pane: Signature Navy Blue Growth Strategist Desk */}
            <div className={styles.strategistDeskPane}>
              <div>
                <div className={styles.liveStatusPill}>
                  <span className={styles.liveDot} />
                  <span>STRATEGIST ON-DUTY &bull; INDIA DESK</span>
                </div>

                <div className={styles.deskHeader}>
                  <h3 className={styles.deskTitle}>
                    Talk Directly With a Growth Strategist
                  </h3>
                  <p className={styles.deskSub}>
                    A confidential 1-on-1 strategy session to audit your acquisition channels and map high-ROAS growth.
                  </p>
                </div>

                {/* Real Photography Asset Card: Executive Strategist */}
                <div className={styles.visualImageCard}>
                  <Image
                    src="/images/ceo_aarav.jpg"
                    alt="Aarav Sharma - Principal Revenue Architect"
                    fill
                    className={styles.panelImg}
                    priority={false}
                  />
                  <div className={styles.imgOverlayPill}>
                    <div className={styles.strategistBrief}>
                      <div className={styles.avatarMini}>
                        <Image
                          src="/images/ceo_aarav.jpg"
                          alt="Aarav Sharma"
                          fill
                          className={styles.avatarMiniImg}
                        />
                      </div>
                      <div className={styles.strategistMeta}>
                        <span className={styles.strategistName}>Aarav Sharma</span>
                        <span className={styles.strategistRole}>Principal Revenue Architect</span>
                      </div>
                    </div>
                    <span className={styles.verifiedCheck}>✓ Verified</span>
                  </div>
                </div>

                {/* Minimalist 2-Bullet Highlights */}
                <div className={styles.quickBullets}>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletCheck}>✓</span>
                    <span>4-Hour Direct Turnaround</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletCheck}>✓</span>
                    <span>100% Confidential NDA Protected</span>
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
