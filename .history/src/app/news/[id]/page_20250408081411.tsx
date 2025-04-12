import blogsData from '@/data/blogs.json';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import TopViewSection from '@/feature/news/id/topview';
import ArticleSection from '@/feature/news/id/article';
interface BlogDetailProps {
  params: { id: string };
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const blog = blogsData.find((blog) => blog.id === params.id);

  if (!blog) {
    return <div className="text-center py-10">記事が見つかりませんでした。</div>;
  }

  return (
    <>
    <TopViewSection />
    <ArticleSection />
    </>
  );
}
