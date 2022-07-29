import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../../prisma/client";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const id = req.query.id as string 
  const educators = await client.educator.findMany({
    where: {
      trainingId: id
    }
  })

  return res.status(200).json(educators)
}