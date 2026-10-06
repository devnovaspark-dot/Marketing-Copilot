import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CTASection from '@/app/_components/CTASection';
import ArticleHero from '@/components/ArticleHero';
import BlogFaqAccordion, { FAQItem } from '@/components/BlogFaqAccordion';
import PortableTextRenderer, { slugifyHeading } from '@/components/PortableTextRenderer';
import PillarPostCard from '@/components/PillarPostCard';
import TableOfContents, { HeadingItem } from '@/components/TableOfContents';
import KeyTakeawaysSidebarCard from '@/components/KeyTakeawaysSidebarCard';
import RelatedStoriesSidebar, { RelatedStoryItem } from '@/components/RelatedStoriesSidebar';
import AuthorBioBox from '@/components/AuthorBioBox';
import BlogSidebarCta from '@/components/BlogSidebarCta';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { sanityFetch } from '@/sanity/client';
import { postBySlugQuery, postPathsQuery, relatedPostsQuery } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';
import styles from './page.module.css';

export const dynamicParams = true;
export const revalidate = 0;

interface PortableTextBlockItem {
  _type?: string;
  style?: string;
  children?: {
    text?: string;
  }[];
}

interface SanityPostDetail {
  title: string;
  metaTitle?: string;
  category?: string | { title?: string };
  publishedAt?: string;
  _createdAt?: string;
  bannerImage?: {
    asset?: {
      _ref?: string;
    };
    alt?: string;
  };
  author?: {
    name?: string;
    role?: string;
    bio?: string;
    image?: {
      asset?: {
        _ref?: string;
      };
    };
  };
  excerpt?: string;
  keyTakeaways?: string[];
  body?: PortableTextBlockItem[];
  faqItems?: { question: string; answer: string }[];
  pillarPost?: {
    title: string;
    slug: string;
    excerpt?: string;
  };
  noIndex?: boolean;
  metaKeywords?: string[];
}

interface SanityRelatedPostRecord {
  _id: string;
  title: string;
  slug: string;
  category?: string | { title?: string };
  publishedAt?: string;
  _createdAt?: string;
  bannerImage?: {
    asset?: {
      _ref?: string;
    };
  };
}

function extractHeadingsFromPortableText(blocks?: PortableTextBlockItem[]): HeadingItem[] {
  if (!Array.isArray(blocks)) return [];
  const headings: HeadingItem[] = [];

  blocks.forEach((block) => {
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      const text = block.children
        ?.map((child) => child.text || '')
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
  try {
    const sanityPost = await sanityFetch<SanityPostDetail>({
      query: postBySlugQuery,
      params: { slug },
      revalidate: 0,
    });

    if (
      sanityPost &&
      sanityPost.title &&
      Array.isArray(sanityPost.body) &&
      sanityPost.body.length > 0
    ) {
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

      const extractedHeadings = extractHeadingsFromPortableText(sanityPost.body);

      const categoryName =
        typeof sanityPost.category === 'object' && sanityPost.category !== null
          ? sanityPost.category.title || 'Digital Marketing'
          : sanityPost.category || 'Digital Marketing';

      const takeaways = (sanityPost.keyTakeaways || []).filter(
        (t) => typeof t === 'string' && t.trim().length > 0
      );

      const faqs = sanityPost.faqItems || [];

      return {
        title: sanityPost.title,
        metaTitle: sanityPost.metaTitle || sanityPost.title,
        category: categoryName,
        readTime: '6 min read',
        date: publishedDate,
        image: bannerUrl || '/images/dashboard_hero.jpg',
        imageAlt: sanityPost.bannerImage?.alt || sanityPost.title,
        author: sanityPost.author?.name || 'Aarav Mohapatra',
        authorRole: sanityPost.author?.role || 'Lead Growth Strategist',
        authorImage: authorImageUrl,
        authorBio: sanityPost.author?.bio,
        summary: sanityPost.excerpt || '',
        takeaways,
        body: sanityPost.body,
        faqItems: faqs,
        pillarPost: sanityPost.pillarPost,
        headings: extractedHeadings,
        noIndex: Boolean(sanityPost.noIndex),
        metaKeywords: sanityPost.metaKeywords || [],
      };
    }
  } catch (err) {
    console.warn(`[getArticle] Failed to fetch article from Sanity for "${slug}":`, err);
  }

  return null;
}

export async function generateStaticParams() {
  const sanitySlugs = await sanityFetch<string[]>({
    query: postPathsQuery,
    revalidate: 0,
  }).catch(() => []);

  return (sanitySlugs || []).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) return { title: 'Article Not Found | Marketing Copilot' };

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

  // Fetch real related posts strictly from Sanity (no mocks)
  const rawRelated = await sanityFetch<SanityRelatedPostRecord[]>({
    query: relatedPostsQuery,
    params: { slug },
    revalidate: 0,
  }).catch(() => []);

  const relatedStories: RelatedStoryItem[] = (rawRelated || []).map((p) => {
    let imageUrl = '/images/dashboard_hero.jpg';
    if (p.bannerImage?.asset) {
      try {
        imageUrl =
          urlForImage(p.bannerImage)?.width(200).height(200).fit('crop').url() ||
          '/images/dashboard_hero.jpg';
      } catch {
        imageUrl = '/images/dashboard_hero.jpg';
      }
    }
    const catTitle =
      typeof p.category === 'object' && p.category !== null
        ? p.category.title || 'Digital Marketing'
        : p.category || 'Digital Marketing';

    return {
      slug: p.slug,
      title: p.title,
      category: catTitle,
      readTime: '6 min read',
      image: imageUrl,
    };
  });

  // Generate FAQ schema for search engines if FAQ items exist in Sanity
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

      {/* Top Hero Section matching screenshot layout & Marketing Copilot brand style */}
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
            <article className={styles.mainCol}>

              {/* In-Article Table of Contents (Added directly to Left Content Column for Desktop & Mobile) */}
              {article.headings && article.headings.length >= 1 && (
                <div className={styles.inArticleTocWrapper}>
                  <TableOfContents
                    headings={article.headings}
                    variant="inline"
                    isMobileCollapsible
                  />
                </div>
              )}

              {/* Main Article Body from Sanity PortableText */}
              {article.body && (
                <div className={styles.articleBody}>
                  <PortableTextRenderer value={article.body} />
                </div>
              )}

              {/* Topic Cluster Pillar Post Card (if present) */}
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
            </article>

            {/* Right Column: Sticky Sidebar matching exact layout structure */}
            <aside className={styles.sidebarCol}>
              {/* 1. Table of Contents ("On This Page" - Desktop) */}
              {article.headings && article.headings.length >= 1 && (
                <div className={styles.desktopTocWrapper}>
                  <TableOfContents headings={article.headings} variant="sidebar" />
                </div>
              )}

              {/* 2. Key Takeaways Card (In Sidebar) */}
              {article.takeaways && article.takeaways.length > 0 && (
                <KeyTakeawaysSidebarCard takeaways={article.takeaways} />
              )}

              {/* 3. Related Stories (In Sidebar, only when real Sanity posts exist) */}
              {relatedStories.length > 0 && (
                <RelatedStoriesSidebar
                  stories={relatedStories}
                  title="Related Stories"
                  viewAllLink="/insights"
                />
              )}

              {/* 4. Strategic Marketing Consultation CTA */}
              <BlogSidebarCta />
            </aside>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
