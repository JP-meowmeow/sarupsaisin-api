const express = require("express");
const jlptRoute = express.Router();
const authenticate = require("../middlewares/authenticate");
const jlptController = require("../controllers/jlptController");

//payment page

jlptRoute.get("/api/jlpt-tests/:level", jlptController.getJlptLevelData); //get course data for payment
jlptRoute.get("/api/jlpt-tests/:level/:testId", jlptController.getJlptTestData); //get course data for payment

module.exports = jlptRoute;
