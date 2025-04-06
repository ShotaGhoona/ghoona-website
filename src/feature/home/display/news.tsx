import SectionTitle from '@/components/common/SectionTitle';
import NewsCard from '@/components/common/NewsCard';
import Link from 'next/link';

export default function NewsSection() {
  const newsItems = [
    {
      title: "Web事業",
      description: "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
      imageUrl: "service_tech.jpg",
    },
    {
      title: "Notion事業",
      description: "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
      imageUrl: "service_notion.jpg",
    },
    {
      title: "Community事業",
      description: "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
      imageUrl: "service_camp.jpg",
    },
  ];

  return (
    <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-10 md:py-20 bg-gradient-to-t from-transparent via-[#3f77a455] to-transparent">
      <SectionTitle title="News" />
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-between">
        {newsItems.map((item, idx) => (
          <NewsCard
            key={idx}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
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
