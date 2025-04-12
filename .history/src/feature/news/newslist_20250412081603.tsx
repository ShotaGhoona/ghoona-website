import NewsListCard from '@/components/common/NewsListCard';

// propsを追加
export default function NewsListSection({ blogsData }: { blogsData: any[] }) {
  return (
    <section className="max-w-[1200px] flex flex-col items-center mx-auto px-5 md:px-20 py-10">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-10">全ての記事</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((blog) => (
          <NewsListCard
            key={blog.id}
            thumbnail={blog.properties['サムネイル'].files[0]?.file.url || ''}
            tag={blog.properties['タグ'].select.name as '技術ブログ' | 'メディア' | 'AI'}
            date={blog.properties['投稿日'].date.start}
            title={blog.properties['ブログ名'].title[0].plain_text}
            href={`/news/${blog.id}`}
          />
        ))}
      </div>
    </section>
  );
}
