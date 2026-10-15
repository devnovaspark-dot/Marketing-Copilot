import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  verification: {
    google: '5D3X40W6rfGnfD9IlLM8_VrqEc5qRHBROY1_WrByEBs',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google tag (gtag.js) - Sanity Blog */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M1GN7S1F28"
        strategy="afterInteractive"
      />
      <Script id="sanity-blog-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M1GN7S1F28');
        `}
      </Script>
      {children}
    </>
  );
}
