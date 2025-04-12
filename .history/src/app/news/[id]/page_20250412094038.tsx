import { fetchArticle, revalidate } from '@/feature/news/service/newsService';
import Article from '@/feature/news/id/article';
import TopviewSection from '@/feature/news/id/topview';
import { getDatabase } from '@/lib/notion';

export { revalidate };

export async function generateStaticParams() {
  const pages = await getDatabase();
  return pages.map((page) => ({ id: page.id }));
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
