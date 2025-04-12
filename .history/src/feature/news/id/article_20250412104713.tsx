import { Fragment } from 'react';
import { renderBlock } from '@/components/notion/blockRenderer';
import Link from 'next/link';

type ArticleProps = {
  page: any;
  blocks: any[];
};

export default function Article({ page, blocks }: ArticleProps) {
  if (!page || !blocks) return <div>読み込み中です...</div>;

  const titleProp = page.properties['ブログ名']?.title;
  const title = titleProp?.[0]?.plain_text || 'タイトルなし';

  return (
    <article className="max-w-[800px] mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 text-[8px] text-white`}>{page.properties['タグ']}</span>
        <span className="text-[12px] text-gray-500">{page.properties['投稿日'].date.start}</span>
      </div>
      <section className="prose">
        {blocks.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </section>
      <div className="mt-8 text-center">
        <Link href="/news" className="text-blue-500 underline">
          ← 記事一覧へ戻る
        </Link>
      </div>
    </article>
  );
}
