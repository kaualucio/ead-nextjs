import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, slug, description, trainingId, educatorId, totalTime, totalVideos, resources} = req.body

  const topic = await prisma.topic.create({
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