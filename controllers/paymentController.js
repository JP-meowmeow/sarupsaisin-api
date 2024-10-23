const prisma = require("../models/index");
const createError = require("../utils/createError");
const transporter = require("../config/nodemailer");

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

module.exports.sendSlip = async (req, res, next) => {
  try {
    const { id } = req.params;
    const haveFile = !!req.file;
    const user = req.user;
    const { CourseName,price } = req.body;
    let uploadResult = {};
    console.log("user is here", user);

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
        courseId: +id,
        slipLink: uploadResult.secure_url,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      
      subject: "Course Register Slip",
      html: `
              <div style="font-family: Arial, sans-serif;">
          <h3>New Course Registration Slip</h3>
          <p>Student Email: ${user.email}</p>
          <p>Course ID: ${id}</p>
          <p>Course Name: ${CourseName}</p>
          <p>Course Price: ${price} บาท</p>
          <p>Slip Link: <a href="${uploadResult.secure_url}">View Slip</a></p>
          <img src="${uploadResult.secure_url}" alt="Payment Slip" style="max-width: 500px;"/>
          <p>ありがとうございます。</p>
        </div>
    
            `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "purchased course successfully" });
  } catch (err) {
    next(err);
  }
};
