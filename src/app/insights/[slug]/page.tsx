import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CTASection from '@/app/_components/CTASection';
import ArticleHero from '@/components/ArticleHero';
import BlogFaqAccordion, { FAQItem } from '@/components/BlogFaqAccordion';
import PortableTextRenderer, { slugifyHeading } from '@/components/PortableTextRenderer';
import PillarPostCard from '@/components/PillarPostCard';
import TableOfContents, { HeadingItem } from '@/components/TableOfContents';
import KeyTakeawaysSidebarCard from '@/components/KeyTakeawaysSidebarCard';
import RelatedStoriesSidebar from '@/components/RelatedStoriesSidebar';
import AuthorBioBox from '@/components/AuthorBioBox';
import BlogSidebarCta from '@/components/BlogSidebarCta';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { sanityFetch } from '@/sanity/client';
import { postBySlugQuery, postPathsQuery } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getRelatedBlogPosts,
} from '@/data/blogPosts';
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
  // 1. Check Sanity first
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
      const fallbackData = getBlogPostBySlug(slug);

      const categoryName =
        typeof sanityPost.category === 'object' && sanityPost.category !== null
          ? sanityPost.category.title || 'Digital Marketing'
          : sanityPost.category || fallbackData?.category || 'Digital Marketing';

      const resolvedTakeaways =
        sanityPost.keyTakeaways &&
        sanityPost.keyTakeaways.filter(
          (t: string) => typeof t === 'string' && t.trim().length > 0
        ).length >= 2
          ? sanityPost.keyTakeaways
          : fallbackData?.takeaways || [];

      const resolvedFaqs =
        sanityPost.faqItems && sanityPost.faqItems.length >= 2
          ? sanityPost.faqItems
          : fallbackData?.faqItems || [];

      return {
        isSanity: true,
        title: sanityPost.title,
        metaTitle: sanityPost.metaTitle || sanityPost.title,
        category: categoryName,
        readTime: fallbackData?.readTime || '7 min read',
        date: publishedDate,
        image: bannerUrl || fallbackData?.image || '/images/dashboard_hero.jpg',
        imageAlt: sanityPost.bannerImage?.alt || fallbackData?.imageAlt || sanityPost.title,
        author: sanityPost.author?.name || fallbackData?.author || 'Aarav Mohapatra',
        authorRole:
          sanityPost.author?.role || fallbackData?.authorRole || 'Lead Growth Strategist',
        authorImage: authorImageUrl || fallbackData?.authorImage,
        authorBio: sanityPost.author?.bio || fallbackData?.authorBio,
        summary: sanityPost.excerpt || fallbackData?.summary || '',
        takeaways: resolvedTakeaways,
        body: sanityPost.body,
        contentHtml: undefined,
        faqItems: resolvedFaqs,
        pillarPost: sanityPost.pillarPost,
        headings:
          extractedHeadings.length > 0
            ? extractedHeadings
            : fallbackData?.headings || [],
        noIndex: Boolean(sanityPost.noIndex),
        metaKeywords: sanityPost.metaKeywords || fallbackData?.metaKeywords || [],
      };
    }
  } catch (err) {
    console.warn(`[getArticle] Sanity lookup failed for "${slug}":`, err);
  }

  // 2. Fallback to local authoritative high-value post
  const localPost = getBlogPostBySlug(slug);
  if (localPost) {
    return {
      isSanity: false,
      title: localPost.title,
      metaTitle: localPost.metaTitle,
      category: localPost.category,
      readTime: localPost.readTime,
      date: localPost.date,
      image: localPost.image,
      imageAlt: localPost.imageAlt,
      author: localPost.author,
      authorRole: localPost.authorRole,
      authorImage: localPost.authorImage,
      authorBio: localPost.authorBio,
      summary: localPost.summary,
      takeaways: localPost.takeaways,
      body: undefined,
      contentHtml: localPost.contentHtml,
      faqItems: localPost.faqItems,
      pillarPost: undefined,
      headings: localPost.headings,
      noIndex: Boolean(localPost.noIndex),
      metaKeywords: localPost.metaKeywords || [],
    };
  }

  return null;
}

export async function generateStaticParams() {
  const sanitySlugs = await sanityFetch<string[]>({
    query: postPathsQuery,
    revalidate: 0,
  }).catch(() => []);

  const allSlugs = Array.from(
    new Set([...(sanitySlugs || []), ...getAllBlogSlugs()])
  );
  return allSlugs.map((slug) => ({ slug }));
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

  // Retrieve 3 related stories for the sidebar (excluding current article)
  const relatedStories = getRelatedBlogPosts(slug, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    readTime: p.readTime,
    image: p.image,
    date: p.date,
  }));

  // Generate FAQ schema for search engines
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
            <main className={styles.mainCol}>
              {/* Decorative Accent Header (matching screenshot structure with our royal blue & amber style) */}
              <div className={styles.decorativeAccentBar}>
                <div className={styles.accentGlow} />
                <div className={styles.accentBadge}>
                  <span className={styles.accentDot} />
                  <span>Verified Strategic Playbook</span>
                </div>
                <span className={styles.accentCategory}>{article.category}</span>
              </div>

              {/* Main Article Body */}
              <article className={styles.articleBody}>
                {article.body ? (
                  <PortableTextRenderer value={article.body} />
                ) : article.contentHtml ? (
                  <div
                    className={styles.rawHtmlContent}
                    dangerouslySetInnerHTML={{ __html: article.contentHtml }}
                  />
                ) : null}
              </article>

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
            </main>

            {/* Right Column: Sticky Sidebar matching exact layout structure */}
            <aside className={styles.sidebarCol}>
              {/* 1. Table of Contents ("On This Page") */}
              {article.headings && article.headings.length >= 2 && (
                <TableOfContents headings={article.headings} />
              )}

              {/* 2. Key Takeaways Card (In Sidebar) */}
              {article.takeaways && article.takeaways.length > 0 && (
                <KeyTakeawaysSidebarCard takeaways={article.takeaways} />
              )}

              {/* 3. Related Stories (In Sidebar as requested) */}
              <RelatedStoriesSidebar
                stories={relatedStories}
                title="Related Stories"
                viewAllLink="/insights"
              />

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
