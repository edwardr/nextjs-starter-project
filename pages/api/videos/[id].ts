import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query;
  const result = await prisma.video.findUnique({
    where: {
      id: Number(id)
    }
  })

  res.status(200).json(result);
}

