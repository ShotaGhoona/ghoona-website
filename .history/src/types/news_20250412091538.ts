export type BlogTag = '技術ブログ' | 'メディア' | 'AI';

export interface NewsListCardProps {
  thumbnail: string;
  tag: BlogTag;
  date: string;
  title: string;
  href: string;
}
