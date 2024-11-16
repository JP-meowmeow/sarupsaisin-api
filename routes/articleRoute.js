const express = require("express");
const articleRoute = express.Router();
const articleController = require("../controllers/articleController");
const upload = require("../middlewares/upload");
const authenticate = require("../middlewares/authenticate");
const isAdmin = require('../middlewares/isAdmin')

//article in showpage
articleRoute.get('/getallarticle',articleController.getAllArticles); // show in article page
articleRoute.get('/getarticle/:id',articleController.getArticle) // get data for that article
articleRoute.get('/getlatestarticle',articleController.getLatestArticle) // display latest article in side bar

//dashboard
articleRoute.get('/getarticledashboard',authenticate,articleController.getArticleDashboard) // show in dashboard


//article create update delete 
articleRoute.post("/uploadimage",authenticate,isAdmin,upload.single('link'), articleController.uploadImage);
articleRoute.get('/getarticle/edit/:id',authenticate,isAdmin,articleController.getEditArticle)//getdata for edit page
articleRoute.patch('/updatearticle/:id',authenticate,isAdmin,upload.single('link'),articleController.updateArticle)// edit article
articleRoute.delete('/deletearticle/:id',authenticate,isAdmin,articleController.deleteArticle)// delete article



module.exports = articleRoute;
