import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, slug, description, thumbnail, totalTime, totalResources, certified, educator, topics } = req.body

  const training = await prisma.training.create({
    data: {
      id: uuid(),
      title, 
      slug,
      description,
      thumbnail,
      totalResources,
      totalTime,
      certified,
    }
  })

  return res.status(201).json(training)
}