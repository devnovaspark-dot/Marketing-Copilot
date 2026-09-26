import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://marketingcopilot.in"),
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  title: {
    default: "Digital Marketing Company in Bhubaneswar | Marketing Copilot",
    template: "%s | Marketing Copilot"
  },
  description: "Bhubaneswar's premier digital marketing agency. From SEO, Google Ads, Meta Ads to web development & high-converting content, Marketing Copilot scales your revenue.",
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
    description: "Bhubaneswar's premier digital marketing agency. We engineer compounding search rankings, paid ads ROI, and modern websites for brands across Odisha.",
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
    description: "Bhubaneswar's premier digital marketing agency. Scale your business with Marketing Copilot.",
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
    canonical: 'https://marketingcopilot.in/digital-marketing-company-in-bhubaneswar',
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Marketing Copilot — Digital Marketing Agency",
  "image": "/images/marketing-copilot-logo.png",
  "@id": "https://marketingcopilot.in",
  "url": "https://marketingcopilot.in/",
  "telephone": "+91 82807 88689",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Growth Lab: Mallick Complex, Unit 3, Kharvela Nagar,",
    "addressLocality": "Bhubaneswar",
    "postalCode": "751001",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
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
    "closes": "18:30"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://marketingcopilot.in/digital-marketing-company-in-bhubaneswar" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
