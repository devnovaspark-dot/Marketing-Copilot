import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.innerBox}>
          <ScrollReveal className="text-center">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              CONFIDENTIAL STRATEGIC REVIEW
            </div>
            <h2 className={`display-xl ${styles.headline}`}>
              Ready for Marketing <span className="accent-gradient">That Drives Revenue?</span>
            </h2>
            <p className={`body-lg ${styles.sub}`} style={{ maxWidth: 760, margin: '0 auto 30px' }}>
              Let’s talk about your growth. Send us your question for a free, confidential growth assessment and 90-day execution blueprint tailored to your industry.
            </p>
            <div className={styles.actions}>
              <BeamButton href="/contact" label="Find Your Fastest Path to Growth →" size="lg" />
              <BeamButton href="/portfolio" label="Explore Verified Case Studies" size="lg" variant="outline" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
