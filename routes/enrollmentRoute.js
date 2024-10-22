const express = require ("express")
const enrollmentRoute = express.Router()
const authenticate = require("../middlewares/authenticate");
const enrollmentController = require('../controllers/enrollmentController')

//payment page
enrollmentRoute.get('/getuserbuycoursedata',authenticate,enrollmentController.buyCourseData)//get course data for payment
enrollmentRoute.get('/:id',authenticate,enrollmentController.isBuy)//get course data for payment

module.exports = enrollmentRoute