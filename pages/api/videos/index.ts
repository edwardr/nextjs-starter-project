import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const videos = await prisma.video.findMany(
    {
      take: Number(req.query.limit),
      skip: Number(req.query.offset),
    }
  );
  res.status(200).json(videos);
  // offset
}

