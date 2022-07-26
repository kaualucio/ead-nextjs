import { client } from "../../prisma/client";


export async function getAllTopics() {
  const topics = await client.topic.findMany({
    orderBy: {
      created_at: 'asc'
    }
  });
  return topics
}