import { FormattedBlog } from '@/types/news';

// ランダムで3桁の数字を返す関数
const generateRandomId = () => Math.floor(Math.random() * 900 + 100).toString();

export function formattedBlogs(blogsData: any[]): FormattedBlog[] {
  return blogsData.map((blog) => ({
    id: generateRandomId(), // ←ランダムな数字に置き換える
    thumbnail: blog.properties['サムネイル'].files[0]?.file.url || '',
    tag: blog.properties['タグ'].select.name as '技術ブログ' | 'メディア' | 'AI',
    date: blog.properties['投稿日'].date.start,
    title: blog.properties['ブログ名'].title[0].plain_text,
    href: `/news/${blog.id}`, // ← hrefは実際のNotionのIDを使用
  }));
}
