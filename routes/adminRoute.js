const express = require("express")
const adminRoute = express.Router()
const adminController = require('../controllers/adminController')
const authenticate = require("../middlewares/authenticate")
const isAdmin = require('../middlewares/isAdmin')

adminRoute.get('/checkslip',authenticate,isAdmin,adminController.getSlipData)
adminRoute.get('/checkuser',authenticate,isAdmin,adminController.getUserData)
adminRoute.patch('/updatebuystatus',authenticate,isAdmin,adminController.updateBuyStatus)

module.exports = adminRoute