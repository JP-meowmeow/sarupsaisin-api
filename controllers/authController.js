const prisma = require("../models/index");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const createError = require("../utils/createError");
const jwt = require("jsonwebtoken");
const transporter = require("../config/nodemailer");

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return next(createError(404, "No account with that email exists"));
    }

    // create reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 3600000);

    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpires: resetTokenExpiry,
      },
    });

    // Create reset URL
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      html: `
          <h3>You have requested a password reset</h3>
          <p>Here is the reset password link <a href="${resetUrl}">link</a> </p>
          <p>This link will expire in 1 hour</p>
          <p>ありがとうございます。</p>

        `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Password reset email sent" });
  } catch (err) {
    next(err);
  }
};

// Reset password
exports.resetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    // Find user by token
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        //   check if token valid or not
        resetPasswordExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return next(createError(400, "Invalid or expired reset token"));
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user's password and clear reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });

    res.json({ message: "Password has been reset" });
  } catch (err) {
    next(err);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { email, password, confirmPassword } = req.body;
    // validate
    if (!email || !password || !confirmPassword) {
      return createError(400, "Please fill all the data");
    }

    const findEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findEmail) {
      return createError(
        400,
        "This email is already exist このアドレスは登録済みです。"
      );
    }

    if (password !== confirmPassword) {
      return createError(
        400,
        "Password & Confirm Password do not match パスワードが一致しません。"
      );
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = {
      email: email,
      password: hashedPassword,
    };

    const result = await prisma.user.create({
      data: newUser,
    });

    res.json({ message: "Register successful" });
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return createError(400, "Please fill all the data");
    }

    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!findUser) {
      return createError(400, "Email or Password is not correct");
    }
    console.log(findUser);

    let checkPassword = await bcrypt.compare(password, findUser.password);
    if (!checkPassword) {
      return createError(400, "Email or Password is not correct");
    }

    const payload = {
      id: findUser.id,
      user: findUser.email,
      role: findUser.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.json({ token: token, user: findUser.email, role: findUser.role });
  } catch (err) {
    next(err);
  }
};
