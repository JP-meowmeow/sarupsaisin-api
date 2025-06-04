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
    articleName: 'แนะนำเว็บฝึกสำเนียงภาษาญี่ปุ่น 1',
    articleDetails: "具岡ナ打遺ふきっド一香シタ岡東本もねぱラ必群あクづ図海ごげレ異公べ法制じて教願ゃ羽業し販隆画シノ水既杉た。...",
    articleThumbnailLink: 'https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566173/Article_4_lrnmnf.jpg',
    category:"JLPTN4"
  },
  {
    articleName: 'แนะนำเว็บฝึกฟังฟังภาษาญี่ปุ่น 1',
    articleDetails: "具岡ナ打遺ふきっド一香シタ岡東本もねぱラ必群あクづ図海ごげレ異公べ法制じて教願ゃ羽業し販隆画シノ水既杉た。...",
    articleThumbnailLink: 'https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566179/Article_6_bohvwq.png',
    category:"JLPTN4"
  },
  {
    articleName: '15 ไวยากรณ์ออกสอบบ่อย JLPT N4 1',
    articleDetails: "具岡ナ打遺ふきっド一香シタ岡東本もねぱラ必群あクづ図海ごげレ異公べ法制じて教願ゃ羽業し販隆画シノ水既杉た。...",
    articleThumbnailLink: 'https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566178/Article_3_ch85fk.png',
    category:"JLPTN5"
  },{
    articleName: 'แนะนำเว็บฝึกสำเนียงภาษาญี่ปุ่น 2',
    articleDetails: "具岡ナ打遺ふきっド一香シタ岡東本もねぱラ必群あクづ図海ごげレ異公べ法制じて教願ゃ羽業し販隆画シノ水既杉た。...",
    articleThumbnailLink: 'https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566173/Article_4_lrnmnf.jpg',
    category:"JLPTN4"
  },
  {
    articleName: 'แนะนำเว็บฝึกฟังฟังภาษาญี่ปุ่น 2',
    articleDetails: "具岡ナ打遺ふきっド一香シタ岡東本もねぱラ必群あクづ図海ごげレ異公べ法制じて教願ゃ羽業し販隆画シノ水既杉た。...",
    articleThumbnailLink: 'https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566179/Article_6_bohvwq.png',
    category:"JLPTN4"
  },
]

