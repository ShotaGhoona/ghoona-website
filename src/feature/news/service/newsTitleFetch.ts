import { getDatabase } from '@/lib/notion';

export const revalidate = 60;

export const fetchNewsTitle = async () => {
  const blogsData = await getDatabase();
  return blogsData;
};
