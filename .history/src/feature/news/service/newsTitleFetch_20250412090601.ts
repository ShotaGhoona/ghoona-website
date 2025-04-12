import { getDatabase } from '@/lib/notion';

export const revalidate = 60;

export const fetchNews = async () => {
  const blogsData = await getDatabase();
  return blogsData;
};