const courseData = [
  {
    courseName: "JLPT N5 Comprehensive Course 1",
    shortDescription: "Complete preparation for JLPT N5",
    longDescription: "This course covers all aspects of JLPT N5 including grammar, vocabulary, reading, and listening...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 2999.99,
    category:"JLPTN5",
    isFree:"NOTFREE",
    units: [
      { unitNumber: 1, title: "Basic Greetings", description: "Learn everyday Japanese greetings", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
      { unitNumber: 2, title: "Hiragana Mastery", description: "Master the Hiragana writing system", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
    ]
  },
  {
    courseName: "JLPT N4 Grammar Intensive 2",
    shortDescription: "Focused grammar preparation for JLPT N4",
    longDescription: "Deep dive into JLPT N4 level grammar points with extensive examples and practice exercises...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 1999.99,
    category:"JLPTN4",
    isFree:"NOTFREE",
    units: [
      { unitNumber: 1, title: "Te-form Mastery", description: "Understand and use the te-form confidently", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
      { unitNumber: 2, title: "Potential Form", description: "Learn to express ability in Japanese", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
    ]
  },
  {
    courseName: "JLPT N4 Free course3 ",
    shortDescription: "Focused on preparation for JLPT N4 test",
    longDescription: "Deep dive into JLPT N4 level grammar points with extensive examples and practice exercises...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 0,
    category:"JLPTN4",
    isFree:"FREE",
    units: [
      { unitNumber: 1, title: "Te-form Mastery", description: "Understand and use the te-form confidently", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
      { unitNumber: 2, title: "Potential Form", description: "Learn to express ability in Japanese", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
    ]
  },{
    courseName: "JLPT N5 Comprehensive Course 4",
    shortDescription: "Complete preparation for JLPT N5",
    longDescription: "This course covers all aspects of JLPT N5 including grammar, vocabulary, reading, and listening...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 2999.99,
    category:"JLPTN5",
    isFree:"NOTFREE",
    units: [
      { unitNumber: 1, title: "Basic Greetings", description: "Learn everyday Japanese greetings", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
      { unitNumber: 2, title: "Hiragana Mastery", description: "Master the Hiragana writing system", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
    ]
  },
  {
    courseName: "JLPT N4 Grammar Intensive 5",
    shortDescription: "Focused grammar preparation for JLPT N4",
    longDescription: "Deep dive into JLPT N4 level grammar points with extensive examples and practice exercises...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 1999.99,
    category:"JLPTN4",
    isFree:"NOTFREE",
    units: [
      { unitNumber: 1, title: "Te-form Mastery", description: "Understand and use the te-form confidently", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
      { unitNumber: 2, title: "Potential Form", description: "Learn to express ability in Japanese", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
    ]
  },
  {
    courseName: "JLPT N4 Free course 6",
    shortDescription: "Focused on preparation for JLPT N4 test",
    longDescription: "Deep dive into JLPT N4 level grammar points with extensive examples and practice exercises...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 0,
    category:"JLPTN4",
    isFree:"FREE",
    units: [
      { unitNumber: 1, title: "Te-form Mastery", description: "Understand and use the te-form confidently", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
      { unitNumber: 2, title: "Potential Form", description: "Learn to express ability in Japanese", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
    ]
  },{
    courseName: "JLPT N5 Comprehensive Course 7",
    shortDescription: "Complete preparation for JLPT N5",
    longDescription: "This course covers all aspects of JLPT N5 including grammar, vocabulary, reading, and listening...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 2999.99,
    category:"JLPTN5",
    isFree:"NOTFREE",
    units: [
      { unitNumber: 1, title: "Basic Greetings", description: "Learn everyday Japanese greetings", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
      { unitNumber: 2, title: "Hiragana Mastery", description: "Master the Hiragana writing system", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
    ]
  },
  {
    courseName: "JLPT N4 Grammar Intensive 8 ",
    shortDescription: "Focused grammar preparation for JLPT N4",
    longDescription: "Deep dive into JLPT N4 level grammar points with extensive examples and practice exercises...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 1999.99,
    category:"JLPTN4",
    isFree:"NOTFREE",
    units: [
      { unitNumber: 1, title: "Te-form Mastery", description: "Understand and use the te-form confidently", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
      { unitNumber: 2, title: "Potential Form", description: "Learn to express ability in Japanese", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
    ]
  },
  {
    courseName: "JLPT N4 Free course 9 ",
    shortDescription: "Focused on preparation for JLPT N4 test",
    longDescription: "Deep dive into JLPT N4 level grammar points with extensive examples and practice exercises...",
    courseThumbnailLink: "https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png",
    price: 0,
    category:"JLPTN4",
    isFree:"FREE",
    units: [
      { unitNumber: 1, title: "Te-form Mastery", description: "Understand and use the te-form confidently", youtubeLink: "https://www.youtube.com/watch?v=H2fRcQquKsA" },
      { unitNumber: 2, title: "Potential Form", description: "Learn to express ability in Japanese", youtubeLink: "https://www.youtube.com/watch?v=msGQOO6f3h0" },
    ]
  },
]

async function run() {
  try {
    
    // Clear previous data
    await prisma.userPurchasedLevel.deleteMany();
    await prisma.explanation.deleteMany();
    await prisma.choice.deleteMany();
    await prisma.unit.deleteMany();
    await prisma.question.deleteMany();
    await prisma.jlptTest.deleteMany();
    await prisma.jlptLevel.deleteMany();
    await prisma.article.deleteMany();
    await prisma.enrollment.deleteMany();
    await prisma.course.deleteMany();
    await prisma.user.deleteMany();

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

   // ==== ส่วนใหม่ เพิ่มข้อสอบ JLPT ====

    // 1. Create JLPT Levels
    const n5Level = await prisma.jlptLevel.create({
      data: { level: 'N5' }
    });

    const n4Level = await prisma.jlptLevel.create({
      data: { level: 'N4' }
    });

    // 2. Create Test Sets
    const n5Test1 = await prisma.jlptTest.create({
      data: {
        jlptLevelId: n5Level.id,
        name: 'N5 模擬試験 第1回',
        price: 0, // ฟรี
      }
    });

    const n5Test2 = await prisma.jlptTest.create({
      data: {
        jlptLevelId: n5Level.id,
        name: 'N5 模擬試験 第2回',
        price: 299, // เสียเงิน
      }
    });

    // 3. Create Sample Questions + Choices + Explanation
    const question1 = await prisma.question.create({
      data: {
        jlptTestId: n5Test1.id,
        type: 'vocab',
        content: '「ありがとう」แปลว่าอะไร?',
        choices: {
          create: [
            { text: 'ขอโทษ', isCorrect: false },
            { text: 'ขอบคุณ', isCorrect: true },
            { text: 'ลาก่อน', isCorrect: false },
            { text: 'สวัสดี', isCorrect: false },
          ]
        },
        Explanation: {
          create: {
            text: '「ありがとう」 (Arigatou) แปลว่า "ขอบคุณ" ใช้ในสถานการณ์ทั่วไป.'
          }
        }
      },
      include: {
        choices: true,
        Explanation: true,
      }
    });

     // 👉 สร้าง 100 ข้อสอบใน N5 模擬試験 第1回
     for (let i = 1; i <= 100; i++) {
      const question = await prisma.question.create({
        data: {
          jlptTestId: n5Test1.id,
          type: i % 3 === 0 ? 'grammar' : i % 3 === 1 ? 'vocab' : 'reading',
          content: `ข้อที่ ${i}: ตัวอย่างคำถามภาษาญี่ปุ่น`,
          choices: {
            create: [
              { text: `ตัวเลือก A`, isCorrect: i % 4 === 0 },
              { text: `ตัวเลือก B`, isCorrect: i % 4 === 1 },
              { text: `ตัวเลือก C`, isCorrect: i % 4 === 2 },
              { text: `ตัวเลือก D`, isCorrect: i % 4 === 3 },
            ],
          },
          Explanation: {
            create: {
              text: `คำอธิบายสำหรับข้อที่ ${i}`,
            },
          },
        },
      });
    }

    // 4. ให้ user ซื้อ Level N5
    const user1 = await prisma.user.findUnique({
      where: { email: "user1@gmail.com" },
    });

    await prisma.userPurchasedLevel.create({
      data: {
        userId: user1.id,
        jlptLevel: 'N5',
      }
    });

    console.log("✅ Seed data inserted successfully");

  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

run()