'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './ServicesSection.module.css';

interface ServiceItem {
  num: string;
  category: string;
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  href: string;
  color: string;
  stat: string;
  statLabel: string;
  iconSrc: string;
}

const services: ServiceItem[] = [
  {
    num: '01',
    category: 'Paid Search & PPC',
    title: 'Google Ads Management',
    tagline: 'Reach High-Intent Customers with Google Ads',
    desc: 'Run Google Ads campaigns that can help you grow your business with relevant traffic, leads, and sales. As a digital marketing company in India, we manage Search, Performance Max, Display, Shopping, and YouTube campaigns for businesses across multiple industries. Digital marketing services are built around the right visitors, improved ad performance, and the smart allocation of advertising dollars.',
    tags: [
      'Search Ads',
      'Performance Max',
      'Display Ads',
      'Shopping Ads',
      'YouTube Ads',
      'Lead Generation',
      'Conversion Tracking',
      'Smart Budget Allocation',
    ],
    href: '/services/performance-marketing-in-india',
    color: '#0B2093',
    stat: '4.8x',
    statLabel: 'Average ROAS',
    iconSrc: '/images/icons/google-ads.svg',
  },
  {
    num: '02',
    category: 'Meta & Paid Social',
    title: 'Facebook & Instagram Ads',
    tagline: 'Connect with Customers on Social Media',
    desc: 'Effective Facebook and Instagram ads to reach your target market. Our digital marketing agency designs your campaigns for lead generation, sales, remarketing, and brand awareness. Our marketing services are created to reach out to the right audience, spark inquiries, and foster deeper connections with customers via social channels for brands across India.',
    tags: [
      'Facebook Ads',
      'Instagram Ads',
      'Lead Generation',
      'Sales Funnels',
      'Remarketing',
      'Brand Awareness',
      'Audience Targeting',
      'Campaign Optimization',
    ],
    href: '/services/performance-marketing-in-india',
    color: '#0B2093',
    stat: '+142%',
    statLabel: 'Revenue Lift',
    iconSrc: '/images/icons/meta-ads.svg',
  },
  {
    num: '03',
    category: 'SEO & Organic Growth',
    title: 'Search Engine Optimization',
    tagline: 'Get Found Where Customers Search',
    desc: 'Gain better rankings in Google and reach out to potential customers who are actively looking for your services. Our SEO services in India encompass technical SEO, local SEO, AEO, GEO, keyword strategy, content optimization, and authority building. As a digital marketing agency, we provide pragmatic digital marketing solutions to increase search visibility, drive targeted traffic, and help your business rank well online.',
    tags: [
      'Technical SEO',
      'Local SEO',
      'AEO & GEO Optimization',
      'Keyword Strategy',
      'Targeted Traffic',
      'Search Visibility',
      'Rank Tracking',
      'Organic Growth',
    ],
    href: '/services/seo-services-in-india',
    color: '#0D007F',
    stat: '+187%',
    statLabel: 'Organic Traffic Lift',
    iconSrc: '/images/icons/seo.svg',
  },
  {
    num: '04',
    category: 'Social Media & Content',
    title: 'Social Media Marketing',
    tagline: 'Build a Stronger Brand on Social',
    desc: 'Be more prominent on social media with consistency and engaging content. Our social media marketing solutions involve account administration, branding, reels, content creation, and creative posts. At Marketing Copilot, we help businesses across India reach their target audiences, promote their services, and build a stronger social presence.',
    tags: [
      'Account Administration',
      'Branding & Identity',
      'Reels & Video Content',
      'Creative Posts',
      'Audience Engagement',
      'Content Strategy',
      'Social Growth',
      'Community Building',
    ],
    href: '/services/social-media-marketing-in-india',
    color: '#F59E0B',
    stat: '10M+',
    statLabel: 'Monthly Impressions',
    iconSrc: '/images/icons/social-media.svg',
  },
  {
    num: '05',
    category: 'AI & Creative Media',
    title: 'AI Film Production',
    tagline: 'Create Modern Content with AI',
    desc: 'Create commercials, promotional videos, and brand films with AI. Our digital solutions help businesses create engaging visual content for advertising, websites, and social media. From AI ads and product videos to creative brand stories, we provide modern online marketing services that help your business communicate better and stand out online.',
    tags: [
      'AI Commercials',
      'Promotional Videos',
      'Brand Films',
      'AI Video Ads',
      'Product Showcase Videos',
      'Creative Storytelling',
      'Visual Content',
      'Digital Advertising',
    ],
    href: '/services/ai-automation-services-in-india',
    color: '#8B5CF6',
    stat: '10x',
    statLabel: 'Production Speed',
    iconSrc: '/images/icons/content-strategy.svg',
  },
  {
    num: '06',
    category: 'Visual Production & Studio',
    title: 'Commercial Photography & Video',
    tagline: 'Show Your Brand at Its Best',
    desc: 'Bring a professional visual presentation of your products, services, and business with professional photos and videos. We offer commercial production, photography, videography, branded movie shoots, and drone shoots. These visual digital marketing solutions can aid your professional growth in the digital world, offering your company in India the picture of professionalism and improving interaction with customers.',
    tags: [
      'Commercial Production',
      'Product Photography',
      'Corporate Videography',
      'Branded Movie Shoots',
      'Drone Aerial Shoots',
      'Visual Storytelling',
      'Studio Shoots',
      'Brand Presentation',
    ],
    href: '/services/creative-branding-services-in-india',
    color: '#06B6D4',
    stat: '4K/8K',
    statLabel: 'Cinematic Quality',
    iconSrc: '/images/icons/branding.svg',
  },
  {
    num: '07',
    category: 'Pan-India & Hyper-Local Marketing',
    title: 'Pan-India Digital Marketing',
    tagline: 'Grow Your Business Across India',
    desc: 'Connect with a larger customer base across your target markets using location-based and pan-India digital marketing services. Local SEO, Google Maps optimization, and geo-targeted marketing are the best ways to make you visible across India. Digital marketing solutions can help nearby and national customers find your business and choose you across multiple industries and expanding companies.',
    tags: [
      'Pan-India SEO',
      'Google Maps Optimization',
      'Geo-Targeted Marketing',
      'Location-Based Ads',
      'Foot Traffic Growth',
      'Customer Acquisition',
      'Local Citations',
      'Pan-India Visibility',
    ],
    href: '/digital-marketing-company-in-india',
    color: '#10B981',
    stat: '#1',
    statLabel: 'Market Visibility',
    iconSrc: '/images/icons/digital-marketing.svg',
  },
  {
    num: '08',
    category: 'Local Search & Map Pack',
    title: 'Google Business Profile Optimization',
    tagline: 'Get More Visibility on Google Maps',
    desc: 'Get your business on to increasingly easier discovery by local customers in Google Search & Google Maps. Google Business Profile services prioritize the accuracy of business information, optimizing profiles, reviews, local visibility, and customer engagement. We are a digital marketing company focused on driving local engagement and converting local search into calls, visits & inquiries for businesses in India!',
    tags: [
      'GBP Optimization',
      'Google Maps Ranking',
      'Review Management',
      'Local Search Dominance',
      'Call & Visit Inquiries',
      'NAP Consistency',
      'Photo & Post Updates',
      'Local Map Pack',
    ],
    href: '/services/seo-services-in-india',
    color: '#D97706',
    stat: '3.4x',
    statLabel: 'Direct Calls & Leads',
    iconSrc: '/images/icons/influencer-marketing.svg',
  },
];

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section className={`section ${styles.section}`} id="services-section">
      <div className={styles.bgGlow} />

      <div className="container">
        {/* Section Header (Centered, Symmetrical, High-Impact UX) */}
        <div className={styles.header}>
          <ScrollReveal direction="up" className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              What We Do · Integrated Growth Practices
            </div>
            <h3 className={`display-lg ${styles.headline}`}>
              Best Digital Marketing Services{' '}
              <span className="accent-gradient">in India</span>
            </h3>
            <p className={`body-lg ${styles.subText}`}>
              As a trusted digital marketing company in India, we are able to provide you with integrated digital marketing services, including SEO, online marketing services, paid advertising, social media, and web solutions. Our digital marketing solutions help businesses generate qualified leads, strengthen visibility, and achieve measurable growth through strategic campaigns.
            </p>
            <div className={styles.headerPills}>
              <span className={styles.headerPill}>
                <span className={styles.pillDot} /> Full-Funnel Strategy
              </span>
              <span className={styles.headerPill}>
                <span className={styles.pillDot} /> Qualified Lead Generation
              </span>
              <span className={styles.headerPill}>
                <span className={styles.pillDot} /> Measurable ROI
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Vertical Stream of Growth Practices (4 by default with View More toggle) */}
        <div className={styles.verticalStream}>
          {displayedServices.map((service, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <ScrollReveal key={service.num} delay={idx * 0.05}>
                <div
                  className={`${styles.streamRow} ${isHovered ? styles.rowHovered : ''}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{ '--row-color': service.color } as React.CSSProperties}
                >
                  {/* Left Column: Number & 3D Embossed Icon */}
                  <div className={styles.rowLeftCol}>
                    <span className={styles.numBadge}>{service.num}</span>
                    <div 
                      className={styles.iconPlate}
                      style={{ 
                        color: service.color,
                        borderColor: isHovered ? `${service.color}60` : '#E2E8F0',
                        background: isHovered ? `${service.color}15` : '#F8FAFC'
                      }}
                    >
                      <Image
                        src={service.iconSrc}
                        alt={`${service.title} icon`}
                        width={30}
                        height={30}
                        className={styles.practiceIcon}
                      />
                    </div>
                  </div>

                  {/* Middle Column: Title, Tagline, Desc, & Capability Chips */}
                  <div className={styles.rowMidCol}>
                    <div className={styles.titleMetaRow}>
                      <span 
                        className={styles.categoryTag}
                        style={{ color: service.color, borderColor: `${service.color}35`, background: `${service.color}10` }}
                      >
                        {service.category}
                      </span>
                    </div>

                    <h4 className={styles.practiceTitle}>{service.title}</h4>
                    <p className={styles.practiceTagline} style={{ color: service.color }}>{service.tagline}</p>
                    <p className={styles.practiceDesc}>{service.desc}</p>

                    {/* Capability Tags */}
                    <div className={styles.chipsRow}>
                      {service.tags.map((tag) => (
                        <span key={tag} className={styles.chipPill}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Metric Callout & Action Link */}
                  <div className={styles.rowRightCol}>
                    <div className={styles.statBox}>
                      <div className={styles.statNumber} style={{ color: service.color }}>
                        {service.stat}
                      </div>
                      <div className={styles.statLabel}>{service.statLabel}</div>
                    </div>

                    <BeamButton
                      href={service.href}
                      label="Explore Practice"
                      size="sm"
                      ariaLabel={`Explore ${service.title} Practice`}
                    />
                  </div>
                </div>

                {/* Subtle Divider (except last in displayed list) */}
                {idx < displayedServices.length - 1 && <div className={styles.streamDivider} />}
              </ScrollReveal>
            );
          })}
        </div>

        {/* View More / View Less Toggle Button */}
        <div className={styles.toggleWrapper}>
          <BeamButton
            onClick={() => {
              if (showAll) {
                const sectionEl = document.getElementById('services-section');
                if (sectionEl) {
                  sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
              setShowAll(prev => !prev);
            }}
            label={showAll ? 'Show Fewer Practices ↑' : `View All ${services.length} Practices ↓`}
            arrow={false}
            size="md"
          />
        </div>

        {/* Centered High-Impact Skeuomorphic CTA Card */}
        <div className={styles.ctaCardWrapper}>
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <div className={styles.ctaCardGlow} />
              <div className={styles.ctaCardMesh} />

              {/* Centered Top Badge */}
              <div className={styles.ctaBadgeWrap}>
                <div className={styles.ctaBadge}>
                  <span className={styles.badgeDot} />
                  <span>Tailored Growth Strategy · Built for Businesses Across India</span>
                </div>
              </div>

              {/* Centered Typography (Concise & High Impact) */}
              <div className={styles.ctaHeadline}>
                Your Business Deserves a <span className="accent-gradient">Strategy That Delivers</span>
              </div>

              <p className={styles.ctaSubtext}>
                Create a tailored growth plan across Search, Paid Media, and web solutions, built to strengthen your online presence, convert more visitors, and maximize the return on your marketing investment.
              </p>

              {/* Centered Feature Capability Pills */}
              <div className={styles.ctaPillsRow}>
                <div className={styles.ctaPill}>
                  <span className={styles.pillIcon}>📊</span>
                  <span>Full-Funnel &amp; SERP Audit</span>
                </div>
                <div className={styles.ctaPill}>
                  <span className={styles.pillIcon}>🎯</span>
                  <span>High-Intent Lead Pipelines</span>
                </div>
                <div className={styles.ctaPill}>
                  <span className={styles.pillIcon}>📈</span>
                  <span>Compounding ROAS Scaling</span>
                </div>
              </div>

              {/* Centered Skeuomorphic Button & Trust Verification (At the Bottom of Card) */}
              <div className={styles.ctaBottomCenter}>
                <BeamButton href="/contact" label="Grow Your Business With Us" size="md" />
              </div>

                <div className={styles.ctaTrustStrip}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustCheck}>✓</span>
                    <span>100% Free 30-Min Call</span>
                  </div>
                  <span className={styles.trustSep}>•</span>
                  <div className={styles.trustItem}>
                    <span className={styles.trustCheck}>✓</span>
                    <span>Custom Growth Blueprint</span>
                  </div>
                  <span className={styles.trustSep}>•</span>
                  <div className={styles.trustItem}>
                    <span className={styles.trustCheck}>✓</span>
                    <span>Zero Obligation</span>
                  </div>
                </div>

                <div className={styles.catalogLinkRow}>
                  <Link href="/services" className={styles.catalogLink}>
                    <span>Or Explore Complete Service Directory</span>
                    <span className={styles.catalogArrow}>→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }
