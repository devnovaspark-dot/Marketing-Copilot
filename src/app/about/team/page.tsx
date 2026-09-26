import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Executive Leadership & Team — Marketing Copilot',
  description: 'Meet the executive leadership, growth strategists, operations leads, and engineers building scalable brands at Marketing Copilot in Bhubaneswar.',
};

const founders = [
  {
    name: 'Shankarsan Nayak',
    role: 'Founder & CEO',
    dept: 'Executive Leadership',
    image: '/images/team/exec_1.png',
    imagePosition: '50% 10%',
    bio: 'Founder of Marketing Copilot, a digital marketing agency in Bhubaneswar, driving innovation, digital transformation, and sustainable business growth through strategy, creativity, and measurable results.',
    quote: 'We drive innovation, digital transformation, and sustainable business growth through strategy, creativity, and measurable results.',
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
    bio: 'Spearheading commercial growth, strategic enterprise acquisitions, and high-value brand partnerships to expand Marketing Copilot\'s market footprint across India.',
    quote: 'Building high-leverage growth partnerships that unlock compounding market valuation for ambitious brands.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Bikram Keshari Sahu',
    role: 'Operation Executive',
    dept: 'Delivery & Analytics',
    image: '/images/team/exec_4.jpg',
    imagePosition: '50% 10%',
    bio: 'Orchestrating campaign delivery pipelines, cross-channel technical infrastructure, and strict SLA compliance for predictable client ROI and operational excellence.',
    quote: 'Operational rigor and precision delivery ensure every campaign produces audited business results.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sasmita Pal',
    role: 'HR Admin Executive',
    dept: 'People & Culture',
    image: '/images/team/exec_5.png',
    imagePosition: '50% 2%',
    bio: 'Fostering high-performance agency culture, talent acquisition, people development, and seamless organizational administration across the studio.',
    quote: 'Empowering world-class creative and engineering talent to build the next generation of growth systems.',
    linkedin: 'https://linkedin.com',
  },
];

const practiceLeads = [
  {
    name: 'Dev Mohanty',
    role: 'Lead AI Workflow Engineer',
    dept: 'AI & Automation',
    initials: 'DM',
    color: '#0B2093',
    bio: 'Designs intelligent agentic lead-scoring pipelines, WhatsApp AI response bots, and automated client intelligence dashboards.',
    quote: 'Automate repetitive operational tasks to amplify strategic high-leverage growth.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Kavya Reddy',
    role: 'Head of Social & Creator Ecosystems',
    dept: 'Social & Creator Collabs',
    initials: 'KR',
    color: '#F59E0B',
    bio: 'Scales viral short-form Reel strategies, creator relationship funnels, and community engagement loops that build rabid brand loyalty.',
    quote: 'Authenticity, cultural relevance, and speed beat heavy corporate advertising every single time.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ananya Mishra',
    role: 'Lead SEO & Organic Growth Strategist',
    dept: 'Search & Content Intelligence',
    initials: 'AM',
    color: '#0D007F',
    bio: 'Specialist in technical indexing, local map pack dominance, and high-intent programmatic content hubs generating compounding traffic.',
    quote: 'Dominating organic search results creates long-term brand equity with zero ongoing ad spend.',
    linkedin: 'https://linkedin.com',
  },
];

