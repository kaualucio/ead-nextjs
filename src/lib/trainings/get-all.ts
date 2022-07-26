import { client } from "../../prisma/client";

export async function getAllTrainings() {
  const trainings = await client.training.findMany({
    orderBy: {
      created_at: 'asc'
    }
  });
  return trainings
}