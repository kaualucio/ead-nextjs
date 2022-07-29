import { client } from './../../../prisma/client';
import { NextApiResponse, NextApiRequest } from 'next';
import { v4 as uuid } from 'uuid'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const { name, email, password, confirm_password } = req.body

  if(!name || !email || !password || !confirm_password) {
    return res.status(403).json({
      message: 'Campos vazios não são permitidos'
    })
  }

  if(password !== confirm_password) {
    return res.status(403).json({
      message: 'As senhas não batem'
    })
  }

  await client.user.create({
    data: {
      id: uuid(),
      name, 
      email,
      password,
      urlImage: '',
      hasTrainingAccess: 'BÁSICO',
    }
  })

  return res.status(201).json({
    message: 'Usuário cadastrado com sucesso!'
  })

}