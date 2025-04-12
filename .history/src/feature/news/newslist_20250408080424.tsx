// feature/news/newslist.tsx

import NewsListCard from '@/components/common/NewsListCard';
import blogsData from '@/data/blogs.json';

export default function NewsListSection() {
  return (
    <section className="max-w-[1200px] flex flex-col items-center mx-auto px-5 md:px-20 py-10">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-10">全ての記事</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((blog) => (
          <NewsListCard
            key={blog.id}
            thumbnail={blog.thumbnail}
            tag={blog.tag as '技術ブログ' | 'メディア' | 'AI'}
            date={blog.date}
            title={blog.title}
            href={`/news/${blog.id}`}
          />
        ))}
      </div>
    </section>
  );
}