import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './TeamPreview.module.css';

const founders = [
  {
    name: 'Shankarsan Nayak',
    role: 'Founder & CEO',
    dept: 'Executive Leadership',
    image: '/images/team/exec_1.png',
    imagePosition: '50% 10%',
    bio: 'Founder of Marketing Copilot, driving innovation, digital transformation, and sustainable business growth through strategy, creativity, and measurable results.',
    quote: 'We drive innovation, digital transformation, and sustainable business growth through strategy, creativity, and measurable results.',
    color: '#38BDF8',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Pranjal Sharma',
    role: 'Founding Team Member & COO',
    dept: 'Operations & Scaling',
    image: '/images/team/exec_2.png',
    imagePosition: '50% 12%',
    bio: 'Leading digital marketing operations with 12+ years of experience, focused on seamless execution, operational excellence and delivering consistent client success.',
    quote: 'Focused on seamless execution, operational excellence and delivering consistent client success.',
    color: '#0D007F',
    linkedin: 'https://linkedin.com',
  },
];

const leaders = [
  {
    name: 'Praveen Kumar',
    role: 'Founding Team Member & CGO',
    dept: 'Growth & Strategy',
    image: '/images/team/exec_3.png',
    imagePosition: '50% 12%',
    bio: 'Spearheading commercial growth, strategic enterprise acquisitions, and high-value brand partnerships to expand Marketing Copilot\'s market footprint.',
    quote: 'Building high-leverage growth partnerships that unlock compounding market valuation.',
    color: '#F59E0B',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Bikram Keshari Sahu',
    role: 'Operation Executive',
    dept: 'Delivery & Analytics',
    image: '/images/team/exec_4.jpg',
    imagePosition: '50% 10%',
    bio: 'Orchestrating campaign delivery pipelines, cross-channel technical infrastructure, and strict SLA compliance for predictable client ROI.',
    quote: 'Operational rigor and precision delivery ensure every campaign produces audited results.',
    color: '#10B981',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sasmita Pal',
    role: 'HR Admin Executive',
    dept: 'People & Culture',
    image: '/images/team/exec_5.png',
    imagePosition: '50% 2%',
    bio: 'Fostering high-performance agency culture, talent acquisition, people development, and seamless organizational administration.',
    quote: 'Empowering world-class creative and engineering talent to build the next generation of growth systems.',
    color: '#F59E0B',
    linkedin: 'https://linkedin.com',
  },
];

export default function TeamPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Header - Eyebrow deleted as requested */}
        <div className={styles.header}>
          <ScrollReveal>
            <h3 className="display-lg">
              Meet the minds<br />
              <span className="accent-gradient">powering your growth.</span>
            </h3>
            <p className="body-lg" style={{ maxWidth: 540, marginTop: 12 }}>
              Dedicated operators and growth architects leading every campaign from strategy to execution.
            </p>
          </ScrollReveal>
        </div>

        {/* Tier 1: Co-Founders (2 Large Spacious Featured Cards) */}
        <div className={styles.topGrid}>
          {founders.map((exec, i) => (
            <ScrollReveal key={exec.name} delay={i * 90}>
              <div className={styles.founderCard}>
                <div className={styles.founderImgBox}>
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    priority
                    className={styles.photo}
                    style={{ objectPosition: exec.imagePosition || '50% 15%' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.photoOverlay} />
                  <span className={styles.deptBadge} style={{ color: exec.color, borderColor: `${exec.color}35` }}>
                    {exec.dept}
                  </span>
                </div>

                <div className={styles.founderDetails}>
                  <div className={styles.titleRow}>
                    <div>
                      <h4 className={styles.founderName}>{exec.name}</h4>
                      <p className={styles.founderRole} style={{ color: exec.color }}>{exec.role}</p>
                    </div>
                    <a href={exec.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinBtn} aria-label="LinkedIn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                      </svg>
                    </a>
                  </div>
                  <p className={styles.founderBio}>{exec.bio}</p>
                  <blockquote className={styles.founderQuote}>
                    &ldquo;{exec.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tier 2: Leadership Authorities (3 Generous Cards Below) */}
        <div className={styles.bottomGrid}>
          {leaders.map((exec, i) => (
            <ScrollReveal key={exec.name} delay={i * 80 + 150}>
              <div className={styles.leaderCard}>
                <div className={styles.leaderImgBox}>
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    className={styles.photo}
                    style={{ objectPosition: exec.imagePosition || '50% 15%' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={styles.photoOverlay} />
                  <span className={styles.deptBadge} style={{ color: exec.color, borderColor: `${exec.color}35` }}>
                    {exec.dept}
                  </span>
                </div>

                <div className={styles.leaderDetails}>
                  <div className={styles.titleRow}>
                    <div>
                      <h4 className={styles.leaderName}>{exec.name}</h4>
                      <p className={styles.leaderRole} style={{ color: exec.color }}>{exec.role}</p>
                    </div>
                    <a href={exec.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinBtn} aria-label="LinkedIn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                      </svg>
                    </a>
                  </div>
                  <p className={styles.leaderBio}>{exec.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Center Bottom View Full Team CTA */}
        <div className={styles.bottomCtaRow}>
          <ScrollReveal delay={120} className={styles.ctaReveal}>
            <BeamButton href="/about/team" label="View Full Team" size="md" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
