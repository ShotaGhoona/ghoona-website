import NewsList from '@/feature/news/newslist';
import TopviewSection from '@/feature/news/topview';
import { fetchNews, revalidate } from '@/feature/news/service/newsTitleFetch';

export { revalidate }; // feature側からexportしたrevalidateを再exportする

export default async function NewsPage() {
  const blogsData = await fetchNews();
  return (
    <>
      <TopviewSection />
      <NewsList blogsData={blogsData} />
    </>
  );
}
