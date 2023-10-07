import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const {id} = req.query;
  const result = await prisma.video.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  res.status(200).json(result);
}
