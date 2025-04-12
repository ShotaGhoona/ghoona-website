import NewsListCard from '@/components/common/NewsListCard';

const newsData = [
  {
    thumbnail: '/newstopview.jpg',
    tag: '技術ブログ',
    date: '2025/3/4',
    title: 'AIを初期搭載したHP制作',
    href: '/news/1',
  },
  {
    thumbnail: '/newstopview.jpg',
    tag: 'メディア',
    date: '2025/3/10',
    title: '新しいメディア戦略',
    href: '/news/2',
  },
  {
    thumbnail: '/newstopview.jpg',
    tag: 'AI',
    date: '2025/3/15',
    title: 'GPT-5の可能性について',
    href: '/news/3',
  },
  {
    thumbnail: '/newstopview.jpg',
    tag: '技術ブログ',
    date: '2025/3/20',
    title: 'React18の新機能を解説',
    href: '/news/4',
  },
  {
    thumbnail: '/newstopview.jpg',
    tag: 'メディア',
    date: '2025/3/25',
    title: '注目すべきSNSマーケティング',
    href: '/news/5',
  },
  {
    thumbnail: '/newstopview.jpg',
    tag: 'AI',
    date: '2025/3/30',
    title: 'AIを使った新サービス開始',
    href: '/news/6',
  },
];

export default function NewsListSection() {
  return (
    <section className="max-w-[1200px] flex flex-col items-center mx-auto px-5 md:px-20 py-10">
    <div className="w-full">
        <h2 className="text-2xl font-bold">News一覧</h2>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news, index) => (
          <NewsListCard key={index} {...news} />
        ))}
      </div>
    </section>
  );
}