import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

// const userData: Prisma.UserCreateInput[] = [
//   {
//     name: 'Alice',
//     email: 'alice@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Join the Prisma Slack',
//           content: 'https://slack.prisma.io',
//           published: true,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Nilu',
//     email: 'nilu@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Follow Prisma on Twitter',
//           content: 'https://www.twitter.com/prisma',
//           published: true,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Mahmoud',
//     email: 'mahmoud@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Ask a question about Prisma on GitHub',
//           content: 'https://www.github.com/prisma/prisma/discussions',
//           published: true,
//         },
//         {
//           title: 'Prisma on YouTube',
//           content: 'https://pris.ly/youtube',
//         },
//       ],
//     },
//   },
// ]


const postData: Prisma.PostCreateInput[] = [
  {
    title: 'Post1',
    content: "Content1",
  },
  {
    title: 'Post2',
    content: "Content2"
  },
  {
    title: 'Post3',
    content: "Content3"
  },
]

export async function main() {
  try {
    console.log(`Start seeding ...`)
    // for (const u of userData) {
    //   const user = await prisma.user.create({
    //     data: u,
    //   })
    //   console.log(`Created user with id: ${user.id}`)
    // }

    for (const u of postData) {
        const post = await prisma.post.create({
          data: u,
        })
        console.log(`Created post with id: ${post.id}`)
    }

    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
