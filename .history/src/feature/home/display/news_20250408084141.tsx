import SectionTitle from '@/components/common/SectionTitle';
import NewsListCard from '@/components/common/NewsListCard';
import Link from 'next/link';
import blogsData from '@/data/blogs.json';

export default function NewsSection() {
  // idが1, 2, 3のデータだけ取得
  const newsItems = blogsData.filter((blog) => ['1', '2', '3'].includes(blog.id));

  return (
    <section
      id="news"
      className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-10 md:py-20 bg-gradient-to-t from-transparent via-[#3f77a455] to-transparent"
    >
      <SectionTitle title="News" />
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-between">
        {newsItems.map((item) => (
          <NewsListCard
            key={item.id}
            thumbnail={item.thumbnail}
            tag={item.tag as '技術ブログ' | 'メディア' | 'AI'}
            date={item.date}
            title={item.title}
            href={`/news/${item.id}`}
          />
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