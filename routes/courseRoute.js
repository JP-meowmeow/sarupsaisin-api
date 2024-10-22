const express  = require ('express')
const courseRoute = express.Router()
const courseController = require('../controllers/courseController')
const authenticate = require ('../middlewares/authenticate')
const upload = require("../middlewares/upload");

//course in showpage
courseRoute.get('/getallcourse',courseController.getAllCourse)
courseRoute.get('/getcourse/:id',courseController.getCourse)

//dashboard
courseRoute.get('/getcoursedashboard',authenticate,courseController.getCourseDashboard)

//create edit delete course
courseRoute.post('/createcourse',authenticate,upload.single('link'),courseController.createCourse)
courseRoute.delete('/deletecourse/:id',authenticate,courseController.deleteCourse)
courseRoute.patch('/editcourse/:id',authenticate,upload.single('link'),courseController.updateCourse)


module.exports =  courseRoute