import { defineCollection, z } from 'astro:content';

// ブログのコンテンツコレクション。lp-manager がここ（src/content/blog/）へ
// Markdown を書き出す前提。frontmatter の揺れに強いよう title 以外は任意にし、
// 未知キーはそのまま無視される（zod 非 strict）。
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
