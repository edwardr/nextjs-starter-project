import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const posts = await prisma.post.findMany(
      {
        take: Number(req.query.limit),
        skip: Number(req.query.offset),
      }
    );
    res.status(200).json(posts);
  } catch(err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
