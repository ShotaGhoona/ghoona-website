import { Client } from '@notionhq/client';

// Notionクライアント初期化
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

// データベース一覧取得（getDatabaseを正しくexport）
export const getDatabase = async () => {
  const response = await notion.databases.query({
    database_id: databaseId!,
    sorts: [
      {
        property: '投稿日',
        direction: 'descending',
      },
    ],
  });
  return response.results;
};

// 個別ページ取得
export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

// ページ内のブロック取得
export const getBlocks = async (blockId: string) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};
