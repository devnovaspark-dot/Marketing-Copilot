'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import styles from './web-dev-page.module.css';

// 6 Core Web Development Services
const webServices = [
  {
    num: '01',
    icon: '💻',
    tag: 'CLEAN CODE & SPEED',
    title: 'Custom Website Development',
    desc: 'We develop custom websites for your business needs, business goals, and the style of your brand. All websites are responsive, user-friendly, and clean-coded. Speed and performance are also a priority for us, ensuring that visitors can enjoy a smooth browsing experience.',
    footerTag: '✦ Core Web Vitals <0.8s',
    deliverable: '✓ Next.js & React',
    highlights: ['Next.js 15 App Router', 'Sub-Second LCP Score', '100% Fluid Breakpoints'],
  },
  {
    num: '02',
    icon: '🛍️',
    tag: 'ONLINE COMMERCE',
    title: 'E-Commerce Website Development',
    desc: 'We design secure and user-friendly websites to enable businesses to sell products online. We develop a seamless shopping journey, from streamlined product management and checkout to WooCommerce and payment integration.',
    footerTag: '✦ High-Conversion Cart',
    deliverable: '✓ Shopify & Woo',
    highlights: ['Shopify & WooCommerce', 'One-Click Razorpay & Stripe', 'Abandoned Cart Automation'],
  },
  {
    num: '03',
    icon: '⚡',
    tag: 'SCALABLE CMS',
    title: 'WordPress Development',
    desc: 'We build professional WordPress websites that are easily managed and scalable to grow with your business. Whether it’s custom themes and plugins or speed and security enhancements, we build reliable websites that give you more control over your online content.',
    footerTag: '✦ Scalable CMS Architecture',
    deliverable: '✓ Custom ACF Pro',
    highlights: ['Custom ACF Pro Blocks', 'Headless CMS Architecture', 'Enterprise Security Shield'],
  },
  {
    num: '04',
    icon: '🎨',
    tag: 'INTUITIVE EXPERIENCES',
    title: 'UI/UX Design Integration',
    desc: 'Simple and modern UI/UX principles are provided to make your website easy and fun to use. Clear layouts, simple navigation, strong call-to-action buttons, and mobile-friendly designs help visitors find information quickly and interact with your website comfortably.',
    footerTag: '✦ Design System & Tokens',
    deliverable: '✓ Figma to Code',
    highlights: ['Figma to Pixel-Perfect Code', 'Interactive Micro-Motion', 'WCAG 2.1 AA Compliant'],
  },
  {
    num: '05',
    icon: '🛡️',
    tag: 'SECURITY & UPTIME',
    title: 'Website Maintenance & Support',
    desc: 'Regular maintenance and support keep your website up to date, safe, and running smoothly. We offer updates, bug fixes, performance checks, and security monitoring to minimize technical issues and ensure your site is ready for routine business operations.',
    footerTag: '✦ 99.9% Uptime Guarantee',
    deliverable: '✓ 24/7 Monitoring',
    highlights: ['24/7 Server Health Watch', 'Automated Daily Cloud Backups', 'Zero-Downtime Patching'],
  },
  {
    num: '06',
    icon: '📱',
    tag: 'MOBILE & WEB APPS',
    title: 'App Development',
    desc: 'We create simple, easy-to-use mobile and web applications built around your business needs. We work with you on planning, design, development, and testing to ensure you get a reliable app that delivers a seamless experience, meets your objectives, and reaches your customers.',
    footerTag: '✦ PWA & Native Ready',
    deliverable: '✓ iOS & Android',
    highlights: ['Progressive Web Apps (PWA)', 'Cross-Platform React Native', 'Offline-First Sync API'],
  },
];

