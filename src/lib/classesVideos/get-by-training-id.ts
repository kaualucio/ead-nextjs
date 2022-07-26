import { client } from "../../prisma/client";



export async function getClassesVideosByTrainingId(trainingId: string) {
  const classesVideos = await client.class.findMany({
    where: {
      trainingId
    },
    orderBy: {
      created_at: 'asc'
    }
  });
  return classesVideos
}