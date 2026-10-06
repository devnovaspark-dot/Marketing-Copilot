'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import BlogSidebarCta from '@/components/BlogSidebarCta';
import BeamButton from '@/components/BeamButton';
import styles from './page.module.css';

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  authorRole: string;
  authorImage?: string;
  featured?: boolean;
  takeaways?: string[];
}

export default function InsightsClient({ articles = [] }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Extract distinct categories dynamically
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => {
      if (a.category && a.category.trim()) {
        set.add(a.category.trim());
      }
    });
    return ['All Articles', ...Array.from(set)];
  }, [articles]);

  // Compute category count
  const getCategoryCount = (cat: string) => {
    if (cat === 'All Articles') return articles.length;
    return articles.filter((a) => a.category.toLowerCase() === cat.toLowerCase()).length;
  };

  // Filter articles based on active category and search query
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === 'All Articles' ||
        article.category.toLowerCase() === activeCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.author.toLowerCase().includes(q) ||
        (article.takeaways && article.takeaways.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, searchQuery]);

  // Featured article is the first one matching filter
  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  // Trending reads (top 3 articles)
  const trendingArticles = useMemo(() => {
    return articles.slice(0, 3);
  }, [articles]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleCopyLink = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/insights/${slug}`;
      navigator.clipboard.writeText(url).then(
        () => showToast('Link copied to clipboard!'),
        () => showToast('Failed to copy link')
      );
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      showToast('✓ Successfully subscribed to The Growth Journal!');
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const quickTags = ['Local SEO', 'Paid Media', 'Google Ads', 'CRO', 'Bhubaneswar'];

  const readerFaqs = [
    {
      q: 'How frequently are new growth playbooks and research published?',
      a: 'Our senior marketing operators publish new deep-dive analyses weekly. Every framework is vetted against active client campaigns in Bhubaneswar and across India before being released.',
    },
    {
      q: 'Are these strategies applicable for local service & small businesses?',
      a: 'Absolutely. Every playbook is designed with practical constraints in mind. We emphasize high-leverage tactics like Google 3-Pack SEO, localized creative angles, and friction-free WhatsApp conversion funnels.',
    },
    {
      q: 'Can our internal marketing team hire Marketing Copilot to execute these playbooks?',
      a: 'Yes. In addition to publishing research, our agency provides full-service performance marketing, SEO retainers, high-converting landing page development, and growth consulting.',
    },
    {
      q: 'Can I suggest a specific topic or case study for future issues?',
      a: 'We welcome topic suggestions from founders and operators. Feel free to contact our editorial team or book a consultation call to discuss your business bottlenecks.',
    },
  ];

  return (
    <>
      <div className={styles.page}>
        {/* Subtle engineering background grid */}
        <div className={styles.ambientGrid} />

        {/* Ambient lighting glows (Preserving brand amber & navy palette) */}
        <div className={styles.heroAmbientAmber} />
        <div className={styles.heroAmbientBlue} />

        {/* ================================================================= */}
        {/* 1. Hero Section: Rich Editorial Masthead                         */}
        {/* ================================================================= */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              {/* Live verified status badge */}
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} />
                <span>The Marketing Copilot Journal</span>
                <span className={styles.liveIndicator}>
                  <span className={styles.liveDot} /> Verified Field Research
                </span>
              </div>

              {/* Main Headline with Brand Gradient Accent */}
              <h1 className={styles.heroTitle}>
                Ideas &amp; frameworks<br />
                <span className={styles.heroTitleAccent}>worth building on.</span>
              </h1>

              {/* Subheading */}
              <p className={styles.heroSub}>
                Strategic growth playbooks, performance benchmarks, and tactical research engineered by senior practitioners in Bhubaneswar.
              </p>

              {/* Trust & Quality Signals Bar */}
              <div className={styles.heroSignalsBar}>
                <div className={styles.signalItem}>
                  <span className={styles.signalIcon}>⚡</span>
                  <div className={styles.signalText}>
                    <strong>Zero AI Fluff</strong>
                    <span>Practitioner-tested notes</span>
                  </div>
                </div>
                <div className={styles.signalDivider} />
                <div className={styles.signalItem}>
                  <span className={styles.signalIcon}>📈</span>
                  <div className={styles.signalText}>
                    <strong>₹10M+ Ad Spend</strong>
                    <span>Real algorithmic insights</span>
                  </div>
                </div>
                <div className={styles.signalDivider} />
                <div className={styles.signalItem}>
                  <span className={styles.signalIcon}>📍</span>
                  <div className={styles.signalText}>
                    <strong>Bhubaneswar First</strong>
                    <span>Engineered for regional growth</span>
                  </div>
                </div>
                <div className={styles.signalDivider} />
                <div className={styles.signalItem}>
                  <span className={styles.signalIcon}>🎯</span>
                  <div className={styles.signalText}>
                    <strong>High Signal</strong>
                    <span>Step-by-step action points</span>
                  </div>
                </div>
              </div>

              {/* Quick trending topic pills */}
              <div className={styles.heroTrendingRow}>
                <span className={styles.trendingLabel}>Trending Topics:</span>
                <div className={styles.trendingTags}>
                  {quickTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={styles.trendingTagBtn}
                      onClick={() => setSearchQuery(tag)}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          {/* =============================================================== */}
          {/* 2. Interactive Filter & Live Search Toolbar                     */}
          {/* =============================================================== */}
          <div className={styles.filterToolbar}>
            <div className={styles.filterPills}>
              {categories.map((cat) => {
                const count = getCategoryCount(cat);
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`${styles.filterPill} ${isActive ? styles.filterPillActive : ''}`}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isActive}
                  >
                    <span>{cat}</span>
                    <span className={styles.pillCountBadge}>{count}</span>
                  </button>
                );
              })}
            </div>

            <div className={styles.searchBoxWrap}>
              <svg
                className={styles.searchIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search playbooks by keyword, author, or topic..."
                className={styles.searchInput}
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results feedback banner when search query or filter is active */}
          {(searchQuery || activeCategory !== 'All Articles') && (
            <div className={styles.resultsMetaBar}>
              <span className={styles.resultsCount}>
                Showing <strong>{filteredArticles.length}</strong>{' '}
                {filteredArticles.length === 1 ? 'playbook' : 'playbooks'}
                {activeCategory !== 'All Articles' && ` in "${activeCategory}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
              <button
                type="button"
                className={styles.resetFiltersBtn}
                onClick={() => {
                  setActiveCategory('All Articles');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* =============================================================== */}
          {/* 3. Main 12-Column Layout Grid                                   */}
          {/* =============================================================== */}
          <div className={styles.layoutGrid}>
            {/* Primary Content Stream (8 Columns) */}
            <main className={styles.mainCol}>
              {filteredArticles.length === 0 ? (
                /* Sleek Empty State */
                <div className={styles.emptyState}>
                  <div className={styles.emptyIconWrap}>✦</div>
                  <h3 className={styles.emptyTitle}>No matching playbooks found</h3>
                  <p className={styles.emptyText}>
                    We could not find any articles matching &ldquo;{searchQuery}&rdquo;. Try another keyword or explore our core topic categories.
                  </p>
                  <div className={styles.emptySuggestions}>
                    <span>Suggested Searches:</span>
                    <div className={styles.suggestionPills}>
                      {quickTags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className={styles.suggestionPill}
                          onClick={() => setSearchQuery(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={() => {
                      setActiveCategory('All Articles');
                      setSearchQuery('');
                    }}
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <>
                  {/* ========================================================= */}
                  {/* Featured Hero Story Card                                  */}
                  {/* ========================================================= */}
                  {featuredArticle && (
                    <ScrollReveal>
                      <article className={styles.featuredCard}>
                        {/* Visual Column */}
                        <div className={styles.featuredVisualWrap}>
                          <Link
                            href={`/insights/${featuredArticle.slug}`}
                            className={styles.featuredVisual}
                            aria-label={featuredArticle.title}
                          >
                            <Image
                              src={featuredArticle.image}
                              alt={featuredArticle.title}
                              fill
                              priority
                              className={styles.featuredImg}
                              sizes="(max-width: 768px) 100vw, 48vw"
                            />
                            <div className={styles.visualOverlay} />
                            <div className={styles.visualBadgesRow}>
                              <span className={styles.featuredBadge}>⭐ Editor&apos;s Pick</span>
                              <span className={styles.readTimeBadge}>⏱ {featuredArticle.readTime}</span>
                            </div>
                          </Link>
                        </div>

                        {/* Content Column */}
                        <div className={styles.featuredContent}>
                          <div className={styles.cardHeaderMeta}>
                            <span className={styles.cardCategory}>
                              <span className={styles.categoryDot} />
                              {featuredArticle.category}
                            </span>
                            <span className={styles.cardPublishDate}>{featuredArticle.date}</span>
                          </div>

                          <h2 className={styles.featuredTitle}>
                            <Link href={`/insights/${featuredArticle.slug}`} className={styles.titleLink}>
                              {featuredArticle.title}
                            </Link>
                          </h2>

                          <p className={styles.featuredExcerpt}>
                            {featuredArticle.excerpt}
                          </p>

                          {/* Key takeaways highlights preview */}
                          {featuredArticle.takeaways && featuredArticle.takeaways.length > 0 && (
                            <div className={styles.takeawaysPreview}>
                              <div className={styles.takeawaysLabel}>✦ Key Focus Points:</div>
                              <ul className={styles.takeawaysSnippetList}>
                                {featuredArticle.takeaways.slice(0, 2).map((item, idx) => (
                                  <li key={idx} className={styles.takeawaySnippetItem}>
                                    <span className={styles.takeawayCheck}>✓</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Author & Action Footer */}
                          <div className={styles.cardFooter}>
                            <div className={styles.authorMeta}>
                              <div className={styles.authorAvatar}>
                                {featuredArticle.authorImage ? (
                                  <Image
                                    src={featuredArticle.authorImage}
                                    alt={featuredArticle.author}
                                    width={44}
                                    height={44}
                                    className={styles.authorAvatarImg}
                                  />
                                ) : (
                                  featuredArticle.author.charAt(0)
                                )}
                              </div>
                              <div className={styles.authorText}>
                                <div className={styles.authorNameRow}>
                                  <span className={styles.authorName}>{featuredArticle.author}</span>
                                  <span className={styles.verifiedMark} title="Verified Growth Practitioner">✓</span>
                                </div>
                                <span className={styles.authorRole}>{featuredArticle.authorRole}</span>
                              </div>
                            </div>

                            <div className={styles.cardActionGroup}>
                              <button
                                type="button"
                                className={styles.shareBtn}
                                onClick={(e) => handleCopyLink(featuredArticle.slug, e)}
                                title="Copy link to clipboard"
                                aria-label="Share article link"
                              >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <circle cx="18" cy="5" r="3" />
                                  <circle cx="6" cy="12" r="3" />
                                  <circle cx="18" cy="19" r="3" />
                                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                </svg>
                              </button>
                              <BeamButton
                                href={`/insights/${featuredArticle.slug}`}
                                label="Read Full Playbook"
                                size="sm"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                  )}

                  {/* ========================================================= */}
                  {/* Secondary Playbooks Grid                                  */}
                  {/* ========================================================= */}
                  {remainingArticles.length > 0 && (
                    <div className={styles.subGridSection}>
                      <div className={styles.subGridHeader}>
                        <div className={styles.subGridTitleGroup}>
                          <span className={styles.subGridBadge}>✦ Tactical Archive</span>
                          <h3 className={styles.subGridTitle}>Latest Growth Playbooks</h3>
                        </div>
                        <span className={styles.subGridCounter}>
                          {remainingArticles.length} {remainingArticles.length === 1 ? 'Article' : 'Articles'}
                        </span>
                      </div>

                      <div className={styles.subGrid}>
                        {remainingArticles.map((article, idx) => (
                          <ScrollReveal key={article.slug} delay={idx * 60}>
                            <article className={styles.storyCard}>
                              <Link
                                href={`/insights/${article.slug}`}
                                className={styles.storyVisual}
                                aria-label={article.title}
                              >
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  fill
                                  className={styles.storyImg}
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className={styles.visualOverlay} />
                                <span className={styles.storyReadTimePill}>
                                  ⏱ {article.readTime}
                                </span>
                              </Link>

                              <div className={styles.storyBody}>
                                <div className={styles.storyCategoryRow}>
                                  <span className={styles.cardCategory}>
                                    <span className={styles.categoryDot} />
                                    {article.category}
                                  </span>
                                  <span className={styles.storyDate}>{article.date}</span>
                                </div>

                                <h3 className={styles.storyTitle}>
                                  <Link href={`/insights/${article.slug}`} className={styles.titleLink}>
                                    {article.title}
                                  </Link>
                                </h3>

                                <p className={styles.storyExcerpt}>
                                  {article.excerpt}
                                </p>

                                <div className={styles.storyCardFooter}>
                                  <div className={styles.authorMetaCompact}>
                                    <div className={styles.authorAvatarSm}>
                                      {article.authorImage ? (
                                        <Image
                                          src={article.authorImage}
                                          alt={article.author}
                                          width={34}
                                          height={34}
                                          className={styles.authorAvatarImg}
                                        />
                                      ) : (
                                        article.author.charAt(0)
                                      )}
                                    </div>
                                    <div className={styles.authorTextCompact}>
                                      <span className={styles.authorNameCompact}>{article.author}</span>
                                      <span className={styles.authorRoleCompact}>{article.authorRole}</span>
                                    </div>
                                  </div>

                                  <div className={styles.storyActionRow}>
                                    <button
                                      type="button"
                                      className={styles.shareBtnSm}
                                      onClick={(e) => handleCopyLink(article.slug, e)}
                                      title="Copy link"
                                      aria-label="Copy link"
                                    >
                                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="18" cy="5" r="3" />
                                        <circle cx="6" cy="12" r="3" />
                                        <circle cx="18" cy="19" r="3" />
                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                      </svg>
                                    </button>
                                    <BeamButton
                                      href={`/insights/${article.slug}`}
                                      label="Read Story"
                                      size="sm"
                                    />
                                  </div>
                                </div>
                              </div>
                            </article>
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ========================================================= */}
                  {/* Core Growth Blueprints Shelf (Tactical Value Hub)        */}
                  {/* ========================================================= */}
                  <div className={styles.blueprintsShelf}>
                    <div className={styles.shelfHeader}>
                      <span className={styles.shelfEyebrow}>✦ Strategic Pillars</span>
                      <h3 className={styles.shelfTitle}>Core Growth Frameworks We Build On</h3>
                      <p className={styles.shelfDesc}>
                        Beyond tactical blog posts, these are the proven architectural engines we install for scaling companies.
                      </p>
                    </div>

                    <div className={styles.blueprintsGrid}>
                      <div className={styles.blueprintCard}>
                        <div className={styles.blueprintIcon}>📍</div>
                        <h4 className={styles.blueprintCardTitle}>Local 3-Pack Search Dominance</h4>
                        <p className={styles.blueprintCardDesc}>
                          Capturing high-intent local buyers in Bhubaneswar via Google Business Profile optimization, localized citation networks, and review velocity.
                        </p>
                        <ul className={styles.blueprintPoints}>
                          <li>Google Maps ranking algorithms</li>
                          <li>NAP citation harmonization</li>
                          <li>Localized geo-schema data</li>
                        </ul>
                        <Link href="/services/seo" className={styles.blueprintLink}>
                          <span>Explore SEO System</span>
                          <span className={styles.blueprintArrow}>→</span>
                        </Link>
                      </div>

                      <div className={styles.blueprintCard}>
                        <div className={styles.blueprintIcon}>🎯</div>
                        <h4 className={styles.blueprintCardTitle}>Paid Acquisition Engine</h4>
                        <p className={styles.blueprintCardDesc}>
                          Full-funnel Google and Meta Ad architectures with continuous creative testing to generate qualified leads at predictable CPAs.
                        </p>
                        <ul className={styles.blueprintPoints}>
                          <li>Dynamic creative velocity</li>
                          <li>Exact search intent capture</li>
                          <li>Attribution & ROAS tracking</li>
                        </ul>
                        <Link href="/services/performance-marketing" className={styles.blueprintLink}>
                          <span>Explore Paid Media</span>
                          <span className={styles.blueprintArrow}>→</span>
                        </Link>
                      </div>

                      <div className={styles.blueprintCard}>
                        <div className={styles.blueprintIcon}>⚡</div>
                        <h4 className={styles.blueprintCardTitle}>Conversion Rate Optimization</h4>
                        <p className={styles.blueprintCardDesc}>
                          High-speed web pages and landing pages engineered to double lead conversion rates through tactile UX and psychological clarity.
                        </p>
                        <ul className={styles.blueprintPoints}>
                          <li>Sub-2.5s mobile performance</li>
                          <li>Frictionless inquiry onramps</li>
                          <li>Skeuomorphic tactile cues</li>
                        </ul>
                        <Link href="/services/website-design-development" className={styles.blueprintLink}>
                          <span>Explore CRO & Web</span>
                          <span className={styles.blueprintArrow}>→</span>
                        </Link>
                      </div>

                      <div className={styles.blueprintCard}>
                        <div className={styles.blueprintIcon}>📈</div>
                        <h4 className={styles.blueprintCardTitle}>Topical Content Authority</h4>
                        <p className={styles.blueprintCardDesc}>
                          Building semantic pillar clusters that rank organically for commercial terms and establish undeniable brand authority.
                        </p>
                        <ul className={styles.blueprintPoints}>
                          <li>Search intent topic mapping</li>
                          <li>Pillar post cluster hierarchy</li>
                          <li>Bottom-of-funnel lead magnets</li>
                        </ul>
                        <Link href="/contact" className={styles.blueprintLink}>
                          <span>Consult Strategists</span>
                          <span className={styles.blueprintArrow}>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================= */}
                  {/* Frequently Researched Questions (Reader FAQ)              */}
                  {/* ========================================================= */}
                  <div className={styles.faqSection}>
                    <div className={styles.faqHeader}>
                      <span className={styles.faqEyebrow}>✦ Reader Clarifications</span>
                      <h3 className={styles.faqTitle}>Frequently Asked Questions About Our Research</h3>
                    </div>

                    <div className={styles.faqList}>
                      {readerFaqs.map((faq, idx) => (
                        <div
                          key={idx}
                          className={`${styles.faqCard} ${openFaqIndex === idx ? styles.faqCardOpen : ''}`}
                        >
                          <button
                            type="button"
                            className={styles.faqQuestionBtn}
                            onClick={() => toggleFaq(idx)}
                            aria-expanded={openFaqIndex === idx}
                          >
                            <span className={styles.faqQuestionText}>{faq.q}</span>
                            <span className={styles.faqChevron}>
                              {openFaqIndex === idx ? '−' : '+'}
                            </span>
                          </button>
                          {openFaqIndex === idx && (
                            <div className={styles.faqAnswerBody}>
                              <p className={styles.faqAnswerText}>{faq.a}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </main>

            {/* ============================================================= */}
            {/* 4. Sticky Sidebar Column (4 Columns)                          */}
            {/* ============================================================= */}
            <aside className={styles.sidebarCol}>
              {/* Categories Directory Widget */}
              <div className={styles.sidebarCard}>
                <div className={styles.sidebarCardHeader}>
                  <h4 className={styles.sidebarTitle}>Categories</h4>
                  <span className={styles.sidebarTotalBadge}>{articles.length} Playbooks</span>
                </div>
                <div className={styles.categoryList}>
                  {categories.map((cat) => {
                    const count = getCategoryCount(cat);
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        className={`${styles.categoryItem} ${isActive ? styles.categoryItemActive : ''}`}
                        onClick={() => {
                          setActiveCategory(cat);
                          setSearchQuery('');
                        }}
                      >
                        <div className={styles.categoryLabelWrap}>
                          <span className={styles.categoryBullet}>●</span>
                          <span>{cat}</span>
                        </div>
                        <span className={styles.categoryCountBadge}>{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Trending / Editor's Top Reads */}
              <div className={styles.sidebarCard}>
                <div className={styles.sidebarCardHeader}>
                  <h4 className={styles.sidebarTitle}>Trending Reads</h4>
                  <span className={styles.trendingBadge}>🔥 Top Picks</span>
                </div>
                <div className={styles.trendingList}>
                  {trendingArticles.map((article, index) => (
                    <Link
                      key={article.slug}
                      href={`/insights/${article.slug}`}
                      className={styles.trendingItem}
                    >
                      <span className={styles.trendingRank}>0{index + 1}</span>
                      <div className={styles.trendingContent}>
                        <span className={styles.trendingCategory}>{article.category}</span>
                        <h5 className={styles.trendingTitle}>{article.title}</h5>
                        <span className={styles.trendingMeta}>
                          {article.date} • {article.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Weekly Digest Newsletter Card (Clean Skeuomorphic) */}
              <div className={styles.newsletterCard}>
                <div className={styles.newsletterBadge}>✦ Weekly Digest</div>
                <h4 className={styles.newsletterTitle}>Stay Ahead Every Week</h4>
                <p className={styles.newsletterDesc}>
                  Receive proprietary performance marketing benchmarks, local SEO updates, and proven growth tactics straight to your inbox.
                </p>
                <div className={styles.subscriberProof}>
                  <span className={styles.proofDot} />
                  <span>Read by 1,200+ founders &amp; CMOs</span>
                </div>

                {subscribed ? (
                  <div className={styles.subscribedAlert}>
                    ✓ Subscribed! Welcome to the Growth Journal.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email..."
                      className={styles.newsletterInput}
                      aria-label="Email address for journal subscription"
                    />
                    <BeamButton type="submit" label="Subscribe to Journal" size="md" fullWidth />
                  </form>
                )}
                <span className={styles.privacyNote}>Zero spam. Unsubscribe anytime with 1 click.</span>
              </div>

              {/* Consultation & Growth Action Box (Preserving existing CTA component) */}
              <BlogSidebarCta />

              {/* Editorial Integrity Guarantee */}
              <div className={styles.editorialGuaranteeCard}>
                <div className={styles.guaranteeHeader}>
                  <span className={styles.guaranteeShield}>🛡️</span>
                  <span className={styles.guaranteeTitle}>The Copilot Standard</span>
                </div>
                <p className={styles.guaranteeText}>
                  Every framework published in this journal is backed by live campaign data, real ad spend, and active client deployments in Bhubaneswar.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className={styles.toastNotification} role="status">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global CTA Section */}
      <CTASection />
    </>
  );
}
