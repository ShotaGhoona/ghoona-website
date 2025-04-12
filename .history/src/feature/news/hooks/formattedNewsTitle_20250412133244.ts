/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormattedBlog } from '@/types/news';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export function formattedBlogs(blogsData: PageObjectResponse[]): FormattedBlog[] {
  return blogsData.map((blog) => ({
    id: blog.id.slice(0, 6), // 短縮化（推奨）
    thumbnail: (blog.properties['サムネイル'] as any).files[0]?.file.url || '',
    tag: ((blog.properties['タグ'] as any).select.name) as '技術ブログ' | 'メディア' | 'AI',
    date: (blog.properties['投稿日'] as any).date.start,
    title: (blog.properties['ブログ名'] as any).title[0].plain_text,
    href: `/news/${blog.id}`,
  }));
}
