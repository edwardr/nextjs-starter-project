import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const {id} = req.query;
  try {
    const result = await prisma.page.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    res.status(200).json(result);
  } catch(err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
