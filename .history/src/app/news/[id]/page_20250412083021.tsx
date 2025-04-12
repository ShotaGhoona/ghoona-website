import { getDatabase, getPage, getBlocks } from '@/lib/notion';
import Article from '@/feature/news/id/article';

export const revalidate = 60; // ISR設定（60秒毎に再生成）

// 動的ルートパスを生成する関数
export async function generateStaticParams() {
  const pages = await getDatabase();
  return pages.map((page) => ({ id: page.id }));
}

export default async function NewsArticle({ params }: { params: { id: string } }) {
  const page = await getPage(params.id);
  const blocks = await getBlocks(params.id);

  // ネストした子ブロックを取得
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );

  // 子ブロックを親ブロックにマージ
  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(
        (childBlock) => childBlock.id === block.id
      )?.children;
    }
    return block;
  });

  return <Article page={page} blocks={blocksWithChildren} />;
}
