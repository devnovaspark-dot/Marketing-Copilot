import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CTASection from '@/app/_components/CTASection';
import ArticleHero from '@/components/ArticleHero';
import BlogFaqAccordion, { FAQItem } from '@/components/BlogFaqAccordion';
import PortableTextRenderer, { slugifyHeading } from '@/components/PortableTextRenderer';
import PillarPostCard from '@/components/PillarPostCard';
import TableOfContents, { HeadingItem } from '@/components/TableOfContents';
import AuthorBioBox from '@/components/AuthorBioBox';
import BlogSidebarCta from '@/components/BlogSidebarCta';
import { sanityFetch } from '@/sanity/client';
import { postBySlugQuery, postPathsQuery } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';
import styles from './page.module.css';

interface FallbackArticle {
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  authorRole: string;
  authorImage?: string;
  authorBio?: string;
  summary: string;
  content: string[];
  takeaways: string[];
  faqItems?: FAQItem[];
  headings?: HeadingItem[];
}

const fallbackArticles: Record<string, FallbackArticle> = {
  'future-of-performance-marketing': {
    title: 'The future of performance marketing in an AI-first world.',
    category: 'Marketing',
    readTime: '8 min read',
    date: 'September 5, 2026',
    image: '/images/dashboard_hero.jpg',
    author: 'Aarav Sharma',
    authorRole: 'CEO & Growth Strategist',
    authorBio:
      'Aarav is the founder and chief growth strategist at Marketing Copilot. He has led 9-figure performance marketing campaigns across D2C, education, and SaaS in India.',
    summary:
      'AI is fundamentally transforming paid media from mechanical audience targeting into creative velocity and first-party signal engineering.',
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
    ],
    faqItems: [
      {
        question: 'How does AI impact Meta and Google ad bidding?',
        answer:
          'Modern ad networks use deep learning models to predict purchase probability in real-time. Instead of micromanaging manual bids, marketers succeed by providing high-converting creative angles and high-quality conversion API signals.'
      },
      {
        question: 'What is the most critical metric for performance marketing?',
        answer:
          'While platforms highlight ROAS, modern brands focus on Blended CAC, Net Profit Contribution, and New Customer Acquisition Cost (nCAC).'
      }
    ],
    headings: [
      { id: 'creative-is-targeting', text: 'Creative Is the New Targeting', level: 2 },
      { id: 'attribution-evolution', text: 'Beyond Last-Click Attribution', level: 2 },
      { id: 'testing-cadence', text: 'Weekly Iteration Cadence', level: 2 },
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
    authorBio:
      'Ananya spearheads technical SEO and organic search architecture at Marketing Copilot, having ranked 50+ regional and national brands at #1 on Google.',
    summary:
      'How search engines and generative AI answers evaluate topical authority, technical indexability, and digital brand footprint.',
    takeaways: [
      'Entity authority and information gain score now supersede repetitive keyword density.',
      'Local Map Pack rankings demand genuine customer sentiment velocity and citation consistency.',
      'Core Web Vitals and sub-100ms interaction response times are direct ranking factors.'
    ],
    content: [
      'Search engines in 2026 have evolved beyond simple string matching into sophisticated semantic neural networks that comprehend context, authority, and true information gain.',
      'Keyword stuffing and generic AI content spinning are actively penalized. To capture top organic rankings, brands must provide original data, proprietary research, and actionable expert perspectives that do not exist elsewhere on the web.',
      'For regional businesses across India, local SEO is the highest ROI acquisition channel. Ranking in the Google Local 3-Pack requires a synchronized strategy of verified Google Business Profiles, localized schema markup, and authentic review acquisition cadences.'
    ],
    faqItems: [
      {
        question: 'Does keyword density still matter in 2026?',
        answer:
          'No. Modern search engines use vector embeddings to understand topical completeness. Natural language covering related entities and answering user intent directly outperforms keyword repetition.'
      },
      {
        question: 'How important is schema markup for SEO?',
        answer:
          'Extremely important. Schema JSON-LD provides structured facts directly to search engines and AI answer engines, qualifying your pages for rich snippets, FAQs, and local knowledge graph cards.'
      }
    ],
    headings: [
      { id: 'semantic-search', text: 'The Shift to Semantic Search', level: 2 },
      { id: 'local-map-pack', text: 'Dominating Local Map Packs', level: 2 },
      { id: 'technical-vitals', text: 'Core Web Vitals & Latency', level: 2 },
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
    summary:
      'Why distinct visual design systems and cultural storytelling create durable pricing power that paid ads alone cannot buy.',
    takeaways: [
      'Brand consistency across all customer touchpoints increases recognized recall by up to 80%.',
      'A distinctive visual identity creates mental shortcuts that lower customer acquisition costs.',
      'Story-driven narrative campaigns build generational trust and defend profit margins.'
    ],
    content: [
      'In a digital landscape flooded with generic templated content, the brands that win long-term are those that cultivate an unmistakable visual and emotional signature.',
      'Brand equity is what remains when you turn off your ad spend. It is the reason customers search for you by name rather than clicking on the top sponsored ad slot.',
      'We work with brands to craft distinct brand guidelines, tactile UI/UX digital experiences, and sharp messaging that turn casual first-time viewers into loyal brand advocates.'
    ],
    headings: [
      { id: 'unmistakable-signature', text: 'Cultivating a Visual Signature', level: 2 },
      { id: 'brand-equity', text: 'What Remains After Ads Stop', level: 2 },
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
    summary:
      'A teardown of the creative hooks, production workflows, and community engagement systems used to build a passionate brand community.',
    takeaways: [
      'First 2-second hook retention is the primary distribution metric on modern short-form algorithms.',
      'Community replies and direct conversational loops turn followers into paying customers.',
      'Consistent publishing cadences outperform sporadic high-budget commercial shoots.'
    ],
    content: [
      'Growing an engaged social community in 2026 is an exact science of understanding audience psychology and algorithmic distribution mechanics.',
      'We dismantled the traditional slow agency production cycle and replaced it with an agile growth sprint model: script, record, edit, test, analyze, and scale within 48 hours.',
      'By focusing on educational entertainment, behind-the-scenes authenticity, and relatable cultural memes, our partner brands consistently outperform competitors spending 10X more on production.'
    ],
    headings: [
      { id: 'hook-retention', text: 'The First 2-Second Metric', level: 2 },
      { id: 'production-sprint', text: 'The 48-Hour Sprint Cycle', level: 2 },
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
    summary:
      'A deep dive into why high blended ROAS numbers on dashboards can mislead founders and how to measure true cash profitability.',
    takeaways: [
      'Blended ROAS often hides unprofitable acquisition by including organic brand searches.',
      'New Customer Acquisition Cost (nCAC) is the most critical metric for enterprise scalability.',
      'Incrementality testing proves whether ad spend actually generated net-new transactions.'
    ],
    content: [
      'Too many agency reporting dashboards celebrate 10X ROAS metrics that merely capture customers who were already going to purchase directly.',
      'At Marketing Copilot, we enforce ruthless attribution integrity. We separate branded search campaigns from non-branded discovery, calculate true customer lifetime value (LTV), and optimize for bottom-line contribution margin.',
      'When every rupee of media spend is held accountable to incremental profit, scaling budgets from ₹5 Lakhs to ₹50 Lakhs becomes a predictable financial decision.'
    ],
    headings: [
      { id: 'blended-roas-trap', text: 'The Blended ROAS Trap', level: 2 },
      { id: 'ncac-metric', text: 'Why nCAC Governs Scale', level: 2 },
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
    summary:
      'Practical UX blueprints, latency optimizations, and trust architectures that instantly lift landing page conversion rates.',
    takeaways: [
      'Every 100ms reduction in page load time directly lifts mobile conversion rates by up to 7%.',
      'Skeuomorphic tactile buttons and clear visual hierarchy reduce decision anxiety.',
      'Social proof placed directly above form inputs lifts lead completion rates by over 34%.'
    ],
    content: [
      'Traffic is expensive. Leaking that traffic due to a sluggish, cluttered website is the costliest mistake a digital business can make.',
      'Modern web conversion requires blazing-fast Next.js server components, intuitive tactile interfaces, friction-free forms, and immediate value communication above the fold.',
      'By running rigorous A/B split tests on checkout flows, headline clarity, and mobile tap targets, we routinely double baseline conversion rates for our growth partners.'
    ],
    headings: [
      { id: 'latency-impact', text: 'Sub-100ms Latency Impact', level: 2 },
      { id: 'tactile-affordances', text: 'Tactile Skeuomorphic Affordances', level: 2 },
    ]
  }
};

function extractHeadingsFromPortableText(blocks: any[]): HeadingItem[] {
  if (!Array.isArray(blocks)) return [];
  const headings: HeadingItem[] = [];

  blocks.forEach((block) => {
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      const text = block.children
        ?.map((child: any) => child.text || '')
        .join('')
        .trim();

      if (text) {
        headings.push({
          id: slugifyHeading(text),
          text,
          level: block.style === 'h2' ? 2 : 3,
        });
      }
    }
  });

  return headings;
}

async function getArticle(slug: string) {
  const sanityPost = await sanityFetch<any>({
    query: postBySlugQuery,
    params: { slug },
  });

  if (sanityPost) {
    const bannerUrl = sanityPost.bannerImage?.asset
      ? urlForImage(sanityPost.bannerImage)?.width(1200).height(750).url()
      : null;

    const authorImageUrl = sanityPost.author?.image?.asset
      ? urlForImage(sanityPost.author.image)?.width(120).height(120).url()
      : undefined;

    const publishedDate = sanityPost.publishedAt
      ? new Date(sanityPost.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : 'Recent';

    const headings = extractHeadingsFromPortableText(sanityPost.body);

    return {
      isSanity: true,
      title: sanityPost.title,
      metaTitle: sanityPost.metaTitle || sanityPost.title,
      category: sanityPost.category || 'Insights',
      readTime: '6 min read',
      date: publishedDate,
      image: bannerUrl || '/images/dashboard_hero.jpg',
      imageAlt: sanityPost.bannerImage?.alt || sanityPost.title,
      author: sanityPost.author?.name || 'Marketing Copilot',
      authorRole: sanityPost.author?.role || 'Growth Strategist',
      authorImage: authorImageUrl,
      authorBio: sanityPost.author?.bio,
      summary: sanityPost.excerpt || '',
      takeaways: sanityPost.keyTakeaways || [],
      body: sanityPost.body,
      faqItems: sanityPost.faqItems || [],
      pillarPost: sanityPost.pillarPost,
      headings,
      noIndex: Boolean(sanityPost.noIndex),
      metaKeywords: sanityPost.metaKeywords || [],
    };
  }

  // Fallback
  const fallback = fallbackArticles[slug];
  if (fallback) {
    return {
      isSanity: false,
      title: fallback.title,
      metaTitle: fallback.title,
      category: fallback.category,
      readTime: fallback.readTime,
      date: fallback.date,
      image: fallback.image,
      imageAlt: fallback.title,
      author: fallback.author,
      authorRole: fallback.authorRole,
      authorImage: fallback.authorImage,
      authorBio: fallback.authorBio,
      summary: fallback.summary,
      takeaways: fallback.takeaways,
      content: fallback.content,
      faqItems: fallback.faqItems || [],
      pillarPost: null,
      headings: fallback.headings || [],
      noIndex: false,
      metaKeywords: [],
    };
  }

  return null;
}

export async function generateStaticParams() {
  const sanitySlugs = await sanityFetch<string[]>({ query: postPathsQuery });
  const localSlugs = Object.keys(fallbackArticles);
  const combined = Array.from(new Set([...localSlugs, ...(sanitySlugs || [])]));
  return combined.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.metaTitle} | Marketing Copilot`,
    description: article.summary,
    keywords: article.metaKeywords?.length ? article.metaKeywords : undefined,
    robots: article.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: `https://marketingcopilot.in/insights/${slug}`,
    },
    openGraph: {
      title: `${article.metaTitle} | Marketing Copilot`,
      description: article.summary,
      url: `https://marketingcopilot.in/insights/${slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  // Generate FAQ schema if FAQ items exist
  const faqSchema =
    article.faqItems && article.faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqItems.map((item: FAQItem) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Section matching Ekatraa structure & Marketing Copilot brand */}
      <ArticleHero
        title={article.title}
        category={article.category}
        excerpt={article.summary}
        author={article.author}
        date={article.date}
        readTime={article.readTime}
        image={article.image}
        imageAlt={article.imageAlt}
        authorImage={article.authorImage}
      />

      <div className={styles.page}>
        <div className={styles.contentWrapper}>
          <div className={styles.layoutGrid}>
            {/* Left Column: Core Article Content */}
            <main className={styles.mainCol}>
              {/* Executive Key Takeaways Box */}
              {article.takeaways && article.takeaways.length > 0 && (
                <div className={styles.takeawaysBox}>
                  <div className={styles.takeawaysHeader}>
                    <span className={styles.takeawaysIcon}>✦</span>
                    <h3 className={styles.takeawaysTitle}>Executive Key Takeaways</h3>
                  </div>
                  <ul className={styles.takeawaysList}>
                    {article.takeaways.map((item: string, idx: number) => (
                      <li key={idx} className={styles.takeawayItem}>
                        <span className={styles.takeawayDot} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Main Article Body (PortableText or Fallback) */}
              {article.isSanity ? (
                <article className={styles.articleBody}>
                  <PortableTextRenderer value={article.body} />
                </article>
              ) : (
                <article className={styles.articleBody}>
                  {article.content?.map((paragraph: string, idx: number) => (
                    <p key={idx} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </article>
              )}

              {/* Topic Cluster Pillar Post Card */}
              {article.pillarPost && (
                <PillarPostCard pillar={article.pillarPost} />
              )}

              {/* About the Author Card */}
              <AuthorBioBox
                name={article.author}
                role={article.authorRole}
                image={article.authorImage}
                bio={article.authorBio}
              />

              {/* Interactive FAQ Accordion */}
              {article.faqItems && article.faqItems.length > 0 && (
                <BlogFaqAccordion items={article.faqItems} />
              )}
            </main>

            {/* Right Column: Sticky Sidebar */}
            <aside className={styles.sidebarCol}>
              {/* Table of Contents ("On This Page") */}
              {article.headings && article.headings.length > 0 && (
                <TableOfContents headings={article.headings} />
              )}

              {/* Sticky Marketing Consultation CTA */}
              <BlogSidebarCta />
            </aside>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
