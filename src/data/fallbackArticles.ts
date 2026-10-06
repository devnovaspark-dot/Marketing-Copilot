export interface PortableTextSpan {
  _type: string;
  text: string;
  marks?: string[];
}

export interface PortableTextBlock {
  _type: string;
  style?: string;
  children?: PortableTextSpan[];
  level?: number;
  listItem?: string;
  markDefs?: unknown[];
}

export interface FallbackArticle {
  slug: string;
  category: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt?: string;
  author: string;
  authorRole: string;
  authorImage?: string;
  authorBio?: string;
  takeaways: string[];
  faqItems: { question: string; answer: string }[];
  headings: { id: string; text: string; level: number }[];
  body: PortableTextBlock[];
}

export const FALLBACK_ARTICLES: FallbackArticle[] = [
  {
    slug: 'local-seo-domination-google-3-pack-guide',
    category: 'Local SEO',
    title: 'Local SEO Domination: How to Rank in Google’s Local 3-Pack in 2026',
    metaTitle: 'Local SEO Domination: Google Local 3-Pack Guide 2026',
    excerpt:
      'A complete operational blueprint for brick-and-mortar and service businesses in Bhubaneswar to capture high-intent local search queries and outrank local competitors.',
    readTime: '7 min read',
    date: 'Oct 4, 2026',
    image: '/images/Seo & local search.png',
    imageAlt: 'Local SEO Domination Strategy and Google Local 3 Pack Guide',
    author: 'Aarav Sharma',
    authorRole: 'Founder & Growth Principal',
    authorImage: '/images/ceo_aarav.jpg',
    authorBio:
      'Aarav leads growth architecture at Marketing Copilot, having scaled 40+ local and national brands across India with ROI-driven search and media systems.',
    takeaways: [
      'Google 3-Pack listings drive over 44% of total local search clicks.',
      'Primary category selection and geo-tagged local citations carry the highest algorithmic weight.',
      'Review velocity and proactive owner responses directly signal business legitimacy to Google rankers.',
      'Hyper-localized landing pages with geo-schema structured data create an impenetrable local moat.',
    ],
    headings: [
      { id: 'why-local-3-pack-matters', text: 'Why Google’s Local 3-Pack Dictates Local Revenue', level: 2 },
      { id: 'optimizing-google-business-profile', text: 'Step 1: Google Business Profile Architecture', level: 2 },
      { id: 'citation-consistency-and-nap', text: 'Step 2: Citation Cleanliness and NAP Distribution', level: 2 },
      { id: 'review-velocity-and-reputation', text: 'Step 3: Engineering Review Velocity in Bhubaneswar', level: 2 },
      { id: 'local-landing-page-schema', text: 'Step 4: Hyper-Localized Website Pages and Schema Markup', level: 2 },
    ],
    faqItems: [
      {
        question: 'How long does it take to rank in Google’s Local 3-Pack in Bhubaneswar?',
        answer:
          'Typically, local businesses with optimized GBP categories and consistent citations begin climbing within 30 to 60 days, achieving top 3 prominence by 90 to 120 days depending on local market competition.',
      },
      {
        question: 'Does having physical office locations impact Google Maps rankings?',
        answer:
          'Yes. Proximity to the searcher is an algorithmic factor. However, strong local prominence, consistent citations, and high review velocity frequently outrank closer competitors who lack authority.',
      },
    ],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'For localized businesses in Bhubaneswar—from dental clinics and real estate developers to cafes and boutique retail—visibility in the Google Local 3-Pack is the single largest determinant of inbound inquiry volume. Over 44% of all local searchers choose a business directly from the top three Google Map results before scrolling down to organic links.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Why Google’s Local 3-Pack Dictates Local Revenue',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Local search queries carry immediate purchasing intent. When a prospect types "best interior designer in Bhubaneswar" or "digital marketing agency near me," they are not researching academic definitions—they are actively comparing vendors to hire. Dominating this section delivers pre-qualified inbound calls without continuous pay-per-click costs.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Step 1: Google Business Profile Architecture',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Your Google Business Profile (GBP) is the cornerstone of local indexing. Ensure your primary category precisely matches your core revenue driver, configure secondary categories strategically, upload high-resolution interior and team photographs, and publish weekly GBP updates with local keyword tags.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Step 2: Citation Cleanliness and NAP Distribution',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Inconsistent Name, Address, and Phone Number (NAP) details across local directories dilute search engine trust. Audit and synchronize your company details across JustDial, Sulekha, IndiaMART, Facebook, and local chamber listings to establish an authoritative citation footprint.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Step 3: Engineering Review Velocity in Bhubaneswar',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'It is not merely your aggregate star rating that Google evaluates; it is review velocity and keyword inclusion. Establish an automated post-service WhatsApp follow-up encouraging satisfied clients to mention specific services and locations in their 5-star reviews.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Step 4: Hyper-Localized Website Pages and Schema Markup',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Pair your GBP listing with dedicated geo-targeted pages on your website. Embed JSON-LD LocalBusiness schema containing geo-coordinates, operating hours, accepted payments, and neighborhood references like Patia, Saheed Nagar, and Jaydev Vihar.',
          },
        ],
      },
    ],
  },
  {
    slug: 'meta-google-ads-high-intent-lead-scaling',
    category: 'Paid Media',
    title: 'Scaling Paid Acquisition: Generating High-Intent Leads with Meta & Google Ads',
    metaTitle: 'Scaling Paid Acquisition with Meta and Google Ads | Marketing Copilot',
    excerpt:
      'How to structure full-funnel ad campaigns, build winning creative angles, and maintain sustainable cost-per-acquisition (CPA) when scaling ad budgets.',
    readTime: '6 min read',
    date: 'Oct 2, 2026',
    image: '/images/Google ads & Meta ads.png',
    imageAlt: 'Meta and Google Ads Scaling Architecture for High Intent Leads',
    author: 'Priya Mohanty',
    authorRole: 'Performance Media Director',
    authorImage: '/images/coo_priya.jpg',
    authorBio:
      'Priya oversees performance advertising at Marketing Copilot, having deployed over ₹25M in profitable ad spend across D2C, B2B services, and education verticals.',
    takeaways: [
      'Separate high-intent Google Search campaigns from demand-generation Meta Ads for clearer attribution.',
      'Creative velocity is the primary targeting mechanism on Meta in 2026—iterate angles weekly.',
      'Post-click landing page alignment often yields 3x higher ROAS gains than in-platform bid adjustments.',
      'Implement first-party conversion tracking to protect against attribution loss and signal decay.',
    ],
    headings: [
      { id: 'the-full-funnel-bifurcation', text: '1. Bifurcating Search Intent vs. Social Demand', level: 2 },
      { id: 'meta-creative-velocity-framework', text: '2. The Meta Creative Velocity Framework', level: 2 },
      { id: 'google-ads-intent-capture', text: '3. Google Search: Exact Match & Negative Keyword Rigor', level: 2 },
      { id: 'cpa-stabilization-protocols', text: '4. Scaling Budgets Without Blowing Up Your CPA', level: 2 },
    ],
    faqItems: [
      {
        question: 'What is the minimum recommended ad budget to test Meta & Google Ads profitably?',
        answer:
          'For regional campaigns in Odisha and Eastern India, an initial budget of ₹30,000 to ₹50,000 per month provides sufficient algorithmic data to optimize cost-per-lead and identify top-performing creatives.',
      },
      {
        question: 'Should small businesses run Lead Gen forms or send traffic to landing pages?',
        answer:
          'Native lead forms yield higher lead volume at lower cost, but landing pages yield significantly higher lead qualification and closing rates. We recommend a hybrid test during month one.',
      },
    ],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Scaling paid ad spend is rarely about pressing a "boost" button or increasing daily budgets by 200%. As ad spend expands, audience saturation and rising CPAs quickly erode profitability unless your creative pipeline and funnel mechanics are built to scale.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: '1. Bifurcating Search Intent vs. Social Demand',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Google Ads captures existing intent from customers actively searching for immediate solutions. Meta Ads creates new demand by disrupting relevant audiences with compelling visual proof and irresistible hooks. Winning agencies deploy Google for rapid conversions while scaling Meta for volume.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: '2. The Meta Creative Velocity Framework',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Under Meta’s algorithmic delivery, creative is your true targeting lever. Rather than endlessly tweaking demographic filters, test 4 distinct creative angles every week: direct problem-solution, social proof breakdown, founder perspective, and behind-the-scenes case study.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: '3. Google Search: Exact Match & Negative Keyword Rigor',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Broad match keywords without rigorous negative keyword lists are the fastest way to burn ad dollars. Maintain strict negative lists filtering out job seekers, free tools, and irrelevant search intent to preserve high conversion quality.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: '4. Scaling Budgets Without Blowing Up Your CPA',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Scale winning ad sets horizontally across lookalike and broad audiences rather than jacking up single ad set budgets vertically by more than 20% every 48 hours. This prevents the bidding algorithm from resetting into an expensive learning phase.',
          },
        ],
      },
    ],
  },
  {
    slug: 'high-converting-landing-page-cro-framework',
    category: 'CRO & Design',
    title: 'The High-Converting Landing Page Framework: 7 Principles That Double Conversions',
    metaTitle: 'Landing Page CRO Framework: 7 Principles That Double Conversion Rates',
    excerpt:
      'Traffic without conversion is wasted capital. Discover the exact landing page layout, psychological triggers, and friction-reducing UX patterns that turn clicks into booked clients.',
    readTime: '8 min read',
    date: 'Sep 28, 2026',
    image: '/images/Website devlopment.png',
    imageAlt: 'High-Converting Landing Page Framework and Conversion Rate Optimization',
    author: 'Aarav Sharma',
    authorRole: 'Founder & Growth Principal',
    authorImage: '/images/ceo_aarav.jpg',
    authorBio:
      'Aarav leads growth architecture at Marketing Copilot, having designed and launched 60+ bespoke high-conversion funnels across tech, healthcare, and retail.',
    takeaways: [
      'A single primary Call-to-Action (CTA) eliminates choice paralysis and dramatically lifts lead rates.',
      'Mobile page load speeds exceeding 2.5 seconds discard up to 53% of paid mobile visitors.',
      'Social proof must be specific, quantified, and placed immediately adjacent to action points.',
      'Skeuomorphic tactile cues guide user attention directly to the high-value conversion elements.',
    ],
    headings: [
      { id: 'the-traffic-fallacy', text: 'The Traffic Fallacy: Why More Visitors Won’t Fix a Leaky Funnel', level: 2 },
      { id: 'hero-section-clarity', text: 'Principle 1: The 5-Second Hero Section Test', level: 2 },
      { id: 'tactile-interaction-design', text: 'Principle 2: Tactile Micro-Interactions and Visual Hierarchy', level: 2 },
      { id: 'quantified-social-proof', text: 'Principle 3: Quantified Proof Over Vague Testimonials', level: 2 },
      { id: 'frictionless-lead-capture', text: 'Principle 4: Multi-Step Lead Capture & WhatsApp Onramps', level: 2 },
    ],
    faqItems: [
      {
        question: 'What is an average conversion rate for a local service landing page?',
        answer:
          'While industry averages hover around 2.5% to 4%, a well-engineered landing page with tailored local proof and zero friction routinely converts between 8% and 15% of paid traffic.',
      },
      {
        question: 'Should landing pages have a full navigation bar like the main website?',
        answer:
          'For paid ad campaigns, no. Removing general header navigation and extraneous outbound links prevents bounce friction and focuses user attention purely on the conversion goal.',
      },
    ],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Most businesses believe they have a traffic problem when they actually have a conversion problem. Doubling your web traffic requires doubling your ad budget or waiting months for organic growth. But doubling your conversion rate cuts your customer acquisition cost in half instantly.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'The Traffic Fallacy: Why More Visitors Won’t Fix a Leaky Funnel',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'When visitors land on your page, you have roughly five seconds to answer three subconscious questions: What do you do? Why should I trust you? What exact action do I take right now? If your page answers these instantly, conversion rates surge.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Principle 1: The 5-Second Hero Section Test',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Your hero headline should focus on the primary transformation or outcome you deliver, not clever marketing slogans. Pair it with a concise two-sentence subheadline, a prominent primary CTA button with high-contrast tactile lighting, and a verified customer badge.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Principle 2: Tactile Micro-Interactions and Visual Hierarchy',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Flat, generic web pages fail to generate urgency. High-conversion interfaces leverage skeuomorphic depth—subtle bevels, inset top highlights, and animated beam buttons that physically feel click-worthy, subconsciously encouraging user engagement.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Principle 3: Quantified Proof Over Vague Testimonials',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Vague praises like "Great service!" build zero trust. High-converting pages showcase specific results: "Generated 142 qualified leads in 60 days," accompanied by genuine client headshots, verifiable company names, and video proof snippets.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Principle 4: Multi-Step Lead Capture & WhatsApp Onramps',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text:
              'Long, intimidating 10-field contact forms scare users away. Break inquiries into a frictionless 2-step micro-survey or provide an immediate one-click WhatsApp chat option for prospects who prefer conversational mobile communication.',
          },
        ],
      },
    ],
  },
];
