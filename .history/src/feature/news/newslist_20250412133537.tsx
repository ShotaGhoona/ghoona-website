/* eslint-disable @typescript-eslint/no-explicit-any */

import NewsListCard from '@/components/common/NewsListCard';
import { useFormattedBlogs } from './hooks/useFormattedNewsTitle';

type NewsListSectionProps = {
  blogsData: any[];
};

export default function NewsListSection({ blogsData }: NewsListSectionProps) {
  const formattedBlogs = useFormattedBlogs(blogsData);

  return (
    <section className="max-w-[1200px] flex flex-col items-center mx-auto px-5 md:px-20 py-10">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-10">全ての記事</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedBlogs.map((blog) => (
          <NewsListCard key={blog.href} {...blog} />
        ))}
      </div>
    </section>
  );
}
