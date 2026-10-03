import { defineArrayMember, defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description:
        'SEO title tag shown in Google search results (~60 characters max). If left empty, the post Title is used instead.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Meta description for SEO (~155 chars max)',
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description:
        'Keywords for internal reference and SEO tracking.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines (noindex, nofollow)',
      type: 'boolean',
      initialValue: false,
      description:
        'Turn ON to keep this specific post out of Google search results and stop links on it from being followed. Leave OFF (default) for normal posts you want indexed.',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Key Takeaways',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description:
        'Executive bullet points summarizing the core value points of this article for readers and featured snippets.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [defineArrayMember({ type: 'faqItem' })],
      description:
        'Interactive Q&A items rendered as an accordion and automatically injected into Google FAQPage Schema.',
    }),
    defineField({
      name: 'pillarPost',
      title: 'Pillar Post (Topic Cluster linking)',
      type: 'reference',
      to: [{ type: 'post' }],
      description: 'Optional reference to a pillar post for topic-cluster linking.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'bannerImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { author, publishedAt } = selection;
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : '';
      return {
        ...selection,
        subtitle: author ? `by ${author} ${date ? `• ${date}` : ''}` : date,
      };
    },
  },
});
