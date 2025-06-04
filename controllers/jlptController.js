const prisma = require("../models/index");
const createError = require("../utils/createError");

module.exports.getJlptLevelData = async (req, res, next) => {
  const { level } = req.params;
  try {
    const levelData = await prisma.jlptLevel.findUnique({
      where: { level },
      include: {
        tests: true,
      },
    });

    if (!levelData) {
      return res.status(404).json({ message: "ไม่พบ Level ที่ต้องการ" });
    }

    res.json(levelData.tests);
  } catch (error) {
    next(error)
  }
};

module.exports.getJlptTestData = async(req,res,next)=>{
  const { testId } = req.params;
  try {
    const testData = await prisma.jlptTest.findUnique({
      where: { id: parseInt(testId) },
      include: {
        questions: {
          include: {
            choices: true,
            Explanation: true,
          },
        },
      },
    });

    if (!testData) {
      return res.status(404).json({ message: 'ไม่พบชุดข้อสอบ' });
    }

    res.json(testData.questions);
  } catch (error) {
    next(error);
  }
}
