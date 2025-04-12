export type BlogTag = '技術ブログ' | 'メディア' | 'AI';

export interface NewsListCardProps {
  thumbnail: string;
  tag: BlogTag;
  date: string;
  title: string;
  href: string;
}
export const tagColors: Record<BlogTag, string> = {
  '技術ブログ': 'bg-[#d5697e]',
  'メディア': 'bg-[#3f77a4]',
  'AI': 'bg-[#698f75]',
};

export type FormattedBlog = {
  id: string;
  thumbnail: string;
  tag: '技術ブログ' | 'メディア' | 'AI';
  date: string;
  title: string;
  href: string;
};
