import { NextApiRequest, NextApiResponse } from "next";
import { getTopicsByTrainingSlug } from "../../../../lib/topics/get-topics-by-training-slug";
import { getTrainingBySlug } from "../../../../lib/trainings/get-by-slug";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug as string

  const training = await getTrainingBySlug(slug)

  if(!training) {
    return res.status(404).json({
      message: 'Não existe este treinamento'
    })
  }

  const topics = await getTopicsByTrainingSlug(training.id)

  return res.status(200).json(topics)
}