import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const id = req.query.id as string 
  const educators = await prisma.educator.findMany({
    where: {
      trainingId: id
    }
  })

  return res.status(200).json(educators)
}