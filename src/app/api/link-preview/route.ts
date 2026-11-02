import { NextResponse } from 'next/server';
import { extractMetadata, LinkPreviewData } from '@/lib/linkPreviewParser';

export const runtime = 'nodejs';

function isForbiddenHost(hostname: string): boolean {
  const lower = hostname.toLowerCase();
  if (
    lower === 'localhost' ||
    lower.endsWith('.local') ||
    lower.endsWith('.internal') ||
    lower === '127.0.0.1' ||
    lower === '0.0.0.0' ||
    lower === '::1'
  ) {
    return true;
  }
  // Check private IP ranges
  if (/^10\./.test(lower)) return true;
  if (/^192\.168\./.test(lower)) return true;
  if (/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(lower)) return true;
  return false;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = (searchParams.get('url') || '').trim();

  if (!targetUrl) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(targetUrl);
  } catch {
    return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return NextResponse.json({ error: 'Only http and https protocols are supported' }, { status: 400 });
  }

  if (isForbiddenHost(parsed.hostname)) {
    return NextResponse.json({ error: 'Access to private host is forbidden' }, { status: 403 });
  }

  const cleanDomain = parsed.hostname.replace(/^www\./, '');
  const favicon = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(cleanDomain)}&sz=64`;

  const fallbackData: LinkPreviewData = {
    url: parsed.toString(),
    domain: cleanDomain,
    title: null,
    description: null,
    image: null,
    siteName: cleanDomain,
    favicon,
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(parsed.toString(), {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 MarketingCopilotBot/1.0',
        Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      signal: controller.signal,
      redirect: 'follow',
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json(fallbackData, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
      });
    }

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('text/html') && !contentType.includes('application/xhtml')) {
      return NextResponse.json(fallbackData, {
        headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800' },
      });
    }

    // Read only the first 64KB for speed and efficiency
    const reader = res.body?.getReader();
    let html = '';
    if (reader) {
      const decoder = new TextDecoder('utf-8');
      let bytesRead = 0;
      while (bytesRead < 65536) {
        const { done, value } = await reader.read();
        if (done || !value) break;
        html += decoder.decode(value, { stream: true });
        bytesRead += value.length;
        // Stop early if closing head tag is found
        if (html.includes('</head>')) break;
      }
      reader.cancel().catch(() => {});
    } else {
      const text = await res.text();
      html = text.slice(0, 65536);
    }

    const meta = extractMetadata(html, parsed.toString());

    const resultData: LinkPreviewData = {
      url: parsed.toString(),
      domain: cleanDomain,
      title: meta.title,
      description: meta.description,
      image: meta.image,
      siteName: meta.siteName || cleanDomain,
      favicon,
    };

    return NextResponse.json(resultData, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
      },
    });
  } catch {
    // If fetch fails or aborts, return fallback metadata without erroring
    return NextResponse.json(fallbackData, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  }
}
