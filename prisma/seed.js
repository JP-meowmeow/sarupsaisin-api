const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const hashedPassword = bcrypt.hashSync('123456', 10)

const userData = [
  { email: 'admin@gmail.com', password: hashedPassword, role: 'ADMIN' },
  { email: 'user1@gmail.com', password: hashedPassword, role: 'USER' },
  { email: 'user2@gmail.com', password: hashedPassword, role: 'USER' },
  { email: 'user3@gmail.com', password: hashedPassword, role: 'USER' },
  { email: 'user4@gmail.com', password: hashedPassword, role: 'USER' },
]

const articleData = [
  {
    articleName: 'แนะนำเว็บฝึกสำเนียงภาษาญี่ปุ่น',
    articleDetails: "具岡ナ打遺ふきっド一香シタ岡東本もねぱラ必群あクづ図海ごげレ異公べ法制じて教願ゃ羽業し販隆画シノ水既杉た。...",
    articleThumbnailLink: 'https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566173/Article_4_lrnmnf.jpg',
    category:"JLPTN4"
  },
  {
    articleName: 'แนะนำเว็บฝึกฟังฟังภาษาญี่ปุ่น',
    articleDetails: "具岡ナ打遺ふきっド一香シタ岡東本もねぱラ必群あクづ図海ごげレ異公べ法制じて教願ゃ羽業し販隆画シノ水既杉た。...",
    articleThumbnailLink: 'https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566179/Article_6_bohvwq.png',
    category:"JLPTN4"
  },
  {
    articleName: '15 ไวยากรณ์ออกสอบบ่อย JLPT N4',
    articleDetails: "具岡ナ打遺ふきっド一香シタ岡東本もねぱラ必群あクづ図海ごげレ異公べ法制じて教願ゃ羽業し販隆画シノ水既杉た。...",
    articleThumbnailLink: 'https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566178/Article_3_ch85fk.png',
    category:"JLPTN5"
  },
]

const courseData = [
  {
    courseName: "JLPT N5 Comprehensive Course",
    shortDescription: "Complete preparation for JLPT N5",
    longDescription: "This course covers all aspects of JLPT N5 including grammar, vocabulary, reading, and listening...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 2999.99,
    category:"JLPTN5",
    units: [
      { unitNumber: 1, title: "Basic Greetings", description: "Learn everyday Japanese greetings", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
      { unitNumber: 2, title: "Hiragana Mastery", description: "Master the Hiragana writing system", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
    ]
  },
  {
    courseName: "JLPT N4 Grammar Intensive",
    shortDescription: "Focused grammar preparation for JLPT N4",
    longDescription: "Deep dive into JLPT N4 level grammar points with extensive examples and practice exercises...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 1999.99,
    category:"JLPTN4",
    units: [
      { unitNumber: 1, title: "Te-form Mastery", description: "Understand and use the te-form confidently", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
      { unitNumber: 2, title: "Potential Form", description: "Learn to express ability in Japanese", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
    ]
  }
]

async function run() {
  try {
    // Create users
    await prisma.user.createMany({ data: userData })
    
    // Create articles and associate with the admin user
    const admin = await prisma.user.findUnique({ where: { email: 'admin@gmail.com' } })
    for (let article of articleData) {
      await prisma.article.create({
        data: {
          ...article,
          User: { connect: { id: admin.id } }
        }
      })
    }

    // Create courses and their units
    for (let course of courseData) {
      const { units, ...courseInfo } = course
      await prisma.course.create({
        data: {
          ...courseInfo,
          user: { connect: { id: admin.id } },
          unit: {
            createMany: {
              data: units
            }
          }
        }
      })
    }

    console.log('Seed data inserted successfully')
  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

run()