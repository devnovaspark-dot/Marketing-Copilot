import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Work — Case Studies & Portfolio | Marketing Copilot',
  description: 'Selected case studies showing how we\'ve helped brands achieve measurable growth through strategy, creative, and performance marketing.',
  keywords: [
    'Digital Marketing Portfolio India',
    'Marketing Case Studies India',
    'Client Growth Results',
    'Performance Marketing Case Studies',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/work',
  },
};

const projects = [
  {
    slug: 'ecommerce-brand',
    client: 'E-Commerce Brand',
    category: 'Performance Marketing',
    headline: 'From ₹5L/mo ad spend to ₹2Cr+ revenue in 6 months.',
    metrics: ['+142% Revenue', '4.8X ROAS', '+83% Leads'],
    color: '#0B2093',
    image: '/images/work_ecommerce.jpg',
    featured: true,
  },
  {
    slug: 'real-estate',
    client: 'Real Estate Developer',
    category: 'SEO & Lead Generation',
    headline: 'Dominating Google search for luxury properties in Bhubaneswar.',
    metrics: ['+187% Traffic', '+94% Leads', '#1 on Google'],
    color: '#0D007F',
    image: '/images/work_realestate.jpg',
    featured: false,
  },
  {
    slug: 'd2c-fashion',
    client: 'D2C Fashion Brand',
    category: 'Social Media & Creative',
    headline: 'Building a 200K+ community from scratch in 9 months.',
    metrics: ['200K+ Followers', '+320% Engagement', '3.2X Sales'],
    color: '#F59E0B',
    image: '/images/work_fashion.jpg',
    featured: false,
  },
  {
    slug: 'restaurant-chain',
    client: 'Noir Dining Experience',
    category: 'Local SEO & Social',
    headline: 'From invisible to the go-to luxury dining destination.',
    metrics: ['+400% Footfall', '4.8★ Reviews', '#1 Local Pack'],
    color: '#34D399',
    image: '/images/work_restaurant.jpg',
    featured: false,
  },
  {
    slug: 'edtech-startup',
    client: 'LearnFlow EdTech',
    category: 'Performance & SEO',
    headline: 'Scaling from 500 to 10,000+ active learners.',
    metrics: ['20X Learners', '-45% CPL', '+892% Organic'],
    color: '#EC4899',
    image: '/images/work_edtech.jpg',
    featured: false,
  },
  {
    slug: 'healthcare-brand',
    client: 'MediConnect Health',
    category: 'Branding & Web Platform',
    headline: 'Rebranding into a trusted modern digital health provider.',
    metrics: ['+275% Online Appts', '4.9★ Rating', '18k+ Patients'],
    color: '#60A5FA',
    image: '/images/work_healthcare.jpg',
    featured: false,
  },
];

export default function WorkPage() {
  return (
    <>
      <div className={styles.page}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 16px' }}>
                <span className="eyebrow-dot" />
                Selected Work
              </div>
              <h1 className={`display-xl ${styles.title}`}>
                Work that<br />
                <span className="accent-gradient">speaks for itself.</span>
              </h1>
              <p className={`body-lg ${styles.sub}`}>
                Real campaigns. Real revenue. Selected case studies from ambitious brands we&apos;ve helped scale across India.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Featured project */}
        <div className="container">
          <ScrollReveal>
            <Link href={`/work/${projects[0].slug}`} className={styles.featured}>
              <div className={styles.featuredVisual}>
                <Image 
                  src={projects[0].image}
                  alt={projects[0].client}
                  fill
                  className={styles.featuredImg}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className={styles.featuredOverlay} />
              </div>
              <div className={styles.featuredInfo}>
                <span className={styles.cat}>{projects[0].category}</span>
                <h2 className={styles.featuredClient}>{projects[0].client}</h2>
                <p className={styles.featuredHeadline}>{projects[0].headline}</p>
                <div className={styles.metrics}>
                  {projects[0].metrics.map(m => (
                    <span key={m} className={styles.metric} style={{ color: projects[0].color }}>{m}</span>
                  ))}
                </div>
                <span className={styles.cta}>View Case Study →</span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grid */}
          <div className={styles.grid}>
            {projects.slice(1).map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 80}>
                <Link href={`/work/${p.slug}`} className={`card ${styles.card}`}>
                  <div className={styles.cardVisual}>
                    <Image
                      src={p.image}
                      alt={p.client}
                      fill
                      className={styles.cardImg}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={styles.cardOverlay} />
                    <span className={styles.cardBadge} style={{ borderColor: `${p.color}40`, color: p.color }}>
                      {p.category}
                    </span>
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardClient}>{p.client}</h3>
                    <p className={styles.cardHeadline}>{p.headline}</p>
                    <div className={styles.cardMetrics}>
                      {p.metrics.map(m => (
                        <span key={m} className={styles.metric} style={{ color: p.color }}>{m}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
