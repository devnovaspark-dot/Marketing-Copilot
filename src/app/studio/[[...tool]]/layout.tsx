import type { Metadata, Viewport } from 'next';
import { metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio';

export const metadata: Metadata = {
  ...studioMetadata,
  title: 'Marketing Copilot — Content Studio',
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  ...studioViewport,
  interactiveWidget: 'resizes-content',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, overflow: 'auto', background: '#FFFFFF' }}>
      {children}
    </div>
  );
}
