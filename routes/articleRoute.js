const express = require("express");
const articleRoute = express.Router();
const articleController = require("../controllers/articleController");
const upload = require("../middlewares/upload");
const authenticate = require("../middlewares/authenticate");

articleRoute.post("/uploadimage",authenticate,upload.single('link'), articleController.uploadImage);
articleRoute.get('/getallarticle',articleController.getAllArticles); // show in article page
articleRoute.get('/getarticle/:id',articleController.getArticle) // when click navigate to that article
articleRoute.get('/getlatestarticle',articleController.getLatestArticle) // display latest article in side bar
articleRoute.get('/getarticledashboard',authenticate,articleController.getArticleDashboard) // show in dashboard
articleRoute.delete('/deletearticle/:id',authenticate,articleController.deleteArticle)// delete article
articleRoute.patch('/updatearticle',()=>{})// edit article


module.exports = articleRoute;
