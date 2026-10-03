'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import BlogSidebarCta from '@/components/BlogSidebarCta';
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
  featured?: boolean;
}

const categories = ['All Stories', 'Marketing', 'SEO', 'Social', 'Branding', 'Technology'];

export default function InsightsClient({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter articles based on active category and search query
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === 'All Stories' ||
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

  // Designate featured article (first one matching filter, or fallback)
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
        {/* Hero Section matching Ekatraa Journal structure in Marketing Copilot styling */}
        <section className={styles.hero}>
          <div className="container">
            <ScrollReveal className={styles.heroInner}>
              <div className={styles.heroEyebrow}>
                <span>✦</span>
                <span>The Marketing Copilot Journal</span>
              </div>
              <h1 className={styles.heroTitle}>
                Ideas worth<br />
                <span className={styles.heroTitleAccent}>thinking about.</span>
              </h1>
              <p className={styles.heroSub}>
                Strategic growth playbooks, performance benchmarks, and practical field research from our senior operators in Bhubaneswar.
              </p>
            </ScrollReveal>
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
            </div>
          </div>

          {/* 12-Column Grid Layout */}
          <div className={styles.layoutGrid}>
            {/* Main Stories Column (8 Columns) */}
            <main className={styles.mainCol}>
              {filteredArticles.length === 0 ? (
                <div className={styles.emptyState}>
                  <h3 className={styles.emptyTitle}>No playbooks found</h3>
                  <p className={styles.emptyText}>
                    We could not find any articles matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
                  </p>
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={() => {
                      setActiveCategory('All Stories');
                      setSearchQuery('');
                    }}
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Featured Hero Story Card (Horizontal Layout) */}
                  {featuredArticle && (
                    <ScrollReveal>
                      <Link
                        href={`/insights/${featuredArticle.slug}`}
                        className={styles.featuredCard}
                      >
                        <div className={styles.featuredVisual}>
                          <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            fill
                            priority
                            className={styles.featuredImg}
                            sizes="(max-width: 768px) 100vw, 45vw"
                          />
                        </div>

                        <div className={styles.featuredContent}>
                          <span className={styles.cardCategory}>
                            {featuredArticle.category}
                          </span>
                          <h2 className={styles.featuredTitle}>
                            {featuredArticle.title}
                          </h2>
                          <p className={styles.featuredExcerpt}>
                            {featuredArticle.excerpt}
                          </p>

                          <div className={styles.cardFooter}>
                            <div className={styles.authorMeta}>
                              <div className={styles.authorAvatar}>
                                {featuredArticle.author.charAt(0)}
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

                            <span className={styles.readMoreLink}>
                              <span>Read Story</span>
                              <span aria-hidden="true">→</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  )}

                  {/* Secondary Stories Grid (2-Column Grid) */}
                  {remainingArticles.length > 0 && (
                    <div className={styles.subGrid}>
                      {remainingArticles.map((article, idx) => (
                        <ScrollReveal key={article.slug} delay={idx * 50}>
                          <Link
                            href={`/insights/${article.slug}`}
                            className={styles.storyCard}
                          >
                            <div className={styles.storyVisual}>
                              <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className={styles.storyImg}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            </div>

                            <div className={styles.storyBody}>
                              <span className={styles.cardCategory}>
                                {article.category}
                              </span>
                              <h3 className={styles.storyTitle}>
                                {article.title}
                              </h3>
                              <p className={styles.storyExcerpt}>
                                {article.excerpt}
                              </p>

                              <div className={styles.cardFooter}>
                                <div className={styles.authorMeta}>
                                  <div className={styles.authorAvatar}>
                                    {article.author.charAt(0)}
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
                              </div>
                            </div>
                          </Link>
                        </ScrollReveal>
                      ))}
                    </div>
                  )}
                </>
              )}
            </main>

            {/* Sticky Sidebar Column (4 Columns) */}
            <aside className={styles.sidebarCol}>
              {/* Category Directory Card */}
              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarTitle}>Categories</h4>
                <div className={styles.categoryList}>
                  {categories.slice(1).map((cat) => {
                    const count = articles.filter(
                      (a) => a.category.toLowerCase() === cat.toLowerCase()
                    ).length;
                    return (
                      <button
                        key={cat}
                        type="button"
                        className={styles.categoryItem}
                        onClick={() => setActiveCategory(cat)}
                      >
                        <div>
                          <span className={styles.categoryIcon}>✦</span>
                          <span>{cat}</span>
                        </div>
                        <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
                          ({count})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter Subscription Widget */}
              <div className={styles.newsletterCard}>
                <h4 className={styles.newsletterTitle}>Stay Ahead Every Week</h4>
                <p className={styles.newsletterDesc}>
                  Get the latest performance marketing playbooks, technical SEO benchmarks, and growth tactics delivered straight to your inbox.
                </p>
                {subscribed ? (
                  <div style={{ color: '#16A34A', fontSize: '0.875rem', fontWeight: 700, padding: '0.5rem 0' }}>
                    ✓ Subscribed! Welcome to the Growth Journal.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe}>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className={styles.newsletterInput}
                    />
                    <button type="submit" className={styles.newsletterBtn}>
                      Subscribe to Journal
                    </button>
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
