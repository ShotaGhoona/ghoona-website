import Image from 'next/image';
import Link from 'next/link';
import { NewsListCardProps, tagColors } from '@/types/news';

export default function NewsListCard({ thumbnail, tag, date, title, href }: NewsListCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 flex flex-col gap-4">
      <div className="w-full h-48 relative">
        <Image src={thumbnail} alt={title} layout="fill" objectFit="cover" className="rounded-md" />
      </div>

      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 text-[12px] rounded ${tagColors[tag]} text-white`}>{tag}</span>
        <span className="text-[12px] text-gray-500">{date}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <div className="mt-auto flex justify-center">
        <Link href={href}>
          <span className="text-[12px] inline-block bg-[#b2b2b2] text-white px-4 py-1 rounded-full font-semibold cursor-pointer hover:opacity-80">
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
}
