import { client } from '../../../../prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { classSlug, topicSlug, trainingSlug } = req.body
  const id = req.query.id as string
  const me = await client.user.update({
    where: {
      id
    }, 
    data: {
      lastTrainingSeen: {
        classSlug, topicSlug, trainingSlug
      }
    }
  })

  return res.status(200).json(me)

}