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
}

export default function InsightsClient({ articles = [] }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Dynamically extract actual categories from real published articles
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => {
      if (a.category && a.category.trim()) {
        set.add(a.category.trim());
      }
    });
    return ['All Articles', ...Array.from(set)];
  }, [articles]);

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
        article.author.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, searchQuery]);

  // Featured article is the first one matching filter
  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <>
      <div className={styles.page}>
        {/* Hero Section with Ambient Aura */}
        <section className={styles.hero}>
          <div className={styles.heroAmbientAmber} />
          <div className={styles.heroAmbientBlue} />
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} />
                <span>The Marketing Copilot Journal</span>
                <span className={styles.liveIndicator}>
                  <span className={styles.liveDot} /> Verified Playbooks
                </span>
              </div>
              <h1 className={styles.heroTitle}>
                Ideas worth<br />
                <span className={styles.heroTitleAccent}>thinking about.</span>
              </h1>
              <p className={styles.heroSub}>
                Strategic growth playbooks, performance benchmarks, and practical field research from our senior operators in Bhubaneswar.
              </p>
            </div>
          </div>
        </section>

        <div className="container">
          {/* Category Filter & Search Bar */}
          <div className={styles.filterBar}>
            <div className={styles.filterPills}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.filterPill} ${
                    activeCategory === cat ? styles.filterPillActive : ''
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.searchWrap}>
              <svg
                className={styles.searchIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search playbooks..."
                className={styles.searchInput}
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* 12-Column Responsive Layout Grid */}
          <div className={styles.layoutGrid}>
            {/* Main Stories Column (8 Columns) */}
            <main className={styles.mainCol}>
              {filteredArticles.length === 0 ? (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIconWrap}>✦</div>
                  <h3 className={styles.emptyTitle}>
                    {articles.length === 0 ? 'No Articles Published Yet' : 'No matching playbooks found'}
                  </h3>
                  <p className={styles.emptyText}>
                    {articles.length === 0
                      ? 'Our editorial team is preparing deep-dive growth research. Please check back shortly!'
                      : `We could not find any articles matching "${searchQuery}". Try another keyword or reset your filter.`}
                  </p>
                  {articles.length > 0 && (
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
                  )}
                </div>
              ) : (
                <>
                  {/* Featured Hero Story Card (Skeuomorphic Masterpiece) */}
                  {featuredArticle && (
                    <ScrollReveal>
                      <article className={styles.featuredCard}>
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
                            sizes="(max-width: 768px) 100vw, 45vw"
                          />
                          <div className={styles.visualOverlay} />
                          <span className={styles.visualBadge}>Featured Analysis</span>
                        </Link>

                        <div className={styles.featuredContent}>
                          <div className={styles.cardCategoryWrap}>
                            <span className={styles.cardCategory}>
                              <span className={styles.categoryDot} />
                              {featuredArticle.category}
                            </span>
                          </div>

                          <h2 className={styles.featuredTitle}>
                            <Link href={`/insights/${featuredArticle.slug}`} className={styles.titleLink}>
                              {featuredArticle.title}
                            </Link>
                          </h2>
                          <p className={styles.featuredExcerpt}>
                            {featuredArticle.excerpt}
                          </p>

                          <div className={styles.cardFooter}>
                            <div className={styles.authorMeta}>
                              <div className={styles.authorAvatar}>
                                {featuredArticle.authorImage ? (
                                  <Image
                                    src={featuredArticle.authorImage}
                                    alt={featuredArticle.author}
                                    width={40}
                                    height={40}
                                    className={styles.authorAvatarImg}
                                  />
                                ) : (
                                  featuredArticle.author.charAt(0)
                                )}
                              </div>
                              <div className={styles.authorText}>
                                <span className={styles.authorName}>
                                  {featuredArticle.author}
                                </span>
                                <span className={styles.cardDate}>
                                  {featuredArticle.date} • {featuredArticle.readTime}
                                </span>
                              </div>
                            </div>

                            <BeamButton
                              href={`/insights/${featuredArticle.slug}`}
                              label="Read Story"
                              size="sm"
                            />
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                  )}

                  {/* Secondary Stories Grid (when more articles exist) */}
                  {remainingArticles.length > 0 && (
                    <div className={styles.subGrid}>
                      {remainingArticles.map((article, idx) => (
                        <ScrollReveal key={article.slug} delay={idx * 50}>
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
                            </Link>

                            <div className={styles.storyBody}>
                              <div className={styles.cardCategoryWrap}>
                                <span className={styles.cardCategory}>
                                  <span className={styles.categoryDot} />
                                  {article.category}
                                </span>
                              </div>
                              <h3 className={styles.storyTitle}>
                                <Link href={`/insights/${article.slug}`} className={styles.titleLink}>
                                  {article.title}
                                </Link>
                              </h3>
                              <p className={styles.storyExcerpt}>
                                {article.excerpt}
                              </p>

                              <div className={styles.cardFooter}>
                                <div className={styles.authorMeta}>
                                  <div className={styles.authorAvatar}>
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
                                  <div className={styles.authorText}>
                                    <span className={styles.authorName}>
                                      {article.author}
                                    </span>
                                    <span className={styles.cardDate}>
                                      {article.date} • {article.readTime}
                                    </span>
                                  </div>
                                </div>

                                <BeamButton
                                  href={`/insights/${article.slug}`}
                                  label="Read Story"
                                  size="sm"
                                />
                              </div>
                            </div>
                          </article>
                        </ScrollReveal>
                      ))}
                    </div>
                  )}

                  {/* Clean Editorial Dispatch Note */}
                  {filteredArticles.length === 1 && (
                    <div className={styles.editorialNote}>
                      <div className={styles.editorialNoteHeader}>
                        <span className={styles.categoryDot} />
                        <span className={styles.editorialNoteBadge}>Editorial Dispatch</span>
                      </div>
                      <h3 className={styles.editorialNoteTitle}>
                        More Research & Growth Playbooks in Production
                      </h3>
                      <p className={styles.editorialNoteText}>
                        Our senior growth operators in Bhubaneswar are currently compiling field benchmarks across Local 3-Pack SEO, Meta Ad creative velocity, and full-funnel CRO. Verified field notes and case studies are published weekly.
                      </p>
                    </div>
                  )}
                </>
              )}
            </main>

            {/* Sticky Sidebar Column (4 Columns) */}
            <aside className={styles.sidebarCol}>
              {/* Dynamic Category Directory Card - Only when 2+ categories exist */}
              {categories.length > 2 && (
                <div className={styles.sidebarCard}>
                  <div className={styles.sidebarCardHeader}>
                    <h4 className={styles.sidebarTitle}>Categories</h4>
                    <span className={styles.sidebarTotalBadge}>{articles.length} Playbooks</span>
                  </div>
                  <div className={styles.categoryList}>
                    {/* All Articles Option */}
                    <button
                      type="button"
                      className={`${styles.categoryItem} ${
                        activeCategory === 'All Articles' ? styles.categoryItemActive : ''
                      }`}
                      onClick={() => setActiveCategory('All Articles')}
                    >
                      <div className={styles.categoryLabelWrap}>
                        <span className={styles.categoryBullet}>●</span>
                        <span>All Articles</span>
                      </div>
                      <span className={styles.categoryCountBadge}>
                        {articles.length}
                      </span>
                    </button>

                    {/* Individual Categories from Real Posts */}
                    {categories.slice(1).map((cat) => {
                      const count = articles.filter(
                        (a) => a.category.toLowerCase() === cat.toLowerCase()
                      ).length;
                      return (
                        <button
                          key={cat}
                          type="button"
                          className={`${styles.categoryItem} ${
                            activeCategory === cat ? styles.categoryItemActive : ''
                          }`}
                          onClick={() => setActiveCategory(cat)}
                        >
                          <div className={styles.categoryLabelWrap}>
                            <span className={styles.categoryBullet}>●</span>
                            <span>{cat}</span>
                          </div>
                          <span className={styles.categoryCountBadge}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Newsletter Subscription Widget (Clean Skeuomorphic) */}
              <div className={styles.newsletterCard}>
                <div className={styles.newsletterBadge}>✦ Weekly Digest</div>
                <h4 className={styles.newsletterTitle}>Stay Ahead Every Week</h4>
                <p className={styles.newsletterDesc}>
                  Receive proprietary performance marketing benchmarks, local SEO updates, and proven growth tactics straight to your inbox.
                </p>
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
                    />
                    <BeamButton type="submit" label="Subscribe to Journal" size="md" fullWidth />
                  </form>
                )}
              </div>

              {/* Consultation & Growth Action Box */}
              <BlogSidebarCta />
            </aside>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
