import { client } from './../../../prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.body
  const me = await client.user.findUnique({
    where: {
      id: userId
    }
  })

  return res.status(200).json(me)

}