const prisma = require("../models/index");
const createError = require("../utils/createError");

module.exports.isBuy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const result = await prisma.enrollment.findFirst({
      where: {
        courseId: +id,
        userId: user.id,
        status:'DONE'
      },
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports.buyCourseData = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await prisma.enrollment.findMany({
      where: {
        userId: user.id,
      },
      include:{
        course:{
          select:{
            id:true,
            shortDescription:true,
            courseName:true,
            courseThumbnailLink:true,
            price:true
          }
        }

      }
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
};
