const prisma = require("../models/index");
const createError = require("../utils/createError");
const path = require("path");
const fs = require("fs/promises");
const cloudinary = require("../config/cloudinary");

// GET all books
exports.getAllBook = async (req, res, next) => {
  try {
    const books = await prisma.book.findMany();
    res.json({ books });
  } catch (err) {
    next(err);
  }
};

// GET book by ID
exports.getBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.findUnique({
      where: { id: +id },
    });
    if (!book) return next(createError(404, "Book not found"));
    res.json(book);
  } catch (err) {
    next(err);
  }
};

// POST create book
exports.createBook = async (req, res, next) => {
  try {
    const { bookTitle, shortDescription, longDescription, price } = req.body;
    const numericPrice = parseFloat(price);
    const { id: userId } = req.user;

    const files = req.files || {};
    let coverUrl = "";
    let sampleUrls = [];

    // Upload cover image
    if (files.link && files.link[0]) {
      const cover = files.link[0];
      const result = await cloudinary.uploader.upload(cover.path, {
        overwrite: true,
        public_id: path.parse(cover.path).name,
      });
      await fs.unlink(cover.path);
      coverUrl = result.secure_url;
    }

    // Upload sample pages
    if (files.samplePages && files.samplePages.length > 0) {
      for (const page of files.samplePages) {
        const result = await cloudinary.uploader.upload(page.path, {
          overwrite: true,
          public_id: path.parse(page.path).name,
        });
        await fs.unlink(page.path);
        sampleUrls.push(result.secure_url);
      }
    }

    const newBook = await prisma.book.create({
      data: {
        userId,
        bookTitle,
        shortDescription,
        longDescription,
        price: numericPrice,
        bookThumbnailLink: coverUrl,
        samplePages: sampleUrls, // store as JSON array
      },
    });

    res.json({ message: "Book created successfully", book: newBook });
  } catch (err) {
    next(err);
  }
};

// DELETE book
exports.deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.book.delete({ where: { id: +id } });
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    next(err);
  }
};
