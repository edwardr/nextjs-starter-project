import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const posts = await prisma.post.findMany({take: parseInt(req.query.limit)});
  res.status(200).json(posts);
}
