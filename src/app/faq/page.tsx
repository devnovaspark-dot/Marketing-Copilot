'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

const heroSlides = [
  {
    id: 'slide-1',
    src: '/images/Faq_slide1.png',
    alt: 'Growth Questions & Marketing Strategy Solutions for Odisha Businesses',
    caption: 'Strategic Questions & Answers',
  },
  {
    id: 'slide-2',
    src: '/images/Faq_slide2.png',
    alt: 'Executive strategy, question flows, and growth decisions in Bhubaneswar',
    caption: 'Executive Strategy & Decision Maps',
  },
  {
    id: 'slide-3',
    src: '/images/Faq_slide3.png',
    alt: 'Step-by-step roadmap from questions to verified market execution',
    caption: 'Verified Commercial Roadmaps',
  },
];

interface FAQItem {
  q: string;
  a: string;
  takeaway?: string;
  bullets?: string[];
}

interface FAQGroup {
  id: string;
  title: string;
  badge: string;
  highlight: string;
  collage: {
    mainImage: string;
    subImage: string;
    caption: string;
    tag: string;
  };
  faqs: FAQItem[];
}

const faqGroups: FAQGroup[] = [
  {
    id: 'general',
    title: 'General Questions',
    badge: 'AGENCY & SCOPE',
    highlight: 'Hyperlocal Bhubaneswar Intelligence + Tailored Digital Growth Strategies',
    collage: {
      mainImage: '/images/faq_agency_scope.png',
      subImage: '',
      caption: 'Strategy Command Center • Kharvela Nagar, Unit 3',
      tag: '🏢 LOCAL EXECUTIVE TEAM',
    },
    faqs: [
      {
        q: 'What digital marketing services are provided by Nova Spark in Bhubaneswar?',
        a: 'Nova Spark provides SEO, local SEO, Google Ads, Meta Ads, social media marketing, content marketing, website development, and tailored digital growth services for businesses in Bhubaneswar and Odisha.',
        takeaway: 'Comprehensive full-service digital growth tailored for Odisha businesses.',
      },
      {
        q: 'Why work with a Bhubaneswar-based digital marketing agency?',
        a: 'A local team will have a better grasp of the market, customer behavior, neighborhoods, competition, and business environment in Bhubaneswar. This enables the development of campaigns and content that are more relevant to local audiences.',
        takeaway: 'Hyperlocal market intelligence combined with strategic digital execution.',
      },
      {
        q: 'Does Nova Spark work with small and local businesses?',
        a: 'Yes. We collaborate with businesses of various sizes, including single-location businesses. Our approach and scope are flexible and can be tailored to your objectives, target group, budget, and current growth phase.',
        takeaway: 'Flexible scope and strategies tailored to your specific growth stage.',
      },
      {
        q: 'How quickly can I expect results from digital marketing?',
        a: 'The time frame will vary with the service and your starting point. Paid campaigns can generate data quickly, while SEO, local SEO, and organic social growth generally require consistent effort over time.',
        takeaway: 'Fast feedback from paid ads; compounding authority through SEO.',
      },
      {
        q: 'How does Nova Spark create a strategy for a new client?',
        a: 'We first learn your business, audience, competition, existing digital footprint, objectives, and budget. Next, we determine which channels are most relevant and develop a viable strategy based on your priorities.',
        takeaway: 'Custom discovery and channel selection tailored to your business priorities.',
      },
      {
        q: 'Do you provide digital marketing services outside Bhubaneswar?',
        a: 'Yes. Nova Spark is based in Bhubaneswar, but we can collaborate remotely and communicate via digital methods with businesses located in Odisha and clients from other areas.',
        takeaway: 'Seamless digital collaboration across Odisha and nationwide.',
      },
      {
        q: 'Can Nova Spark manage all our digital marketing under one team?',
        a: 'Yes. All of these can be brought together in one strategy and simplified so that we can keep our messaging consistent and coordinated across various marketing activities.',
        takeaway: 'Unified multi-channel execution with consistent brand messaging.',
      },
      {
        q: 'Will we receive regular updates about our campaigns?',
        a: 'Yes. Regular performance updates are sent on services you choose. Reports may include details about the performance of the campaign, site traffic, SEO improvements, leads, inquiries, and additional agreed-to business metrics.',
        takeaway: 'Transparent regular updates covering traffic, leads, and business metrics.',
      },
      {
        q: 'Can you work with our existing marketing team?',
        a: 'Yes. Nova Spark can collaborate with your existing staff, freelance personnel, or other experts. Take responsibility for specific channels or work together on parts of your overall digital strategy.',
        takeaway: 'Collaborative partnership supporting your in-house talent.',
      },
    ],
  },
  {
    id: 'seo',
    title: 'SEO & Local Search',
    badge: 'ORGANIC DOMINANCE',
    highlight: 'Rank #1 in Google Maps Across Bhubaneswar & High-Intent Search Corridors',
    collage: {
      mainImage: '/images/faq_seo_local_search.png',
      subImage: '',
      caption: 'Local 3-Pack Dominance • Patia & Saheed Nagar',
      tag: '📍 GEO-FENCED SEO ENGINE',
    },
    faqs: [
      {
        q: 'What is the advantage of SEO for my business in Bhubaneswar?',
        a: 'SEO can make your business visible when potential customers look around for the products/services that you offer. We enhance your website, content, technical SEO, and local visibility to boost visibility for relevant organic traffic.',
        takeaway: 'Compounds long-term organic visibility and qualified inbound traffic.',
      },
      {
        q: 'What is local SEO, and why does my business need it?',
        a: "Local SEO is all about improving your business's visibility in local search results and Google Maps. This is especially relevant for businesses that cater to customers in certain neighborhoods in Bhubaneswar or a nearby area.",
        takeaway: 'Captures customers searching near your physical location or service area.',
      },
      {
        q: 'What does Nova Spark do to make Google Business Profile more visible?',
        a: 'We work on important local search factors, including business information, categories, services, content, reviews, local relevance, and profile optimization, to strengthen your presence in relevant Google Search and Maps results.',
        takeaway: 'Comprehensive GBP optimization driving calls, directions, and visits.',
      },
      {
        q: 'How long does it take to see SEO results?',
        a: 'SEO is a long-term effort, and timelines can differ based on industry, competition, website health, location, and starting visibility. We monitor progress in rankings, organic traffic, inquiries, and other mutually agreed KPIs.',
        takeaway: 'Progress monitored across rankings, organic traffic, and qualified inquiries.',
      },
      {
        q: 'Can Nova Spark handle both technical SEO and content SEO?',
        a: 'Yes. Our SEO work can cover technical improvements, keyword research, on-page optimization, content planning, internal linking, website structure, local SEO, and other areas relevant to your search growth strategy.',
        takeaway: 'End-to-end SEO execution covering code, content, structure, and maps.',
      },
      {
        q: 'Is it possible to target a specific area in Bhubaneswar and Odisha for SEO?',
        a: 'Yes. We can build location-focused SEO strategies around relevant service areas, neighborhoods, and cities while avoiding unnecessary location pages that provide little value to users or search engines.',
        takeaway: 'High-value localized targeting without keyword-stuffed duplicate pages.',
      },
      {
        q: 'How do you measure the success of an SEO campaign?',
        a: 'We look at more than keyword rankings. We monitor organic visitors, search visibility, valuable keyword gains, Google Business Profile engagement, inquiries, conversions, and lead quality based on your goals.',
        takeaway: 'Multi-dimensional reporting tied to real business inquiries and revenue.',
      },
    ],
  },
  {
    id: 'ads',
    title: 'Google Ads & Meta Ads',
    badge: 'PAID PERFORMANCE',
    highlight: 'Performance Ads Engineered for Predictable Return on Investment',
    collage: {
      mainImage: '/images/faq_google_meta_ads.png',
      subImage: '',
      caption: 'Live CPL & Revenue Attribution Terminal',
      tag: '⚡ PRECISION TARGETING ENGINE',
    },
    faqs: [
      {
        q: 'What budget should we start with for Google Ads or Meta Ads in Bhubaneswar?',
        a: 'There is no fixed starting budget for every business. We consider your industry, target audience, competition, location, goals, and average customer value before recommending an appropriate testing budget.',
        takeaway: 'Custom testing budget determined by your sector and customer value.',
      },
      {
        q: 'How do Google Ads and Meta Ads differ?',
        a: 'Google Ads mainly targets actual demand when someone is actively looking for a product or service. Meta Ads can build and shape demand via audience targeting, creative content, offers, and remarketing.',
        takeaway: 'Google captures active intent; Meta creates demand and retargets prospects.',
      },
      {
        q: 'How does Nova Spark determine which platform is best for our business?',
        a: 'We analyze your customer journey, search demand, industry, competition, location, offer, and conversion path. Depending on these, we can suggest Google Ads, Meta Ads, or both.',
        takeaway: 'Data-driven channel allocation aligned with your target audience behavior.',
      },
      {
        q: 'What is ROAS, and how do you measure advertising performance?',
        a: 'ROAS is the acronym for Return on Ad Spend. Revenue from advertising is compared to expenditure on advertising. The conversion rate, margin, customer value, and the right benchmark all differ depending on the industry.',
        takeaway: 'ROAS benchmarked against your actual business margins and customer value.',
      },
      {
        q: 'How quickly can Google or Meta Ads generate leads?',
        a: 'While campaigns can start to deliver traffic and inquiries almost immediately, meaningful performance will take some time to test and optimize. This is contingent on targeting, creativity, offer, landing page, budget, and competition.',
        takeaway: 'Immediate traffic deployment followed by systematic optimization.',
      },
      {
        q: 'Does Nova Spark make ads and copy?',
        a: 'Yes. For your engagement, we can build concepts, headlines, primary copy, static creatives, and even short-form video concepts around your goal and target audience.',
        takeaway: 'Complete creative production covering copy, visuals, and video concepts.',
      },
      {
        q: 'How does Nova Spark optimize campaigns after they go live?',
        a: 'Campaign data is reviewed regularly, and the targeting, keywords, audiences, placements, creatives, bidding, budgets, landing pages, and conversion tracking are adjusted based on performance and agreed business goals.',
        takeaway: 'Continuous iterative testing of bidding, targeting, and landing pages.',
      },
    ],
  },
  {
    id: 'web',
    title: 'Website Development',
    badge: 'WEBSITE INFRASTRUCTURE',
    highlight: 'Clean Code, Fast Load Speeds & Seamless Conversion Paths',
    collage: {
      mainImage: '/images/faq_website_development.png',
      subImage: '',
      caption: 'Sub-Second Next.js Web Architecture',
      tag: '💻 HIGH-PERFORMANCE WEB',
    },
    faqs: [
      {
        q: 'How much does a business website from Nova Spark cost in Bhubaneswar?',
        a: 'Website pricing is dependent on different pages, design, features, integrations, technology, and project scope. Nova Spark gives a clear quotation as per the actual needs of the business.',
        takeaway: 'Transparent quotations tailored to your exact scope and functionality needs.',
      },
      {
        q: 'Why does Nova Spark use Next.js for business websites?',
        a: 'Next.js is used when there is a project that demands performance, scalability, technical SEO, and a custom user experience. For simpler requirements, we suggest the best technology for the project.',
        takeaway: 'Next.js delivers sub-second speed, scalability, and built-in technical SEO advantages.',
      },
      {
        q: 'How long will it take Nova Spark to create and deploy a website?',
        a: 'Most business websites require a few weeks to be operational. This depends on the design, content, number of pages, custom development, revisions, and integrations required.',
        takeaway: 'Structured development sprints with clear milestones from wireframe to launch.',
      },
      {
        q: 'Will Nova Spark optimize my website for Google?',
        a: 'Yes. We create with SEO basics in mind: site structure, page speed, metadata, mobile responsiveness, clean URLs, content organization, and technical elements that enhance searchability.',
        takeaway: 'Built-in technical SEO, clean code, and fast Core Web Vitals.',
      },
      {
        q: 'Can Nova Spark update my current business website?',
        a: 'Yes. We can completely reengineer your current site to enhance its visual appeal, speed, mobile usability, content organization, search engine optimization, and conversion path while preserving valuable business information.',
        takeaway: 'Modern re-engineering that improves speed and conversion while preserving rankings.',
      },
      {
        q: 'Can Nova Spark link my website to WhatsApp and to lead tracking?',
        a: 'Yes. We can customize WhatsApp, inquiry forms, analytics, tracking, booking, CRM, and more to manage and track leads based on your requirements.',
        takeaway: 'Direct WhatsApp integration and automated lead routing into your workflow.',
      },
    ],
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    badge: 'BRAND & SOCIAL MEDIA',
    highlight: 'Audience-Centric Content, Brand Authority & Integrated Multi-Channel Growth',
    collage: {
      mainImage: '/images/faq_social_media_marketing.png',
      subImage: '',
      caption: 'Creative Content Production & Distribution Pod',
      tag: '🎬 SOCIAL CONTENT & ENGAGEMENT',
    },
    faqs: [
      {
        q: 'How does Nova Spark build a social media strategy for a business?',
        a: 'We begin with your business objectives, audience, competition, positioning, and what you have. We then develop a platform-specific strategy, including content pillars, formats, campaigns, posting frequency, and growth goals.',
        takeaway: 'Custom platform-specific roadmap built around clear content pillars.',
      },
      {
        q: 'How does Nova Spark decide what content our brand should publish?',
        a: 'We use audience research, industry trends, competitor analysis, search behavior, and your business know-how to find out what topics are relevant. It has a goal of awareness, trust, engagement, consideration, and conversion that is planned for in content.',
        takeaway: 'Full-funnel content planned for awareness, trust, and conversion.',
      },
      {
        q: 'Can Nova Spark manage both organic social media and paid campaigns?',
        a: 'Yes. Meta ads can be paired with organic content so your brand can become visible consistently, while your ads are directed to specific audiences, offers, products, services, or lead generation targets.',
        takeaway: 'Organic brand presence paired synchronously with hyper-targeted paid ads.',
      },
      {
        q: 'How do you make social media content specific to our target audience?',
        a: 'Audience segments are based on location, interests, demographics, needs, and buying behavior. Content and campaigns then are tailored to their problems and motivations.',
        takeaway: 'Audience segmentation addressing real buyer pain points and motivations.',
      },
      {
        q: 'How does Nova Spark measure whether social media is generating business value?',
        a: "We don't just consider followers and likes. We measure reach, engagement, profile actions, website traffic, inquiries, leads, campaign performance, and other agreed business KPIs, depending on the objectives.",
        takeaway: 'Real business impact tracked via website clicks, inquiries, and conversions.',
      },
      {
        q: 'Can social media content support our SEO and overall digital marketing strategy?',
        a: 'Yes. Social content can play a complementary role to SEO, paid ads, website campaigns, and content marketing. The topic, message, landing page, and campaigns can all be synced to different digital channels supporting the same business goals.',
        takeaway: 'Cross-channel synchronization amplifying message reach and SEO signals.',
      },
      {
        q: 'How does Nova Spark handle negative comments and customer responses?',
        a: 'We build a response approach according to your brand style and industry. Common comments and queries can be dealt with systematically, and sensitive complaints and issues are referred to your team as needed.',
        takeaway: 'Structured brand voice guidelines ensuring swift, professional community management.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & How We Work',
    badge: 'PRICING & HOW WE WORK',
    highlight: 'Know What You’re Paying For. Know What We’re Working Toward',
    collage: {
      mainImage: '/images/faq_pricing_engagement.png',
      subImage: '',
      caption: 'SEO, Google Ads, Meta Ads, Social Media & Web Solutions for Bhubaneswar Businesses',
      tag: '💼 TRANSPARENT PRICING & SCOPE',
    },
    faqs: [
      {
        q: 'How does Nova Spark determine the pricing for its digital marketing services?',
        a: 'The cost of pricing varies based on various business objectives, services required, audience, competition, and scope of work. We tailor our plan to your specific needs, not a set one.',
        takeaway: 'Custom pricing built around your specific objectives and scope of work.',
      },
      {
        q: 'Can you provide personalized digital marketing strategies?',
        a: 'Yes. Every business has its own objectives and struggles, and we can tailor the scope to your goals, be it SEO, pay-per-click, social media, content, or web development.',
        takeaway: 'Tailored strategy focusing on high-impact channels for your business.',
      },
      {
        q: 'Is there a minimum contract period?',
        a: 'Our engagement terms depend on the services and project scope. The timeline and deliverables are clearly discussed before starting the work; thus, there are no surprises in the commercial terms.',
        takeaway: 'Clear timelines and deliverables agreed upon upfront with zero surprises.',
      },
      {
        q: 'Can we start with a smaller marketing budget?',
        a: 'Yes. We can develop a plan that fits within your budget and focus on the channels that are relevant to your current goals, and then expand your strategy as you grow your business.',
        takeaway: 'Budget-aligned execution that scales as your business revenue expands.',
      },
      {
        q: 'What is included in your digital marketing service?',
        a: 'Services can range from strategy, campaign management, SEO, content, social media, creative, reporting, optimization, and performance tracking depending on your plan.',
        takeaway: 'End-to-end management from creative and strategy to tracking and reporting.',
      },
      {
        q: 'Do you charge separately for Google and Meta Ads?',
        a: 'The amount spent on advertising and agency management fees is usually kept separate. This way, your real media investment remains visible, and it is easier to see where your money in marketing goes.',
        takeaway: '100% media spend transparency with clearly separated management fees.',
      },
    ],
  },
];

// Levenshtein distance helper for typo tolerance
function levenshtein(a: string, b: string): number {
  const an = a ? a.length : 0;
  const bn = b ? b.length : 0;
  if (an === 0) return bn;
  if (bn === 0) return an;
  const matrix = Array.from({ length: bn + 1 }, (_, i) => [i]);
  for (let j = 0; j <= an; j++) matrix[0][j] = j;
  for (let i = 1; i <= bn; i++) {
    for (let j = 1; j <= an; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[bn][an];
}

const CATEGORY_ALIASES: Record<string, string[]> = {
  general: ['general', 'genaral', 'genral', 'basic', 'intro', 'company', 'agency', 'start', 'odisha', 'bhubaneswar'],
  seo: ['seo', 'seoo', 'local', 'gmb', 'google map', 'maps', 'rank', 'ranking', 'organic', 'search'],
  ads: ['ads', 'ad', 'google ads', 'meta ads', 'facebook', 'fb', 'ppc', 'cpl', 'leads', 'paid', 'instagram ads'],
  social: ['social', 'social media', 'instagram', 'insta', 'reels', 'content', 'followers', 'branding'],
  web: ['web', 'website', 'development', 'nextjs', 'next.js', 'site', 'speed', 'code', 'pages', 'developer'],
  pricing: ['pricing', 'price', 'cost', 'retainer', 'budget', 'fees', 'charges', 'packages', 'terms', 'contract'],
};

function matchesFuzzy(text: string, query: string): boolean {
  if (!query) return true;
  const qClean = query.toLowerCase().trim();
  const textClean = text.toLowerCase();

  if (textClean.includes(qClean)) return true;

  const qWords = qClean.split(/\s+/).filter(Boolean);
  const textWords = textClean.split(/[\s,.-]+/).filter(Boolean);

  return qWords.every((qw) => {
    if (textClean.includes(qw)) return true;

    for (const [key, aliases] of Object.entries(CATEGORY_ALIASES)) {
      if (aliases.some((a) => a === qw || a.startsWith(qw) || levenshtein(a, qw) <= (qw.length > 4 ? 2 : 1))) {
        if (textClean.includes(key)) return true;
      }
    }

    if (qw.length >= 3) {
      const maxDist = qw.length <= 4 ? 1 : 2;
      return textWords.some((tw) => {
        if (Math.abs(tw.length - qw.length) > maxDist) return false;
        return levenshtein(tw, qw) <= maxDist;
      });
    }
    return false;
  });
}

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [highlightedItem, setHighlightedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('🎯 Google & Meta Ads');
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Direct Inquiry Form State
  const [formState, setFormState] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    question: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth auto-slide interval (3.5 seconds per slide for faster transition)
  useEffect(() => {
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, []);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggle = (key: string) => {
    setOpenItem((prev) => (prev === key ? null : key));
  };

  // Filtered FAQs based on live search & category filter with fuzzy matching
  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim();
    return faqGroups
      .filter((group) => {
        if (selectedCategory !== 'all' && group.id !== selectedCategory) {
          return false;
        }
        return true;
      })
      .map((group) => {
        if (!q) return group;
        const matchingFaqs = group.faqs.filter(
          (faq) =>
            matchesFuzzy(faq.q, q) ||
            matchesFuzzy(faq.a, q) ||
            (faq.takeaway && matchesFuzzy(faq.takeaway, q)) ||
            matchesFuzzy(group.title, q)
        );
        return {
          ...group,
          faqs: matchingFaqs,
        };
      })
      .filter((group) => group.faqs.length > 0);
  }, [searchQuery, selectedCategory]);

  const totalFilteredCount = useMemo(() => {
    return filteredGroups.reduce((acc, curr) => acc + curr.faqs.length, 0);
  }, [filteredGroups]);

  // Matching Categories for Auto-Suggestions
  const matchingCategories = useMemo(() => {
    const q = searchQuery.trim();
    if (!q) return [];
    return faqGroups.filter(
      (group) =>
        matchesFuzzy(group.title, q) ||
        matchesFuzzy(group.id, q) ||
        matchesFuzzy(group.badge, q) ||
        matchesFuzzy(group.highlight, q)
    );
  }, [searchQuery]);

  // Matching Questions for Auto-Suggestions
  const matchingQuestions = useMemo(() => {
    const q = searchQuery.trim();
    if (!q) return [];
    const list: {
      groupId: string;
      groupTitle: string;
      groupBadge: string;
      index: number;
      question: string;
      takeaway?: string;
    }[] = [];

    for (const group of faqGroups) {
      group.faqs.forEach((faq, fi) => {
        if (
          matchesFuzzy(faq.q, q) ||
          matchesFuzzy(faq.a, q) ||
          (faq.takeaway && matchesFuzzy(faq.takeaway, q))
        ) {
          list.push({
            groupId: group.id,
            groupTitle: group.title,
            groupBadge: group.badge,
            index: fi,
            question: faq.q,
            takeaway: faq.takeaway,
          });
        }
      });
    }
    return list.slice(0, 5);
  }, [searchQuery]);

  // Navigate to Section/Category and place the user right there
  const navigateToCategory = (groupId: string) => {
    setShowSuggestions(false);
    if (selectedCategory !== 'all' && selectedCategory !== groupId) {
      setSelectedCategory('all');
    }
    setTimeout(() => {
      const el = document.getElementById(`faq-group-${groupId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Navigate to Question Card, expand it, place user right at the card, and pulse highlight
  const navigateToQuestion = (groupId: string, fi: number) => {
    setShowSuggestions(false);
    const key = `${groupId}-${fi}`;
    if (selectedCategory !== 'all' && selectedCategory !== groupId) {
      setSelectedCategory('all');
    }
    setOpenItem(key);
    setHighlightedItem(key);

    setTimeout(() => {
      const el = document.getElementById(`faq-item-${key}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 120);

    setTimeout(() => {
      setHighlightedItem((curr) => (curr === key ? null : curr));
    }, 3000);
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setShowSuggestions(false);

    if (matchingCategories.length > 0) {
      navigateToCategory(matchingCategories[0].id);
      return;
    }
    if (matchingQuestions.length > 0) {
      navigateToQuestion(matchingQuestions[0].groupId, matchingQuestions[0].index);
      return;
    }
    const target = document.getElementById(
      totalFilteredCount > 0 ? 'faq-directory' : 'still-have-questions'
    );
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const directToQuestionCard = (queryText?: string) => {
    const q = (queryText !== undefined ? queryText : searchQuery).trim();
    if (q && !formState.question) {
      setFormState((prev) => ({
        ...prev,
        question: prev.question || q,
      }));
    }
    const target = document.getElementById('still-have-questions');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName || !formState.phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className={styles.page}>
      {/* ══════════════════════════════════════════════════════════
          SECTION 1: HERO COMMAND CENTER (EXACT SAME AS HOME HERO)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />

        <div className="container">
          <div className={styles.heroDualLayout}>
            {/* Left Content Column */}
            <div className={styles.heroLeftCol}>
              <ScrollReveal>
                <div className={styles.heroEyebrow}>
                  <span className={styles.heroEyebrowDot} />
                  <span>FREQUENTLY ASKED QUESTIONS &bull; ODISHA GROWTH INTELLIGENCE</span>
                </div>
                <h1 className={`display-hero ${styles.heroTitle}`}>
                  The Complete Digital Growth Guide for{' '}
                  <span className={`accent-gradient ${styles.heroAccent}`}>Bhubaneswar Businesses</span>
                </h1>
                <div className={styles.heroSub}>
                  <p>
                    From Google &amp; Meta Ads to Local SEO and high-performance web infrastructure, discover the strategies, costs, technology, and decisions that shape digital growth in Odisha.
                  </p>
                </div>

                {/* Minimal Interactive Search Console with Auto-Suggestions */}
                <div className={styles.searchConsoleWrap}>
                  <div className={styles.searchBarContainer} ref={searchContainerRef}>
                    <form
                      onSubmit={handleSearchSubmit}
                      className={styles.searchConsole}
                    >
                      <button
                        type="submit"
                        className={styles.searchIconBtn}
                        aria-label="Search FAQ"
                        title="Search"
                      >
                        🔍
                      </button>
                      <input
                        type="text"
                        placeholder="Search any question (e.g. Google Ads budget, Local SEO, pricing)..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setShowSuggestions(true);
                        }}
                        onFocus={() => {
                          if (searchQuery.trim().length > 0) setShowSuggestions(true);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            setShowSuggestions(false);
                          } else if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSearchSubmit();
                          }
                        }}
                        className={styles.searchInput}
                        aria-label="Search frequently asked questions"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          className={styles.clearSearchBtn}
                          onClick={() => {
                            setSearchQuery('');
                            setShowSuggestions(false);
                          }}
                          aria-label="Clear search"
                        >
                          ✕
                        </button>
                      )}

                      <button
                        type="button"
                        className={styles.searchCountBadgeBtn}
                        onClick={() => {
                          const target = document.getElementById(
                            totalFilteredCount > 0 ? 'faq-directory' : 'still-have-questions'
                          );
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        title={totalFilteredCount > 0 ? 'View matching answers in directory' : 'Direct to question card'}
                      >
                        {totalFilteredCount} {totalFilteredCount === 1 ? 'Answer' : 'Answers'}
                      </button>
                    </form>

                    {/* Auto-Suggestions Dropdown */}
                    {showSuggestions && searchQuery.trim().length > 0 && (
                      <div className={styles.suggestionsDropdown}>
                        {matchingCategories.length > 0 && (
                          <div className={styles.suggestionSection}>
                            <div className={styles.suggestionHeader}>
                              <span>Matching Sections</span>
                              <span className={styles.suggestionHeaderBadge}>
                                {matchingCategories.length} {matchingCategories.length === 1 ? 'Section' : 'Sections'}
                              </span>
                            </div>
                            {matchingCategories.map((cat) => (
                              <button
                                key={cat.id}
                                type="button"
                                className={styles.suggestionItem}
                                onClick={() => navigateToCategory(cat.id)}
                              >
                                <div className={styles.suggestionItemLeft}>
                                  <span className={styles.suggestionItemIcon}>📁</span>
                                  <div className={styles.suggestionItemContent}>
                                    <span className={styles.suggestionItemTitle}>{cat.title}</span>
                                    <span className={styles.suggestionItemSubtitle}>
                                      {cat.faqs.length} Questions &bull; {cat.badge}
                                    </span>
                                  </div>
                                </div>
                                <span className={styles.suggestionItemAction}>
                                  Jump to Section &darr;
                                </span>
                              </button>
                            ))}
                          </div>
                        )}

                        {matchingQuestions.length > 0 && (
                          <div className={styles.suggestionSection}>
                            <div className={styles.suggestionHeader}>
                              <span>Matching Questions</span>
                              <span className={styles.suggestionHeaderBadge}>
                                {matchingQuestions.length} Found
                              </span>
                            </div>
                            {matchingQuestions.map((mq) => (
                              <button
                                key={`${mq.groupId}-${mq.index}`}
                                type="button"
                                className={styles.suggestionItem}
                                onClick={() => navigateToQuestion(mq.groupId, mq.index)}
                              >
                                <div className={styles.suggestionItemLeft}>
                                  <span className={`${styles.suggestionItemIcon} ${styles.suggestionItemIconQuestion}`}>💡</span>
                                  <div className={styles.suggestionItemContent}>
                                    <span className={styles.suggestionItemTitle}>{mq.question}</span>
                                    <span className={styles.suggestionItemSubtitle}>
                                      {mq.groupTitle} &bull; Q#{(mq.index + 1).toString().padStart(2, '0')}
                                    </span>
                                  </div>
                                </div>
                                <span className={styles.suggestionItemAction}>
                                  Open Card &rarr;
                                </span>
                              </button>
                            ))}
                          </div>
                        )}

                        {matchingCategories.length === 0 && matchingQuestions.length === 0 && (
                          <div className={styles.noSuggestionsWrap}>
                            <p className={styles.noSuggestionsText}>
                              No direct match found for &ldquo;<strong>{searchQuery}</strong>&rdquo;
                            </p>
                            <button
                              type="button"
                              className={styles.noSuggestionsAction}
                              onClick={() => {
                                setShowSuggestions(false);
                                directToQuestionCard(searchQuery);
                              }}
                            >
                              Ask Strategist in 1-Click &rarr;
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Category Quick-Filter Pills */}
                  <div className={styles.categoryPillsRow}>
                    <button
                      type="button"
                      className={`${styles.categoryPill} ${selectedCategory === 'all' ? styles.categoryPillActive : ''}`}
                      onClick={() => setSelectedCategory('all')}
                    >
                      All Questions ({faqGroups.reduce((acc, g) => acc + g.faqs.length, 0)})
                    </button>
                    {faqGroups.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        className={`${styles.categoryPill} ${selectedCategory === g.id ? styles.categoryPillActive : ''}`}
                        onClick={() => setSelectedCategory(g.id)}
                      >
                        {g.title} ({g.faqs.length})
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Pane: Clean Real Photography Showcase (Exact same as Home Hero) */}
            <div className={styles.visual}>
              <div className={styles.imageCard}>
                <div className={styles.imageViewport}>
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={`${styles.slideItem} ${idx === currentSlide ? styles.slideActive : ''}`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 900px) 100vw, 680px"
                        quality={95}
                        className={styles.slideImage}
                      />
                      <div className={styles.slideOverlay} />
                    </div>
                  ))}

                  {/* Minimalist Floating Status Badge */}
                  <div className={styles.floatingBadge}>
                    <span className={styles.badgePulse} />
                    <span className={styles.badgeText}>{heroSlides[currentSlide].caption}</span>
                  </div>

                  {/* Minimalist Tactile Dot Indicators */}
                  <div className={styles.dotsWrap}>
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`${styles.dot} ${idx === currentSlide ? styles.dotActive : ''}`}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Switch to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DRIVING BUSINESS GROWTH WITH DIGITAL MARKETING IN BHUBANESWAR
         ══════════════════════════════════════════════════════════ */}
      <QuickConnectMapSection headingTag="h2" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: STORYTELLING ARCHITECTURE (WITHOUT ANY CARD)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.storySection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.storyHeader}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                <span className="eyebrow-dot" />
                FROM VISIBILITY TO REVENUE &bull; BHUBANESWAR &amp; ODISHA
              </div>
              <h2 className={`display-md ${styles.storyMainTitle}`}>
                From Visibility to Revenue:<br />
                <span className="accent-gradient">How Odisha Businesses Can Build Digital Growth That Actually Scales?</span>
              </h2>
              <p className={styles.storyLeadText}>
                Your customers are already searching, comparing, and discovering brands online. The opportunity is to build a digital presence that captures that demand through SEO, paid advertising, content, social media, and high-performing websites.
              </p>
            </div>
          </ScrollReveal>

          {/* Continuous Architectural Story Spine / Ladder */}
          <div className={styles.storySpineContainer}>
            <div className={styles.storyVerticalSpine} />

            {/* Chapter 01 */}
            <div className={styles.storyChapter}>
              <div className={styles.chapterNodeWrap}>
                <div className={styles.chapterNodePulse} />
                <span className={styles.chapterNumeral}>01</span>
              </div>
              <div className={styles.chapterRungLine} />
              <div className={styles.chapterCardPlate}>
                <div className={styles.chapterMeta}>
                  <span className={styles.chapterPhaseBadge}>PHASE 01: FINDING THE GAP</span>
                  <span className={styles.chapterAnchorTag}>📍 Patia, Saheed Nagar, Nayapalli &amp; Beyond</span>
                </div>
                <h3 className={styles.chapterHeading}>
                  Your Customers Are Searching. Can They Find You?
                </h3>
                <div className={styles.chapterNarrative}>
                  <p>
                    People all over Bhubaneswar look for information online before they go to the clinic, contact a business, book a service, or make a purchase. They compare their choices using Google Search, Google Maps, Instagram, and other digital platforms.
                  </p>
                  <p>
                    But many local businesses still depend mainly on referrals, walk-ins, and traditional advertising.
                  </p>
                  <p>
                    At Nova Spark, we help businesses build a stronger online presence so they can reach customers when they are actively looking for their products or services.
                  </p>
                  <p>
                    From local SEO and Google Business Profile optimization to Google Ads, Meta Ads, and content marketing, we focus on making your business easier to discover and easier to contact.
                  </p>
                </div>
                <div className={styles.chapterInlineMetric}>
                  <span className={styles.inlineMetricDot} />
                  <strong>Local Growth Focus:</strong> We build digital strategies around your location, target audience, industry, and business goals, not generic campaigns made for everyone.
                </div>
              </div>
            </div>

            {/* Chapter 02 */}
            <div className={styles.storyChapter}>
              <div className={styles.chapterNodeWrap}>
                <div className={styles.chapterNodePulse} />
                <span className={styles.chapterNumeral}>02</span>
              </div>
              <div className={styles.chapterRungLine} />
              <div className={styles.chapterCardPlate}>
                <div className={styles.chapterMeta}>
                  <span className={styles.chapterPhaseBadge}>PHASE 02: BUILDING A BETTER DIGITAL FOUNDATION</span>
                  <span className={styles.chapterAnchorTag}>⚡ High-Performance Web &amp; UX</span>
                </div>
                <h3 className={styles.chapterHeading}>
                  A Website Should Do More Than Look Good
                </h3>
                <div className={styles.chapterNarrative}>
                  <p>
                    Your website is usually the first serious encounter that will ever come your way from a potential customer.
                  </p>
                  <p>
                    If it takes a long time to load, is outdated, is hard to use on mobile, or makes it hard to reach you, you risk losing potential customers before they even know what you offer.
                  </p>
                  <p>
                    Nova Spark creates websites that are speedy, mobile responsive, and conversion optimized, built around how your customers really use the site.
                  </p>
                  <p>
                    If you need a business website, landing page website, service website or a scalable Next.js website, we are focused on clean design, performance, SEO and simple user experience.
                  </p>
                </div>
                <div className={styles.chapterInlineMetric}>
                  <span className={styles.inlineMetricDot} />
                  <strong>Our Focus:</strong> Better website performance, clearer messaging, stronger user experience and easier ways for visitors to enquire, call or connect with your business.
                </div>
              </div>
            </div>

            {/* Chapter 03 */}
            <div className={styles.storyChapter}>
              <div className={styles.chapterNodeWrap}>
                <div className={styles.chapterNodePulse} />
                <span className={styles.chapterNumeral}>03</span>
              </div>
              <div className={styles.chapterRungLine} />
              <div className={styles.chapterCardPlate}>
                <div className={styles.chapterMeta}>
                  <span className={styles.chapterPhaseBadge}>PHASE 03: TURNING INTEREST INTO REAL ENQUIRIES</span>
                  <span className={styles.chapterAnchorTag}>🔄 Full-Funnel Lead Conversion</span>
                </div>
                <h3 className={styles.chapterHeading}>
                  From Clicks and Visits to Meaningful Conversations
                </h3>
                <div className={styles.chapterNarrative}>
                  <p>
                    Digital marketing should not feel like guesswork.
                  </p>
                  <p>
                    You need to be aware of where leads are coming from, what campaigns are working, what you are paying for, and how you can do better.
                  </p>
                  <p>
                    At Nova Spark, we leverage campaign data, website analytics, SEO information and lead data to determine what works and what doesn&apos;t.
                  </p>
                  <p>
                    Our goal is not to chase impressive-looking numbers. It is about creating a marketing system that is continually optimized with the data we learn from.
                  </p>
                </div>
                <div className={styles.chapterInlineMetric}>
                  <span className={styles.inlineMetricDot} />
                  <strong>Our Approach:</strong> Track the customer journey and improve each step instead of treating every marketing channel as a separate activity.
                </div>
              </div>
            </div>

            {/* Chapter 04 */}
            <div className={styles.storyChapter}>
              <div className={styles.chapterNodeWrap}>
                <div className={styles.chapterNodePulse} />
                <span className={styles.chapterNumeral}>04</span>
              </div>
              <div className={styles.chapterRungLine} />
              <div className={styles.chapterCardPlate}>
                <div className={styles.chapterMeta}>
                  <span className={styles.chapterPhaseBadge}>PHASE 04: MEASURING WHAT ACTUALLY MATTERS</span>
                  <span className={styles.chapterAnchorTag}>📊 Clear Reporting &amp; Sustainable Growth</span>
                </div>
                <h3 className={styles.chapterHeading}>
                  Clear Reporting. Better Decisions. Sustainable Growth.
                </h3>
                <div className={styles.chapterNarrative}>
                  <p>
                    Digital marketing should not feel like guesswork.
                  </p>
                  <p>
                    You should know where your leads are coming from, which campaigns are performing, what you are spending, and where there is room to improve.
                  </p>
                  <p>
                    At Nova Spark, we use campaign data, website analytics, SEO insights and lead information to understand what is working and what needs to change.
                  </p>
                  <p>
                    Our goal is not to chase impressive-looking numbers. It is to build a marketing system that becomes more efficient as we learn from the data.
                  </p>
                </div>
                <div className={styles.chapterInlineMetric}>
                  <span className={styles.inlineMetricDot} />
                  <strong>The Outcome:</strong> A Digital Growth System Built Around Your Business — No one-size-fits-all packages &bull; No confusing reports &bull; No unnecessary marketing jargon.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: RE-ENGINEERED FAQ ACCORDION CONSOLE WITH SECTION COLLAGES
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.faqSection} id="faq-directory">
        <div className="container">
          <ScrollReveal>
            <div className={styles.faqSectionHeader}>
              <div className="eyebrow eyebrow-center" style={{ margin: '0 auto 12px' }}>
                <span className="eyebrow-dot" />
                DETAILED KNOWLEDGE ARCHIVE
              </div>
              <h2 className={`display-md ${styles.faqSectionTitle}`}>
                Have Questions About Digital Marketing?{' '}
                <span className="accent-gradient">Start Here!</span>
              </h2>
              <p className={styles.faqSectionSub}>
                Digital marketing can get complicated quickly. We break down SEO, Google Ads, Meta Ads, websites, social media, and lead generation into practical information you can actually use for your business.
              </p>
            </div>
          </ScrollReveal>

          {/* Dual-Pane Console Layout */}
          <div className={styles.layout}>
            {/* Sticky Minimal Navigation Spine */}
            <aside className={styles.sidebar}>
              <div className={styles.sideNavBox}>
                <div className={styles.sideNavHeader}>
                  <span className={styles.sideNavHeaderDot} />
                  <span>KNOWLEDGE SECTORS</span>
                </div>
                <nav className={styles.sideNav}>
                  <button
                    type="button"
                    className={`${styles.sideLink} ${selectedCategory === 'all' ? styles.sideLinkActive : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    <span>All Disciplines</span>
                    <span className={styles.sideLinkCount}>
                      {faqGroups.reduce((acc, g) => acc + g.faqs.length, 0)}
                    </span>
                  </button>
                  {faqGroups.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      className={`${styles.sideLink} ${selectedCategory === g.id ? styles.sideLinkActive : ''}`}
                      onClick={() => {
                        setSelectedCategory(g.id);
                        const el = document.getElementById(`faq-group-${g.id}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      <span>{g.title}</span>
                      <span className={styles.sideLinkCount}>{g.faqs.length}</span>
                    </button>
                  ))}
                </nav>

                <div className={styles.sideHelpBox}>
                  <div className={styles.sideHelpTop}>
                    <span className={styles.sideHelpQuestionIcon}>⚡</span>
                    <span className={styles.sideHelpTitle}>Need an urgent audit?</span>
                  </div>
                  <p className={styles.sideHelpText}>
                    Our senior revenue engineers review your current digital footprint and deliver custom benchmarks in 48 hours.
                  </p>
                  <Link href="/contact" className={styles.sideHelpCta}>
                    Request Free Audit <span>→</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Accordion List & Section Collages */}
            <div className={styles.groups}>
              {filteredGroups.length === 0 ? (
                <div className={styles.emptyStateBox}>
                  <span className={styles.emptyIcon}>🔍</span>
                  <h3 className={styles.emptyTitle}>No exact questions matched &ldquo;{searchQuery}&rdquo;</h3>
                  <p className={styles.emptyText}>
                    We likely have the answer you are looking for. Ask our senior strategists directly in the form below for a rapid response within 4 hours.
                  </p>
                  <button
                    type="button"
                    className={styles.resetFilterBtn}
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                  >
                    Reset Search &bull; View All 24 Questions
                  </button>
                </div>
              ) : (
                filteredGroups.map((group) => (
                  <div key={group.id} id={`faq-group-${group.id}`} className={styles.group}>
                    {/* Visual Collage Header Banner per Section */}
                    <div className={styles.sectionCollageBanner}>
                      <div className={styles.collageBannerMedia}>
                        <div className={styles.collageBannerMain}>
                          <Image
                            src={group.collage.mainImage}
                            alt={group.title}
                            fill
                            className={styles.collageImgCover}
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                          <div className={styles.collageImgOverlay} />
                          <div className={styles.collageBadgeTag}>
                            {group.collage.tag}
                          </div>
                        </div>
                        {group.collage.subImage ? (
                          <div className={styles.collageBannerSub}>
                            <Image
                              src={group.collage.subImage}
                              alt={`${group.title} preview`}
                              fill
                              className={styles.collageImgCover}
                              sizes="(max-width: 768px) 40vw, 200px"
                            />
                            <div className={styles.collageImgOverlaySubtle} />
                          </div>
                        ) : null}
                      </div>

                      {/* Collage Text & Details */}
                      <div className={styles.collageBannerInfo}>
                        <div className={styles.collageInfoTop}>
                          <span className={styles.groupBadge}>{group.badge}</span>
                        </div>
                        <h3 className={styles.collageGroupTitle}>{group.title}</h3>
                        <p className={styles.collageGroupHighlight}>
                          {group.highlight}
                        </p>
                        <span className={styles.collageCaptionText}>
                          📍 {group.collage.caption}
                        </span>
                      </div>
                    </div>

                    {/* Accordion Questions List */}
                    <div className={styles.accordion}>
                      {group.faqs.map((faq, fi) => {
                        const key = `${group.id}-${fi}`;
                        const isOpen = openItem === key;
                        const questionNum = (fi + 1).toString().padStart(2, '0');

                        return (
                          <div
                            key={key}
                            id={`faq-item-${key}`}
                            className={`${styles.item} ${isOpen ? styles.itemOpen : ''} ${highlightedItem === key ? styles.itemHighlighted : ''}`}
                          >
                            <button
                              type="button"
                              className={styles.question}
                              onClick={() => toggle(key)}
                              aria-expanded={isOpen}
                            >
                              <div className={styles.questionLeft}>
                                <span className={styles.questionPillMedallion}>
                                  <span className={styles.qNumeral}>{questionNum}</span>
                                </span>
                                <div className={styles.questionMetaWrap}>
                                  <span className={styles.questionCategoryMicroBadge}>{group.badge}</span>
                                  <span className={styles.questionText}>{faq.q}</span>
                                </div>
                              </div>
                              <div className={styles.questionIconWrap}>
                                <span className={styles.questionIcon}>{isOpen ? '−' : '+'}</span>
                              </div>
                            </button>

                            {isOpen && (
                              <div className={styles.answerWrap}>
                                <div className={styles.answerText}>{faq.a}</div>

                                {faq.bullets && faq.bullets.length > 0 && (
                                  <ul className={styles.answerBulletList}>
                                    {faq.bullets.map((b, bIdx) => (
                                      <li key={bIdx} className={styles.answerBulletItem}>
                                        <span className={styles.bulletCheckIcon}>✓</span>
                                        <span>{b}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}

                                {faq.takeaway && (
                                  <div className={styles.takeawayPill}>
                                    <span className={styles.takeawayLabel}>⚡ KEY TAKEAWAY:</span>
                                    <span className={styles.takeawayText}>{faq.takeaway}</span>
                                  </div>
                                )}

                                <div className={styles.answerActionRow}>
                                  <a href="#ask-question" className={styles.answerActionBtn}>
                                    <span>Have a question about this? Ask Strategist →</span>
                                  </a>
                                  <span className={styles.answerVerifiedBadge}>✓ Verified Growth Standards</span>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              CTA CARD: STILL HAVE A QUESTION? (CENTERED & MINIMAL)
             ══════════════════════════════════════════════════════════ */}
          <ScrollReveal delay={80}>
            <div className={styles.stillHaveQuestionCard} id="still-have-questions">
              <div className={styles.stillQuestionGlow} />

              <div className={styles.stillQuestionContentCentered}>
                <h3 className={styles.stillQuestionTitle}>
                  {searchQuery.trim() ? (
                    <>Still Have Questions about &ldquo;{searchQuery.trim()}&rdquo;?</>
                  ) : (
                    <>Still Have Questions?</>
                  )}
                </h3>

                <p className={styles.stillQuestionSub}>
                  Ask our senior strategists directly. We&apos;ll audit your scenario confidentially within 4 hours.
                </p>

                <div className={styles.stillActionsCenteredRow}>
                  <a
                    href="#ask-question"
                    className={styles.dispatchRedirectBtn}
                    onClick={(e) => {
                      e.preventDefault();
                      if (searchQuery.trim() && !formState.question) {
                        setFormState((prev) => ({
                          ...prev,
                          question: prev.question || searchQuery.trim(),
                        }));
                      }
                      const el = document.getElementById('ask-question');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <span>Ask Our Strategists Directly ↓</span>
                  </a>
                </div>

                <a
                  href={`https://wa.me/918763570630?text=${encodeURIComponent(
                    'Hi Marketing Copilot, I have an unanswered question about digital marketing in Bhubaneswar.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickWhatsappLink}
                >
                  <span>💬 Prefer WhatsApp? Chat Now (Avg. 18m) ↗</span>
                </a>

                <div className={styles.stillTrustRow}>
                  <span>🔒 100% Confidential NDA</span>
                  <span className={styles.trustDivider}>&bull;</span>
                  <span>📊 Free Audit</span>
                  <span className={styles.trustDivider}>&bull;</span>
                  <span>🚫 Zero Sales Pressure</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: DUAL-PANE EXECUTIVE STRATEGIST DISPATCH COCKPIT
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.directFormSection} id="ask-question">
        <div className="container">
          <ScrollReveal>
            <div className={styles.dispatchCockpit}>
              {/* Left Pane: Strategist Desk & Trust Deck */}
              <div className={styles.strategistDeskPane}>
                <div className={styles.strategistDeskHeader}>
                  <span className={styles.liveStatusPill}>
                    <span className={styles.liveDot} />
                    STRATEGIST ON-DUTY &bull; BHUBANESWAR
                  </span>
                </div>

                {/* Strategist Profile Card */}
                <div className={styles.strategistProfileCard}>
                  <div className={styles.strategistAvatarWrap}>
                    <Image
                      src="/images/ceo_aarav.jpg"
                      alt="Aarav Sharma - Principal Revenue Architect"
                      fill
                      className={styles.strategistAvatarImg}
                    />
                    <span className={styles.verifiedCheckBadge}>✓</span>
                  </div>
                  <div className={styles.strategistMeta}>
                    <h3 className={styles.strategistName}>Aarav Sharma</h3>
                    <span className={styles.strategistRole}>Principal Revenue Architect</span>
                    <span className={styles.strategistCorridor}>📍 Patia, Bhubaneswar</span>
                  </div>
                </div>

                {/* Minimal Tactical Value Badges */}
                <div className={styles.strategistPillarsList}>
                  <div className={styles.pillarItem}>
                    <span className={styles.pillarIcon}>⚡</span>
                    <span className={styles.pillarText}>4-Hour Direct Turnaround</span>
                  </div>
                  <div className={styles.pillarItem}>
                    <span className={styles.pillarIcon}>🔒</span>
                    <span className={styles.pillarText}>100% Confidential NDA</span>
                  </div>
                  <div className={styles.pillarItem}>
                    <span className={styles.pillarIcon}>📊</span>
                    <span className={styles.pillarText}>Free Odisha Competitor Audit</span>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className={styles.deskWhatsappCallout}>
                  <a
                    href={`https://wa.me/918763570630?text=${encodeURIComponent(
                      'Hi Aarav, I have a strategic digital marketing question regarding my business in Bhubaneswar.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.deskWhatsappBtn}
                  >
                    <span className={styles.whatsappIcon}>💬</span>
                    <span>Chat on WhatsApp (Avg. 18m) ↗</span>
                  </a>
                </div>
              </div>

              {/* Right Pane: Interactive Strategy Ingestion Form */}
              <div className={styles.formIntakePane}>
                <div className={styles.intakeHeader}>
                  <div className="eyebrow" style={{ marginBottom: 6 }}>
                    <span className="eyebrow-dot" />
                    CONFIDENTIAL STRATEGY DISPATCH &bull; NO PRESSURE
                  </div>
                  <h2 className={styles.intakeTitle}>
                    Ask Our Strategists Directly.
                  </h2>
                  <p className={styles.intakeSub}>
                    Submit your question below for a free, confidential strategic breakdown.
                  </p>
                </div>

                {/* Topic Selector Chips */}
                <div className={styles.topicSelectorWrap}>
                  <div className={styles.topicChipsGrid}>
                    {[
                      '🎯 Google & Meta Ads',
                      '📍 Local SEO 3-Pack',
                      '⚡ Next.js Web Speed',
                      '💰 Retainer & Pricing',
                      '❓ Custom Question',
                    ].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        className={`${styles.topicChip} ${selectedTopic === topic ? styles.topicChipActive : ''}`}
                        onClick={() => setSelectedTopic(topic)}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {isSubmitted ? (
                  <div className={styles.cockpitSuccessBox}>
                    <div className={styles.successTicketTop}>
                      <span className={styles.successBadge}>✓ INTAKE DISPATCHED TO STRATEGIST</span>
                      <span className={styles.ticketId}>ID: MC-8492</span>
                    </div>
                    <h3 className={styles.successTitle}>Diagnostic Request Received</h3>
                    <p className={styles.successText}>
                      Thank you, <strong>{formState.fullName}</strong>. Your inquiry regarding <strong>{formState.businessName || 'your business'}</strong> under <strong>{selectedTopic}</strong> has been routed directly to Aarav Sharma&apos;s desk.
                    </p>
                    <div className={styles.successMetaStrip}>
                      <span>📱 Callback / WhatsApp: <strong>+91 {formState.phone}</strong></span>
                      <span>⏱ Turnaround: <strong>Within 4 Hours</strong></span>
                    </div>
                    <button
                      type="button"
                      className={styles.newQuestionBtn}
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({ fullName: '', businessName: '', phone: '', question: '' });
                      }}
                    >
                      Submit Another Question →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className={styles.cockpitForm}>
                    <div className={styles.formFieldsGrid}>
                      {/* Full Name */}
                      <div className={styles.fieldGroup}>
                        <label htmlFor="faq-name" className={styles.fieldLabel}>
                          YOUR NAME <span className={styles.reqStar}>*</span>
                        </label>
                        <div className={styles.fieldInputWrap}>
                          <span className={styles.fieldIcon}>👤</span>
                          <input
                            id="faq-name"
                            type="text"
                            required
                            placeholder="e.g. Rajesh Mohapatra"
                            value={formState.fullName}
                            onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                            className={styles.cockpitInput}
                          />
                        </div>
                      </div>

                      {/* Phone / WhatsApp */}
                      <div className={styles.fieldGroup}>
                        <label htmlFor="faq-phone" className={styles.fieldLabel}>
                          PHONE / WHATSAPP <span className={styles.reqStar}>*</span>
                        </label>
                        <div className={styles.fieldInputWrap}>
                          <span className={styles.countryFlagPill}>🇮🇳 +91</span>
                          <input
                            id="faq-phone"
                            type="tel"
                            required
                            placeholder="98765 43210"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className={styles.cockpitInput}
                          />
                        </div>
                      </div>

                      {/* Question / Bottleneck */}
                      <div className={`${styles.fieldGroup} ${styles.fieldFullWidth}`}>
                        <label htmlFor="faq-question" className={styles.fieldLabel}>
                          YOUR QUESTION OR CHALLENGE <span className={styles.reqStar}>*</span>
                        </label>
                        <div className={styles.fieldTextareaWrap}>
                          <textarea
                            id="faq-question"
                            required
                            rows={3}
                            placeholder="Ask any question about your ads, SEO, website, or marketing in Bhubaneswar..."
                            value={formState.question}
                            onChange={(e) => setFormState({ ...formState, question: e.target.value })}
                            className={styles.cockpitTextarea}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className={styles.cockpitActionBar}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.cockpitSubmitBtn}
                      >
                        <span className={styles.submitBtnText}>
                          {isSubmitting ? 'Transmitting...' : 'Send Question to Strategists →'}
                        </span>
                      </button>

                      <div className={styles.trustMiniRow}>
                        <span>🔒 100% Confidential</span>
                        <span>&bull;</span>
                        <span>⚡ 4-Hour Turnaround</span>
                        <span>&bull;</span>
                        <span>🚫 Zero Sales Pressure</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <CTASection />
    </div>
  );
}
