import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../../prisma/client";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const id = req.query.id as string
  const { topicId, trainingId, userId } = req.body
  const classVideo = await client.videoWatched.create({
    data: {
      videoId: id,
      topicId,
      trainingId,
      userId
    }
  })

  return res.status(200).json(classVideo)
}