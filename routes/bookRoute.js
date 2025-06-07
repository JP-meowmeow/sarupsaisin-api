const express = require("express");
const bookRoute = express.Router();
const bookController = require("../controllers/bookController");
const authenticate = require("../middlewares/authenticate");
const isAdmin = require("../middlewares/isAdmin");
const upload = require("../middlewares/upload");

// Show page
bookRoute.get("/getallbook", bookController.getAllBook);
bookRoute.get("/:id", bookController.getBook);

// Dashboard / Admin
bookRoute.post(
  "/createbook",
  authenticate,
  isAdmin,
  upload.fields([
    { name: "link", maxCount: 1 },
    { name: "samplePages", maxCount: 10 },
  ]),
  bookController.createBook
);
bookRoute.delete(
  "/deletebook/:id",
  authenticate,
  isAdmin,
  bookController.deleteBook
);

module.exports = bookRoute;
