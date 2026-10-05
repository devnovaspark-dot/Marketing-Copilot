import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export const isSanityConfigured = Boolean(
  projectId && projectId !== 'demo-project-id'
);

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to ensure newly published posts appear immediately without CDN caching lag
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 0,
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  revalidate?: number | false;
  tags?: string[];
}): Promise<QueryResponse | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    const fetchOptions: any = {};
    if (revalidate === 0) {
      fetchOptions.cache = 'no-store';
    } else {
      fetchOptions.next = {
        revalidate: tags.length ? false : revalidate,
        tags,
      };
    }

    return await client.fetch<QueryResponse>(query, params, fetchOptions);
  } catch (error) {
    console.warn('Failed to fetch from Sanity:', error);
    return null;
  }
}
