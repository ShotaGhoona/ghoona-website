import { useMemo } from 'react';
import type { NewsListCardProps, BlogTag } from '@/types/news';

type RawBlogData = any; // 必要に応じて具体的な型に変更してください

export const useFormattedBlogs = (blogsData: RawBlogData[]): NewsListCardProps[] => {
  const formattedBlogs = useMemo(
    () =>
      blogsData.map((blog): NewsListCardProps => ({
        thumbnail: blog.properties['サムネイル'].files[0]?.file.url || '',
        tag: blog.properties['タグ'].select.name as BlogTag,
        date: blog.properties['投稿日'].date.start,
        title: blog.properties['ブログ名'].title[0].plain_text,
        href: `/news/${blog.id}`,
      })),
    [blogsData]
  );

  return formattedBlogs;
};
