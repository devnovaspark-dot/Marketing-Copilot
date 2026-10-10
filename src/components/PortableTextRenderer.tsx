import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/image';
import BlogTable from '@/components/BlogTable';
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

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => {
      const text = Array.isArray(children) ? children.join('') : String(children || '');
      const id = slugifyHeading(text);
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children }) => {
      const text = Array.isArray(children) ? children.join('') : String(children || '');
      const id = slugifyHeading(text);
      return <h3 id={id}>{children}</h3>;
    },
    h4: ({ children }) => {
      const text = Array.isArray(children) ? children.join('') : String(children || '');
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
      const imageUrl = urlForImage(value)?.width(1200).auto('format').fit('max').url();
      if (!imageUrl) return null;

      return (
        <figure className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src={imageUrl}
              alt={value.alt || 'Marketing Copilot strategic illustration'}
              width={1200}
              height={675}
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
    table: ({ value }: { value: any }) => <BlogTable value={value} />,
    tableBlock: ({ value }: { value: any }) => <BlogTable value={value} />,
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
