export interface LinkPreviewData {
  url: string;
  domain: string;
  title: string | null;
  description: string | null;
  image: string | null;
  siteName: string | null;
  favicon: string;
}

function cleanHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

export function extractMetadata(html: string, targetUrl: string): Omit<LinkPreviewData, 'url' | 'domain' | 'favicon'> {
  const getTag = (prop: string): string | null => {
    // Matches: <meta property="og:title" content="..." /> or <meta name="og:title" content="..." />
    // Also matches inverted: <meta content="..." property="og:title" />
    const pattern1 = new RegExp(
      `<meta[^>]+(?:property|name)=["']${prop}["'][^>]+content=["']([^"']+)["']`,
      'i'
    );
    const pattern2 = new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${prop}["']`,
      'i'
    );
    const match = html.match(pattern1) || html.match(pattern2);
    return match ? cleanHtmlEntities(match[1]) : null;
  };

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const rawTitle =
    getTag('og:title') ||
    getTag('twitter:title') ||
    (titleMatch ? cleanHtmlEntities(titleMatch[1]) : null);

  const rawDescription =
    getTag('og:description') ||
    getTag('twitter:description') ||
    getTag('description');

  let rawImage = getTag('og:image') || getTag('twitter:image');
  if (rawImage && !rawImage.startsWith('http')) {
    try {
      rawImage = new URL(rawImage, targetUrl).toString();
    } catch {
      rawImage = null;
    }
  }

  const rawSiteName = getTag('og:site_name');

  return {
    title: rawTitle ? rawTitle.slice(0, 120) : null,
    description: rawDescription ? rawDescription.slice(0, 220) : null,
    image: rawImage || null,
    siteName: rawSiteName || null,
  };
}
