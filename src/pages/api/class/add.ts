import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from 'uuid'
import { client } from "../../../prisma/client";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, slug, urlVideo, description, topicId, trainingId, watched, resources } = req.body

  const classVideo = await client.class.create({
    data: {
      id: uuid(),
      topicId,
      title,
      slug,
      urlVideo,
      description,
      watched,
      resources,
      trainingId
    }
  })

  return res.status(201).json(classVideo)
}