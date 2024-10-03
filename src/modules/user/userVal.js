import Joi from "joi";



export const signupVal = Joi.object({
    username:Joi.string().required(),
    email : Joi.string().email().required(),
    password : Joi.string().pattern(/^[A-Z][\w @]{5,8}$/)
})


export const signinVal = Joi.object({

    email : Joi.string().email().required(),
    password : Joi.string().pattern(/^[A-Z][\w @]{5,8}$/)
})