import blogsData from '@/data/blogs.json';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import TopViewSection from '@/components/common/TopView';
interface BlogDetailProps {
  params: { id: string };
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const blog = blogsData.find((blog) => blog.id === params.id);

  if (!blog) {
    return <div className="text-center py-10">記事が見つかりませんでした。</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-4">{blog.date}</p>
      <div className="w-full h-60 relative mb-8">
        <Image src={blog.thumbnail} alt={blog.title} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <div className="prose max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </article>
  );
}
