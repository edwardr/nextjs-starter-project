import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query;
  try {
    const result = await prisma.page.findUnique({
      where: {
        id: Number(id)
      }
    })
    res.status(200).json(result);
  } catch(err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
