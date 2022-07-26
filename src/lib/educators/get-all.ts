import { client } from './../../prisma/client';


export async function getAllEducators() {
  const educators = await client.educator.findMany();
  return educators
}