import { PrismaClient, Video, Post, Page } from "@prisma/client";
import { faker } from "@faker-js/faker";

// Run this seeder with npx prisma db seed.
// seed.ts config in package.json

const prisma = new PrismaClient();

// async function addVideo(video: Video): Promise<void> {
//   await prisma.video.create({ data: { ...video }});
// }

// async function addPost(post: Post): Promise<void> {
//   await prisma.post.create({ data: { ...post }});
// }

function getRandomUnixTimestamp(min: number, max: number): number {
  const randomTs = Math.floor(
    Math.random() * (max - min + 1) + min
  );

  return randomTs;
}

const videoIds = [
  'tD5NrevFtbU',
  'a7_WFUlFS94',
  'ANu2TDkKotw',
  'kPP_TQFPfU8',
  '_ihX2e9dnYM',
  'cL_wWLo7FUo',
  'W8gYHTjDCic',
  'WzFxJq9L_2w',
  'GWYhtksrmhE',
  'aq365yzrTVE',
  'tOQZlD-0Scc',
  'DkAmGxRuCk4',
  'yHBlxVj6-us',
  '5IUj1EZwpJY',
  'Ia5jyz8sOCM',
  'E_C3pgc1Iho',
  'nNSUxac6vGo',
  'e1DgzwNpJiQ',
  'rCu8vQrdDDI',
  'e-wieD_-PYo',
  'VjuyfBaryu8',
  'jkrNMKz9pWU',
  'jYUZAF3ePFE',
  'nLRL_NcnK-4',
  'XxbJw8PrIkc',
];

async function main() {
  await prisma.video.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.page.deleteMany({});

  // createMany not supported in Prisma SQLite
  // @see https://github.com/prisma/prisma/issues/11507#issuecomment-1025587202

  for (let i = 0; i < 50; i++) {
    const randomVideoId = Math.floor(Math.random() * videoIds.length);
    const video: Video = {
      id: i,
      title: faker.lorem.sentence({ min: 5, max: 10 }),
      content: faker.lorem.paragraphs(1),
      video_id: videoIds[randomVideoId],
      image: faker.image.urlLoremFlickr({ width: 800, height: 600 })
    };

    const post: Post = {
      id: i,
      title: faker.lorem.sentence(1),
      author: faker.person.fullName(),
      date: getRandomUnixTimestamp(new Date('2021-01-01').getTime() / 1000, new Date('2023-01-01').getTime() / 1000),
      category: faker.lorem.sentence(1),
      content: faker.lorem.paragraphs(3),
      image: faker.image.urlLoremFlickr({ width: 800, height: 600 })
    };

    await prisma.video.create({ data: { ...video }});
    await prisma.post.create({ data: { ...post }});
  }

  for (let i = 0; i < 5; i++) {
    const page: Page = {
      id: i,
      title: faker.lorem.sentence(1),
      slug: faker.lorem.slug(),
      content: faker.lorem.paragraphs(10),
    };

    await prisma.page.create({ data: { ...page }});
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
