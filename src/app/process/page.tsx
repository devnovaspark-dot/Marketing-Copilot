import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Process — From Idea to Impact',
  description: 'A proven 5-step growth framework: Discover, Strategize, Create, Launch, and Optimize. See how we turn ambition into results.',
  alternates: {
    canonical: 'https://marketingcopilot.in/process',
  },
};

const steps = [
  {
    num: '01',
    title: 'Discover',
    tagline: 'Understand before you act.',
    desc: 'We start with an intensive research phase — your business, market landscape, competitors, and target audience. We find the real opportunity, not just the obvious one.',
    deliverables: ['Business & goal audit', 'Competitive analysis', 'Audience research', 'Opportunity mapping'],
    duration: '1–2 weeks',
    color: '#0B2093',
  },
  {
    num: '02',
    title: 'Strategize',
    tagline: 'Build the growth system.',
    desc: 'We translate insights into a custom growth strategy — channel selection, budget allocation, content pillars, and KPIs. No copy-paste templates. Your strategy, built for your opportunity.',
    deliverables: ['Growth strategy document', 'Channel plan', 'Budget allocation', 'KPI framework'],
    duration: '1–2 weeks',
    color: '#0D007F',
  },
  {
    num: '03',
    title: 'Create',
    tagline: 'Turn strategy into content.',
    desc: 'Strategy without creative is just a spreadsheet. We produce the campaigns, content, ads, and assets needed to execute — built to capture attention and drive action.',
    deliverables: ['Campaign creatives', 'Content calendar', 'Ad copy & designs', 'Landing pages'],
    duration: '2–3 weeks',
    color: '#F59E0B',
  },
  {
    num: '04',
    title: 'Launch',
    tagline: 'Put it in front of the right people.',
    desc: 'Precision deployment across selected channels. We monitor in real-time, make rapid adjustments, and ensure every campaign goes live correctly and efficiently.',
    deliverables: ['Campaign launch', 'Real-time monitoring', 'Initial optimization', 'First performance report'],
    duration: 'Ongoing',
    color: '#34D399',
  },
  {
    num: '05',
    title: 'Optimize',
    tagline: 'Measure. Learn. Scale.',
    desc: 'This is where we compound. Monthly analysis, A/B testing, budget reallocation, and expansion into new opportunities. The longer we work together, the better the results.',
    deliverables: ['Monthly reporting', 'A/B test results', 'Optimization roadmap', 'Growth plan'],
    duration: 'Monthly',
    color: '#EC4899',
  },
];

export default function ProcessPage() {
  return (
    <>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 16px' }}>
                <span className="eyebrow-dot" />
                Our Process
              </div>
              <h1 className={`display-xl ${styles.title}`}>
                From idea<br />
                <span className="accent-gradient">to impact.</span>
              </h1>
              <p className={`body-lg ${styles.sub}`}>
                A repeatable, proven system for turning ambitious goals into measurable growth. Our process is designed for businesses across India, with strategies adapted to each market, audience, industry, and growth objective.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className={styles.stepsSection}>
          <div className="container">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num}>
                <div className={`${styles.step} ${i % 2 === 1 ? styles.stepReverse : ''}`}>
                  <div className={styles.stepLeft}>
                    <div className={styles.stepNumBig} style={{ color: s.color }}>{s.num}</div>
                    <h2 className={styles.stepTitle}>{s.title}</h2>
                    <p className={styles.stepTagline} style={{ color: s.color }}>{s.tagline}</p>
                    <p className={styles.stepDesc}>{s.desc}</p>
                    <div className={styles.stepMeta}>
                      <span className={styles.metaLabel}>Duration</span>
                      <span className={styles.metaVal}>{s.duration}</span>
                    </div>
                  </div>
                  <div className={styles.stepRight}>
                    <div className={styles.deliverablesCard} style={{ '--c': s.color } as React.CSSProperties}>
                      <div className={styles.delTop}>
                        <span className={styles.delLabel}>Deliverables</span>
                      </div>
                      {s.deliverables.map(d => (
                        <div key={d} className={styles.deliverable}>
                          <span className={styles.delIcon} style={{ background: s.color }}>✓</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className={styles.connector}>
                    <div className={styles.connectorLine} />
                    <span className={styles.connectorArrow}>↓</span>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
