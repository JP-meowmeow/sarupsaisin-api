const prisma = require ('../models/index')
const createError = require("../utils/createError")
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')

module.exports.register = async (req,res,next)=>{
try{
    const {email,password,confirmPassword} = req.body
    // validate
    if(!email || !password ||!confirmPassword){
        return createError(400,'Please fill all the data')
    }

    const findEmail = await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(findEmail){
        return createError(400,'This email is already exist このアドレスは登録済みです。')
    }

    if(password !== confirmPassword){
        return createError(400,'Password & Confirm Password do not match パスワードが一致しません。')
    }

    const hashedPassword = await bcrypt.hash(password,8)

    const newUser = {
        email : email,
        password : hashedPassword,
    }

    const result = await prisma.user.create({
        data:newUser
    })

    res.json({message:'Register successful'})
    
}catch(err){
    next(err)
}
} 

module.exports.login = async (req,res,next)=>{
try{
    const {email,password} = req.body

    if(!email || !password){
        return createError(400,'Please fill all the data')
    }

    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(!findUser){
        return createError(400,'Email or Password is not correct')
    }
    console.log(findUser)

    let checkPassword = await bcrypt.compare(password,findUser.password)
    if(!checkPassword){
        return createError(400,'Email or Password is not correct')
    }

    const payload = {
        id:findUser.id,
        user:findUser.email,
        role:findUser.role
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'30d'})
    res.json({token:token,user:findUser.email,role:findUser.role})

}catch(err){
    next(err)
}
} 
