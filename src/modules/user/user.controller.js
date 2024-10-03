import { User } from "../../../DB/models/user.model.js"
import { sendEmail } from "../../../utils/email.js"
import { AppError } from "../../AppError.js"
import { catchError } from "../../middleware/catchError.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//signup 
export const signup = catchError(async(req,res)=>
    {
        const user = await User.create(req.body)

        user.password = undefined
        sendEmail(req.body.email)
        // user.otpExp= new Date(Date.now() + 10 * 60000) 

        // await user.save()
       res.status(201).json({message:'user signup sucess..',user})
    } )

    export const verifyOtp = catchError(async(req,res,next)=>{
        const find = await User.findOne({$and : [{email:req.body.email} ,{otp:req.body.otp}]})
        if(!find)
            return next (new AppError('invalid Otp',404))
        if(new Date()> find.otpExp)
            return next(new AppError('otp expired'))
            find.confrimMail=true;
            find.save()

        res.json({message:'email verified successfully...'})

    })

//signin

export const signin = catchError( async(req,res,next)=>{

 const user =await User.findOne({email:req.body.email})

 if(!user ||!bcrypt.compareSync(req.body.password,user.password))
    return next (new AppError('email or password are not valid'))

    jwt.sign({ _id : user._id ,  email : user.email }, 'Nouran' , async(err,token)=>{

        res.json({message:'user loged in sucessfully.. ',token})
    })


})