import { groq } from 'next-sanity';

// Query to fetch all published posts for the blog / insights listing
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    metaTitle,
    excerpt,
    publishedAt,
    _createdAt,
    bannerImage,
    "category": category->title,
    "author": {
      "name": author->name,
      "role": author->role,
      "image": author->image
    }
  }
`;

// Query to fetch a single post by slug with all reference and nested data
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    metaTitle,
    excerpt,
    metaKeywords,
    noIndex,
    publishedAt,
    bannerImage,
    keyTakeaways,
    body,
    faqItems[] {
      question,
      answer
    },
    "category": category->title,
    "author": {
      "name": author->name,
      "role": author->role,
      "image": author->image,
      "bio": author->bio
    },
    "pillarPost": pillarPost-> {
      title,
      "slug": slug.current,
      excerpt
    }
  }
`;

// Query to fetch all slugs for generateStaticParams
export const postPathsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;
