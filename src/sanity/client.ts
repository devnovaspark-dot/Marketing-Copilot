import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'demo-project-id'
);

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
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
    return await client.fetch<QueryResponse>(query, params, {
      next: {
        revalidate: tags.length ? false : revalidate,
        tags,
      },
    });
  } catch (error) {
    console.warn('Failed to fetch from Sanity:', error);
    return null;
  }
}
