import { client } from "../../prisma/client";


export async function getTopicsByTrainingId(trainingId: string) {
  const topics = await client.topic.findMany({
    where: {
      trainingId
    },
    orderBy: {
      created_at: 'asc'
    }
  })

  return topics
}