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
import ReadingProgressBar from '@/components/ReadingProgressBar';
import styles from './page.module.css';

export const dynamicParams = true;
export const revalidate = 0;

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
    revalidate: 0,
  });

  if (sanityPost) {
    const bannerUrl = sanityPost.bannerImage?.asset
      ? urlForImage(sanityPost.bannerImage)?.width(1200).height(750).url()
      : null;

    const authorImageUrl = sanityPost.author?.image?.asset
      ? urlForImage(sanityPost.author.image)?.width(120).height(120).url()
      : undefined;

    const rawDate = sanityPost.publishedAt || sanityPost._createdAt;
    const publishedDate = rawDate
      ? new Date(rawDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : 'Recently published';

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

  return null;
}

export async function generateStaticParams() {
  const sanitySlugs = await sanityFetch<string[]>({ query: postPathsQuery, revalidate: 0 });
  return (sanitySlugs || []).map((slug) => ({ slug }));
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
      {/* Scroll Reading Progress Indicator */}
      <ReadingProgressBar />

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
              {article.takeaways &&
                article.takeaways.filter((item: string) => typeof item === 'string' && item.trim().length > 0).length > 0 && (
                  <div className={styles.takeawaysBox} aria-label="Executive Key Takeaways">
                    <div className={styles.takeawaysHeader}>
                      <span className={styles.takeawaysBadge}>✦ Executive Summary</span>
                      <h3 className={styles.takeawaysTitle}>Key Takeaways &amp; Strategic Action Points</h3>
                    </div>
                    <ul className={styles.takeawaysList}>
                      {article.takeaways
                        .filter((item: string) => typeof item === 'string' && item.trim().length > 0)
                        .map((rawItem: string, idx: number) => {
                          const item = rawItem.replace(/^\d+[\.\)]\s*/, '').trim();
                          return (
                            <li key={idx} className={styles.takeawayItem}>
                              <span className={styles.takeawayIconWrap} aria-hidden="true">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </span>
                              <span>{item}</span>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}

              {/* Main Article Body */}
              {article.body && (
                <article className={styles.articleBody}>
                  <PortableTextRenderer value={article.body} />
                </article>
              )}

              {/* Topic Cluster Pillar Post Card (Only render if pointing to a different pillar guide) */}
              {article.pillarPost && article.pillarPost.slug !== slug && (
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
              {/* Strategic Factsheet Card */}
              <div className={styles.factsheetCard} aria-label="Article Strategic Overview">
                <div className={styles.factsheetHeader}>
                  <span className={styles.factsheetBadge}>✦ Strategic Factsheet</span>
                  <h4 className={styles.factsheetTitle}>Executive Overview</h4>
                </div>
                <div className={styles.factsheetList}>
                  <div className={styles.factsheetRow}>
                    <span className={styles.factsheetLabel}>Category</span>
                    <span className={styles.factsheetVal}>{article.category}</span>
                  </div>
                  <div className={styles.factsheetRow}>
                    <span className={styles.factsheetLabel}>Read Time</span>
                    <span className={styles.factsheetVal}>{article.readTime}</span>
                  </div>
                  <div className={styles.factsheetRow}>
                    <span className={styles.factsheetLabel}>Target Audience</span>
                    <span className={styles.factsheetVal}>Founders &amp; Operators</span>
                  </div>
                  <div className={styles.factsheetRow}>
                    <span className={styles.factsheetLabel}>Market Geography</span>
                    <span className={styles.factsheetVal}>Bhubaneswar • Odisha</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents ("On This Page") */}
              {article.headings && article.headings.length >= 2 && (
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
