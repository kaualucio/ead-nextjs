import { NextApiRequest, NextApiResponse } from "next";
import { getAllEducators } from "../../../lib/educators/get-all";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const educators = await getAllEducators()

  return res.status(200).json(educators)
}