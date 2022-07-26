import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, about, urlImage, trainingId, } = req.body

  const educator = await prisma.educator.create({
    data: {
      id: uuid(),
      name, 
      about,
      urlImage,
      trainingId
    }
  })

  return res.status(201).json(educator)
}