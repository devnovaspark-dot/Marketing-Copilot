import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

const projects: Record<string, {
  client: string; category: string; headline: string;
  challenge: string; strategy: string; execution: string;
  metrics: { val: string; label: string }[];
  color: string; image: string;
}> = {
  'ecommerce-brand': {
    client: 'E-Commerce Brand',
    category: 'Performance Marketing',
    headline: 'From ₹5L/mo ad spend to ₹2Cr+ revenue in 6 months.',
    challenge: 'The client was spending ₹5 lakhs monthly on ads with a 1.8X ROAS and inconsistent revenue. Their campaigns lacked structure, targeting was broad, and creatives hadn\'t been refreshed in over a year.',
    strategy: 'We restructured the entire campaign architecture — separating brand, prospecting, and retargeting. We built a creative testing framework and shifted budget toward high-intent keywords and lookalike audiences based on their top 10% customers.',
    execution: 'In the first 30 days, we launched 40+ creative variations. By month 3, we had identified the 6 winning creative formats. We scaled budget on winners, cut losers, and built a full-funnel attribution model to understand the true path to purchase.',
    metrics: [
      { val: '+142%', label: 'Revenue Growth' },
      { val: '4.8X', label: 'ROAS' },
      { val: '+83%', label: 'Lead Volume' },
      { val: '-32%', label: 'Cost per Acquisition' },
    ],
    color: '#0B2093',
    image: '/images/work_ecommerce.jpg',
  },
  'real-estate': {
    client: 'Real Estate Developer',
    category: 'SEO & Lead Generation',
    headline: 'Dominating Google search for luxury properties in Bhubaneswar.',
    challenge: 'A premium real estate developer with excellent projects but no organic visibility. They were paying for every lead through expensive PPC while competitors ranked organically.',
    strategy: 'Full technical SEO overhaul, local SEO optimization, and a content strategy targeting high-intent search terms across the buyer journey — from research to decision.',
    execution: 'We fixed 140+ technical issues, built 50+ location and project pages, and launched a content hub with neighborhood guides, investment analysis, and market reports. Link acquisition from real estate publications amplified authority.',
    metrics: [
      { val: '+187%', label: 'Organic Traffic' },
      { val: '+94%', label: 'Qualified Leads' },
      { val: '#1', label: 'Google Ranking' },
      { val: '-60%', label: 'Cost per Lead' },
    ],
    color: '#0D007F',
    image: '/images/work_realestate.jpg',
  },
  'd2c-fashion': {
    client: 'D2C Fashion Brand',
    category: 'Social Media & Creative',
    headline: 'Building a 200K+ community from scratch in 9 months.',
    challenge: 'A new D2C fashion brand with great products but zero social presence and limited budget. They needed organic growth, not just paid reach.',
    strategy: 'We identified their core customer persona — aspirational Indian women 22-35 — and built a content strategy around their lifestyle, not just the product. Authenticity over aesthetics.',
    execution: 'Daily Reels, weekly styling guides, bi-weekly influencer collabs with micro-creators, and a community management strategy that made every follower feel seen. Sales integration came only after trust was established.',
    metrics: [
      { val: '200K+', label: 'Followers Built' },
      { val: '+320%', label: 'Engagement Rate' },
      { val: '3.2X', label: 'Sales Lift' },
      { val: '-40%', label: 'Customer Acquisition Cost' },
    ],
    color: '#F59E0B',
    image: '/images/work_fashion.jpg',
  },
  'restaurant-chain': {
    client: 'Noir Dining Experience',
    category: 'Local SEO & Social',
    headline: 'From invisible to the go-to luxury dining destination in the city.',
    challenge: 'A premium culinary brand launching multiple restaurant locations across Odisha needed instant local buzz and predictable footfall without relying purely on discount aggregators.',
    strategy: 'Hyper-localized Google My Business optimization, curated food creator tasting experiences, high-production reel campaigns, and geotargeted ads within 7km of venues.',
    execution: 'Ran 15 viral influencer food drops, established local review dominance with 890+ 5-star Google ratings, and implemented VIP table booking funnels that filled weekend tables 3 weeks in advance.',
    metrics: [
      { val: '+400%', label: 'Footfall Growth' },
      { val: '4.8★', label: 'Google Reviews' },
      { val: '#1', label: 'Local Map Pack' },
      { val: '3.8X', label: 'Revenue ROI' },
    ],
    color: '#34D399',
    image: '/images/work_restaurant.jpg',
  },
  'edtech-startup': {
    client: 'LearnFlow EdTech',
    category: 'Performance Marketing & SEO',
    headline: 'Scaling from 500 to 10,000+ monthly active enrolled students.',
    challenge: 'High cost per lead and low webinar attendance rates were choking growth for a technical upskilling platform competing with national giants.',
    strategy: 'Re-architected lead funnels with high-value diagnostic tests, multi-step SMS/WhatsApp nurture sequences, and aggressive search intent SEO targeting emerging tech careers.',
    execution: 'Deployed programmatic landing pages for 40+ skills, optimized Google Search intent bidding, and built automated retargeting sequences that recovered 38% of abandoned enrollments.',
    metrics: [
      { val: '20X', label: 'Active Learners' },
      { val: '-45%', label: 'Cost Per Lead' },
      { val: '+892%', label: 'Organic Search' },
      { val: '5.2X', label: 'Blended ROAS' },
    ],
    color: '#EC4899',
    image: '/images/work_edtech.jpg',
  },
  'healthcare-brand': {
    client: 'MediConnect Health',
    category: 'Branding & Web Platform',
    headline: 'Rebranding into a trusted digital healthcare and appointment ecosystem.',
    challenge: 'An established 15-year-old clinic network had an outdated digital footprint, leading younger demographic patients to choose competing modern healthcare apps.',
    strategy: 'Complete brand modernisation, doctor authority positioning, lightning-fast Next.js booking engine, and local health search SEO optimization.',
    execution: 'Launched a patient-centric UI/UX web app, automated doctor calendar bookings, filmed educational doctor video series, and captured top search positions for 120+ medical queries.',
    metrics: [
      { val: '+275%', label: 'Online Bookings' },
      { val: '4.9★', label: 'Patient Rating' },
      { val: '18k+', label: 'Active Patients' },
      { val: '+180%', label: 'Organic Inquiries' },
    ],
    color: '#60A5FA',
    image: '/images/work_healthcare.jpg',
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) return { title: 'Case Study Not Found' };
  return {
    title: `${p.client} Case Study — ${p.category} | Marketing Copilot`,
    description: p.headline,
    alternates: {
      canonical: `https://marketingcopilot.in/work/${slug}`,
    },
    openGraph: {
      title: `${p.client} Case Study — ${p.category}`,
      description: p.headline,
      url: `https://marketingcopilot.in/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) notFound();

  return (
    <>
      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero} style={{ '--c': p.color } as React.CSSProperties}>
          <div className={styles.heroBg} />
          <div className="container">
            <div className={styles.heroBack}>
              <Link href="/work" className={styles.back}>← Back to all case studies</Link>
            </div>
            <ScrollReveal>
              <span className={styles.cat}>{p.category}</span>
              <h1 className={`display-xl ${styles.title}`}>{p.headline}</h1>
              <div className={styles.metrics}>
                {p.metrics.map(m => (
                  <div key={m.label} className={styles.metric}>
                    <span className={styles.mVal} style={{ color: p.color }}>{m.val}</span>
                    <span className={styles.mLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Showcase Image */}
        <div className="container">
          <ScrollReveal>
            <div className={styles.showcaseWrapper}>
              <div className={styles.showcaseVisual}>
                <Image
                  src={p.image}
                  alt={p.client}
                  fill
                  priority
                  className={styles.showcaseImg}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Content */}
        <section className={styles.content}>
          <div className="container-sm">
            <ScrollReveal>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepNum}>01</span>
                  <h2 className={styles.sectionTitle}>The Challenge</h2>
                </div>
                <p className={styles.sectionText}>{p.challenge}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepNum}>02</span>
                  <h2 className={styles.sectionTitle}>The Strategy</h2>
                </div>
                <p className={styles.sectionText}>{p.strategy}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepNum}>03</span>
                  <h2 className={styles.sectionTitle}>The Execution</h2>
                </div>
                <p className={styles.sectionText}>{p.execution}</p>
              </div>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal>
              <div className={styles.results}>
                <h2 className={styles.sectionTitle}>Measurable Business Impact</h2>
                <div className={styles.resultsGrid}>
                  {p.metrics.map(m => (
                    <div key={m.label} className={styles.resultCard}>
                      <span className={styles.resultVal} style={{ color: p.color }}>{m.val}</span>
                      <span className={styles.resultLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
