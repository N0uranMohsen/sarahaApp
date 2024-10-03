import { Router } from "express";
import { validate } from "../../middleware/validate.js";
import { signinVal, signupVal } from "./userVal.js";
import { checkMail } from "../../middleware/checkMail.js";
import { signin, signup, verifyOtp } from "./user.controller.js";


const userRouter =   Router()

userRouter.route('/signup').post(validate(signupVal),checkMail,signup)
userRouter.route('/verify').post(verifyOtp)
userRouter.route('/signin').post(validate(signinVal),signin)

export default userRouter