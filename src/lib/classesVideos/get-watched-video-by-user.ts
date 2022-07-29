import { client } from './../../prisma/client';


export async function getWatchedVideosByUser(userId: string) {
  const watchedVideos = await client.videoWatched.findMany({
    where: {
      userId
    },
    orderBy: {
      created_at: 'asc'
    }
  });
  return watchedVideos
}