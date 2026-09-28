import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

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
    default: "Digital Marketing Company in Bhubaneswar | Marketing Copilot",
    template: "%s | Marketing Copilot"
  },
  description: "Top-rated digital marketing agency in Bhubaneswar. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for Bhubaneswar businesses.",
  keywords: [
    "Digital Marketing company in Bhubaneswar",
    "Marketing Copilot",
    "Marketing Copilot Bhubaneswar",
    "Digital Marketing Services",
    "Online marketing Services",
    "Digital Marketing Agency",
    "Digital Marketing Solutions",
    "Best Digital Marketing Agency in Bhubaneswar",
    "SEO Bhubaneswar",
    "Performance Marketing",
    "Social Media Marketing",
    "Bhubaneswar"
  ],
  authors: [{ name: "Marketing Copilot" }],
  openGraph: {
    title: "Digital Marketing Company in Bhubaneswar | Marketing Copilot",
    description: "Top-rated digital marketing agency in Bhubaneswar. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for Bhubaneswar businesses.",
    url: "https://marketingcopilot.in/",
    siteName: "Marketing Copilot Digital Marketing Agency",
    type: "website",
    images: [
      {
        url: "/images/marketing-copilot-logo.png",
        width: 1200,
        height: 630,
        alt: "Marketing Copilot Digital Marketing Agency Bhubaneswar"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Bhubaneswar | Marketing Copilot",
    description: "Top-rated digital marketing agency in Bhubaneswar. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for Bhubaneswar businesses.",
    images: ["/images/marketing-copilot-logo.png"]
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: ['/icon.png'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  alternates: {
    canonical: 'https://marketingcopilot.in/',
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://marketingcopilot.in/#website",
  "url": "https://marketingcopilot.in/",
  "name": "Marketing Copilot",
  "description": "Digital Marketing Company in Bhubaneswar offering SEO, Google Ads, Meta Ads, social media marketing and digital marketing solutions.",
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
      "description": "Marketing Copilot is a digital marketing company in Bhubaneswar providing SEO, Google Ads, Meta Ads, social media marketing, web solutions, creative services and AI-powered digital marketing solutions.",
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
      "description": "Digital marketing company in Bhubaneswar offering SEO, Google Ads, Meta Ads, social media marketing, web solutions, creative services and AI-powered marketing solutions.",
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
      "description": "Digital Marketing Company in Bhubaneswar",
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
  "description": "Marketing Copilot is a digital marketing company in Bhubaneswar providing SEO, Google Ads, Meta Ads, social media marketing, web solutions, creative services and AI-powered digital marketing solutions.",
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
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="79f0bLLJO5DmUzDFyrPHZ1vouQGfmYsHB5NZ594DHww" />
        <link rel="canonical" href="https://marketingcopilot.in/digital-marketing-company-in-bhubaneswar" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
