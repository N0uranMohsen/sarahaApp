import { Message } from "../../../DB/models/message.model.js";
import { AppError } from "../../AppError.js";
import { catchError } from "../../middleware/catchError.js";

export const addMEssage =  catchError(async(req,res)=>{
    const msg = await Message.create(req.body)
    
    res.status(201).json({message:'message added successfully...'})

})


export const readMessage =catchError(async(req,res,next)=>{
    const msgs = await Message.find({receiverId:req.user._id}).populate('receiverId')
    if(!msgs)
        return next(new AppError('there is no messages'))
    res.json({message:'sucess',msgs})

})

export const deleteMessage = catchError(async(req,res,next)=>{
    const  msg = await Message.findOneAndDelete({$and:[{_id:req.params.id},{receiverId:req.user._id}]})
    if(!msg)
        return next(new AppError('this message not found or user not found',404))

    res.json({message:'delted sucessfully ...'})

})