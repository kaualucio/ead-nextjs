import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const id = req.query.id as string
  const classVideo = await prisma.class.update({
    where: {
      id
    },
    data: {
      watched: true
    }
  })

  return res.status(200).json(classVideo)
}