import { NextApiRequest, NextApiResponse } from "next";
import { getAllTrainings } from "../../../lib/trainings/get-all";


export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const trainings = await getAllTrainings()

  return res.status(200).json(trainings)
}