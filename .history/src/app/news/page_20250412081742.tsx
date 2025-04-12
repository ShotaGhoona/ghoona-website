import NewsList from '@/feature/news/newslist';
import TopviewSection from '@/feature/news/topview';
import { getDatabase } from '@/lib/notion';

// ISRを用いて静的生成＆再生成
export const revalidate = 60; // 60秒毎に再生成

export default async function NewsPage() {
  const blogsData = await getDatabase(); // Notionから取得

  return (
    <>
      <TopviewSection />
      <NewsList blogsData={blogsData} />
    </>
  );
}
