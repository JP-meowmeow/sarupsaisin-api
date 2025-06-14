const prisma = require("../models/index");
const createError = require("../utils/createError");


//heartbeat checking. prevent server down
module.exports.heartbeatChecking = async(req,res,next)=>{
  try{
    await prisma.user.findFirst();
    res.status(200).send("✅ DB is alive!");
  }
  catch(err){
    console.error("Heartbeat error:", error);
    res.status(500).send("❌ DB error.");
    next(err)
  }
}



// wait to confirm
module.exports.getSlipData = async (req, res, next) => {
  try {
    const slipData = await prisma.enrollment.findMany({
      where: {
        status: "PENDING",
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
        course: {
          select: {
            id: true,
            courseName: true,
          },
        },
      },
    });
    res.json(slipData);
  } catch (err) {
    next(err);
  }
};

//all member data
module.exports.getUserData = async (req, res, next) => {
  try {
    const userData = await prisma.user.findMany();
    res.json(userData);
  } catch (err) {
    next(err);
  }
};

//update buy status
module.exports.updateBuyStatus = async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log('received body',req.body)
    const result = await prisma.enrollment.update({
      where: {
        id: +id,
      },
      data: {
        status: "DONE",
      },
    });
    res.json({ message: "update status this one" });
  } catch (err) {
    next(err);
  }
};
