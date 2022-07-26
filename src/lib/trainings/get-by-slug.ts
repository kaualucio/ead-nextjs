import { client } from "../../prisma/client";

export async function getTrainingBySlug(slug:string) {
  const training = await client.training.findFirst({
    where: {
      slug
    },
  })

  return training
}