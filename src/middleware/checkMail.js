import { User } from "../../DB/models/user.model.js"

import bcrypt from 'bcrypt'


export const checkMail = async(req,res,next)=>{
    const isFound = await User.findOne({email:req.body.email})
    if(isFound)
        return res.status(409).json({message:'this mail is already exists'})

    req.body.password= bcrypt.hashSync(req.body.password,8)
    next()
}