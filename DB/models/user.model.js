
import { model, Schema } from "mongoose";



const userSchema = new Schema({
    username:{
        type:String,
        required:true
    }
    ,
    email :{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
       //  match:[/^[A-Z][\w @]{5,8}$/,'password doesnt mactch the pattern  ']

    },
    otp:{
        type:String

    },
    otpExp : Date,
    confrimMail:{
        type:Boolean,
        default:false
    }

})


export const User = model('User',userSchema)