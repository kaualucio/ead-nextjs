
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../prisma/client';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const {topicId} = req.body
  const me = await client.class.updateMany({
    where: {
      trainingId: '9dd7165c-75ae-4420-b5b7-102a2a842a7a'
    },
    data: {
      topicId: '9c7662c7-6140-4d34-aaee-1c96dd307f91'
    }
  })

  return res.status(200).json(me)

}