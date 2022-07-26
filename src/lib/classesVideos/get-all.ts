import { client } from './../../prisma/client';


export async function getAllClassesVideos() {
  const classesVideos = await client.class.findMany({
    orderBy: {
      created_at: 'asc'
    }
  });
  return classesVideos
}