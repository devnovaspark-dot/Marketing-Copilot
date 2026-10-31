import { PortableText, PortableTextComponents, toPlainText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/image';
import BlogTable from '@/components/BlogTable';
import BlogCarousel from '@/components/BlogCarousel';
import BlogYouTubeVideo, { extractYouTubeId } from '@/components/BlogYouTubeVideo';
import BlogImageZoom from '@/components/BlogImageZoom';
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
    normal: ({ children, value }) => {
      const text = extractTextFromBlock(value, children);
      const trimmed = (text || '').trim();
      const isSoloUrl =
        (trimmed.startsWith('https://') ||
          trimmed.startsWith('http://') ||
          trimmed.startsWith('www.') ||
          trimmed.startsWith('youtu.be/')) &&
        !trimmed.includes(' ') &&
        Boolean(extractYouTubeId(trimmed));

      if (isSoloUrl) {
        return <BlogYouTubeVideo url={trimmed} />;
      }

      // If the paragraph contains only a standalone YouTube link annotation
      if (
        value?.markDefs &&
        Array.isArray(value.markDefs) &&
        value.markDefs.length === 1 &&
        value?.children?.length === 1
      ) {
        const mark = value.markDefs[0] as any;
        if (mark?._type === 'link' && typeof mark?.href === 'string' && extractYouTubeId(mark.href)) {
          if (trimmed.length < 150) {
            return <BlogYouTubeVideo url={mark.href} />;
          }
        }
      }

      return <p>{children}</p>;
    },
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
        : urlForImage(value)?.width(1400).auto('format').fit('max').url();
      const highResUrl = isGif
        ? imageUrl
        : urlForImage(value)?.width(2800).auto('format').fit('max').url() || imageUrl;

      if (!imageUrl) return null;

      return (
        <BlogImageZoom
          src={imageUrl}
          highResSrc={highResUrl}
          alt={value.alt || 'Marketing Copilot strategic illustration'}
          caption={value.caption}
          unoptimized={isGif}
        />
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
        <BlogImageZoom
          src={src}
          highResSrc={src}
          alt={alt}
          caption={value.caption}
          unoptimized={true}
        />
      );
    },
    table: ({ value }: { value: any }) => <BlogTable value={value} />,
    tableBlock: ({ value }: { value: any }) => <BlogTable value={value} />,
    carousel: ({ value }: { value: any }) => <BlogCarousel value={value} />,
    carouselBlock: ({ value }: { value: any }) => <BlogCarousel value={value} />,
    youtube: ({ value }: { value: any }) => <BlogYouTubeVideo value={value} />,
    youtubeVideo: ({ value }: { value: any }) => <BlogYouTubeVideo value={value} />,
  },
  marks: {
    link: ({ children, value }) => {
      const rawHref = (value?.href || '').trim();
      // If href is empty, '#', or 'about:blank', render text normally without a broken link
      if (!rawHref || rawHref === 'about:blank' || rawHref === '#') {
        return <span>{children}</span>;
      }
      const href = rawHref.startsWith('www.') ? `https://${rawHref}` : rawHref;
      const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined;
      const target = value?.blank || !href.startsWith('/') ? '_blank' : undefined;
      return (
        <Link href={href} target={target} rel={rel}>
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
