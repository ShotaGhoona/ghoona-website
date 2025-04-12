import Image from 'next/image';
import Link from 'next/link';

interface NewsListCardProps {
  thumbnail: string;
  tag: '技術ブログ' | 'メディア' | 'AI';
  date: string;
  title: string;
  href: string;
}

const tagColors = {
  '技術ブログ': 'bg-gray-300',
  'メディア': 'bg-blue-300',
  'AI': 'bg-green-300',
};

export default function NewsListCard({ thumbnail, tag, date, title, href }: NewsListCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 flex flex-col gap-4">
      <div className="w-full h-48 relative">
        <Image src={thumbnail} alt={title} layout="fill" objectFit="cover" className="rounded-md" />
      </div>

      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 text-sm rounded ${tagColors[tag]} text-gray-800`}>{tag}</span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <div className="mt-auto flex justify-center">
        <Link href={href}>
          <span className="text-[12px] inline-block bg-[#5F7E65] text-white px-4 py-1 rounded-full font-semibold cursor-pointer hover:opacity-80">
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
}