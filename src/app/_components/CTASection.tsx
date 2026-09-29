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
              Get Started
            </div>
            <h2 className={`display-xl ${styles.headline}`}>
              Ready to Scale <span className="accent-gradient">With a Dedicated Growth Partner?</span>
            </h2>
            <p className={`body-lg ${styles.sub}`} style={{ maxWidth: 760, margin: '0 auto 32px' }}>
              Whether you want to improve search engine rankings, generate leads, connect with more customers using paid ads, or create a stronger online presence, Marketing Copilot can help you build a plan that matches your business goals.<br /><br />
              Understand where your business stands online and find chances to grow.
            </p>
            <div className={styles.actions}>
              <BeamButton href="/contact" label="Grow Your Business With Us" size="lg" />
              <BeamButton href="/portfolio" label="View Our Work" size="lg" variant="outline" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