// 3-Step Growth Process
const growthSteps = [
  {
    step: 'STEP 01',
    icon: '🔍',
    title: 'Research & Analysis',
    desc: 'We study your market, audience, competitors, and data to uncover valuable insights and identify opportunities for sustainable digital growth.',
    tag: 'Market & Audience Audit',
    timeframe: 'WEEK 01-02',
    checkpoints: ['Architecture & Tech Audit', 'User Persona Journey Mapping', 'Competitive Performance Benchmark'],
  },
  {
    step: 'STEP 02',
    icon: '🧭',
    title: 'Strategy Planning',
    desc: 'We turn insights into a clear digital strategy, choosing the right channels, content, and campaigns to achieve your business goals.',
    tag: 'Clear Channel Architecture',
    timeframe: 'WEEK 03',
    checkpoints: ['Interactive Wireframe Systems', 'Conversion-Optimized Copywriting', 'Database & API Schema Design'],
  },
  {
    step: 'STEP 03',
    icon: '🚀',
    title: 'Execution',
    desc: 'We put the strategy into action with focused campaigns, engaging content, and continuous optimization designed to deliver measurable business results.',
    tag: 'Agile Milestone Delivery',
    timeframe: 'WEEK 04+',
    checkpoints: ['High-Performance Next.js Build', 'Cross-Device QA & Speed Tests', 'Live Deployment & SEO Schema Launch'],
  },
];

// 4 Pillars of Why Marketing Copilot is the Best
const whyBestPillars = [
  {
    icon: '📱',
    title: 'Modern & Responsive Design',
    desc: 'We build clean, modern websites with a consistent experience on desktop, tablet, and mobile devices. Each element is straightforward, understandable, and easy to navigate for visitors.',
    feature: 'Mobile-First Ergonomics',
    status: '✓ Copilot Standard',
    highlights: ['Retina-Ready Typography', 'Fluid Grid Layouts', 'Touch-First Navigation'],
  },
  {
    icon: '⚡',
    title: 'Performance & Speed',
    desc: 'Slow websites can impact both user experience and engagement. Optimized development, clean code, and performance optimizations ensure your website loads quickly and operates seamlessly.',
    feature: 'Sub-Second Loading SLA',
    status: '✓ Copilot Standard',
    highlights: ['Next-Gen AVIF/WebP Compression', 'Zero Bloatware Codebase', '<0.8s Mobile First Contentful Paint'],
  },
  {
    icon: '🎯',
    title: 'SEO-Friendly Development',
    desc: 'SEO Development Practices: Strong Technical Base for Search Visibility. Consideration of important SEO elements, from website structure to mobile responsiveness and performance.',
    feature: 'Google Technical SEO Schema',
    status: '✓ Copilot Standard',
    highlights: ['Schema.org Rich Snippets', 'Canonical & Robots Routing', 'Automated XML Sitemaps'],
  },
  {
    icon: '🤝',
    title: 'Ongoing Support',
    desc: 'The partnership doesn’t finish once we have your website up and running. We maintain and support your website to ensure it stays up-to-date, secure, and reliable as your business grows.',
    feature: '24/7 Security & Health Checks',
    status: '✓ Copilot Standard',
    highlights: ['99.9% Cloud SLA Guarantee', 'Automated Malware Scanning', 'Priority Developer Response'],
  },
];

// FAQ Data (Closed by default per user request)
const webDevFaqs = [
  {
    q: '1. What makes Marketing Copilot a website development agency in India?',
    a: 'We at Marketing Copilot fuse creativity, tech, and business strategy to develop a website that resonates with your brand, captures your audience, and serves your business objectives.',
  },
  {
    q: '2. What types of websites does Marketing Copilot develop?',
    a: 'We create custom business websites, WordPress sites, e-commerce websites, and more, depending on your needs, your audience, and your future business goals.',
  },
  {
    q: '3. How does Marketing Copilot approach website development?',
    a: 'We begin by getting to know your business, your people, and your goals. We then design, build, test, and fine-tune your site for optimal performance and user experience.',
  },
  {
    q: '4. Can Marketing Copilot create an SEO-friendly website?',
    a: 'Yes. We adhere to SEO best practices such as responsive design, proper website structure, quick loading speeds, and optimizing technical elements to deliver a solid groundwork for SEO success.',
  },
  {
    q: '5. Does Marketing Copilot provide website maintenance after development?',
    a: 'Yes. We maintain and support your website throughout, ensuring it’s kept up to date, bug-free, fast, secure, and optimized to perform at its best.',
  },
  {
    q: '6. Why should businesses choose Marketing Copilot for website development?',
    a: 'Our website development is centered on beautiful, usable, responsive, and goal-driven websites. Our solution integrates all three aspects of development, performance, and user experience.',
  },
];

