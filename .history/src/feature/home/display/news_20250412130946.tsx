import SectionTitle from '@/components/common/SectionTitle';
import NewsListCard from '@/components/common/NewsListCard';
import Link from 'next/link';
import { formattedBlogs } from '@/feature/news/hooks/formattedNewsTitle';
import { fetchNewsTitle } from '@/feature/news/service/newsTitleFetch';

// blogsDataはpropsではなく内部で取得します
export default async function NewsSection() {
  const blogsData = await fetchNewsTitle();

  const formattedData = formattedBlogs(blogsData).slice(0, 3);

  return (
    <section
      id="news"
      className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-10 md:py-20 bg-gradient-to-t from-transparent via-[#3f77a455] to-transparent"
    >
      <SectionTitle title="News" />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedData.map((item) => (
          <NewsListCard key={item.href} {...item} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link href="/news" className="relative py-2 text-gray-700 hover:text-gray-900">
          <span className="block absolute top-0 left-1/2 -translate-x-1/2 w-[200px] border-t border-gray-400"></span>
          <span className="block absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] border-b border-gray-400"></span>
          <span className="relative">他の記事</span>
        </Link>
      </div>
    </section>
  );
}
