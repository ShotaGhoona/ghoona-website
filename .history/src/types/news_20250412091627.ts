export type BlogTag = '技術ブログ' | 'メディア' | 'AI';

export interface NewsListCardProps {
  thumbnail: string;
  tag: BlogTag;
  date: string;
  title: string;
  href: string;
}
export const tagColors: Record<BlogTag, string> = {
  '技術ブログ': 'bg-gray-300',
  'メディア': 'bg-blue-300',
  'AI': 'bg-green-300',
};
