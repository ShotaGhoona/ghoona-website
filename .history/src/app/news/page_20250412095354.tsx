import NewsList from '@/feature/news/newslist';
import TopviewSection from '@/feature/news/topview';
import { fetchNewsTitle, revalidate } from '@/feature/news/service/newsTitleFetch';

export { revalidate };

export default async function NewsPage() {
  const blogsData = await fetchNewsTitle();
  return (
    <>
      <TopviewSection />
      <NewsList blogsData={blogsData} />
    </>
  );
}
