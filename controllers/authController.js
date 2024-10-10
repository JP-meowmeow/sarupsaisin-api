const prisma = require ('../models/index')
const createError = require("../utils/createError")

module.exports.register = async (req,res,next)=>{
try{
    const {email,password,confirmPassword} = req.body
    // validate
    if(!email || !password ||!confirmPassword){
        return createError(400,'Please fill all the data')
    }

    // const findEmail = pris

    if(password !== confirmPassword){
        return createError(400,'Password and Confirm Password is not the same')
    }



}catch(err){
    createError(400,'error from register path')
}
} 

module.exports.register = async (req,res,next)=>{
try{

}catch(err){
    createError(400,'error from register path')
}
} 

module.exports.register = async (req,res,next)=>{
try{

}catch(err){
    createError(400,'error from register path')
}
} 