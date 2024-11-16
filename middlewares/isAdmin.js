const createError = require("../utils/createError");
const jwt = require("jsonwebtoken");
const prisma = require("../models");


module.exports = async (req,res,next) =>{
    try{
        const token = req.user
        if (!token) {
             createError(401,"Unauthorized")
        } 
        if(token.role !== "ADMIN"){
            createError(401,"Unauthorized")
        }
        next()
    }catch(err){
        next(err)
    }
}
