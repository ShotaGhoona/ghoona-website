import { fetchArticle, generateNewsContentParams } from '@/feature/news/service/newsContentFetch';
import Article from '@/feature/news/id/article';
import TopviewSection from '@/feature/news/id/topview';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const params = await generateNewsContentParams();
  return params;
}

type PageProps = {
  params: {
    id: string;
  };
};

export default async function NewsArticle({ params }: PageProps) {
  const { page, blocks } = await fetchArticle(params.id);

  return (
    <>
      <TopviewSection />
      <Article page={page} blocks={blocks} />
    </>
  );
}
