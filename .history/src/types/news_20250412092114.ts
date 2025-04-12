export type BlogTag = '技術ブログ' | 'メディア' | 'AI';

export interface NewsListCardProps {
  thumbnail: string;
  tag: BlogTag;
  date: string;
  title: string;
  href: string;
}
export const tagColors: Record<BlogTag, string> = {
  '技術ブログ': '#d5697e',
  'メディア': '[#3f77a4]',
  'AI': '[#698f75]',
};
