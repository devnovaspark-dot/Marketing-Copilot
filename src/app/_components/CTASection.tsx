import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './CTASection.module.css';

interface CTASectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CTASection({
  eyebrow = 'CONFIDENTIAL STRATEGIC REVIEW',
  title = (
    <>
      Ready for Marketing <span className="accent-gradient">That Drives Revenue?</span>
    </>
  ),
  subtitle = 'Let’s talk about your growth. Send us your question for a free, confidential growth assessment and 90-day execution blueprint tailored to your industry.',
  primaryBtnText = 'Find Your Fastest Path to Growth →',
  primaryBtnHref = '/contact',
  secondaryBtnText = 'Explore Verified Case Studies',
  secondaryBtnHref = '/portfolio',
}: CTASectionProps = {}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.innerBox}>
          <ScrollReveal className="text-center">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              {eyebrow}
            </div>
            <h2 className={`display-xl ${styles.headline}`}>
              {title}
            </h2>
            <p className={`body-lg ${styles.sub}`} style={{ maxWidth: 760, margin: '0 auto 30px' }}>
              {subtitle}
            </p>
            <div className={styles.actions}>
              <BeamButton href={primaryBtnHref} label={primaryBtnText} size="lg" />
              {secondaryBtnText && (
                <BeamButton href={secondaryBtnHref} label={secondaryBtnText} size="lg" variant="outline" />
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
