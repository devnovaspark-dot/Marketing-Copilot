import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marketingcopilot.in"),
  verification: {
    google: "79f0bLLJO5DmUzDFyrPHZ1vouQGfmYsHB5NZ594DHww",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: {
    default: "Digital Marketing Company in India | Marketing Copilot",
    template: "%s | Marketing Copilot"
  },
  description: "Top-rated digital marketing agency in India. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for businesses across India.",
  keywords: [
    "Digital Marketing company in India",
    "Marketing Copilot",
    "Marketing Copilot India",
    "Digital Marketing Services",
    "Online marketing Services",
    "Digital Marketing Agency",
    "Digital Marketing Solutions",
    "Best Digital Marketing Agency in India",
    "SEO India",
    "Performance Marketing",
    "Social Media Marketing",
    "Bhubaneswar"
  ],
  authors: [{ name: "Marketing Copilot" }],
  openGraph: {
    title: "Digital Marketing Company in India | Marketing Copilot",
    description: "Top-rated digital marketing agency in India. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for businesses across India.",
    url: "https://marketingcopilot.in/",
    siteName: "Marketing Copilot Digital Marketing Agency",
    type: "website",
    images: [
      {
        url: "/images/marketing-copilot-logo.png",
        width: 1200,
        height: 630,
        alt: "Marketing Copilot Digital Marketing Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in India | Marketing Copilot",
    description: "Top-rated digital marketing agency in India. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for businesses across India.",
    images: ["/images/marketing-copilot-logo.png"]
  },
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: ['/icon.png'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://marketingcopilot.in/#website",
  "url": "https://marketingcopilot.in/",
  "name": "Marketing Copilot",
  "description": "Digital Marketing Company in India offering SEO, Google Ads, Meta Ads, social media marketing and digital marketing solutions.",
  "publisher": {
    "@id": "https://marketingcopilot.in/#organization"
  },
  "inLanguage": "en-IN"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://marketingcopilot.in/#organization",
      "name": "Marketing Copilot",
      "url": "https://marketingcopilot.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marketingcopilot.in/images/marketing-copilot-logo.png"
      },
      "description": "Marketing Copilot is a digital marketing company in India providing SEO, Google Ads, Meta Ads, social media marketing, web solutions, creative services and AI-powered digital marketing solutions.",
      "telephone": "+91 8280788689",
      "email": "connect@novasparkdigitalmarketingagency.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mallick Complex, Unit 3, Kharvela Nagar",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "751001",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://marketingcopilot.in/#localbusiness",
      "name": "Marketing Copilot",
      "url": "https://marketingcopilot.in/",
      "image": "https://marketingcopilot.in/images/marketing-copilot-brand.png",
      "logo": "https://marketingcopilot.in/images/marketing-copilot-logo.png",
      "description": "Digital marketing company in India offering SEO, Google Ads, Meta Ads, social media marketing, web solutions, creative services and AI-powered marketing solutions.",
      "telephone": "+91 8280788689",
      "email": "connect@novasparkdigitalmarketingagency.com",
      "parentOrganization": {
        "@id": "https://marketingcopilot.in/#organization"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mallick Complex, Unit 3, Kharvela Nagar",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "751001",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:30",
          "closes": "19:30"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Bhubaneswar"
        },
        {
          "@type": "State",
          "name": "Odisha"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "knowsAbout": [
        "Digital Marketing",
        "Search Engine Optimization",
        "Local SEO",
        "Google Ads",
        "Meta Ads",
        "Social Media Marketing",
        "Content Marketing",
        "Web Development",
        "AI Marketing",
        "Digital Advertising"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://marketingcopilot.in/#website",
      "url": "https://marketingcopilot.in/",
      "name": "Marketing Copilot",
      "description": "Digital Marketing Company in India",
      "publisher": {
        "@id": "https://marketingcopilot.in/#organization"
      },
      "inLanguage": "en-IN"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://marketingcopilot.in/#localbusiness",
  "name": "Marketing Copilot",
  "url": "https://marketingcopilot.in/",
  "logo": "https://marketingcopilot.in/images/marketing-copilot-logo.png",
  "image": "https://marketingcopilot.in/images/marketing-copilot-brand.png",
  "description": "Marketing Copilot is a digital marketing company in India providing SEO, Google Ads, Meta Ads, social media marketing, web solutions, creative services and AI-powered digital marketing solutions.",
  "telephone": "+91 8280788689",
  "email": "connect@novasparkdigitalmarketingagency.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mallick Complex, Unit 3, Kharvela Nagar",
    "addressLocality": "Bhubaneswar",
    "addressRegion": "Odisha",
    "postalCode": "751001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "20.2961",
    "longitude": "85.8245"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "19:30"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Bhubaneswar"
    },
    {
      "@type": "State",
      "name": "Odisha"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/share/19cD1qU1cV/",
    "https://www.instagram.com/nsdigitalmarketing.agency?stkn=aWZpOWwzZWdzcG1j",
    "https://www.linkedin.com/company/nova-spark-digital-marketing-agency/"
  ],
  "knowsAbout": [
    "Digital Marketing",
    "Search Engine Optimization",
    "Local SEO",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Content Marketing",
    "Web Development",
    "AI Marketing",
    "Digital Advertising"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5V4M4RFK');`,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="google-site-verification" content="79f0bLLJO5DmUzDFyrPHZ1vouQGfmYsHB5NZ594DHww" />
        <link rel="describedby" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5V4M4RFK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
