const express = require('express')
const authRoute = express.Router()
const authController = require('../controllers/authController')

authRoute.post('/register',authController.register)
authRoute.post('/login',authController.login)
authRoute.post('/forgot-password', authController.forgotPassword);
authRoute.post('/reset-password/:token', authController.resetPassword);

module.exports = authRoute