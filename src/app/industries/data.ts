export interface IndustryItem {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  desc: string;
  image: string;
  color: string;
  accentBg: string;
  badge: string;
  metric: string;
  metricLabel: string;
  intentLabel: string;
  intentText: string;
  bottleneckLabel: string;
  bottleneckText: string;
  approachLabel: string;
  approachText: string;
  services: string[];
  playbook: {
    bottlenecks: string[];
    solutions: string[];
    funnelSteps: { title: string; desc: string }[];
    benchmarks: { label: string; val: string }[];
    clientAnchor: string;
    clientLocation: string;
  };
}

export const industryCatalog: IndustryItem[] = [
  {
    id: 'healthcare',
    num: '01',
    title: 'Healthcare, Hospitals & Clinics',
    shortTitle: 'Healthcare',
    category: 'PATIENT TRUST & LOCAL SPECIALTY',
    tagline: 'Turn local healthcare searches into qualified appointment enquiries while building long-term trust around your doctors, treatments, and specialties.',
    desc: 'Turn local healthcare searches into qualified appointment enquiries while building long-term trust around your doctors, treatments, and specialties.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    color: '#059669',
    accentBg: 'rgba(5, 150, 105, 0.08)',
    badge: 'TOP 3 MAPS DOMINANCE',
    metric: '+190%',
    metricLabel: 'Direct Patient Calls',
    intentLabel: '✓ PATIENT INTENT',
    intentText: 'Patients search for symptoms, specialists, treatments, hospitals, and nearby clinics when they are actively looking for healthcare support.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'Generic social media content rarely captures patients who are already searching for a specific doctor, treatment, or specialty.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Combine local SEO, doctor-focused content, Google Search campaigns, educational content, and conversion-focused appointment journeys.',
    services: ['Local SEO', 'Google Search Ads', 'Doctor Branding', 'Healthcare Content', 'Appointment Funnels'],
    playbook: {
      bottlenecks: [
        'Generic social media content rarely captures patients who are already searching for a specific doctor, treatment, or specialty.',
      ],
      solutions: [
        'Combine local SEO, doctor-focused content, Google Search campaigns, educational content, and conversion-focused appointment journeys.',
      ],
      funnelSteps: [
        { title: 'Google Maps 3-Pack Anchor', desc: 'Optimized local citations and verified doctor profiles ranking for symptom searches.' },
        { title: 'Symptom-to-Specialist Funnel', desc: 'Clear treatment landing pages with doctor credentials, patient testimonials, and pricing clarity.' },
        { title: 'WhatsApp Automated Reminders', desc: 'Automated 2-hour and 24-hour reminder pings ensuring prompt clinic arrivals.' },
      ],
      benchmarks: [
        { label: 'Map View Growth', val: '+340%' },
        { label: 'Direct OPD Consultations', val: '450+/Mo' },
        { label: 'Patient Call Growth', val: '+190%' },
      ],
      clientAnchor: 'CareFirst Multi-Speciality Clinic',
      clientLocation: 'Saheed Nagar, Bhubaneswar',
    },
  },
  {
    id: 'real-estate',
    num: '02',
    title: 'Real Estate & Luxury Housing',
    shortTitle: 'Real Estate',
    category: 'HIGH-TICKET ASSET SALES',
    tagline: 'Generate qualified property enquiries for apartments, villas, plots, and premium housing projects across key Indian real estate markets.',
    desc: 'Generate qualified property enquiries for apartments, villas, plots, and premium housing projects across key Indian real estate markets.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    color: '#0B2093',
    accentBg: 'rgba(11, 32, 147, 0.08)',
    badge: '3X INBOUND BUYERS',
    metric: '90+',
    metricLabel: 'Verified Inbound Buyers / Mo',
    intentLabel: '✓ BUYER INTENT',
    intentText: 'Property buyers often begin their journey with high-intent Google searches before speaking to a developer or broker.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'Depending heavily on property portals and aggregator leads can put your project in front of the same prospects as competing developers.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Build your own acquisition channel through local SEO, high-intent search campaigns, landing pages, remarketing, and enquiry-focused funnels.',
    services: ['Local SEO', 'Google Search Ads', 'Meta Ads', 'Property Landing Pages', 'Remarketing Funnels'],
    playbook: {
      bottlenecks: [
        'Depending heavily on property portals and aggregator leads can put your project in front of the same prospects as competing developers.',
      ],
      solutions: [
        'Build your own acquisition channel through local SEO, high-intent search campaigns, landing pages, remarketing, and enquiry-focused funnels.',
      ],
      funnelSteps: [
        { title: 'Hyperlocal Intent Sniping', desc: 'Capture active home searchers on Google with negative keyword filters eliminating rental searches.' },
        { title: 'Interactive Virtual Showcase', desc: 'Engage serious buyers with 360-degree walkthroughs and price-bracket self-qualifiers.' },
        { title: 'Instant Site-Visit Booking', desc: 'Direct WhatsApp counselor integration booking verified weekend walkthroughs.' },
      ],
      benchmarks: [
        { label: 'Site Visit Conversion', val: '28.4%' },
        { label: 'Average Cost Per Site Visit', val: '₹420' },
        { label: 'Brokerage Elimination', val: '100%' },
      ],
      clientAnchor: 'Utkal Heights & Luxury Villas',
      clientLocation: 'Patia & Khandagiri, Bhubaneswar',
    },
  },
  {
    id: 'education',
    num: '03',
    title: 'Education & EdTech',
    shortTitle: 'Education',
    category: 'STUDENT ENROLLMENT ACCELERATION',
    tagline: 'Generate qualified student enquiries for schools, colleges, coaching institutes, professional courses, and EdTech brands across India.',
    desc: 'Generate qualified student enquiries for schools, colleges, coaching institutes, professional courses, and EdTech brands across India.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    color: '#4F46E5',
    accentBg: 'rgba(79, 70, 229, 0.08)',
    badge: '₹140 VERIFIED CPL',
    metric: '400+',
    metricLabel: 'Competitive Batch Admissions',
    intentLabel: '✓ STUDENT & PARENT INTENT',
    intentText: 'Students and parents actively search for courses, coaching centres, colleges, fees, locations, and career-focused programmes before making an admission decision.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'Relying only on social media reach or education portals can make it difficult to generate qualified admission enquiries consistently.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Course-specific SEO, high-intent Google Search Ads, Meta lead campaigns, landing pages, content marketing, and remarketing funnels.',
    services: ['Education SEO', 'Google Search Ads', 'Meta Lead Ads', 'Course Landing Pages', 'Remarketing'],
    playbook: {
      bottlenecks: [
        'Relying only on social media reach or education portals can make it difficult to generate qualified admission enquiries consistently.',
      ],
      solutions: [
        'Course-specific SEO, high-intent Google Search Ads, Meta lead campaigns, landing pages, content marketing, and remarketing funnels.',
      ],
      funnelSteps: [
        { title: 'Aptitude Test Lead Magnet', desc: 'Free online scholarship test collecting verified parent and student contact details.' },
        { title: 'Instant Score & WhatsApp Report', desc: 'Counselor CRM receives score bracket instantly and delivers personalized career advice.' },
        { title: 'Campus Visit Invitation', desc: 'VIP invitation for classroom demo and faculty interaction.' },
      ],
      benchmarks: [
        { label: 'Parent Response Rate', val: '86.2%' },
        { label: 'Counseling Conversion', val: '31.5%' },
        { label: 'Cost Per Enrolled Student', val: '₹140' },
      ],
      clientAnchor: 'Apex National Academy',
      clientLocation: 'Acharya Vihar & Chandrasekharpur, Bhubaneswar',
    },
  },
  {
    id: 'restaurants',
    num: '04',
    title: 'Restaurants & Food Businesses',
    shortTitle: 'Food & Dining',
    category: 'DINE-IN FOOTFALL & TABLE BOOKINGS',
    tagline: 'Drive consistent table bookings, footfalls, and direct orders for restaurants, cafes, cloud kitchens, and food brands across key Indian cities.',
    desc: 'Drive consistent table bookings, footfalls, and direct orders for restaurants, cafes, cloud kitchens, and food brands across key Indian cities.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    color: '#EC4899',
    accentBg: 'rgba(236, 72, 153, 0.08)',
    badge: '3.4X DINE-IN ORDERS',
    metric: '3.4X',
    metricLabel: 'Weekend Table Reservations',
    intentLabel: '✓ DINER INTENT',
    intentText: 'Food lovers search for top-rated cafes, family restaurants, buffet deals, and weekend dining experiences on Google Maps and Instagram.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'High aggregator commissions eat into restaurant margins while weekday dine-in traffic remains low and inconsistent.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Local SEO, Google Business Profile ranking, Instagram Reels, weekday dining promotions, and direct WhatsApp reservation systems.',
    services: ['Local SEO', 'Google Maps 3-Pack', 'Food Content & Reels', 'Meta Ads', 'WhatsApp Reservations'],
    playbook: {
      bottlenecks: [
        'High aggregator commissions eat into restaurant margins while weekday dine-in traffic remains low and inconsistent.',
      ],
      solutions: [
        'Local SEO, Google Business Profile ranking, Instagram Reels, weekday dining promotions, and direct WhatsApp reservation systems.',
      ],
      funnelSteps: [
        { title: 'Cinematic Reel Hook', desc: 'Captivate local foodies on Instagram with mouth-watering signature preparation shots.' },
        { title: '1-Tap Menu & Location', desc: 'Direct link to interactive mobile menu and Google Maps navigation.' },
        { title: 'WhatsApp Reservation Confirmation', desc: 'Automated table booking with VIP seating confirmations.' },
      ],
      benchmarks: [
        { label: 'Average Reel Reach', val: '54,000+' },
        { label: 'Direct Booking Lift', val: '+240%' },
        { label: 'Weekday Occupancy', val: '78.5%' },
      ],
      clientAnchor: 'Heritage Bistro & Coastal Kitchen',
      clientLocation: 'Patia & Saheed Nagar, Bhubaneswar',
    },
  },
  {
    id: 'hospitality',
    num: '05',
    title: 'Hotels & Hospitality',
    shortTitle: 'Hospitality',
    category: 'DIRECT BOOKINGS & DESTINATION REACH',
    tagline: 'Drive direct enquiries and bookings for hotels, resorts, serviced apartments, and hospitality businesses across India.',
    desc: 'Drive direct enquiries and bookings for hotels, resorts, serviced apartments, and hospitality businesses across India.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    color: '#0284C7',
    accentBg: 'rgba(2, 132, 199, 0.08)',
    badge: 'ZERO OTA COMMISSION',
    metric: '+210%',
    metricLabel: 'Direct Booking Revenue',
    intentLabel: '✓ TRAVEL & BOOKING INTENT',
    intentText: 'Guests compare hotels based on location, price, amenities, reviews, experiences, and convenience before making a booking.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'Overdependence on booking platforms can increase competition and limit your ability to build direct customer relationships.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Local SEO, Google Search campaigns, destination content, social media marketing, remarketing, and booking-focused landing pages.',
    services: ['Local SEO', 'Google Ads', 'Social Media', 'Destination Content', 'Remarketing'],
    playbook: {
      bottlenecks: [
        'Overdependence on booking platforms can increase competition and limit your ability to build direct customer relationships.',
      ],
      solutions: [
        'Local SEO, Google Search campaigns, destination content, social media marketing, remarketing, and booking-focused landing pages.',
      ],
      funnelSteps: [
        { title: 'High-Intent Hotel Search', desc: 'Dominate Google Search and Maps for travelers looking for accommodation in Bhubaneswar and Puri.' },
        { title: 'Direct Booking Engine', desc: 'Frictionless mobile landing pages offering best-price guarantees and VIP perks.' },
        { title: 'Guest Retargeting Funnel', desc: 'Dynamic remarketing and WhatsApp confirmations securing verified stays.' },
      ],
      benchmarks: [
        { label: 'Direct Booking Share', val: '46.5%' },
        { label: 'Commission Reduction', val: '-65%' },
        { label: 'Weekend Occupancy', val: '92%' },
      ],
      clientAnchor: 'Odisha Heritage Resorts & Suites',
      clientLocation: 'Jaydev Vihar & Puri Marine Drive, Odisha',
    },
  },
  {
    id: 'ecommerce',
    num: '06',
    title: 'E-commerce & D2C Brands',
    shortTitle: 'E-Commerce',
    category: 'OMNICHANNEL SCALE & ROAS',
    tagline: 'Scale direct-to-consumer sales, lower customer acquisition costs, and build repeat purchase loyalty for online and regional brands.',
    desc: 'Scale direct-to-consumer sales, lower customer acquisition costs, and build repeat purchase loyalty for online and regional brands.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    color: '#D97706',
    accentBg: 'rgba(217, 119, 6, 0.08)',
    badge: '6.4X VERIFIED ROAS',
    metric: '₹50L+',
    metricLabel: 'Monthly D2C GMV',
    intentLabel: '✓ SHOPPER INTENT',
    intentText: 'Shoppers compare product quality, reviews, pricing, and shipping reliability across search engines and social platforms.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'High ad spend without optimized conversion funnels leads to cart abandonment and unsustainable customer acquisition costs.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Performance marketing on Meta and Google, fast e-commerce landing pages, abandoned cart WhatsApp recovery, and retention funnels.',
    services: ['Google Shopping / PMax', 'Meta Catalog Ads', 'Conversion Optimization', 'Abandoned Cart Recovery', 'Retention Marketing'],
    playbook: {
      bottlenecks: [
        'High ad spend without optimized conversion funnels leads to cart abandonment and unsustainable customer acquisition costs.',
      ],
      solutions: [
        'Performance marketing on Meta and Google, fast e-commerce landing pages, abandoned cart WhatsApp recovery, and retention funnels.',
      ],
      funnelSteps: [
        { title: 'Google Shopping & Meta Catalog', desc: 'Sync product feeds to high-intent searchers and lookalike audiences across India.' },
        { title: 'Sub-Second Checkout Flow', desc: 'Frictionless Next.js checkout with 1-click UPI and pin-code delivery check.' },
        { title: 'WhatsApp Cart Recovery', desc: '3-stage automated reminder sequence recovering over 30% of abandoned carts.' },
      ],
      benchmarks: [
        { label: 'Blended ROAS', val: '6.4X' },
        { label: 'Cart Recovery Rate', val: '32.8%' },
        { label: 'Customer Repurchase Rate', val: '38.4%' },
      ],
      clientAnchor: 'Divine Fresh & Utkal Handlooms',
      clientLocation: 'Bhubaneswar & Pan-India',
    },
  },
  {
    id: 'beauty-wellness',
    num: '07',
    title: 'Beauty, Wellness & Fitness',
    shortTitle: 'Beauty & Fitness',
    category: 'LOCAL APPOINTMENTS & RETENTION',
    tagline: 'Generate qualified appointments and enquiries for salons, skin clinics, wellness centres, gyms, fitness studios, and personal care brands.',
    desc: 'Generate qualified appointments and enquiries for salons, skin clinics, wellness centres, gyms, fitness studios, and personal care brands.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80',
    color: '#8B5CF6',
    accentBg: 'rgba(139, 92, 246, 0.08)',
    badge: '280+ MONTHLY SESSIONS',
    metric: '280+',
    metricLabel: 'Monthly Bookings',
    intentLabel: '✓ SERVICE-BASED SEARCH INTENT',
    intentText: 'Customers research services, reviews, pricing, expertise, results, and locations before choosing a provider.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'Promotional social media posts can create visibility without consistently reaching people who are ready to book.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Service-specific SEO, Google Search Ads, Meta campaigns, local SEO, educational content, social proof, and retargeting funnels.',
    services: ['Local SEO', 'Google Ads', 'Meta Ads', 'Service Pages', 'Content Marketing', 'Retargeting'],
    playbook: {
      bottlenecks: [
        'Promotional social media posts can create visibility without consistently reaching people who are ready to book.',
      ],
      solutions: [
        'Service-specific SEO, Google Search Ads, Meta campaigns, local SEO, educational content, social proof, and retargeting funnels.',
      ],
      funnelSteps: [
        { title: 'Hyperlocal Intent Campaigns', desc: 'Target local residents within 5km searching for premium salons and wellness treatments.' },
        { title: 'Transformation Proof Showcase', desc: 'Before/after client results and specialist credentials highlighting safety and excellence.' },
        { title: '1-Click Slot Reservation', desc: 'Direct WhatsApp appointment booking with automated reminders to eliminate no-shows.' },
      ],
      benchmarks: [
        { label: 'Booking Confirmation Rate', val: '42%' },
        { label: 'Average Client LTV', val: '₹18,500' },
        { label: 'No-Show Reduction', val: '-70%' },
      ],
      clientAnchor: 'GlowAura Skin & Wellness Studio',
      clientLocation: 'Saheed Nagar & Patia, Bhubaneswar',
    },
  },
  {
    id: 'finance-fintech',
    num: '08',
    title: 'Finance, Insurance & FinTech',
    shortTitle: 'Finance & FinTech',
    category: 'HIGH-CONSIDERATION ADVISORY',
    tagline: 'Build digital visibility and qualified enquiries for financial services, insurance providers, fintech platforms, and financial advisory businesses.',
    desc: 'Build digital visibility and qualified enquiries for financial services, insurance providers, fintech platforms, and financial advisory businesses.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    color: '#0F766E',
    accentBg: 'rgba(15, 118, 110, 0.08)',
    badge: 'QUALIFIED LEAD FUNNEL',
    metric: '55+',
    metricLabel: 'Advisory Leads / Mo',
    intentLabel: '✓ HIGH-CONSIDERATION SEARCH',
    intentText: 'Customers research financial products, insurance policies, loans, investment services, and financial solutions before contacting a provider.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'Trust is critical in financial decisions, making generic promotional marketing less effective for differentiated customer acquisition.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Search-led content, SEO, compliant paid campaigns, educational resources, landing pages, and lead qualification funnels.',
    services: ['SEO', 'Google Search Ads', 'Educational Content', 'Landing Pages', 'Lead Generation'],
    playbook: {
      bottlenecks: [
        'Trust is critical in financial decisions, making generic promotional marketing less effective for differentiated customer acquisition.',
      ],
      solutions: [
        'Search-led content, SEO, compliant paid campaigns, educational resources, landing pages, and lead qualification funnels.',
      ],
      funnelSteps: [
        { title: 'High-Intent Financial Search', desc: 'Capture business owners and families searching for wealth planning, insurance, and SME loans.' },
        { title: 'Educational Calculator Landers', desc: 'Interactive ROI, SIP, and loan calculators that provide value before lead capture.' },
        { title: 'Qualified Advisory Callback', desc: 'Automated CRM routing to senior wealth managers within 10 minutes of submission.' },
      ],
      benchmarks: [
        { label: 'Lead Verification Rate', val: '94%' },
        { label: 'Advisory Conversion', val: '24.5%' },
        { label: 'Average Client Portfolio', val: '₹45L+' },
      ],
      clientAnchor: 'CapitalEdge Financial Advisors',
      clientLocation: 'Janpath & Infocity Corridor, Bhubaneswar',
    },
  },
  {
    id: 'retail-local',
    num: '09',
    title: 'Retail & Local Businesses',
    shortTitle: 'Retail & Local',
    category: 'STORE FOOTFALL & LOCAL DOMINANCE',
    tagline: 'Increase in-store footfall, local inquiries, and repeat walk-ins for retail stores, showrooms, and local commercial establishments across target markets in India.',
    desc: 'Increase in-store footfall, local inquiries, and repeat walk-ins for retail stores, showrooms, and local commercial establishments across target markets in India.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
    color: '#EA580C',
    accentBg: 'rgba(234, 88, 12, 0.08)',
    badge: 'HYPERLOCAL STORE REACH',
    metric: '+185%',
    metricLabel: 'In-Store Footfall',
    intentLabel: '✓ LOCAL SHOPPER INTENT',
    intentText: 'Customers search for nearby stores, product availability, opening hours, and customer reviews before visiting in person.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'Relying only on physical foot traffic and traditional hoardings limits discovery against competitors actively dominating local search.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Hyperlocal SEO, Google Maps optimization, geo-fenced local ads, seasonal promotional campaigns, and customer review acceleration.',
    services: ['Local SEO & GBP', 'Geo-Fenced Ads', 'Google Maps 3-Pack', 'Seasonal Campaigns', 'Review Acceleration'],
    playbook: {
      bottlenecks: [
        'Relying only on physical foot traffic and traditional hoardings limits discovery against competitors actively dominating local search.',
      ],
      solutions: [
        'Hyperlocal SEO, Google Maps optimization, geo-fenced local ads, seasonal promotional campaigns, and customer review acceleration.',
      ],
      funnelSteps: [
        { title: 'Google Maps 3-Pack Rank', desc: 'Rank at the top when local shoppers search for products and stores near them.' },
        { title: 'Geo-Fenced Store Ads', desc: 'Serve exclusive promotional offers to high-intent shoppers within 10km radius.' },
        { title: 'Repeat Walk-In Retargeting', desc: 'WhatsApp VIP loyalty campaigns announcing seasonal collections and discounts.' },
      ],
      benchmarks: [
        { label: 'Store Footfall Lift', val: '+185%' },
        { label: 'Review Velocity Growth', val: '4.8★ Avg' },
        { label: 'Direction Requests', val: '1,200+/Mo' },
      ],
      clientAnchor: 'Odisha Retail Hub & Lifestyle Mart',
      clientLocation: 'Janpath & Saheed Nagar, Bhubaneswar',
    },
  },
  {
    id: 'travel-tourism',
    num: '10',
    title: 'Travel & Tourism',
    shortTitle: 'Travel & Tourism',
    category: 'DESTINATION MARKETING & PACKAGES',
    tagline: 'Capture high-value leisure and pilgrimage travel demand for tour operators, travel agencies, and experiential tourism in Odisha.',
    desc: 'Capture high-value leisure and pilgrimage travel demand for tour operators, travel agencies, and experiential tourism in Odisha.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
    color: '#0891B2',
    accentBg: 'rgba(8, 145, 178, 0.08)',
    badge: 'PREMIUM TOUR BOOKINGS',
    metric: '+210%',
    metricLabel: 'Inbound Tour Inquiries',
    intentLabel: '✓ TRAVELER INTENT',
    intentText: 'Tourists and pilgrims research itineraries, temple tours, Puri-Konark circuits, Chilika experiences, and travel packages well in advance.',
    bottleneckLabel: '⚠️ BOTTLENECK',
    bottleneckText: 'Over-reliance on offline agents and OTA portals reduces profit margins and dilutes direct brand identity.',
    approachLabel: '⚡ OUR APPROACH',
    approachText: 'Destination SEO, high-intent Google Search campaigns, itinerary landing pages, content marketing, and inquiry-to-booking WhatsApp funnels.',
    services: ['Destination SEO', 'Google Search Ads', 'Itinerary Landing Pages', 'Social Media', 'Lead Nurturing Funnels'],
    playbook: {
      bottlenecks: [
        'Over-reliance on offline agents and OTA portals reduces profit margins and dilutes direct brand identity.',
      ],
      solutions: [
        'Destination SEO, high-intent Google Search campaigns, itinerary landing pages, content marketing, and inquiry-to-booking WhatsApp funnels.',
      ],
      funnelSteps: [
        { title: 'Destination Intent SEO', desc: 'Rank for high-ticket searches like "Odisha Golden Triangle Tour" and "Puri Temple Packages".' },
        { title: 'Interactive Itinerary Landers', desc: 'Detailed day-by-day itineraries with verified traveler reviews and transparent pricing.' },
        { title: 'Direct WhatsApp Concierge', desc: 'Instant customized quote creation and travel coordinator handover.' },
      ],
      benchmarks: [
        { label: 'Direct Package Bookings', val: '+210%' },
        { label: 'Booking Margin Lift', val: '+35%' },
        { label: 'Inquiry Response Time', val: '< 5 Mins' },
      ],
      clientAnchor: 'Odisha Trails & Heritage Journeys',
      clientLocation: 'Bhubaneswar, Puri & Konark Circuit',
    },
  },
];
