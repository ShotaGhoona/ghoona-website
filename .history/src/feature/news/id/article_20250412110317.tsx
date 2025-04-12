import { Fragment } from 'react';
import { renderBlock } from '@/components/notion/blockRenderer';
import Link from 'next/link';
import styles from '@/components/notion/article.module.css';

type ArticleProps = {
  page: any;
  blocks: any[];
};

export default function Article({ page, blocks }: ArticleProps) {
  if (!page || !blocks) return <div>読み込み中です...</div>;

  const titleProp = page.properties['ブログ名']?.title;
  const title = titleProp?.[0]?.plain_text || 'タイトルなし';
  const tag = page.properties['タグ'].select?.name || 'タグなし';
  const date = page.properties['投稿日'].date.start;

  return (
    <article className={styles.container}>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      
      <div className="flex justify-between items-center">
        <span className="px-2 py-1 text-[8px]">{tag}</span>
        <span className="text-[12px] text-gray-500">{date}</span>
      </div>

      <section className="prose">
        {blocks.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </section>

      <div className="mt-8 text-center">
        <Link href="/news" className={styles.back}>
          ← 記事一覧へ戻る
        </Link>
      </div>
    </article>
  );
}
