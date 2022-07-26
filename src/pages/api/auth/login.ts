import { NextApiRequest, NextApiResponse } from "next";
import { sign } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  if(!email || !password) {
    return res.status(403).json({
      message: 'Campos vazios não são permitidos'
    })
  }

  const userExists = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if(!userExists) {
    return res.status(404).json({
      message: 'Usuário não existe'
    })
  }

  const passwordMatched = userExists.password === password

  if(!passwordMatched) {
    return res.status(400).json({
      message: 'E-mail ou senha inválidos'
    })
  }
  
  const access_token = sign({}, 'secret-secreta', {
    subject: userExists.id,
    expiresIn: 60 * 5 //5 minutos
  })

  return res.status(200).json({
    user: userExists,
    access_token
  })

}