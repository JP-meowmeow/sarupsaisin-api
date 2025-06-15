// prisma/seedTests.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const passageImageUrl = "https://res.cloudinary.com/demo/image/upload/sample.jpg";
const testsPerLevel = 3;
const questionsPerTest = 10;
const passageQuestions = 3;

const jlptLevel = [
  {
    id: 17,
    level: "JLPTN5",
    freeTestId: null,
    description: "N5 : สามารถเข้าใจพื้นฐานภาษาญี่ปุ่นได้ในระดับหนึ่ง",
    definition: null,
    jlptThumbnail:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749882697/4_apagja.png",
  },
  {
    id: 18,
    level: "JLPTN4",
    freeTestId: null,
    description: "N4 : สามารถเข้าใจพื้นฐานภาษาญี่ปุ่นในระดับต้นได้",
    definition: null,
    jlptThumbnail:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749882698/6_wax0js.png",
  },
  {
    id: 19,
    level: "JLPTN3",
    freeTestId: null,
    description:
      "N3 : สามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ชีวิตประจำวันได้ในระดับหนึ่ง",
    definition: null,
    jlptThumbnail:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749882698/3_kjjdna.png",
  },
  {
    id: 20,
    level: "JLPTN2",
    freeTestId: null,
    description:
      "N2 : สามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ชีวิตประจำวันได้ และสามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ในวงกว้างได้ในระดับหนึ่ง",
    definition: null,
    jlptThumbnail:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749882699/5_xrmpcq.png",
  },
  {
    id: 21,
    level: "JLPTN1",
    freeTestId: null,
    description:
      "N1 : สามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ต่าง ๆ ในวงกว้างได้",
    definition: null,
    jlptThumbnail:
      "https://res.cloudinary.com/dhwgh6rof/image/upload/v1749908778/7_sqxogy.png",
  },
];

function getRandomChoices() {
  const correctIndex = Math.floor(Math.random() * 4);
  return Array.from({ length: 4 }).map((_, i) => ({
    text: `ตัวเลือก ${String.fromCharCode(65 + i)}`,
    isCorrect: i === correctIndex,
  }));
}

async function main() {
  await prisma.explanation.deleteMany();
  await prisma.choice.deleteMany();
  await prisma.question.deleteMany();
  await prisma.passage.deleteMany();
  await prisma.jlptTest.deleteMany();
  await prisma.jlptLevel.deleteMany();

  for (const lvl of jlptLevel) {
    await prisma.jlptLevel.upsert({
      where: { id: lvl.id },
      update: {
        description: lvl.description,
        jlptThumbnail: lvl.jlptThumbnail,
      },
      create: {
        id: lvl.id,
        level: lvl.level,
        description: lvl.description,
        jlptThumbnail: lvl.jlptThumbnail,
      },
    });

    for (let i = 1; i <= testsPerLevel; i++) {
      const test = await prisma.jlptTest.create({
        data: {
          name: `${lvl.level} 模擬試験 第${i}回`,
          price: i === 1 ? 0 : 299,
          jlptLevel: { connect: { id: lvl.id } },
        },
      });

      const passage = await prisma.passage.create({
        data: {
          number: 1,
          title: `${lvl.level} 読解文 第${i}回`,
          imageUrl: passageImageUrl,
          jlptTestId: test.id,
        },
      });

      for (let q = 1; q <= questionsPerTest; q++) {
        const isPassage = q > questionsPerTest - passageQuestions;
        const question = await prisma.question.create({
          data: {
            number: q,
            type: isPassage ? "READING" : "VOCAB",
            content: `คำถาม ${q} ของชุด ${i} (${lvl.level})`,
            jlptTestId: test.id,
            passageId: isPassage ? passage.id : null,
          },
        });

        for (const choice of getRandomChoices()) {
          await prisma.choice.create({
            data: {
              questionId: question.id,
              text: choice.text,
              isCorrect: choice.isCorrect,
            },
          });
        }

        await prisma.explanation.create({
          data: {
            questionId: question.id,
            text: `เฉลยของคำถาม ${q} ในชุด ${i} (${lvl.level})`,
          },
        });
      }
    }
  }

  console.log("✅ Seed mock tests ทุกระดับเรียบร้อยแล้ว!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
