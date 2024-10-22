const express = require("express")
const adminRoute = express.Router()
const adminController = require('../controllers/adminController')

adminRoute.get('/checkslip',adminController.getSlipData)
adminRoute.get('/checkuser',adminController.getUserData)
adminRoute.patch('/updatebuystatus',adminController.updateBuyStatus)

module.exports = adminRoute