export default function WebDevelopmentPage() {
  // FAQs closed by default
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. HERO SECTION (SEAMLESS SKEUOMORPHIC HERO)
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <h1 className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>Best Website Development Agency in India</span>
              </h1>

              <h2 className={styles.heroTitle}>
                High-Performance Websites{' '}
                <span className="accent-gradient">Built to Grow</span>
              </h2>

              <p className={styles.heroSub}>
                Create a website that keeps up with your business. From sleek designs to smooth performance, Marketing Copilot develops responsive and scalable websites that deliver better user experiences and support long-term digital growth.
              </p>

              <div className={styles.heroActions}>
                <BeamButton
                  href="/contact"
                  label="Get a Free Quote →"
                  size="lg"
                />
                <BeamButton
                  href="#services"
                  label="Talk to Our Experts →"
                  size="lg"
                  variant="outline"
                />
              </div>

              {/* Skeuomorphic Telemetry Ribbon */}
              <div className={styles.telemetryRibbon}>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>&lt; 0.8s</span>
                  <span className={styles.tLabel}>Mobile Load Speed</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>99/100</span>
                  <span className={styles.tLabel}>Google PageSpeed SLA</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>+280%</span>
                  <span className={styles.tLabel}>Lead Inquiries</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>100%</span>
                  <span className={styles.tLabel}>Mobile Responsive</span>
                </div>
              </div>

              {/* Modern Tech Stack Trust Bar */}
              <div className={styles.techStackRibbon}>
                <span className={styles.techStackLabel}>ENGINEERED WITH MODERN TECH</span>
                <div className={styles.techPillGrid}>
                  <span className={styles.techPill}>⚛️ Next.js 15</span>
                  <span className={styles.techPill}>⚡ React 19</span>
                  <span className={styles.techPill}>🔷 TypeScript</span>
                  <span className={styles.techPill}>🎨 Tailwind CSS</span>
                  <span className={styles.techPill}>🛍️ Shopify Plus</span>
                  <span className={styles.techPill}>🌐 Vercel Edge</span>
                  <span className={styles.techPill}>☁️ AWS Cloud</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. MAP SECTION DIRECTLY BELOW HERO
          (Driving Business Growth With Digital Marketing in India)
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          3. SMART WEB SOLUTIONS FOR GROWING BRANDS (6 SERVICES)
         ══════════════════════════════════════════════════ */}
      <section id="services" className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Smart Web Solutions for Growing Brands</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Smart Web Solutions{' '}
                <span className="accent-gradient">for Growing Brands</span>
              </h2>
              <p className={styles.sectionDesc}>
                We combine strategy, creativity, and technology to develop high-performance websites that deliver seamless experiences and turn visitors into customers.
              </p>
            </ScrollReveal>
          </div>

          {/* 6 Skeuomorphic Service Cards with Equal Height & Aligned Footers */}
          <div className={styles.servicesGrid}>
            {webServices.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 60} className={styles.cardCol}>
                <div className={styles.serviceSkeuoCard}>
                  <div className={styles.serviceTopBody}>
                    <div className={styles.serviceTopHeader}>
                      <span className={styles.serviceNumberEmbossed}>{svc.num}</span>
                      <div className={styles.serviceIconBowl}>{svc.icon}</div>
                    </div>
                    <span className={styles.serviceTagPill}>{svc.tag}</span>
                    <h3 className={styles.serviceCardTitle}>
                      {svc.title}
                    </h3>
                    <p className={styles.serviceCardDesc}>{svc.desc}</p>
                    <div className={styles.serviceHighlightsList}>
                      {svc.highlights.map((hl) => (
                        <span key={hl} className={styles.serviceHighlightChip}>
                          <span className={styles.highlightDot} />
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.serviceCardFooter}>
                    <span className={styles.serviceFooterTag}>{svc.footerTag}</span>
                    <span className={styles.serviceDeliverable}>{svc.deliverable}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Rich Visual Architecture Showcase with Graphic Image */}
          <ScrollReveal>
            <div className={styles.visualShowcaseBox}>
              <div className={styles.visualShowcaseContent}>
                <span className={styles.visualBadge}>⚡ ENTERPRISE-GRADE WEB ARCHITECTURE</span>
                <h3 className={styles.visualTitle}>
                  Engineered for Conversion Velocity &amp; Sub-Second Mobile Speed
                </h3>
                <p className={styles.visualText}>
                  From responsive custom code to modern e-commerce stores and mobile web applications, we combine fast architectures, user-friendly layouts, and scalable technology for businesses across India.
                </p>
                <div className={styles.visualStatsStrip}>
                  <div className={styles.statItem}>
                    <span className={styles.statVal}>99 / 100</span>
                    <span className={styles.statLbl}>PageSpeed SLA</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statVal}>100%</span>
                    <span className={styles.statLbl}>Clean Codebase</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statVal}>Omnichannel</span>
                    <span className={styles.statLbl}>Lead Routing</span>
                  </div>
                </div>
              </div>

              <div className={styles.visualImageWrap}>
                <Image
                  src="/images/Website Framework.jpg"
                  alt="Modern Website Development Marketing Copilot India"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className={styles.visualImg}
                />
                <div className={styles.visualImgOverlay}>
                  <span>Fast, Responsive &amp; Scalable</span>
                  <span>Marketing Copilot Verified</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section Bottom CTA */}
          <div className={styles.sectionCtaRow}>
            <BeamButton
              href="/contact"
              label="Discuss Your Custom Web Architecture →"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. HIGH-PERFORMANCE WEBSITES BUILT FOR GROWTH (PROCESS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Our Strategic Roadmap</span>
              </div>
              <h2 className={styles.sectionTitle}>
                High-Performance Websites{' '}
                <span className="accent-gradient">Built for Growth</span>
              </h2>
              <p className={styles.sectionDesc}>
                A clear, disciplined process from discovery to deployment that turns complex requirements into high-performing digital platforms.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.processGrid}>
            {growthSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 80} className={styles.cardCol}>
                <div className={styles.processCard}>
                  <div className={styles.processTopBody}>
                    <div className={styles.processStepHeader}>
                      <span className={styles.processStepBadge}>{step.step}</span>
                      <span className={styles.processTimeframeBadge}>{step.timeframe}</span>
                      <div className={styles.processIconBowl}>{step.icon}</div>
                    </div>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processDesc}>{step.desc}</p>
                    <div className={styles.processChecklist}>
                      {step.checkpoints.map((cp) => (
                        <div key={cp} className={styles.processCheckItem}>
                          <span className={styles.processCheckDot}>✓</span>
                          <span>{cp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.processFooter}>
                    <span className={styles.processPill}>✦ {step.tag}</span>
                    <span className={styles.processMilestone}>✓ Milestone SLA</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Section Bottom CTA */}
          <div className={styles.sectionCtaRow}>
            <BeamButton
              href="/contact"
              label="Start Your Web Development Sprint →"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. WHAT MAKES MARKETING COPILOT THE BEST WEB DEVELOPMENT COMPANY?
         ══════════════════════════════════════════════════ */}
      <section className={styles.whyBestSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>The Marketing Copilot Advantage</span>
              </div>
              <h2 className={styles.sectionTitle}>
                What Makes Marketing Copilot the{' '}
                <span className="accent-gradient">Best Web Development Company?</span>
              </h2>
              <p className={styles.sectionDesc}>
                Our Marketing Copilot Digital Marketing Agency websites feature contemporary design, seamless functionality, and business-oriented development. We strive to provide websites that are professional, efficient, and promote business growth.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.whyBestGrid}>
            {whyBestPillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70} className={styles.cardCol}>
                <div className={styles.whyBestCard}>
                  <div className={styles.whyBestTopBody}>
                    <div className={styles.whyBestHeader}>
                      <div className={styles.whyBestIconBowl}>{p.icon}</div>
                      <span className={styles.whyBestPill}>✦ {p.feature}</span>
                    </div>
                    <h3 className={styles.whyBestTitle}>{p.title}</h3>
                    <p className={styles.whyBestDesc}>{p.desc}</p>
                    <div className={styles.whyBestChecklist}>
                      {p.highlights.map((hl) => (
                        <div key={hl} className={styles.whyBestCheckItem}>
                          <span className={styles.whyCheckDot}>✓</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.whyBestFooter}>
                    <span className={styles.whyBestFeatureTag}>Engineered Benchmark</span>
                    <span className={styles.whyBestStatus}>{p.status}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Sub-Second Infrastructure Architecture Showcase Banner */}
          <ScrollReveal>
            <div className={styles.infraBannerWrapper}>
              <div className={styles.infraBannerBox}>
                <div className={styles.visualImageWrap}>
                  <Image
                    src="/images/Infrastructure Banner.jpg"
                    alt="High-Performance Next.js Serverless Cloud Infrastructure India"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className={styles.visualImg}
                  />
                  <div className={styles.visualImgOverlay}>
                    <span>Edge Deployed &bull; 99.99% Uptime</span>
                    <span>Sub-100ms Telemetry</span>
                  </div>
                </div>

                <div className={styles.visualShowcaseContent}>
                  <div className={styles.visualBadge}>
                    <span>⚡ SERVERLESS ARCHITECTURE &amp; EDGE CDN</span>
                  </div>
                  <h3 className={styles.visualTitle}>
                    Sub-Second Performance Powered by Modern Infrastructure
                  </h3>
                  <p className={styles.visualText}>
                    Speed directly dictates conversions. We engineer every platform on global edge networks with automated image pipeline transformations, static asset compression, and instant database querying.
                  </p>
                  <div className={styles.visualStatsStrip}>
                    <div className={styles.statItem}>
                      <span className={styles.statVal}>&lt; 0.8s</span>
                      <span className={styles.statLbl}>Largest Contentful Paint</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statVal}>99.99%</span>
                      <span className={styles.statLbl}>Cloud SLA Uptime</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statVal}>100%</span>
                      <span className={styles.statLbl}>Zero-Downtime CI/CD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section Bottom CTA */}
          <div className={styles.sectionCtaRow}>
            <BeamButton
              href="/contact"
              label="Build with Next.js Engineering Standards →"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. FREQUENTLY ASKED QUESTIONS ABOUT WEB DEVELOPMENT
          * Closed by default as requested *
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Direct Answers &amp; Transparency</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Frequently Asked Questions{' '}
                <span className="accent-gradient">About Web Development</span>
              </h2>
              <p className={styles.sectionDesc}>
                Everything you need to know about our web development process, technology choices, timelines, and ongoing maintenance.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.faqContainer}>
            {webDevFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <span className={styles.faqIconBowl}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.faqPane}>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section Bottom CTA */}
          <div className={styles.faqCtaBox}>
            <p className={styles.faqCtaNote}>
              Need an architectural review or technical estimation for your web project?
            </p>
            <BeamButton
              href="/contact"
              label="Consult a Lead Web Architect →"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. ABOVE FOOTER CARD (MAIN HOME PAGE STYLE CTA CARD)
          * Style: Similar as homepage CTA card *
          * Text: 100% preserved as provided by user *
         ══════════════════════════════════════════════════ */}
      <section className={styles.homeStyleCtaSection}>
        <div className="container">
          <div className={styles.homeStyleCtaBox}>
            <ScrollReveal>
              <div className={styles.ctaEyebrowBadge}>
                <span className={styles.ctaPulseDot} />
                <span>Let’s Talk About Your Project</span>
              </div>

              <h2 className={styles.ctaHeadline}>
                Turn Your Website Into a{' '}
                <span className="accent-gradient">Growth Tool</span>
              </h2>

              <p className={styles.ctaParagraph}>
                We develop high-performing websites tailored to your business, combining smart design, smooth functionality, and performance to create better digital experiences.
              </p>

              <div className={styles.ctaActions}>
                <BeamButton
                  href="/contact"
                  label="Get a Free Quote →"
                  size="lg"
                />
                <BeamButton
                  href="/contact"
                  label="Talk to an Engineer →"
                  size="lg"
                  variant="outline"
                />
              </div>

              <div className={styles.ctaTrustBadges}>
                <span className={styles.ctaTrustItem}>🛡️ 100% Code Ownership</span>
                <span className={styles.ctaTrustItem}>⚡ Sub-Second SLA</span>
                <span className={styles.ctaTrustItem}>🔒 Enterprise NDA</span>
                <span className={styles.ctaTrustItem}>🚀 2-Week Launch Sprints</span>
              </div>

              <div className={styles.ctaBrandPunchline}>
                Marketing Copilot — Modern. Fast. Scalable.
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
