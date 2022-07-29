import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from 'uuid'
import { client } from "../../../prisma/client";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, slug, description, trainingId, educatorId, totalTime, totalVideos, resources} = req.body

  const topic = await client.topic.create({
    data: {
      id: uuid(),
      title, 
      slug,
      description,
      trainingId,
      educatorId,
      totalVideos,
      totalTime,
      resources,
    }
  })

  return res.status(201).json(topic)
}