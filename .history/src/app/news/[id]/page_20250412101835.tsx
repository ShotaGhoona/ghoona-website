import { fetchArticle, revalidate, generateNewsContentParams } from '@/feature/news/service/newsContentFetch';
import Article from '@/feature/news/id/article';
import TopviewSection from '@/feature/news/id/topview';

export { revalidate };
export const dynamic = 'force-static'; // ←この設定を明示的に追加（必須）
export const dynamicParams = false;

export async function generateStaticParams() {
  const params = await generateNewsContentParams();
  console.log("Generated params at page:", params);
  return params;
}

export default async function NewsArticle({ params }: { params: { id: string } }) {
  const { page, blocks } = await fetchArticle(params.id);
  return (
    <>
      <TopviewSection />
      <Article page={page} blocks={blocks} />
    </>
  );
}
