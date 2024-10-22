const express = require ("express")
const paymentRoute = express.Router()
const paymentController = require("../controllers/paymentController")
const upload = require("../middlewares/upload");
const authenticate = require("../middlewares/authenticate");



//payment page
paymentRoute.get('/:id',paymentController.getCourse)//get course data for payment
paymentRoute.post('/:id',authenticate,upload.single('link'),paymentController.sendSlip)//send slip to backend

module.exports = paymentRoute