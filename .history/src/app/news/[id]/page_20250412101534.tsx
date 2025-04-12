import { fetchArticle, revalidate, generateNewsContentParams } from '@/feature/news/service/newsContentFetch';
import Article from '@/feature/news/id/article';
import TopviewSection from '@/feature/news/id/topview';

export { revalidate };
export const generateStaticParams = generateNewsContentParams;
export const dynamicParams = false; 

export default async function NewsArticle({ params }: { params: { id: string } }) {
  const { page, blocks } = await fetchArticle(params.id);

  return (
    <>
      <TopviewSection />
      <Article page={page} blocks={blocks} />
    </>
  );
}
