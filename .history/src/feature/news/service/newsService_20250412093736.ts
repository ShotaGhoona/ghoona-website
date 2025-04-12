import { getPage, getBlocks } from '@/lib/notion';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const revalidate = 60; // ISR設定もここに記載

export async function fetchArticleWithBlocks(id: string) {
  const page = await getPage(id);
  const blocks = (await getBlocks(id)) as BlockObjectResponse[];

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => ({
        id: block.id,
        children: await getBlocks(block.id),
      }))
  );

  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children && !(block as any)[block.type]?.children) {
      (block as any)[block.type]['children'] = childBlocks.find((childBlock) => childBlock.id === block.id)?.children;
    }
    return block;
  });

  return { page, blocks: blocksWithChildren };
}