export default function TeamPage() {
  return (
    <>
      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Company Leadership & Team
              </div>
              <h1 className={`display-xl ${styles.title}`}>
                Meet the minds<br />
                <span className="accent-gradient">behind the growth.</span>
              </h1>
              <p className={`body-lg ${styles.sub}`}>
                A collective of seasoned operators, performance marketing directors, and technology architects dedicated to measurable business outcomes.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Executive Officers: Tier 1 (Founders) + Tier 2 (Leaders) */}
        <section className={styles.execSection}>
          <div className="container">
            <ScrollReveal>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Executive Board</span>
                <h2 className={styles.sectionTitle}>Company Authorities & Partners</h2>
              </div>
            </ScrollReveal>

            {/* 2 Core Founders */}
            <div className={styles.topGrid}>
              {founders.map((leader, i) => (
                <ScrollReveal key={leader.name} delay={i * 90}>
                  <div className={styles.founderCard}>
                    <div className={styles.founderImgBox}>
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        priority={true}
                        unoptimized={true}
                        className={styles.execImg}
                        style={{ objectPosition: leader.imagePosition || '50% 15%' }}
                        sizes="(max-width: 900px) 100vw, 50vw"
                      />
                      <div className={styles.execImgOverlay} />
                      <span className={styles.deptBadge}>{leader.dept}</span>
                    </div>
                    <div className={styles.founderDetails}>
                      <div className={styles.execTopRow}>
                        <div>
                          <h3 className={styles.execName}>{leader.name}</h3>
                          <p className={styles.execRole}>{leader.role}</p>
                        </div>
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink} aria-label="LinkedIn Profile">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                          </svg>
                        </a>
                      </div>
                      <p className={styles.execBio}>{leader.bio}</p>
                      <blockquote className={styles.execQuote}>
                        &ldquo;{leader.quote}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* 3 Departmental Leaders */}
            <div className={styles.bottomGrid}>
              {leaders.map((leader, i) => (
                <ScrollReveal key={leader.name} delay={i * 90 + 150}>
                  <div className={styles.execCard}>
                    <div className={styles.execImgBox}>
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        priority={true}
                        unoptimized={true}
                        className={styles.execImg}
                        style={{ objectPosition: leader.imagePosition || '50% 15%' }}
                        sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className={styles.execImgOverlay} />
                      <span className={styles.deptBadge}>{leader.dept}</span>
                    </div>
                    <div className={styles.execDetails}>
                      <div className={styles.execTopRow}>
                        <div>
                          <h3 className={styles.execName}>{leader.name}</h3>
                          <p className={styles.execRole}>{leader.role}</p>
                        </div>
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink} aria-label="LinkedIn Profile">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                          </svg>
                        </a>
                      </div>
                      <p className={styles.execBio}>{leader.bio}</p>
                      <blockquote className={styles.execQuote}>
                        &ldquo;{leader.quote}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Leads */}
        <section className={styles.teamSection}>
          <div className="container">
            <ScrollReveal>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Practice Leads</span>
                <h2 className={styles.sectionTitle}>Domain Specialists</h2>
              </div>
            </ScrollReveal>

            <div className={styles.practiceGrid}>
              {practiceLeads.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 80}>
                  <div className={`card ${styles.card}`}>
                    <div className={styles.cardHeader}>
                      <div className={styles.avatar} style={{ background: `${t.color}15`, color: t.color, borderColor: `${t.color}35` }}>
                        {t.initials}
                      </div>
                      <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinIcon} aria-label="LinkedIn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                        </svg>
                      </a>
                    </div>
                    <div className={styles.cardInfo}>
                      <span className={styles.dept} style={{ color: t.color }}>{t.dept}</span>
                      <h3 className={styles.name}>{t.name}</h3>
                      <p className={styles.role}>{t.role}</p>
                      <p className={styles.bio}>{t.bio}</p>
                      <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className={styles.culture}>
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Work Culture & Values
              </div>
              <h2 className="display-md">
                How we operate at Marketing Copilot.
              </h2>
            </ScrollReveal>
            <div className={styles.cultureGrid}>
              {[
                { title: 'Commercial Outcomes First', desc: 'We prioritize net business profit and revenue expansion over vanity metrics and impression volume.' },
                { title: 'Continuous Experimentation', desc: 'We run structured weekly A/B testing across creative variations, audience funnels, and landing page UX.' },
                { title: 'Extreme Operational Ownership', desc: 'Every client account has direct leadership involvement and transparent SLA-backed communications.' },
                { title: 'World-Class Technology Stack', desc: 'From custom Next.js platforms to AI attribution models, we deploy the most modern tools available.' },
              ].map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 80}>
                  <div className={styles.cultureItem}>
                    <h3 className={styles.cultureTitle}>{c.title}</h3>
                    <p className={styles.cultureDesc}>{c.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
