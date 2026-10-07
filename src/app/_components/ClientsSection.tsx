import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './ClientsSection.module.css';

const clientLogos = [
  { name: 'Weekend Bhraman', src: '/images/clients/weekend-bhraman.png' },
  { name: 'Travysys', src: '/images/clients/travysys.png' },
  { name: 'Sri Pandurangan Divine Fresh', src: '/images/clients/sri-pandurangan-divine-fresh.png' },
  { name: 'Praveen Electronics', src: '/images/clients/praveen-electronics.png' },
  { name: 'Medallion House', src: '/images/clients/medallion-house.png' },
  { name: 'HEED', src: '/images/clients/heed.png' },
  { name: 'EKATRAA', src: '/images/clients/ekatraa.png' },
  { name: 'Sabour', src: '/images/clients/Sabour-logo.png' },
  { name: 'Zue Studio', src: '/images/clients/Zue-Studio-Logo-color (1).png' },
];

export default function ClientsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.label}>
          <span className={styles.labelDot} />
          <span>Trusted by Ambitious Brands &amp; Growing Enterprises</span>
        </div>
      </div>

      {/* Slower, Smooth Infinite Marquee Carousel with High-Visibility Logos */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeLeft} />
        <div className={styles.marqueeTrack}>
          {/* Quadruple array for seamless, jitter-free continuous loop */}
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((c, i) => (
            <div key={i} className={styles.clientItem} title={c.name}>
              <div className={styles.logoCard}>
                <Image
                  src={c.src}
                  alt={`${c.name} brand logo`}
                  width={160}
                  height={52}
                  className={styles.logoImage}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.fadeRight} />
      </div>

      {/* Premium Skeuomorphic Partnership CTA Card (Centered & High-Impact) */}
      <div className="container" style={{ marginTop: 40 }}>
        <ScrollReveal>
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlowOrb} />
            <div className={styles.ctaCardMesh} />
            
            {/* Centered Top Badge */}
            <div className={styles.ctaBadgeWrap}>
              <div className={styles.ctaBadge}>
                <span className={styles.badgePulse} />
                <span>For Ambitious Businesses · Strategy That Moves the Needle</span>
              </div>
            </div>
            
            {/* Centered Typography (Concise & Punchy) */}
            <h2 className={styles.ctaTitle}>
              Your Business Deserves a <span className="accent-gradient">Smarter Digital Strategy</span>
            </h2>
            
            <p className={styles.ctaSubtitle}>
              Partner with a trusted Digital Marketing Company in India for SEO, Google Ads, online marketing services, and tailored Digital Marketing Solutions that drive visibility, leads, and growth.
            </p>

            {/* Centered Feature Capability Pills */}
            <div className={styles.ctaFeatures}>
              <div className={styles.featurePill}>
                <span className={styles.featureIcon}>🎯</span>
                <span>Competitor SERP Intelligence</span>
              </div>
              <div className={styles.featurePill}>
                <span className={styles.featureIcon}>⚡</span>
                <span>Full-Funnel Ad Optimization</span>
              </div>
              <div className={styles.featurePill}>
                <span className={styles.featureIcon}>📈</span>
                <span>10x Growth Framework</span>
              </div>
            </div>

            {/* Centered Skeuomorphic Button & Trust Verification (At the Bottom of Card) */}
            <div className={styles.ctaBottomCenter}>
              <BeamButton href="/contact" label="Grow Your Business With Us" size="md" />

              <div className={styles.ctaTrustCard}>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <span>100% Free Audit</span>
                </div>
                <span className={styles.trustSep}>•</span>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <span>24h Turnaround</span>
                </div>
                <span className={styles.trustSep}>•</span>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
