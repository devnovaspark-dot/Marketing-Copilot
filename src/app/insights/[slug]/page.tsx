import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import BeamButton from '@/components/BeamButton';
import styles from './page.module.css';

interface ArticleData {
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  authorRole: string;
  summary: string;
  content: string[];
  takeaways: string[];
}

const articles: Record<string, ArticleData> = {
  'future-of-performance-marketing': {
    title: 'The future of performance marketing in an AI-first world.',
    category: 'Marketing',
    readTime: '8 min read',
    date: 'September 5, 2026',
    image: '/images/dashboard_hero.jpg',
    author: 'Aarav Sharma',
    authorRole: 'CEO & Growth Strategist',
    summary: 'AI is fundamentally transforming paid media from mechanical audience targeting into creative velocity and first-party signal engineering.',
    takeaways: [
      'Creative is the new targeting: machine learning models optimize around creative intent rather than manual keyword clusters.',
      'Attribution must move beyond last-click models to media mix modeling and incrementality testing.',
      'Speed of creative testing iteration is the single biggest determinant of blended ROAS scale.'
    ],
    content: [
      'AI is no longer just a buzzword in performance marketing — it is the underlying engine powering Google Performance Max, Meta Advantage+, and programmatic DSP bidding algorithms.',
      'Traditional media buying was centered around micro-targeting: adjusting bids, setting precise exclusion lists, and tinkering with narrow age/interest brackets. Today, algorithmic platforms execute real-time bidding adjustments in sub-milliseconds far better than any human operator.',
      'The strategic advantage has shifted upward. In 2026, winning brands focus on two primary levers: High-velocity creative production and clean, server-side first-party data signals.',
      'When your creative messaging speaks with surgical precision to a specific customer persona, the AI engine naturally identifies and serves your ad to identical high-converting prospects. In effect, your creative asset is your targeting filter.',
      'To build a compounding paid acquisition moat, brands must establish a systematic weekly testing cadence: testing new visual hooks every 7 days, analyzing 3-second hold rates, and rapidly killing underperforming angles before ad spend is burned.'
    ]
  },
  'seo-in-2026': {
    title: 'SEO in 2026: What actually works and what to completely ignore.',
    category: 'SEO',
    readTime: '6 min read',
    date: 'August 28, 2026',
    image: '/images/work_realestate.jpg',
    author: 'Ananya Mishra',
    authorRole: 'Lead SEO Strategist',
    summary: 'How search engines and generative AI answers evaluate topical authority, technical indexability, and digital brand footprint.',
    takeaways: [
      'Entity authority and information gain score now supersede repetitive keyword density.',
      'Local Map Pack rankings demand genuine customer sentiment velocity and citation consistency.',
      'Core Web Vitals and sub-100ms interaction response times are direct ranking factors.'
    ],
    content: [
      'Search engines in 2026 have evolved beyond simple string matching into sophisticated semantic neural networks that comprehend context, authority, and true information gain.',
      'Keyword stuffing and generic AI content spinning are actively penalized. To capture top organic rankings, brands must provide original data, proprietary research, and actionable expert perspectives that do not exist elsewhere on the web.',
      'For regional businesses across India, local SEO is the highest ROI acquisition channel. Ranking in the Google Local 3-Pack requires a synchronized strategy of verified Google Business Profiles, localized schema markup, and authentic review acquisition cadences.'
    ]
  },
  'building-brand-recall': {
    title: 'How to build unbreakable brand recall in a world of infinite content.',
    category: 'Branding',
    readTime: '5 min read',
    date: 'August 20, 2026',
    image: '/images/about_hero.jpg',
    author: 'Sanjay Mohanty',
    authorRole: 'Chief Marketing Officer',
    summary: 'Why distinct visual design systems and cultural storytelling create durable pricing power that paid ads alone cannot buy.',
    takeaways: [
      'Brand consistency across all customer touchpoints increases recognized recall by up to 80%.',
      'A distinctive visual identity creates mental shortcuts that lower customer acquisition costs.',
      'Story-driven narrative campaigns build generational trust and defend profit margins.'
    ],
    content: [
      'In a digital landscape flooded with generic templated content, the brands that win long-term are those that cultivate an unmistakable visual and emotional signature.',
      'Brand equity is what remains when you turn off your ad spend. It is the reason customers search for you by name rather than clicking on the top sponsored ad slot.',
      'We work with brands to craft distinct brand guidelines, tactile UI/UX digital experiences, and sharp messaging that turn casual first-time viewers into loyal brand advocates.'
    ]
  },
  'social-media-strategy-2026': {
    title: 'The short-form social strategy that drove 200K followers in 9 months.',
    category: 'Social',
    readTime: '7 min read',
    date: 'August 12, 2026',
    image: '/images/work_fashion.jpg',
    author: 'Kavya Reddy',
    authorRole: 'Head of Social',
    summary: 'A teardown of the creative hooks, production workflows, and community engagement systems used to build a passionate brand community.',
    takeaways: [
      'First 2-second hook retention is the primary distribution metric on modern short-form algorithms.',
      'Community replies and direct conversational loops turn followers into paying customers.',
      'Consistent publishing cadences outperform sporadic high-budget commercial shoots.'
    ],
    content: [
      'Growing an engaged social community in 2026 is an exact science of understanding audience psychology and algorithmic distribution mechanics.',
      'We dismantled the traditional slow agency production cycle and replaced it with an agile growth sprint model: script, record, edit, test, analyze, and scale within 48 hours.',
      'By focusing on educational entertainment, behind-the-scenes authenticity, and relatable cultural memes, our partner brands consistently outperform competitors spending 10X more on production.'
    ]
  },
  'roas-myths': {
    title: '5 dangerous ROAS myths that are quietly burning your media budget.',
    category: 'Marketing',
    readTime: '5 min read',
    date: 'August 5, 2026',
    image: '/images/services_performance.jpg',
    author: 'Sneha Nayak',
    authorRole: 'Head of Paid Media',
    summary: 'A deep dive into why high blended ROAS numbers on dashboards can mislead founders and how to measure true cash profitability.',
    takeaways: [
      'Blended ROAS often hides unprofitable acquisition by including organic brand searches.',
      'New Customer Acquisition Cost (nCAC) is the most critical metric for enterprise scalability.',
      'Incrementality testing proves whether ad spend actually generated net-new transactions.'
    ],
    content: [
      'Too many agency reporting dashboards celebrate 10X ROAS metrics that merely capture customers who were already going to purchase directly.',
      'At Marketing Copilot, we enforce ruthless attribution integrity. We separate branded search campaigns from non-branded discovery, calculate true customer lifetime value (LTV), and optimize for bottom-line contribution margin.',
      'When every rupee of media spend is held accountable to incremental profit, scaling budgets from ₹5 Lakhs to ₹50 Lakhs becomes a predictable financial decision.'
    ]
  },
  'website-conversion-rate': {
    title: 'Why your website converts at 1.2% and the 6 fixes to double it.',
    category: 'Technology',
    readTime: '6 min read',
    date: 'July 28, 2026',
    image: '/images/work_ecommerce.jpg',
    author: 'Rohan Senapati',
    authorRole: 'Head of Technology',
    summary: 'Practical UX blueprints, latency optimizations, and trust architectures that instantly lift landing page conversion rates.',
    takeaways: [
      'Every 100ms reduction in page load time directly lifts mobile conversion rates by up to 7%.',
      'Skeuomorphic tactile buttons and clear visual hierarchy reduce decision anxiety.',
      'Social proof placed directly above form inputs lifts lead completion rates by over 34%.'
    ],
    content: [
      'Traffic is expensive. Leaking that traffic due to a sluggish, cluttered website is the costliest mistake a digital business can make.',
      'Modern web conversion requires blazing-fast Next.js server components, intuitive tactile interfaces, friction-free forms, and immediate value communication above the fold.',
      'By running rigorous A/B split tests on checkout flows, headline clarity, and mobile tap targets, we routinely double baseline conversion rates for our growth partners.'
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles[slug];
  if (!a) return { title: 'Article Not Found' };
  return {
    title: `${a.title} — Insights`,
    description: a.summary,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles[slug];
  if (!a) notFound();

  return (
    <>
      <div className={styles.page}>
        <div className="container-sm">
          {/* Breadcrumb & Navigation */}
          <div className={styles.topNav}>
            <Link href="/insights" className={styles.backBtn}>
              <span>←</span> Back to Insights
            </Link>
            <span className={styles.categoryBadge}>{a.category}</span>
          </div>

          {/* Article Header */}
          <header className={styles.header}>
            <h1 className={`display-lg ${styles.title}`}>{a.title}</h1>
            <p className={styles.summary}>{a.summary}</p>

            <div className={styles.authorBar}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{a.author}</span>
                <span className={styles.authorRole}>{a.authorRole} • {a.date}</span>
              </div>
              <span className={styles.readTimeBadge}>{a.readTime}</span>
            </div>
          </header>

          {/* Featured Image Banner */}
          <div className={styles.bannerWrap}>
            <Image
              src={a.image}
              alt={a.title}
              fill
              priority
              className={styles.bannerImg}
              sizes="(max-width: 900px) 100vw, 860px"
            />
            <div className={styles.bannerOverlay} />
          </div>

          {/* Key Takeaways Box */}
          <div className={styles.takeawaysBox}>
            <div className={styles.takeawaysHeader}>
              <span className={styles.takeawaysIcon}>✦</span>
              <h3 className={styles.takeawaysTitle}>Executive Key Takeaways</h3>
            </div>
            <ul className={styles.takeawaysList}>
              {a.takeaways.map((item, idx) => (
                <li key={idx} className={styles.takeawayItem}>
                  <span className={styles.takeawayDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Article Body */}
          <article className={styles.articleBody}>
            {a.content.map((paragraph, idx) => (
              <p key={idx} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </article>

          {/* Bottom Callout & Author Footer */}
          <div className={styles.authorFooter}>
            <div className={styles.footerLeft}>
              <h4 className={styles.footerAuthorName}>Written by {a.author}</h4>
              <p className={styles.footerAuthorBio}>
                Senior growth operator and partner at Marketing Copilot. Engineering high-velocity digital marketing frameworks for ambitious brands across India.
              </p>
            </div>
            <BeamButton href="/contact" label="Discuss Strategy" size="md" />
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
