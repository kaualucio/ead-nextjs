
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../prisma/client';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const {topicId} = req.body
  const me = await client.class.updateMany({
    where: {
      topicId
    }, 
    data: {
      topicId: '9c7662c7-6140-4d34-aaee-1c96dd307f91'
    }
  })

  return res.status(200).json(me)

}