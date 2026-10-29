import { PortableText, PortableTextComponents, toPlainText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/image';
import BlogTable from '@/components/BlogTable';
import BlogCarousel from '@/components/BlogCarousel';
import styles from './PortableTextRenderer.module.css';

export function slugifyHeading(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export function extractTextFromBlock(value: any, children: any): string {
  if (value) {
    try {
      const plain = toPlainText(value);
      if (plain && plain.trim()) return plain.trim();
    } catch {
      // fallback below
    }
    if (Array.isArray(value.children)) {
      const text = value.children.map((c: any) => c.text || '').join('').trim();
      if (text) return text;
    }
  }
  if (typeof children === 'string') return children.trim();
  if (Array.isArray(children)) {
    const str = children
      .map((c: any) => (typeof c === 'string' ? c : c?.props?.text || ''))
      .join('')
      .trim();
    if (str) return str;
  }
  return '';
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const text = extractTextFromBlock(value, children);
      const id = slugifyHeading(text);
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children, value }) => {
      const text = extractTextFromBlock(value, children);
      const id = slugifyHeading(text);
      return <h3 id={id}>{children}</h3>;
    },
    h4: ({ children, value }) => {
      const text = extractTextFromBlock(value, children);
      const id = slugifyHeading(text);
      return <h4 id={id}>{children}</h4>;
    },
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      const isGif = value.asset._ref.endsWith('-gif') || value.asset._ref.includes('-gif');
      // For animated GIFs, do not apply auto('format') or resizing which freezes frames
      const imageUrl = isGif
        ? urlForImage(value)?.url()
        : urlForImage(value)?.width(1200).auto('format').fit('max').url();
      if (!imageUrl) return null;

      return (
        <figure className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src={imageUrl}
              alt={value.alt || 'Marketing Copilot strategic illustration'}
              width={1200}
              height={675}
              unoptimized={isGif}
              sizes="(max-width: 768px) 100vw, 840px"
              className={styles.embeddedImage}
            />
          </div>
          {value.caption && (
            <figcaption className={styles.imageCaption}>
              <span className={styles.captionDot} />
              <span>{value.caption}</span>
            </figcaption>
          )}
        </figure>
      );
    },
    gif: ({ value }: { value: any }) => {
      let src = '';
      if (value?.gifFile?.asset?._ref) {
        src = urlForImage(value.gifFile)?.url() || '';
      } else if (value?.externalUrl) {
        src = value.externalUrl;
      } else if (value?.asset?._ref) {
        src = urlForImage(value)?.url() || '';
      }

      if (!src) return null;

      const alt = value.alt || value.caption || 'Marketing Copilot Animated GIF';

      return (
        <figure className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            {/* If external URL, render native img to support any CDN without domain restrictions */}
            {src.startsWith('http') && !src.includes('cdn.sanity.io') ? (
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className={styles.embeddedImage}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            ) : (
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={675}
                unoptimized
                className={styles.embeddedImage}
              />
            )}
          </div>
          {value.caption && (
            <figcaption className={styles.imageCaption}>
              <span className={styles.captionDot} />
              <span>{value.caption}</span>
            </figcaption>
          )}
        </figure>
      );
    },
    table: ({ value }: { value: any }) => <BlogTable value={value} />,
    tableBlock: ({ value }: { value: any }) => <BlogTable value={value} />,
    carousel: ({ value }: { value: any }) => <BlogCarousel value={value} />,
    carouselBlock: ({ value }: { value: any }) => <BlogCarousel value={value} />,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      const target = value.blank || !value.href.startsWith('/') ? '_blank' : undefined;
      return (
        <Link href={value.href} target={target} rel={rel}>
          {children}
        </Link>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return (
    <div className={styles.portableText}>
      <PortableText value={value} components={components} />
    </div>
  );
}
