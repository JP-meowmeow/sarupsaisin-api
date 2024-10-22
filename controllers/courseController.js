const prisma = require("../models/index");
const createError = require("../utils/createError");

//cloudinary upload thumbnail for course
const path = require("path");
const fs = require("fs/promises");
const cloudinary = require("../config/cloudinary");

//navigate to course detail page
module.exports.getAllCourse = async (req, res, next) => {
  try {
    const allCourse = await prisma.course.findMany();
    res.json({
      allCourse,
    });
  } catch (err) {
    next(err);
  }
};

// show course in course page
module.exports.getCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const courseData = await prisma.course.findUnique({
      where: {
        id: +id,
      },
      include: {
        unit: true,
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

//create edit delete course

module.exports.createCourse = async (req, res, next) => {
  try {
    // upload thumbnail

    const haveFile = !!req.file;
    let uploadResult = {};

    if (haveFile) {
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        overwrite: true,
        public_id: path.parse(req.file.path).name,
      });
      fs.unlink(req.file.path);
    }

    const { courseName, shortDescription, longDescription, price, units } = req.body;
    const parsedUnits = JSON.parse(units);
    const numericPrice = parseFloat(price);
    const result = await prisma.course.create({
      data: {
        courseName: courseName,
        shortDescription: shortDescription,
        longDescription: longDescription,
        price: numericPrice,
        courseThumbnailLink: uploadResult.secure_url,
        // user: req.user ? { connect: { id: req.user.id } } : undefined,
        unit: {
          create: parsedUnits.map((unit) => ({
            unitNumber: unit.unitNumber,
            title: unit.title,
            description: unit.description,
            youtubeLink: unit.youtubeLink,
          })),
        },
      },
      include: {
        unit: true,
      },
    });
    res.json({ message: "Course created successfully", course: result });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await prisma.course.delete({
      where: {
        id: +id,
      },
    });
    res.json({ message: "delete course complete" });
  } catch (err) {
    next(err);
  }
};

//for show data in edit page
module.exports.getEditCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const courseData = await prisma.course.findUnique({
      where: {
        id: +id,
      },
    });
    res.json({ editCourseData: "courseData" });
  } catch (err) {
    next(err);
  }
};

//to show course card in dashboard
module.exports.getCourseDashboard = async (req, res, next) => {
  try {
    const { id } = req.user;
    const response = await prisma.course.findMany({
      where: {
        userId: id,
      },
    });
    res.json({ response });
  } catch (err) {
    next(err);
  }
};

module.exports.updateCourse = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
