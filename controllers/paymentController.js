const prisma = require("../models/index");
const createError = require("../utils/createError");


const path = require("path");
const fs = require("fs/promises");
const cloudinary = require("../config/cloudinary");


module.exports.getCourse = async (req, res, next) => {
    try {
      const { id } = req.params;
      const courseData = await prisma.course.findUnique({
        where: {
          id: +id,
        },
      });
      if (!courseData) {
        return next(createError(404, "Course not found"));
      }
      res.json(courseData);
    } catch (err) {
      next(err);
    }
  };

  module.exports.sendSlip = async (req,res,next) =>{
    try{
        const { id } = req.params;
        const haveFile = !!req.file
        const user = req.user
        const {link} =req.body
        let uploadResult = {};
        console.log('user is here',user)
        if (haveFile) {
          uploadResult = await cloudinary.uploader.upload(req.file.path, {
            overwrite: true,
            public_id: path.parse(req.file.path).name,
          });
          fs.unlink(req.file.path);
        }

        const courseData = await prisma.enrollment.create({
          data: {
            userId: user.id,
            courseId:+id,
            slipLink:uploadResult.secure_url
          }
        });

        res.json({ message: "purchased course successfully" });
    }catch(err){
        next(err)
    }
  }