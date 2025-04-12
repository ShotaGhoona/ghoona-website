import { fetchArticle, revalidate, generateNewsContentParams } from '@/feature/news/service/newsContentFetch';
import Article from '@/feature/news/id/article';
import TopviewSection from '@/feature/news/id/topview';

export { revalidate };
export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const params = await generateNewsContentParams();
  return params;
}

// ↓↓↓ 修正ポイントここです ↓↓↓
export default async function NewsArticle({ params }: { params: { id: string } }) {
  const { id } = await params; // これを追加
  const { page, blocks } = await fetchArticle(id); // idを利用する
  return (
    <>
      <TopviewSection />
      <Article page={page} blocks={blocks} />
    </>
  );
}
