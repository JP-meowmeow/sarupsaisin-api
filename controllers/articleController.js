const prisma = require("../models/index");
const createError = require("../utils/createError");

const path = require("path");
const fs = require("fs/promises");
const cloudinary = require("../config/cloudinary");

module.exports.getArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const articleData = await prisma.article.findUnique({
      where: {
        id: +id,
      },
    });
    console.log("test in article controller", articleData);
    res.json(articleData);
  } catch (err) {
    next(err);
  }
};

module.exports.getEditArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const articleData = await prisma.article.findUnique({
      where: {
        id: +id,
      },
    });
    console.log("test in article controller", articleData);
    res.json(articleData);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await prisma.article.delete({
      where: {
        id: +id,
      },
    });
    res.json({ message: "delete complete" });
  } catch (err) {
    next(err);
  }
};

module.exports.getArticleDashboard = async (req, res, next) => {
  try {
    const { id } = req.user;
    const response = await prisma.article.findMany({
      where: {
        userId: id,
      },
    });
    res.json({ response });
  } catch (err) {
    next(err);
  }
};

module.exports.getLatestArticle = async (req, res, next) => {
  try {
    const response = await prisma.article.findMany({
      orderBy: {
        createdDate: "desc",
      },
      take: 2,
    });
    res.json(response);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllArticles = async (req, res, next) => {
  try {
    const allArticle = await prisma.article.findMany();

    // console.log(allArticle);

    res.json({
      allArticle,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { header, detail } = req.body;
    const sanitizeHtml = require("sanitize-html");

    // ✅ sanitize HTML ที่ได้จาก React Quill
    const cleanDetail = sanitizeHtml(detail, {
      allowedTags: [
        "b",
        "i",
        "u",
        "strong",
        "p",
        "br",
        "ul",
        "ol",
        "li",
        "h1",
        "h2",
        "a",
      ],
      allowedAttributes: {
        a: ["href", "target", "rel"],
      },
      transformTags: {
        a: sanitizeHtml.simpleTransform("a", {
          rel: "noopener noreferrer",
          target: "_blank",
        }),
      },
    });

    const haveFile = !!req.file;
    let uploadResult = req.body.link;

    if (haveFile) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        overwrite: true,
        public_id: path.parse(req.file.path).name,
      });
      uploadResult = result.secure_url;
      fs.unlink(req.file.path);
    }

    const result = await prisma.article.update({
      where: {
        id: +id,
      },
      data: {
        articleName: header,
        articleDetails: cleanDetail,
        articleThumbnailLink: uploadResult,
      },
    });
    res.json({ message: "update this one" });
  } catch (err) {
    next(err);
  }
};

module.exports.uploadImage = async (req, res, next) => {
  try {
    // console.log(req.headers.authorization)
    // console.log("req.file", req.file);

    const haveFile = !!req.file;
    let uploadResult = {};

    if (haveFile) {
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        overwrite: true,
        public_id: path.parse(req.file.path).name,
      });
      fs.unlink(req.file.path);
    }
    // console.log("uploadResult", uploadResult.secure_url);

    const { header, detail, category } = req.body;
    const { id } = req.user;
    const sanitizeHtml = require("sanitize-html");

    // ✅ sanitize HTML ที่ได้จาก React Quill
    const cleanDetail = sanitizeHtml(detail, {
      allowedTags: [
        "b",
        "i",
        "u",
        "strong",
        "p",
        "br",
        "ul",
        "ol",
        "li",
        "h1",
        "h2",
        "a",
      ],
      allowedAttributes: {
        a: ["href", "target", "rel"],
      },
      transformTags: {
        a: sanitizeHtml.simpleTransform("a", {
          rel: "noopener noreferrer",
          target: "_blank",
        }),
      },
    });
    const result = await prisma.article.create({
      data: {
        articleName: header,
        articleDetails: cleanDetail,
        category: category,
        articleThumbnailLink: uploadResult.secure_url,
        userId: id,
      },
    });
    // console.log("result", result);

    res.json({ message: "created article successfully" });
  } catch (err) {
    next(err);
  }
};
