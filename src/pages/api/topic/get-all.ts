import { NextApiRequest, NextApiResponse } from "next";
import { getAllTopics } from "../../../lib/topics/get-all";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const topics = await getAllTopics()

  return res.status(200).json(topics)
}