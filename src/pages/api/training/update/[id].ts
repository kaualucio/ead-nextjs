import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const id = req.query.id as string
  const training = await prisma.training.update({
    where: {
      id
    },
    data: {
      created_at: new Date(),
      updated_at: new Date()
    }
  })

  return res.status(200).json(training)
}