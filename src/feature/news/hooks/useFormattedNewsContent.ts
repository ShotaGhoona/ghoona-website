import { useMemo } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export function useFormattedBlocks(blocks: BlockObjectResponse[]) {
  const formattedBlocks = useMemo(() => {
    return blocks.map((block) => {
      // ここで将来的にブロックの整形や表示用にデータ加工が可能
      // 現在のサンプルではそのまま渡すだけにしていますが、
      // 後々、型変換や特定の表示ロジックを追加可能
      return block;
    });
  }, [blocks]);

  return formattedBlocks;
}
