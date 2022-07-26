import { NextApiRequest, NextApiResponse } from "next";
import { getAllClassesVideos } from "../../../lib/classesVideos/get-all";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const classesVideos = await getAllClassesVideos()

  return res.status(200).json(classesVideos)
}