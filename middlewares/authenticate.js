const createError = require("../utils/createError");
const jwt = require("jsonwebtoken");
const prisma = require("../models");

module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      createError(401, "Unauthorized 55");
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      createError(401, "Unauthorized 11");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const foundUser = await prisma.user.findUnique({
      where: { id: payload.id },
    });
    if (!foundUser) {
      createError(401, "Unauthorized 22");
    }
    // delete foundUser.password
    const { password, createdAt, updatedAt, ...userData } = foundUser;
    req.user = userData;
    next();
  } catch (err) {
    next(err);
  }
};
